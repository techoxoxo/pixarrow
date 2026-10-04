import { caseStudies } from "@/data/caseStudies";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Sparkles, Zap, ShieldCheck } from "lucide-react";
import Image from "next/image";
import dbConnect from "@/lib/mongodb";
import Project from "@/models/Project";
import { Metadata } from "next";

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  let project: any = null;

  try {
    await dbConnect();
    project = await Project.findOne({ slug });
  } catch {}

  if (!project) {
    project = caseStudies.find((s) => s.slug === slug);
  }

  if (!project) return { title: "Case Study Not Found | Pixarrow" };

  return {
    title: `${project.metaTitle || project.title} | Pixarrow Architecture Showcase`,
    description: project.metaDescription || project.description,
    openGraph: {
      title: `${project.title} — Pixarrow Case Study`,
      description: project.description,
      images: [project.image].filter(Boolean),
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  let project: any = null;

  try {
    await dbConnect();
    const dbProject = await Project.findOne({ slug }).lean();
    if (dbProject) {
      project = JSON.parse(JSON.stringify(dbProject));
    }
  } catch (error) {
    console.error("DB error in CaseStudyPage:", error);
  }

  if (!project) {
    project = caseStudies.find((s) => s.slug === slug);
  }

  if (!project) notFound();

  const caseStudyJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": project.title,
    "description": project.fullDescription || project.description,
    "applicationCategory": project.category || "BusinessApplication",
    "operatingSystem": "Web, iOS, Android, Cloud",
    "image": project.image || "https://pixarrow.com/og-image.png",
    "creator": {
      "@type": "Organization",
      "name": "Pixarrow",
      "url": "https://pixarrow.com"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://pixarrow.com/case-study/${slug}`
    }
  };

  return (
    <div className="pt-32 min-h-screen bg-brand-bg text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-6">
        <Link 
          href="/work" 
          className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12 group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-brand-purple/20 border border-brand-purple/30 text-purple-300 text-xs font-black uppercase tracking-wider">
                {project.category}
              </span>
              <span className="text-white/40 text-xs font-bold uppercase tracking-widest">
                {project.year || "2026"}
              </span>
              {project.metricHighlight && (
                <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-black uppercase tracking-wider flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  {project.metricHighlight}
                </span>
              )}
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-tight text-white">
              {project.title}
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/60 leading-relaxed font-sans max-w-xl">
              {project.fullDescription || project.description}
            </p>

            {project.techStack && project.techStack.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-8">
                {project.techStack.map((tech: string) => (
                  <span key={tech} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-white/70">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
          
          {project.stats && project.stats.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-white/10 pt-10">
              {project.stats.map((stat: any, i: number) => (
                <div key={i} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="text-2xl sm:text-3xl font-black tracking-tight mb-1 text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-purple-200">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold tracking-widest text-white/40 uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="relative aspect-video w-full rounded-[2.5rem] overflow-hidden border border-white/10 mb-32 bg-[#080214]">
          {project.image ? (
            <Image 
              src={project.image} 
              alt={project.title} 
              fill
              className="object-cover" 
              priority
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white/30 font-bold">
              {project.title}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/60 via-transparent to-transparent" />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center py-20 border-t border-white/10 gap-12">
           <div className="text-center md:text-left">
              <h2 className="text-4xl font-black tracking-tighter mb-4">Ready to architect your product?</h2>
              <p className="text-white/50 text-xl font-sans">Book a 30-minute discovery session with our Lead Architect.</p>
           </div>
           
           <div className="flex flex-col sm:flex-row gap-4">
             <Link 
               href="/book" 
               className="group relative flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-[#7C3AED] to-[#FF007A] text-white rounded-full font-bold text-lg overflow-hidden transition-transform hover:scale-105 active:scale-95 duration-300 shadow-glow-purple"
             >
               <span className="relative z-10">Start Your Project</span>
               <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
             </Link>
             <Link 
               href="/work" 
               className="flex items-center gap-3 px-8 py-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-bold text-lg text-white transition-all"
             >
               View All Projects
             </Link>
           </div>
        </div>
      </div>
    </div>
  );
}
