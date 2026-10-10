"use client";

import { motion } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  Cpu, 
  ShoppingBag, 
  TrendingUp, 
  Palette, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Zap, 
  ShieldCheck,
  ChevronRight
} from "lucide-react";
import Link from "next/link";

const capabilitiesList = [
  {
    slug: "web-development",
    title: "Full-Stack Web & SaaS Systems",
    category: "Architecture & Engineering",
    icon: Globe,
    accent: "#00DFD8",
    color: "from-[#00DFD8]/20 via-[#7C3AED]/20 to-transparent",
    badge: "0.4s Global Edge LCP",
    desc: "We engineer mission-critical web platforms, SaaS dashboards, and cloud applications using modern reactive frontends, resilient microservices, and edge database pipelines built for limitless concurrency.",
    deliverables: [
      "Sub-second Core Web Vitals (100/100)",
      "100% Type-Safe TypeScript & Modern UI",
      "Scalable REST, GraphQL & Microservices",
      "Automated CI/CD & Enterprise Security"
    ],
    techStack: ["React / Next.js", "TypeScript", "Node.js / Python", "PostgreSQL", "AWS / Docker", "Tailwind"]
  },
  {
    slug: "mobile-apps",
    title: "React Native & Cross-Platform Mobile",
    category: "Mobile Engineering",
    icon: Smartphone,
    accent: "#7C3AED",
    color: "from-[#7C3AED]/20 via-[#FF007A]/20 to-transparent",
    badge: "60 FPS Fluid Motion",
    desc: "Native-grade iOS & Android applications with buttery 60 FPS gesture animations, offline-first local storage, and high-converting in-app purchase funnels.",
    deliverables: [
      "Unified iOS & Android Codebase",
      "RevenueCat & Stripe In-App Purchases",
      "Push Notifications & Deep Linking",
      "App Store & Play Store Fast Approval"
    ],
    techStack: ["React Native", "Expo", "Flutter", "Swift/Kotlin", "RevenueCat", "Firebase"]
  },
  {
    slug: "ai-automation",
    title: "Agentic AI & Custom LLM Workflows",
    category: "Intelligence & Automations",
    icon: Cpu,
    accent: "#FF007A",
    color: "from-[#FF007A]/20 via-[#00DFD8]/20 to-transparent",
    badge: "Autonomous Ops",
    desc: "Transform manual operational bottlenecks into autonomous 24/7 revenue machines using LangChain, Claude, OpenAI, and vector database retrieval pipelines.",
    deliverables: [
      "Custom RAG & Enterprise Knowledge Retrieval",
      "Autonomous Multi-Agent Task Orchestration",
      "Vector Embeddings (Pinecone / pgvector)",
      "Data Privacy & SOC2 Readiness"
    ],
    techStack: ["OpenAI / Claude", "LangChain", "FastAPI", "Pinecone", "Python", "LlamaIndex"]
  },
  {
    slug: "ecommerce",
    title: "Shopify Plus & Headless Commerce",
    category: "High-Volume Commerce",
    icon: ShoppingBag,
    accent: "#10B981",
    color: "from-[#10B981]/20 via-[#7C3AED]/20 to-transparent",
    badge: "+185% Checkout Conv",
    desc: "Headless Shopify storefronts engineered for maximum conversion velocity, sub-0.5s product detail page loads, and seamless multi-currency checkout.",
    deliverables: [
      "Custom Shopify Liquid & Hydrogen Stores",
      "1-Click Frictionless Checkout Funnels",
      "ERP, 3PL & Inventory Synchronization",
      "Dynamic Upsells & Subscription Engines"
    ],
    techStack: ["Shopify Plus", "Hydrogen", "Klaviyo", "Stripe", "Recharge", "Sanity CMS"]
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing & ROAS Scaling",
    category: "Revenue Acceleration",
    icon: TrendingUp,
    accent: "#F59E0B",
    color: "from-[#F59E0B]/20 via-[#FF007A]/20 to-transparent",
    badge: "3.8X Average ROAS",
    desc: "Mathematical customer acquisition across Meta, Google Search, TikTok, and programmatic channels backed by daily creative iteration and conversion rate optimization.",
    deliverables: [
      "Algorithmic Meta & Google Ad Management",
      "High-Converting Landing Page A/B Testing",
      "Server-Side CAPI & Offline Event Tracking",
      "Weekly Attribution & Executive Reporting"
    ],
    techStack: ["Meta Ads", "Google Ads", "TikTok Ads", "Triple Whale", "GA4", "PostHog"]
  },
  {
    slug: "branding-ui-ux",
    title: "Brand Architecture & High-Conversion UI/UX",
    category: "Creative Strategy",
    icon: Palette,
    accent: "#A855F7",
    color: "from-[#A855F7]/20 via-[#00DFD8]/20 to-transparent",
    badge: "Design Systems",
    desc: "Luxury visual identities and human-centered digital experiences that establish unshakeable market authority and turn casual visitors into lifelong advocates.",
    deliverables: [
      "Scalable Enterprise Design Systems in Figma",
      "High-Fidelity Interactive Prototypes",
      "Micro-Interactions & Bespoke 3D Motion",
      "Comprehensive Brand Guidelines & Typography"
    ],
    techStack: ["Figma", "Design Tokens", "Spline 3D", "Framer Motion", "GSAP", "Storybook"]
  }
];

export default function DetailedCapabilities() {
  return (
    <section className="py-12 relative z-10 w-full">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-[#A855F7] text-xs font-black uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Full-Spectrum Solutions</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
            Six Pillars of <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF007A] via-[#7C3AED] to-[#00DFD8]">
              Digital Dominance.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-white/60 font-sans">
            Every capability is executed by specialized senior architects. Click any pillar to explore deliverables, tech architecture, and pricing.
          </p>
        </div>

        {/* 6 Capabilities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilitiesList.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-[2.5rem] bg-gradient-to-b from-[#120529] via-[#090217] to-[#04000b] border border-white/10 hover:border-[#7C3AED]/60 transition-all duration-300 backdrop-blur-2xl flex flex-col justify-between group shadow-xl hover:shadow-[0_20px_45px_rgba(124,58,237,0.25)] relative overflow-hidden"
              >
                {/* Background Subtle Gradient */}
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${item.color} blur-3xl opacity-30 group-hover:opacity-60 transition-opacity`} />

                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#7C3AED] group-hover:shadow-glow-purple transition-all">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#00DFD8]">
                      {item.badge}
                    </span>
                  </div>

                  <div className="text-xs font-black uppercase tracking-widest text-white/40 mb-1">
                    {item.category}
                  </div>
                  
                  <h3 className="text-2xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#00DFD8] transition-all">
                    {item.title}
                  </h3>

                  <p className="text-sm text-white/60 leading-relaxed font-sans mb-6">
                    {item.desc}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-2 mb-6 border-t border-white/5 pt-4">
                    {item.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-white/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {item.techStack.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-lg bg-white/5 text-[10px] font-bold text-white/70 border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Link to Silo */}
                <Link
                  href={`/services/${item.slug}`}
                  className="w-full py-3.5 px-5 rounded-2xl bg-white/5 hover:bg-[#7C3AED] hover:text-white border border-white/10 hover:border-[#7C3AED] text-white/80 font-bold text-xs flex items-center justify-between transition-all group-hover:shadow-glow-purple"
                >
                  <span>Explore Architecture &amp; Pricing</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

