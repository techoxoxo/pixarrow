"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Check, TrendingUp, Users, DollarSign, Target, 
  Volume2, VolumeX, Sparkles, Zap, ShieldCheck, 
  Layers, ExternalLink, Play, Pause, Maximize2, Minimize, X
} from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const [isBgVideoMuted, setIsBgVideoMuted] = useState(true);
  const [isStudioMuted, setIsStudioMuted] = useState(true);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const studioVideoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  // Modal Video State
  const [modalPlaying, setModalPlaying] = useState(true);
  const [modalMuted, setModalMuted] = useState(false);
  const [modalProgress, setModalProgress] = useState(0);
  const [modalCurrentTime, setModalCurrentTime] = useState("0:00");
  const [modalDuration, setModalDuration] = useState("0:00");
  const [modalVolume, setModalVolume] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const modalContainerRef = useRef<HTMLDivElement>(null);

  const toggleBgVideoMute = () => {
    if (bgVideoRef.current) {
      bgVideoRef.current.muted = !bgVideoRef.current.muted;
      setIsBgVideoMuted(bgVideoRef.current.muted);
    }
  };

  const toggleStudioMute = () => {
    if (studioVideoRef.current) {
      studioVideoRef.current.muted = !studioVideoRef.current.muted;
      setIsStudioMuted(studioVideoRef.current.muted);
    }
  };

  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds)) return "0:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleModalTimeUpdate = () => {
    if (modalVideoRef.current) {
      const current = modalVideoRef.current.currentTime;
      const duration = modalVideoRef.current.duration || 1;
      setModalProgress((current / duration) * 100);
      setModalCurrentTime(formatTime(current));
    }
  };

  const handleModalLoadedMetadata = () => {
    if (modalVideoRef.current) {
      setModalDuration(formatTime(modalVideoRef.current.duration));
    }
  };

  const handleModalSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalVideoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      modalVideoRef.current.currentTime = pos * (modalVideoRef.current.duration || 1);
    }
  };

  const toggleModalPlay = () => {
    if (modalVideoRef.current) {
      if (modalVideoRef.current.paused) {
        modalVideoRef.current.play();
        setModalPlaying(true);
      } else {
        modalVideoRef.current.pause();
        setModalPlaying(false);
      }
    }
  };

  const toggleModalMute = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.muted = !modalVideoRef.current.muted;
      setModalMuted(modalVideoRef.current.muted);
    }
  };

  const handleModalVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setModalVolume(val);
    if (modalVideoRef.current) {
      modalVideoRef.current.volume = val;
      modalVideoRef.current.muted = val === 0;
      setModalMuted(val === 0);
    }
  };

  const toggleFullscreen = () => {
    if (!modalContainerRef.current) return;
    if (!document.fullscreenElement) {
      modalContainerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const bgShowreelSrc = "/video/Pixarrow - Connecting You With Pixels. - Pixarrow (1080p, h264).mp4";
  const studioTitleSrc = "/video/We Are Pixarrow - Pixarrow (1080p, h264).mp4";

  return (
    <section className="relative pt-36 sm:pt-40 pb-24 px-6 min-h-screen flex items-center justify-center overflow-hidden bg-[#070114]">
      
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
        
        {/* Subtle, Sophisticated Gradient Masks: Keeps video clearly visible while ensuring text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070114]/90 via-[#070114]/50 to-[#070114]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070114] via-transparent to-[#070114]/70" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#070114] to-transparent" />
        
        {/* Ambient Neon Highlights */}
        <div className="absolute top-[15%] left-[-10%] w-[45vw] h-[45vw] bg-[#7C3AED]/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[45vw] h-[45vw] bg-[#FF007A]/15 blur-[150px] rounded-full" />
      </div>

      {/* Cyber Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-grid-pattern z-[1]" />

      {/* 2. DYNAMIC 2-COLUMN HERO LAYOUT */}
      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        
        {/* Left Column: Vision, Pitch & CTAs */}
        <div className="flex flex-col items-start lg:col-span-7">
          
          {/* Status Badges Row */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#7C3AED]/25 border border-[#7C3AED]/50 rounded-full text-xs font-black tracking-widest text-[#C084FC] uppercase shadow-[0_0_20px_rgba(124,58,237,0.35)] backdrop-blur-xl"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A855F7] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A855F7]" />
              </span>
              <span>We Grow Brands</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/[0.06] border border-white/15 rounded-full text-xs font-bold text-white/90 backdrop-blur-xl"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-white/80">Next.js 16 &amp; Full-Stack Growth Studio</span>
            </motion.div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.4rem] font-black tracking-tighter leading-[1.04] text-white mb-6">
            We turn ideas into <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF007A] via-[#7C3AED] to-[#00DFD8] drop-shadow-[0_0_40px_rgba(124,58,237,0.4)]">
              Digital Powerhouses.
            </span>
          </h1>

          {/* Paragraph */}
          <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed font-normal drop-shadow-sm">
            We engineer mission-critical web applications, high-throughput mobile platforms &amp; aggressive performance marketing systems. Powered by <span className="text-white font-bold">Next.js 16, NestJS, React, Fastify, Python,</span> and <span className="text-white font-bold">Shopify Plus</span>.
          </p>

          {/* Action Buttons Row with Audio Toggle */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6 w-full sm:w-auto">
            <Link 
              href="/book" 
              className="px-8 py-4 bg-gradient-to-r from-[#7C3AED] to-[#FF007A] hover:opacity-95 text-white text-base font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-glow-purple flex items-center justify-center gap-2 text-center"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link 
              href="/calculator" 
              className="px-6 py-4 bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 hover:border-white/40 text-white text-base font-bold rounded-full transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 backdrop-blur-xl shadow-lg"
            >
              <span>Estimate Cost</span>
              <span className="text-xs bg-[#00DFD8]/20 text-[#00DFD8] px-2 py-0.5 rounded-full font-bold">Free</span>
            </Link>

            {/* Background Video Audio Toggle */}
            <button
              onClick={toggleBgVideoMute}
              className="px-5 py-4 bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 hover:border-[#7C3AED]/50 text-white text-sm font-bold rounded-full transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer shadow-lg backdrop-blur-xl"
              title={isBgVideoMuted ? "Unmute Background Video Sound" : "Mute Background Video Sound"}
            >
              {isBgVideoMuted ? (
                <>
                  <VolumeX className="w-4 h-4 text-white/60" />
                  <span className="text-white/80">Sound: Off</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-cyan-300 animate-pulse" />
                  <span className="text-cyan-300 font-black">Sound: Live</span>
                </>
              )}
            </button>
          </div>

          {/* Guarantee Badges */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-8 text-xs text-white/70 font-medium">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <Check className="w-3.5 h-3.5" />
              Signed NDA in 24h
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5 text-purple-300 font-semibold">
              <Check className="w-3.5 h-3.5" />
              100% IP &amp; Code Ownership
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5 text-cyan-300 font-semibold">
              <Check className="w-3.5 h-3.5" />
              15-Day Quality Guarantee
            </span>
          </div>

          {/* 2x2 Stats Grid Layout */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-6 max-w-lg w-full">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white leading-tight">50+</div>
                <div className="text-[10px] sm:text-xs font-bold text-white/50 tracking-wider uppercase">Projects Delivered</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FF007A]/10 border border-[#FF007A]/20 flex items-center justify-center shrink-0">
                <DollarSign className="w-6 h-6 text-[#FF007A]" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white leading-tight">$45M+</div>
                <div className="text-[10px] sm:text-xs font-bold text-white/50 tracking-wider uppercase">Volume Processed</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                <TrendingUp className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white leading-tight">200%</div>
                <div className="text-[10px] sm:text-xs font-bold text-white/50 tracking-wider uppercase">Avg. Growth Lift</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#7C3AED]/10 border border-[#7C3AED]/20 flex items-center justify-center shrink-0">
                <Target className="w-6 h-6 text-[#A855F7]" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white leading-tight">98%</div>
                <div className="text-[10px] sm:text-xs font-bold text-white/50 tracking-wider uppercase">Client Retention</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Studio Glass Cinema Display (Looping Title Reel "We Are Pixarrow") */}
        <div className="relative flex justify-center items-center lg:col-span-5 w-full py-4">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
            <div className="w-[105%] h-[105%] bg-gradient-to-tr from-[#7C3AED]/30 via-[#FF007A]/25 to-[#00DFD8]/20 blur-[80px] rounded-full" />
          </div>

          {/* Sleek Mac Studio Display Canvas */}
          <div className="relative z-10 w-full max-w-[480px]">
            <div className="relative rounded-3xl p-1.5 bg-gradient-to-b from-white/25 via-white/10 to-white/15 border border-white/20 shadow-[0_25px_80px_rgba(0,0,0,0.8)] backdrop-blur-3xl overflow-hidden">
              
              {/* Top Chrome Window Bar */}
              <div className="px-4 py-2.5 bg-[#0e061e] border-b border-white/10 flex items-center justify-between rounded-t-[1.3rem]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] font-mono text-white/60 ml-2">pixarrow.app • studio reel</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    60 FPS
                  </span>

                  <button
                    type="button"
                    onClick={toggleStudioMute}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white/80 hover:text-white transition-all cursor-pointer"
                    title={isStudioMuted ? "Unmute studio reel" : "Mute studio reel"}
                  >
                    {isStudioMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-cyan-300" />}
                  </button>
                </div>
              </div>

              {/* Clean Video Viewport (No hover overlays) */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#070114] rounded-b-[1.3rem]">
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
            <div className="grid grid-cols-3 gap-2 mt-4 px-1">
              <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/10 text-center backdrop-blur-md">
                <div className="text-xs font-bold text-white flex items-center justify-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Sub-0.6s LCP</span>
                </div>
                <div className="text-[9px] text-white/50 uppercase mt-0.5 font-medium">Edge Architecture</div>
              </div>

              <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/10 text-center backdrop-blur-md">
                <div className="text-xs font-bold text-white flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                  <span>100% IP Code</span>
                </div>
                <div className="text-[9px] text-white/50 uppercase mt-0.5 font-medium">Client Ownership</div>
              </div>

              <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/10 text-center backdrop-blur-md">
                <div className="text-xs font-bold text-white flex items-center justify-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5 text-pink-400" />
                  <span>+150% Lift</span>
                </div>
                <div className="text-[9px] text-white/50 uppercase mt-0.5 font-medium">Conversion ROI</div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
