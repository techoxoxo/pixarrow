"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, Clock } from "lucide-react";

const weeks = [
  { 
    week: "01", 
    title: "Discovery & Blueprint", 
    tag: "Days 1–7",
    items: ["Technical Architecture Audit", "ERD & Database Schema Modeling", "Interactive Figma Design System"],
    color: "from-[#7C3AED] to-[#FF007A]"
  },
  { 
    week: "02", 
    title: "Core Infrastructure & DB", 
    tag: "Days 8–14",
    items: ["Next.js 16 Project Scaffold", "Auth & RBAC Permissions Matrix", "Primary PostgreSQL / Mongo Schema"],
    color: "from-[#FF007A] to-[#00DFD8]"
  },
  { 
    week: "03", 
    title: "Feature Engineering Sprint 1", 
    tag: "Days 15–21",
    items: ["High-Fidelity Component Engine", "API Microservices Integration", "Live Private Staging Deployment"],
    color: "from-[#00DFD8] to-[#7C3AED]"
  },
  { 
    week: "04", 
    title: "Feature Engineering Sprint 2", 
    tag: "Days 22–28",
    items: ["Payment & Billing Gateways", "AI Model / Custom Webhooks", "Complex Animation & State Trees"],
    color: "from-[#7C3AED] to-[#FF007A]"
  },
  { 
    week: "05", 
    title: "Automated QA & Sub-0.4s Tuning", 
    tag: "Days 29–35",
    items: ["Automated Playwright E2E Tests", "Lighthouse 100/100 Optimization", "Security & Pen-Testing Audit"],
    color: "from-[#FF007A] to-[#00DFD8]"
  },
  { 
    week: "06", 
    title: "Production Launch & 100% IP", 
    tag: "Days 36–42",
    items: ["Global Edge CDN & DNS Cutover", "100% Full IP & Source Transfer", "Live Monitoring & SLA Retainer"],
    color: "from-[#F59E0B] to-[#10B981]"
  },
];

export default function Timeline() {
  return (
    <section className="py-20 px-6 relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-[#A855F7] text-xs font-black uppercase tracking-widest mb-4">
            <Clock className="w-3.5 h-3.5 text-[#00DFD8]" />
            <span>Sprint Cadence</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6">
            The 6-Week Rapid <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF007A] via-[#7C3AED] to-[#00DFD8]">
              Execution Engine.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/60 font-sans">
            Every week has crystal-clear deliverables and live staging demo URL updates pushed directly to your Slack.
          </p>
        </div>
        
        {/* 6 Week Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {weeks.map((item, i) => (
            <motion.div
              key={item.week}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-[#120529] via-[#090217] to-[#04000b] hover:border-[#7C3AED]/60 relative group overflow-hidden shadow-xl backdrop-blur-2xl transition-all"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-black text-[#00DFD8] bg-[#00DFD8]/10 px-3 py-1 rounded-full border border-[#00DFD8]/20">
                  {item.tag}
                </span>
                <span className="text-4xl font-black text-white/15 group-hover:text-[#A855F7]/30 transition-colors">
                  W{item.week}
                </span>
              </div>

              <h3 className="text-xl font-black mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#00DFD8] transition-all">
                {item.title}
              </h3>

              <ul className="space-y-2.5 pt-4 border-t border-white/5">
                {item.items.map((li, j) => (
                  <li key={j} className="text-white/70 text-xs font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

