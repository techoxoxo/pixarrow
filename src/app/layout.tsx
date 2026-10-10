import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { coreKeywords, localKeywords, nicheKeywords, geoKeywords } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pixarrow.com'),
  title: {
    default: "Custom Software Development Agency in Mohali, India | Pixarrow",
    template: "%s | Pixarrow - Digital Growth Agency"
  },
  description: "Pixarrow is a custom software development agency in Mohali, India. Full stack web development, mobile app development services and dedicated developers for startups and enterprises in the USA, Africa and worldwide.",
  keywords: [
    ...coreKeywords,
    ...localKeywords,
    ...nicheKeywords,
    ...geoKeywords,
    "pixarrow",
    "digital growth agency",
  ],
  authors: [{ name: "Anuj Sharma" }, { name: "Ankit Rajput" }],
  alternates: {
    canonical: 'https://pixarrow.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pixarrow.com',
    siteName: 'Pixarrow',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Pixarrow — Digital Growth Excellence'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixarrow — Premium Digital Growth & Web Engineering Agency',
    description: 'Pixarrow is a digital growth agency transforming startups into market leaders with premium next.js engineering, UI/UX design, and motion systems.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: "/favicon.png" },
      { url: "/logo-icon.png", sizes: "270x270" },
    ],
    shortcut: "/favicon.png",
    apple: "/logo-icon.png",
  },
};

import Script from "next/script";

