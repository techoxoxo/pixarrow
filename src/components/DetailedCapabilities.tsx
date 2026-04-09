"use client";

import { motion } from "framer-motion";
import { Palette, Code2, Rocket } from "lucide-react";

export default function DetailedCapabilities() {
  return (
    <section className="py-32 px-6 relative z-10">
       <div className="max-w-7xl mx-auto space-y-40">
          
          {/* Creative Design */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF00FF]/20 bg-[#FF00FF]/5 mb-8">
                   <Palette className="w-4 h-4 text-[#FF00FF]" />
                   <span className="text-xs font-black uppercase tracking-widest text-[#FF00FF]">Aesthetic Excellence</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 italic">Creative <br/>Design.</h2>
                <p className="text-xl text-white/50 leading-relaxed font-sans mb-8">
                   We don&apos;t just make things look good. We build brand identities that establish trust and authority in competitive markets.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-bold text-white/40">
                   <li>• UI/UX Strategy</li>
                   <li>• Design Systems</li>
                   <li>• Product Visualization</li>
                   <li>• Art Direction</li>
                   <li>• Custom Iconography</li>
                   <li>• Brand Audits</li>
                </ul>
             </div>
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="order-1 lg:order-2 relative aspect-square rounded-[3rem] overflow-hidden border border-white/10"
             >
               <img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=1200" alt="Creative Design segment" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
               <div className="absolute inset-0 bg-[#FF00FF]/10 mix-blend-overlay" />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-transparent to-transparent" />
             </motion.div>
          </div>

          {/* Bespoke Development */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: -0 }}
               viewport={{ once: true }}
               className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10"
             >
               <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200" alt="Bespoke Development segment" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
               <div className="absolute inset-0 bg-[#00F2FF]/10 mix-blend-overlay" />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-transparent to-transparent" />
             </motion.div>
             <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00F2FF]/20 bg-[#00F2FF]/5 mb-8">
                   <Code2 className="w-4 h-4 text-[#00F2FF]" />
                   <span className="text-xs font-black uppercase tracking-widest text-[#00F2FF]">Technical Precision</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 italic">Bespoke <br/>Development.</h2>
                <p className="text-xl text-white/50 leading-relaxed font-sans mb-8">
                   Full-stack engineering using modern tech stacks. We build sites that are lightning fast, secure, and ready to scale.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-bold text-white/40">
                   <li>• Next.js Development</li>
                   <li>• Headless CMS Setup</li>
                   <li>• Animations & GSAP</li>
                   <li>• API Integrations</li>
                   <li>• E-commerce (Stripe)</li>
                   <li>• Technical SEO</li>
                </ul>
             </div>
          </div>

          {/* Scale & Launch */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF8C00]/20 bg-[#FF8C00]/5 mb-8">
                   <Rocket className="w-4 h-4 text-[#FF8C00]" />
                   <span className="text-xs font-black uppercase tracking-widest text-[#FF8C00]">Strategic Growth</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 italic">Scale & <br/>Launch.</h2>
                <p className="text-xl text-white/50 leading-relaxed font-sans mb-8">
                   Launch is just the beginning. We provide the infrastructure and support to ensure your growth is sustainable and data-driven.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-bold text-white/40">
                   <li>• Global Deployment</li>
                   <li>• Analytics Strategy</li>
                   <li>• Performance Audits</li>
                   <li>• Post-Launch Support</li>
                   <li>• Feature Pipelines</li>
                   <li>• A/B Testing</li>
                </ul>
             </div>
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10"
             >
               <img src="https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=1200" alt="Scale and Launch segment" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
               <div className="absolute inset-0 bg-[#FF8C00]/10 mix-blend-overlay" />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-transparent to-transparent" />
             </motion.div>
          </div>

       </div>
    </section>
  );
}
