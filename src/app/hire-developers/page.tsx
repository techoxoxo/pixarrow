"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Sparkles, 
  Check, 
  ShieldCheck, 
  Clock, 
  Lock, 
  ArrowRight, 
  Cpu, 
  Globe, 
  Smartphone, 
  CheckCircle2, 
  Send,
  Star,
  Award,
  Zap,
  Calculator,
  ArrowUpRight
} from "lucide-react";
import Link from "next/link";

const rolesList = [
  {
    role: "Senior Next.js & React Engineers",
    experience: "5+ Years Exp",
    rate: "From $3,500 / mo",
    skills: ["Next.js 16", "React 19", "TypeScript", "Tailwind", "RSC & Edge"],
    icon: Globe
  },
  {
    role: "React Native & Mobile App Developers",
    experience: "5+ Years Exp",
    rate: "From $3,800 / mo",
    skills: ["React Native", "Flutter", "iOS/Swift", "Android/Kotlin", "RevenueCat"],
    icon: Smartphone
  },
  {
    role: "Python, AI & LLM Specialists",
    experience: "4+ Years Exp",
    rate: "From $4,200 / mo",
    skills: ["LangChain", "OpenAI / Claude", "Pinecone", "FastAPI", "RAG Pipelines"],
    icon: Cpu
  },
  {
    role: "Node.js, NestJS & Backend Architects",
    experience: "6+ Years Exp",
    rate: "From $3,600 / mo",
    skills: ["NestJS", "Fastify", "PostgreSQL", "Redis", "AWS / Microservices"],
    icon: Zap
  }
];

const engagementModels = [
  {
    title: "Dedicated Full-Time Engineer",
    badge: "Most Popular",
    price: "$3,500 – $4,500",
    period: "/ month",
    desc: "A dedicated senior engineer working exclusively for your team (160 hrs/mo).",
    features: [
      "100% Dedicated to your codebase",
      "GitHub & project tool integration",
      "4-8 hours daily timezone overlap",
      "Daily standups & sprint reviews",
      "15-Day Risk-Free Trial period",
      "Zero recruitment or termination fees"
    ]
  },
  {
    title: "Dedicated Engineering Pod",
    badge: "Turn-Key Autonomous",
    price: "$9,500 – $14,000",
    period: "/ month",
    desc: "A complete autonomous software engineering squad managed by our Lead Architect.",
    features: [
      "1 Lead Architect / Tech Lead",
      "2 Senior Full-Stack Engineers",
      "1 QA & Automated Test Specialist",
      "1 Agile Project Manager",
      "Continuous sprint demos & SLA",
      "Weekly executive roadmap calls"
    ]
  },
  {
    title: "Fractional CTO & AI Advisory",
    badge: "Strategic Leadership",
    price: "$2,800 – $4,500",
    period: "/ sprint",
    desc: "High-level architectural oversight, AI strategy, security audits, and code reviews.",
    features: [
      "System architecture blueprinting",
      "SOC2 & ISO 27001 readiness review",
      "AI feasibility & RAG pipeline audit",
      "Engineering team mentoring",
      "Vendor & tech stack evaluation",
      "Weekly strategic alignment"
    ]
  }
];

const vettingSteps = [
  {
    step: "01",
    title: "Technical & Code Screening",
    desc: "Deep vetting of algorithmic problem solving, clean code architecture, and modern framework mastery."
  },
  {
    step: "02",
    title: "Live System Design",
    desc: "Evaluating real-world high-concurrency database design, caching strategies, and security protocols."
  },
  {
    step: "03",
    title: "Timezone & Communication",
    desc: "Fluent English verbal skills and structured daily async updates formatted for global teams."
  },
  {
    step: "04",
    title: "15-Day Zero-Risk Trial",
    desc: "Test the engineer directly in your sprint. If not 100% satisfied, you pay absolutely nothing."
  }
];

