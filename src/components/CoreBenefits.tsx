"use client";

import { motion } from "framer-motion";
import { Gauge, Target, TrendingUp, ShieldCheck, Zap, Lock, Sparkles } from "lucide-react";

const benefits = [
  {
    title: "Zero Tech Debt & Edge Velocity",
    badge: "Sub-Second LCP",
    description: "Every codebase is built with React 19 Server Components, TypeScript, and edge caching for sub-0.4s load times globally.",
    metric: "0.4s Global LCP",
    icon: Zap,
    color: "from-[#00DFD8] to-[#7C3AED]",
    accent: "#00DFD8"
  },
  {
    title: "Mathematical CRO Precision",
    badge: "+185% Conv",
    description: "Every pixel, micro-interaction, and checkout flow is designed to maximize conversion velocity and return on ad spend.",
    metric: "3.8X Client ROAS",
    icon: Target,
    color: "from-[#FF007A] to-[#7C3AED]",
    accent: "#FF007A"
  },
  {
    title: "Unconditional IP Sovereignty",
    badge: "100% Client Ownership",
    description: "Full Git repository transfer, direct Slack access to your Lead Architect, and zero lock-in with a 15-day risk-free trial.",
    metric: "100% Git Handover",
    icon: ShieldCheck,
    color: "from-[#7C3AED] to-[#00DFD8]",
    accent: "#A855F7"
  },
];

export default function CoreBenefits() {
  return (
    <section className="py-20 px-6 relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-[#A855F7] text-xs font-black uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Unfair Competitive Moats</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6">
            Engineered for <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF007A] via-[#7C3AED] to-[#00DFD8]">
              High-Growth Disruptors.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/60 font-sans">
            We reject slow agency overhead. Here is the operational blueprint that enables our clients to dominate their categories.
          </p>
        </div>
        
        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="p-8 sm:p-10 rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-[#120529] via-[#0a0217] to-[#04000b] shadow-2xl backdrop-blur-2xl group hover:border-[#7C3AED]/60 hover:shadow-[0_20px_50px_rgba(124,58,237,0.2)] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#7C3AED] group-hover:shadow-glow-purple transition-all">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#00DFD8]">
                      {benefit.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black mb-3 tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#00DFD8] transition-all">
                    {benefit.title}
                  </h3>

                  <p className="text-white/60 text-sm sm:text-base leading-relaxed font-sans mb-8">
                    {benefit.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-white/40 uppercase tracking-wider">Benchmark</span>
                  <span className={`text-sm font-black bg-clip-text text-transparent bg-gradient-to-r ${benefit.color}`}>
                    {benefit.metric}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

