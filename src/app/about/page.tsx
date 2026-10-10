import { generateDynamicMetadata, generatePageJsonLd } from "@/lib/seo";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  Zap, 
  Target, 
  Users, 
  Lock, 
  CheckCircle2, 
  Globe, 
  Layers, 
  TrendingUp, 
  Award, 
  Calculator,
  Check,
  ArrowUpRight
} from "lucide-react";
import TrustShowcase from "@/components/TrustShowcase";
import SocialShowcase from "@/components/SocialShowcase";

export async function generateMetadata(): Promise<Metadata> {
  return await generateDynamicMetadata("/about");
}

const philosophyPillars = [
  {
    icon: Zap,
    title: "Zero Bloat, Pure Code",
    desc: "We eliminate legacy tech debt. Every system is engineered with React Server Components, TypeScript, and edge caching for sub-second execution.",
    badge: "Engineering First",
    color: "from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-400"
  },
  {
    icon: TrendingUp,
    title: "Conversion-Driven Architecture",
    desc: "A beautiful site that doesn't convert is a liability. We design every user flow, micro-interaction, and checkout funnel with mathematical CRO precision.",
    badge: "Revenue Growth",
    color: "from-blue-500/20 to-cyan-500/20 border-cyan-500/30 text-cyan-400"
  },
  {
    icon: Target,
    title: "Startup Velocity + Tier-1 Polish",
    desc: "Speed is your ultimate competitive moat. We launch market-ready flagship digital products in 3 to 6 weeks, not 9 months.",
    badge: "Rapid Delivery",
    color: "from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-400"
  },
  {
    icon: ShieldCheck,
    title: "Radical Transparency & IP Transfer",
    desc: "Direct Slack collaboration with your Lead Architect. 100% full source code and intellectual property transferred unconditionally upon milestone completion.",
    badge: "Client Sovereignty",
    color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400"
  }
];

const leadershipTeam = [
  {
    name: "Anuj Sharma",
    role: "Co-Founder & Chief Technology Officer",
    badge: "Lead System Architect",
    tagline: "Full-Stack Architecture & Cloud Infrastructure",
    bio: "The engineering engine behind Pixarrow. Specializing in high-throughput Next.js systems, distributed Node.js/Python architectures, and edge deployments.",
    image: "/6g38mfg1psrmy0cwpptrqn6c0m.png",
    focus: ["Next.js & React 19", "Cloud & Microservices", "Agentic AI & RAG", "System Scalability"],
    stats: "50+ Systems Shipped",
    ringColor: "ring-purple-500/50 shadow-[0_0_30px_rgba(124,58,237,0.35)]",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/40",
    statsColor: "text-cyan-300 bg-cyan-500/10 border-cyan-500/20"
  },
  {
    name: "Ankit Rajput",
    role: "Co-Founder & Chief Strategy Officer",
    badge: "Chief Growth Architect",
    tagline: "Growth Architecture & Performance Systems",
    bio: "The strategist merging consumer psychology, brand aesthetics, and high-ROI acquisition engines to scale high-ticket startups into market leaders.",
    image: "/WhatsApp Image 2026-04-09 at 10.35.59.jpeg",
    focus: ["Digital Strategy", "High-ROAS Funnels", "Brand Positioning", "CRO Engineering"],
    stats: "40M+ Ad Spend Directed",
    ringColor: "ring-pink-500/50 shadow-[0_0_30px_rgba(255,0,122,0.35)]",
    badgeColor: "bg-pink-500/20 text-pink-300 border-pink-500/40",
    statsColor: "text-pink-300 bg-pink-500/10 border-pink-500/20"
  }
];

const operatingValues = [
  { label: "50+ Products", sub: "Delivered on Time", color: "text-cyan-400" },
  { label: "$45M+ Volume", sub: "Processed for Clients", color: "text-purple-300" },
  { label: "99.98% SLA", sub: "Edge Uptime Guarantee", color: "text-pink-400" },
  { label: "100% IP", sub: "Full Source Code Transfer", color: "text-emerald-400" },
];

