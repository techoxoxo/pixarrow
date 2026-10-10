"use client";

import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Zap, 
  Users, 
  FileCode2, 
  Lock, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Cloud,
  Cpu,
  Layers
} from "lucide-react";
import Link from "next/link";

const partnershipGuarantees = [
  {
    icon: Users,
    title: "Direct Senior Architect Access",
    badge: "Zero Middlemen",
    badgeColor: "text-cyan-400 bg-cyan-950/40 border-cyan-500/30",
    desc: "Collaborate directly with our Lead Architect (Anuj) and senior engineers inside your private Slack or Discord. No account manager telephone games.",
    metric: "Direct Slack Access",
  },
  {
    icon: FileCode2,
    title: "100% Complete IP & Source Sovereignty",
    badge: "Unconditional Transfer",
    badgeColor: "text-purple-300 bg-purple-950/40 border-purple-500/30",
    desc: "Every line of TypeScript, React Server Component, and Figma design belongs entirely to you upon milestone delivery. Zero vendor lock-in.",
    metric: "Full GitHub Handoff",
  },
  {
    icon: Zap,
    title: "Sub-Second Edge Performance SLA",
    badge: "100/100 Core Web Vitals",
    badgeColor: "text-emerald-400 bg-emerald-950/40 border-emerald-500/30",
    desc: "Engineered with Next.js 16, optimized asset pipelining, and global edge CDN caching ensuring sub-0.6s Largest Contentful Paint worldwide.",
    metric: "< 0.6s Global LCP",
  },
  {
    icon: Lock,
    title: "Mutual NDA Executed in 24 Hours",
    badge: "Strict Confidentiality",
    badgeColor: "text-amber-300 bg-amber-950/40 border-amber-500/30",
    desc: "Your proprietary ideas, business logic, and code assets remain strictly confidential under bilateral enterprise non-disclosure agreements.",
    metric: "24h NDA Turnaround",
  },
];

const techPartners = [
  { name: "Vercel Verified", sub: "Edge Runtime & Next.js" },
  { name: "AWS Cloud", sub: "Serverless & Microservices" },
  { name: "Cloudflare", sub: "Global Edge & Workers" },
  { name: "Google Cloud", sub: "Vertex AI & Embeddings" },
  { name: "Stripe Verified", sub: "Global Billing Architecture" },
  { name: "Shopify Plus", sub: "Headless eCommerce" },
];

export default function TrustShowcase() {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 bg-[#070114] border-y border-white/5 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-purple/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-brand-magenta/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-[11px] font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>The Pixarrow Partnership Standard</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            How We Protect, Deliver &amp; <br className="hidden sm:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF007A] via-[#7C3AED] to-[#00DFD8]">
              Scale Your Digital Product.
            </span>
          </h2>

          <p className="text-xs sm:text-base text-white/60 mt-3 leading-relaxed">
            Transparent sprint commitments, zero fluff, and production codebases built to stand the test of extreme scale.
          </p>
        </div>

        {/* 4 Core Partnership Guarantees Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
          {partnershipGuarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-purple-500/40 transition-all flex flex-col justify-between group shadow-xl hover:-translate-y-1 duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-brand-purple/20 group-hover:border-brand-purple/40 group-hover:text-purple-300 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-xs text-white/60 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-cyan-300 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    {item.metric}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Verified Tech Ecosystem Strip */}
        <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-purple-950/20 via-[#0a0518] to-cyan-950/20 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-xl">
          <div className="flex items-center gap-3 shrink-0 text-center md:text-left">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
              <Cloud className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">Production Infrastructure Stack</div>
              <div className="text-[11px] text-white/40">Verified enterprise deployment &amp; payment pipelines</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-2.5">
            {techPartners.map((partner) => (
              <div key={partner.name} className="flex items-center gap-2 text-xs text-white/80 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00DFD8]" />
                <span>{partner.name}</span>
                <span className="text-[10px] text-white/40 font-normal">({partner.sub})</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
