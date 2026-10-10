"use client";

import { motion } from "framer-motion";
import { Users, DollarSign, TrendingUp, Zap, ShieldCheck, Award, Lock, Sparkles } from "lucide-react";

const stats = [
  {
    value: "50+",
    label: "Flagship Systems Shipped",
    sub: "100% On-Time Delivery SLA",
    icon: Users,
    color: "from-[#7C3AED] to-[#FF007A]",
    glow: "rgba(124,58,237,0.3)"
  },
  {
    value: "$40M+",
    label: "Client Revenue & Ad Volume",
    sub: "3.8X Average Client ROI",
    icon: DollarSign,
    color: "from-[#FF007A] to-[#00DFD8]",
    glow: "rgba(255,0,122,0.3)"
  },
  {
    value: "<0.4s",
    label: "Global LCP Core Web Vital",
    sub: "Top 0.1% Web Performance",
    icon: Zap,
    color: "from-[#00DFD8] to-[#7C3AED]",
    glow: "rgba(0,223,216,0.3)"
  },
  {
    value: "99.98%",
    label: "Infrastructure Uptime SLA",
    sub: "Edge-Distributed CDN Cache",
    icon: TrendingUp,
    color: "from-[#F59E0B] to-[#10B981]",
    glow: "rgba(16,185,129,0.3)"
  },
];

const trustBadges = [
  { icon: ShieldCheck, text: "SOC-2 & GDPR Compliance Architecture" },
  { icon: Lock, text: "Strict 24-Hour NDA & Confidentiality" },
  { icon: Award, text: "Next.js 16 & React 19 Production Standard" },
  { icon: Sparkles, text: "15-Day Zero-Risk Trial Guarantee" },
];

export default function StatsBanner() {
  return (
    <section className="py-16 px-5 sm:px-8 md:px-10 lg:px-12 bg-brand-bg relative z-10 w-full overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#7C3AED]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto">
        <div className="relative rounded-[3rem] p-8 sm:p-12 md:p-16 bg-gradient-to-b from-[#14062c]/90 via-[#0a0217]/95 to-[#04000b] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl overflow-hidden">
          
          {/* Ambient Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#FF007A]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#00DFD8]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Top Header Strip */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-10 border-b border-white/10 relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-black uppercase tracking-widest text-[#00DFD8]">
                Institutional Scale &amp; Performance Benchmarks
              </span>
            </div>
            <div className="text-xs font-mono text-white/50">
              Audited 2026 Client Fleet Performance
            </div>
          </div>

          {/* 4 Stats Metric Monoliths */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all group flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 group-hover:scale-110 group-hover:text-white transition-all shadow-inner">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                      Metric 0{i + 1}
                    </span>
                  </div>

                  <div>
                    <div className={`text-4xl sm:text-5xl font-black tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r ${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="text-sm font-black text-white leading-tight mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs font-medium text-white/50">
                      {stat.sub}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Trust & Compliance Chips */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {trustBadges.map((badge, idx) => {
              const BadgeIcon = badge.icon;
              return (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-white/70">
                  <BadgeIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-semibold">{badge.text}</span>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

