"use client";

import { motion } from "framer-motion";
import { Gauge, Target, TrendingUp } from "lucide-react";

const benefits = [
  {
    title: "Maximum Value",
    description: "We focus on what actually moves the needle, avoiding bloated processes that waste time and budget.",
    icon: <Gauge className="w-6 h-6 text-[#00F2FF]" />,
    className: "col-span-12 md:col-span-4",
  },
  {
    title: "High Conversion",
    description: "Every pixel is engineered to capture attention and drive users towards your primary conversion goals.",
    icon: <Target className="w-6 h-6 text-[#FF00FF]" />,
    className: "col-span-12 md:col-span-4",
  },
  {
    title: "Scalable Growth",
    description: "Built on a foundation that scales with your business, from your first visitor to your first million.",
    icon: <TrendingUp className="w-6 h-6 text-[#FF8C00]" />,
    className: "col-span-12 md:col-span-4",
  },
];

export default function CoreBenefits() {
  return (
    <section className="py-24 px-6 relative z-10 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-8 max-w-4xl text-neutral-900 leading-[0.9] italic">
            Designed to empower early-stage <span className="text-gradient">disruptors.</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-12 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`p-10 rounded-[3rem] border border-black/5 bg-white shadow-xl group hover:shadow-2xl transition-all duration-500 ${benefit.className}`}
            >
              <div className="w-16 h-16 rounded-[1.5rem] bg-brand-soft border border-black/5 flex items-center justify-center mb-10 group-hover:scale-110 transition-all duration-500 shadow-sm">
                {benefit.icon}
              </div>
              <h3 className="text-3xl font-black mb-4 tracking-tighter text-neutral-900 leading-none italic">{benefit.title}</h3>
              <p className="text-neutral-500 text-lg leading-relaxed font-medium">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