export default function AboutPage() {
  const jsonLd = generatePageJsonLd({
    title: "About Pixarrow — The Growth & Web Engineering Architects",
    description: "Meet the founders and engineering leads behind Pixarrow: Anuj Sharma (CTO) and Ankit Rajput (CSO). We build scalable digital platforms with startup velocity.",
    url: "https://pixarrow.com/about",
    type: "AboutPage",
    breadcrumbs: [
      { name: "Home", url: "https://pixarrow.com" },
      { name: "About Pixarrow", url: "https://pixarrow.com/about" }
    ]
  });

  return (
    <div className="min-h-screen bg-[#070114] text-white pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Background Radial Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] bg-[#7C3AED]/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50vw] h-[50vw] bg-[#FF007A]/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[60%] left-[20%] w-[40vw] h-[40vw] bg-[#00DFD8]/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Cyber Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-grid-pattern z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HERO SECTION: 2-COLUMN STUDIO ARCHITECTURE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-24 pt-4 sm:pt-8">
          
          {/* Left Column: Mission & Pitch */}
          <div className="flex flex-col items-start lg:col-span-7">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/40 text-[#C084FC] text-xs font-black uppercase tracking-widest mb-4 sm:mb-6 shadow-[0_0_20px_rgba(124,58,237,0.3)] backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A855F7] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A855F7]" />
              </span>
              <span>The Growth &amp; Engineering Unit</span>
            </div>

            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4.1rem] font-black tracking-tight leading-[1.08] sm:leading-[1.04] text-white mb-4 sm:mb-6">
              Architecting the Next Era of <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF007A] via-[#7C3AED] to-[#00DFD8] drop-shadow-[0_0_40px_rgba(124,58,237,0.4)]">
                Digital Dominance.
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-white/80 mb-6 sm:mb-8 max-w-2xl leading-relaxed font-normal">
              We are a high-decibel software engineering and growth unit operating with <span className="text-white font-bold">startup velocity</span> and <span className="text-white font-bold">tier-1 precision</span>. We bridge the gap between world-class interactive aesthetics, rock-solid <span className="text-white font-bold">Next.js architecture</span>, and measurable revenue acceleration.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6 sm:mb-8 w-full sm:w-auto">
              <Link
                href="/book"
                className="w-full sm:w-auto px-7 py-3.5 sm:py-4 bg-gradient-to-r from-[#7C3AED] to-[#FF007A] hover:opacity-95 text-white text-sm sm:text-base font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-glow-purple flex items-center justify-center gap-2 text-center"
              >
                <span>Partner With Us</span>
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
                100% IP Sovereignty
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1.5 text-cyan-300 font-semibold">
                <Check className="w-3.5 h-3.5" />
                Direct Founder Access
              </span>
            </div>

            {/* 4 Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 w-full">
              {operatingValues.map((v) => (
                <div key={v.label} className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                  <div className="text-lg sm:text-2xl font-black text-white">{v.label}</div>
                  <div className={`text-[9px] sm:text-[10px] font-bold ${v.color} uppercase tracking-wider mt-0.5`}>
                    {v.sub}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Studio Architecture & Founder DNA Card */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#7C3AED]/30 via-[#FF007A]/25 to-[#00DFD8]/20 blur-[75px] rounded-full pointer-events-none" />

            {/* Glass Chassis */}
            <div className="relative w-full rounded-3xl p-1 sm:p-1.5 bg-gradient-to-b from-white/20 via-white/5 to-white/10 border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.85)] backdrop-blur-3xl overflow-hidden">
              <div className="rounded-2xl bg-[#09021a]/90 p-4 sm:p-6 border border-white/10">
                
                {/* Header Strip */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00DFD8] animate-pulse" />
                    <span className="text-[11px] font-mono font-black text-white uppercase tracking-wider">
                      STUDIO ARCHITECTURE
                    </span>
                  </div>
                  <span className="text-[9px] font-mono text-emerald-300 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 font-bold">
                    FOUNDER-LED
                  </span>
                </div>

                {/* 2 Founder Spotlight Cards */}
                <div className="space-y-3 mb-4">
                  
                  {/* Founder 1: Anuj Sharma */}
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-purple-500/40 transition-all flex items-center gap-4">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-purple-500/50 shrink-0 shadow-[0_0_20px_rgba(124,58,237,0.35)]">
                      <Image
                        src="/6g38mfg1psrmy0cwpptrqn6c0m.png"
                        alt="Anuj Sharma - CTO"
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between mb-0.5">
                        <h4 className="text-base sm:text-lg font-black text-white truncate">Anuj Sharma</h4>
                        <span className="text-[10px] font-mono font-bold text-cyan-300 bg-cyan-500/15 border border-cyan-500/30 px-2 py-0.5 rounded-full">
                          CTO
                        </span>
                      </div>
                      <p className="text-xs font-bold text-[#C084FC] mb-1">Full-Stack &amp; Cloud Architect</p>
                      <p className="text-[11px] text-white/60 leading-tight">Next.js 16 • React 19 • Python AI • Edge</p>
                      <div className="mt-2 inline-flex items-center gap-1.5 text-[10px] font-semibold text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>50+ Systems Shipped</span>
                      </div>
                    </div>
                  </div>

                  {/* Founder 2: Ankit Rajput */}
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-pink-500/40 transition-all flex items-center gap-4">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-pink-500/50 shrink-0 shadow-[0_0_20px_rgba(255,0,122,0.35)]">
                      <Image
                        src="/WhatsApp Image 2026-04-09 at 10.35.59.jpeg"
                        alt="Ankit Rajput - CSO"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between mb-0.5">
                        <h4 className="text-base sm:text-lg font-black text-white truncate">Ankit Rajput</h4>
                        <span className="text-[10px] font-mono font-bold text-pink-300 bg-pink-500/15 border border-pink-500/30 px-2 py-0.5 rounded-full">
                          CSO
                        </span>
                      </div>
                      <p className="text-xs font-bold text-[#FF007A] mb-1">Growth &amp; Performance Systems</p>
                      <p className="text-[11px] text-white/60 leading-tight">$40M+ Managed Spend • CRO Architect</p>
                      <div className="mt-2 inline-flex items-center gap-1.5 text-[10px] font-semibold text-cyan-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        <span>Growth Systems Shipped</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Studio Core Principles Pill Deck */}
                <div className="space-y-2 pt-3 border-t border-white/10">
                  <div className="flex items-center gap-2 text-[11px] text-white/80 font-medium">
                    <Zap className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                    <span>Zero Legacy Bloat • Sub-0.5s Edge Speed</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-white/80 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-purple-300 shrink-0" />
                    <span>100% Unconditional IP &amp; Code Sovereignty</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-white/80 font-medium">
                    <TrendingUp className="w-3.5 h-3.5 text-pink-300 shrink-0" />
                    <span>$45M+ Client Gross Volume Processed</span>
                  </div>
                </div>

                {/* Bottom Direct Founder Action */}
                <div className="mt-4 pt-3 border-t border-white/10">
                  <Link
                    href="/book"
                    className="w-full py-2 px-3 rounded-lg bg-gradient-to-r from-[#7C3AED]/30 to-[#FF007A]/30 hover:from-[#7C3AED]/50 hover:to-[#FF007A]/50 border border-white/15 text-white text-[11px] font-bold flex items-center justify-center gap-1.5 transition-all"
                  >
                    <span>Direct Architecture Call with Founders</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* OUR PHILOSOPHY & CORE PILLARS */}
        <div className="py-12 sm:py-20 border-t border-white/5">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <div className="text-[10px] font-black uppercase tracking-widest text-[#A855F7] mb-2">
              Our Operating DNA
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Engineered Differently from the Ground Up
            </h2>
            <p className="text-xs sm:text-base text-white/60 mt-2 sm:mt-3">
              We reject slow agency overhead and bloat. Here is how we deliver unfair market advantages for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {philosophyPillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/10 hover:border-brand-purple/50 transition-all duration-300 backdrop-blur-xl group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#7C3AED]/10 border border-[#7C3AED]/30 flex items-center justify-center text-[#A855F7] group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-black tracking-widest uppercase px-2.5 sm:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                        {p.badge}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-2xl font-black text-white mb-2 sm:mb-3 group-hover:text-[#00DFD8] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-base text-white/60 leading-relaxed font-normal">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* THE ARCHITECTS / LEADERSHIP */}
        <div className="py-14 sm:py-24 border-t border-white/5">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00DFD8]/10 border border-[#00DFD8]/30 text-[#00DFD8] text-xs font-black uppercase tracking-widest mb-3 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Direct Founder Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Meet The Architects
            </h2>
            <p className="text-sm sm:text-base text-white/70 mt-2 sm:mt-3 leading-relaxed">
              Hands-on technical and growth founders who actively lead strategy, write mission-critical architecture, and engineer scalable digital systems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {leadershipTeam.map((leader) => (
              <div
                key={leader.name}
                className="relative rounded-3xl p-1 bg-gradient-to-b from-white/20 via-white/5 to-white/10 border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.85)] backdrop-blur-3xl group transition-all hover:border-white/30 flex flex-col justify-between"
              >
                <div className="rounded-[1.4rem] bg-[#09021a]/95 p-6 sm:p-8 flex flex-col justify-between h-full">
                  <div>
                    
                    {/* Header Row: Large Avatar + Identity */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 mb-6">
                      
                      {/* Founder Photo */}
                      <div className="relative shrink-0">
                        <div className={`relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden ring-2 ${leader.ringColor} transition-transform group-hover:scale-105 duration-300`}>
                          <Image
                            src={leader.image}
                            alt={leader.name}
                            fill
                            className="object-cover object-top"
                          />
                        </div>
                      </div>

                      {/* Info */}
                      <div className="text-center sm:text-left flex-1 min-w-0">
                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider border ${leader.badgeColor}`}>
                            {leader.badge}
                          </span>
                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${leader.statsColor}`}>
                            {leader.stats}
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-black text-white mb-1">
                          {leader.name}
                        </h3>

                        <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-2.5">
                          {leader.role}
                        </p>

                        <div className="inline-block px-3 py-1 rounded-full bg-[#7C3AED]/15 border border-[#7C3AED]/35 text-[11px] font-semibold text-purple-200">
                          {leader.tagline}
                        </div>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-xs sm:text-sm text-white/75 leading-relaxed mb-6 font-normal">
                      {leader.bio}
                    </p>

                    {/* Focus Chips */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
                      {leader.focus.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-medium text-white/80 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Bottom Action Strip */}
                  <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs text-white/50">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Direct Slack &amp; Architecture Access</span>
                    </div>

                    <Link
                      href="/book"
                      className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#FF007A] hover:opacity-95 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-glow-purple"
                    >
                      <span>Schedule Call with {leader.name.split(" ")[0]}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* INSTITUTIONAL TRUST & ACCREDITATIONS SECTION */}
        <div className="my-10 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10">
          <TrustShowcase />
        </div>

        {/* SOCIAL SHOWCASE */}
        <div className="py-10 sm:py-16">
          <SocialShowcase />
        </div>

        {/* BOTTOM CTA BANNER */}
        <div className="mt-8 p-6 sm:p-12 md:p-14 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#1b073a] via-[#100324] to-[#0c051a] border border-[#7C3AED]/40 shadow-[0_20px_60px_rgba(124,58,237,0.25)] text-center relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#FF007A]/20 blur-[80px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-3 sm:mb-4">
              Ready to Accelerate Your Digital Growth?
            </h2>
            <p className="text-xs sm:text-base text-white/70 mb-6 sm:mb-8 leading-relaxed">
              Let&apos;s build an unfair advantage for your business. Book a discovery call with our founders or calculate your project scope in 2 minutes.
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
