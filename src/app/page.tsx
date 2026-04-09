import Hero from "@/components/Hero";
import CoreBenefits from "@/components/CoreBenefits";
import BentoGrid from "@/components/BentoGrid";
import Process from "@/components/Process";
import PricingSection from "@/components/PricingSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import LogoCloud from "@/components/LogoCloud";
import HomeClientWrapper from "@/components/HomeClientWrapper";
import { generateDynamicMetadata } from "@/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return await generateDynamicMetadata("/");
}

export default function Home() {
  return (
    <HomeClientWrapper>
      {/* Background Decor - capped to avoid mobile overflow */}
      <div className="bg-parallax absolute top-[10%] left-0 w-[min(600px,80vw)] h-[min(600px,80vw)] bg-brand-purple/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="bg-parallax absolute top-[60%] right-0 w-[min(800px,80vw)] h-[min(800px,80vw)] bg-brand-orange/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10">
        
        {/* HERO */}
        <div className="relative z-20">
            <Hero />
        </div>
        
        {/* TRANSITION */}
        <div className="w-full bg-brand-white py-24 relative z-40 border-t border-black/5">
            <div className="max-w-7xl mx-auto px-6">
                <LogoCloud />
            </div>
        </div>

        {/* SLIDE: LIGHT THEME */}
        <div className="pin-section z-30 min-h-screen py-20 md:py-0 md:h-screen md:overflow-hidden flex items-center justify-center bg-brand-soft relative">
            <CoreBenefits />
        </div>

        {/* CONTENT */}
        <div className="relative bg-brand-bg z-50">
            <div className="reveal-section py-20 px-6">
                <BentoGrid />
            </div>

            <div className="relative bg-neutral-900 border-t border-white/5">
                <Process />
            </div>

            <div className="reveal-section py-20">
                <PricingSection />
            </div>

            <div className="reveal-section py-20 bg-brand-soft text-brand-bg">
                <Testimonials />
            </div>

            <div className="reveal-section py-20">
                <FAQ />
            </div>
        </div>
      </div>
    </HomeClientWrapper>
  );
}
