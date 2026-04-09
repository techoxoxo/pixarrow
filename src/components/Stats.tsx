"use client";

import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { label: "Years of Experience", value: "16+" },
    { label: "Projects Completed", value: "80+" },
    { label: "Award Nominations", value: "45+" },
  ];

  return (
    <section className="py-24 px-6 relative z-10">
       <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
             {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                   <div className="text-6xl md:text-7xl font-black tracking-tighter mb-4 text-gradient">{stat.value}</div>
                   <div className="text-xs font-bold tracking-[0.3em] text-white/30 uppercase">{stat.label}</div>
                </motion.div>
             ))}
          </div>
       </div>
    </section>
  );
}
