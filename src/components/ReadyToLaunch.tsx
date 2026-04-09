"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ReadyToLaunch() {
  return (
    <section className="py-40 px-6 relative z-10 text-center overflow-hidden">
       {/* Glows */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF00FF] opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />
       
       <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-tight">
             Ready for <br/><span className="text-gradient">lift-off?</span>
          </h2>
          <p className="text-2xl text-white/50 mb-12 font-sans max-w-2xl mx-auto">
             Let&apos;s build your system and scale your presence today.
          </p>
          <Link 
            href="/book" 
            className="group relative inline-flex items-center gap-4 px-12 py-6 bg-white text-brand-bg rounded-full font-black text-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 duration-300 shadow-2xl"
          >
             <span className="relative z-10 transition-colors group-hover:text-white">Book a Discovery Call</span>
             <ArrowRight className="w-8 h-8 relative z-10 group-hover:translate-x-2 transition-transform duration-300 group-hover:text-white" />
             <div className="absolute inset-0 bg-brand-bg translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </Link>
       </div>
    </section>
  );
}
