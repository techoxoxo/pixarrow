"use client";

import { motion } from "framer-motion";

const blocks = [
  { step: "01", title: "The Need", desc: "We identify the core friction points and business objectives that are holding your growth back." },
  { step: "02", title: "The Strategy", desc: "Mapping out a technical and visual roadmap that prioritizes velocity and performance." },
  { step: "03", title: "The Design", desc: "Crafting a high-fidelity visual identity that resonates with your target audience on an emotional level." },
  { step: "04", title: "The Result", desc: "A world-class digital flagship that is systematically engineered to drive conversions from day one." },
];

export default function Methodology() {
  return (
    <section className="py-24 px-6 relative z-10">
       <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
             {blocks.map((b, i) => (
                <motion.div
                  key={b.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex flex-col gap-6"
                >
                   <div className="text-4xl font-black text-[#00F2FF]/20">{b.step}</div>
                   <h3 className="text-2xl font-bold tracking-tight">{b.title}</h3>
                   <p className="text-lg text-white/40 leading-relaxed font-sans">{b.desc}</p>
                </motion.div>
             ))}
          </div>
       </div>
    </section>
  );
}
