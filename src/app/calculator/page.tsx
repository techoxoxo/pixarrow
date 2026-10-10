"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  ShieldCheck, 
  Lock, 
  Clock, 
  Cpu, 
  Smartphone, 
  Globe, 
  ShoppingBag, 
  Database, 
  CheckCircle2, 
  Download, 
  Layers,
  Zap,
  Star
} from "lucide-react";
import Link from "next/link";

interface Option {
  id: string;
  name: string;
  desc: string;
  price: number;
  icon?: any;
}

const platformOptions: Option[] = [
  { id: "web", name: "Next.js Web Application", desc: "High-performance full-stack web portal or SaaS", price: 1200, icon: Globe },
  { id: "mobile", name: "iOS & Android Mobile App", desc: "Native or React Native cross-platform app", price: 1800, icon: Smartphone },
  { id: "ai", name: "Agentic AI & LLM System", desc: "Custom AI agents, RAG pipeline & automations", price: 1500, icon: Cpu },
  { id: "ecommerce", name: "Shopify Plus / Headless Commerce", desc: "Ultra-fast eCommerce store with high conversion", price: 1400, icon: ShoppingBag },
  { id: "fullstack", name: "Enterprise Multi-Platform Suite", desc: "Web + Mobile + Admin portal + Cloud backend", price: 3200, icon: Layers },
];

const scopeOptions: Option[] = [
  { id: "mvp", name: "MVP / Phase 1 Launch", desc: "Core features to validate product and acquire first 10k users", price: 600 },
  { id: "growth", name: "Scale-Ready Platform", desc: "Production architecture with complete user flows & security", price: 1200 },
  { id: "enterprise", name: "High-Load Enterprise System", desc: "Microservices, SOC2-ready, multi-tenant & bank-grade SLA", price: 2400 },
];

const featureOptions: Option[] = [
  { id: "auth", name: "Enterprise Auth & Role Permissions", desc: "OAuth, SSO, 2FA, granular permission matrix", price: 200 },
  { id: "payments", name: "Global Payments & Subscriptions", desc: "Stripe, PayPal, recurring billing, multi-currency", price: 250 },
  { id: "ai_workflows", name: "Real-Time AI Agents & Workflows", desc: "LangChain, OpenAI/Claude API, vector embeddings", price: 450 },
  { id: "analytics", name: "Custom Analytics & Executive Dashboard", desc: "Real-time charts, user behavior, exportable reports", price: 300 },
  { id: "cms", name: "Headless CMS & Dynamic Page Builder", desc: "Sanity/Strapi integration for easy marketing edits", price: 250 },
  { id: "integrations", name: "Third-Party API & ERP Integration", desc: "CRM, ERP, Turn14, Hubspot, or custom webhooks", price: 350 },
];

const timelineOptions: Option[] = [
  { id: "standard", name: "Standard Delivery (4 – 6 Weeks)", desc: "Methodical agile sprints with weekly demos", price: 0 },
  { id: "fast", name: "Fast-Track Sprint (2 – 3 Weeks)", desc: "Dedicated pod with parallel design & engineering", price: 450 },
  { id: "pod", name: "Dedicated Engineering Pod (Monthly Retainer)", desc: "Full-time senior team from $1,800/month", price: 1800 },
];

