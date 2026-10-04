"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

// Social SVG Icons for floating on the right
const FacebookIcon = () => (
  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 8H7v3h2v9h3v-9h3.6L16 8h-3V6.3C12 5.5 12.3 5 13 5h2V2h-3C9.8 2 9 3.5 9 5.3V8z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const steps = [
  {
    num: "01",
    title: "Discover & Strategy",
    description: "We learn your business, audience & goals to build a winning strategy.",
  },
  {
    num: "02",
    title: "Build & Launch",
    description: "We design, develop & launch high-performing websites, apps & ad campaigns.",
  },
  {
    num: "03",
    title: "Grow & Optimize",
    description: "We optimize, test & scale for maximum growth & ROI.",
  },
  {
    num: "04",
    title: "Scale & Dominate",
    description: "We scale your brand to new heights with data, automation & creativity.",
  },
];

export default function Process() {
  return (
    <section className="py-24 px-6 relative z-10 w-full bg-brand-bg overflow-hidden" id="process">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-purple/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Title & Rocket Launcher (4 Columns) */}
        <div className="flex flex-col lg:col-span-4 items-start">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6 text-left">
            We don't just build. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF007A] to-[#7C3AED]">
              We grow with you.
            </span>
          </h2>
          <p className="text-lg text-white/50 mb-12 max-w-sm leading-relaxed text-left">
            From strategy to scale, we handle everything you need to win online.
          </p>

          {/* Rocket Launcher Graphic Container */}
          <div className="relative w-full max-w-[280px] h-[280px] bg-[#0c051a]/40 border border-white/5 rounded-[40px] flex items-center justify-center shadow-lg backdrop-blur-md mt-4 mx-auto lg:mx-0">
            {/* Rocket Thruster Glow & Flame */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-14 h-24 bg-gradient-to-b from-[#7C3AED] via-[#FF007A]/50 to-transparent blur-xl opacity-80" />
            
            {/* Rocket Icon Container */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <Rocket 
                className="w-28 h-28 -rotate-45 text-[#7C3AED] drop-shadow-[0_0_20px_rgba(124,58,237,0.6)]" 
                strokeWidth={0.8}
              />
            </motion.div>

            {/* Sticker Badge */}
            <div className="absolute bottom-6 right-[-20px] bg-[#110526] border border-[#00DFD8]/30 rounded-2xl px-4 py-2 shadow-lg backdrop-blur-md rotate-[12deg] z-20">
              <span className="text-xs font-black text-white/90 uppercase tracking-widest">
                Let's Build Something Epic!
              </span>
            </div>
          </div>
        </div>

        {/* Center Column: 4 Steps (4 Columns) */}
        <div className="flex flex-col gap-8 lg:col-span-4 justify-center">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4 items-start text-left"
            >
              {/* Oval Number Badge */}
              <div className="px-4 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/25 text-[#A855F7] font-black text-sm w-12 h-8 flex items-center justify-center shrink-0">
                {step.num}
              </div>

              <div className="flex flex-col gap-1.5">
                <h3 className="text-lg font-black text-white">
                  {step.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed font-sans font-medium">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Column: Neon Target Board (4 Columns) */}
        <div className="flex justify-center items-center lg:col-span-4">
          <div className="relative w-full max-w-[280px] aspect-square bg-[#0c051a]/50 border border-white/5 rounded-[40px] flex items-center justify-center shadow-lg backdrop-blur-md mx-auto">
            
            {/* Targets Board SVG */}
            <div className="relative w-48 h-48 flex items-center justify-center">
              <svg className="w-full h-full absolute" viewBox="0 0 100 100">
                {/* Concentric targets */}
                <circle cx="50" cy="50" r="40" stroke="#1f113a" strokeWidth="1" fill="transparent" />
                <circle cx="50" cy="50" r="30" stroke="#FF007A" strokeWidth="1.5" strokeDasharray="4 2" fill="transparent" className="opacity-70 animate-[spin_30s_linear_infinite]" />
                <circle cx="50" cy="50" r="20" stroke="#00DFD8" strokeWidth="2" fill="transparent" className="opacity-80" />
                <circle cx="50" cy="50" r="10" stroke="#7C3AED" strokeWidth="2.5" fill="transparent" className="drop-shadow-[0_0_8px_rgba(124,58,237,0.5)]" />
                <circle cx="50" cy="50" r="2" fill="white" className="animate-ping" />
              </svg>

              {/* Glowing Dart Arrow SVG overlay */}
              <motion.div
                animate={{ rotate: [-2, 2, -2], x: [-1, 1, -1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-24 h-24 flex items-center justify-center z-10 translate-x-3 -translate-y-3"
              >
                <svg className="w-full h-full" viewBox="0 0 40 40">
                  {/* Diagonal Dart line */}
                  <line x1="5" y1="35" x2="28" y2="12" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" className="drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" />
                  {/* Dart feathers */}
                  <polygon points="5,35 2,38 7,37" fill="#7C3AED" />
                  <polygon points="5,35 8,32 6,36" fill="#7C3AED" />
                  {/* Dart head (positioned near center at 30,10) */}
                  <polygon points="28,12 25,9 31,9" fill="#00DFD8" className="drop-shadow-[0_0_4px_#00DFD8]" />
                </svg>
              </motion.div>
            </div>

            {/* Floating Social Media Icons around the target */}
            
            {/* Facebook (Top Left) */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-6 left-6 w-8 h-8 rounded-full bg-blue-600 border border-white/10 flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform"
            >
              <FacebookIcon />
            </motion.div>

            {/* Instagram (Bottom Left) */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-10 left-6 w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-500 via-[#FF007A] to-purple-600 border border-white/10 flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform"
            >
              <InstagramIcon />
            </motion.div>

            {/* LinkedIn (Top Right) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-10 right-8 w-8 h-8 rounded-full bg-blue-700 border border-white/10 flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform"
            >
              <LinkedInIcon />
            </motion.div>

            {/* Small TikTok Icon (Bottom Right) */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className="absolute bottom-8 right-10 w-8 h-8 rounded-full bg-black border border-white/10 flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform"
            >
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
