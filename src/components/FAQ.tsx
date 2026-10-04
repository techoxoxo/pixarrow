"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, PhoneCall, ArrowRight } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "What services does Pixarrow offer?",
    answer: "We specialize in web and app development, conversion rate optimization (CRO), performance marketing (Meta/Google Ads), and social media management.",
  },
  {
    question: "How long does a project take?",
    answer: "Most standard projects take between 4 to 8 weeks. Larger platforms or custom web applications might require 8 to 12 weeks depending on complexity.",
  },
  {
    question: "Do you work with startups?",
    answer: "Yes! We work extensively with early-stage, growing startups, helping them build premium brand systems and scale quickly.",
  },
  {
    question: "How do you measure success?",
    answer: "We track concrete metrics: client acquisition cost (CAC), return on ad spend (ROAS), conversion rate, page speed, and organic leads generated.",
  },
  {
    question: "What platforms do you advertise on?",
    answer: "We specialize in Meta Ads (Facebook & Instagram), Google Search & Display Ads, TikTok Ads, and LinkedIn Ads.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-24 px-6 relative z-10 w-full bg-brand-bg" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: FAQ Accordion (7 Columns) */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-10 text-left">
            Got <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF007A] to-[#7C3AED]">Questions?</span>
          </h2>
          
          <div className="w-full divide-y divide-white/5 border-t border-b border-white/5">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className="overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full py-5 text-left flex justify-between items-center gap-4 text-white hover:text-white/80 transition-colors"
                  >
                    <span className="text-base sm:text-lg font-black">{faq.question}</span>
                    <span className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/5 text-[#A855F7]">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </span>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="pb-5 pr-8 text-sm sm:text-base text-white/50 leading-relaxed font-sans font-medium">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: CTA card (5 Columns) */}
        <div className="lg:col-span-5 w-full">
          <div className="bg-gradient-to-br from-[#100527] to-[#080214] border border-[#7C3AED]/20 rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden flex flex-col justify-between min-h-[380px] shadow-lg group hover:border-[#7C3AED]/40 transition-all duration-300 text-left">
            
            {/* Ambient Background Grid & Chart */}
            <div className="absolute right-4 bottom-4 w-44 h-44 z-0 pointer-events-none opacity-30 group-hover:opacity-50 transition-opacity duration-500">
              {/* Rising Arrow stock graphic */}
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                <defs>
                  <linearGradient id="purpleGlow" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#00DFD8" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                {/* Stock chart bars */}
                <rect x="10" y="70" width="8" height="15" rx="2" fill="#7C3AED" opacity="0.4" />
                <rect x="25" y="60" width="8" height="25" rx="2" fill="#7C3AED" opacity="0.6" />
                <rect x="40" y="45" width="8" height="40" rx="2" fill="#7C3AED" opacity="0.8" />
                <rect x="55" y="30" width="8" height="55" rx="2" fill="#A855F7" />
                <rect x="70" y="15" width="8" height="70" rx="2" fill="#00DFD8" className="drop-shadow-[0_0_8px_#00DFD8]" />
                
                {/* Arrow line */}
                <path 
                  d="M10 80 L35 60 L60 35 L85 10" 
                  stroke="url(#purpleGlow)" 
                  strokeWidth="3.5" 
                  strokeLinecap="round" 
                />
                {/* Arrow Head */}
                <polygon points="85,10 77,12 83,18" fill="#00DFD8" />
              </svg>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 leading-tight">
                Ready to take your <br /> business to the next level?
              </h3>
              <p className="text-sm sm:text-base text-white/50 leading-relaxed mb-8 max-w-xs font-sans font-medium">
                Let's create, launch & scale something amazing together.
              </p>
            </div>

            {/* Action buttons inside CTA card */}
            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center relative z-10 w-full sm:w-auto mt-6">
              <Link href="/book" className="px-5 py-2.5 bg-[#7C3AED] hover:bg-[#7C3AED]/90 text-white rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-glow-purple flex items-center justify-center gap-1.5">
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="tel:+917973060924" className="px-4 py-2 bg-white/5 border border-white/5 hover:border-white/10 text-white/70 hover:text-white rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-1.5">
                <PhoneCall className="w-4 h-4" />
                <span>Book a Call</span>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
