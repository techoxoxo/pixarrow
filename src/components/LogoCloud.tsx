"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "Tobiko", logo: "TOBIKO" },
  { name: "Quotient AI", logo: "QUOTIENT" },
  { name: "Aampe", logo: "AAMPE" },
  { name: "Lumenstream", logo: "LUMEN" },
  { name: "Start2coin", logo: "S2C" },
  { name: "DayByDay", logo: "DBD" },
];

export default function LogoCloud() {
  return (
    <div className="w-full">
      <p className="text-center text-xs font-black tracking-[0.3em] text-brand-bg/20 uppercase mb-10">
        Trusted by ambitious founders at
      </p>
      <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 px-6 opacity-60 hover:opacity-100 transition-opacity duration-500">
        {partners.map((partner) => (
          <div key={partner.name} className="text-2xl font-black tracking-tighter text-brand-bg whitespace-nowrap italic">
            {partner.logo}
          </div>
        ))}
      </div>
    </div>
  );
}
