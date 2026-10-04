"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Cahrz",
    subtitle: "User Growth",
    category: "MOBILE APP",
    image: "/cahrz.png",
    stat: "+150%",
    slug: "cahrz",
    glowColor: "bg-cyan-500/10 group-hover:bg-cyan-500/30",
    borderColor: "hover:border-cyan-500/50",
    shadowColor: "hover:shadow-[0_0_30px_rgba(6,182,212,0.35)]",
    statColor: "text-cyan-400 drop-shadow-[0_0_12px_rgba(6,182,212,0.6)]",
    tagColor: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400",
  },
  {
    title: "Shaco Films",
    subtitle: "Engagement",
    category: "VIDEO PRODUCTION",
    image: "/Shucae.png",
    stat: "+180%",
    slug: "shucae-films",
    glowColor: "bg-pink-500/10 group-hover:bg-pink-500/30",
    borderColor: "hover:border-pink-500/50",
    shadowColor: "hover:shadow-[0_0_30px_rgba(236,72,153,0.35)]",
    statColor: "text-pink-400 drop-shadow-[0_0_12px_rgba(236,72,153,0.6)]",
    tagColor: "bg-pink-500/10 border-pink-500/30 text-pink-400",
  },
  {
    title: "Aust Gov Services",
    subtitle: "Leads Generated",
    category: "E-GOVERNMENT",
    image: "/Screenshot-2026-02-09-040716.png",
    stat: "+220%",
    slug: "ausloan",
    glowColor: "bg-purple-500/10 group-hover:bg-purple-500/30",
    borderColor: "hover:border-purple-500/50",
    shadowColor: "hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]",
    statColor: "text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.6)]",
    tagColor: "bg-purple-500/10 border-purple-500/30 text-purple-400",
  },
  {
    title: "Scisor Wois",
    subtitle: "Sales Increase",
    category: "E-COMMERCE",
    image: "/scissor.png",
    stat: "+110%",
    slug: "scissor-wala",
    glowColor: "bg-blue-500/10 group-hover:bg-blue-500/30",
    borderColor: "hover:border-blue-500/50",
    shadowColor: "hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]",
    statColor: "text-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]",
    tagColor: "bg-blue-500/10 border-blue-500/30 text-blue-400",
  },
  {
    title: "Mergan Newsline",
    subtitle: "Traffic Growth",
    category: "MEDIA PORTAL",
    image: "/pnl.png",
    stat: "+200%",
    slug: "punjab-newsline",
    glowColor: "bg-amber-500/10 group-hover:bg-amber-500/30",
    borderColor: "hover:border-amber-500/50",
    shadowColor: "hover:shadow-[0_0_30px_rgba(245,158,11,0.35)]",
    statColor: "text-amber-400 drop-shadow-[0_0_12px_rgba(245,158,11,0.6)]",
    tagColor: "bg-amber-500/10 border-amber-500/30 text-amber-400",
  },
  {
    title: "Piorama & Tasphira",
    subtitle: "Conversion Rate",
    category: "E-COMMERCE",
    image: "/Screenshot-2026-02-07-184834.png",
    stat: "+180%",
    slug: "brisbane-taxation",
    glowColor: "bg-emerald-500/10 group-hover:bg-emerald-500/30",
    borderColor: "hover:border-emerald-500/50",
    shadowColor: "hover:shadow-[0_0_30px_rgba(16,185,129,0.35)]",
    statColor: "text-emerald-400 drop-shadow-[0_0_12px_rgba(16,185,129,0.6)]",
    tagColor: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
  },
];

interface OurWorkProps {
  initialProjects?: any[];
}

