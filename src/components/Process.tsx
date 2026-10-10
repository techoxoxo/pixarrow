"use client";

import { motion } from "framer-motion";
import { 
  Rocket, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Clock, 
  Code2, 
  Database,
  Terminal,
  Activity
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const sprintSteps = [
  {
    num: "01",
    sprint: "Sprint 01 · Days 1–7",
    title: "System Architecture & Rapid Blueprint",
    tag: "Blueprint & UI/UX",
    desc: "We deconstruct your business model, map high-concurrency database schemas, and deliver ultra-high-fidelity interactive UI/UX Figma prototypes ready for validation.",
    deliverables: ["Product Requirements Document (PRD)", "Interactive Figma Design System", "Database & API Architecture Blueprint"],
    sla: "7-Day Milestone Lock",
    color: "from-[#7C3AED] to-[#FF007A]",
    accent: "#A855F7"
  },
  {
    num: "02",
    sprint: "Sprint 02 · Days 8–21",
    title: "Full-Stack Velocity Engineering",
    tag: "Next.js & Cloud Edge",
    desc: "Our senior engineering pod builds your frontend & backend in parallel using React 19, Next.js 16 Server Components, and optimized microservices for lightning performance.",
    deliverables: ["100% TypeScript & Tailwind v4 Codebase", "Secure REST / GraphQL & Database Integrations", "Live Staging Preview URLs with Instant CI/CD"],
    sla: "Continuous Daily Demos",
    color: "from-[#FF007A] to-[#00DFD8]",
    accent: "#00DFD8"
  },
  {
    num: "03",
    sprint: "Sprint 03 · Days 22–28",
    title: "Performance, CRO & E2E Testing",
    tag: "Optimization & QA",
    desc: "We subject your application to rigorous automated stress testing, security audits, and mathematical conversion rate optimization (CRO) to maximize every visitor's value.",
    deliverables: ["Sub-second 0.6s Global LCP Guarantee", "SOC-2 Ready Auth & Payment Security Audit", "Automated End-to-End Cypress/Playwright Tests"],
    sla: "100/100 Core Web Vitals",
    color: "from-[#00DFD8] to-[#7C3AED]",
    accent: "#38BDF8"
  },
  {
    num: "04",
    sprint: "Sprint 04 · Days 29–35",
    title: "Global Launch & Handover",
    tag: "Edge Deploy & Handover",
    desc: "We deploy your platform to global edge networks with 99.98% uptime SLA, configure live analytics, and hand over documentation and deployment runbooks.",
    deliverables: ["Production Edge CDN & Custom Domain Setup", "Documentation & Deployment Runbooks", "Dedicated Slack Support & Maintenance Retainer"],
    sla: "Complete Handover",
    color: "from-[#F59E0B] to-[#10B981]",
    accent: "#10B981"
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 px-5 sm:px-8 md:px-10 lg:px-12 relative z-10 w-full bg-brand-bg overflow-hidden" id="process">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-[-10%] w-[500px] h-[500px] bg-[#7C3AED]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-[-10%] w-[500px] h-[500px] bg-[#FF007A]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-[#A855F7] text-xs font-black uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>The Pixarrow Sprint Methodology</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6">
            From Concept to Market Dominance in <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF007A] via-[#7C3AED] to-[#00DFD8]">
              4 Agile Sprints.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/60 leading-relaxed font-sans">
            We eliminate legacy agency bloat. Every project is executed by senior full-stack architects with weekly demo milestones and guaranteed launch SLAs.
          </p>
        </div>

        {/* 4-Step Interactive Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Interactive Step Cards (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {sprintSteps.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 sm:p-7 rounded-[2rem] border transition-all duration-300 cursor-pointer text-left relative overflow-hidden ${
                    isSelected
                      ? "bg-gradient-to-r from-[#170830] to-[#0d031c] border-[#7C3AED] shadow-[0_10px_35px_rgba(124,58,237,0.25)]"
                      : "bg-[#0c051a]/60 border-white/5 hover:border-white/20 hover:bg-[#0c051a]/90"
                  }`}
                >
                  {/* Glowing active indicator line */}
                  {isSelected && (
                    <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-[#FF007A] via-[#7C3AED] to-[#00DFD8]" />
                  )}

                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <span className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm ${
                        isSelected 
                          ? "bg-[#7C3AED] text-white shadow-glow-purple" 
                          : "bg-white/5 text-white/40 border border-white/10"
                      }`}>
                        {step.num}
                      </span>
                      <span className="text-xs font-black uppercase tracking-wider text-[#00DFD8]">
                        {step.sprint}
                      </span>
                    </div>

                    <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">
                      {step.sla}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-white/60 leading-relaxed mb-4 font-sans">
                    {step.desc}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3 border-t border-white/5">
                    {step.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-white/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Holographic Engineering HUD Console (5 cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="p-8 rounded-[2.5rem] bg-gradient-to-b from-[#120529] via-[#090217] to-[#050011] border border-[#7C3AED]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl relative overflow-hidden">
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-white/40">
                  <Terminal className="w-3.5 h-3.5 text-[#00DFD8]" />
                  <span>pixarrow-sprint-engine.v4</span>
                </div>
              </div>

              {/* Active Sprint Live HUD Details */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#A855F7]">
                    ACTIVE MONITOR // {sprintSteps[activeStep].sprint.split("·")[0]}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                    <Activity className="w-3 h-3 animate-pulse" />
                    LIVE POD ACTIVE
                  </span>
                </div>

                <div className="text-2xl font-black text-white mb-2">
                  {sprintSteps[activeStep].title}
                </div>
                <div className="text-xs font-mono text-[#00DFD8] bg-[#00DFD8]/10 px-3 py-1.5 rounded-xl border border-[#00DFD8]/20 inline-block mb-4">
                  SLA: {sprintSteps[activeStep].sla}
                </div>
              </div>

              {/* Key SLA & Benchmark Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1">Code Quality</div>
                  <div className="text-lg font-black text-emerald-400">100% Type-Safe</div>
                  <div className="text-[10px] text-white/40">Zero Runtime Errors</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1">Global TTFB</div>
                  <div className="text-lg font-black text-[#00DFD8]">&lt; 0.4s Edge</div>
                  <div className="text-[10px] text-white/40">Cloudflare Edge Cache</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1">Testing SLA</div>
                  <div className="text-lg font-black text-purple-300">Automated E2E</div>
                  <div className="text-[10px] text-white/40">CI/CD on every commit</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1">Uptime SLA</div>
                  <div className="text-lg font-black text-amber-300">99.98%</div>
                  <div className="text-[10px] text-white/40">Monitored 24/7</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Link
                  href="/book"
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#7C3AED] to-[#FF007A] hover:opacity-95 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-glow-purple transition-all"
                >
                  <span>Start a 4-Week Sprint</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/calculator"
                  className="w-full py-3 px-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <span>Calculate Custom Sprint Timeline</span>
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

