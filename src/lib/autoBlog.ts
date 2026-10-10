import dbConnect from "./mongodb";
import Blog from "@/models/Blog";
import { pingIndexNow } from "./indexnow";

/**
 * Tech digest publisher. No AI-written text is ever published:
 *  1. Gemini (Google Search grounding) is used ONLY to discover real, recent articles. Its prose is discarded.
 *  2. We fetch each article ourselves and keep the publisher's own title + meta description.
 *  3. The digest shows that excerpt with a prominent link and credit to the original.
 */

const HN = "https://hacker-news.firebaseio.com/v0";
const MIN_ITEMS = 3;
const MAX_ITEMS = 5;
const UA = "Mozilla/5.0 (compatible; PixarrowDigestBot/1.0; +https://pixarrow.com)";
const SKIP_HOSTS = /(^|\.)(youtube\.com|youtu\.be|twitter\.com|x\.com|facebook\.com|linkedin\.com|reddit\.com|news\.ycombinator\.com|pinterest\.com|instagram\.com|tiktok\.com)$/i;

interface Item {
  title: string;
  url: string;
  site: string;
  excerpt: string;
  published?: string;
}

const decode = (s: string) =>
  s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(parseInt(d, 10)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

async function resolveRedirect(url: string): Promise<string> {
  if (!url.includes("vertexaisearch.cloud.google.com")) return url;
  try {
    const res = await fetch(url, { redirect: "manual", signal: AbortSignal.timeout(5000) });
    return res.headers.get("location") || url;
  } catch {
    return url;
  }
}

/** Gemini is used purely as a search tool: we keep the URLs it grounded on, never its text. */
async function discoverWithGemini(): Promise<string[]> {
  const key = process.env.GEMINI_API_KEY;
  if (!key) throw new Error("GEMINI_API_KEY is not set");
  const model = process.env.GEMINI_MODEL || "gemini-2.5-flash";
  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-goog-api-key": key },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: "Search the web for the most talked-about software engineering, web development, mobile, cloud and AI news articles published in the last 48 hours. List 10 distinct articles from different reputable publishers or official engineering blogs.",
            },
          ],
        },
      ],
      tools: [{ google_search: {} }],
    }),
    signal: AbortSignal.timeout(45000),
  });
  if (!res.ok) throw new Error(`Gemini ${res.status}: ${(await res.text()).slice(0, 300)}`);
  const data = await res.json();
  const chunks: { web?: { uri: string } }[] = data.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
  return Promise.all(chunks.map((c) => c.web?.uri).filter((u): u is string => !!u).map(resolveRedirect));
}

/** Supplementary candidates: Hacker News front page links. */
async function discoverFromHN(): Promise<string[]> {
  try {
    const ids: number[] = await (await fetch(`${HN}/topstories.json`)).json();
    const items = await Promise.all(
      ids.slice(0, 25).map((id) => fetch(`${HN}/item/${id}.json`).then((r) => r.json()).catch(() => null))
    );
    return items.filter((i) => i?.url).map((i) => i.url as string);
  } catch {
    return [];
  }
}

function metaContent(html: string, names: string[]): string {
  const tags = html.match(/<meta\s[^>]*>/gi) || [];
  for (const name of names) {
    for (const tag of tags) {
      const key = /(?:property|name)\s*=\s*["']([^"']+)["']/i.exec(tag)?.[1]?.toLowerCase();
      if (key !== name) continue;
      const content = /content\s*=\s*"([^"]*)"|content\s*=\s*'([^']*)'/i.exec(tag);
      const value = decode((content?.[1] ?? content?.[2] ?? "").trim());
      if (value) return value;
    }
  }
  return "";
}

async function extractItem(url: string): Promise<Item | null> {
  try {
    const u = new URL(url);
    if (SKIP_HOSTS.test(u.hostname) || u.pathname === "/" || u.pathname.length < 4) return null;
    const res = await fetch(url, { headers: { "User-Agent": UA, Accept: "text/html" }, signal: AbortSignal.timeout(8000) });
    if (!res.ok || !(res.headers.get("content-type") || "").includes("text/html")) return null;
    const html = (await res.text()).slice(0, 400_000);

    const title = metaContent(html, ["og:title", "twitter:title"]) || decode(/<title[^>]*>([^<]*)<\/title>/i.exec(html)?.[1] || "").trim();
    let excerpt = metaContent(html, ["og:description", "description", "twitter:description"]).replace(/\s+/g, " ");
    if (!title || excerpt.length < 60) return null;
    if (excerpt.length > 300) excerpt = excerpt.slice(0, 300).replace(/\s+\S*$/, "") + "…";

    return {
      title: title.slice(0, 160),
      url: res.url || url,
      site: metaContent(html, ["og:site_name"]) || u.hostname.replace(/^www\./, ""),
      excerpt,
      published: metaContent(html, ["article:published_time"]) || undefined,
    };
  } catch {
    return null;
  }
}

