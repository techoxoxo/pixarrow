import { industriesData } from "@/data/industriesData";
import { caseStudies } from "@/data/caseStudies";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, 
  ShieldCheck, 
  Lock, 
  Clock, 
  ChevronRight, 
  Layers, 
  DollarSign, 
  TrendingUp, 
  ShoppingBag, 
  Sparkles, 
  Zap, 
  Database, 
  Cpu, 
  Smartphone,
  CheckCircle2,
  ArrowUpRight,
  Calculator
} from "lucide-react";
import Script from "next/script";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(industriesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = industriesData[slug];

  if (!industry) {
    return { title: "Industry Not Found" };
  }

  return {
    title: `${industry.title} | Pixarrow Engineering`,
    description: industry.subtitle,
    alternates: {
      canonical: `https://pixarrow.com/industries/${slug}`,
    },
    openGraph: {
      title: `${industry.title} — Pixarrow`,
      description: industry.subtitle,
      url: `https://pixarrow.com/industries/${slug}`,
      type: "website",
      siteName: "Pixarrow",
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
  };
}

const iconMap: Record<string, any> = {
  Layers,
  DollarSign,
  TrendingUp,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Zap,
  Database,
  Cpu,
  Smartphone,
};

export default async function IndustrySubPage({ params }: Props) {
  const { slug } = await params;
  const industry = industriesData[slug];

  if (!industry) {
    notFound();
  }

  const featuredCaseStudy = caseStudies.find(cs => cs.slug === industry.featuredCaseStudySlug);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": industry.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-brand-bg text-white pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Schema Injection */}
      <Script
        id="industry-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Ambient Radial Background Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] bg-[#7C3AED]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50vw] h-[50vw] bg-[#00DFD8]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-semibold text-white/50 mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/30" />
          <span className="text-white/70">Industries</span>
          <ChevronRight className="w-3.5 h-3.5 text-white/30" />
          <span className="text-[#00DFD8] capitalize">{industry.slug}</span>
        </div>

        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-[#A855F7] text-xs font-black uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
              <span>{industry.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.08] mb-6">
              {industry.title}
            </h1>

            <p className="text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed mb-8">
              {industry.heroDescription}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/book"
                className="px-8 py-4 bg-gradient-to-r from-[#7C3AED] to-[#FF007A] hover:opacity-95 text-white text-base font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-glow-purple flex items-center justify-center gap-2"
              >
                <span>Consult Industry Architect</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/calculator"
                className="px-8 py-4 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/30 text-white text-base font-bold rounded-full transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4 text-amber-300" />
                <span>Estimate Industry Scope</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/60 font-medium">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                24h Signed NDA
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1.5 text-purple-300">
                <Lock className="w-4 h-4" />
                100% IP & Code Ownership
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1.5 text-cyan-300">
                <Clock className="w-4 h-4" />
                15-Day Trial Guarantee
              </span>
            </div>
          </div>

          {/* Right Hero Sticky Card: Industry Performance Snapshot */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#15072e] to-[#0a0217] border border-white/10 backdrop-blur-2xl shadow-2xl">
            <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">
              Sector Benchmarks
            </div>
            <div className="space-y-4">
              {industry.industryMetrics.map((st) => (
                <div key={st.label} className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00DFD8] to-[#7C3AED]">
                    {st.value}
                  </div>
                  <div className="text-xs font-bold text-white mt-0.5">{st.label}</div>
                  <div className="text-[11px] text-white/50 mt-0.5">{st.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CHALLENGES WE SOLVE */}
        <div className="py-16 border-t border-white/5">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
              Sector Bottlenecks We Eliminate
            </h2>
            <p className="text-sm sm:text-base text-white/60 max-w-xl mx-auto">
              How our engineering architecture directly overcomes industry obstacles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industry.challengesSolved.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#FF007A] mb-3">
                    Industry Challenge
                  </div>
                  <p className="text-sm text-white/80 font-semibold mb-6">
                    &ldquo;{item.challenge}&rdquo;
                  </p>
                </div>
                <div className="pt-6 border-t border-white/10">
                  <div className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Pixarrow Solution
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* KEY CAPABILITIES */}
        <div className="py-16 border-t border-white/5">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
              Core Technical Capabilities
            </h2>
            <p className="text-sm text-white/60">
              Specialized domain engineering tailored to {industry.slug} requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {industry.keyCapabilities.map((cap) => {
              const Icon = iconMap[cap.iconName] || Layers;
              return (
                <div
                  key={cap.title}
                  className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-[#7C3AED]/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#7C3AED]/10 border border-[#7C3AED]/30 flex items-center justify-center text-[#A855F7] mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-white mb-2">{cap.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* COMPLIANCE STANDARDS BADGES */}
        <div className="py-16 border-t border-white/5">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
              Compliance & Security Protocols
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              Built to the highest institutional standards.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {industry.complianceStandards.map((std) => (
              <div
                key={std}
                className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#0c051a] border border-emerald-500/20 text-emerald-300 font-bold text-xs shadow-md"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{std}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FEATURED CASE STUDY PREVIEW */}
        {featuredCaseStudy && (
          <div className="py-16 border-t border-white/5">
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/10 backdrop-blur-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#A855F7] mb-2">
                    Featured Sector Case Study
                  </div>
                  <h3 className="text-3xl font-black text-white mb-3">{featuredCaseStudy.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed mb-6">
                    {featuredCaseStudy.fullDescription}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {featuredCaseStudy.stats.map((st) => (
                      <div key={st.label} className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                        <div className="text-sm font-black text-white">{st.value}</div>
                        <div className="text-[10px] text-white/40 uppercase font-semibold">{st.label}</div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/case-study/${featuredCaseStudy.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest hover:text-brand-purple transition-colors"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowUpRight className="w-4 h-4 text-brand-purple" />
                  </Link>
                </div>

                <div className="lg:col-span-5 relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src={featuredCaseStudy.image}
                    alt={featuredCaseStudy.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FREQUENTLY ASKED QUESTIONS */}
        <div className="py-16 border-t border-white/5">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
              Sector FAQs
            </h2>
            <p className="text-sm text-white/60">
              Clear answers to technical and engagement questions.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {industry.faqs.map((faq) => (
              <div
                key={faq.question}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl"
              >
                <h3 className="text-base font-black text-white mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                  {faq.question}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed pl-3.5">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM CTA BANNER */}
        <div className="mt-12 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#1b073a] via-[#100324] to-[#0c051a] border border-[#7C3AED]/40 shadow-[0_20px_60px_rgba(124,58,237,0.25)] text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Ready to Build Your {industry.title.split(" ")[0]} Solution?
            </h2>
            <p className="text-sm sm:text-base text-white/70 mb-8 leading-relaxed">
              Book a discovery call with our Lead Domain Architect to review your project scope and security architecture.
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
