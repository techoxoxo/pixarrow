"use client";

import { Users, Briefcase, DollarSign, TrendingUp } from "lucide-react";

const stats = [
  {
    value: "50+",
    label: "Happy Clients",
    icon: <Users className="w-5 h-5 text-blue-300" />,
  },
  {
    value: "125+",
    label: "Projects Completed",
    icon: <Briefcase className="w-5 h-5 text-purple-300" />,
  },
  {
    value: "40M+",
    label: "Ad Spend Managed",
    icon: <DollarSign className="w-5 h-5 text-pink-300" />,
  },
  {
    value: "2X-5X",
    label: "Avg. Client ROI",
    icon: <TrendingUp className="w-5 h-5 text-emerald-300" />,
  },
];

export default function StatsBanner() {
  return (
    <section className="py-12 px-6 bg-brand-bg relative z-10 w-full">
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#0055ff] via-[#7c3aed] to-[#d946ef] rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(124,58,237,0.3)] relative overflow-hidden">
        {/* Decorative ambient patterns */}
        <div className="absolute inset-0 bg-white/[0.03] pointer-events-none" />
        <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center relative z-10">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left w-full justify-center">
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 shadow-inner">
                {stat.icon}
              </div>

              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-black text-white leading-tight">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-bold text-white/70 uppercase tracking-wider mt-1.5 font-sans">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
