"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Star, ShieldCheck, Quote, TrendingUp } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote: "Pixarrow re-engineered our entire platform in Next.js 16. Our page speeds dropped from 3.8s down to 0.4s, and checkout conversions surged +185% in the first 30 days. Their engineering quality is on par with Silicon Valley tier-1 studios.",
    author: "Arjun Mehta",
    role: "Founder & CEO",
    company: "Torque Motors UK",
    outcome: "+185% Conversion Uplift",
    metricColor: "from-[#00DFD8] to-[#7C3AED]",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
  {
    quote: "Their performance marketing and custom web architecture scaled our DTC brand past $40M+ in gross revenue. Direct Slack access with their Lead Architect made sprint execution effortless. The ROAS jumped from 1.4x to 3.8x within 60 days.",
    author: "Priya Sharma",
    role: "Chief Growth Officer",
    company: "LAY Luxury Apparel",
    outcome: "3.8X Meta & Google ROAS",
    metricColor: "from-[#FF007A] to-[#7C3AED]",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
  {
    quote: "We hired a dedicated 4-person engineering pod from Pixarrow for our AI fintech application. They integrated our vector search and OpenAI pipelines in record time with 100% type-safe code. Easily the best engineering partner we've worked with.",
    author: "Daniel Brown",
    role: "VP of Product Engineering",
    company: "Cahrz Intelligence",
    outcome: "4-Week Rapid AI MVP Launch",
    metricColor: "from-[#7C3AED] to-[#00DFD8]",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 px-6 relative z-10 w-full bg-brand-bg overflow-hidden" id="testimonials">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-[#7C3AED]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header containing title & arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-[#A855F7] text-xs font-black uppercase tracking-widest mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verified Client Outcomes</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none text-white text-left">
              Proven Impact. <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF007A] via-[#7C3AED] to-[#00DFD8]">
                Real Client Numbers.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-2xl border border-white/10 bg-[#0e0524]/60 hover:bg-[#7C3AED]/20 hover:border-[#7C3AED] flex items-center justify-center text-white/70 hover:text-white transition-all cursor-pointer shadow-lg active:scale-95"
              aria-label="Previous Testimonial"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-2xl border border-white/10 bg-[#0e0524]/60 hover:bg-[#7C3AED]/20 hover:border-[#7C3AED] flex items-center justify-center text-white/70 hover:text-white transition-all cursor-pointer shadow-lg active:scale-95"
              aria-label="Next Testimonial"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="p-8 sm:p-10 rounded-[2.5rem] bg-gradient-to-b from-[#120529] via-[#0a0217] to-[#050011] border border-white/10 backdrop-blur-2xl flex flex-col justify-between min-h-[380px] transition-all duration-300 hover:border-[#7C3AED]/50 hover:shadow-[0_20px_45px_rgba(124,58,237,0.2)] group text-left relative overflow-hidden"
              >
                {/* Glowing outcome pill on top */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-black text-[#00DFD8]">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{t.outcome}</span>
                    </div>

                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, sIdx) => (
                        <Star key={sIdx} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-base text-white/80 leading-relaxed font-sans mb-8 relative z-10">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                
                {/* Author Info */}
                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="relative w-12 h-12 rounded-2xl overflow-hidden border-2 border-[#7C3AED]/40 shrink-0">
                    <Image 
                      src={t.image} 
                      alt={t.author} 
                      fill
                      className="object-cover" 
                    />
                  </div>
                  <div>
                    <div className="font-black text-base text-white">
                      {t.author}
                    </div>
                    <div className="text-xs font-bold text-white/50 uppercase tracking-wider font-sans">
                      {t.role} · <span className="text-[#A855F7]">{t.company}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

