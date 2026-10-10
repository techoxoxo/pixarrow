import { caseStudies } from "@/data/caseStudies";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Sparkles, Zap, ShieldCheck, ExternalLink, ChevronRight, CheckCircle2, Globe, Cpu, Layers } from "lucide-react";
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
    project = await Project.findOne({ slug }).lean();
  } catch {}

  if (!project) {
    project = caseStudies.find((s) => s.slug === slug);
  }

  if (!project) return { title: "Case Study Not Found | Pixarrow" };

  const canonicalUrl = `https://pixarrow.com/case-study/${slug}`;
  const brandTitle = project.title;
  const categoryTitle = project.category || "Web & Mobile Engineering";
  
  const title = project.metaTitle || `${brandTitle} Case Study | ${categoryTitle} Architecture & Development — Pixarrow`;
  const description = project.metaDescription || `Explore the official ${brandTitle} case study by Pixarrow. Engineered with ${project.techStack?.slice(0, 4).join(', ') || 'Next.js, TypeScript and Cloud Edge'}, achieving ${project.metricHighlight || '+100% Growth'}.`;

  const keywords = Array.from(new Set([
    brandTitle,
    `${brandTitle} case study`,
    `${brandTitle} website`,
    `${brandTitle} app`,
    `${brandTitle} software development`,
    `${brandTitle} tech stack`,
    categoryTitle,
    ...(project.techStack || []),
    ...(project.keywords || []),
    "Pixarrow case study",
    "Next.js web development portfolio",
    "software engineering case study",
    "custom web applications"
  ]));

  const ogImages = project.image 
    ? [{ url: project.image, width: 1200, height: 630, alt: `${brandTitle} Case Study — Pixarrow` }] 
    : [{ url: "/og-image.png", width: 1200, height: 630, alt: "Pixarrow Portfolio" }];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "article",
      siteName: "Pixarrow Engineering & Design",
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImages.map(i => i.url),
      creator: "@wearepixarrow",
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

  const canonicalUrl = `https://pixarrow.com/case-study/${slug}`;
  const pageTitle = project.metaTitle || `${project.title} Case Study | ${project.category} Architecture — Pixarrow`;
  const pageDesc = project.metaDescription || project.fullDescription || project.description;

  // Deep Google Multi-Entity Schema Graph
  const richSchemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": canonicalUrl,
        "url": canonicalUrl,
        "name": pageTitle,
        "description": pageDesc,
        "breadcrumb": {
          "@id": `${canonicalUrl}#breadcrumb`
        },
        "inLanguage": "en-US",
        "potentialAction": [
          {
            "@type": "ReadAction",
            "target": [canonicalUrl]
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://pixarrow.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Selected Work & Case Studies",
            "item": "https://pixarrow.com/work"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": project.title,
            "item": canonicalUrl
          }
        ]
      },
      {
        "@type": "Article",
        "@id": `${canonicalUrl}#article`,
        "headline": `${project.title} Case Study — ${project.category}`,
        "description": pageDesc,
        "image": project.image || "https://pixarrow.com/og-image.png",
        "datePublished": project.createdAt || "2026-01-01T00:00:00.000Z",
        "dateModified": project.updatedAt || project.createdAt || "2026-01-01T00:00:00.000Z",
        "author": {
          "@type": "Organization",
          "name": "Pixarrow",
          "url": "https://pixarrow.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Pixarrow",
          "url": "https://pixarrow.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://pixarrow.com/logo.png"
          }
        },
        "about": {
          "@type": "Organization",
          "name": project.title,
          "url": project.liveUrl || undefined
        },
        "mainEntityOfPage": canonicalUrl
      },
      {
        "@type": "SoftwareApplication",
        "name": project.title,
        "applicationCategory": project.category || "BusinessApplication",
        "operatingSystem": "Web, iOS, Android, Cloud",
        "image": project.image || "https://pixarrow.com/og-image.png",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "author": {
          "@type": "Organization",
          "name": "Pixarrow",
          "url": "https://pixarrow.com"
        }
      }
    ]
  };

  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 min-h-screen bg-[#070114] text-white relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(richSchemaGraph) }}
      />
      {/* Ambient Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] bg-[#7C3AED]/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50vw] h-[50vw] bg-[#FF007A]/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[60%] left-[20%] w-[40vw] h-[40vw] bg-[#00DFD8]/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Cyber Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-grid-pattern z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-semibold text-white/50 mb-6 sm:mb-8 overflow-x-auto whitespace-nowrap pb-1">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/30 shrink-0" />
          <Link href="/work" className="hover:text-white transition-colors">Selected Work</Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/30 shrink-0" />
          <span className="text-[#00DFD8]">{project.title}</span>
        </div>
        
        {/* Main Case Study Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-14 sm:mb-20">
          
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2.5 mb-4 sm:mb-6">
              <span className="px-3.5 py-1.5 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/40 text-[#C084FC] text-xs font-black uppercase tracking-wider shadow-[0_0_20px_rgba(124,58,237,0.3)] backdrop-blur-xl">
                {project.category}
              </span>
              <span className="text-white/60 text-xs font-bold uppercase tracking-widest px-3 py-1 bg-white/5 rounded-full border border-white/10">
                {project.year || "2026"}
              </span>
              {project.metricHighlight && (
                <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                  <Zap className="w-3.5 h-3.5" />
                  {project.metricHighlight}
                </span>
              )}
            </div>

            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black tracking-tight mb-4 sm:mb-6 leading-[1.08] sm:leading-[1.04] text-white">
              {project.title}
            </h1>
            
            {project.subtitle && (
              <p className="text-base sm:text-xl text-[#00DFD8] font-bold mb-4 sm:mb-6">
                {project.subtitle}
              </p>
            )}

            <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mb-6 sm:mb-8 font-normal">
              {project.fullDescription || project.description}
            </p>

            {/* Action Buttons: Live Website & CTA */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-[#00DFD8] to-[#007CF0] text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-lg"
                >
                  <Globe className="w-4 h-4" />
                  <span>Visit Live {project.title}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              <Link
                href="/book"
                className="px-6 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#FF007A] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-glow-purple flex items-center gap-2"
              >
                <span>Build Similar Platform</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Tech Stack Tags */}
            {project.techStack && project.techStack.length > 0 && (
              <div className="space-y-2">
                <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                  Architecture &amp; Core Technologies
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.techStack.map((tech: string) => (
                    <span key={tech} className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-semibold text-white/80">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Right Column: Verified Outcome Stats */}
          <div className="lg:col-span-5 w-full">
            {project.stats && project.stats.length > 0 && (
              <div className="p-5 sm:p-7 rounded-3xl bg-[#0e0524]/90 border border-white/15 backdrop-blur-2xl shadow-2xl space-y-4">
                <div className="text-xs font-black uppercase tracking-widest text-purple-300 flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Verified Project Outcomes</span>
                </div>

                <div className="grid grid-cols-1 gap-2.5">
                  {project.stats.map((stat: any, i: number) => (
                    <div key={i} className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                      <span className="text-xs font-semibold text-white/70">{stat.label}</span>
                      <span className="text-lg sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00DFD8] via-white to-[#FF007A]">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-[11px] text-white/50 leading-relaxed font-mono">
                  Delivered with 100% full IP transfer, sub-second LCP optimization, and dedicated architecture support.
                </div>
              </div>
            )}
          </div>

        </div>
        
        {/* Full-Width Showcase Canvas Banner */}
        <div className="relative aspect-[16/9] md:aspect-[21/9] w-full rounded-2xl sm:rounded-[2.5rem] overflow-hidden border border-white/10 mb-20 bg-[#080214] shadow-2xl">
          {project.image ? (
            <Image 
              src={project.image} 
              alt={`${project.title} Web & Mobile Application Showcase`} 
              fill
              className="object-cover" 
              priority
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white/30 font-bold">
              {project.title}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Bottom Conversion Strip */}
        <div className="flex flex-col md:flex-row justify-between items-center py-16 sm:py-20 border-t border-white/10 gap-8 sm:gap-12 text-center md:text-left">
           <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-[#A855F7] text-xs font-black uppercase tracking-widest mb-3">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Next-Gen Engineering Pod</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-2">
                Ready to scale your digital presence?
              </h2>
              <p className="text-white/60 text-base sm:text-lg font-sans max-w-xl">
                Book a 30-minute architecture session with our Lead Engineer.
              </p>
           </div>
           
           <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
             <Link 
               href="/book" 
               className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#7C3AED] to-[#FF007A] text-white rounded-full font-bold text-base transition-transform hover:scale-105 active:scale-95 shadow-glow-purple"
             >
               <span>Schedule Strategy Call</span>
               <ArrowRight className="w-4 h-4" />
             </Link>
             <Link 
               href="/work" 
               className="flex items-center justify-center gap-2 px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-bold text-sm text-white transition-all"
             >
               Explore All Projects
             </Link>
           </div>
        </div>

      </div>
    </div>
  );
}
