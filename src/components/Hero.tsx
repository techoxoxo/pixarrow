"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, Check, TrendingUp, Users, DollarSign, Target, 
  Zap, ShieldCheck
} from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const [isBgVideoMuted, setIsBgVideoMuted] = useState(true);
  const [isStudioMuted, setIsStudioMuted] = useState(true);

  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const studioVideoRef = useRef<HTMLVideoElement>(null);

  const bgShowreelSrc = "/video/Pixarrow - Connecting You With Pixels. - Pixarrow (1080p, h264).mp4";
  const studioTitleSrc = "/video/We Are Pixarrow - Pixarrow (1080p, h264).mp4";

  return (
    <section className="relative pt-24 sm:pt-36 md:pt-40 pb-12 sm:pb-24 px-3.5 sm:px-6 min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#070114]">
      
      {/* 1. CRISP, CLEARLY VISIBLE FULL-BLEED BACKGROUND VIDEO */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={bgVideoRef}
          src={bgShowreelSrc}
          autoPlay
          loop
          muted={isBgVideoMuted}
          playsInline
          className="w-full h-full object-cover scale-105 opacity-80 brightness-95 contrast-105"
        />
        
        {/* Subtle, Sophisticated Gradient Masks */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070114]/92 via-[#070114]/60 to-[#070114]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070114] via-transparent to-[#070114]/75" />
        <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-[#070114] to-transparent" />
        
        {/* Ambient Neon Highlights */}
        <div className="absolute top-[15%] left-[-10%] w-[50vw] h-[50vw] bg-[#7C3AED]/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50vw] h-[50vw] bg-[#FF007A]/15 blur-[140px] rounded-full" />
      </div>

      {/* Cyber Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-grid-pattern z-[1]" />

      {/* 2. DYNAMIC 2-COLUMN HERO LAYOUT */}
      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        
        {/* Left Column: Vision, Pitch & CTAs */}
        <div className="flex flex-col items-start lg:col-span-7">
          
          {/* Status Badges Row */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 bg-[#7C3AED]/25 border border-[#7C3AED]/50 rounded-full text-[10px] sm:text-xs font-black tracking-widest text-[#C084FC] uppercase shadow-[0_0_20px_rgba(124,58,237,0.35)] backdrop-blur-xl"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A855F7] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A855F7]" />
              </span>
              <span>We Grow Brands</span>
            </motion.div>

          </div>

          {/* Headline */}
          <h1 className="text-[2.15rem] xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4.3rem] font-black tracking-tight leading-[1.08] sm:leading-[1.04] text-white mb-3.5 sm:mb-6">
            We turn ideas into <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF007A] via-[#7C3AED] to-[#00DFD8] drop-shadow-[0_0_40px_rgba(124,58,237,0.4)]">
              Digital Powerhouses.
            </span>
          </h1>

          {/* Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-white/80 mb-5 sm:mb-8 max-w-2xl leading-relaxed font-normal">
            We engineer mission-critical web applications, high-throughput mobile platforms &amp; aggressive performance marketing systems. Powered by <span className="text-white font-bold">Next.js 16, NestJS, React, Fastify, Python,</span> and <span className="text-white font-bold">Shopify Plus</span>.
          </p>

          {/* Action Buttons Row with Audio Toggle */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 mb-5 sm:mb-6 w-full sm:w-auto">
            <Link 
              href="/book" 
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-[#7C3AED] to-[#FF007A] hover:opacity-95 text-white text-sm sm:text-base font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-glow-purple flex items-center justify-center gap-2 text-center"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>

            <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <Link 
                href="/calculator" 
                className="w-full sm:w-auto px-4 sm:px-6 py-3.5 sm:py-4 bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 hover:border-white/40 text-white text-xs sm:text-base font-bold rounded-full transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-1.5 backdrop-blur-xl shadow-lg text-center"
              >
                <span>Estimate Cost</span>
                <span className="text-[10px] bg-[#00DFD8]/20 text-[#00DFD8] px-1.5 py-0.5 rounded-full font-bold">Free</span>
              </Link>
            </div>
          </div>

          {/* Guarantee Badges */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mb-6 sm:mb-8 text-[10px] sm:text-xs text-white/70 font-medium">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <Check className="w-3.5 h-3.5" />
              Signed NDA in 24h
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5 text-purple-300 font-semibold">
              <Check className="w-3.5 h-3.5" />
              100% IP Ownership
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5 text-cyan-300 font-semibold">
              <Check className="w-3.5 h-3.5" />
              15-Day Guarantee
            </span>
          </div>

          {/* 2x2 Stats Grid Layout */}
          <div className="grid grid-cols-2 gap-2 sm:gap-4 lg:gap-8 max-w-lg w-full">
            <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-0 rounded-2xl bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-0">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <Users className="w-4 h-4 sm:w-6 sm:h-6 text-blue-400" />
              </div>
              <div>
                <div className="text-lg sm:text-3xl font-black text-white leading-tight">50+</div>
                <div className="text-[9px] sm:text-xs font-bold text-white/50 tracking-wider uppercase">Delivered</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-0 rounded-2xl bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-0">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#FF007A]/10 border border-[#FF007A]/20 flex items-center justify-center shrink-0">
                <DollarSign className="w-4 h-4 sm:w-6 sm:h-6 text-[#FF007A]" />
              </div>
              <div>
                <div className="text-lg sm:text-3xl font-black text-white leading-tight">$45M+</div>
                <div className="text-[9px] sm:text-xs font-bold text-white/50 tracking-wider uppercase">Processed</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-0 rounded-2xl bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-0">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                <TrendingUp className="w-4 h-4 sm:w-6 sm:h-6 text-amber-400" />
              </div>
              <div>
                <div className="text-lg sm:text-3xl font-black text-white leading-tight">200%</div>
                <div className="text-[9px] sm:text-xs font-bold text-white/50 tracking-wider uppercase">Avg. Lift</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-0 rounded-2xl bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-0">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#7C3AED]/10 border border-[#7C3AED]/20 flex items-center justify-center shrink-0">
                <Target className="w-4 h-4 sm:w-6 sm:h-6 text-[#A855F7]" />
              </div>
              <div>
                <div className="text-lg sm:text-3xl font-black text-white leading-tight">98%</div>
                <div className="text-[9px] sm:text-xs font-bold text-white/50 tracking-wider uppercase">Retention</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Studio Glass Cinema Display */}
        <div className="relative flex justify-center items-center lg:col-span-5 w-full py-2 sm:py-4">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
            <div className="w-[105%] h-[105%] bg-gradient-to-tr from-[#7C3AED]/30 via-[#FF007A]/25 to-[#00DFD8]/20 blur-[80px] rounded-full" />
          </div>

          {/* Sleek Mac Studio Display Canvas */}
          <div className="relative z-10 w-full max-w-[480px]">
            <div className="relative rounded-2xl sm:rounded-3xl p-1 sm:p-1.5 bg-gradient-to-b from-white/25 via-white/10 to-white/15 border border-white/20 shadow-[0_25px_80px_rgba(0,0,0,0.8)] backdrop-blur-3xl overflow-hidden">
              
              {/* Clean Video Viewport */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#070114] rounded-xl sm:rounded-2xl">
                <video
                  ref={studioVideoRef}
                  src={studioTitleSrc}
                  autoPlay
                  loop
                  muted={isStudioMuted}
                  playsInline
                  className="w-full h-full object-cover brightness-105"
                />
              </div>

            </div>

            {/* Clean Grounded Technical Spec Strip */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mt-3 sm:mt-4 px-0 sm:px-1">
              <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/[0.05] border border-white/10 text-center backdrop-blur-md">
                <div className="text-[11px] sm:text-xs font-bold text-white flex items-center justify-center gap-1">
                  <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400 shrink-0" />
                  <span className="truncate">0.6s LCP</span>
                </div>
                <div className="text-[8px] sm:text-[9px] text-white/50 uppercase mt-0.5 font-medium truncate">Edge Speed</div>
              </div>

              <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/[0.05] border border-white/10 text-center backdrop-blur-md">
                <div className="text-[11px] sm:text-xs font-bold text-white flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-purple-400 shrink-0" />
                  <span className="truncate">100% IP</span>
                </div>
                <div className="text-[8px] sm:text-[9px] text-white/50 uppercase mt-0.5 font-medium truncate">Ownership</div>
              </div>

              <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/[0.05] border border-white/10 text-center backdrop-blur-md">
                <div className="text-[11px] sm:text-xs font-bold text-white flex items-center justify-center gap-1">
                  <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-pink-400 shrink-0" />
                  <span className="truncate">+150%</span>
                </div>
                <div className="text-[8px] sm:text-[9px] text-white/50 uppercase mt-0.5 font-medium truncate">ROI Lift</div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}

