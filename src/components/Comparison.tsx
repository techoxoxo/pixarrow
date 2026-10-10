"use client";

import { motion } from "framer-motion";
import { X, Check, Sparkles, ShieldCheck } from "lucide-react";

const rows = [
  { f: "Sprint Velocity SLA", p: "4–6 Weeks Production Launch", t: "4–9 Months of Bloat & Delays", sub: "Milestone Guaranteed" },
  { f: "Technology Standard", p: "Next.js 16 (RSC) + React 19 + TypeScript", t: "Legacy PHP / WordPress / Monoliths", sub: "100% Modern Architecture" },
  { f: "Communication Model", p: "Direct Private Slack with Lead Architect", t: "Layers of Junior Account Managers", sub: "Zero Middlemen" },
  { f: "Code & IP Transfer", p: "100% Unconditional Git & IP Handover", t: "Proprietary Lock-in & Licensing Fees", sub: "Client Sovereignty" },
  { f: "Core Web Vitals", p: "Sub-0.4s Global LCP & 100/100 Lighthouse", t: "3–6s Sluggish Heavy Load Times", sub: "Edge CDN Cached" },
  { f: "Pricing Structure", p: "Fixed-Scope Sprints & $3.5k/mo Pods", t: "Opaque Hourly Overages & Retainers", sub: "Predictable ROI" },
  { f: "Satisfaction Guarantee", p: "15-Day Risk-Free Trial Period", t: "Zero Recourse Lock-in Contracts", sub: "Zero Risk" },
];

export default function Comparison() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 relative z-10 w-full overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-[#A855F7] text-xs font-black uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>The Competitive Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-4 sm:mb-6 leading-tight">
            The Pixarrow Engine vs <br />
            <span className="text-white/40">
              Legacy Agency Model.
            </span>
          </h2>

          <p className="text-sm sm:text-lg text-white/60 font-sans">
            Why high-growth tech founders choose Pixarrow over traditional bloated design and dev shops.
          </p>
        </div>
        
        {/* MOBILE CARDS VIEW (< md) */}
        <div className="block md:hidden space-y-3 mb-8">
          {rows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-4 rounded-2xl bg-gradient-to-b from-[#120529]/90 to-[#0a0217]/95 border border-white/10 space-y-2.5 text-left backdrop-blur-xl"
            >
              <div className="flex items-center justify-between gap-2 border-b border-white/5 pb-2">
                <span className="font-black text-white text-xs sm:text-sm">{row.f}</span>
                <span className="text-[10px] font-mono text-[#A855F7] uppercase px-2 py-0.5 rounded-full bg-[#7C3AED]/15 border border-[#7C3AED]/30 shrink-0">
                  {row.sub}
                </span>
              </div>

              {/* Pixarrow */}
              <div className="p-2.5 rounded-xl bg-[#7C3AED]/15 border border-[#7C3AED]/30 flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-emerald-400" />
                </div>
                <div>
                  <div className="text-[9px] font-bold uppercase tracking-wider text-emerald-400">Pixarrow Standard</div>
                  <div className="text-xs font-bold text-white">{row.p}</div>
                </div>
              </div>

              {/* Legacy */}
              <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3 h-3 text-rose-500/60" />
                </div>
                <div>
                  <div className="text-[9px] font-bold uppercase tracking-wider text-rose-400/70">Legacy Agencies</div>
                  <div className="text-xs text-white/50">{row.t}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* DESKTOP TABLE VIEW (>= md) */}
        <div className="hidden md:block rounded-[2.5rem] border border-white/10 overflow-hidden bg-gradient-to-b from-[#120529]/90 via-[#0a0217]/95 to-[#04000b] backdrop-blur-3xl shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.02]">
                <th className="p-6 sm:p-8 text-xs font-black uppercase tracking-widest text-white/40">Capability Benchmark</th>
                <th className="p-6 sm:p-8 text-xs font-black uppercase tracking-widest text-[#00DFD8] bg-[#7C3AED]/15">
                  Pixarrow Standard
                </th>
                <th className="p-6 sm:p-8 text-xs font-black uppercase tracking-widest text-white/30">
                  Traditional Agencies
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                  <td className="p-6 sm:p-8">
                    <div className="font-black text-white text-sm sm:text-base">{row.f}</div>
                    <div className="text-[11px] font-mono text-[#A855F7] uppercase mt-0.5">{row.sub}</div>
                  </td>
                  <td className="p-6 sm:p-8 bg-[#7C3AED]/5 font-black text-white text-sm sm:text-base">
                    <div className="flex items-center gap-3 text-emerald-300">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <span>{row.p}</span>
                    </div>
                  </td>
                  <td className="p-6 sm:p-8 font-medium text-white/40 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0">
                        <X className="w-3.5 h-3.5 text-rose-500/60" />
                      </div>
                      <span>{row.t}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}


