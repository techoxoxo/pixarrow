"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, CheckCircle, Cpu, Cloud, Lock, Server } from "lucide-react";

export default function TrustShowcase() {
  /* 
   * Commented out 3rd party review claims (Clutch / GoodFirms / DesignRush)
   * 
  const reviews = [
    {
      platform: "Clutch",
      rating: "5.0",
      reviewsCount: "38+ Reviews",
      label: "Top App & Web Developers 2026",
      tagColor: "from-red-500/20 to-orange-500/20",
      borderColor: "border-orange-500/30",
    },
    {
      platform: "GoodFirms",
      rating: "4.9",
      reviewsCount: "42+ Reviews",
      label: "Top Digital Growth Agency",
      tagColor: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-cyan-500/30",
    },
    {
      platform: "DesignRush",
      rating: "5.0",
      reviewsCount: "Accredited",
      label: "Top Custom Software Agency",
      tagColor: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
    },
    {
      platform: "Google Reviews",
      rating: "5.0",
      reviewsCount: "Verified",
      label: "100% Client Satisfaction",
      tagColor: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/30",
    },
  ];
  */

  const complianceBadges = [
    {
      icon: Lock,
      title: "ISO 27001 Certified",
      desc: "Information Security Practices",
    },
    {
      icon: ShieldCheck,
      title: "GDPR & CCPA",
      desc: "Strict Data Privacy Protection",
    },
    {
      icon: Server,
      title: "SOC 2 Type II Ready",
      desc: "Enterprise Cloud Infrastructure",
    },
    {
      icon: Cpu,
      title: "HIPAA Compliant",
      desc: "Healthcare Grade Architecture",
    },
  ];

  const partners = [
    { name: "AWS Partner Network", sub: "Cloud Infrastructure" },
    { name: "Vercel Verified", sub: "Edge Next.js Architecture" },
    { name: "Google Cloud", sub: "AI & Vertex Integrations" },
    { name: "Shopify Plus", sub: "Enterprise eCommerce" },
    { name: "Stripe Verified", sub: "Global Payment Gateways" },
  ];

  return (
    <section className="relative py-16 px-6 bg-[#070114] border-y border-white/5 overflow-hidden">
      {/* Subtle Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#7C3AED]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#FF007A]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-[#A855F7] text-xs font-black uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5 text-amber-300" />
            <span>Institutional Trust & Engineering Accreditations</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            Engineered to Global Enterprise Standards
          </h2>
          <p className="text-sm sm:text-base text-white/60 max-w-2xl mx-auto mt-2">
            Every line of code and cloud system is built following stringent international quality, information security, and performance protocols.
          </p>
        </div>

        {/* 
         * Commented out 3rd-party review grid
         *
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.platform}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className={`relative p-5 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border ${rev.borderColor} backdrop-blur-xl shadow-lg flex flex-col justify-between`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-black text-white text-base tracking-wide">{rev.platform}</span>
                <span className="text-[10px] font-bold text-white/50 bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
                  {rev.reviewsCount}
                </span>
              </div>
              <div className="flex items-center gap-1.5 mb-2">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-black text-white ml-1">{rev.rating}</span>
                <span className="text-xs text-white/40">/ 5.0</span>
              </div>
              <p className="text-xs text-white/70 font-medium">{rev.label}</p>
            </motion.div>
          ))}
        </div>
        */}

        {/* Compliance & Security Grid */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-2xl mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-1.5 mb-1">
                <CheckCircle className="w-4 h-4" />
                Information Security & Compliance
              </span>
              <h3 className="text-xl font-black text-white">Bank-Grade Confidentiality & Intellectual Property Protection</h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                100% IP & Code Guarantee
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div key={badge.title} className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/30 flex items-center justify-center shrink-0 text-[#A855F7]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white">{badge.title}</h4>
                    <p className="text-xs text-white/50 mt-0.5">{badge.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Partner Ecosystem Ticker */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-4 px-6 rounded-2xl bg-white/[0.01] border border-white/5">
          <div className="flex items-center gap-2 shrink-0">
            <Cloud className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-bold text-white/60 uppercase tracking-wider">Official Technology Stack Ecosystem</span>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-8 gap-y-3">
            {partners.map((partner) => (
              <div key={partner.name} className="flex items-center gap-2 text-xs text-white/80 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00DFD8]" />
                <span>{partner.name}</span>
                <span className="hidden sm:inline text-[10px] text-white/40 font-normal">({partner.sub})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
