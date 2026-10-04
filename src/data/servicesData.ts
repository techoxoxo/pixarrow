export interface ServiceDetail {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  badge: string;
  heroDescription: string;
  roiStats: { label: string; value: string; desc: string }[];
  deliverables: { title: string; desc: string; iconName: string }[];
  techStack: string[];
  processSteps: { step: string; title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
}

export const servicesData: Record<string, ServiceDetail> = {
  "nextjs-development": {
    slug: "nextjs-development",
    title: "Next.js Web Application & SaaS Engineering",
    subtitle: "Enterprise-grade web engineering engineered for sub-second speeds and ultra-high conversion.",
    tagline: "Ultra-Fast Edge Architecture",
    badge: "Next.js 16 • React 19 • Server Components",
    heroDescription: "We engineer mission-critical Next.js web applications, portals, and SaaS platforms. Built with React Server Components, TypeScript, Fastify/NestJS backends, and global edge CDNs for peak Core Web Vitals and unmatched user retention.",
    roiStats: [
      { label: "Core Web Vitals", value: "0.6s LCP", desc: "Sub-second global render speed" },
      { label: "Conversion Lift", value: "+185%", desc: "Average organic conversion increase" },
      { label: "High-Load Uptime", value: "99.99%", desc: "Zero-downtime serverless architecture" },
      { label: "Infrastructure ROI", value: "-60%", desc: "Reduced server & cloud computing bills" }
    ],
    deliverables: [
      {
        title: "React Server Components & SSR",
        desc: "Instant data streaming, zero client-side hydration delays, and dynamic metadata for #1 Google rankings.",
        iconName: "Globe"
      },
      {
        title: "Custom SaaS & Enterprise Portals",
        desc: "Multi-tenant database architectures, RBAC permission matrices, and real-time analytical dashboards.",
        iconName: "Layers"
      },
      {
        title: "Microservices & High-Speed APIs",
        desc: "REST & GraphQL architectures powered by Node.js, NestJS, Python Fastify, and Redis caching.",
        iconName: "Cpu"
      },
      {
        title: "Bank-Grade Security & SOC 2 Ready",
        desc: "End-to-end data encryption, CSRF protection, rate-limiting shields, and ISO 27001 compliant workflows.",
        iconName: "ShieldCheck"
      }
    ],
    techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Node.js", "NestJS", "PostgreSQL", "Supabase", "Redis", "AWS Lambda", "Vercel Edge"],
    processSteps: [
      { step: "01", title: "Architecture & ERD Blueprint", desc: "Comprehensive database schema design, wireframing, and performance benchmarking." },
      { step: "02", title: "Agile Sprint Development", desc: "Two-week milestone sprints with weekly staging deployments and code reviews." },
      { step: "03", title: "Stress Testing & QA Automation", desc: "Load testing up to 100k concurrent requests, automated E2E tests, and security audits." },
      { step: "04", title: "Global Edge Deployment & SLA", desc: "Zero-downtime production deployment with 24/7 uptime monitoring and guarantees." }
    ],
    faqs: [
      {
        question: "Why should we choose Next.js over traditional single-page React apps?",
        answer: "Next.js provides hybrid static rendering (SSG) and Server-Side Rendering (SSR) along with React Server Components. This eliminates massive bundle sizes, delivers instant Largest Contentful Paint (<0.8s), and gives your app superior Google search engine indexation."
      },
      {
        question: "How do you guarantee project delivery timelines?",
        answer: "Every project operates with fixed sprint deliverables, signed milestone SLAs, and dedicated Slack channels with our Lead Architect. We offer a 100% on-time delivery guarantee."
      },
      {
        question: "Do we get full ownership of the source code and IP?",
        answer: "Yes, 100%. Upon completion and milestone approval, full source code repositories, documentation, architecture diagrams, and intellectual property rights are transferred to your organization."
      }
    ]
  },

  "mobile-app-development": {
    slug: "mobile-app-development",
    title: "iOS, Android & React Native Mobile Engineering",
    subtitle: "Fluid 60FPS mobile applications built for viral retention and flawless scalability.",
    tagline: "Cross-Platform Precision",
    badge: "iOS • Android • React Native • Flutter",
    heroDescription: "We design and develop high-performance mobile apps that engage millions of users. Combining native device capabilities with React Native and Flutter frameworks to achieve 2x faster time-to-market without compromising 60FPS smoothness.",
    roiStats: [
      { label: "App Store Rating", value: "4.9 ★", desc: "Average client app store satisfaction" },
      { label: "Crash-Free Sessions", value: "99.95%", desc: "Rigorous automated E2E testing" },
      { label: "User Retention Lift", value: "+140%", desc: "Engineered micro-interactions & push funnels" },
      { label: "Time to Market", value: "5 Weeks", desc: "Fast-track MVP launch cycles" }
    ],
    deliverables: [
      {
        title: "Cross-Platform React Native Apps",
        desc: "Single high-performance codebase powering iOS and Android with 100% native feel.",
        iconName: "Smartphone"
      },
      {
        title: "Offline-First Data Sync",
        desc: "Local SQLite/WatermelonDB persistence with seamless background sync when network reconnects.",
        iconName: "Database"
      },
      {
        title: "In-App Purchases & Subscriptions",
        desc: "RevenueCat and native Apple/Google Pay integrations with fraud-prevention server webhooks.",
        iconName: "ShoppingBag"
      },
      {
        title: "Real-Time Push & Geofencing",
        desc: "Custom Firebase/OneSignal push notification pipelines and real-time location triggers.",
        iconName: "Zap"
      }
    ],
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "TypeScript", "Firebase", "RevenueCat", "Redux Toolkit", "Fastlane", "AWS AppSync"],
    processSteps: [
      { step: "01", title: "UX Flow & Interactive Prototype", desc: "Figma interactive design system optimized for iOS Human Interface & Material Design guidelines." },
      { step: "02", title: "Core Engine & Offline State", desc: "Building local caching, authentication, and state management architecture." },
      { step: "03", title: "Device Matrix Testing", desc: "Automated testing across 30+ physical iOS and Android screen resolutions." },
      { step: "04", title: "App Store & Google Play Launch", desc: "Guaranteed app store approval, privacy compliance clearance, and live monitoring." }
    ],
    faqs: [
      {
        question: "How do you ensure the app passes Apple App Store and Google Play reviews?",
        answer: "We adhere strictly to Apple App Store Review Guidelines and Google Play Developer Policies. We handle the complete submission, compliance declarations (privacy nutritional labels, data safety forms), and guarantee approval."
      },
      {
        question: "Can we build for both iOS and Android simultaneously?",
        answer: "Yes! Using React Native and Flutter, we develop a unified codebase that shares 90%+ of business logic while maintaining pixel-perfect native animations on both platforms, cutting development costs by up to 45%."
      }
    ]
  },

  "agentic-ai-automations": {
    slug: "agentic-ai-automations",
    title: "Agentic AI, LLM Integration & Enterprise Automations",
    subtitle: "Transform manual operational bottlenecks into autonomous 24/7 intelligent workflows.",
    tagline: "Autonomous Agent Intelligence",
    badge: "GenAI • LLMs • RAG Pipelines • n8n Automations",
    heroDescription: "We build tailored AI agents, multi-modal LLM applications, custom RAG (Retrieval-Augmented Generation) knowledge bases, and enterprise automations using OpenAI, Anthropic Claude, LangChain, and n8n to automate complex workflows.",
    roiStats: [
      { label: "Operational Cost Reduction", value: "-75%", desc: "Automating repetitive workflows" },
      { label: "Response Latency", value: "< 400ms", desc: "Optimized semantic caching & embeddings" },
      { label: "Data Accuracy", value: "99.4%", desc: "Grounded RAG with hallucination guardrails" },
      { label: "Autonomous Throughput", value: "100k+/day", desc: "Automated documents & customer actions" }
    ],
    deliverables: [
      {
        title: "Autonomous Agentic AI Workflows",
        desc: "Multi-agent systems (CrewAI, LangGraph) that plan, execute tool calls, and resolve complex business tasks.",
        iconName: "Cpu"
      },
      {
        title: "Enterprise RAG & Private Vector Search",
        desc: "Secure document Q&A and semantic knowledge retrieval with Pinecone, pgvector, and zero data leakage.",
        iconName: "Database"
      },
      {
        title: "Custom LLM Fine-Tuning & Prompt Pipelines",
        desc: "Fine-tuned models tailored to your industry terminology with deterministic guardrails.",
        iconName: "Sparkles"
      },
      {
        title: "n8n & Zapier Enterprise Orchestration",
        desc: "Connecting your CRM, ERP, email, and databases into self-healing automated trigger loops.",
        iconName: "Zap"
      }
    ],
    techStack: ["OpenAI GPT-4o", "Anthropic Claude", "LangChain", "LangGraph", "Pinecone", "pgvector", "Python", "FastAPI", "n8n", "Docker", "AWS SageMaker"],
    processSteps: [
      { step: "01", title: "AI Feasibility & Data Audit", desc: "Analyzing operational workflows and mapping private data sources for indexing." },
      { step: "02", title: "RAG & Agent Pipeline Build", desc: "Implementing vector chunking, semantic search, prompt chaining, and evaluation loops." },
      { step: "03", title: "Guardrails & Safety Testing", desc: "Stress-testing for hallucinations, prompt injections, and data compliance." },
      { step: "04", title: "Production Orchestration", desc: "Deploying high-throughput serverless endpoints with streaming UI components." }
    ],
    faqs: [
      {
        question: "Is our proprietary company data secure and confidential?",
        answer: "Absolutely. We enforce zero-retention API policies with enterprise agreements, utilize private VPC pgvector databases, and ensure no customer data is ever used to train public models."
      },
      {
        question: "What is the difference between simple chatbots and Agentic AI?",
        answer: "Simple chatbots only answer questions based on static prompts. Agentic AI can reason, access private databases, trigger API actions (e.g., creating an invoice, booking a demo, querying SQL), and execute multi-step business processes autonomously."
      }
    ]
  },

  "ecommerce-growth-engineering": {
    slug: "ecommerce-growth-engineering",
    title: "Shopify Plus & Headless eCommerce Engineering",
    subtitle: "High-converting online stores engineered for maximum average order value and scale.",
    tagline: "High-AOV Conversion Engineering",
    badge: "Shopify Plus • Headless Commerce • Custom Apps",
    heroDescription: "We build bespoke Shopify Plus and headless commerce storefronts that turn visitors into loyal repeat buyers. Featuring 1-click checkout optimizations, custom product customizers, ERP inventory syncs, and advanced CRO funnels.",
    roiStats: [
      { label: "Checkout Conversion", value: "+120%", desc: "Streamlined checkout funnels" },
      { label: "Average Order Value (AOV)", value: "+38%", desc: "Smart AI upsells & bundle logic" },
      { label: "Mobile Page Speed", value: "0.7s", desc: "Ultra-fast mobile catalog browsing" },
      { label: "Annual GMV Processed", value: "$45M+", desc: "Proven track record across brands" }
    ],
    deliverables: [
      {
        title: "Shopify Plus Custom Architecture",
        desc: "Custom Liquid & Hydrogen headless themes engineered for blazing speed and zero app bloat.",
        iconName: "ShoppingBag"
      },
      {
        title: "Custom 3D & 2D Product Customizers",
        desc: "Interactive visual builders enabling customers to personalize apparel, jewellery, and gear.",
        iconName: "Sparkles"
      },
      {
        title: "ERP, WMS & Turn14 API Integrations",
        desc: "Real-time bi-directional sync of product catalogs, multi-warehouse inventory, and tracking numbers.",
        iconName: "Layers"
      },
      {
        title: "Conversion Rate Optimization (CRO)",
        desc: "Data-backed A/B testing on product pages, sticky add-to-cart, post-purchase upsells, and loyalty tiers.",
        iconName: "Zap"
      }
    ],
    techStack: ["Shopify Plus", "Hydrogen", "Liquid", "Next.js Commerce", "Klaviyo", "Gorgias", "Stripe", "Sanity CMS", "Algolia Search"],
    processSteps: [
      { step: "01", title: "Conversion Audit & Journey Mapping", desc: "Heatmap analysis, drop-off point diagnostics, and UX checkout wireframing." },
      { step: "02", title: "Custom Storefront Engineering", desc: "Developing lightweight, zero-bloat code with instant search and dynamic cart logic." },
      { step: "03", title: "ERP & App Ecosystem Integration", desc: "Connecting 3PL logistics, ERPs, CRM email funnels, and customer review widgets." },
      { step: "04", title: "Go-Live & Traffic Scalability Testing", desc: "Load-testing flash sale readiness and executing smooth domain transitions with 0 SEO loss." }
    ],
    faqs: [
      {
        question: "Can you migrate our store from WooCommerce or Magento to Shopify Plus?",
        answer: "Yes! We specialize in complex eCommerce migrations. We migrate 100% of customer accounts, historical order data, product variants, and set up 301 redirect maps to ensure you preserve all Google SEO rankings."
      },
      {
        question: "How do you improve store conversion rates?",
        answer: "We focus on removing mobile checkout friction, optimizing page speed under 1 second, engineering high-converting product detail pages (PDPs), and implementing strategic cross-sell/bundle drawers."
      }
    ]
  }
};
