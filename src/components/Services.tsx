"use client";

import { motion } from "framer-motion";
import { MonitorPlay, Megaphone, Share2, Filter, Gauge } from "lucide-react";

const services = [
  {
    title: "Web & App Development",
    description: "Next.js, Nest, Fastify, React, Angular, Python, WordPress, Shopify",
    icon: <MonitorPlay className="w-5 h-5" />,
  },
  {
    title: "Performance Marketing",
    description: "Meta Ads, Google Ads & Search Engine Marketing",
    icon: <Megaphone className="w-5 h-5" />,
  },
  {
    title: "Social Media Management",
    description: "Content Strategy, Engagement & Organic Growth",
    icon: <Share2 className="w-5 h-5" />,
  },
  {
    title: "Conversion Optimization",
    description: "CRO Audit, UX Design & High-Converting Landing Pages",
    icon: <Filter className="w-5 h-5" />,
  },
  {
    title: "Analytics & Automation",
    description: "Web Tracking, Dashboard Setup, Integration & Scaling",
    icon: <Gauge className="w-5 h-5" />,
  },
];

export default function Services() {
  return (
    <section className="py-16 px-6 relative z-10 w-full bg-brand-bg" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-3xl bg-[#0f0728]/50 border border-white/5 backdrop-blur-md flex flex-col justify-between items-start min-h-[190px] group transition-all duration-300 hover:border-[#7C3AED]/40 hover:bg-[#0f0728] hover:shadow-[0_15px_30px_rgba(124,58,237,0.1)]"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/20 flex items-center justify-center text-[#A855F7] group-hover:bg-[#7C3AED] group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>

              {/* Text Container */}
              <div className="mt-6 w-full text-left">
                <h3 className="text-base font-black text-white leading-snug group-hover:text-[#A855F7] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-xs text-white/50 mt-2 font-medium tracking-wide font-sans">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
