"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { Sparkles, Code2, Rocket, Check } from "lucide-react";
import LogoCloud from "./LogoCloud";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const tabs = [
  { 
    id: "design", 
    label: "Design", 
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=1200", // Sleek UI/UX
  },
  { 
    id: "develop", 
    label: "Develop", 
    icon: Code2,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200", // Developer code Editor
  },
  { 
    id: "launch", 
    label: "Launch", 
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=1200", // Fixed Rocket Launch image
  }
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [activeTab, setActiveTab] = useState(tabs[2]);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
    
    tl.from(".hero-tag", { opacity: 0, y: 20, duration: 1 })
      .from(".hero-title span", { 
        y: 100, 
        opacity: 0, 
        duration: 1.5, 
        stagger: 0.1,
        skewY: 7
      }, "-=0.8")
      .from(".hero-para", { opacity: 0, y: 20, duration: 1 }, "-=1")
      .from(".hero-btn", { scale: 0.8, opacity: 0, duration: 1 }, "-=0.8");

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative pt-44 pb-20 px-6 min-h-screen flex flex-col items-center justify-center overflow-hidden">
      
      {/* 12-Column Grid Lines Overlay (Visual Only) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-12 gap-0 border-x border-white">
          {[...Array(11)].map((_, i) => (
            <div key={i} className="border-r border-white h-full" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start pt-10">
          <div className="hero-tag inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#1D2132] border border-white/10 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse" />
            <span className="text-[10px] font-bold tracking-widest text-white/70 uppercase whitespace-nowrap">Digital Engineering Excellence</span>
          </div>

          <h1 ref={titleRef} className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black tracking-[-0.03em] mb-4 leading-[1.05] overflow-hidden py-2">
            <span className="inline-block">Make your product</span>{" "}
            <span className="inline-block text-gradient italic">impossible to ignore.</span>
          </h1>

          <p className="hero-para text-base text-white/70 mb-8 max-w-sm leading-snug font-sans">
            We design and build premium, high-converting websites and brand systems for startups that need to look enterprise-ready today.
          </p>

          <Link href="/book" className="hero-btn px-10 py-4 bg-brand-purple text-white font-bold text-[16px] rounded-full transition-all hover:scale-105 active:scale-95 mb-10 shadow-glow-purple flex items-center justify-center">
            Book a Discovery Call
          </Link>

          <div className="hero-list space-y-3">
             {[
               "Built for growing startups",
               "Express process and delivery",
               "Easy to manage and update"
             ].map((text, i) => (
               <div key={i} className="flex items-center gap-2.5 text-white/50 font-medium text-[14px]">
                  <Check className="w-4 h-4 text-brand-purple" strokeWidth={3} />
                  {text}
               </div>
             ))}
          </div>
        </div>

        {/* Right Column: Borderless Image & Tabs */}
        <div className="relative flex flex-col w-full items-center mt-12 lg:mt-0">
          
          {/* Borderless Floating Image Section */}
          <div className="relative w-full aspect-[4/3] flex items-end justify-center">
             {/* Soft glow behind the image */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-purple opacity-[0.2] blur-[100px] rounded-full pointer-events-none" />
             
             <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
                  animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                  exit={{ opacity: 0, filter: "blur(10px)", transition: { duration: 0.2 } }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0 flex items-center justify-center w-full h-full"
                >
                   <img 
                     src={activeTab.image} 
                     alt={activeTab.label} 
                     className="w-full h-full object-cover select-none mix-blend-screen"
                     style={{
                       maskImage: "radial-gradient(ellipse at center, black 20%, transparent 75%)",
                       WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 75%)"
                     }}
                   />
                </motion.div>
             </AnimatePresence>
          </div>

          {/* Tab Bar */}
          <div className="w-[90%] md:w-[80%] xl:w-[70%] grid grid-cols-3 border border-white/10 divide-x divide-white/10 bg-brand-card/50 backdrop-blur-md relative z-20 mt-[-10%] sm:mt-[-5%] lg:mt-[-10%] rounded-2xl overflow-hidden shadow-premium">
             {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab.id === tab.id;
                return (
                   <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab)}
                    className={`flex items-center justify-center gap-2 py-5 text-sm font-bold transition-all w-full cursor-pointer ${
                      isActive 
                        ? "bg-brand-white text-brand-bg" 
                        : "text-white/40 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? "text-brand-purple" : "text-white/20"}`} style={{ strokeWidth: 2.5 }} />
                    <span className={isActive ? "text-brand-bg" : "text-white/40"}>{tab.label}</span>
                  </button>
                );
             })}
          </div>

        </div>

      </div>

    </section>
  );
}