export default function HireDevelopersPage() {
  const [selectedRole, setSelectedRole] = useState(rolesList[0].role);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    duration: "3+ Months",
    requirements: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          role: selectedRole,
          source: "hire_developers_page",
          timestamp: new Date().toISOString()
        })
      });
      setIsSubmitted(true);
    } catch {
      setIsSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#070114] text-white pt-24 sm:pt-32 pb-16 sm:pb-24 px-5 sm:px-8 md:px-10 lg:px-12 relative overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] bg-[#7C3AED]/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50vw] h-[50vw] bg-[#FF007A]/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[60%] left-[20%] w-[40vw] h-[40vw] bg-[#00DFD8]/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Cyber Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-grid-pattern z-0" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* HERO SECTION: 2-COLUMN TALENT DISPATCH CONSOLE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-24 pt-4 sm:pt-8">
          
          {/* Left Column: Value Prop & Pitch */}
          <div className="flex flex-col items-start lg:col-span-7">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/40 text-[#C084FC] text-xs font-black uppercase tracking-widest mb-4 sm:mb-6 shadow-[0_0_20px_rgba(124,58,237,0.3)] backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00DFD8] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00DFD8]" />
              </span>
              <span>Top 3% Vetted Architects &amp; Pods</span>
            </div>

            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4.1rem] font-black tracking-tight leading-[1.08] sm:leading-[1.04] text-white mb-4 sm:mb-6">
              Deploy Dedicated Engineers <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF007A] via-[#7C3AED] to-[#00DFD8] drop-shadow-[0_0_40px_rgba(124,58,237,0.4)]">
                In Under 48 Hours.
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-white/80 mb-6 sm:mb-8 max-w-2xl leading-relaxed font-normal">
              Scale your engineering velocity instantly with rigorously vetted senior <span className="text-white font-bold">Next.js 16</span>, <span className="text-white font-bold">Mobile</span>, <span className="text-white font-bold">AI</span>, and <span className="text-white font-bold">Cloud Architects</span>. 100% time-zone aligned, zero overhead, and backed by a 15-day risk-free trial.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6 sm:mb-8 w-full sm:w-auto">
              <a
                href="#hire-form"
                className="w-full sm:w-auto px-7 py-3.5 sm:py-4 bg-gradient-to-r from-[#7C3AED] to-[#FF007A] hover:opacity-95 text-white text-sm sm:text-base font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-glow-purple flex items-center justify-center gap-2 text-center"
              >
                <span>Request Matching Profiles</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <Link
                href="/calculator"
                className="w-full sm:w-auto px-6 py-3.5 sm:py-4 bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 hover:border-white/40 text-white text-xs sm:text-base font-bold rounded-full transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 backdrop-blur-xl text-center"
              >
                <Calculator className="w-4 h-4 text-amber-300" />
                <span>Estimate Engineering Pod</span>
              </Link>
            </div>

            {/* Guarantee Row */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mb-6 sm:mb-8 text-[10px] sm:text-xs text-white/70 font-medium">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <Check className="w-3.5 h-3.5" />
                15-Day Risk-Free Trial
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1.5 text-purple-300 font-semibold">
                <Check className="w-3.5 h-3.5" />
                Match in &lt;48 Hours
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1.5 text-cyan-300 font-semibold">
                <Check className="w-3.5 h-3.5" />
                Signed NDA Protection
              </span>
            </div>

            {/* 4 Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 w-full">
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                <div className="text-lg sm:text-2xl font-black text-white">Top 3%</div>
                <div className="text-[9px] sm:text-[10px] font-bold text-[#00DFD8] uppercase tracking-wider mt-0.5">Vetting Standard</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                <div className="text-lg sm:text-2xl font-black text-white">&lt;48 Hrs</div>
                <div className="text-[9px] sm:text-[10px] font-bold text-pink-300 uppercase tracking-wider mt-0.5">Deployment SLA</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                <div className="text-lg sm:text-2xl font-black text-white">4-8 Hrs</div>
                <div className="text-[9px] sm:text-[10px] font-bold text-purple-300 uppercase tracking-wider mt-0.5">Timezone Overlap</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                <div className="text-lg sm:text-2xl font-black text-white">$0</div>
                <div className="text-[9px] sm:text-[10px] font-bold text-emerald-400 uppercase tracking-wider mt-0.5">Recruiting Fees</div>
              </div>
            </div>

          </div>

          {/* Right Column: Live Talent Dispatch Console */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#7C3AED]/30 via-[#FF007A]/25 to-[#00DFD8]/20 blur-[75px] rounded-full pointer-events-none" />

            {/* Talent Console Chassis */}
            <div className="relative w-full rounded-3xl p-1 sm:p-1.5 bg-gradient-to-b from-white/20 via-white/5 to-white/10 border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.85)] backdrop-blur-3xl overflow-hidden">
              <div className="rounded-2xl bg-[#09021a]/90 p-4 sm:p-6 border border-white/10">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-mono font-black text-white uppercase tracking-wider">
                      TALENT DISPATCH READY
                    </span>
                  </div>
                  <span className="text-[9px] font-mono text-cyan-300 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 font-bold">
                    4 ACTIVE ROLES
                  </span>
                </div>

                {/* 4 Active Talent Cards */}
                <div className="space-y-2.5 sm:space-y-3">
                  
                  {rolesList.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div 
                        key={item.role}
                        onClick={() => setSelectedRole(item.role)}
                        className="group p-3 sm:p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-purple-400/40 transition-all cursor-pointer flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-8 h-8 rounded-lg bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-300 shrink-0">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs sm:text-sm font-bold text-white group-hover:text-purple-300 transition-colors truncate">
                              {item.role}
                            </div>
                            <div className="text-[10px] text-white/50">{item.experience} • {item.rate}</div>
                          </div>
                        </div>
                        <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 shrink-0 ml-2">
                          Available
                        </span>
                      </div>
                    );
                  })}

                </div>

                {/* Live Trial SLA Badge */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/60">
                  <span className="flex items-center gap-1 text-cyan-300">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>15-Day Risk-Free Trial</span>
                  </span>
                  <span className="text-emerald-400 font-bold">MATCH IN &lt;48H</span>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* ROLES AVAILABLE FOR HIRE */}
        <div className="mb-14 sm:mb-20">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
              Engineering Talent Available Immediately
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              Pre-vetted senior developers ready to plug directly into your GitHub repositories.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {rolesList.map((item) => {
              const Icon = item.icon;
              const isSelected = selectedRole === item.role;
              return (
                <div
                  key={item.role}
                  onClick={() => setSelectedRole(item.role)}
                  className={`p-5 sm:p-6 rounded-2xl sm:rounded-3xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#7C3AED]/20 border-[#7C3AED] shadow-[0_0_25px_rgba(124,58,237,0.35)]"
                      : "bg-white/[0.02] border-white/10 hover:bg-white/[0.05]"
                  }`}
                >
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-[#7C3AED]/10 border border-[#7C3AED]/30 flex items-center justify-center text-[#A855F7] mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">{item.experience}</div>
                    <h3 className="text-base font-black text-white mb-2">{item.role}</h3>
                    <div className="text-sm font-black text-emerald-400 mb-4">{item.rate}</div>

                    <div className="flex flex-wrap gap-1 mb-6">
                      {item.skills.map((s) => (
                        <span key={s} className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] text-white/70">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all ${
                      isSelected
                        ? "bg-[#7C3AED] text-white shadow-glow-purple"
                        : "bg-white/5 text-white/60 hover:text-white"
                    }`}
                  >
                    {isSelected ? "Selected for Inquiry" : "Select Role"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* ENGAGEMENT MODELS & PRICING TIERS */}
        <div className="mb-14 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-2 sm:mb-3">
              Flexible Engagement Frameworks
            </h2>
            <p className="text-xs sm:text-sm text-white/60 max-w-xl mx-auto">
              Transparent monthly models with zero hidden charges and flexible monthly commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {engagementModels.map((model) => (
              <div
                key={model.title}
                className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/10 flex flex-col justify-between relative hover:border-[#7C3AED]/50 transition-all shadow-xl"
              >
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/40 text-[#A855F7] text-[10px] font-black uppercase tracking-wider mb-4">
                    {model.badge}
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-white mb-2">{model.title}</h3>
                  <p className="text-xs text-white/60 leading-relaxed mb-6">{model.desc}</p>

                  <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-white/10">
                    <span className="text-2xl sm:text-3xl font-black text-white">{model.price}</span>
                    <span className="text-xs text-white/40 font-semibold">{model.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {model.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2.5 text-xs text-white/80">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#hire-form"
                  className="w-full py-3.5 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-[#7C3AED] hover:to-[#FF007A] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all"
                >
                  <span>Request Candidate Resumes</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* 4-STAGE VETTING PROCESS */}
        <div className="mb-14 sm:mb-20 py-10 sm:py-16 border-t border-white/5">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-2 sm:mb-3">
              Our 4-Stage Developer Vetting Process
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              Only the top 3% of applicants pass our rigorous technical benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {vettingSteps.map((s) => (
              <div
                key={s.step}
                className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-brand-purple mb-3 sm:mb-4">
                    {s.step}
                  </div>
                  <h3 className="text-base font-black text-white mb-2">{s.title}</h3>
                  <p className="text-xs text-white/60 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* INQUIRY / RESUME REQUEST FORM */}
        <div id="hire-form" className="p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#15072e] to-[#0a0217] border border-white/10 backdrop-blur-2xl shadow-2xl max-w-3xl mx-auto">
          {isSubmitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-white mb-2">Talent Request Received!</h3>
              <p className="text-sm text-white/70 max-w-md mx-auto mb-6">
                Our Head of Engineering is curating 2–3 matching developer profiles for <span className="text-emerald-400 font-bold">{selectedRole}</span>. We will email you their resumes and schedule intro interviews within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-2.5 rounded-full bg-[#7C3AED] text-white text-xs font-bold"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <div>
              <div className="text-center mb-8">
                <div className="text-[10px] font-black uppercase tracking-widest text-[#A855F7] mb-1">
                  Fast 48-Hour Placement
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  Request Matching Developer Profiles
                </h2>
                <p className="text-xs text-white/60 mt-1">
                  Selected Role: <span className="text-[#00DFD8] font-bold">{selectedRole}</span>
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/60 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Sarah Jenkins"
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
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/30 text-base sm:text-sm focus:outline-none focus:border-[#7C3AED]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/60 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Labs Inc."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/30 text-base sm:text-sm focus:outline-none focus:border-[#7C3AED]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/60 mb-1">
                      Target Engagement Duration
                    </label>
                    <select
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0c051a] border border-white/10 text-white text-base sm:text-sm focus:outline-none focus:border-[#7C3AED]"
                    >
                      <option>1 – 3 Months (Sprint)</option>
                      <option>3 – 6 Months (Growth)</option>
                      <option>6 – 12+ Months (Dedicated)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/60 mb-1">
                    Key Technical Skills or Stack Needs (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    placeholder="e.g. Need 1 Senior Next.js dev with deep experience in Supabase & Stripe..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/30 text-base sm:text-sm focus:outline-none focus:border-[#7C3AED] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#FF007A] text-white font-black text-sm flex items-center justify-center gap-2 shadow-glow-purple transition-all cursor-pointer disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Receive Vetted Developer Profiles</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