export default function OurWork({ initialProjects }: OurWorkProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const displayProjects = (initialProjects && initialProjects.length > 0)
    ? initialProjects.map((p, idx) => ({
        title: p.title,
        subtitle: p.subtitle || p.category || "Case Study",
        category: (p.filterCategory || p.category || "PROJECT").toUpperCase(),
        image: p.image || "/cahrz.png",
        stat: p.metricHighlight || p.stat || "+100%",
        slug: p.slug,
        glowColor: idx % 3 === 0 ? "bg-cyan-500/10 group-hover:bg-cyan-500/30" : idx % 3 === 1 ? "bg-pink-500/10 group-hover:bg-pink-500/30" : "bg-purple-500/10 group-hover:bg-purple-500/30",
        borderColor: idx % 3 === 0 ? "hover:border-cyan-500/50" : idx % 3 === 1 ? "hover:border-pink-500/50" : "hover:border-purple-500/50",
        shadowColor: idx % 3 === 0 ? "hover:shadow-[0_0_30px_rgba(6,182,212,0.35)]" : idx % 3 === 1 ? "hover:shadow-[0_0_30px_rgba(236,72,153,0.35)]" : "hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]",
        statColor: idx % 3 === 0 ? "text-cyan-400 drop-shadow-[0_0_12px_rgba(6,182,212,0.6)]" : idx % 3 === 1 ? "text-pink-400 drop-shadow-[0_0_12px_rgba(236,72,153,0.6)]" : "text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.6)]",
        tagColor: idx % 3 === 0 ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400" : idx % 3 === 1 ? "bg-pink-500/10 border-pink-500/30 text-pink-400" : "bg-purple-500/10 border-purple-500/30 text-purple-400",
      }))
    : projects;

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-24 px-6 relative z-10 w-full bg-brand-bg overflow-hidden" id="work">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-12">
          {/* Header left */}
          <div className="lg:col-span-8 text-left">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none text-white mb-6">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF007A] to-[#7C3AED]">Work.</span> <br />
              Real Results.
            </h2>
            <p className="text-lg text-white/50 max-w-sm leading-relaxed">
              Brands we've helped grow with strategy, creativity & performance.
            </p>
          </div>

          {/* Slider controls right */}
          <div className="lg:col-span-4 flex items-center justify-between lg:justify-end gap-4 w-full">
            <Link href="/work" className="px-6 py-3.5 border border-white/10 hover:border-white/30 text-white font-bold rounded-full text-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5 shrink-0">
              <span>View All Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            
            <div className="flex gap-2">
              <button 
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full border border-white/10 bg-[#0e0524]/40 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 transition-all cursor-pointer"
                aria-label="Previous Project"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full border border-white/10 bg-[#0e0524]/40 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 transition-all cursor-pointer"
                aria-label="Next Project"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Slider */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-8 pt-4 snap-x snap-mandatory scrollbar-none"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {displayProjects.map((project, i) => (
            <Link
              key={i}
              href={`/case-study/${project.slug}`}
              className={`flex-shrink-0 w-[260px] sm:w-[300px] h-[410px] rounded-[2rem] bg-[#0c051a]/40 border border-white/5 relative overflow-hidden group snap-start block transition-all duration-500 hover:scale-[1.03] hover:z-20 ${project.borderColor} ${project.shadowColor}`}
            >
              {/* Dynamic Soft Glowing background blur orb inside card */}
              <div className={`absolute -bottom-16 -right-16 w-44 h-44 rounded-full blur-[60px] transition-colors duration-500 pointer-events-none ${project.glowColor}`} />
              <div className={`absolute -top-16 -left-16 w-32 h-32 rounded-full blur-[50px] bg-white/[0.01] group-hover:bg-white/[0.04] transition-colors duration-500 pointer-events-none`} />

              {/* Faint Grid Accent in Card Background */}
              <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] group-hover:opacity-[0.06] transition-opacity pointer-events-none" />

              {/* Diagonal Light Sweep Reflection Hover Effect */}
              <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent -translate-x-full group-hover:translate-x-[60%] transition-transform duration-1000 ease-out pointer-events-none z-10" />

              {/* Background Project Image */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 260px, 300px"
                  className="object-cover opacity-25 group-hover:opacity-45 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050011] via-[#050011]/30 to-black/30" />
              </div>

              {/* Card Header Tag */}
              <div className="absolute top-6 left-6 z-10">
                <span className={`px-3 py-1 rounded-lg border text-xs font-black tracking-widest uppercase transition-all duration-300 ${project.tagColor}`}>
                  {project.category}
                </span>
              </div>

              {/* View Project Arrow Hover Icon */}
              <div className="absolute top-6 right-6 z-10 w-9 h-9 rounded-xl bg-[#0e0524]/80 border border-white/5 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:bg-[#7C3AED] group-hover:scale-105 transition-all duration-300">
                <ArrowUpRight className="w-4 h-4" />
              </div>

              {/* Card Footer Content */}
              <div className="absolute bottom-6 left-6 right-6 z-10 text-left">
                {/* Stats Tag with custom color and glow */}
                <div className={`text-4xl font-black mb-2 transition-all duration-300 ${project.statColor}`}>
                  {project.stat}
                </div>
                
                <h3 className="text-xl font-black text-white leading-tight group-hover:text-white/95 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-white/40 mt-1.5 font-bold font-sans">
                  {project.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
