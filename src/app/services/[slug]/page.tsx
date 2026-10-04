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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} | Pixarrow Engineering`,
    description: service.subtitle,
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
    <div className="min-h-screen bg-brand-bg text-white pt-32 pb-24 px-6 relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-semibold text-white/50 mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/30" />
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/30" />
          <span className="text-[#00DFD8]">{service.slug}</span>
        </div>

        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-[#A855F7] text-xs font-black uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
              <span>{service.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.08] mb-6">
              {service.title}
            </h1>

            <p className="text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed mb-8">
              {service.heroDescription}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/book"
                className="px-8 py-4 bg-gradient-to-r from-[#7C3AED] to-[#FF007A] hover:opacity-95 text-white text-base font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-glow-purple flex items-center justify-center gap-2"
              >
                <span>Schedule Strategy Call</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/calculator"
                className="px-8 py-4 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/30 text-white text-base font-bold rounded-full transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4 text-amber-300" />
                <span>Estimate Project Cost</span>
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

          {/* Right Hero Sticky Card: Quick ROI Snapshot */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#15072e] to-[#0a0217] border border-white/10 backdrop-blur-2xl shadow-2xl">
            <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">
              Proven Performance Metrics
            </div>
            <div className="space-y-4">
              {service.roiStats.map((st) => (
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
