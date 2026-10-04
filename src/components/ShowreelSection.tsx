"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Play, Pause, Volume2, VolumeX, Sparkles, Zap, ShieldCheck, 
  Layers, ArrowRight, Film, CheckCircle2, Award, Terminal,
  Maximize2, Minimize, Gauge
} from "lucide-react";
import Link from "next/link";

export default function ShowreelSection() {
  const [activeTab, setActiveTab] = useState<"full" | "brand">("full");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const [volume, setVolume] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);

  const fullShowreelSrc = "/video/Pixarrow - Connecting You With Pixels. - Pixarrow (1080p, h264).mp4";
  const brandingMotionSrc = "/video/We Are Pixarrow - Pixarrow (1080p, h264).mp4";

  const currentSrc = activeTab === "full" ? fullShowreelSrc : brandingMotionSrc;

  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds)) return "0:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Handle switching video reels
  const handleTabSwitch = (tab: "full" | "brand") => {
    setActiveTab(tab);
    setIsPlaying(true);
    setIsMuted(false);
    if (videoRef.current) {
      videoRef.current.src = tab === "full" ? fullShowreelSrc : brandingMotionSrc;
      videoRef.current.muted = false;
      videoRef.current.play().catch(() => {});
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const dur = videoRef.current.duration || 1;
      setProgress((current / dur) * 100);
      setCurrentTime(formatTime(current));
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(formatTime(videoRef.current.duration));
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = pos * (videoRef.current.duration || 1);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (videoRef.current) {
      videoRef.current.volume = val;
      videoRef.current.muted = val === 0;
      setIsMuted(val === 0);
    }
  };

  const toggleFullscreen = () => {
    if (!playerContainerRef.current) return;
    if (!document.fullscreenElement) {
      playerContainerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden bg-[#070114] text-white">
      {/* Ambient Lighting Rays */}
      <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-[#7C3AED]/15 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-[#FF007A]/15 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] right-[30%] w-[400px] h-[400px] bg-[#00DFD8]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#7C3AED]/20 via-[#FF007A]/20 to-[#00DFD8]/20 border border-[#7C3AED]/40 text-purple-300 text-xs font-black uppercase tracking-widest mb-6 shadow-[0_0_25px_rgba(124,58,237,0.3)] backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Pixarrow Engineering &amp; Design Architecture</span>
          </motion.div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-[1.05]">
            Connecting You <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF007A] via-[#7C3AED] to-[#00DFD8] drop-shadow-[0_0_35px_rgba(124,58,237,0.35)]">
              With Digital Precision.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed font-normal max-w-2xl mx-auto">
            Experience our high-velocity design system, edge engineering pipeline, and conversion mechanics in crystal-clear 1080p motion.
          </p>

          {/* Interactive Reel Pill Switcher */}
          <div className="inline-flex p-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-2xl mt-8 shadow-2xl">
            <button
              onClick={() => handleTabSwitch("full")}
              className={`px-6 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2.5 ${
                activeTab === "full"
                  ? "bg-gradient-to-r from-[#7C3AED] to-[#FF007A] text-white shadow-glow-purple"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Film className="w-4 h-4" />
              <span>Agency Showreel</span>
            </button>

            <button
              onClick={() => handleTabSwitch("brand")}
              className={`px-6 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2.5 ${
                activeTab === "brand"
                  ? "bg-gradient-to-r from-[#7C3AED] to-[#FF007A] text-white shadow-glow-purple"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Zap className="w-4 h-4 text-amber-300" />
              <span>Motion Identity Reel</span>
            </button>
          </div>
        </div>

        {/* ULTRA-WIDE CINEMA THEATRE CANVAS */}
        <div 
          ref={playerContainerRef}
          className="relative max-w-6xl mx-auto"
        >
          {/* Reactive Ambilight Glow Aura */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#7C3AED]/30 via-[#FF007A]/25 to-[#00DFD8]/20 blur-[60px] rounded-[3.5rem] opacity-75 pointer-events-none" />

          {/* Titanium & Glass Outer Chassis */}
          <div className="relative rounded-[2.5rem] sm:rounded-[3rem] p-2 sm:p-3 bg-gradient-to-b from-white/20 via-white/5 to-white/10 border border-white/20 shadow-[0_30px_120px_rgba(0,0,0,0.8)] backdrop-blur-3xl overflow-hidden group">
            
            {/* Inner Viewport */}
            <div className="relative aspect-[16/9] sm:aspect-[21/10] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-[#050010] border border-white/10">
              
              {/* HTML5 Video Element (WITHOUT ugly browser default controls!) */}
              <video
                ref={videoRef}
                src={currentSrc}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onClick={togglePlay}
                className="w-full h-full object-cover brightness-105 cursor-pointer"
              />

              {/* Top Cinema HUD Bar */}
              <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex items-center justify-between z-30 pointer-events-none">
                <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/20 shadow-lg pointer-events-auto">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-black tracking-widest uppercase text-white/90">
                    {activeTab === 'full' ? 'PIXARROW SHOWREEL' : 'MOTION IDENTITY'}
                  </span>
                  <span className="text-white/30">•</span>
                  <span className="text-[10px] font-mono text-cyan-300">1080P 60FPS</span>
                </div>
              </div>

              {/* Centerpiece Magnetic Interactive Play Orb (Visible when paused or before click) */}
              {!isPlaying && (
                <div 
                  onClick={togglePlay}
                  className="absolute inset-0 bg-black/50 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer z-20 group-hover:bg-black/40 transition-all"
                >
                  <motion.div 
                    initial={{ scale: 0.9 }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="relative flex items-center justify-center"
                  >
                    <div className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#7C3AED]/30 blur-xl animate-ping opacity-60" />
                    <div className="absolute w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[#FF007A]/30 blur-lg animate-pulse" />

                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#7C3AED] via-[#FF007A] to-[#00DFD8] p-1 shadow-[0_0_40px_rgba(124,58,237,0.8)] group-hover:scale-110 transition-transform">
                      <div className="w-full h-full rounded-full bg-[#0c051a]/80 backdrop-blur-md flex items-center justify-center text-white">
                        <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-white ml-0.5 text-white drop-shadow-md" />
                      </div>
                    </div>
                  </motion.div>

                  <div className="mt-4 text-center">
                    <span className="text-xs font-black uppercase tracking-widest text-white drop-shadow-md block">
                      Play Showreel with Sound
                    </span>
                    <span className="text-[10px] text-white/60 font-medium">
                      {activeTab === 'full' ? 'Connecting You With Pixels' : 'We Are Pixarrow Motion Reel'}
                    </span>
                  </div>
                </div>
              )}

              {/* BESPOKE CUSTOM DARK GLASS CONTROLLER BAR (No browser default controls!) */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/95 via-black/70 to-transparent flex flex-col gap-3 z-30 opacity-90 hover:opacity-100 transition-opacity">
                
                {/* Custom Interactive Seek Scrubber Bar */}
                <div 
                  onClick={handleSeek}
                  className="relative w-full h-2 bg-white/20 hover:h-3 rounded-full cursor-pointer transition-all group/bar overflow-hidden"
                >
                  <div 
                    className="h-full bg-gradient-to-r from-[#7C3AED] via-[#FF007A] to-[#00DFD8] rounded-full relative"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                {/* Custom Controls Strip */}
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-4">
                    {/* Play / Pause Toggle */}
                    <button
                      onClick={togglePlay}
                      className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all cursor-pointer"
                    >
                      {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
                    </button>

                    {/* Volume & Mute */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={toggleMute}
                        className="text-white/70 hover:text-white transition-colors cursor-pointer"
                      >
                        {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-cyan-300" />}
                      </button>
                      <input 
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={isMuted ? 0 : volume}
                        onChange={handleVolumeChange}
                        className="w-16 sm:w-20 accent-brand-purple cursor-pointer hidden sm:block"
                      />
                    </div>

                    {/* Time Counter */}
                    <span className="text-xs font-mono text-white/60">
                      {currentTime} / {duration}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 hidden sm:inline-block">
                      1080P HD
                    </span>
                    <button
                      onClick={toggleFullscreen}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-all cursor-pointer"
                      title="Fullscreen"
                    >
                      {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

              </div>

            </div>

            {/* Cinema Stage Footer Grid */}
            <div className="p-5 sm:p-7 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-white/5 bg-gradient-to-b from-white/[0.01] to-transparent">
              
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center shrink-0 text-purple-300">
                  <Gauge className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Sub-0.7s LCP Engineering</h4>
                  <p className="text-xs text-white/50 mt-0.5">Edge-rendered Next.js 16 architecture with 0ms client hydration delay.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center shrink-0 text-[#FF007A]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Bespoke Motion &amp; 3D Depth</h4>
                  <p className="text-xs text-white/50 mt-0.5">GPU-accelerated micro-interactions tailored for high conversion psychology.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0 text-[#00DFD8]">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Measurable Revenue Engine</h4>
                  <p className="text-xs text-white/50 mt-0.5">Over $45M+ client volume processed with custom full-stack software.</p>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Action Strip */}
        <div className="mt-12 text-center">
          <Link
            href="/book"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#7C3AED] to-[#FF007A] text-white text-base font-bold rounded-full shadow-glow-purple hover:scale-105 active:scale-95 transition-all"
          >
            <span>Architect Your Digital Product</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
