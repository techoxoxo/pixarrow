import { generateDynamicMetadata } from "@/lib/seo";
import { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, Zap, Calculator, Award } from "lucide-react";
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

  return (
    <div className="min-h-screen bg-brand-bg text-white pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Ambient Radial Background Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] bg-[#7C3AED]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50vw] h-[50vw] bg-[#FF007A]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[60%] left-[20%] w-[40vw] h-[40vw] bg-[#00DFD8]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HERO SECTION */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-[#A855F7] text-xs font-black uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Selected Projects & Architecture (2026 Edition)</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight text-white leading-[1.05] mb-8">
            Engineering Excellence. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF007A] via-[#7C3AED] to-[#00DFD8] drop-shadow-[0_0_30px_rgba(124,58,237,0.3)]">
              Measurable Growth.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto mb-10">
            Explore our curated portfolio of mission-critical web applications, mobile platforms, and high-converting growth systems. Each project is engineered with sub-second speeds, bespoke motion, and verifiable ROI.
          </p>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto p-6 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl mb-10">
            <div className="text-center p-2">
              <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80">
                50+ Shipped
              </div>
              <div className="text-xs font-bold text-[#00DFD8] uppercase tracking-wider mt-1">Digital Products</div>
            </div>
            <div className="text-center p-2">
              <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80">
                $45M+ Volume
              </div>
              <div className="text-xs font-bold text-[#00DFD8] uppercase tracking-wider mt-1">Processed for Clients</div>
            </div>
            <div className="text-center p-2">
              <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80">
                0.6s Average
              </div>
              <div className="text-xs font-bold text-[#00DFD8] uppercase tracking-wider mt-1">Global LCP Speed</div>
            </div>
            <div className="text-center p-2">
              <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80">
                98% Retention
              </div>
              <div className="text-xs font-bold text-[#00DFD8] uppercase tracking-wider mt-1">Client Loyalty Rate</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/book"
              className="px-8 py-4 bg-gradient-to-r from-[#7C3AED] to-[#FF007A] hover:opacity-95 text-white font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-glow-purple flex items-center justify-center gap-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/calculator"
              className="px-8 py-4 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/30 text-white font-bold rounded-full transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              <Calculator className="w-4 h-4 text-amber-300" />
              <span>Estimate Project Cost</span>
            </Link>
          </div>
        </div>

        {/* WORK SHOWCASE INTERACTIVE GRID */}
        <div className="py-12 border-t border-white/5">
          <WorkShowcaseGrid initialProjects={initialProjects} />
        </div>

        {/* TRUST & ACCREDITATION STRIP */}
        <div className="my-16 rounded-3xl overflow-hidden border border-white/10">
          <TrustShowcase />
        </div>

        {/* BOTTOM CTA BANNER */}
        <div className="mt-8 p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-[#1b073a] via-[#100324] to-[#0c051a] border border-[#7C3AED]/40 shadow-[0_20px_60px_rgba(124,58,237,0.25)] text-center relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#FF007A]/20 blur-[80px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
              Have an Ambitious Project in Mind?
            </h2>
            <p className="text-sm sm:text-base text-white/70 mb-8 leading-relaxed">
              Let&apos;s build an unfair market advantage together. Schedule a discovery call with our Lead Architect or calculate your project scope in 2 minutes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/book"
                className="px-8 py-4 bg-gradient-to-r from-[#7C3AED] to-[#FF007A] text-white font-bold rounded-full shadow-glow-purple hover:scale-105 active:scale-95 transition-all"
              >
                Schedule Strategy Session
              </Link>
              <Link
                href="/calculator"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-full transition-all"
              >
                Calculate Scope & Cost
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
