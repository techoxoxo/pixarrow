"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  Cpu, 
  ShoppingBag, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Zap,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";

const serviceCategories = [
  {
    id: "web",
    title: "Web & SaaS Engineering",
    shortTitle: "Web & SaaS",
    tagline: "Full-Stack Architecture",
    badge: "Full-Stack • Enterprise SaaS • Cloud",
    description: "We engineer mission-critical web applications, high-performance SaaS platforms, and enterprise portals. Built with modern full-stack frameworks, robust microservices, and edge cloud infrastructure for sub-second speeds and compounding business growth.",
    icon: Globe,
    href: "/services/nextjs-development",
    gradient: "from-[#7C3AED] via-[#9333EA] to-[#FF007A]",
    accentColor: "text-purple-400",
    borderColor: "group-hover:border-[#7C3AED]/60",
    glowColor: "bg-[#7C3AED]/20",
    metrics: [
      { label: "Render Speed", value: "0.6s LCP" },
      { label: "Organic Lift", value: "+185%" },
      { label: "Uptime SLA", value: "99.99%" }
    ],
    deliverables: [
      "Scalable SaaS & Multi-Tenant Dashboard Architecture",
      "Modern Reactive Frontends & High-Conversion UI/UX",
      "High-Throughput Node.js / Python / Go Microservices",
      "Bank-Grade Security & SOC 2 Compliance"
    ],
    tech: ["React / Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "AWS / Docker", "Tailwind CSS", "Redis"]
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    tagline: "Fluid 60FPS Cross-Platform",
    badge: "iOS • Android • React Native",
    description: "High-performance native and React Native mobile applications engineered for viral engagement and flawless retention. Seamless offline syncing, micro-interactions, and guaranteed App Store approval.",
    icon: Smartphone,
    href: "/services/mobile-app-development",
    gradient: "from-[#00DFD8] via-[#007CF0] to-[#7C3AED]",
    accentColor: "text-cyan-400",
    borderColor: "group-hover:border-[#00DFD8]/60",
    glowColor: "bg-[#00DFD8]/20",
    metrics: [
      { label: "App Store Rating", value: "4.9 ★" },
      { label: "Crash-Free Rate", value: "99.95%" },
      { label: "Time to Market", value: "5 Weeks" }
    ],
    deliverables: [
      "Unified React Native & Flutter Codebase",
      "Offline-First SQLite & WatermelonDB Sync",
      "In-App Purchases & RevenueCat Integration",
      "Real-Time Push Notifications & Geofencing"
    ],
    tech: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "RevenueCat", "Fastlane"]
  },
  {
    id: "ai",
    title: "Agentic AI & Automations",
    shortTitle: "Agentic AI",
    tagline: "Autonomous LLM & RAG",
    badge: "GenAI • Multi-Agent • RAG",
    description: "Transform manual operational bottlenecks into autonomous 24/7 intelligent workflows. Custom RAG vector knowledge bases, multi-agent frameworks, and deterministic AI pipelines with zero data leakage.",
    icon: Cpu,
    href: "/services/agentic-ai-automations",
    gradient: "from-[#FF007A] via-[#7C3AED] to-[#00DFD8]",
    accentColor: "text-pink-400",
    borderColor: "group-hover:border-[#FF007A]/60",
    glowColor: "bg-[#FF007A]/20",
    metrics: [
      { label: "Ops Cost Cut", value: "-75%" },
      { label: "Inference Latency", value: "< 400ms" },
      { label: "RAG Accuracy", value: "99.4%" }
    ],
    deliverables: [
      "Autonomous Multi-Agent Systems (LangGraph/CrewAI)",
      "Enterprise RAG & Private Vector Search (Pinecone)",
      "Custom LLM Fine-Tuning & Prompt Guardrails",
      "n8n & Zapier Enterprise Event Orchestration"
    ],
    tech: ["GPT-4o", "Claude 3.5", "LangChain", "Pinecone", "pgvector", "Python", "n8n"]
  },
  {
    id: "ecommerce",
    title: "Shopify Plus & Headless",
    shortTitle: "eCommerce",
    tagline: "High-AOV Conversion",
    badge: "Shopify Plus • Hydrogen • CRO",
    description: "Bespoke Shopify Plus storefronts and headless commerce engines engineered for high average order value and scale. 1-click checkout extensions, custom 3D customizers, and ERP inventory sync.",
    icon: ShoppingBag,
    href: "/services/ecommerce-growth-engineering",
    gradient: "from-[#F59E0B] via-[#EF4444] to-[#EC4899]",
    accentColor: "text-amber-400",
    borderColor: "group-hover:border-amber-500/60",
    glowColor: "bg-amber-500/20",
    metrics: [
      { label: "Checkout Lift", value: "+120%" },
      { label: "Average AOV Lift", value: "+38%" },
      { label: "GMV Processed", value: "$45M+" }
    ],
    deliverables: [
      "Custom Hydrogen & Liquid Zero-Bloat Storefronts",
      "Interactive 3D / 2D Product Customizers",
      "ERP, WMS & Multi-Warehouse Inventory Sync",
      "Data-Backed Conversion Rate Optimization (CRO)"
    ],
    tech: ["Shopify Plus", "Hydrogen", "Next.js Commerce", "Liquid", "Klaviyo", "Stripe", "Sanity"]
  }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const activeService = serviceCategories[activeTab];

  return (
    <section className="py-14 sm:py-24 px-3 sm:px-6 relative z-10 w-full bg-[#050011] overflow-hidden" id="services">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/3 left-[-10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#7C3AED]/10 blur-[130px] sm:blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#00DFD8]/10 blur-[130px] sm:blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-14 gap-5">
          <div className="text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-[#A855F7] text-[10px] sm:text-xs font-black uppercase tracking-widest mb-3 sm:mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Full-Stack Engineering &amp; Growth</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.1] sm:leading-[1.05]">
              Capabilities Engineered for <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF007A] via-[#7C3AED] to-[#00DFD8]">
                Market Dominance.
              </span>
            </h2>
          </div>

          <div className="w-full md:w-auto">
            <Link
              href="/services"
              className="w-full md:w-auto justify-center px-5 sm:px-6 py-3 sm:py-3.5 rounded-full border border-white/10 hover:border-white/30 text-white font-bold text-xs uppercase tracking-wider transition-all hover:scale-105 active:scale-95 flex items-center gap-2 bg-white/[0.02]"
            >
              <span>Explore All Solutions</span>
              <ArrowRight className="w-4 h-4 text-[#00DFD8]" />
            </Link>
          </div>
        </div>

        {/* Interactive Service Tab Buttons (Mobile-first horizontal scroll / desktop grid) */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-6 sm:mb-10 overflow-x-auto no-scrollbar pb-2 sm:pb-0 -mx-3 px-3 sm:mx-0 sm:px-0">
          {serviceCategories.map((item, idx) => {
            const ItemIcon = item.icon;
            const isSelected = activeTab === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`shrink-0 sm:shrink min-w-[220px] sm:min-w-0 p-3 sm:p-5 rounded-xl sm:rounded-2xl border text-left transition-all duration-300 flex items-center gap-3 cursor-pointer relative overflow-hidden group ${
                  isSelected
                    ? "bg-[#110526] border-[#7C3AED] shadow-[0_0_25px_rgba(124,58,237,0.35)]"
                    : "bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-[#FF007A] via-[#7C3AED] to-[#00DFD8]" />
                )}
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${
                  isSelected ? "bg-[#7C3AED] text-white shadow-glow-purple" : "bg-white/5 text-white/50"
                }`}>
                  <ItemIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs sm:text-sm font-black text-white leading-tight truncate">
                    {item.title}
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-white/40 font-bold uppercase tracking-wider mt-0.5 truncate">
                    {item.tagline}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Featured Showcase Interactive Stage */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-4 sm:p-8 lg:p-12 rounded-2xl sm:rounded-[2.5rem] bg-gradient-to-b from-[#110526]/90 to-[#080214]/95 border border-white/10 shadow-2xl backdrop-blur-2xl relative overflow-hidden text-left"
          >
            {/* Ambient Corner Glow */}
            <div className={`absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none opacity-40 ${activeService.glowColor}`} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center relative z-10">
              
              {/* Left Column: Solution Deep Dive (7 Cols) */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-[10px] sm:text-xs font-black uppercase tracking-wider max-w-full">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
                  <span className="truncate">{activeService.badge}</span>
                </div>

                <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                  {activeService.title}
                </h3>

                <p className="text-xs sm:text-base md:text-lg text-white/70 leading-relaxed max-w-xl font-normal">
                  {activeService.description}
                </p>

                {/* Key Deliverables Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 pt-1 sm:pt-2">
                  {activeService.deliverables.map((d, i) => (
                    <div key={i} className="flex items-start gap-2 sm:gap-2.5 p-2.5 sm:p-3 rounded-xl bg-white/[0.02] border border-white/5">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00DFD8] shrink-0 mt-0.5" />
                      <span className="text-[11px] sm:text-xs text-white/80 font-semibold leading-snug">{d}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 sm:pt-2">
                  {activeService.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] sm:text-[11px] font-bold text-white/60">
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA Action */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 pt-3 sm:pt-4">
                  <Link
                    href={activeService.href}
                    className="w-full sm:w-auto justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#FF007A] text-white font-extrabold text-xs uppercase tracking-wider shadow-glow-purple hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                  >
                    <span>View Architecture Blueprint</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/calculator"
                    className="w-full sm:w-auto justify-center px-5 sm:px-6 py-3.5 sm:py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider border border-white/10 transition-all flex items-center gap-2"
                  >
                    <Zap className="w-4 h-4 text-amber-300" />
                    <span>Estimate Cost</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Live Metric Monoliths (5 Cols) */}
              <div className="lg:col-span-5 space-y-3 sm:space-y-4 mt-2 lg:mt-0">
                <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#090117]/80 border border-white/10 backdrop-blur-xl shadow-xl space-y-3 sm:space-y-5">
                  <div className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-white/40">
                    Verified Performance Benchmarks
                  </div>

                  <div className="grid grid-cols-1 gap-2 sm:gap-3">
                    {activeService.metrics.map((m, i) => (
                      <div key={i} className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                        <span className="text-[11px] sm:text-xs font-bold text-white/60">{m.label}</span>
                        <span className={`text-xl sm:text-3xl font-black tracking-tight ${activeService.accentColor}`}>
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#7C3AED]/10 border border-[#7C3AED]/30 flex items-center gap-2.5 sm:gap-3">
                    <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 shrink-0" />
                    <div className="text-[11px] sm:text-xs text-white/80 leading-relaxed font-medium">
                      Backed by our <span className="text-white font-bold">100% IP Transfer</span> &amp; <span className="text-emerald-400 font-bold">Signed 24h NDA</span> SLA guarantee.
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
