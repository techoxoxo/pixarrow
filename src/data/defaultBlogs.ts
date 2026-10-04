export interface BlogPostItem {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

export const defaultBlogs: BlogPostItem[] = [
  {
    slug: "sub-second-nextjs-16-architecture",
    title: "How We Engineered a Sub-0.7s LCP Next.js 16 Platform with Server Components",
    excerpt: "A deep dive into eliminating client-side hydration bottlenecks, streaming server components at the edge, and optimizing Core Web Vitals for enterprise search dominance.",
    category: "Next.js & Engineering",
    author: "Anuj Sharma",
    publishedAt: "2026-03-15",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200",
    tags: ["Next.js 16", "React 19", "Performance", "Core Web Vitals", "Edge Architecture"],
    featured: true,
    content: `
# How We Engineered a Sub-0.7s LCP Next.js 16 Platform

In the modern digital landscape, speed is not a vanity metric—it is direct revenue. Amazon found that every 100ms of latency cost them 1% in sales. Google measures Largest Contentful Paint (LCP) and Interaction to Next Paint (INP) as primary search ranking signals.

When engineering flagship web applications at Pixarrow, our baseline standard is sub-0.8s global LCP. Here is the architectural teardown of how we achieve this using Next.js 16 and React 19.

---

### 1. Eliminating Client-Side Hydration Bloat with React Server Components (RSC)
Traditional single-page applications send megabytes of JavaScript to the browser before anything can be rendered. With React Server Components:
- Heavy parsing libraries, markdown compilers, and database queries execute solely on serverless edge nodes.
- Zero extra JavaScript is downloaded by the client device.
- HTML and serialized component state are streamed progressively using HTTP chunked transfer.

---

### 2. Intelligent Data Streaming with Suspense Boundaries
Rather than blocking the entire page on slow API queries, we wrap data-heavy components inside \`<Suspense>\` boundaries:
\`\`\`tsx
export default function DashboardPage() {
  return (
    <div className="grid grid-cols-12 gap-6">
      <Suspense fallback={<MetricsSkeleton />}>
        <RealtimeMetrics />
      </Suspense>
      <Suspense fallback={<TableSkeleton />}>
        <TransactionFeed />
      </Suspense>
    </div>
  );
}
\`\`\`
This allows the critical above-the-fold UI shell to render in less than 200ms, while real-time data streams in seamlessly.

---

### 3. Edge Caching & Stale-While-Revalidate Protocols
By combining Vercel Edge Middleware with Redis caching layers, static pages are cached at 300+ global Points of Presence (PoP), delivering response times under 50ms worldwide.
    `
  },
  {
    slug: "scaling-shopify-plus-headless-4m-gmv",
    title: "Scaling Headless Shopify Plus to $4.2M GMV with Zero Third-Party App Bloat",
    excerpt: "Why traditional Shopify themes break under scale, and how headless Hydrogen + Next.js delivers 38% higher average order values and instant checkout speed.",
    category: "Shopify & eCommerce",
    author: "Ankit Rajput",
    publishedAt: "2026-03-08",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&q=80&w=1200",
    tags: ["Shopify Plus", "Hydrogen", "Headless", "CRO", "eCommerce"],
    featured: false,
    content: `
# Scaling Headless Shopify Plus to $4.2M GMV with Zero App Bloat

Direct-to-consumer eCommerce brands frequently hit a conversion plateau. They add 20+ Shopify plugins for product reviews, popups, currency converters, and loyalty badges. The result? Total page weight explodes past 8MB, and mobile bounce rates skyrocket to 65%.

At Pixarrow, we replace app bloat with bespoke headless engineering.

---

### The Headless Advantage
1. **Instant Catalog Browsing**: Pre-rendered product routes with instant client-side prefetching.
2. **Unified Custom Cart**: Built-in 1-click upsells, threshold progress bars, and bundle discounts engineered natively into a lightweight React cart drawer.
3. **Seamless Omnichannel Sync**: Automated webhooks connecting Shopify with ERPs and warehouse management systems.
    `
  },
  {
    slug: "agentic-ai-production-rag-pgvector",
    title: "Agentic AI in Production: Building Autonomous Multi-Agent Tool Workflows with RAG",
    excerpt: "Moving beyond simple ChatGPT wrappers. How to implement enterprise multi-agent architectures using LangGraph, pgvector embeddings, and deterministic guardrails.",
    category: "Agentic AI",
    author: "Anuj Sharma",
    publishedAt: "2026-02-28",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
    tags: ["Agentic AI", "LLMs", "RAG", "Python", "LangGraph", "pgvector"],
    featured: false,
    content: `
# Agentic AI in Production: Multi-Agent Workflows & RAG

Simple chatbots that answer generic questions are obsolete. Enterprise software demands Agentic AI—autonomous systems that can plan multi-step workflows, query private SQL databases, execute API tool calls, and verify outputs before returning them to users.

---

### Key Architectural Pillars
1. **Private Vector Search with pgvector**: Storing 1536-dimensional embeddings inside enterprise PostgreSQL databases with row-level security.
2. **LangGraph State Machines**: Structuring agent decision trees as deterministic directed graphs to avoid infinite prompt loops.
3. **Hallucination Guardrails**: Output evaluation models that cross-reference every generated sentence against retrieved source chunks before delivery.
    `
  },
  {
    slug: "high-roas-cro-playbook-2026",
    title: "The High-ROAS Conversion Rate Optimization (CRO) Playbook for High-Ticket Brands",
    excerpt: "Mathematical frameworks, micro-interaction psychology, and checkout friction reducers that turned $40M+ in ad spend into record-breaking customer acquisitions.",
    category: "CRO & Growth",
    author: "Ankit Rajput",
    publishedAt: "2026-02-18",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    tags: ["CRO", "Performance Marketing", "Paid Ads", "Growth", "A/B Testing"],
    featured: false,
    content: `
# The High-ROAS CRO Playbook for High-Ticket Brands

Running paid traffic to a generic landing page is the fastest way to burn capital. When managing multi-million dollar ad budgets, conversion rate optimization (CRO) is the multiplier that doubles profit margins without increasing ad spend.

---

### The 4 Pillars of High-Converting Funnels
1. **Zero-Friction Hero Fold**: Immediate value proposition clarity, quantifiable social proof, and a 24-hour response guarantee.
2. **Interactive Scope Estimators**: Replacing intimidating static contact forms with engaging multi-step quizzes.
3. **Explicit Risk Reversal**: Displaying signed NDA guarantees, money-back trials, and full IP ownership badges.
    `
  }
];
