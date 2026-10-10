import { servicesData } from "@/data/servicesData";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Lock, 
  Clock, 
  ChevronRight, 
  Globe, 
  Layers, 
  Cpu, 
  Smartphone, 
  Database, 
  ShoppingBag, 
  Zap, 
  Calculator,
  ArrowUpRight
} from "lucide-react";
import Script from "next/script";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

const serviceKeywords: Record<string, string[]> = {
  "nextjs-development": ["full stack web development company", "enterprise web application development", "Next.js and NestJS development agency", "custom PostgreSQL database optimization services", "legacy system migration to Node.js", "web development company Mohali"],
  "mobile-app-development": ["mobile app development services", "React Native mobile app development company India", "app development agency in Mohali", "offshore mobile app development partner USA"],
  "agentic-ai-automations": ["custom software development agency", "agentic ai automation", "LLM integration services", "enterprise RAG development"],
  "ecommerce-growth-engineering": ["custom software development agency", "shopify plus development", "headless ecommerce development", "affordable web development agency for US startups"],
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} | Pixarrow Engineering`,
    description: service.subtitle,
    keywords: serviceKeywords[slug],
    alternates: {
      canonical: `https://pixarrow.com/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} — Pixarrow`,
      description: service.subtitle,
      url: `https://pixarrow.com/services/${slug}`,
      type: "website",
      siteName: "Pixarrow",
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
  };
}

const iconMap: Record<string, any> = {
  Globe,
  Layers,
  Cpu,
  ShieldCheck,
  Smartphone,
  Database,
  ShoppingBag,
  Zap,
  Sparkles,
};