export async function runAutoBlog() {
  await dbConnect();

  let candidates: string[] = [];
  let geminiError = "";
  try {
    candidates = await discoverWithGemini();
  } catch (e: any) {
    geminiError = e.message;
    console.error("Gemini discovery failed:", e);
  }
  candidates = [...new Set([...candidates, ...(await discoverFromHN())])];

  const items: Item[] = [];
  const seenSites = new Set<string>();
  for (const url of candidates) {
    if (items.length >= MAX_ITEMS) break;
    if (await Blog.exists({ "sources.url": url })) continue;
    const item = await extractItem(url);
    if (!item || seenSites.has(item.site)) continue;
    if (await Blog.exists({ "sources.url": item.url })) continue;
    seenSites.add(item.site);
    items.push(item);
  }
  if (items.length < MIN_ITEMS) {
    return { published: false, reason: `Only ${items.length} usable new articles found`, geminiError };
  }

  const today = new Date();
  const dateLabel = today.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
  const short = (s: string) => (s.length > 42 ? s.slice(0, 42).replace(/\s+\S*$/, "") + "…" : s);
  const title = `Tech Digest: ${short(items[0].title)} & More`;

  const body =
    `<p>The most talked-about engineering and technology stories of ${esc(dateLabel)}, collected from official blogs and trusted publishers. ` +
    `Each summary below is the publisher&#39;s own description. All credit belongs to the original authors, so please read the full articles at their sources.</p>` +
    items
      .map(
        (i) =>
          `<h3><a href="${esc(i.url)}" target="_blank" rel="nofollow noopener noreferrer">${esc(i.title)}</a></h3>` +
          `<p><em>Source: ${esc(i.site)}</em></p>` +
          `<blockquote>${esc(i.excerpt)}</blockquote>` +
          `<p><a href="${esc(i.url)}" target="_blank" rel="nofollow noopener noreferrer">Read the full article on ${esc(i.site)} &rarr;</a></p>`
      )
      .join("") +
    `<h3>Sources &amp; Credits</h3><ul>` +
    items.map((i) => `<li><a href="${esc(i.url)}" target="_blank" rel="nofollow noopener noreferrer">${esc(i.site)}</a>: ${esc(i.title)}</li>`).join("") +
    `</ul>`;

  const stamp = today.toISOString().slice(0, 10);
  const blog = await Blog.create({
    title,
    slug: `tech-digest-${stamp}-${Date.now().toString(36).slice(-4)}`,
    content: body,
    excerpt: `Today's top tech stories: ${items.map((i) => i.site).join(", ")}. Real headlines with links and credit to the original authors.`.slice(0, 200),
    metaTitle: title,
    metaDescription: `Curated tech news for ${dateLabel}: ${items.map((i) => short(i.title)).join("; ")}`.slice(0, 155),
    tags: ["Tech News", "Engineering", "Digest"],
    category: "Tech Trends",
    author: "Pixarrow Team",
    status: process.env.AUTO_BLOG_STATUS === "draft" ? "draft" : "published",
    sourceUrl: items[0].url,
    sources: items.map((i) => ({ title: i.title, url: i.url })),
    autoGenerated: true,
  });

  if (blog.status === "published") {
    try {
      await pingIndexNow(["/blog", `/blog/${blog.slug}`]);
    } catch (e) {
      console.error("IndexNow ping failed:", e);
    }
  }
  return { published: blog.status === "published", slug: blog.slug, title, items: items.length, geminiError: geminiError || undefined };
}

const MIN_GAP_MS = 20 * 60 * 60 * 1000;

/** Runs the digest unless one was already created in the last 20h (safe against double triggers / multiple instances). */
export async function runAutoBlogIfDue() {
  await dbConnect();
  const recent = await Blog.exists({ autoGenerated: true, createdAt: { $gt: new Date(Date.now() - MIN_GAP_MS) } });
  if (recent) return { published: false, reason: "A digest was already created in the last 20 hours" };
  return runAutoBlog();
}
