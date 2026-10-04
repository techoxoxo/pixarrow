"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  Globe, 
  Smartphone, 
  Cpu, 
  ShoppingBag, 
  Users, 
  Calculator, 
  ArrowRight,
  TrendingUp,
  Building2,
  HeartPulse
} from "lucide-react";
import Image from "next/image";

const megaMenuServices = [
  {
    name: "Next.js Web Engineering",
    desc: "Ultra-fast headless web portals & enterprise SaaS",
    href: "/services/nextjs-development",
    icon: Globe,
    color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  },
  {
    name: "Mobile App Development",
    desc: "iOS, Android & React Native native experiences",
    href: "/services/mobile-app-development",
    icon: Smartphone,
    color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  },
  {
    name: "Agentic AI & Automations",
    desc: "Custom LLMs, AI agents & automated cloud pipelines",
    href: "/services/agentic-ai-automations",
    icon: Cpu,
    color: "text-pink-400 bg-pink-500/10 border-pink-500/20",
  },
  {
    name: "eCommerce & Shopify Plus",
    desc: "Headless commerce, high-converting checkout & CRO",
    href: "/services/ecommerce-growth-engineering",
    icon: ShoppingBag,
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
];

const industryLinks = [
  { name: "FinTech & Banking", href: "/industries/fintech", icon: TrendingUp },
  { name: "eCommerce & D2C", href: "/industries/ecommerce", icon: ShoppingBag },
  { name: "B2B SaaS Platforms", href: "/industries/saas", icon: Building2 },
  { name: "HealthTech & Telehealth", href: "/industries/healthcare", icon: HeartPulse },
];

const techStackBadges = [
  "Next.js 16", "React Native", "Python AI", "NestJS", "Fastify", "Shopify Plus", "AWS Cloud", "Tailwind"
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-[1000] px-4 py-3 md:px-6 md:py-5 pointer-events-none">
        <nav
          className={`max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 h-12 md:h-16 rounded-full border pointer-events-auto transition-all duration-500 relative ${
            scrolled || mobileMenuOpen
              ? "bg-brand-bg/95 backdrop-blur-2xl border-white/10 shadow-2xl"
              : "bg-brand-bg/60 backdrop-blur-md border-white/5"
          }`}
        >
          <Link
            href="/"
            onClick={() => {
              setMobileMenuOpen(false);
              setServicesDropdownOpen(false);
            }}
            className="flex items-center gap-2 shrink-0 relative z-[1001]"
          >
            <Image
              src="/logo.png"
              alt="Pixarrow"
              width={160}
              height={32}
              className="h-7 sm:h-8 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 shrink-0">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-semibold text-white/70 hover:text-white transition-all rounded-full hover:bg-white/5"
            >
              Home
            </Link>

            {/* Services with Mega-Menu Trigger */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-white/70 hover:text-white transition-all rounded-full hover:bg-white/5 cursor-pointer"
              >
                <span>Services & Sectors</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    servicesDropdownOpen ? "rotate-180 text-brand-purple" : ""
                  }`}
                />
              </button>

              {/* Mega-Menu Dropdown Panel */}
              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[820px] p-6 rounded-3xl bg-[#0c051a]/95 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.9)] backdrop-blur-2xl grid grid-cols-12 gap-6 z-50 pointer-events-auto"
                  >
                    {/* Left 6 Cols: Core Services */}
                    <div className="col-span-6 space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-white/10">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#A855F7]">
                          Engineering Practices
                        </span>
                        <Link
                          href="/services"
                          onClick={() => setServicesDropdownOpen(false)}
                          className="text-xs text-white/60 hover:text-white flex items-center gap-1 font-semibold"
                        >
                          <span>All Services</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>

                      <div className="grid grid-cols-1 gap-1.5">
                        {megaMenuServices.map((svc) => {
                          const Icon = svc.icon;
                          return (
                            <Link
                              key={svc.name}
                              href={svc.href}
                              onClick={() => setServicesDropdownOpen(false)}
                              className="group p-2 rounded-2xl hover:bg-white/[0.04] border border-transparent hover:border-white/5 transition-all flex items-start gap-3"
                            >
                              <div
                                className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border ${svc.color}`}
                              >
                                <Icon className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-xs font-black text-white group-hover:text-brand-purple transition-colors">
                                  {svc.name}
                                </div>
                                <div className="text-[11px] text-white/50 leading-snug line-clamp-1">
                                  {svc.desc}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>

                    {/* Middle 3 Cols: Industry Verticals */}
                    <div className="col-span-3 border-l border-white/10 pl-5 space-y-3">
                      <div className="pb-2 border-b border-white/10">
                        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">
                          Industry Silos
                        </span>
                      </div>
                      <div className="space-y-2">
                        {industryLinks.map((ind) => {
                          const Icon = ind.icon;
                          return (
                            <Link
                              key={ind.name}
                              href={ind.href}
                              onClick={() => setServicesDropdownOpen(false)}
                              className="group flex items-center gap-2.5 p-2 rounded-xl hover:bg-white/[0.04] text-xs text-white/70 hover:text-white transition-all font-semibold"
                            >
                              <Icon className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
                              <span>{ind.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>

                    {/* Right 3 Cols: Calculator Teaser */}
                    <div className="col-span-3 flex flex-col justify-between border-l border-white/10 pl-5">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#FF007A] block mb-2">
                          Ecosystem
                        </span>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {techStackBadges.slice(0, 6).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/5 text-[9px] text-white/70 font-semibold"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Link
                        href="/calculator"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="p-3 rounded-2xl bg-gradient-to-br from-[#7C3AED]/20 to-[#FF007A]/20 border border-[#7C3AED]/40 hover:border-[#FF007A] transition-all group block"
                      >
                        <div className="flex items-center gap-1.5 text-xs font-black text-white mb-1">
                          <Calculator className="w-3.5 h-3.5 text-amber-300" />
                          <span>Scope Estimator</span>
                        </div>
                        <p className="text-[10px] text-white/60 leading-snug mb-2">
                          Instant budget & timeline estimate.
                        </p>
                        <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                          <span>Calculate</span>
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/hire-developers"
              className="px-3 py-2 text-sm font-semibold text-emerald-300 hover:text-emerald-200 transition-all rounded-full hover:bg-emerald-500/10 flex items-center gap-1"
            >
              <Users className="w-3.5 h-3.5" />
              <span>Hire Developers</span>
            </Link>

            <Link
              href="/work"
              className="px-3 py-2 text-sm font-semibold text-white/70 hover:text-white transition-all rounded-full hover:bg-white/5"
            >
              Work
            </Link>

            <Link
              href="/calculator"
              className="px-3 py-2 text-sm font-semibold text-amber-300 hover:text-amber-200 transition-all rounded-full hover:bg-amber-400/10 flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Estimator</span>
            </Link>

            <Link
              href="/about"
              className="px-3 py-2 text-sm font-semibold text-white/70 hover:text-white transition-all rounded-full hover:bg-white/5"
            >
              About
            </Link>

            <Link
              href="/blog"
              className="px-3 py-2 text-sm font-semibold text-white/70 hover:text-white transition-all rounded-full hover:bg-white/5"
            >
              Blog
            </Link>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            <Link
              href="/book"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-gradient-to-r from-[#7C3AED] to-[#FF007A] hover:opacity-95 text-white rounded-full text-xs font-bold hover:scale-105 transition-transform shadow-glow-purple"
            >
              <span>Get Started</span>
              <span className="text-[13px]">→</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex lg:hidden w-10 h-10 items-center justify-center text-white relative z-[1001] transition-transform active:scale-90"
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
            className="fixed inset-0 z-[999] bg-brand-bg lg:hidden pt-28 px-8 pb-8 flex flex-col justify-between overflow-y-auto"
          >
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-black text-white hover:text-brand-purple transition-colors"
              >
                Home
              </Link>
              <Link
                href="/hire-developers"
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-black text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-2"
              >
                <Users className="w-5 h-5" />
                <span>Hire Dedicated Developers</span>
              </Link>
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-black text-white hover:text-brand-purple transition-colors"
              >
                Services
              </Link>
              <div className="pl-4 space-y-1.5 border-l border-white/10">
                {megaMenuServices.map((svc) => (
                  <Link
                    key={svc.name}
                    href={svc.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-semibold text-white/60 hover:text-white"
                  >
                    {svc.name}
                  </Link>
                ))}
              </div>
              <div className="text-xs font-bold text-white/40 uppercase tracking-wider pt-2">
                Industries
              </div>
              <div className="pl-4 space-y-1.5 border-l border-white/10">
                {industryLinks.map((ind) => (
                  <Link
                    key={ind.name}
                    href={ind.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-semibold text-emerald-300/80 hover:text-emerald-300"
                  >
                    {ind.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-black text-amber-300 hover:text-amber-200 transition-colors flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                <span>Cost Estimator</span>
              </Link>
              <Link
                href="/work"
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-black text-white hover:text-brand-purple transition-colors"
              >
                Our Work
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-black text-white hover:text-brand-purple transition-colors"
              >
                About
              </Link>
              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-black text-white hover:text-brand-purple transition-colors"
              >
                Blog
              </Link>
            </div>

            <div className="pt-6 border-t border-white/10">
              <Link
                href="/book"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 bg-gradient-to-r from-[#7C3AED] to-[#FF007A] text-white rounded-full font-black text-base flex items-center justify-center shadow-glow-purple"
              >
                Start Your Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
