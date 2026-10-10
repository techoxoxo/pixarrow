"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappMessage = encodeURIComponent(
    "Hi Pixarrow team, I'd like to discuss a new engineering/growth project for my company."
  );

  return (
    <div className="fixed bottom-3 sm:bottom-6 left-3 sm:left-6 z-40 flex items-center gap-1.5 sm:gap-2 pointer-events-auto pb-safe">
      {/* WhatsApp Action Button */}
      <motion.a
        href={`https://wa.me/917973060924?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center gap-2 p-2 sm:px-4 sm:py-3 bg-[#0c051a]/90 hover:bg-[#25D366]/20 border border-emerald-500/30 hover:border-emerald-400 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl text-white transition-all cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#25D366] text-white shadow-[0_0_15px_rgba(37,211,102,0.6)]">
          <MessageCircle className="w-4 h-4 fill-white" />
        </div>
        <div className="hidden sm:flex flex-col text-left pr-1">
          <span className="text-[11px] font-bold text-white leading-tight">Chat on WhatsApp</span>
          <span className="text-[9px] text-emerald-400 font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Online • Avg reply 5m
          </span>
        </div>
      </motion.a>

      {/* Direct Call Button (Desktop) */}
      <motion.a
        href="tel:+917973060924"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        title="Direct Call / Talk to Partner"
        className="hidden md:flex items-center justify-center w-11 h-11 bg-[#0c051a]/90 hover:bg-white/10 border border-white/10 rounded-full shadow-lg backdrop-blur-xl text-white/70 hover:text-white transition-all cursor-pointer"
      >
        <Phone className="w-4 h-4" />
      </motion.a>

      {/* Scroll to Top */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Scroll to Top"
          className="flex items-center justify-center w-8 h-8 sm:w-11 sm:h-11 bg-[#0c051a]/90 hover:bg-[#7C3AED]/30 border border-white/10 hover:border-[#7C3AED]/50 rounded-full shadow-lg backdrop-blur-xl text-white/70 hover:text-white transition-all cursor-pointer"
        >
          <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </motion.button>
      )}
    </div>
  );
}

