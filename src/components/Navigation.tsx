"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      if (mobileMenuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    }
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "unset";
      }
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-[1000] px-4 py-3 md:px-6 md:py-5 pointer-events-none">
        <nav className={`max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 h-12 md:h-16 rounded-full border pointer-events-auto transition-all duration-500 ${
            scrolled || mobileMenuOpen
              ? "bg-brand-bg/95 backdrop-blur-2xl border-white/10 shadow-2xl" 
              : "bg-brand-bg/50 backdrop-blur-md border-white/5"
          }`}>
            
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center shrink-0 relative z-[1001]">
              <img 
                src="/logo.png" 
                alt="Pixarrow" 
                className="h-5 md:h-7 w-auto object-contain" 
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 shrink-0">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="px-4 py-2 text-sm font-semibold text-white/70 hover:text-white transition-all rounded-full hover:bg-white/10"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2 md:gap-4 shrink-0">
              <Link href="/book" className="hidden sm:inline-flex px-6 py-2.5 bg-white text-brand-bg rounded-full text-sm font-bold hover:scale-105 transition-transform shadow-lg">
                Book a Call
              </Link>

              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex md:hidden w-10 h-10 items-center justify-center text-white relative z-[1001] transition-transform active:scale-90"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </nav>
      </header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[999] bg-brand-bg md:hidden pt-32 px-8 flex flex-col"
          >
             <div className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                   <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                   >
                     <Link 
                      href={link.href} 
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-3xl sm:text-5xl font-black text-white italic tracking-tighter hover:text-brand-purple transition-colors"
                    >
                      {link.name}
                    </Link>
                   </motion.div>
                ))}
             </div>
             
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.6 }}
               className="mt-16"
             >
                <Link 
                  href="/book" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-6 bg-brand-purple text-white rounded-full font-black text-2xl flex items-center justify-center shadow-glow-purple"
                >
                  Book a Discovery Call
                </Link>
             </motion.div>

             {/* Background decorative element */}
             <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-purple/10 blur-[100px] rounded-full" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
