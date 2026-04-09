import AboutPhilosophy from "@/components/AboutPhilosophy";
import Stats from "@/components/Stats";
import SocialShowcase from "@/components/SocialShowcase";
import AboutClientWrapper from "@/components/AboutClientWrapper";
import { generateDynamicMetadata } from "@/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return await generateDynamicMetadata("/about");
}

export default function AboutPage() {
  return (
    <AboutClientWrapper>
      {/* Background Ambience */}
      <div className="about-orb absolute top-20 right-[-10%] w-[800px] h-[800px] bg-brand-orange/5 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10">
        
        {/* SLIDE: BRAND HERO */}
        <div className="about-pin h-screen flex flex-col justify-center px-6 bg-brand-bg relative z-20 pt-20">
            <div className="max-w-7xl mx-auto w-full">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
                   <span className="text-xs font-semibold tracking-widest text-[#FF00FF] uppercase">Born to Scale</span>
                </div>
                <h1 className="text-7xl md:text-[9rem] font-black tracking-tighter mb-10 leading-[0.8] italic underline decoration-brand-purple/20">
                    Built for <br /> <span className="text-gradient">Disruption.</span>
                </h1>
                <p className="text-2xl text-white/40 font-medium mb-12 leading-relaxed max-w-2xl">
                    We are a high-decibel digital growth unit that operates with startup velocity and tier-1 precision.
                </p>
            </div>
        </div>

        {/* SLIDE: PHILOSOPHY */}
        <div className="about-pin h-screen flex items-center justify-center px-6 bg-neutral-950 relative z-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto w-full">
                <AboutPhilosophy />
            </div>
        </div>

        {/* CONTINUOUS: MISSION & PILLARS - LIGHT THEME */}
        <div className="relative z-30 bg-brand-soft">
            <section className="py-40 px-6 about-reveal">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
                   <div className="bg-white border border-black/5 shadow-xl p-12 rounded-[4rem] group hover:shadow-2xl transition-all duration-500">
                      <div className="text-brand-purple font-black text-xs uppercase tracking-[0.4em] mb-4">Core Focus</div>
                      <h2 className="text-5xl font-black tracking-tight mb-8 text-neutral-900 italic leading-none">Absolute <br/> Precision.</h2>
                      <p className="text-neutral-500 text-xl leading-relaxed font-medium">
                        Focusing on pure, high-performance code and design, eliminating the noise of traditional agency processes.
                      </p>
                   </div>
                   
                   <div className="bg-white border border-black/5 shadow-xl p-12 rounded-[4rem] group hover:shadow-2xl transition-all duration-500">
                      <div className="text-brand-cyan font-black text-xs uppercase tracking-[0.4em] mb-4">Performance</div>
                      <h2 className="text-5xl font-black tracking-tight mb-8 text-neutral-900 italic leading-none">Velocity <br/> Core.</h2>
                      <p className="text-neutral-500 text-xl leading-relaxed font-medium">
                        Moving at hyper-speed ensuring your MVP feels like a finished flagship-grade system from Day 1.
                      </p>
                   </div>
                </div>
            </section>

            {/* THE ARCHITECTS - DARK FOR IMPACT */}
            <section className="py-40 px-6 about-reveal overflow-hidden relative bg-brand-bg">
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                    <h2 className="text-[15vw] font-black tracking-tighter opacity-[0.03] absolute top-20 right-0 whitespace-nowrap italic uppercase text-white">THE ARCHITECTS</h2>
                </div>
                
                <div className="max-w-7xl mx-auto space-y-60 pt-20">
                    {/* Anuj */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-center">
                        <div className="md:col-span-6">
                            <h2 className="text-7xl font-black tracking-tighter mb-8 italic leading-none text-white">Anuj <span className="text-gradient">Sharma</span></h2>
                            <p className="text-2xl text-white/40 leading-relaxed font-medium max-w-md">The strategist. Merging psychology with high-end digital aesthetics.</p>
                        </div>
                        <div className="md:col-span-6 relative aspect-[4/5] rounded-[5rem] overflow-hidden border border-white/5 shadow-3xl">
                            <img src="/6g38mfg1psrmy0cwpptrqn6c0m.png" className="w-full h-full object-cover grayscale brightness-90 hover:brightness-100 transition-all duration-700" />
                        </div>
                    </div>

                    {/* Ankit */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-center">
                        <div className="md:col-span-6 md:order-2">
                            <h2 className="text-7xl font-black tracking-tighter mb-8 italic leading-none text-white">Ankit <span className="text-gradient">Rajput</span></h2>
                            <p className="text-2xl text-white/40 leading-relaxed font-medium max-w-md">The engine. Engineering digital foundations that scale effortlessly.</p>
                        </div>
                        <div className="md:col-span-6 md:order-1 relative aspect-[4/5] rounded-[5rem] overflow-hidden border border-white/5 shadow-3xl">
                            <img src="/WhatsApp Image 2026-04-09 at 10.35.59.jpeg" className="w-full h-full object-cover grayscale brightness-90 hover:brightness-100 transition-all duration-700" />
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER METRICS */}
            <div className="about-reveal bg-neutral-900 py-40">
               <div className="max-w-7xl mx-auto px-6">
                    <Stats />
                    <div className="mt-40">
                        <SocialShowcase />
                    </div>
               </div>
            </div>
        </div>
      </div>
    </AboutClientWrapper>
  );
}
