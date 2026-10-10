"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface WorkItem {
  title: string;
  subtitle: string;
  category: string;
  image: string;
  stat: string;
  slug: string;
}

const projects: WorkItem[] = [
  { title: "Cahrz", subtitle: "On-demand vehicle care & detailing app", category: "MOBILE APP", image: "/cahrz.png", stat: "+150% Bookings", slug: "cahrz" },
  { title: "Shucae Films", subtitle: "High-throughput OTT video streaming platform", category: "MEDIA", image: "/Shucae.png", stat: "<1.2s CDN Latency", slug: "shucae-films" },
  { title: "AusLoan Services", subtitle: "Asset finance & lender aggregator platform", category: "FINTECH", image: "/Screenshot-2026-02-09-040716.png", stat: "$18M+ Loan Volume", slug: "ausloan" },
  { title: "Scissor Wala", subtitle: "High-AOV headless eCommerce storefront", category: "E-COMMERCE", image: "/scissor.png", stat: "+110% Revenue", slug: "scissor-wala" },
  { title: "Punjab Newsline", subtitle: "High-concurrency media portal", category: "MEDIA", image: "/pnl.png", stat: "2.4M+ Monthly Readers", slug: "punjab-newsline" },
  { title: "Brisbane Business & Taxation", subtitle: "Wealth & advisory client portal", category: "FINTECH", image: "/Screenshot-2026-02-07-184834.png", stat: "$45M+ Assets Advised", slug: "brisbane-taxation" },
];

interface OurWorkProps {
  initialProjects?: any[];
}

export default function OurWork({ initialProjects }: OurWorkProps) {
  const base: WorkItem[] =
    initialProjects && initialProjects.length > 0
      ? initialProjects.map((p) => ({
          title: p.title,
          subtitle: p.subtitle || p.category || "Case Study",
          category: (p.filterCategory || p.category || "PROJECT").toUpperCase(),
          image: p.image || "/cahrz.png",
          stat: p.metricHighlight || p.stat || "",
          slug: p.slug,
        }))
      : projects;

  // Make sure one copy is wide enough to fill large screens, then render it twice for a seamless loop.
  const copies = Math.max(1, Math.ceil(6 / base.length));
  const loop: WorkItem[] = Array.from({ length: copies }).flatMap(() => base);
  const duration = Math.max(30, loop.length * 7);

  return (
    <section className="py-20 sm:py-24 relative z-10 w-full bg-brand-bg overflow-hidden" id="work">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none text-white mb-5">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF007A] to-[#7C3AED]">Work.</span>
              <br />
              Real Results.
            </h2>
            <p className="text-lg text-white/50 max-w-md leading-relaxed">
              Brands we&apos;ve helped grow with strategy, creativity &amp; performance.
            </p>
          </div>
          <Link
            href="/work"
            className="self-start md:self-auto px-6 py-3.5 border border-white/10 hover:border-white/30 text-white font-bold rounded-full text-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5 shrink-0"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Continuous auto-scrolling marquee (pauses on hover) */}
      <div
        className="work-marquee relative w-full"
        style={{
          maskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div className="work-track flex w-max" style={{ animationDuration: `${duration}s` }}>
          {[0, 1].map((copy) => (
            <div key={copy} className="flex gap-6 pr-6" aria-hidden={copy === 1}>
              {loop.map((project, i) => (
                <Link
                  key={`${copy}-${i}`}
                  href={`/case-study/${project.slug}`}
                  tabIndex={copy === 1 ? -1 : 0}
                  className="group relative flex-shrink-0 w-[290px] sm:w-[330px] rounded-[1.75rem] p-3 bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-[#7C3AED]/50 hover:shadow-[0_20px_50px_-15px_rgba(124,58,237,0.45)]"
                >
                  {/* Image */}
                  <div className="relative h-[190px] sm:h-[210px] w-full overflow-hidden rounded-2xl bg-[#0e0524]">
                    <Image
                      src={project.image}
                      alt={`${project.title} case study`}
                      fill
                      sizes="330px"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050011]/60 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#050011]/70 backdrop-blur-md border border-white/15 text-[10px] font-bold tracking-widest uppercase text-white/90">
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="px-2 pt-4 pb-2 text-left">
                    <h3 className="text-lg font-black text-white leading-tight truncate">{project.title}</h3>
                    <p className="text-sm text-white/50 mt-1 line-clamp-2 min-h-[2.5rem]">{project.subtitle}</p>

                    <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Result</div>
                        <div className="text-base font-black text-[#00DFD8] truncate">{project.stat || "View case study"}</div>
                      </div>
                      <span className="shrink-0 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-[#7C3AED] group-hover:border-[#7C3AED]">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .work-track { animation: work-scroll linear infinite; will-change: transform; }
        .work-marquee:hover .work-track { animation-play-state: paused; }
        @keyframes work-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) {
          .work-track { animation: none; }
          .work-marquee { overflow-x: auto; }
        }
      `}</style>
    </section>
  );
}
