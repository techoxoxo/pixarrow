"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Pixarrow delivered exactly what we needed. A high-performance site that reflects our brand perfectly and was built in record time.",
    author: "Founder of Tobiko",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
  },
  {
    quote: "The attention to detail and smooth animations make our product stand out. Highly recommended for any serious startup.",
    author: "CTO at Quotient AI",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200",
  },
  {
    quote: "Working with them was a breeze. They understood our vision and executed it flawlessly. Our conversion rate has jumped 40%.",
    author: "CEO at Aampe",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 relative z-10 w-full" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-20 text-center italic text-neutral-900 leading-none">
          Trusted by <br/><span className="text-gradient underline decoration-brand-purple/20">Innovators.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 rounded-[2.5rem] border border-black/5 bg-white shadow-xl flex flex-col justify-between hover:scale-[1.02] transition-transform duration-500"
            >
              <p className="text-xl text-neutral-600 italic mb-8 font-medium leading-relaxed">
                &quot;{t.quote}&quot;
              </p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full border-2 border-brand-purple/20 shadow-sm" />
                <div>
                  <div className="font-black text-xs uppercase tracking-widest text-neutral-900">{t.author}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
