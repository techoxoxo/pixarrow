"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative pt-32 pb-10 border-t border-[#00F2FF]/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-accent opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-bold max-w-4xl tracking-tight"
          >
            Ready for <span className="text-gradient">lift-off</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-white/60 max-w-xl mx-auto"
          >
            Let&apos;s have a 30-minute discovery call to see if there&apos;s an opportunity to collaborate and work towards your goals.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="/book" className="group relative flex items-center gap-2 px-8 py-4 bg-brand-purple rounded-full font-bold text-white overflow-hidden transition-transform hover:scale-105 active:scale-95 duration-300 shadow-glow-purple">
              <span className="relative z-10">Book a Call with Pixarrow</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5 text-sm text-white/30">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Link href="/" className="flex items-center gap-4 group">
              <img src="/favicon.png" alt="P" className="h-8 w-8 transform group-hover:scale-110 transition-transform" />
              <span className="font-bold text-white tracking-widest uppercase text-xs">Pixarrow</span>
            </Link>
            <div className="flex gap-6">
              <Link href="/legal/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/legal/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
          
          <div className="flex gap-8 items-center">
            <div className="flex gap-6 mr-8">
              <Link href="https://www.facebook.com/Pixarrow/" className="hover:text-brand-purple transition-colors">Facebook</Link>
              <Link href="https://www.linkedin.com/company/pixarrow1/" className="hover:text-brand-purple transition-colors">LinkedIn</Link>
              <Link href="https://www.instagram.com/wearepixarrow/" className="hover:text-brand-purple transition-colors">Instagram</Link>
              <Link href="https://www.behance.net/pixarrow" className="hover:text-brand-purple transition-colors">Behance</Link>
            </div>
            <div className="flex gap-6">
              <Link href="mailto:hello@pixarrow.com" className="text-white hover:text-[#00F2FF] transition-colors font-medium">
                hello@pixarrow.com
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] text-white/10">
           <div>© {new Date().getFullYear()} PIXARROW STUDIO</div>
           <div>SHIPPING AT THE SPEED OF LIGHT</div>
        </div>
      </div>
    </footer>
  );
}

