"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, PhoneCall, ArrowRight, Sparkles, HelpCircle, ShieldCheck, Zap, Calculator } from "lucide-react";
import Link from "next/link";

const categories = ["All", "Architecture & Tech", "Sprints & Delivery", "Pricing & Retainer"];

const faqs = [
  {
    category: "Architecture & Tech",
    question: "What core tech stack does Pixarrow build with?",
    answer: "We engineer primarily with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Node.js/NestJS, Python (FastAPI/LangChain for AI), and PostgreSQL/MongoDB. For infrastructure, we leverage Vercel Edge, AWS, and Cloudflare CDN for sub-0.4s response times globally.",
  },
  {
    category: "Sprints & Delivery",
    question: "How long does a standard project sprint take to launch?",
    answer: "Our standard full-stack platform sprint is completed in 4 to 6 weeks. Fast-track MVPs can launch in 2 to 3 weeks. We deploy continuous daily staging previews so you test features in real-time on live URLs.",
  },
  {
    category: "Pricing & Retainer",
    question: "How does your pricing and IP ownership structure work?",
    answer: "We offer fixed-scope milestone sprints and dedicated monthly engineering pods ($3,500 – $4,500/mo per senior developer). 100% intellectual property, design source files, and Git repositories are transferred to you unconditionally.",
  },
  {
    category: "Architecture & Tech",
    question: "Do you integrate custom AI models, RAG pipelines, and automated agents?",
    answer: "Yes. We build production-ready AI solutions using OpenAI, Anthropic Claude, Gemini, LangChain, and vector databases (Pinecone, pgvector) to automate operations, conversational intelligence, and proprietary workflows.",
  },
  {
    category: "Sprints & Delivery",
    question: "What kind of communication and project transparency do you provide?",
    answer: "You get a dedicated private Slack/Discord channel with direct access to your Lead Architect and developers. We provide weekly sprint demos, async Loom recordings, and clear milestone progress dashboards.",
  },
  {
    category: "Pricing & Retainer",
    question: "Is there a trial period or money-back guarantee?",
    answer: "Yes. For our dedicated engineering pod and staff augmentation model, we offer a 15-day risk-free trial. If you are not 100% satisfied with code quality and velocity, you pay nothing.",
  },
];

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = selectedCategory === "All" 
    ? faqs 
    : faqs.filter(f => f.category === selectedCategory);

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
    <section className="py-24 px-6 relative z-10 w-full bg-brand-bg overflow-hidden" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7C3AED]/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-[#A855F7] text-xs font-black uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#00DFD8]" />
            <span>Clear Answers &amp; SLAs</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6">
            Frequently Asked <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF007A] via-[#7C3AED] to-[#00DFD8]">
              Questions.
            </span>
          </h2>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setOpenIndex(0);
                }}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#7C3AED] text-white shadow-glow-purple"
                    : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: FAQ Accordions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {filteredFaqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div 
                  key={faq.question} 
                  className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? "bg-[#110526]/80 border-[#7C3AED]/60 shadow-[0_10px_30px_rgba(124,58,237,0.2)]" 
                      : "bg-white/[0.02] border-white/5 hover:border-white/15 hover:bg-white/[0.04]"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full p-6 text-left flex justify-between items-center gap-4 text-white cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-black leading-snug">{faq.question}</span>
                    <span className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border transition-all ${
                      isOpen 
                        ? "bg-[#7C3AED] text-white border-[#7C3AED] shadow-glow-purple" 
                        : "bg-white/5 text-white/50 border-white/10"
                    }`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 text-sm sm:text-base text-white/70 leading-relaxed font-sans border-t border-white/5 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column: Interactive Holographic Discovery CTA (5 cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="p-8 sm:p-10 rounded-[2.5rem] bg-gradient-to-b from-[#15072e] via-[#0b0217] to-[#04000b] border border-[#7C3AED]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl relative overflow-hidden flex flex-col justify-between min-h-[460px]">
              
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF007A]/20 blur-3xl rounded-full pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black uppercase tracking-wider mb-6">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Direct Partner Access</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 leading-tight">
                  Have a specific vision or complex technical requirement?
                </h3>
                <p className="text-sm text-white/60 leading-relaxed mb-6 font-sans">
                  Speak directly with our Lead Architect. We evaluate your tech stack, outline a custom sprint timeline, and provide a transparent estimate with zero sales pressure.
                </p>

                <div className="space-y-2 mb-8">
                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <Zap className="w-3.5 h-3.5 text-[#00DFD8]" />
                    <span>Free 30-min architectural consultation</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                    <span>Strict 24-hour mutual NDA on request</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 relative z-10">
                <Link 
                  href="/book" 
                  className="w-full py-4 px-6 bg-gradient-to-r from-[#7C3AED] to-[#FF007A] hover:opacity-95 text-white font-black text-sm rounded-2xl shadow-glow-purple flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95"
                >
                  <span>Book Architecture Discovery Call</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="grid grid-cols-2 gap-3">
                  <Link 
                    href="/calculator" 
                    className="py-3 px-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Calculator className="w-3.5 h-3.5 text-amber-300" />
                    <span>Cost Calculator</span>
                  </Link>
                  <Link 
                    href="tel:+917973060924" 
                    className="py-3 px-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Call Direct</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

