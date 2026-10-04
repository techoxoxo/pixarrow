import dbConnect from "./mongodb";
import SEO from "@/models/SEO";
import { Metadata } from "next";

const defaultRouteMetadata: Record<string, { title: string; description: string; keywords: string[] }> = {
  "/": {
    title: "Pixarrow — Premium Digital Growth & Web Engineering Agency",
    description: "Pixarrow is an elite digital growth and web engineering agency transforming startups into market leaders with Next.js 16 architectures, React Native mobile apps, agentic AI workflows, and conversion-first UI/UX design.",
    keywords: ["digital growth agency", "nextjs web development", "react native mobile apps", "agentic ai engineering", "ui ux design studio", "shopify plus developers", "high performance web agency"]
  },
  "/work": {
    title: "Selected Case Studies & Web Engineering Portfolio | Pixarrow",
    description: "Explore our flagship engineering case studies across Next.js 16 portals, React Native apps, high-AOV headless Shopify Plus storefronts, and automated AI systems.",
    keywords: ["web development portfolio", "nextjs case studies", "react native showcase", "headless ecommerce examples", "software engineering portfolio"]
  },
  "/services": {
    title: "Core Engineering Capabilities & Growth Solutions | Pixarrow",
    description: "Full-stack Next.js web applications, iOS/Android mobile engineering, autonomous agentic AI workflows, Shopify Plus headless commerce, and conversion optimization.",
    keywords: ["nextjs web development", "mobile app engineering", "agentic ai solutions", "shopify plus development", "conversion rate optimization"]
  },
  "/about": {
    title: "About Pixarrow — The Growth & Web Engineering Architects",
    description: "Meet the founders and engineering leads behind Pixarrow: Anuj Sharma (CTO) and Ankit Rajput (CSO). We build scalable digital platforms with startup velocity.",
    keywords: ["pixarrow founders", "anuj sharma cto", "ankit rajput cso", "about pixarrow", "web engineering agency founders"]
  },
  "/blog": {
    title: "Engineering Blueprints, Architecture Insights & Tech Blog | Pixarrow",
    description: "Deep-dive technical blueprints, Next.js 16 best practices, mobile development guides, agentic AI pipelines, and digital growth strategies from Pixarrow engineers.",
    keywords: ["nextjs 16 blog", "web architecture blueprints", "react native tutorials", "agentic ai guides", "ecommerce growth insights"]
  },
  "/calculator": {
    title: "Interactive Project Scope & Budget Calculator | Pixarrow",
    description: "Calculate your technical scope, target timeline, and budget estimate in 2 minutes. Receive a customized architectural blueprint and sprint breakdown.",
    keywords: ["web development cost calculator", "app development estimate", "project budget calculator", "software development pricing"]
  },
  "/book": {
    title: "Book a 30-Minute Architecture & Growth Strategy Call | Pixarrow",
    description: "Schedule a direct strategy call with our Lead Architect and Partners. Get a comprehensive technical review, ERD blueprint, and project roadmap.",
    keywords: ["schedule strategy session", "hire web developers", "book architecture call", "pixarrow discovery session"]
  },
  "/hire-developers": {
    title: "Hire Dedicated Next.js & Full-Stack Engineering Pods | Pixarrow",
    description: "Hire pre-vetted senior Next.js, React Native, Python, and AI engineers with flexible monthly engagement models, 15-day risk-free trial, and direct Slack access.",
    keywords: ["hire nextjs developers", "dedicated engineering pod", "hire react native developers", "hire full stack engineers", "staff augmentation"]
  },
  "/process": {
    title: "Engineering Process, Sprint Methodology & SLA Guarantees | Pixarrow",
    description: "Discover our battle-tested 4-phase agile engineering methodology: Architecture Blueprint, Milestone Sprints, Automated QA Stress-Testing, and Global Edge SLA.",
    keywords: ["software development process", "agile sprint methodology", "quality assurance standards", "web engineering lifecycle"]
  },
  "/legal/privacy-policy": {
    title: "Privacy Policy | Pixarrow",
    description: "Pixarrow's privacy policy, client confidentiality framework, data protection commitments, and compliance declarations.",
    keywords: ["privacy policy", "data protection", "pixarrow privacy"]
  },
  "/legal/terms": {
    title: "Terms of Service | Pixarrow",
    description: "Pixarrow's client engagement terms, 100% intellectual property ownership agreements, and service level assurances.",
    keywords: ["terms of service", "ip ownership", "service level agreement"]
  }
};

export async function generateDynamicMetadata(path: string): Promise<Metadata> {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `https://pixarrow.com${cleanPath === "/" ? "" : cleanPath}`;
  const fallback = defaultRouteMetadata[cleanPath] || {
    title: `Pixarrow — ${cleanPath.replace(/^\//, "").replace(/-/g, " ").toUpperCase()}`,
    description: "High-performance digital growth agency specializing in Next.js web engineering, mobile apps, and agentic AI systems.",
    keywords: ["Pixarrow", "Next.js", "Web Engineering", "Digital Growth"]
  };

  try {
    await dbConnect();
    const seo = await SEO.findOne({ pagePath: cleanPath });
    
    if (seo) {
      const title = seo.title || fallback.title;
      const description = seo.description || fallback.description;
      const keywords = seo.keywords ? seo.keywords.split(',').map((k: string) => k.trim()) : fallback.keywords;
      const ogImg = seo.ogImage || "/og-image.png";

      return {
        title,
        description,
        keywords,
        alternates: {
          canonical: canonicalUrl,
        },
        openGraph: {
          title,
          description,
          images: [{ url: ogImg, width: 1200, height: 630, alt: title }],
          type: 'website',
          url: canonicalUrl,
          siteName: 'Pixarrow',
        },
        twitter: {
          card: 'summary_large_image',
          title,
          description,
          images: [ogImg],
        },
      };
    }
  } catch (error) {
    console.error(`SEO fetch failed for ${cleanPath}:`, error);
  }
  
  // Return high-grade fallback metadata
  return {
    title: fallback.title,
    description: fallback.description,
    keywords: fallback.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fallback.title,
      description: fallback.description,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: fallback.title }],
      type: 'website',
      url: canonicalUrl,
      siteName: 'Pixarrow',
    },
    twitter: {
      card: 'summary_large_image',
      title: fallback.title,
      description: fallback.description,
      images: ['/og-image.png'],
    },
  };
}

