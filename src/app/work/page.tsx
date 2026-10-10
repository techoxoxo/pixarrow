import { generateDynamicMetadata, generatePageJsonLd } from "@/lib/seo";
import { Metadata } from "next";
import Link from "next/link";
import { 
  Sparkles, ArrowRight, ShieldCheck, Zap, Calculator, Award, 
  Check, Globe, ShoppingBag, Cpu, ArrowUpRight, TrendingUp, Layers
} from "lucide-react";
import WorkShowcaseGrid from "@/components/WorkShowcaseGrid";
import TrustShowcase from "@/components/TrustShowcase";
import dbConnect from "@/lib/mongodb";
import Project from "@/models/Project";
import { caseStudies } from "@/data/caseStudies";

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return await generateDynamicMetadata("/work");
}

export default async function WorkPage() {
  let dynamicProjects: any[] = [];

  try {
    await dbConnect();
    const dbProjects = await Project.find({ status: 'published' })
      .sort({ order: 1, createdAt: -1 })
      .lean();
    
    if (dbProjects && dbProjects.length > 0) {
      dynamicProjects = JSON.parse(JSON.stringify(dbProjects));
    }
  } catch (error) {
    console.error("Database note in WorkPage:", error);
  }

  // If no dynamic projects in DB yet, fallback to static caseStudies
  const initialProjects = dynamicProjects.length > 0 ? dynamicProjects : caseStudies;

  const jsonLd = generatePageJsonLd({
    title: "Selected Case Studies & Web Engineering Portfolio | Pixarrow",
    description: "Explore our flagship engineering case studies across Next.js 16 portals, React Native apps, high-AOV headless Shopify Plus storefronts, and automated AI systems.",
    url: "https://pixarrow.com/work",
    type: "CollectionPage",
    breadcrumbs: [
      { name: "Home", url: "https://pixarrow.com" },
      { name: "Case Studies & Work", url: "https://pixarrow.com/work" }
    ]
  });

  return (
    <div className="min-h-screen bg-[#070114] text-white pt-24 sm:pt-32 pb-16 sm:pb-24 px-5 sm:px-8 md:px-10 lg:px-12 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Ambient Radial Background Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] bg-[#7C3AED]/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50vw] h-[50vw] bg-[#FF007A]/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[60%] left-[20%] w-[40vw] h-[40vw] bg-[#00DFD8]/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Cyber Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-grid-pattern z-0" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* HERO SECTION: 2-COLUMN FLAGSHIP SHOWCASE LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-24 pt-4 sm:pt-8">
          
          {/* Left Column: Narrative & Stats */}
          <div className="flex flex-col items-start lg:col-span-7">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/40 text-[#C084FC] text-xs font-black uppercase tracking-widest mb-4 sm:mb-6 shadow-[0_0_20px_rgba(124,58,237,0.3)] backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00DFD8] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00DFD8]" />
              </span>
              <span>$45M+ Trackable Revenue Delivered</span>
            </div>

            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4.1rem] font-black tracking-tight leading-[1.08] sm:leading-[1.04] text-white mb-4 sm:mb-6">
              Engineering Masterpieces. <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF007A] via-[#7C3AED] to-[#00DFD8] drop-shadow-[0_0_40px_rgba(124,58,237,0.4)]">
                Measurable Growth.
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-white/80 mb-6 sm:mb-8 max-w-2xl leading-relaxed font-normal">
              Explore our curated portfolio of mission-critical <span className="text-white font-bold">Next.js 16</span> web applications, high-throughput <span className="text-white font-bold">mobile platforms</span>, and conversion engines. Each system is engineered with sub-second speeds, bespoke 60fps motion, and verifiable ROI.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6 sm:mb-8 w-full sm:w-auto">
              <Link
                href="/book"
                className="w-full sm:w-auto px-7 py-3.5 sm:py-4 bg-gradient-to-r from-[#7C3AED] to-[#FF007A] hover:opacity-95 text-white text-sm sm:text-base font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-glow-purple flex items-center justify-center gap-2 text-center"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="/calculator"
                className="w-full sm:w-auto px-6 py-3.5 sm:py-4 bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 hover:border-white/40 text-white text-xs sm:text-base font-bold rounded-full transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 backdrop-blur-xl text-center"
              >
                <Calculator className="w-4 h-4 text-amber-300" />
                <span>Estimate Project Cost</span>
              </Link>
            </div>

            {/* Guarantee Row */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mb-6 sm:mb-8 text-[10px] sm:text-xs text-white/70 font-medium">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <Check className="w-3.5 h-3.5" />
                Signed NDA in 24h
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1.5 text-purple-300 font-semibold">
                <Check className="w-3.5 h-3.5" />
                Signed NDA Protection
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1.5 text-cyan-300 font-semibold">
                <Check className="w-3.5 h-3.5" />
                15-Day Guarantee
              </span>
            </div>

            {/* 4 Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 w-full">
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                <div className="text-lg sm:text-2xl font-black text-white">50+</div>
                <div className="text-[9px] sm:text-[10px] font-bold text-[#00DFD8] uppercase tracking-wider mt-0.5">Shipped Products</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                <div className="text-lg sm:text-2xl font-black text-white">$45M+</div>
                <div className="text-[9px] sm:text-[10px] font-bold text-pink-300 uppercase tracking-wider mt-0.5">Processed Volume</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                <div className="text-lg sm:text-2xl font-black text-white">0.6s</div>
                <div className="text-[9px] sm:text-[10px] font-bold text-cyan-300 uppercase tracking-wider mt-0.5">Avg Global LCP</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                <div className="text-lg sm:text-2xl font-black text-white">98%</div>
                <div className="text-[9px] sm:text-[10px] font-bold text-emerald-400 uppercase tracking-wider mt-0.5">Client Retention</div>
              </div>
            </div>

          </div>

          {/* Right Column: Live Portfolio Spotlight Deck */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#7C3AED]/30 via-[#FF007A]/25 to-[#00DFD8]/20 blur-[75px] rounded-full pointer-events-none" />

            {/* Showcase Chassis */}
            <div className="relative w-full rounded-3xl p-1 sm:p-1.5 bg-gradient-to-b from-white/20 via-white/5 to-white/10 border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.85)] backdrop-blur-3xl overflow-hidden">
              <div className="rounded-2xl bg-[#09021a]/90 p-4 sm:p-6 border border-white/10">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-pink-400 animate-pulse" />
                    <span className="text-[11px] font-mono font-black text-white uppercase tracking-wider">
                      SPOTLIGHT SYSTEMS
                    </span>
                  </div>
                  <span className="text-[9px] font-mono text-cyan-300 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 font-bold">
                    VERIFIED ROI
                  </span>
                </div>

                {/* 3 Active Spotlight Project Cards */}
                <div className="space-y-2.5 sm:space-y-3">
                  
                  <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 transition-all">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs sm:text-sm font-bold text-white">Next.js 16 SaaS Portal</span>
                      <span className="text-[9px] font-mono font-bold text-cyan-300 bg-cyan-500/15 px-2 py-0.5 rounded-full">
                        +240% Speed Lift
                      </span>
                    </div>
                    <p className="text-[11px] text-white/60 leading-relaxed">
                      Edge-rendered React 19 architecture with sub-0.5s worldwide LCP and zero layout shifts.
                    </p>
                  </div>

                  <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 transition-all">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs sm:text-sm font-bold text-white">Headless Shopify Plus</span>
                      <span className="text-[9px] font-mono font-bold text-emerald-300 bg-emerald-500/15 px-2 py-0.5 rounded-full">
                        $1.2M Gross / 30d
                      </span>
                    </div>
                    <p className="text-[11px] text-white/60 leading-relaxed">
                      Bespoke high-AOV conversion funnels with instant checkout integration.
                    </p>
                  </div>

                  <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 transition-all">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs sm:text-sm font-bold text-white">Agentic AI Workflows</span>
                      <span className="text-[9px] font-mono font-bold text-purple-300 bg-purple-500/15 px-2 py-0.5 rounded-full">
                        90% Time Saved
                      </span>
                    </div>
                    <p className="text-[11px] text-white/60 leading-relaxed">
                      Autonomous LLM agent pipeline processing multi-tenant data streams in real time.
                    </p>
                  </div>

                </div>

                {/* Tech Chips */}
                <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-white/[0.05] text-[9px] font-mono text-white/70">Next.js 16</span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.05] text-[9px] font-mono text-white/70">React 19</span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.05] text-[9px] font-mono text-white/70">NestJS</span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.05] text-[9px] font-mono text-white/70">Python AI</span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.05] text-[9px] font-mono text-white/70">Shopify Plus</span>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* WORK SHOWCASE INTERACTIVE GRID */}
        <div className="py-8 sm:py-12 border-t border-white/5">
          <WorkShowcaseGrid initialProjects={initialProjects} />
        </div>

        {/* TRUST & ACCREDITATION STRIP */}
        <div className="my-10 sm:my-16 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10">
          <TrustShowcase />
        </div>

        {/* BOTTOM CTA BANNER */}
        <div className="mt-8 p-6 sm:p-12 md:p-14 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#1b073a] via-[#100324] to-[#0c051a] border border-[#7C3AED]/40 shadow-[0_20px_60px_rgba(124,58,237,0.25)] text-center relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#FF007A]/20 blur-[80px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-3 sm:mb-4">
              Have an Ambitious Project in Mind?
            </h2>
            <p className="text-xs sm:text-base text-white/70 mb-6 sm:mb-8 leading-relaxed">
              Let&apos;s build an unfair market advantage together. Schedule a discovery call with our Lead Architect or calculate your project scope in 2 minutes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Link
                href="/book"
                className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-gradient-to-r from-[#7C3AED] to-[#FF007A] text-white font-bold rounded-full shadow-glow-purple hover:scale-105 active:scale-95 transition-all"
              >
                Schedule Strategy Session
              </Link>
              <Link
                href="/calculator"
                className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-full transition-all"
              >
                Calculate Scope &amp; Cost
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
