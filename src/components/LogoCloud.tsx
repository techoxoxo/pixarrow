"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "Cahrz", logo: "Cahrz", style: "font-sans font-bold text-white/70 text-xl md:text-2xl" },
  { name: "Aust Gov", logo: "AUST GOV", style: "font-mono font-bold tracking-wide text-white/50 text-sm md:text-base" },
  { name: "Lay", logo: "LAY.", style: "font-serif font-black tracking-tighter text-white/70 text-2xl md:text-3xl italic" },
  { name: "Kit", logo: "KIT.", style: "font-sans font-extrabold tracking-widest text-white/60 text-lg md:text-xl" },
  { name: "Torque", logo: "TORQUE", style: "font-sans font-bold tracking-tight text-white/70 text-lg md:text-xl uppercase" },
  { name: "Corque", logo: "CORQUE", style: "font-sans font-medium tracking-widest text-white/60 text-lg md:text-xl uppercase" },
  { name: "End", logo: "END.", style: "font-sans font-black tracking-[0.2em] text-white/75 text-base md:text-lg" },
];

export default function LogoCloud() {
  return (
    <div className="w-full py-16 bg-brand-bg relative z-40">
      <p className="text-center text-[10px] font-black tracking-[0.3em] text-white/30 uppercase mb-10">
        Trusted by innovative brands & startups
      </p>
      <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 px-6 max-w-7xl mx-auto">
        {partners.map((partner) => (
          <div 
            key={partner.name} 
            className={`${partner.style} select-none transition-all duration-300 hover:text-white hover:scale-105 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.05)]`}
          >
            {partner.logo}
          </div>
        ))}
      </div>
    </div>
  );
}
