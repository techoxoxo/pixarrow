import dbConnect from "@/lib/mongodb";
import Blog from "@/models/Blog";

export async function GET() {
  try {
    await dbConnect();
    const blogs = await Blog.find({ status: "published" })
      .sort({ publishedAt: -1 })
      .limit(20)
      .lean();

    const siteUrl = "https://pixarrow.com";

    const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Pixarrow Insights</title>
    <link>${siteUrl}/blog</link>
    <description>Latest insights on Next.js engineering, UI/UX design, and digital growth by Pixarrow.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    ${blogs
      .map((blog: any) => {
        return `
    <item>
      <title><![CDATA[${blog.title}]]></title>
      <link>${siteUrl}/blog/${blog.slug}</link>
      <guid>${siteUrl}/blog/${blog.slug}</guid>
      <pubDate>${new Date(blog.publishedAt || blog.createdAt).toUTCString()}</pubDate>
      <description><![CDATA[${blog.excerpt || ""}]]></description>
    </item>`;
      })
      .join("")}
  </channel>
</rss>`;

    return new Response(rssFeed, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "s-maxage=86400, stale-while-revalidate",
      },
    });
  } catch (error) {
    console.error("RSS generation failed:", error);
    return new Response("Error generating RSS feed", { status: 500 });
  }
}
