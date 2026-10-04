"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles, Layers, ShieldCheck, Zap, TrendingUp, CheckCircle2 } from "lucide-react";
import { caseStudies, CaseStudy } from "@/data/caseStudies";

const categories = [
  { id: "All", label: "All Projects" },
  { id: "Mobile", label: "Mobile Apps" },
  { id: "FinTech", label: "FinTech & Portals" },
  { id: "eCommerce", label: "eCommerce & D2C" },
  { id: "Media", label: "Media & OTT" },
];

interface WorkShowcaseGridProps {
  initialProjects?: any[];
}

export default function WorkShowcaseGrid({ initialProjects }: WorkShowcaseGridProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const projectList = (initialProjects && initialProjects.length > 0)
    ? initialProjects
    : caseStudies;

  const filteredProjects = activeFilter === "All"
    ? projectList
    : projectList.filter((p) => p.filterCategory === activeFilter);

  return (
    <div className="space-y-12">
      {/* FILTER PILLS */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 pb-6">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeFilter === cat.id
                ? "bg-[#7C3AED] text-white shadow-glow-purple border border-transparent"
                : "bg-white/[0.03] hover:bg-white/[0.08] text-white/60 hover:text-white border border-white/10"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* SHOWCASE CARDS GRID */}
      <motion.div 
        layout 
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10"
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.slug}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group flex flex-col justify-between rounded-3xl bg-gradient-to-b from-white/[0.04] via-white/[0.02] to-white/[0.01] border border-white/10 hover:border-[#7C3AED]/60 shadow-2xl backdrop-blur-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_rgba(124,58,237,0.2)]"
            >
              <div>
                {/* Visual Image Banner with Glowing Frame */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/10 bg-[#070114]">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-all duration-700 brightness-95 group-hover:brightness-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-brand-purple/10 text-white/40 font-bold">
                      {project.title}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0217] via-transparent to-black/30" />

                  {/* Top Badges Overlay */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
                    <span className="px-3 py-1 rounded-full bg-[#0c051a]/85 backdrop-blur-md border border-white/15 text-[10px] font-black uppercase tracking-wider text-purple-300">
                      {project.category}
                    </span>

                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/40 text-[11px] font-black uppercase tracking-wider text-emerald-300 flex items-center gap-1 shadow-md">
                      <Zap className="w-3 h-3 text-emerald-400" />
                      {project.metricHighlight || "+100% Growth"}
                    </span>
                  </div>

                  {/* Bottom Image Subtitle Tag */}
                  <div className="absolute bottom-4 left-4 z-10 pointer-events-none">
                    <span className="text-[11px] font-bold text-white/80 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
                      Phase 0{index + 1} • {project.year || "2026"} Release
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-purple-200 group-hover:to-[#00DFD8] transition-all">
                        {project.title}
                      </h3>
                      <p className="text-xs font-bold text-[#00DFD8] uppercase tracking-wider mt-1">
                        {project.subtitle || project.category}
                      </p>
                    </div>

                    <Link
                      href={`/case-study/${project.slug}`}
                      className="w-10 h-10 rounded-2xl bg-white/5 hover:bg-[#7C3AED] border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-all shadow-md"
                    >
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </Link>
                  </div>

                  <p className="text-sm text-white/70 leading-relaxed font-normal mt-4 mb-6">
                    {project.description}
                  </p>

                  {/* 3-Column Performance Stats Grid */}
                  {project.stats && project.stats.length > 0 && (
                    <div className="grid grid-cols-3 gap-2.5 mb-6">
                      {project.stats.map((st: any, i: number) => (
                        <div key={i} className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 text-center">
                          <div className="text-sm sm:text-base font-black text-white">{st.value}</div>
                          <div className="text-[10px] text-white/40 uppercase font-semibold mt-0.5">{st.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack Chips */}
                  {project.techStack && project.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                      {project.techStack.map((tech: string) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/5 text-[11px] text-white/60 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
                <Link
                  href={`/case-study/${project.slug}`}
                  className="w-full py-3 px-4 rounded-xl bg-white/[0.04] hover:bg-[#7C3AED] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all border border-white/5 hover:border-[#7C3AED]"
                >
                  <span>Explore Architectural Breakdown</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
