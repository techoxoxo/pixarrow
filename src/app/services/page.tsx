import DetailedCapabilities from "@/components/DetailedCapabilities";
import Toolkit from "@/components/Toolkit";
import CoreBenefits from "@/components/CoreBenefits";
import { generateDynamicMetadata } from "@/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return await generateDynamicMetadata("/services");
}

export default function ServicesPage() {
  return (
    <div className="pt-40 pb-20 min-h-screen relative bg-brand-soft">
      <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-brand-purple/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h1 className="text-6xl md:text-[9rem] font-black tracking-tighter mb-8 leading-[0.85] italic text-neutral-900">
          Capabilities & <br/><span className="text-gradient underline decoration-brand-purple/20">Services.</span>
        </h1>
        <p className="text-2xl text-neutral-500 max-w-3xl font-medium mb-32 leading-relaxed italic">
          From robust brand identity to high-performance web development, everything you need to scale your digital presence rapidly.
        </p>

        <DetailedCapabilities />
        
        <div className="my-40 border-t border-black/5" />
        
        <Toolkit />
        
        <div className="my-40 border-t border-black/5" />

        <div className="mb-10">
           <CoreBenefits />
        </div>
      </div>
    </div>
  );
}
