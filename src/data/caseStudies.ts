export interface CaseStudy {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  fullDescription: string;
  category: string;
  filterCategory: "Mobile" | "FinTech" | "eCommerce" | "Media";
  year: string;
  image: string;
  metricHighlight: string;
  techStack: string[];
  stats: { label: string; value: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "cahrz",
    title: "Cahrz",
    subtitle: "On-Demand Vehicle Care & Detailing Ecosystem",
    description: "On-demand professional car wash and detailing mobile application connecting vehicle owners with vetted detailing technicians.",
    fullDescription: "Cahrz is a high-performance mobile app designed to elevate vehicle aesthetics through meticulous hand washing and protective detailing services. It offers a seamless real-time booking experience for users with automated route dispatch and a dedicated vendor management dashboard.",
    category: "Mobile App / Service",
    filterCategory: "Mobile",
    year: "2025",
    image: "/cahrz.png",
    metricHighlight: "+150% Booking Jump",
    techStack: ["React Native", "Node.js", "Firebase", "Stripe", "PostgreSQL", "Google Maps API"],
    stats: [
      { label: "Conversion Lift", value: "+150%" },
      { label: "Active Users", value: "85K+ MAU" },
      { label: "App Store Rating", value: "4.9 ★" },
    ],
  },
  {
    slug: "shucae-films",
    title: "Shucae Films",
    subtitle: "High-Throughput OTT Video Streaming Architecture",
    description: "A comprehensive OTT streaming platform and film production studio delivering ultra-low-latency 4K video content globally.",
    fullDescription: "Shucae Films provides an interactive streaming platform for movies, web series, and live entertainment. Featuring adaptive bitrate HLS video streaming, automated subscription management, and localized CDN caching across 4 continents.",
    category: "Entertainment & Media",
    filterCategory: "Media",
    year: "2024",
    image: "/Shucae.png",
    metricHighlight: "< 1.2s Global CDN Latency",
    techStack: ["Next.js 16", "AWS CloudFront", "Fastify", "Redis", "HLS Video", "Stripe"],
    stats: [
      { label: "Engagement Jump", value: "+180%" },
      { label: "Streams Processed", value: "500K+" },
      { label: "Streaming Latency", value: "< 1.2s" },
    ],
  },
  {
    slug: "ausloan",
    title: "AusLoan Services",
    subtitle: "Next-Gen Asset Finance & Lender Aggregator",
    description: "Australia’s premier asset finance brokerage and aggregator connecting consumers and businesses with 40+ institutional lenders.",
    fullDescription: "AusLoan leverages its proprietary 'Zink' fintech engine to automate loan applications, instant bank statement verification, and automated broker routing, shrinking approval turnarounds from days to minutes.",
    category: "Fintech / Finance",
    filterCategory: "FinTech",
    year: "2025",
    image: "/Screenshot-2026-02-09-040716.png",
    metricHighlight: "$18M+ Loan Volume",
    techStack: ["Next.js", "TypeScript", "NestJS", "Bank Feeds API", "PostgreSQL", "AWS"],
    stats: [
      { label: "Lead Approvals", value: "+220%" },
      { label: "Lender Panel", value: "40+ Integrated" },
      { label: "Approval Time", value: "< 4 Mins" },
    ],
  },
  {
    slug: "scissor-wala",
    title: "Scissor Wala",
    subtitle: "High-AOV Headless eCommerce Storefront",
    description: "Precision-crafted professional hairdressing tools and Japanese steel shears with custom engraving and 1-click checkout.",
    fullDescription: "An Australian-owned direct-to-consumer eCommerce flagship delivering ergonomic, hand-forged barber shears. Engineered with a headless Next.js frontend on Shopify Plus, interactive engraving preview, and zero third-party plugin bloat.",
    category: "eCommerce",
    filterCategory: "eCommerce",
    year: "2025",
    image: "/scissor.png",
    metricHighlight: "+110% Revenue Growth",
    techStack: ["Shopify Plus", "Next.js", "Hydrogen", "Tailwind CSS", "Klaviyo", "Stripe"],
    stats: [
      { label: "Revenue Lift", value: "+110%" },
      { label: "Orders Shipped", value: "10,000+" },
      { label: "Checkout Conversion", value: "4.8%" },
    ],
  },
  {
    slug: "punjab-newsline",
    title: "Punjab Newsline",
    subtitle: "High-Concurrency Digital Publishing Portal",
    description: "Dynamic and independent news portal engineered for 2.4M+ monthly global readers with sub-second LCP and edge caching.",
    fullDescription: "Punjab Newsline delivers breaking regional and global news across politics, agriculture, culture, and business. Built with hybrid ISR edge rendering to effortlessly handle massive traffic surges during live breaking events.",
    category: "Media & News",
    filterCategory: "Media",
    year: "2026",
    image: "/pnl.png",
    metricHighlight: "2.4M Monthly Readers",
    techStack: ["Next.js", "Redis Edge Cache", "Node.js", "Algolia", "Cloudflare", "Tailwind"],
    stats: [
      { label: "Traffic Growth", value: "+200%" },
      { label: "Monthly Readers", value: "2.4M+" },
      { label: "Global LCP", value: "0.6s" },
    ],
  },
  {
    slug: "brisbane-taxation",
    title: "Brisbane Business & Taxation",
    subtitle: "Strategic Wealth Engineering & Advisory Portal",
    description: "Strategic financial advisory portal for high-net-worth individuals and corporate entities with automated intake workflows.",
    fullDescription: "Led by a Chartered Accountant with 30+ years of cross-industry exposure. Features bespoke financial calculators, secure client portal for sensitive document exchange, and automated discovery scheduling.",
    category: "Accounting & Financial Advisory",
    filterCategory: "FinTech",
    year: "2024",
    image: "/Screenshot-2026-02-07-184834.png",
    metricHighlight: "+180% High-Ticket Inquiries",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Calendly Sync", "Supabase", "Vercel"],
    stats: [
      { label: "Inquiry Lift", value: "+180%" },
      { label: "Asset Advisory", value: "$45M+" },
      { label: "Strategy Alignment", value: "100%" },
    ],
  },
];
