import DetailedCapabilities from "@/components/DetailedCapabilities";
import Toolkit from "@/components/Toolkit";
import CoreBenefits from "@/components/CoreBenefits";
import TrustShowcase from "@/components/TrustShowcase";
import { generateDynamicMetadata, generatePageJsonLd } from "@/lib/seo";
import { Metadata } from "next";
import Link from "next/link";
import { 
  Sparkles, ArrowRight, ShieldCheck, Zap, Calculator, 
  Check, Smartphone, Cpu, ShoppingBag, Globe, ArrowUpRight, Gauge
} from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  return await generateDynamicMetadata("/services");
}

export default function ServicesPage() {
  const jsonLd = generatePageJsonLd({
    title: "Core Engineering Capabilities & Growth Solutions | Pixarrow",
    description: "Full-stack Next.js web applications, iOS/Android mobile engineering, autonomous agentic AI workflows, Shopify Plus headless commerce, and conversion optimization.",
    url: "https://pixarrow.com/services",
    type: "Service",
    breadcrumbs: [
      { name: "Home", url: "https://pixarrow.com" },
      { name: "Services", url: "https://pixarrow.com/services" }
    ]
  });

  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 min-h-screen relative bg-[#070114] text-white overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Ambient radial glow decorations */}
      <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] bg-[#7C3AED]/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50vw] h-[50vw] bg-[#FF007A]/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[50%] left-[30%] w-[40vw] h-[40vw] bg-[#00DFD8]/10 blur-[150px] rounded-full pointer-events-none" />
      
      {/* Cyber Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-grid-pattern z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* HERO SECTION: 2-COLUMN DYNAMIC STUDIO LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-24 pt-4 sm:pt-8">
          
          {/* Left Column: Core Value & Pitch */}
          <div className="flex flex-col items-start lg:col-span-7">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/40 text-[#C084FC] text-xs font-black uppercase tracking-widest mb-4 sm:mb-6 shadow-[0_0_20px_rgba(124,58,237,0.3)] backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A855F7] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A855F7]" />
              </span>
              <span>Full-Stack Engineering &amp; Growth Studio</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black tracking-tight leading-[1.08] sm:leading-[1.04] text-white mb-4 sm:mb-6">
              Engineering Capabilities. <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF007A] via-[#7C3AED] to-[#00DFD8] drop-shadow-[0_0_40px_rgba(124,58,237,0.4)]">
                Built for Explosive Scale.
              </span>
            </h1>

            {/* Paragraph */}
            <p className="text-sm sm:text-base md:text-lg text-white/80 mb-6 sm:mb-8 max-w-2xl leading-relaxed font-normal">
              From mission-critical <span className="text-white font-bold">Next.js 16</span> web applications and native <span className="text-white font-bold">mobile platforms</span> to autonomous <span className="text-white font-bold">AI agent pipelines</span> and high-AOV <span className="text-white font-bold">headless Shopify</span> storefronts — we build software that drives compounding ARR.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6 sm:mb-8 w-full sm:w-auto">
              <Link
                href="/book"
                className="w-full sm:w-auto px-7 py-3.5 sm:py-4 bg-gradient-to-r from-[#7C3AED] to-[#FF007A] hover:opacity-95 text-white text-sm sm:text-base font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-glow-purple flex items-center justify-center gap-2 text-center"
              >
                <span>Schedule Architecture Call</span>
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

            {/* Guarantee Badges */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mb-6 sm:mb-8 text-[10px] sm:text-xs text-white/70 font-medium">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <Check className="w-3.5 h-3.5" />
                Signed NDA in 24h
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1.5 text-purple-300 font-semibold">
                <Check className="w-3.5 h-3.5" />
                100% IP Ownership
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1.5 text-cyan-300 font-semibold">
                <Check className="w-3.5 h-3.5" />
                15-Day Guarantee
              </span>
            </div>

            {/* 2x2 Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 w-full">
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                <div className="text-lg sm:text-2xl font-black text-white">0.4s Edge</div>
                <div className="text-[9px] sm:text-[10px] font-bold text-[#00DFD8] uppercase tracking-wider mt-0.5">LCP Speed</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                <div className="text-lg sm:text-2xl font-black text-white">100% IP</div>
                <div className="text-[9px] sm:text-[10px] font-bold text-purple-300 uppercase tracking-wider mt-0.5">Code Sovereignty</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                <div className="text-lg sm:text-2xl font-black text-white">4-6 Wks</div>
                <div className="text-[9px] sm:text-[10px] font-bold text-pink-300 uppercase tracking-wider mt-0.5">Sprint SLA</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                <div className="text-lg sm:text-2xl font-black text-white">15-Day</div>
                <div className="text-[9px] sm:text-[10px] font-bold text-emerald-400 uppercase tracking-wider mt-0.5">Zero-Risk Trial</div>
              </div>
            </div>

          </div>

          {/* Right Column: High-Tech Glass Matrix Reactor */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#7C3AED]/25 via-[#FF007A]/20 to-[#00DFD8]/20 blur-[70px] rounded-full pointer-events-none" />

            {/* Reactor Canvas */}
            <div className="relative w-full rounded-3xl p-1 sm:p-1.5 bg-gradient-to-b from-white/20 via-white/5 to-white/10 border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.8)] backdrop-blur-3xl overflow-hidden">
              <div className="rounded-2xl bg-[#09021a]/90 p-4 sm:p-6 border border-white/10">
                
                {/* Reactor Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-mono font-black text-white uppercase tracking-wider">
                      CAPABILITIES MATRIX
                    </span>
                  </div>
                  <span className="text-[9px] font-mono text-cyan-300 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                    4 ACTIVE NODES
                  </span>
                </div>

                {/* 4 Active Service Nodes */}
                <div className="space-y-2.5 sm:space-y-3">
                  
                  {/* Node 1 */}
                  <Link 
                    href="/services/nextjs-development" 
                    className="group block p-3 sm:p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-400/40 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-300">
                          <Globe className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                            Next.js 16 Web Applications
                          </div>
                          <div className="text-[10px] text-white/50">React 19 • TypeScript • RSC Edge</div>
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-cyan-300 transition-colors" />
                    </div>
                  </Link>

                  {/* Node 2 */}
                  <Link 
                    href="/services/mobile-app-development" 
                    className="group block p-3 sm:p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-purple-400/40 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-300">
                          <Smartphone className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                            Cross-Platform Mobile Apps
                          </div>
                          <div className="text-[10px] text-white/50">React Native • iOS &amp; Android • 60 FPS</div>
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-purple-300 transition-colors" />
                    </div>
                  </Link>

                  {/* Node 3 */}
                  <Link 
                    href="/services/agentic-ai-automations" 
                    className="group block p-3 sm:p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-pink-400/40 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-pink-500/15 border border-pink-500/30 flex items-center justify-center text-[#FF007A]">
                          <Cpu className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-white group-hover:text-pink-300 transition-colors">
                            Autonomous Agentic AI
                          </div>
                          <div className="text-[10px] text-white/50">LangChain • RAG • Custom LLM Agents</div>
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-pink-300 transition-colors" />
                    </div>
                  </Link>

                  {/* Node 4 */}
                  <Link 
                    href="/services/ecommerce-growth-engineering" 
                    className="group block p-3 sm:p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-amber-400/40 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-300">
                          <ShoppingBag className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                            Headless Shopify Plus
                          </div>
                          <div className="text-[10px] text-white/50">Sub-Second Checkout • High-AOV CRO</div>
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-amber-300 transition-colors" />
                    </div>
                  </Link>

                </div>

                {/* Live Terminal Benchmark Strip */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/60">
                  <span className="flex items-center gap-1">
                    <Zap className="w-3 h-3 text-cyan-400" />
                    <span>Edge SLA: 99.98%</span>
                  </span>
                  <span className="text-emerald-400 font-bold">READY TO DEPLOY</span>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* 6 CAPABILITIES SHOWCASE */}
        <DetailedCapabilities />
        
        {/* TECH ECOSYSTEM */}
        <div className="my-12 sm:my-20 border-t border-white/5 pt-8 sm:pt-12">
          <Toolkit />
        </div>
        
        {/* CORE ARCHITECTURAL ADVANTAGES */}
        <div className="my-12 sm:my-20 border-t border-white/5 pt-8 sm:pt-12">
          <CoreBenefits />
        </div>

        {/* INSTITUTIONAL TRUST & ACCREDITATION */}
        <div className="my-10 sm:my-16 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10">
          <TrustShowcase />
        </div>

        {/* BOTTOM HIGH-CONVERTING CTA BANNER */}
        <div className="mt-8 p-6 sm:p-12 md:p-14 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#1b073a] via-[#100324] to-[#0c051a] border border-[#7C3AED]/40 shadow-[0_20px_60px_rgba(124,58,237,0.25)] text-center relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#FF007A]/20 blur-[80px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-3 sm:mb-4">
              Ready to Build Something Extraordinary?
            </h2>
            <p className="text-xs sm:text-base text-white/70 mb-6 sm:mb-8 leading-relaxed">
              Speak directly with our Lead Architect to deconstruct your project roadmap, tech stack, and milestone deliverables.
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
