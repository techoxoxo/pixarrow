import { caseStudies } from "@/data/caseStudies";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const project = caseStudies.find((s) => s.slug === slug);

  if (!project) notFound();

  return (
    <div className="pt-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <Link href="/work" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Work
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-20">
          <div>
            <div className="text-[#00F2FF] font-bold tracking-widest text-xs uppercase mb-4">{project.category} — {project.year}</div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-tight">
              {project.title}
            </h1>
            <p className="text-2xl text-white/50 leading-relaxed font-sans max-w-xl">
              {project.fullDescription}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-white/10 pt-10">
            {project.stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-black tracking-tight mb-1">{stat.value}</div>
                <div className="text-xs font-semibold tracking-widest text-white/30 uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative aspect-video w-full rounded-[2.5rem] overflow-hidden border border-white/10 mb-32">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/50 to-transparent" />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center py-20 border-t border-white/10 gap-12">
           <div className="text-center md:text-left">
              <h2 className="text-4xl font-black tracking-tighter mb-4">Wanna see more?</h2>
              <p className="text-white/50 text-xl font-sans">Check out another project built for bold founders.</p>
           </div>
           
           <Link href={`/case-study/${caseStudies[(caseStudies.indexOf(project) + 1) % caseStudies.length].slug}`} className="group relative flex items-center gap-4 px-10 py-5 bg-white text-brand-bg rounded-full font-bold text-xl overflow-hidden transition-transform hover:scale-105 active:scale-95 duration-300">
             <span className="relative z-10">Next Project</span>
             <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
           </Link>
        </div>
      </div>
    </div>
  );
}
