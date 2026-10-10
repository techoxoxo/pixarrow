"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, Zap, ArrowRight, Film, Gauge
} from "lucide-react";
import Link from "next/link";

export default function ShowreelSection() {
  const [activeTab, setActiveTab] = useState<"full" | "brand">("full");
  const videoRef = useRef<HTMLVideoElement>(null);

  const fullShowreelSrc = "/video/Pixarrow - Connecting You With Pixels. - Pixarrow (1080p, h264).mp4";
  const brandingMotionSrc = "/video/We Are Pixarrow - Pixarrow (1080p, h264).mp4";

  const currentSrc = activeTab === "full" ? fullShowreelSrc : brandingMotionSrc;

  // Handle switching video reels
  const handleTabSwitch = (tab: "full" | "brand") => {
    setActiveTab(tab);
    if (videoRef.current) {
      videoRef.current.src = tab === "full" ? fullShowreelSrc : brandingMotionSrc;
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <section className="py-14 sm:py-24 px-2 sm:px-6 relative overflow-hidden bg-[#070114] text-white">
      {/* Ambient Lighting Rays */}
      <div className="absolute top-[10%] left-[10%] w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] bg-[#7C3AED]/15 blur-[120px] sm:blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] bg-[#FF007A]/15 blur-[120px] sm:blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] right-[30%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#00DFD8]/10 blur-[100px] sm:blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-gradient-to-r from-[#7C3AED]/20 via-[#FF007A]/20 to-[#00DFD8]/20 border border-[#7C3AED]/40 text-purple-300 text-[10px] sm:text-xs font-black uppercase tracking-widest mb-4 sm:mb-6 shadow-[0_0_25px_rgba(124,58,237,0.3)] backdrop-blur-md"
          >
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300 shrink-0" />
            <span>Pixarrow Engineering &amp; Motion Architecture</span>
          </motion.div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-4 sm:mb-6 leading-[1.1]">
            Connecting You <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF007A] via-[#7C3AED] to-[#00DFD8] drop-shadow-[0_0_35px_rgba(124,58,237,0.35)]">
              With Digital Precision.
            </span>
          </h2>

          <p className="text-xs sm:text-base md:text-lg text-white/70 leading-relaxed font-normal max-w-2xl mx-auto px-2">
            Experience our high-velocity design system, edge engineering pipeline, and conversion mechanics in crystal-clear 1080p motion.
          </p>

          {/* Interactive Reel Pill Switcher */}
          <div className="inline-flex p-1 sm:p-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-2xl mt-5 sm:mt-8 shadow-2xl">
            <button
              onClick={() => handleTabSwitch("full")}
              className={`px-4 sm:px-7 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "full"
                  ? "bg-gradient-to-r from-[#7C3AED] to-[#FF007A] text-white shadow-glow-purple"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Film className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Agency Showreel</span>
            </button>

            <button
              onClick={() => handleTabSwitch("brand")}
              className={`px-4 sm:px-7 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "brand"
                  ? "bg-gradient-to-r from-[#7C3AED] to-[#FF007A] text-white shadow-glow-purple"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300" />
              <span>Motion Identity</span>
            </button>
          </div>
        </div>

        {/* ULTRA-WIDE CINEMA THEATRE CANVAS */}
        <div className="relative max-w-6xl lg:max-w-7xl mx-auto">
          {/* Reactive Ambilight Glow Aura */}
          <div className="absolute -inset-3 sm:-inset-6 bg-gradient-to-r from-[#7C3AED]/30 via-[#FF007A]/25 to-[#00DFD8]/20 blur-[50px] sm:blur-[90px] rounded-3xl opacity-80 pointer-events-none" />

          {/* Titanium & Glass Outer Chassis */}
          <div className="relative rounded-2xl sm:rounded-3xl p-1 sm:p-2 bg-gradient-to-b from-white/20 via-white/5 to-white/10 border border-white/15 shadow-[0_25px_90px_rgba(0,0,0,0.9)] backdrop-blur-3xl overflow-hidden">
            
            {/* Inner Viewport - Full 16:9 for clean video presence */}
            <div className="relative w-full aspect-video sm:aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden bg-[#050010] border border-white/10">
              
              {/* HTML5 Video Element */}
              <video
                ref={videoRef}
                src={currentSrc}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover brightness-105"
              />

            </div>

          </div>

          {/* SEPARATE HIGH-TECH ENGINEERING & PERFORMANCE SPEC CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6">
            
            {/* Spec Card 1 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-purple-500/30 transition-all backdrop-blur-xl group">
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:scale-105 transition-transform">
                  <Gauge className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <span className="text-[10px] font-mono font-bold text-purple-300 bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded-full">
                  &lt; 0.7s LCP
                </span>
              </div>
              <h4 className="text-sm font-bold text-white mb-1 group-hover:text-purple-200 transition-colors">
                Sub-0.7s LCP Engineering
              </h4>
              <p className="text-xs text-white/60 leading-relaxed">
                Edge-rendered Next.js architecture with instant client hydration and zero layout shifts.
              </p>
            </div>

            {/* Spec Card 2 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-pink-500/30 transition-all backdrop-blur-xl group">
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-pink-500/15 border border-pink-500/30 flex items-center justify-center text-[#FF007A] group-hover:scale-105 transition-transform">
                  <Sparkles className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <span className="text-[10px] font-mono font-bold text-pink-300 bg-pink-500/10 border border-pink-500/20 px-2 py-0.5 rounded-full">
                  60 FPS Motion
                </span>
              </div>
              <h4 className="text-sm font-bold text-white mb-1 group-hover:text-pink-200 transition-colors">
                Bespoke Motion &amp; 3D Depth
              </h4>
              <p className="text-xs text-white/60 leading-relaxed">
                GPU-accelerated micro-interactions tailored for high conversion psychology.
              </p>
            </div>

            {/* Spec Card 3 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-cyan-500/30 transition-all backdrop-blur-xl group">
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-[#00DFD8] group-hover:scale-105 transition-transform">
                  <Zap className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <span className="text-[10px] font-mono font-bold text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-full">
                  $45M+ Volume
                </span>
              </div>
              <h4 className="text-sm font-bold text-white mb-1 group-hover:text-cyan-200 transition-colors">
                Measurable Revenue Engine
              </h4>
              <p className="text-xs text-white/60 leading-relaxed">
                High-conversion architectures engineered to turn traffic into compounding ARR.
              </p>
            </div>

          </div>

        </div>

        {/* Action Strip */}
        <div className="mt-8 sm:mt-12 text-center">
          <Link
            href="/book"
            className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-[#7C3AED] to-[#FF007A] text-white text-xs sm:text-base font-bold rounded-full shadow-glow-purple hover:scale-105 active:scale-95 transition-all"
          >
            <span>Architect Your Digital Product</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
