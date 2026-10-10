"use client";

import { motion } from "framer-motion";
import { Terminal, Code2, Gauge, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";

const blocks = [
  { 
    step: "01", 
    title: "Algorithmic Discovery & ERD Blueprint", 
    tag: "Days 1–7",
    icon: Terminal,
    desc: "We deconstruct user journeys, formulate database entity relationship diagrams (ERD), and blueprint API microservices to eliminate technical debt before writing a single line of code.",
    points: ["Entity Relationship Modeling", "API Microservice Specifications", "Interactive UI/UX Prototypes"],
    color: "from-[#7C3AED] to-[#FF007A]",
    accent: "#A855F7"
  },
  { 
    step: "02", 
    title: "Modular Full-Stack Velocity Sprints", 
    tag: "Days 8–21",
    icon: Code2,
    desc: "Our senior developers build in parallel using Next.js 16 Server Components, React 19, TypeScript, and modern database layers with continuous staging URLs pushed to your private Slack.",
    points: ["100% TypeScript & Tailwind v4", "Secure GraphQL / REST Endpoints", "Daily Live Staging Deployments"],
    color: "from-[#FF007A] to-[#00DFD8]",
    accent: "#00DFD8"
  },
  { 
    step: "03", 
    title: "Automated QA & Sub-Second Tuning", 
    tag: "Days 22–28",
    icon: Gauge,
    desc: "We perform automated end-to-end regression testing, security vulnerability scans, and sub-second Core Web Vitals optimization to guarantee 100/100 Lighthouse performance.",
    points: ["Sub-0.4s Global LCP Optimization", "Automated E2E Playwright Tests", "SOC-2 & Auth Penetration Audit"],
    color: "from-[#00DFD8] to-[#7C3AED]",
    accent: "#38BDF8"
  },
  { 
    step: "04", 
    title: "Global Edge Launch & 100% IP Handover", 
    tag: "Days 29–35",
    icon: ShieldCheck,
    desc: "We launch your platform globally across distributed edge CDN nodes with 99.98% uptime SLA, configure live observability telemetry, and unconditionally transfer full Git repositories.",
    points: ["Cloudflare & Vercel Edge CDN Setup", "100% Full IP & Source Handover", "Post-Launch Telemetry & SLA"],
    color: "from-[#F59E0B] to-[#10B981]",
    accent: "#10B981"
  },
];

export default function Methodology() {
  return (
    <section className="py-16 px-6 relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-[#A855F7] text-xs font-black uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>The Velocity Lifecycle</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6">
            Four Pillars of Our <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF007A] via-[#7C3AED] to-[#00DFD8]">
              Engineering Discipline.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/60 font-sans">
            Rigorous software engineering standards combined with rapid milestone velocity.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blocks.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-[2.5rem] bg-gradient-to-b from-[#120529] via-[#090217] to-[#04000b] border border-white/10 hover:border-[#7C3AED]/60 transition-all duration-300 backdrop-blur-2xl flex flex-col justify-between group shadow-xl hover:shadow-[0_20px_45px_rgba(124,58,237,0.2)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#7C3AED] group-hover:shadow-glow-purple transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#00DFD8]">
                      {b.tag}
                    </span>
                  </div>

                  <div className="text-3xl font-black text-white/20 mb-2 group-hover:text-[#A855F7] transition-colors">
                    {b.step}
                  </div>

                  <h3 className="text-xl font-black text-white mb-3 group-hover:text-[#00DFD8] transition-colors leading-snug">
                    {b.title}
                  </h3>

                  <p className="text-sm text-white/60 leading-relaxed font-sans mb-6">
                    {b.desc}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-white/5">
                  {b.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs text-white/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{pt}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

