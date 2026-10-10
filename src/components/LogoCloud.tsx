"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { defaultPartners, PartnerItem } from "@/data/partnersData";
import { ExternalLink, Sparkles } from "lucide-react";

interface LogoCloudProps {
  initialPartners?: PartnerItem[];
}

export default function LogoCloud({ initialPartners }: LogoCloudProps) {
  const partners = initialPartners && initialPartners.length > 0 ? initialPartners : defaultPartners;
  const publishedPartners = partners.filter(p => p.status !== 'draft');

  // Multi-Entity SEO Schema Graph for Google Knowledge Graph
  const partnersJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://pixarrow.com/#client-partners",
    "name": "Trusted Clients & Innovative Brands Engineered by Pixarrow",
    "description": "Selected client portfolio, institutional partners, and innovative startups engineered by Pixarrow Digital Growth & Web Engineering Agency.",
    "itemListElement": publishedPartners.map((partner, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "Organization",
        "name": partner.name,
        "description": partner.description || `${partner.name} - Technology and digital growth client of Pixarrow`,
        "url": partner.websiteUrl || (partner.caseStudySlug ? `https://pixarrow.com/case-study/${partner.caseStudySlug}` : "https://pixarrow.com"),
        ...(partner.caseStudySlug ? {
          "sameAs": `https://pixarrow.com/case-study/${partner.caseStudySlug}`
        } : {})
      }
    }))
  };

  return (
    <section 
      aria-label="Trusted Clients & Brand Partners" 
      className="w-full py-14 sm:py-18 bg-brand-bg relative z-40 border-b border-white/5"
    >
      {/* Google SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(partnersJsonLd) }}
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12">
        <div className="text-center mb-8 sm:mb-12">
          <p className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-black tracking-[0.25em] text-white/40 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse" />
            <span>Trusted by Innovative Brands &amp; Startups</span>
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-8 sm:gap-x-12 md:gap-x-14 gap-y-6 sm:gap-y-8">
          {publishedPartners.map((partner, index) => {
            const hasCaseStudy = Boolean(partner.caseStudySlug);
            const targetUrl = hasCaseStudy 
              ? `/case-study/${partner.caseStudySlug}` 
              : partner.websiteUrl || null;

            const content = partner.isImage ? (
              <div className="relative h-8 sm:h-10 w-28 sm:w-36 opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 filter drop-shadow-[0_0_12px_rgba(255,255,255,0.08)]">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} - Trusted client of Pixarrow Web Engineering Agency`}
                  fill
                  className="object-contain"
                />
              </div>
            ) : (
              <div 
                className={`${partner.style || "font-sans font-bold text-white/70 text-lg md:text-xl"} select-none transition-all duration-300 hover:text-white filter drop-shadow-[0_0_10px_rgba(255,255,255,0.05)] tracking-wide`}
              >
                {partner.logo}
              </div>
            );

            return (
              <motion.div
                key={partner._id || partner.name + index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="group relative"
              >
                {targetUrl ? (
                  <Link
                    href={targetUrl}
                    {...(hasCaseStudy ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                    title={`${partner.name}${partner.industry ? ` — ${partner.industry}` : ''}`}
                    className="block p-2 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95"
                  >
                    {content}
                    
                    {/* Interactive SEO Micro-Badge on Hover */}
                    {partner.industry && (
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 z-50 whitespace-nowrap">
                        <span className="px-2.5 py-1 rounded-full bg-[#0e061e]/95 border border-purple-500/30 text-[9px] font-bold text-purple-300 shadow-xl backdrop-blur-md flex items-center gap-1">
                          {hasCaseStudy && <Sparkles className="w-2.5 h-2.5 text-cyan-300" />}
                          <span>{partner.industry}</span>
                          {hasCaseStudy && <span className="text-cyan-400 ml-0.5">• Case Study</span>}
                        </span>
                      </div>
                    )}
                  </Link>
                ) : (
                  <div className="p-2 select-none hover:scale-105 transition-transform">
                    {content}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
