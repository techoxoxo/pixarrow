"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote: "Pixarrow transformed our online presence. Our leads and sales increased like never before!",
    author: "Arjun Mehta",
    role: "CEO, Torque",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
  {
    quote: "Their ad strategies are next level. ROAS improved by 3X in just 60 days!",
    author: "Priya Sharma",
    role: "Founder, LAY.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
  {
    quote: "Professional, responsive and results-driven team, highly recommended!",
    author: "Daniel Brown",
    role: "Marketing Head, Cahrz",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
  },
];

const StarRating = () => (
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 px-6 relative z-10 w-full bg-brand-bg" id="testimonials">
      <div className="max-w-7xl mx-auto">
        
        {/* Header containing the arrows */}
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none text-white text-left">
            What our <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF007A] to-[#7C3AED]">clients</span> say
          </h2>

          <div className="flex gap-2">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-white/10 bg-[#0e0524]/40 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 transition-all cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-white/10 bg-[#0e0524]/40 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 transition-all cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => {
            // Highlighting or normal animation
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-[2rem] bg-[#0e0524]/50 border border-white/5 backdrop-blur-md flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:border-[#7C3AED]/40 hover:bg-[#0e0524] hover:shadow-[0_15px_30px_rgba(124,58,237,0.1)] group text-left"
              >
                <div>
                  <StarRating />
                  <p className="text-base md:text-lg text-white/70 leading-relaxed font-sans mb-6">
                    &quot;{t.quote}&quot;
                  </p>
                </div>
                
                <div className="flex items-center gap-3.5 border-t border-white/5 pt-4">
                  <Image 
                    src={t.image} 
                    alt={t.author} 
                    width={40} 
                    height={40} 
                    className="w-10 h-10 rounded-full object-cover border border-[#7C3AED]/30" 
                  />
                  <div>
                    <div className="font-black text-base text-white">
                      — {t.author}
                    </div>
                    <div className="text-xs font-bold text-white/40 uppercase tracking-wider mt-0.5 font-sans">
                      {t.role}
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
