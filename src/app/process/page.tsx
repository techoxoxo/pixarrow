import Process from "@/components/Process";
import Timeline from "@/components/Timeline";
import Methodology from "@/components/Methodology";
import Comparison from "@/components/Comparison";
import ReadyToLaunch from "@/components/ReadyToLaunch";
import TrustShowcase from "@/components/TrustShowcase";
import { generateDynamicMetadata, generatePageJsonLd } from "@/lib/seo";
import { Metadata } from "next";
import Link from "next/link";
import { 
  Sparkles, ArrowRight, Calculator, Check, ShieldCheck, 
  Zap, Clock, Layers, ArrowUpRight, Gauge 
} from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  return await generateDynamicMetadata("/process");
}

export default function ProcessPage() {
  const jsonLd = generatePageJsonLd({
    title: "Engineering Process, Sprint Methodology & SLA Guarantees | Pixarrow",
    description: "Discover our battle-tested 4-phase agile engineering methodology: Architecture Blueprint, Milestone Sprints, Automated QA Stress-Testing, and Global Edge SLA.",
    url: "https://pixarrow.com/process",
    type: "WebPage",
    breadcrumbs: [
      { name: "Home", url: "https://pixarrow.com" },
      { name: "Engineering Process", url: "https://pixarrow.com/process" }
    ]
  });

  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 min-h-screen relative bg-[#070114] text-white overflow-hidden">
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

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 relative z-10">
        
        {/* HERO SECTION: 2-COLUMN SPRINT RADAR LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-24 pt-4 sm:pt-8">
          
          {/* Left Column: Vision & Methodology */}
          <div className="flex flex-col items-start lg:col-span-7">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/40 text-[#C084FC] text-xs font-black uppercase tracking-widest mb-4 sm:mb-6 shadow-[0_0_20px_rgba(124,58,237,0.3)] backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00DFD8] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00DFD8]" />
              </span>
              <span>The Pixarrow Sprint Methodology</span>
            </div>

            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4.1rem] font-black tracking-tight leading-[1.08] sm:leading-[1.04] text-white mb-4 sm:mb-6">
              How We Engineer &amp; <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF007A] via-[#7C3AED] to-[#00DFD8] drop-shadow-[0_0_40px_rgba(124,58,237,0.4)]">
                Ship at Velocity.
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-white/80 mb-6 sm:mb-8 max-w-2xl leading-relaxed font-normal">
              A lean, transparent, code-first engineering process that takes your product from <span className="text-white font-bold">architectural blueprint</span> to <span className="text-white font-bold">global edge launch</span> in 4 to 6 weeks. No bloated management, no endless delays.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6 sm:mb-8 w-full sm:w-auto">
              <Link
                href="/book"
                className="w-full sm:w-auto px-7 py-3.5 sm:py-4 bg-gradient-to-r from-[#7C3AED] to-[#FF007A] hover:opacity-95 text-white text-sm sm:text-base font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-glow-purple flex items-center justify-center gap-2 text-center"
              >
                <span>Schedule Strategy Call</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="/calculator"
                className="w-full sm:w-auto px-6 py-3.5 sm:py-4 bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 hover:border-white/40 text-white text-xs sm:text-base font-bold rounded-full transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 backdrop-blur-xl text-center"
              >
                <Calculator className="w-4 h-4 text-amber-300" />
                <span>Calculate Project Cost</span>
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
                Weekly Sprint Demos
              </span>
            </div>

            {/* 4 Sprint Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 w-full">
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                <div className="text-lg sm:text-2xl font-black text-white">4-6 Wks</div>
                <div className="text-[9px] sm:text-[10px] font-bold text-[#00DFD8] uppercase tracking-wider mt-0.5">Average Launch SLA</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                <div className="text-lg sm:text-2xl font-black text-white">Daily</div>
                <div className="text-[9px] sm:text-[10px] font-bold text-pink-300 uppercase tracking-wider mt-0.5">Async Updates</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                <div className="text-lg sm:text-2xl font-black text-white">0%</div>
                <div className="text-[9px] sm:text-[10px] font-bold text-purple-300 uppercase tracking-wider mt-0.5">Unapproved Creep</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                <div className="text-lg sm:text-2xl font-black text-white">24h</div>
                <div className="text-[9px] sm:text-[10px] font-bold text-emerald-400 uppercase tracking-wider mt-0.5">Signed NDA</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Sprint Pipeline Visualizer */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#7C3AED]/30 via-[#FF007A]/25 to-[#00DFD8]/20 blur-[75px] rounded-full pointer-events-none" />

            {/* Visualizer Chassis */}
            <div className="relative w-full rounded-3xl p-1 sm:p-1.5 bg-gradient-to-b from-white/20 via-white/5 to-white/10 border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.85)] backdrop-blur-3xl overflow-hidden">
              <div className="rounded-2xl bg-[#09021a]/90 p-4 sm:p-6 border border-white/10">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00DFD8] animate-pulse" />
                    <span className="text-[11px] font-mono font-black text-white uppercase tracking-wider">
                      SPRINT PIPELINE RADAR
                    </span>
                  </div>
                  <span className="text-[9px] font-mono text-emerald-300 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 font-bold">
                    100% ON-TIME SLA
                  </span>
                </div>

                {/* 4 Pipeline Stages */}
                <div className="space-y-2.5 sm:space-y-3">
                  
                  {/* Phase 1 */}
                  <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-300 font-mono font-bold text-xs shrink-0 mt-0.5">
                      01
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs sm:text-sm font-bold text-white">System Architecture &amp; ERD</h4>
                        <span className="text-[9px] font-mono text-cyan-300">Week 1</span>
                      </div>
                      <p className="text-[11px] text-white/60 mt-0.5">
                        Technical blueprint, data schemas, cloud infrastructure &amp; UI interactive prototypes.
                      </p>
                    </div>
                  </div>

                  {/* Phase 2 */}
                  <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-300 font-mono font-bold text-xs shrink-0 mt-0.5">
                      02
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs sm:text-sm font-bold text-white">Rapid Milestone Sprints</h4>
                        <span className="text-[9px] font-mono text-purple-300">Weeks 2–4</span>
                      </div>
                      <p className="text-[11px] text-white/60 mt-0.5">
                        Full-stack Next.js/React engineering, API integrations &amp; live staging review.
                      </p>
                    </div>
                  </div>

                  {/* Phase 3 */}
                  <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-pink-500/15 border border-pink-500/30 flex items-center justify-center text-[#FF007A] font-mono font-bold text-xs shrink-0 mt-0.5">
                      03
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs sm:text-sm font-bold text-white">Automated QA &amp; Load Testing</h4>
                        <span className="text-[9px] font-mono text-pink-300">Week 5</span>
                      </div>
                      <p className="text-[11px] text-white/60 mt-0.5">
                        Lighthouse 95+ audits, cross-device responsiveness &amp; security stress testing.
                      </p>
                    </div>
                  </div>

                  {/* Phase 4 */}
                  <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-300 font-mono font-bold text-xs shrink-0 mt-0.5">
                      04
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs sm:text-sm font-bold text-white">Global Edge Launch &amp; Handover</h4>
                        <span className="text-[9px] font-mono text-emerald-300">Week 6</span>
                      </div>
                      <p className="text-[11px] text-white/60 mt-0.5">
                        CDN edge deployment, documentation handover &amp; 30-day post-launch warranty.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Footer Tag */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/60">
                  <span className="flex items-center gap-1 text-cyan-300">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Edge Deployment: Instant</span>
                  </span>
                  <span className="text-emerald-400 font-bold">NDA PROTECTED</span>
                </div>

              </div>
            </div>

          </div>

        </div>

        <Methodology />
        
        <div className="my-16 border-t border-white/5" />
        
        <Process />
        
        <div className="my-16 border-t border-white/5" />
        
        <Timeline />
        
        <div className="my-16 border-t border-white/5" />
        
        <Comparison />
        
        {/* INSTITUTIONAL TRUST & ACCREDITATION */}
        <div className="my-16 rounded-3xl overflow-hidden border border-white/10">
          <TrustShowcase />
        </div>

        <ReadyToLaunch />
      </div>
    </div>
  );
}