export default function CalculatorPage() {
  const [step, setStep] = useState(1);
  const [selectedPlatform, setSelectedPlatform] = useState<string>("web");
  const [selectedScope, setSelectedScope] = useState<string>("growth");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(["auth", "payments", "analytics"]);
  const [selectedTimeline, setSelectedTimeline] = useState<string>("standard");

  const [leadData, setLeadData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    notes: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  // Compute calculated estimate
  const platformPrice = platformOptions.find(p => p.id === selectedPlatform)?.price || 0;
  const scopePrice = scopeOptions.find(s => s.id === selectedScope)?.price || 0;
  const featuresPrice = selectedFeatures.reduce((acc, fId) => {
    const f = featureOptions.find(item => item.id === fId);
    return acc + (f?.price || 0);
  }, 0);
  const timelinePrice = timelineOptions.find(t => t.id === selectedTimeline)?.price || 0;

  const totalBase = platformPrice + scopePrice + featuresPrice + timelinePrice;
  const minEstimate = Math.round(totalBase * 0.9);
  const maxEstimate = Math.round(totalBase * 1.25);

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...leadData,
          source: "interactive_calculator",
          platform: selectedPlatform,
          scope: selectedScope,
          features: selectedFeatures,
          timeline: selectedTimeline,
          estimateRange: `$${minEstimate.toLocaleString()} – $${maxEstimate.toLocaleString()}`,
          timestamp: new Date().toISOString()
        })
      });
      setIsSubmitted(true);
    } catch {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const calculatorJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Pixarrow Interactive Scope & Cost Calculator",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All modern browsers",
    "url": "https://pixarrow.com/calculator",
    "description": "Calculate project budget, scope, and technical timeline for Next.js web applications, mobile apps, and enterprise systems.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "creator": {
      "@type": "Organization",
      "name": "Pixarrow",
      "url": "https://pixarrow.com"
    }
  };

  return (
    <div className="min-h-screen bg-[#070114] text-white pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorJsonLd) }}
      />
      {/* Ambient Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] bg-[#7C3AED]/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50vw] h-[50vw] bg-[#FF007A]/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[50%] left-[20%] w-[40vw] h-[40vw] bg-[#00DFD8]/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Cyber Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-grid-pattern z-0" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 pt-2 sm:pt-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/40 text-[#C084FC] text-xs font-black uppercase tracking-widest mb-4 sm:mb-6 shadow-[0_0_20px_rgba(124,58,237,0.3)] backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00DFD8] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00DFD8]" />
            </span>
            <span>Real-Time Scope &amp; Budget Engine</span>
          </div>
          
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08] text-white mb-3 sm:mb-4">
            Calculate Your Project <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF007A] via-[#7C3AED] to-[#00DFD8] drop-shadow-[0_0_40px_rgba(124,58,237,0.4)]">
              Scope &amp; Investment.
            </span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-normal mb-6">
            Get an instant, transparent engineering budget estimate and receive a customized technical architecture roadmap within 2 minutes.
          </p>

          {/* Trust Guarantee Row */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-white/70 font-medium">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <Check className="w-3.5 h-3.5" />
              100% Free &amp; Transparent
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5 text-purple-300 font-semibold">
              <Check className="w-3.5 h-3.5" />
              Zero Obligation
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5 text-cyan-300 font-semibold">
              <Check className="w-3.5 h-3.5" />
              Instant Architecture Roadmap
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8 sm:mb-10 max-w-2xl mx-auto">
          <div className="flex items-center justify-between text-xs font-bold text-white/60 mb-2">
            <span className="text-purple-300 uppercase tracking-wider font-mono">Step {step} of 4</span>
            <span className="text-[#00DFD8] font-mono">{step === 1 ? "Platform Selection" : step === 2 ? "Scope & Architecture Tier" : step === 3 ? "Key Technical Features" : "Summary & Blueprint"}</span>
          </div>
          <div className="h-2.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/10 p-0.5 backdrop-blur-md">
            <div 
              className="h-full bg-gradient-to-r from-[#7C3AED] via-[#FF007A] to-[#00DFD8] transition-all duration-500 rounded-full shadow-[0_0_15px_rgba(124,58,237,0.8)]"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* Calculator Main Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left / Center: Interactive Steps */}
          <div className="lg:col-span-8 p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#0c051a]/80 border border-white/10 backdrop-blur-2xl shadow-2xl">
            <AnimatePresence mode="wait">
              
              {/* STEP 1: Platform Selection */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-white">1. Select Core Platform Focus</h2>
                    <p className="text-xs sm:text-sm text-white/60 mt-1">What type of product or digital infrastructure are you looking to build?</p>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {platformOptions.map((opt) => {
                      const Icon = opt.icon;
                      const isSelected = selectedPlatform === opt.id;
                      return (
                        <div
                          key={opt.id}
                          onClick={() => setSelectedPlatform(opt.id)}
                          className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                            isSelected
                              ? "bg-[#7C3AED]/20 border-[#7C3AED] shadow-[0_0_25px_rgba(124,58,237,0.35)]"
                              : "bg-white/[0.02] border-white/10 hover:bg-white/[0.05]"
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                              isSelected ? "bg-[#7C3AED] text-white" : "bg-white/5 text-white/60"
                            }`}>
                              <Icon className="w-6 h-6" />
                            </div>
                            <div>
                              <h3 className="text-base font-black text-white">{opt.name}</h3>
                              <p className="text-xs text-white/50 mt-0.5">{opt.desc}</p>
                            </div>
                          </div>
                          <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                            {isSelected && <div className="w-3.5 h-3.5 rounded-full bg-[#00DFD8]" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      onClick={() => setStep(2)}
                      className="px-8 py-3.5 rounded-full bg-[#7C3AED] hover:bg-[#7C3AED]/90 text-white font-bold text-sm flex items-center gap-2 shadow-glow-purple transition-all cursor-pointer"
                    >
                      <span>Continue to Scope</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Scope & Architecture Tier */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-white">2. Project Scope & Architecture Tier</h2>
                    <p className="text-xs sm:text-sm text-white/60 mt-1">Select the scale and development maturity required for this release.</p>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {scopeOptions.map((opt) => {
                      const isSelected = selectedScope === opt.id;
                      return (
                        <div
                          key={opt.id}
                          onClick={() => setSelectedScope(opt.id)}
                          className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                            isSelected
                              ? "bg-[#7C3AED]/20 border-[#7C3AED] shadow-[0_0_25px_rgba(124,58,237,0.35)]"
                              : "bg-white/[0.02] border-white/10 hover:bg-white/[0.05]"
                          }`}
                        >
                          <div>
                            <h3 className="text-base font-black text-white">{opt.name}</h3>
                            <p className="text-xs text-white/50 mt-1 leading-relaxed">{opt.desc}</p>
                          </div>
                          <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                            {isSelected && <div className="w-3.5 h-3.5 rounded-full bg-[#00DFD8]" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <button
                      onClick={() => setStep(1)}
                      className="px-6 py-3 rounded-full border border-white/10 hover:border-white/30 text-white font-bold text-sm flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      className="px-8 py-3.5 rounded-full bg-[#7C3AED] hover:bg-[#7C3AED]/90 text-white font-bold text-sm flex items-center gap-2 shadow-glow-purple transition-all cursor-pointer"
                    >
                      <span>Choose Features</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Key Features & Integrations */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-white">3. Essential Features & Modules</h2>
                    <p className="text-xs sm:text-sm text-white/60 mt-1">Select all key features and technical capabilities needed.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {featureOptions.map((opt) => {
                      const isSelected = selectedFeatures.includes(opt.id);
                      return (
                        <div
                          key={opt.id}
                          onClick={() => toggleFeature(opt.id)}
                          className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                            isSelected
                              ? "bg-purple-500/20 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                              : "bg-white/[0.02] border-white/10 hover:bg-white/[0.05]"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <h3 className="text-sm font-black text-white">{opt.name}</h3>
                            <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${
                              isSelected ? "bg-purple-500 border-purple-500 text-white" : "border-white/20"
                            }`}>
                              {isSelected && <Check className="w-3.5 h-3.5" />}
                            </div>
                          </div>
                          <p className="text-[11px] text-white/50">{opt.desc}</p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Timeline speed choice */}
                  <div className="pt-4 border-t border-white/10">
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/60 mb-2">
                      Target Timeline & Team Engagement
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {timelineOptions.map((t) => (
                        <button
                          type="button"
                          key={t.id}
                          onClick={() => setSelectedTimeline(t.id)}
                          className={`p-3 text-xs text-left rounded-xl border transition-all cursor-pointer ${
                            selectedTimeline === t.id
                              ? "bg-[#00DFD8]/20 border-[#00DFD8] text-white font-bold"
                              : "bg-white/[0.02] border-white/10 text-white/70 hover:bg-white/[0.05]"
                          }`}
                        >
                          <div className="font-black text-white">{t.name}</div>
                          <div className="text-[10px] text-white/40 mt-0.5">{t.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <button
                      onClick={() => setStep(2)}
                      className="px-6 py-3 rounded-full border border-white/10 hover:border-white/30 text-white font-bold text-sm flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      onClick={() => setStep(4)}
                      className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#FF007A] text-white font-bold text-sm flex items-center gap-2 shadow-glow-purple transition-all cursor-pointer"
                    >
                      <span>View Final Estimate & Roadmap</span>
                      <Zap className="w-4 h-4 text-amber-300" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 4: Final Summary & Lead Capture */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  {isSubmitted ? (
                    <div className="py-12 px-4 text-center flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4 animate-bounce">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-3xl font-black text-white mb-2">Estimate & Blueprint Confirmed!</h3>
                      <p className="text-sm text-white/70 max-w-md mb-6 leading-relaxed">
                        We have dispatched your comprehensive **Technical Architecture & Sprint Breakdown PDF** to <span className="text-emerald-400 font-bold">{leadData.email}</span>.
                      </p>

                      <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-left w-full max-w-md mb-8">
                        <div className="text-xs font-bold text-white/40 uppercase tracking-wider mb-2">What Happens Next:</div>
                        <ul className="space-y-2 text-xs text-white/80">
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            <span>Our Senior Architect prepares your customized ERD & tech stack blueprint.</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                            <span>Signed 24-hour mutual NDA is attached for IP protection.</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                            <span>Direct 30-min strategy call invite with our Partner.</span>
                          </li>
                        </ul>
                      </div>

                      <div className="flex gap-4">
                        <Link
                          href="/book"
                          className="px-8 py-3.5 rounded-full bg-[#7C3AED] hover:bg-[#7C3AED]/90 text-white font-bold text-sm shadow-glow-purple transition-all"
                        >
                          Book 30-Min Strategy Call
                        </Link>
                        <Link
                          href="/"
                          className="px-6 py-3.5 rounded-full border border-white/10 hover:border-white/30 text-white font-bold text-sm transition-all"
                        >
                          Return Home
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="mb-6">
                        <h2 className="text-2xl font-black text-white">Your Preliminary Estimate is Ready</h2>
                        <p className="text-xs sm:text-sm text-white/60 mt-1">Enter your details to receive the full architectural breakdown and lock in this budget.</p>
                      </div>

                      <form onSubmit={handleLeadSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-white/60 mb-1">
                              Your Name *
                            </label>
                            <input
                              type="text"
                              required
                              value={leadData.name}
                              onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
                              placeholder="Alex Mercer"
                              className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/30 text-base sm:text-sm focus:outline-none focus:border-[#7C3AED]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-white/60 mb-1">
                              Work Email *
                            </label>
                            <input
                              type="email"
                              required
                              value={leadData.email}
                              onChange={(e) => setLeadData({ ...leadData, email: e.target.value })}
                              placeholder="alex@company.com"
                              className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/30 text-base sm:text-sm focus:outline-none focus:border-[#7C3AED]"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-white/60 mb-1">
                              Phone / WhatsApp (Optional)
                            </label>
                            <input
                              type="tel"
                              value={leadData.phone}
                              onChange={(e) => setLeadData({ ...leadData, phone: e.target.value })}
                              placeholder="+1 (555) 000-0000"
                              className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/30 text-base sm:text-sm focus:outline-none focus:border-[#7C3AED]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-white/60 mb-1">
                              Company / Project Name
                            </label>
                            <input
                              type="text"
                              value={leadData.company}
                              onChange={(e) => setLeadData({ ...leadData, company: e.target.value })}
                              placeholder="Acme Tech Inc."
                              className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/30 text-base sm:text-sm focus:outline-none focus:border-[#7C3AED]"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-white/60 mb-1">
                            Additional Context or Target Milestones (Optional)
                          </label>
                          <textarea
                            rows={2}
                            value={leadData.notes}
                            onChange={(e) => setLeadData({ ...leadData, notes: e.target.value })}
                            placeholder="e.g. Planning Q3 launch, integrations with Stripe + Salesforce needed..."
                            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/30 text-base sm:text-sm focus:outline-none focus:border-[#7C3AED] resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#FF007A] hover:opacity-95 text-white font-extrabold text-base flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all cursor-pointer disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          ) : (
                            <>
                              <Download className="w-5 h-5" />
                              <span>Get My Architecture Blueprint & Estimate</span>
                            </>
                          )}
                        </button>

                        <div className="flex items-center justify-center gap-6 pt-3 text-xs text-white/50">
                          <span className="flex items-center gap-1.5">
                            <ShieldCheck className="w-4 h-4 text-emerald-400" />
                            Signed NDA in 24h
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Lock className="w-4 h-4 text-purple-400" />
                            100% IP Ownership
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4 text-cyan-400" />
                            No Obligation
                          </span>
                        </div>
                      </form>
                    </div>
                  )}
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Right Column: Live Calculated Breakdown Sticky Card */}
          <div className="lg:col-span-4 sticky top-32 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#15072e] to-[#0a0217] border border-white/10 backdrop-blur-2xl shadow-2xl">
              <div className="text-[11px] font-bold text-white/40 uppercase tracking-widest mb-1">
                Estimated Investment Range
              </div>
              <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00DFD8] via-[#7C3AED] to-[#FF007A] tracking-tight">
                ${minEstimate.toLocaleString()} – ${maxEstimate.toLocaleString()}
              </div>
              <div className="text-xs text-white/50 mt-1">
                Estimated Timeline: <span className="text-white font-bold">{selectedTimeline === "fast" ? "3–5 Weeks" : selectedTimeline === "pod" ? "Ongoing Sprint" : "6–8 Weeks"}</span>
              </div>

              <div className="h-px bg-white/10 my-6" />

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between text-white/70">
                  <span className="font-semibold">Platform:</span>
                  <span className="font-bold text-white">{platformOptions.find(p => p.id === selectedPlatform)?.name.split(" ")[0]}...</span>
                </div>
                <div className="flex items-center justify-between text-white/70">
                  <span className="font-semibold">Architecture Tier:</span>
                  <span className="font-bold text-white">{scopeOptions.find(s => s.id === selectedScope)?.name.split(" ")[0]}</span>
                </div>
                <div className="flex items-center justify-between text-white/70">
                  <span className="font-semibold">Modules Selected:</span>
                  <span className="font-bold text-[#00DFD8]">{selectedFeatures.length} Features</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 mt-6">
                <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span>Pixarrow Guarantee</span>
                </div>
                <p className="text-[11px] text-white/60 leading-relaxed">
                  Fixed milestone deliverables, 15-day risk-free trial on dedicated engineering pods, and 100% full IP source code transfer upon completion.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
