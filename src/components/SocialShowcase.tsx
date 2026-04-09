"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe } from "lucide-react";
import Link from "next/link";

const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
);

const LinkedinIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
    </svg>
);

const FacebookIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
);

const socials = [
  {
    name: "Instagram",
    handle: "wearepixarrow",
    link: "https://www.instagram.com/wearepixarrow/",
    icon: <InstagramIcon />,
    color: "from-[#FF0080] to-[#7928CA]",
    delay: 0,
    position: "top-0 left-0",
    status: "Live",
    detail: "1.2k+ Recent Impressions"
  },
  {
    name: "LinkedIn",
    handle: "pixarrow",
    link: "https://www.linkedin.com/company/pixarrow1/",
    icon: <LinkedinIcon />,
    color: "from-[#007CF0] to-[#00DFD8]",
    delay: 0.1,
    position: "top-0 right-0",
    status: "Hot",
    detail: "Strategic Insights"
  },
  {
    name: "Behance",
    handle: "pixarrow",
    link: "https://www.behance.net/pixarrow",
    icon: <Globe className="w-full h-full" />,
    color: "from-[#FF4D4D] to-[#F9CB28]",
    delay: 0.2,
    position: "bottom-0 left-0",
    status: "New",
    detail: "4 Case Studies Out"
  },
  {
    name: "Facebook",
    handle: "pixarrow",
    link: "https://www.facebook.com/Pixarrow/",
    icon: <FacebookIcon />,
    color: "from-[#1877F2] to-[#B6D0FF]",
    delay: 0.3,
    position: "bottom-0 right-0",
    status: "Active",
    detail: "Community Updates"
  }
];

export default function SocialShowcase() {
  return (
    <section className="py-40 relative isolate">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-brand-purple/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          <div className="flex-1 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-brand-purple animate-pulse" />
              <span className="text-xs font-black tracking-widest text-white/40 uppercase">Beyond Corporate</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-black tracking-tighter mb-8 italic"
            >
              The <span className="text-gradient">Social</span> <br /> 
              Matrix.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/40 max-w-lg font-medium leading-relaxed"
            >
              We don&apos;t just build products; we build communities. Slice through the noise and see our process live across the web.
            </motion.p>
          </div>

          <div className="flex-1 relative w-full aspect-square max-w-[500px]">
            {/* Central Brand Orb */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-purple/10 border border-brand-purple/20 rounded-full flex items-center justify-center backdrop-blur-3xl z-10 shadow-glow-purple"
            >
              <img src="/favicon.png" alt="P" className="w-20 h-20 opacity-80" />
              
              {/* Rotating Rings */}
              <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute -inset-4 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            </motion.div>

            {/* Orbiting Cards */}
            {socials.map((social) => (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: social.delay, ease: [0.16, 1, 0.3, 1] }}
                className={`absolute ${social.position} w-44 h-44`}
              >
                <Link 
                    href={social.link} 
                    target="_blank"
                    className="group block h-full bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-6 backdrop-blur-xl relative overflow-hidden transition-all hover:bg-white/[0.08]"
                >
                  <div className="flex flex-col h-full justify-between relative z-10">
                    <div className="flex items-start justify-between">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${social.color} p-3 shadow-lg group-hover:scale-110 transition-transform`}>
                            {social.icon}
                        </div>
                        <div className="bg-white/5 border border-white/10 px-3 py-1 rounded-full flex items-center gap-2">
                             <div className="w-1 h-1 rounded-full bg-[#00F2FF]" />
                             <span className="text-[10px] uppercase font-bold text-white/40 tracking-widest">{social.status}</span>
                        </div>
                    </div>
                    
                    <div>
                        <div className="text-[10px] font-black tracking-widest text-white/20 uppercase mb-1">{social.name}</div>
                        <div className="text-lg font-black text-white group-hover:text-brand-purple transition-colors truncate mb-1">{social.handle}</div>
                        <div className="text-[11px] text-white/40 font-medium group-hover:text-white transition-colors">{social.detail}</div>
                    </div>
                    
                    <ArrowUpRight className="absolute top-0 right-0 w-5 h-5 text-white/10 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>

                  {/* Glass highlight */}
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