export default async function ServiceSubPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  // Generate FAQ Schema for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "provider": {
      "@type": "Organization",
      "name": "Pixarrow",
      "url": "https://pixarrow.com"
    },
    "description": service.heroDescription,
    "areaServed": "Global",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": service.title,
      "itemListElement": service.deliverables.map((d, idx) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": d.title,
          "description": d.desc
        }
      }))
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg text-white pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Schema Injection */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Ambient Radial Background Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] bg-[#7C3AED]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50vw] h-[50vw] bg-[#FF007A]/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Cyber Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-grid-pattern z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-semibold text-white/50 mb-6 sm:mb-8 overflow-x-auto whitespace-nowrap pb-1">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/30 shrink-0" />
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/30 shrink-0" />
          <span className="text-[#00DFD8]">{service.slug}</span>
        </div>

        {/* HERO SECTION: 2-COLUMN SERVICE ARCHITECTURE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-24">
          
          {/* Left Column */}
          <div className="flex flex-col items-start lg:col-span-7">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/40 text-[#C084FC] text-xs font-black uppercase tracking-widest mb-4 sm:mb-6 shadow-[0_0_20px_rgba(124,58,237,0.3)] backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A855F7] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A855F7]" />
              </span>
              <span>{service.badge}</span>
            </div>

            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[3.8rem] font-black tracking-tight leading-[1.08] sm:leading-[1.04] text-white mb-4 sm:mb-6">
              {service.title}
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-white/80 mb-6 sm:mb-8 max-w-2xl leading-relaxed font-normal">
              {service.heroDescription}
            </p>

            {/* CTAs */}
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
                <span>Estimate Project Cost</span>
              </Link>
            </div>

            {/* Guarantee Row */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[10px] sm:text-xs text-white/70 font-medium">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                Signed NDA in 24h
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1.5 text-purple-300 font-semibold">
                <Lock className="w-3.5 h-3.5" />
                100% IP &amp; Code Ownership
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1.5 text-cyan-300 font-semibold">
                <Clock className="w-3.5 h-3.5" />
                15-Day Trial Guarantee
              </span>
            </div>

          </div>

          {/* Right Column: Performance & ROI Radar Card */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#7C3AED]/30 via-[#FF007A]/25 to-[#00DFD8]/20 blur-[75px] rounded-full pointer-events-none" />

            {/* Chassis */}
            <div className="relative w-full rounded-3xl p-1 sm:p-1.5 bg-gradient-to-b from-white/20 via-white/5 to-white/10 border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.85)] backdrop-blur-3xl overflow-hidden">
              <div className="rounded-2xl bg-[#09021a]/90 p-4 sm:p-6 border border-white/10">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00DFD8] animate-pulse" />
                    <span className="text-[11px] font-mono font-black text-white uppercase tracking-wider">
                      PROVEN PERFORMANCE BENCHMARK
                    </span>
                  </div>
                  <span className="text-[9px] font-mono text-emerald-300 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 font-bold">
                    VERIFIED
                  </span>
                </div>

                {/* Metrics Stack */}
                <div className="space-y-3">
                  {service.roiStats.map((st) => (
                    <div key={st.label} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition-all">
                      <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00DFD8] via-white to-[#FF007A]">
                        {st.value}
                      </div>
                      <div className="text-xs font-bold text-white mt-1">{st.label}</div>
                      <div className="text-[11px] text-white/50 mt-0.5 leading-relaxed">{st.desc}</div>
                    </div>
                  ))}
                </div>

                {/* Footer SLA */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/60">
                  <span className="flex items-center gap-1 text-cyan-300">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Sprint SLA: 4–6 Weeks</span>
                  </span>
                  <span className="text-emerald-400 font-bold">ENTERPRISE GRADE</span>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* DELIVERABLES & ARCHITECTURAL CAPABILITIES */}
        <div className="py-16 border-t border-white/5">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
              What We Deliver
            </h2>
            <p className="text-sm sm:text-base text-white/60 max-w-xl mx-auto">
              Engineered with modern practices, modular design, and robust test coverage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {service.deliverables.map((item) => {
              const Icon = iconMap[item.iconName] || Globe;
              return (
                <div
                  key={item.title}
                  className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-brand-purple/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#7C3AED]/10 border border-[#7C3AED]/30 flex items-center justify-center text-[#A855F7] mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* TECH STACK HONEYCOMB */}
        <div className="py-16 border-t border-white/5">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
              Technology Ecosystem & Frameworks
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              Battle-tested technologies selected for long-term scalability and zero tech debt.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {service.techStack.map((tech) => (
              <div
                key={tech}
                className="px-5 py-2.5 rounded-2xl bg-[#0c051a] border border-white/10 text-white font-bold text-sm shadow-md hover:border-[#7C3AED] hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* 4-STEP AGILE DELIVERY ROADMAP */}
        <div className="py-16 border-t border-white/5">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
              Our 4-Step Engineering Sprint
            </h2>
            <p className="text-sm text-white/60">
              Clear milestone checkpoints with continuous live staging previews.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-black text-brand-purple mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-black text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-white/60 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FREQUENTLY ASKED QUESTIONS (SEO RICH SNIPPETS) */}
        <div className="py-16 border-t border-white/5">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-white/60">
              Everything you need to know about our engineering and engagement framework.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {service.faqs.map((faq) => (
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

        {/* BOTTOM HIGH-CONVERTING CTA BANNER */}
        <div className="mt-12 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#1b073a] via-[#100324] to-[#0c051a] border border-[#7C3AED]/40 shadow-[0_20px_60px_rgba(124,58,237,0.25)] text-center relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#FF007A]/20 blur-[80px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Ready to Accelerate Your {service.tagline}?
            </h2>
            <p className="text-sm sm:text-base text-white/70 mb-8 leading-relaxed">
              Book a 30-minute discovery call with our Lead Architect or calculate your project scope instantly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/book"
                className="px-8 py-4 bg-gradient-to-r from-[#7C3AED] to-[#FF007A] text-white font-bold rounded-full shadow-glow-purple hover:scale-105 active:scale-95 transition-all"
              >
                Start Your Project
              </Link>
              <Link
                href="/calculator"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-full transition-all"
              >
                Estimate Scope & Budget
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
