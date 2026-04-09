"use client";

import { motion } from "framer-motion";

const weeks = [
  { week: "01", title: "Discovery", items: ["Audit & Analysis", "Workshops", "Strategic Roadmap"] },
  { week: "02", title: "Strategy", items: ["Information Architecture", "Wireframing", "Content Strategy"] },
  { week: "03", title: "Design", items: ["UI/UX Concepting", "High-Fidelity Mocks", "Design System"] },
  { week: "04", title: "Build", items: ["Bespoke Development", "Custom Animations", "CMS Setup"] },
  { week: "05", title: "Refine", items: ["QA & Testing", "Performance Audit", "Feedback Loops"] },
  { week: "06", title: "Launch", items: ["DNS Config", "Launch Party", "Support Training"] },
];

export default function Timeline() {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-20 text-center">
          The <span className="text-gradient">6-Week</span> Sprint
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {weeks.map((item, i) => (
            <motion.div
              key={item.week}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-[2rem] border border-white/10 bg-white/[0.02] relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 text-6xl font-black text-white/5 opacity-20 group-hover:opacity-100 group-hover:text-[#00F2FF]/20 transition-all duration-700">
                 {item.week}
              </div>
              <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-[#00F2FF] transition-colors">{item.title}</h3>
              <ul className="space-y-3">
                {item.items.map((li, j) => (
                  <li key={j} className="text-white/40 text-sm font-medium flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00F2FF]/40" />
                    {li}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
