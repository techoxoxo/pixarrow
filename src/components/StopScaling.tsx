"use client";

import { motion } from "framer-motion";
import { Check, X, ArrowRight, Zap, ShieldCheck, Sparkles, TrendingUp, Cpu, Lock, Clock } from "lucide-react";
import Link from "next/link";

const comparisonMatrix = [
  {
    feature: "Core Architecture & Load Speed",
    traditional: "Heavy WordPress / PHP (~4.2s LCP)",
    pixarrow: "Next.js 16 Edge Streaming (0.6s LCP)",
    pixarrowWin: true
  },
  {
    feature: "Development Velocity",
    traditional: "6 to 9 months slow waterfall cycles",
    pixarrow: "3 to 6 weeks agile sprint launches",
    pixarrowWin: true
  },
  {
    feature: "AI & Workflow Integrations",
    traditional: "Generic chatbots with high hallucination",
    pixarrow: "Custom RAG pipelines & autonomous agents",
    pixarrowWin: true
  }
];

export default function StopScaling() {
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-8 md:px-10 lg:px-12 relative z-10 w-full bg-[#050011] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] bg-gradient-to-tr from-[#7C3AED]/15 via-[#FF007A]/10 to-[#00DFD8]/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF007A]/10 border border-[#FF007A]/30 text-[#FF007A] text-xs font-black uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>The Modern Growth Standard</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.08] sm:leading-[1.05] mb-4 sm:mb-6">
            Stop Scrolling. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF007A] via-[#7C3AED] to-[#00DFD8]">
              Start Scaling.
            </span>
          </h2>
          <p className="text-sm sm:text-lg text-white/60 max-w-xl mx-auto leading-relaxed">
            Traditional agencies waste time and budget on bloated retainers. Here is why high-growth startups and market leaders partner with Pixarrow.
          </p>
        </div>

        {/* Comparison Matrix HUD Container */}
        <div className="rounded-2xl sm:rounded-[2.5rem] bg-gradient-to-b from-[#110526]/90 to-[#080214]/95 border border-white/10 p-4 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-2xl relative overflow-hidden mb-8 sm:mb-12">
          
          {/* DESKTOP HEADER (>= md) */}
          <div className="hidden md:grid md:grid-cols-12 gap-6 pb-6 border-b border-white/10 text-xs font-black uppercase tracking-widest">
            <div className="md:col-span-4 text-white/40 text-left">Deliverable &amp; Standard</div>
            <div className="md:col-span-4 text-red-400/80 text-left flex items-center gap-1.5">
              <X className="w-4 h-4 text-red-400" />
              <span>Legacy Agency Model</span>
            </div>
            <div className="md:col-span-4 text-[#00DFD8] text-left flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#00DFD8]" />
              <span>The Pixarrow Engine</span>
            </div>
          </div>

          {/* DESKTOP ROWS (>= md) */}
          <div className="hidden md:block divide-y divide-white/5">
            {comparisonMatrix.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="grid grid-cols-12 gap-4 py-5 items-center text-left hover:bg-white/[0.015] transition-colors rounded-xl px-2"
              >
                <div className="col-span-4 font-bold text-sm text-white">
                  {item.feature}
                </div>

                <div className="col-span-4 text-xs text-white/50 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 text-red-400">
                    <X className="w-3 h-3" />
                  </span>
                  <span>{item.traditional}</span>
                </div>

                <div className="col-span-4 text-xs font-bold text-white flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#00DFD8]/20 border border-[#00DFD8]/40 flex items-center justify-center shrink-0 text-[#00DFD8]">
                    <Check className="w-3 h-3" />
                  </span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-purple-200">
                    {item.pixarrow}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* MOBILE CARDS (< md) */}
          <div className="block md:hidden space-y-3">
            {comparisonMatrix.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2.5 text-left"
              >
                <div className="text-xs font-black text-white uppercase tracking-wider">
                  {item.feature}
                </div>

                {/* Pixarrow (Win) */}
                <div className="p-2.5 rounded-lg bg-[#00DFD8]/10 border border-[#00DFD8]/20 flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#00DFD8]/20 border border-[#00DFD8]/40 flex items-center justify-center shrink-0 text-[#00DFD8] mt-0.5">
                    <Check className="w-2.5 h-2.5" />
                  </span>
                  <div>
                    <span className="text-[10px] uppercase font-mono font-bold text-[#00DFD8] block">Pixarrow</span>
                    <span className="text-xs font-bold text-white leading-tight">{item.pixarrow}</span>
                  </div>
                </div>

                {/* Legacy */}
                <div className="p-2 rounded-lg bg-red-500/5 border border-red-500/10 flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 text-red-400 mt-0.5">
                    <X className="w-2.5 h-2.5" />
                  </span>
                  <div>
                    <span className="text-[10px] uppercase font-mono font-semibold text-red-400/80 block">Legacy Agency</span>
                    <span className="text-xs text-white/50 leading-tight">{item.traditional}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Highlights Strip */}
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4">
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-3 text-left">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#7C3AED]/20 border border-[#7C3AED]/30 flex items-center justify-center text-purple-400 shrink-0">
                <Lock className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <div className="text-xs font-black text-white">Signed NDA Protection</div>
                <div className="text-[10px] text-white/50">Full code &amp; copyright transfer</div>
              </div>
            </div>

            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-3 text-left">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <div className="text-xs font-black text-white">Signed 24h NDA</div>
                <div className="text-[10px] text-white/50">Enterprise confidentiality</div>
              </div>
            </div>

            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-3 text-left">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <div className="text-xs font-black text-white">Zero Downtime SLA</div>
                <div className="text-[10px] text-white/50">99.99% serverless reliability</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/book"
            className="w-full sm:w-auto text-center px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#FF007A] text-white font-extrabold text-xs uppercase tracking-wider shadow-glow-purple hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <span>Book Strategy Session</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/calculator"
            className="w-full sm:w-auto text-center px-8 py-3.5 sm:py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider border border-white/10 transition-all flex items-center justify-center gap-2"
          >
            <Zap className="w-4 h-4 text-amber-300" />
            <span>Interactive Estimator</span>
          </Link>
        </div>

      </div>
    </section>
  );
}


