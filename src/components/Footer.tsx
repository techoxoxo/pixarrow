"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp, Send, Mail, Phone, MapPin, CheckCircle2, Loader2 } from "lucide-react";

// Social SVG Icons for footer
const FacebookIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 8H7v3h2v9h3v-9h3.6L16 8h-3V6.3C12 5.5 12.3 5 13 5h2V2h-3C9.8 2 9 3.5 9 5.3V8z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.52 3.545 12 3.545 12 3.545s-7.52 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11C4.48 20.455 12 20.455 12 20.455s7.52 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837z M9.545 15.568V8.432L15.818 12z"/>
  </svg>
);

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) return;

    setIsSubmitting(true);
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Newsletter Subscriber",
          email: newsletterEmail,
          source: "newsletter_subscription",
          notes: "Subscribed to Pixarrow Tech & Growth Insights via Footer",
          timestamp: new Date().toISOString()
        })
      });
      setIsSubscribed(true);
      setNewsletterEmail("");
    } catch {
      setIsSubscribed(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="relative bg-brand-bg pt-20 pb-10 border-t border-white/5 overflow-hidden text-left" id="contact">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-purple/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16">
          
          {/* Column 1: Brand Info (3 Columns) */}
          <div className="flex flex-col items-start lg:col-span-3">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image 
                src="/logo.png" 
                alt="Pixarrow Logo" 
                width={160} 
                height={32} 
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-white/50 leading-relaxed font-sans font-medium mb-6 max-w-xs">
              We engineer high-performance web applications, mobile platforms, agentic AI workflows, and digital growth systems.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a 
                href="https://facebook.com/wearepixarrow" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full border border-white/5 bg-[#0e0524]/50 flex items-center justify-center text-white/50 hover:text-[#A855F7] hover:border-[#7C3AED]/35 transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a 
                href="https://instagram.com/wearepixarrow" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full border border-white/5 bg-[#0e0524]/50 flex items-center justify-center text-white/50 hover:text-[#A855F7] hover:border-[#7C3AED]/35 transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a 
                href="https://linkedin.com/company/pixarrow" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full border border-white/5 bg-[#0e0524]/50 flex items-center justify-center text-white/50 hover:text-[#A855F7] hover:border-[#7C3AED]/35 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a 
                href="https://youtube.com/@pixarrow" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full border border-white/5 bg-[#0e0524]/50 flex items-center justify-center text-white/50 hover:text-[#A855F7] hover:border-[#7C3AED]/35 transition-all"
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Column 2: Services (2 Columns) */}
          <div className="flex flex-col items-start lg:col-span-2">
            <h4 className="text-xs font-black text-white uppercase tracking-widest mb-6">Services</h4>
            <div className="flex flex-col gap-3.5 text-sm text-white/50 font-bold font-sans">
              <Link href="/services/nextjs-development" className="hover:text-[#A855F7] transition-colors">
                Next.js & Web Apps
              </Link>
              <Link href="/services/mobile-app-development" className="hover:text-[#A855F7] transition-colors">
                Mobile Engineering
              </Link>
              <Link href="/services/agentic-ai-automations" className="hover:text-[#A855F7] transition-colors">
                Agentic AI & LLMs
              </Link>
              <Link href="/services/ecommerce-growth-engineering" className="hover:text-[#A855F7] transition-colors">
                Shopify & eCommerce
              </Link>
              <Link href="/services" className="hover:text-[#A855F7] transition-colors">
                All Services & Silos
              </Link>
            </div>
          </div>

          {/* Column 3: Company (2 Columns) */}
          <div className="flex flex-col items-start lg:col-span-2">
            <h4 className="text-xs font-black text-white uppercase tracking-widest mb-6">Company</h4>
            <div className="flex flex-col gap-3.5 text-sm text-white/50 font-bold font-sans">
              <Link href="/about" className="hover:text-[#A855F7] transition-colors">
                About Pixarrow
              </Link>
              <Link href="/work" className="hover:text-[#A855F7] transition-colors">
                Selected Portfolio
              </Link>
              <Link href="/blog" className="hover:text-[#A855F7] transition-colors">
                Engineering Insights
              </Link>
              <Link href="/hire-developers" className="hover:text-[#A855F7] transition-colors">
                Hire Dedicated Team
              </Link>
              <Link href="/book" className="hover:text-[#A855F7] transition-colors">
                Book Strategy Call
              </Link>
            </div>
          </div>

          {/* Column 4: Resources (2 Columns) */}
          <div className="flex flex-col items-start lg:col-span-2">
            <h4 className="text-xs font-black text-white uppercase tracking-widest mb-6">Resources</h4>
            <div className="flex flex-col gap-3.5 text-sm text-white/50 font-bold font-sans">
              <Link href="/calculator" className="hover:text-[#A855F7] transition-colors">
                Project Cost Estimator
              </Link>
              <Link href="/process" className="hover:text-[#A855F7] transition-colors">
                Engineering Process
              </Link>
              <Link href="/industries/fintech" className="hover:text-[#A855F7] transition-colors">
                Industry Silos
              </Link>
              <Link href="/legal/privacy-policy" className="hover:text-[#A855F7] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/legal/terms" className="hover:text-[#A855F7] transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Column 5: Let's Connect (3 Columns) */}
          <div className="flex flex-col items-start lg:col-span-3 w-full">
            <h4 className="text-xs font-black text-white uppercase tracking-widest mb-6">Let&apos;s Connect</h4>
            
            <div className="flex flex-col gap-3 text-sm text-white/50 font-bold font-sans mb-6 w-full">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#A855F7] shrink-0" />
                <a href="mailto:hello@pixarrow.com" className="hover:text-white transition-colors truncate">
                  hello@pixarrow.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#A855F7] shrink-0" />
                <a href="tel:+917973060924" className="hover:text-white transition-colors">
                  +91 79730 60924
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#A855F7] shrink-0" />
                <span>Mohali, Punjab, India</span>
              </div>
            </div>

            {/* Newsletter Input Form */}
            <div className="w-full max-w-[300px]">
              {isSubscribed ? (
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-300 text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Subscribed to Pixarrow Blueprints!</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="relative w-full">
                  <input 
                    type="email" 
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email" 
                    className="w-full bg-[#0e0524]/60 border border-white/10 rounded-xl py-2.5 px-4 pr-12 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#7C3AED]/60 transition-colors font-sans"
                  />
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#7C3AED] hover:bg-[#7C3AED]/90 text-white rounded-lg flex items-center justify-center shadow-lg transition-transform active:scale-95 cursor-pointer disabled:opacity-50"
                    aria-label="Subscribe to newsletter"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <Send className="w-3.5 h-3.5" />
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Bottom copyright and Scroll back to top */}
        <div className="border-t border-white/5 pt-8 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
          <div>© 2026 Pixarrow. All rights reserved.</div>
          
          <button 
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full border border-white/10 bg-[#0e0524]/50 flex items-center justify-center text-white/50 hover:text-white hover:border-[#7C3AED]/35 hover:bg-[#7C3AED] transition-all cursor-pointer shadow-lg active:scale-95"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}

