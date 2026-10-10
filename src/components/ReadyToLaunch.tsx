"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Lock, Clock, Calculator } from "lucide-react";

export default function ReadyToLaunch() {
  return (
    <section className="py-24 px-6 relative z-10 text-center overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-[#7C3AED]/15 blur-[160px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="p-10 sm:p-16 rounded-[3rem] bg-gradient-to-r from-[#1b073a] via-[#100324] to-[#0c051a] border border-[#7C3AED]/40 shadow-[0_20px_60px_rgba(124,58,237,0.25)] relative overflow-hidden">
          
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#FF007A]/20 blur-[80px] rounded-full pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7C3AED]/15 border border-[#7C3AED]/30 text-[#A855F7] text-xs font-black uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Ready For Lift-Off</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Launch Your Next Milestone <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF007A] via-[#7C3AED] to-[#00DFD8]">
              In 4 Weeks.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s build an unfair market advantage together. Book a 30-minute discovery session with our Lead Architect or calculate your scope in 2 minutes.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <Link 
              href="/book" 
              className="px-8 py-4 bg-gradient-to-r from-[#7C3AED] to-[#FF007A] hover:opacity-95 text-white font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-glow-purple flex items-center justify-center gap-2"
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/calculator"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-full transition-all flex items-center justify-center gap-2"
            >
              <Calculator className="w-4 h-4 text-amber-300" />
              <span>Calculate Project Cost</span>
            </Link>
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/60 pt-6 border-t border-white/10">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              24h Signed NDA
            </span>
            <span className="flex items-center gap-1.5 text-purple-300">
              <Lock className="w-4 h-4" />
              Signed NDA Protection
            </span>
            <span className="flex items-center gap-1.5 text-cyan-300">
              <Clock className="w-4 h-4" />
              15-Day Risk-Free Trial
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}

