"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Check, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  "Full-Stack Web & Mobile Apps",
  "AI & Machine Learning Integration",
  "Cloud Infrastructure (AWS/GCP)",
  "Performance Marketing & Growth",
  "Specialized Product Engineering",
  "Dedicated DevOps & CI/CD",
  "Enterprise UI/UX Design",
  "24/7 Tech Support & Maintenance",
];

export default function PricingSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.to(".pricing-glow", {
        yPercent: -50,
        xPercent: 20,
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });

    gsap.from(".pricing-feature", {
        opacity: 0,
        x: 20,
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".pricing-feature-list",
            start: "top 80%"
        }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-16 sm:py-20 px-5 sm:px-8 md:px-10 lg:px-12 bg-brand-bg relative z-10 overflow-hidden w-full" id="pricing">
      <div className="max-w-[1440px] mx-auto">
         <div className="text-center mb-12 sm:mb-20 px-2 sm:px-6">
            <h2 className="text-4xl sm:text-6xl lg:text-[7rem] font-black text-white italic tracking-tighter mb-4 sm:mb-8 leading-tight sm:leading-none">
              Global <br className="hidden sm:inline"/> <span className="text-gradient underline decoration-brand-purple/20">Solutions.</span>
            </h2>
            <p className="text-base sm:text-xl text-white/40 font-medium max-w-xl mx-auto">
              Full-cycle product engineering for enterprise scale and startup velocity.
            </p>
         </div>

         <div className="relative">
            {/* Parallax Glow */}
            <div className="pricing-glow absolute -top-40 -right-40 w-[600px] h-[600px] bg-brand-purple/10 blur-[150px] rounded-full pointer-events-none z-[-1]" />
            
            <div className="relative p-6 sm:p-12 lg:p-20 rounded-3xl sm:rounded-[3.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl shadow-3xl overflow-hidden group hover:border-brand-purple/30 transition-colors duration-700">
               
               <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
                  <div className="flex-1 lg:flex-2 text-left w-full">
                     <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple/10 border border-brand-purple/20 mb-6 sm:mb-8">
                        <Rocket className="w-3.5 h-3.5 text-brand-purple" />
                        <span className="text-[11px] font-black tracking-widest uppercase text-brand-purple">Full-Cycle Engineering</span>
                     </div>
                     <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tighter mb-4 sm:mb-8 leading-[1.15] sm:leading-[1.1] text-white italic">
                       Enterprise-grade delivery, at startup speed.
                     </h3>
                     <p className="text-sm sm:text-lg lg:text-xl text-white/50 leading-relaxed font-medium mb-8 sm:mb-12 max-w-lg">
                        From MVP development to complex cloud-native architectures, we deliver robust software systems that drive real business value.
                     </p>
                     
                     <div className="flex flex-col sm:flex-row gap-5 items-stretch sm:items-center">
                        <Link href="/book" className="inline-flex items-center justify-center gap-3 sm:gap-5 px-8 sm:px-12 py-4 sm:py-6 bg-brand-purple text-white rounded-full font-black text-base sm:text-xl hover:scale-105 active:scale-95 transition-transform shadow-glow-purple">
                            <span>Start Project</span>
                            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                        </Link>
                        
                        <div className="flex -space-x-3 sm:-space-x-4 items-center justify-center sm:justify-start pt-2 sm:pt-0">
                           {[1,2,3,4].map(i => (
                              <div key={i} className="w-9 h-9 sm:w-12 sm:h-12 rounded-full border-2 border-brand-bg bg-neutral-800 overflow-hidden shrink-0">
                                 <img src={`https://i.pravatar.cc/150?u=${i+10}`} alt="Client" />
                              </div>
                           ))}
                           <div className="pl-3 sm:pl-4 text-[10px] sm:text-xs font-bold text-white/50 uppercase tracking-wider sm:tracking-widest">
                             Trusted by 50+ Global Teams
                           </div>
                        </div>
                     </div>
                  </div>
                  
                  <div className="flex-1 w-full lg:pl-16 lg:border-l border-white/5 pricing-feature-list">
                     <div className="text-[10px] font-black tracking-[0.25em] text-white/30 uppercase mb-6 sm:mb-10 text-left">
                       Included Capabilities
                     </div>
                     <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5 sm:gap-5">
                        {features.map((f, i) => (
                           <li key={i} className="pricing-feature flex items-center gap-3 sm:gap-4 text-white/70 font-bold text-sm sm:text-base group/item">
                               <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/item:border-brand-purple/50 group-hover/item:bg-brand-purple/10 transition-all">
                                  <Check className="w-4 h-4 text-brand-purple" strokeWidth={3} />
                               </div>
                               <span className="group-hover/item:text-white transition-colors leading-snug">{f}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </section>
  );
}
