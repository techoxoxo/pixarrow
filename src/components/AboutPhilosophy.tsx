"use client";

import { motion } from "framer-motion";

export default function AboutPhilosophy() {
  return (
    <section className="py-32 px-6 relative z-10 overflow-hidden">
       {/* Visual Accent */}
       <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 opacity-20 blur-[60px] translate-x-1/2 -translate-y-1/2" />
       
       <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-start">
          <div className="w-full md:w-1/2">
             <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-tight relative">
                Helping challenger brands look like <br/><span className="text-gradient">market leaders.</span>
                <div className="absolute -top-10 -right-10 w-20 h-20 border-t-8 border-r-8 border-yellow-400 opacity-20" />
             </h2>
          </div>
          
          <div className="w-full md:w-1/2 space-y-8">
             <p className="text-2xl text-white/50 leading-relaxed font-sans">
                Believe it or not, build times are over-hyped. Most engineering heavy lifting can be done in a fraction of previous studio standards.
             </p>
             <p className="text-2xl text-white/50 leading-relaxed font-sans">
                We take the burden off your team, operating as a high-end extension that builds systems, not only sites. Every line of code and every pixel is engineered for scale.
             </p>
          </div>
       </div>
    </section>
  );
}
