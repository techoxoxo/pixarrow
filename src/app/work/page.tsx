import { caseStudies } from "@/data/caseStudies";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import WorkClientWrapper from "@/components/WorkClientWrapper";
import { generateDynamicMetadata } from "@/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return await generateDynamicMetadata("/work");
}

export default function WorkPage() {
  return (
    <WorkClientWrapper>
      {/* Horizontal Ghost Title - CLIPPED TO PREVENT OVERFLOW */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <h1 className="text-[20vw] font-black tracking-tighter opacity-[0.03] fixed top-1/2 left-0 -translate-y-1/2 whitespace-nowrap big-title uppercase">
              SELECTED PROJECTS 2026 EDITION
          </h1>
      </div>

      <div className="relative z-10 w-full overflow-x-hidden">
        {/* Intro */}
        <section className="min-h-screen flex flex-col justify-center px-6">
            <div className="max-w-7xl mx-auto w-full">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
                   <span className="w-2 h-2 rounded-full bg-brand-purple animate-pulse" />
                   <span className="text-xs font-black tracking-widest text-white/40 uppercase">Showcase</span>
                </div>
                <h1 className="text-7xl md:text-[8rem] font-black tracking-tighter mb-10 leading-[0.85] italic">
                    Engineering <br /> <span className="text-gradient underline decoration-brand-purple/20">Excellence.</span>
                </h1>
                <p className="text-2xl text-white/40 max-w-2xl font-medium leading-relaxed">
                    Explore a curated list of high-performance digital systems. Each project is a testament to our engineering-first philosophy.
                </p>
            </div>
        </section>

        {/* Project List - LIGHT THEME */}
        <div className="bg-brand-soft py-40 px-6 overflow-x-hidden">
            <div className="space-y-60 max-w-7xl mx-auto overflow-x-hidden">
                {caseStudies.map((project, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <div key={project.slug} className="project-item w-full overflow-x-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                                
                                {/* Info */}
                                <div className={`lg:col-span-5 space-y-6 project-info w-full px-4 overflow-x-hidden ${isEven ? 'lg:order-1 text-left' : 'lg:order-2 text-right'}`}>
                                    <div className={`text-brand-purple font-black text-[10px] flex items-center gap-4 ${isEven ? 'justify-start' : 'justify-end flex-row-reverse uppercase'}`}>
                                        <div className="flex items-center gap-4">
                                            <span className="opacity-40 tracking-widest uppercase">Phase 0{index + 1}</span>
                                            <div className="h-px w-10 bg-brand-purple/20" />
                                            <span className="tracking-[0.2em] uppercase">{project.category}</span>
                                        </div>
                                    </div>
                                    
                                    <h2 className="text-4xl md:text-[3.5rem] font-black tracking-tight leading-[1] italic text-neutral-900 break-words max-w-full uppercase">
                                        {project.title}
                                    </h2>
                                    
                                    <p className={`text-lg text-neutral-500 leading-relaxed font-medium max-w-md ${isEven ? 'mr-auto' : 'ml-auto'}`}>
                                        {project.description}
                                    </p>

                                    <div className={`flex ${isEven ? 'justify-start' : 'justify-end'}`}>
                                        <Link 
                                            href={`/case-study/${project.slug}`}
                                            className="group/link flex items-center gap-4 py-2 border-b-2 border-brand-purple/20 hover:border-brand-purple transition-all w-fit text-neutral-900"
                                        >
                                            <span className="text-sm font-black uppercase tracking-[0.2em]">Launch Showcase</span>
                                            <ArrowUpRight className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Visual */}
                                <div className={`lg:col-span-7 relative ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                                    <div className="relative aspect-[16/10] bg-white rounded-[3rem] md:rounded-[4rem] overflow-hidden border border-black/5 shadow-2xl group">
                                        <img 
                                            src={project.image} 
                                            alt={project.title} 
                                            className="project-image w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-125 group-hover:scale-105" 
                                        />
                                        <div className="absolute inset-0 bg-brand-purple/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
                                        
                                        <div className={`absolute bottom-6 md:bottom-10 p-6 bg-white/70 backdrop-blur-xl border border-black/5 rounded-3xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-xl z-20 ${isEven ? 'left-6 md:left-10' : 'right-6 md:right-10'}`}>
                                            <div className="text-[10px] font-black tracking-widest text-brand-purple uppercase mb-1">Architecture</div>
                                            <div className="text-lg font-black text-neutral-900">High-Load Optimized</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
      </div>
    </WorkClientWrapper>
  );
}
