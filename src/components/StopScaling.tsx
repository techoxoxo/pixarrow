"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const listItems = [
  "Advanced Targeting",
  "High Converting Funnels",
  "Creative Ad Strategies",
  "Data-Driven Decisions",
];

export default function StopScaling() {
  return (
    <section className="py-24 px-6 relative z-10 w-full bg-brand-bg overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column (4 Columns on desktop) */}
        <div className="flex flex-col items-start lg:col-span-4">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">
            Stop Scrolling. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF007A] to-[#7C3AED]">
              Start Scaling.
            </span>
          </h2>
          <p className="text-lg text-white/60 mb-8 max-w-sm leading-relaxed">
            We build digital systems that attract, convert & scale your business.
          </p>
          <Link href="/book" className="px-6 py-3.5 bg-[#7C3AED] hover:bg-[#7C3AED]/90 text-white font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-glow-purple flex items-center gap-2">
            <span>Book a Free Strategy Call</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Center Column: Futuristic Portal Mockup (5 Columns on desktop) */}
        <div className="relative flex justify-center items-center lg:col-span-5 h-[350px] md:h-[400px]">
          {/* Glowing concentric tunnel SVGs */}
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-70">
            <div className="w-[300px] h-[300px] rounded-full border border-dashed border-brand-purple/20 animate-[spin_40s_linear_infinite]" />
            <div className="absolute w-[240px] h-[240px] rounded-full border border-[#FF007A]/25 animate-[spin_20s_linear_infinite_reverse]" />
            <div className="absolute w-[180px] h-[180px] rounded-full border border-brand-cyan/20 animate-pulse" />
            <div className="absolute w-[120px] h-[120px] rounded-full bg-brand-purple/10 blur-xl" />
          </div>

          {/* Central Silhouette & Hologram */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            {/* Person silhouette (arms wide) outline SVG */}
            <svg className="w-48 h-48 text-white/10 absolute bottom-4 drop-shadow-[0_0_15px_rgba(124,58,237,0.1)]" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 20 c3 0 5-2 5-5 s-2-5-5-5 s-5 2-5 5 s2 5 5 5 Z M50 24 c-8 0-14 3-17 7 c-2 3-1 6 2 7 c2 1 5 0 6-2 c1-2 5-4 9-4 s8 2 9 4 c1 2 4 3 6 2 c3-1 4-4 2-7 c-3-4-9-7-17-7 Z" />
              <path d="M50 30 c-1.5 0-3 .5-3 1.5 L43 55 c-.5 2 1 4 3 4 h8 c2 0 3.5-2 3-4 L53 31.5 c0-1-1.5-1.5-3-1.5 Z" />
              <path d="M38 31 c-2-1-4 0-5 2 L22 45 c-1.5 2-.5 5 2 6 c2 1 5 0 6-2 l8-11 c1.5-2 .5-5-2-6 Z" />
              <path d="M62 31 c2-1 4 0 5 2 l11 12 c1.5 2 .5 5-2 6 c-2 1-5 0-6-2 l-8-11 c-1.5-2-.5-5 2-6 Z" />
            </svg>

            {/* Glowing Holographic Dashboard Panels */}
            
            {/* Panel 1 (Top Left) */}
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 left-6 md:left-12 bg-[#0e0524]/80 border border-[#7C3AED]/35 rounded-xl p-2 shadow-lg backdrop-blur-md w-32 text-left"
            >
              <div className="w-5 h-5 bg-brand-purple/20 rounded-md flex items-center justify-center text-[#A855F7] mb-1">
                <span className="text-[10px] font-bold">★</span>
              </div>
              <span className="text-[10px] font-black text-white/50 block uppercase">Conversion</span>
              <span className="text-xs font-black text-white">+28.4%</span>
            </motion.div>

            {/* Panel 2 (Top Right) */}
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-16 right-4 md:right-10 bg-[#0e0524]/80 border border-[#FF007A]/35 rounded-xl p-2 shadow-lg backdrop-blur-md w-28 text-left"
            >
              <span className="text-[10px] font-black text-white/50 block uppercase">Ad Spend</span>
              <span className="text-xs font-black text-white">$12.5K/mo</span>
              <div className="h-1 bg-[#FF007A] rounded-full w-4/5 mt-1" />
            </motion.div>

            {/* Panel 3 (Bottom Left) */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-16 left-2 md:left-6 bg-[#0e0524]/80 border border-brand-cyan/35 rounded-xl p-2 shadow-lg backdrop-blur-md w-28 text-left"
            >
              <span className="text-[10px] font-black text-white/50 block uppercase">ROI Rate</span>
              <span className="text-xs font-black text-[#00DFD8]">4.8X Avg</span>
            </motion.div>

            {/* Panel 4 (Bottom Right) */}
            <motion.div 
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-12 right-6 md:right-12 bg-[#0e0524]/80 border border-white/10 rounded-xl p-2 shadow-lg backdrop-blur-md w-32 text-left"
            >
              <div className="h-5 w-full flex items-center justify-between">
                <span className="text-[8px] font-black text-white/40">TRAFFIC</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>
              <span className="text-xs font-black text-white leading-none">850 active</span>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Checklists (3 Columns on desktop) */}
        <div className="flex flex-col gap-5 lg:col-span-3 items-start md:pl-8">
          {listItems.map((text, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="w-7 h-7 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/35 flex items-center justify-center text-[#A855F7] shrink-0">
                <Check className="w-4 h-4" strokeWidth={3} />
              </div>
              <span className="text-base font-bold text-white/80">{text}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
