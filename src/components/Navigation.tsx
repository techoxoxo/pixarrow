"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const workItems = [
  { name: "Tobiko", href: "/case-study/tobiko" },
  { name: "Quotient AI", href: "/case-study/quotient-ai" },
  { name: "Aampe", href: "/case-study/aampe" },
  { name: "Lumenstream", href: "/case-study/lumenstream" },
  { name: "Start2coin", href: "/case-study/start2coin" },
  { name: "DayByDay", href: "/case-study/day-by-day" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-4 left-0 right-0 z-[1000] px-6 pointer-events-none`}
    >
      <div className="max-w-7xl mx-auto pointer-events-auto">
        <div className={`flex items-center justify-between px-8 h-12 md:h-14 rounded-full border transition-all duration-500 ${
          scrolled 
            ? "bg-brand-bg/90 backdrop-blur-2xl border-white/10 shadow-2xl" 
            : "bg-brand-bg/80 backdrop-blur-xl border-white/5 shadow-xl"
        }`}>
          <Link href="/" className="flex items-center gap-3 group">
            <img 
              src="/logo.png" 
              alt="Pixarrow" 
              className="h-5 w-auto object-contain transform group-hover:scale-105 transition-all duration-500" 
            />
          </Link>

          <nav className="hidden md:flex items-center gap-2">
              <Link href="/" className="px-4 py-2 text-sm font-semibold text-white/70 hover:text-white transition-all rounded-full hover:bg-white/10">
              Home
            </Link>
            {/* <div 
              className="relative"
              onMouseEnter={() => setWorkOpen(true)}
              onMouseLeave={() => setWorkOpen(false)}
            >
              <Link 
                href="/work" 
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-all flex items-center gap-1 ${
                  workOpen ? "bg-white/5 text-white" : "text-white/50 hover:text-white"
                }`}
              >
                Work <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${workOpen ? "rotate-180" : ""}`} />
              </Link>
              
              <AnimatePresence>
                {workOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 p-2 bg-brand-card/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl min-w-[200px]"
                  >
                    {workItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm font-medium text-white/50 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div> */}
                    <Link href="/work" className="px-4 py-2 text-sm font-semibold text-white/70 hover:text-white transition-all rounded-full hover:bg-white/10">
              Work
            </Link>

            <Link href="/services" className="px-4 py-2 text-sm font-semibold text-white/70 hover:text-white transition-all rounded-full hover:bg-white/10">
              Services
            </Link>
            {/* <Link href="/process" className="px-4 py-2 text-sm font-semibold text-white/50 hover:text-white transition-all rounded-full hover:bg-white/5">
              Process
            </Link> */}
            <Link href="/about" className="px-4 py-2 text-sm font-semibold text-white/70 hover:text-white transition-all rounded-full hover:bg-white/10">
              About
            </Link>
            <Link href="/blog" className="px-4 py-2 text-sm font-semibold text-white/70 hover:text-white transition-all rounded-full hover:bg-white/10">
              Blog
            </Link>
          </nav>

          <div className="flex items-center">
            <Link href="/book" className="relative overflow-hidden group px-6 py-2.5 rounded-full bg-white text-brand-bg text-sm font-bold transition-transform hover:scale-105 active:scale-95 shadow-lg">
              <span className="relative z-10 transition-colors group-hover:text-white">Book a Call</span>
              <div className="absolute inset-0 bg-brand-bg translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
