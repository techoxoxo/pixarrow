import { caseStudies } from "@/data/caseStudies";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function BentoGrid() {
  return (
    <section className="py-32 px-6 relative z-10" id="work">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center lg:text-left">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-xl text-white/50 max-w-2xl font-sans">
            A collection of premium websites built for bold startups. Scaling digital presence across various verticals.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {caseStudies.map((project, i) => (
            <Link
              key={project.slug}
              href={`/case-study/${project.slug}`}
              className={`backdrop-blur-md bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-end overflow-hidden group relative min-h-[450px] transition-all hover:border-brand-purple/50 ${
                i % 4 === 0 || i % 4 === 3 ? "col-span-12 lg:col-span-8" : "col-span-12 lg:col-span-4"
              }`}
            >
              {/* Background Glow */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-purple/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                 <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/90 via-brand-bg/20 to-transparent" />
              </div>

              <div className="absolute top-10 right-10 w-14 h-14 rounded-[1.5rem] border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-brand-purple group-hover:text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 z-10 backdrop-blur-3xl shadow-glow-purple/20">
                 <ArrowUpRight className="w-7 h-7" />
              </div>
              
              <div className="relative z-10 transform transition-all duration-500 group-hover:-translate-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-[10px] font-black tracking-[0.3em] text-brand-purple uppercase">{project.category}</div>
                  <div className="h-px w-8 bg-brand-purple/30" />
                </div>
                <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-4 font-display leading-none">{project.title}</h3>
                <p className="text-white/40 text-lg leading-relaxed max-w-md font-sans font-medium group-hover:text-white/70 transition-colors">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