import FloatingActions from "@/components/FloatingActions";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} dark`}>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S932HTZHLX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S932HTZHLX');
          `}
        </Script>
      </head>
      <body className="relative min-h-screen selection:bg-brand-purple selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["Organization", "ProfessionalService"],
                  "@id": "https://pixarrow.com/#organization",
                  "name": "Pixarrow",
                  "alternateName": [
                    "Pixarrow Agency",
                    "Pixarrow Technologies",
                    "Pixarrow Web Engineering",
                    "Pixarrow Digital Growth"
                  ],
                  "url": "https://pixarrow.com",
                  "logo": {
                    "@type": "ImageObject",
                    "@id": "https://pixarrow.com/#logo",
                    "url": "https://pixarrow.com/logo.png",
                    "caption": "Pixarrow Logo"
                  },
                  "image": "https://pixarrow.com/og-image.png",
                  "description": "Pixarrow is an elite digital growth and web engineering agency transforming ambitious startups and global enterprises with high-performance Next.js architectures, React Native mobile apps, agentic AI workflows, and cinematic motion design systems.",
                  "telephone": "+917973060924",
                  "email": "hello@pixarrow.com",
                  "priceRange": "$$$",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Phase 8, Industrial Area",
                    "addressLocality": "Mohali",
                    "addressRegion": "Punjab",
                    "addressCountry": "IN"
                  },
                  "areaServed": [
                    { "@type": "City", "name": "Mohali" },
                    { "@type": "City", "name": "Chandigarh" },
                    { "@type": "Country", "name": "India" },
                    { "@type": "Country", "name": "United States" },
                    { "@type": "Continent", "name": "Africa" }
                  ],
                  "founders": [
                    {
                      "@type": "Person",
                      "name": "Anuj Sharma",
                      "jobTitle": "Co-Founder & Chief Technology Officer (CTO)",
                      "url": "https://pixarrow.com/about",
                      "sameAs": [
                        "https://github.com/techoxoxo",
                        "https://linkedin.com/in/anuj-sharma-pixarrow"
                      ]
                    },
                    {
                      "@type": "Person",
                      "name": "Ankit Rajput",
                      "jobTitle": "Co-Founder & Chief Strategy Officer (CSO)",
                      "url": "https://pixarrow.com/about",
                      "sameAs": [
                        "https://linkedin.com/company/pixarrow"
                      ]
                    }
                  ],
                  "sameAs": [
                    "https://twitter.com/pixarrow",
                    "https://linkedin.com/company/pixarrow",
                    "https://instagram.com/pixarrow",
                    "https://github.com/pixarrow"
                  ],
                  "knowsAbout": [
                    "Custom Software Development",
                    "Enterprise Web Application Development",
                    "Next.js and NestJS Development",
                    "MVP Development for Startups",
                    "PostgreSQL Database Optimization",
                    "Legacy System Migration to Node.js",
                    "Next.js 16 Web Engineering",
                    "Full-Stack Web Architecture",
                    "React Native Mobile Development",
                    "Agentic AI & LLM Systems",
                    "UI/UX Design Systems",
                    "Shopify Plus & Headless Commerce",
                    "Conversion Rate Optimization (CRO)",
                    "Generative Engine Optimization (GEO)",
                    "Performance Marketing & Paid Acquisition"
                  ],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Pixarrow Engineering & Growth Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Full-Stack Web Engineering (Next.js)",
                          "description": "Sub-second load times, dynamic SSR/ISR, and enterprise microservices built for extreme scale.",
                          "url": "https://pixarrow.com/services/web-app-development"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Mobile Application Development",
                          "description": "Native and cross-platform iOS & Android mobile applications engineered with React Native.",
                          "url": "https://pixarrow.com/services/mobile-app-development"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "AI Integration & Agentic Systems",
                          "description": "Custom LLM pipelines, autonomous agents, RAG architectures, and AI automations.",
                          "url": "https://pixarrow.com/services/ai-integration"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Conversion-First UI/UX & Motion Systems",
                          "description": "Design systems engineered for maximum conversion, visual prestige, and user retention.",
                          "url": "https://pixarrow.com/services/ui-ux-design"
                        }
                      }
                    ]
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://pixarrow.com/#website",
                  "url": "https://pixarrow.com",
                  "name": "Pixarrow",
                  "description": "Pixarrow is an elite digital growth and web engineering agency specializing in Next.js 16 architectures, mobile apps, and agentic AI systems.",
                  "publisher": {
                    "@id": "https://pixarrow.com/#organization"
                  },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://pixarrow.com/work?search={search_term_string}",
                    "query-input": "required name=search_term_string"
                  },
                  "hasPart": [
                    {
                      "@type": "WebPage",
                      "@id": "https://pixarrow.com/work",
                      "url": "https://pixarrow.com/work",
                      "name": "Selected Case Studies & Engineering Portfolio"
                    },
                    {
                      "@type": "WebPage",
                      "@id": "https://pixarrow.com/hire-developers",
                      "url": "https://pixarrow.com/hire-developers",
                      "name": "Hire Dedicated Engineering Pods"
                    },
                    {
                      "@type": "WebPage",
                      "@id": "https://pixarrow.com/services",
                      "url": "https://pixarrow.com/services",
                      "name": "Core Capabilities & Solutions"
                    },
                    {
                      "@type": "WebPage",
                      "@id": "https://pixarrow.com/book",
                      "url": "https://pixarrow.com/book",
                      "name": "Book a Strategy Call / Contact"
                    },
                    {
                      "@type": "WebPage",
                      "@id": "https://pixarrow.com/calculator",
                      "url": "https://pixarrow.com/calculator",
                      "name": "Interactive Scope & Budget Calculator"
                    },
                    {
                      "@type": "WebPage",
                      "@id": "https://pixarrow.com/about",
                      "url": "https://pixarrow.com/about",
                      "name": "About Pixarrow Founders & Methodology"
                    },
                    {
                      "@type": "WebPage",
                      "@id": "https://pixarrow.com/blog",
                      "url": "https://pixarrow.com/blog",
                      "name": "Engineering Blueprints & Tech Blog"
                    }
                  ]
                },
                {
                  "@type": "ItemList",
                  "@id": "https://pixarrow.com/#site-navigation",
                  "name": "Pixarrow Sitelinks & Main Navigation",
                  "itemListElement": [
                    {
                      "@type": "SiteNavigationElement",
                      "position": 1,
                      "name": "Case Studies & Work",
                      "description": "Explore our flagship engineering case studies across Next.js 16 portals, React Native mobile apps, and headless Shopify Plus storefronts.",
                      "url": "https://pixarrow.com/work"
                    },
                    {
                      "@type": "SiteNavigationElement",
                      "position": 2,
                      "name": "Hire Dedicated Developers",
                      "description": "Hire pre-vetted senior Next.js, React Native, Python, and AI engineers with flexible monthly engagement models and 15-day trial.",
                      "url": "https://pixarrow.com/hire-developers"
                    },
                    {
                      "@type": "SiteNavigationElement",
                      "position": 3,
                      "name": "Engineering Services",
                      "description": "Full-stack web applications, iOS/Android mobile engineering, autonomous agentic AI workflows, and conversion optimization.",
                      "url": "https://pixarrow.com/services"
                    },
                    {
                      "@type": "SiteNavigationElement",
                      "position": 4,
                      "name": "Book a Strategy Call",
                      "description": "Schedule a direct 30-minute architecture consultation and project roadmap session with our Lead Architect.",
                      "url": "https://pixarrow.com/book"
                    },
                    {
                      "@type": "SiteNavigationElement",
                      "position": 5,
                      "name": "Scope & Budget Calculator",
                      "description": "Calculate your technical scope, target timeline, and budget estimate in 2 minutes with instant sprint breakdown.",
                      "url": "https://pixarrow.com/calculator"
                    },
                    {
                      "@type": "SiteNavigationElement",
                      "position": 6,
                      "name": "About Pixarrow",
                      "description": "Meet the founders and engineering leads behind Pixarrow: Anuj Sharma (CTO) and Ankit Rajput (CSO).",
                      "url": "https://pixarrow.com/about"
                    },
                    {
                      "@type": "SiteNavigationElement",
                      "position": 7,
                      "name": "Engineering Blog",
                      "description": "Deep-dive technical blueprints, Next.js 16 best practices, mobile development guides, and agentic AI pipelines.",
                      "url": "https://pixarrow.com/blog"
                    }
                  ]
                }
              ]
            })
          }}
        />
        <div className="fixed inset-0 pointer-events-none z-[-1] bg-grid-pattern w-full max-w-7xl mx-auto opacity-50" />
        <Navigation />
        <main className="relative z-10 w-full">
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
