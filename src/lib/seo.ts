import dbConnect from "./mongodb";
import SEO from "@/models/SEO";
import { Metadata } from "next";

export const coreKeywords = [
  "custom software development agency",
  "full stack web development company",
  "mobile app development services",
  "enterprise web application development",
  "hire dedicated full stack developers",
];

export const localKeywords = [
  "web development company Mohali",
  "app development agency in Mohali",
  "IT company in Phase 8 Mohali",
  "IT company Chandigarh IT Park",
];

export const nicheKeywords = [
  "Next.js and NestJS development agency",
  "outsource MVP development for startups",
  "React Native mobile app development company India",
  "custom PostgreSQL database optimization services",
  "legacy system migration to Node.js",
];

export const geoKeywords = [
  "affordable web development agency for US startups",
  "hire remote full-stack developers from India",
  "custom software development company for African businesses",
  "offshore mobile app development partner USA",
];

const defaultRouteMetadata: Record<string, { title: string; description: string; keywords: string[] }> = {
  "/": {
    title: "Custom Software Development Agency in Mohali, India | Pixarrow",
    description: "Pixarrow is a custom software development agency in Mohali, India. Full stack web development, mobile app development services, and dedicated developers for startups and enterprises in the USA, Africa and worldwide.",
    keywords: [...coreKeywords, ...localKeywords, "digital growth agency", "agentic ai engineering", "shopify plus developers"]
  },
  "/work": {
    title: "Case Studies & Software Development Portfolio | Pixarrow",
    description: "Explore case studies of enterprise web applications, React Native mobile apps, Next.js platforms and headless Shopify Plus storefronts built by Pixarrow for startups and global brands.",
    keywords: ["web development portfolio", "nextjs case studies", "react native showcase", "enterprise web application development", "mobile app development services", "software engineering portfolio"]
  },
  "/services": {
    title: "Full Stack Web & Mobile App Development Services | Pixarrow",
    description: "Custom software development: full stack web development, mobile app development services, enterprise web application development, Next.js and NestJS builds, PostgreSQL optimization and legacy migration to Node.js.",
    keywords: [...coreKeywords, ...nicheKeywords, "shopify plus development", "agentic ai solutions"]
  },
  "/about": {
    title: "About Pixarrow — Software Development Company in Mohali",
    description: "Meet the founders behind Pixarrow, a Mohali-based software development company: Anuj Sharma (CTO) and Ankit Rajput (CSO). We build scalable web and mobile platforms for clients in India, the USA and Africa.",
    keywords: ["pixarrow founders", "anuj sharma cto", "ankit rajput cso", "about pixarrow", "web development company Mohali", "IT company in Phase 8 Mohali"]
  },
  "/blog": {
    title: "Engineering Blog: Next.js, NestJS, React Native & Offshore Development | Pixarrow",
    description: "Technical guides on Next.js and NestJS, React Native, PostgreSQL optimization, legacy migration to Node.js, MVP outsourcing and working with an offshore development partner.",
    keywords: ["nextjs 16 blog", "nestjs tutorials", "react native tutorials", "postgresql optimization", "legacy system migration to Node.js", "outsource MVP development for startups"]
  },
  "/calculator": {
    title: "Custom Software & App Development Cost Calculator | Pixarrow",
    description: "Estimate the cost and timeline of your web app, mobile app or MVP in 2 minutes. Transparent pricing from an affordable offshore web development agency for US startups and global founders.",
    keywords: ["web development cost calculator", "app development cost estimate", "MVP development cost", "affordable web development agency for US startups", "software development pricing"]
  },
  "/book": {
    title: "Book a Free Strategy Call | Custom Software Development Agency | Pixarrow",
    description: "Schedule a free 30-minute call with our lead architect. Get a technical review, scope and roadmap for your web app, mobile app or MVP from a custom software development agency.",
    keywords: ["schedule strategy session", "hire dedicated full stack developers", "custom software development agency", "offshore mobile app development partner USA", "pixarrow discovery session"]
  },
  "/hire-developers": {
    title: "Hire Dedicated Full Stack Developers from India | Pixarrow",
    description: "Hire remote full-stack developers from India: pre-vetted Next.js, NestJS, Node.js, React Native and PostgreSQL engineers on flexible monthly plans with a 15-day risk-free trial. Trusted by US and African startups.",
    keywords: ["hire dedicated full stack developers", "hire remote full-stack developers from India", "hire nextjs developers", "hire react native developers", "staff augmentation", "offshore mobile app development partner USA"]
  },
  "/process": {
    title: "Our Software Development Process & Agile Sprint Methodology | Pixarrow",
    description: "A 4-phase agile methodology for custom software development: architecture blueprint, milestone sprints, automated QA and SLA-backed deployment. Built for offshore and remote client collaboration.",
    keywords: ["software development process", "agile sprint methodology", "offshore development process", "quality assurance standards", "web engineering lifecycle"]
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

export function generateBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": item.name,
      "item": item.url.startsWith("http") ? item.url : `https://pixarrow.com${item.url.startsWith("/") ? item.url : `/${item.url}`}`
    }))
  };
}

export function generatePageJsonLd({
  title,
  description,
  url,
  breadcrumbs,
  type = "WebPage"
}: {
  title: string;
  description: string;
  url: string;
  breadcrumbs?: { name: string; url: string }[];
  type?: string;
}) {
  const fullUrl = url.startsWith("http") ? url : `https://pixarrow.com${url.startsWith("/") ? url : `/${url}`}`;
  
  const graph: any[] = [
    {
      "@type": type,
      "@id": `${fullUrl}#webpage`,
      "url": fullUrl,
      "name": title,
      "description": description,
      "isPartOf": {
        "@id": "https://pixarrow.com/#website"
      },
      "inLanguage": "en-US"
    }
  ];

  if (breadcrumbs && breadcrumbs.length > 0) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${fullUrl}#breadcrumb`,
      "itemListElement": breadcrumbs.map((b, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": b.name,
        "item": b.url.startsWith("http") ? b.url : `https://pixarrow.com${b.url.startsWith("/") ? b.url : `/${b.url}`}`
      }))
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph
  };
}

