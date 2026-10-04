import { generateDynamicMetadata } from "@/lib/seo";
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
  Calculator
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
    tagline: "Full-Stack Architecture & Cloud Infrastructure",
    bio: "The engineering engine behind Pixarrow. Specializing in high-throughput Next.js systems, distributed Node.js/Python architectures, and edge deployments.",
    image: "/6g38mfg1psrmy0cwpptrqn6c0m.png",
    focus: ["Next.js & React 19", "Cloud & Microservices", "Agentic AI & RAG", "System Scalability"],
    stats: "50+ Systems Shipped"
  },
  {
    name: "Ankit Rajput",
    role: "Co-Founder & Chief Strategy Officer",
    tagline: "Growth Architecture & Performance Systems",
    bio: "The strategist merging consumer psychology, brand aesthetics, and high-ROI acquisition engines to scale high-ticket startups into market leaders.",
    image: "/WhatsApp Image 2026-04-09 at 10.35.59.jpeg",
    focus: ["Digital Strategy", "High-ROAS Funnels", "Brand Positioning", "CRO Engineering"],
    stats: "40M+ Ad Spend Directed"
  }
];

const operatingValues = [
  { label: "50+ Products", sub: "Delivered on Time" },
  { label: "40M+ Managed", sub: "Client Ad Spend" },
  { label: "99.98% SLA", sub: "Infrastructure Uptime" },
  { label: "100% IP", sub: "Client Source Code" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-bg text-white pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Background Radial Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] bg-[#7C3AED]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50vw] h-[50vw] bg-[#FF007A]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[60%] left-[20%] w-[40vw] h-[40vw] bg-[#00DFD8]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HERO SECTION */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-[#A855F7] text-xs font-black uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>The Growth & Engineering Studio</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight text-white leading-[1.05] mb-8">
            Architecting the Next Era of <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF007A] via-[#7C3AED] to-[#00DFD8] drop-shadow-[0_0_30px_rgba(124,58,237,0.3)]">
              Digital Dominance.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto mb-10">
            We are a high-decibel digital growth and software engineering unit that operates with startup velocity and tier-1 precision. We bridge the gap between world-class design, rock-solid Next.js engineering, and measurable revenue acceleration.
          </p>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto p-6 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl mb-10">
            {operatingValues.map((v) => (
              <div key={v.label} className="text-center p-2">
                <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80">
                  {v.label}
                </div>
                <div className="text-xs font-bold text-[#00DFD8] uppercase tracking-wider mt-1">{v.sub}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/book"
              className="px-8 py-4 bg-gradient-to-r from-[#7C3AED] to-[#FF007A] hover:opacity-95 text-white font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-glow-purple flex items-center justify-center gap-2"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/calculator"
              className="px-8 py-4 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/30 text-white font-bold rounded-full transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              <Calculator className="w-4 h-4 text-amber-300" />
              <span>Calculate Project Cost</span>
            </Link>
          </div>
        </div>

        {/* OUR PHILOSOPHY & CORE PILLARS */}
        <div className="py-20 border-t border-white/5">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-[10px] font-black uppercase tracking-widest text-[#A855F7] mb-2">
              Our Operating DNA
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Engineered Differently from the Ground Up
            </h2>
            <p className="text-sm sm:text-base text-white/60 mt-3">
              We reject slow agency overhead and bloat. Here is how we deliver unfair market advantages for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {philosophyPillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/10 hover:border-brand-purple/50 transition-all duration-300 backdrop-blur-xl group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-[#7C3AED]/10 border border-[#7C3AED]/30 flex items-center justify-center text-[#A855F7] group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                        {p.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-white mb-3 group-hover:text-[#00DFD8] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/60 leading-relaxed font-normal">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* THE ARCHITECTS / LEADERSHIP */}
        <div className="py-20 border-t border-white/5">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-[10px] font-black uppercase tracking-widest text-[#00DFD8] mb-2">
              Leadership
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Meet The Architects
            </h2>
            <p className="text-sm sm:text-base text-white/60 mt-3">
              Hands-on founders who actively lead strategy, write mission-critical architecture, and drive results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {leadershipTeam.map((leader) => (
              <div
                key={leader.name}
                className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#110526] to-[#080214] border border-white/10 backdrop-blur-2xl shadow-2xl flex flex-col justify-between group hover:border-[#7C3AED]/50 transition-all"
              >
                <div>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
                    {/* Founder Image */}
                    <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-white/10 shrink-0 shadow-lg group-hover:border-[#7C3AED] transition-colors">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      />
                    </div>

                    <div className="text-center sm:text-left">
                      <div className="text-xs font-bold text-[#00DFD8] uppercase tracking-wider mb-1">
                        {leader.stats}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-black text-white">{leader.name}</h3>
                      <p className="text-xs font-bold text-white/50 uppercase tracking-widest mt-1">
                        {leader.role}
                      </p>
                      <div className="inline-block mt-3 px-3 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-[11px] font-semibold text-purple-300">
                        {leader.tagline}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-white/70 leading-relaxed mb-6 font-normal">
                    {leader.bio}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {leader.focus.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-[11px] text-white/80 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-white/40 font-semibold">Direct Collaboration</span>
                  <Link
                    href="/book"
                    className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Schedule Call with Founder</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* INSTITUTIONAL TRUST & ACCREDITATIONS SECTION */}
        <div className="my-10 rounded-3xl overflow-hidden border border-white/10">
          <TrustShowcase />
        </div>

        {/* SOCIAL SHOWCASE */}
        <div className="py-16">
          <SocialShowcase />
        </div>

        {/* BOTTOM CTA BANNER */}
        <div className="mt-8 p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-[#1b073a] via-[#100324] to-[#0c051a] border border-[#7C3AED]/40 shadow-[0_20px_60px_rgba(124,58,237,0.25)] text-center relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#FF007A]/20 blur-[80px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
              Ready to Accelerate Your Digital Growth?
            </h2>
            <p className="text-sm sm:text-base text-white/70 mb-8 leading-relaxed">
              Let&apos;s build an unfair advantage for your business. Book a discovery call with our founders or calculate your project scope in 2 minutes.
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
