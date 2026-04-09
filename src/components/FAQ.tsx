"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Most of our projects go live in 4-8 weeks. Our lean process allows us to skip the fluff and focus on delivering high-performance results quickly.",
  },
  {
    question: "What is your pricing model?",
    answer: "We offer fixed-price packages and monthly retainers depending on your needs. Our goal is to provide transparent pricing with no hidden costs.",
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes, we providing ongoing maintenance, monitoring, and optimization to ensure your site continues to perform at its peak as you grow.",
  },
  {
    question: "Will I be able to edit the website myself?",
    answer: "Absolutely. We build on modern CMS platforms (like Webflow, Sanity, or Payload) and provide a full training session so your team can manage content easily.",
  },
  {
    question: "Do you handle SEO?",
    answer: "Technical SEO is baked into our development process. We ensure your site is lightning fast, mobile-responsive, and structured for search engines from day one.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 relative z-10" id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-16 text-center">
          Common <span className="text-gradient">Questions</span>
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02] backdrop-blur-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-lg font-bold">{faq.question}</span>
                {openIndex === i ? <Minus className="w-5 h-5 text-[#00F2FF]" /> : <Plus className="w-5 h-5 text-[#00F2FF]" />}
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-6 pt-0 text-white/50 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
