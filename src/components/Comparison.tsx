"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

export default function Comparison() {
  return (
    <section className="py-32 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-20 text-center">
          Pixarrow vs <span className="text-white/30">Traditional Agencies</span>
        </h2>
        
        <div className="rounded-[3rem] border border-white/10 overflow-hidden bg-white/[0.02] backdrop-blur-3xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="p-8 text-xs font-black uppercase tracking-widest text-white/30">Feature</th>
                <th className="p-8 text-xs font-black uppercase tracking-widest text-[#00F2FF]">Pixarrow</th>
                <th className="p-8 text-xs font-black uppercase tracking-widest text-white/30">Traditional</th>
              </tr>
            </thead>
            <tbody>
              {[
                { f: "Timeline", p: "4-6 Weeks", t: "3-6 Months" },
                { f: "Pricing", p: "Fixed & Transparent", t: "Variable & Opaque" },
                { f: "Process", p: "Code-First Iteration", t: "Static Mockup Bloat" },
                { f: "Communication", p: "Direct with Founders", t: "Layers of Account Mgrs" },
                { f: "Tech Stack", p: "Next.js / 15 App Router", t: "Legacy WordPress / PHP" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/[0.01] transition-colors">
                  <td className="p-8 font-medium text-white/50">{row.f}</td>
                  <td className="p-8 font-black text-white flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-500" /> {row.p}
                  </td>
                  <td className="p-8 font-medium text-white/20 flex items-center gap-3">
                    <X className="w-4 h-4 text-rose-500/50" /> {row.t}
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
