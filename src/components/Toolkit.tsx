"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Layers, Cpu, Database, Globe, ShoppingBag } from "lucide-react";

interface TechItem {
  name: string;
  category: "frontend" | "backend" | "cloud" | "ai" | "ecommerce";
  logo: string;
  tag: string;
}

const allTech: TechItem[] = [
  // Frontend
  { name: "Next.js", category: "frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", tag: "App Router / RSC" },
  { name: "React", category: "frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", tag: "React 19" },
  { name: "TypeScript", category: "frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", tag: "Strict Type Safety" },
  { name: "Angular", category: "frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", tag: "Enterprise SPA" },
  { name: "React Native", category: "frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", tag: "Cross-Platform Mobile" },
  
  // Backend
  { name: "Node.js", category: "backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", tag: "Async Engine" },
  { name: "Python", category: "backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", tag: "FastAPI / AI Backend" },
  { name: "NestJS", category: "backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg", tag: "Modular Architecture" },
  { name: "Laravel", category: "backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", tag: "Robust PHP MVC" },
  
  // AI & Data
  { name: "OpenAI", category: "ai", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg", tag: "GPT-4o & Assistants" },
  { name: "Claude AI", category: "ai", logo: "https://cdn.simpleicons.org/anthropic", tag: "Sonnet 3.5 & Opus" },
  { name: "Gemini", category: "ai", logo: "https://cdn.simpleicons.org/googlegemini", tag: "Multimodal AI" },
  { name: "Redis", category: "cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", tag: "Sub-ms In-Memory" },
  
  // Cloud & Databases
  { name: "PostgreSQL", category: "cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", tag: "Relational Scale" },
  { name: "MongoDB", category: "cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", tag: "Document Cluster" },
  { name: "Docker", category: "cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", tag: "Containerization" },
  { name: "AWS", category: "cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", tag: "Serverless & Cloud" },
  { name: "Google Cloud", category: "cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", tag: "Global Compute" },
  
  // eCommerce
  { name: "Shopify Plus", category: "ecommerce", logo: "https://cdn.simpleicons.org/shopify/96bf48", tag: "Headless Commerce" },
  { name: "WooCommerce", category: "ecommerce", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg", tag: "Custom WordPress" },
  { name: "WordPress", category: "ecommerce", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg", tag: "Headless CMS" },
];

const desktopHiveRows = [
  // ROW 1
  [
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
  ],
  // ROW 2
  [
    { name: "WooCommerce", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg" },
    { name: "Shopify", logo: "https://cdn.simpleicons.org/shopify/96bf48" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  ],
  // ROW 3
  [
    { name: "DigitalOcean", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg" },
    { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
    { name: "Claude AI", logo: "https://cdn.simpleicons.org/anthropic" },
    { name: "Gemini", logo: "https://cdn.simpleicons.org/googlegemini" },
  ]
];

export default function Toolkit() {
  const [activeTab, setActiveTab] = useState<"all" | "frontend" | "backend" | "cloud" | "ai" | "ecommerce">("all");

  const filteredTech = activeTab === "all" ? allTech : allTech.filter((t) => t.category === activeTab);

  return (
    <section className="pixarrow-stack-section py-16 sm:py-24 px-5 sm:px-8 md:px-10 lg:px-12 relative bg-transparent overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gradient-to-tr from-[#7C3AED]/20 via-[#FF007A]/15 to-[#00DFD8]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-[#A855F7] text-xs font-black uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Modern Production Arsenal</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4 leading-tight">
            Our Technology <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF007A] via-[#7C3AED] to-[#00DFD8]">Stack</span>
          </h2>
          <p className="text-xs sm:text-sm text-white/60 font-medium">
            Zero legacy debt. Built exclusively with high-throughput modern frameworks, cloud architectures, and agentic AI models.
          </p>
        </div>

        {/* MOBILE & TABLET LAYOUT (< md): Interactive Glowing Tech Matrix with Filter Pills */}
        <div className="block md:hidden">
          {/* Mobile Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-3 mb-6 px-1">
            {[
              { id: "all", label: "All Tech" },
              { id: "frontend", label: "Frontend & Mobile" },
              { id: "backend", label: "Backend & APIs" },
              { id: "ai", label: "AI & LLMs" },
              { id: "cloud", label: "Cloud & DB" },
              { id: "ecommerce", label: "eCommerce" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold shrink-0 transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-[#7C3AED] to-[#FF007A] text-white shadow-glow-purple"
                    : "bg-white/[0.05] text-white/60 hover:text-white border border-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Mobile Card Grid: 3 columns on small phones, 4 on slightly wider mobile */}
          <motion.div 
            layout
            className="grid grid-cols-2 xs:grid-cols-3 gap-2.5 sm:gap-3.5"
          >
            <AnimatePresence mode="popLayout">
              {filteredTech.map((item) => (
                <motion.div
                  key={item.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="p-3.5 rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-[#7C3AED]/50 flex flex-col items-center justify-center text-center backdrop-blur-xl shadow-lg active:scale-95 transition-all"
                >
                  <div className="w-10 h-10 mb-2.5 flex items-center justify-center">
                    <img 
                      src={item.logo} 
                      alt={item.name} 
                      loading="lazy" 
                      className="w-8 h-8 object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]" 
                    />
                  </div>
                  <div className="text-xs font-black text-white leading-tight mb-1 truncate w-full">
                    {item.name}
                  </div>
                  <div className="text-[9px] font-mono text-[#00DFD8] opacity-80 uppercase tracking-tighter truncate w-full">
                    {item.tag}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* DESKTOP LAYOUT (>= md): Honeycomb Hive */}
        <div className="hidden md:flex flex-col items-center">
          <style jsx>{`
            .hive {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              width: fit-content;
            }
            .hive-row {
              display: flex;
            }
            .hive-row:nth-child(even) {
              margin-left: 78px;
            }
            .hive-row:not(:first-child) {
              margin-top: -46px;
            }
            .cell {
              position: relative;
              width: 156px;
              height: 180px;
              flex-shrink: 0;
              cursor: pointer;
              transition: transform .22s ease, filter .22s ease;
            }
            .cell:hover {
              transform: scale(1.08);
              z-index: 10;
              filter: drop-shadow(0 0 25px rgba(124,58,237,0.5));
            }
            .cell::before {
              content: '';
              position: absolute;
              inset: 0;
              background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 156 180'%3E%3Cpolygon points='78,1 155,41 155,139 78,179 1,139 1,41' fill='%230e0524' stroke='rgba(255,255,255,0.08)' stroke-width='1.5'/%3E%3C/svg%3E") no-repeat center/100% 100%;
              transition: background .22s ease;
            }
            .cell:hover::before {
              background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 156 180'%3E%3Cpolygon points='78,1 155,41 155,139 78,179 1,139 1,41' fill='%23170a38' stroke='rgba(124,58,237,0.6)' stroke-width='1.5'/%3E%3C/svg%3E") no-repeat center/100% 100%;
            }
            .cell-content {
              position: absolute;
              inset: 0;
              z-index: 2;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              gap: 9px;
            }
            .cell-content img {
              width: 48px;
              height: 48px;
              object-fit: contain;
              filter: drop-shadow(0 4px 10px rgba(0,0,0,0.5));
            }
            .label {
              font-size: 11.5px;
              font-weight: 700;
              color: #ffffff;
              opacity: 0.85;
              text-align: center;
              line-height: 1.3;
            }
            .cell:hover .label {
              opacity: 1;
              color: #A855F7;
            }
          `}</style>

          <div className="hive">
            {desktopHiveRows.map((row, i) => (
              <div key={i} className="hive-row gap-0">
                {row.map((item) => (
                  <div key={item.name} className="cell group">
                    <div className="cell-content">
                      <img src={item.logo} alt={item.name} loading="lazy" />
                      <span className="label uppercase tracking-wider">{item.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

