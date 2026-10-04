import Hero from "@/components/Hero";
import Services from "@/components/Services";
import StopScaling from "@/components/StopScaling";
import OurWork from "@/components/OurWork";
import Process from "@/components/Process";
import StatsBanner from "@/components/StatsBanner";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import LogoCloud from "@/components/LogoCloud";
import TrustShowcase from "@/components/TrustShowcase";
import ShowreelSection from "@/components/ShowreelSection";
import HomeClientWrapper from "@/components/HomeClientWrapper";
import { generateDynamicMetadata } from "@/lib/seo";
import { Metadata } from "next";
import dbConnect from "@/lib/mongodb";
import Project from "@/models/Project";

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return await generateDynamicMetadata("/");
}

export default async function Home() {
  let dynamicProjects: any[] = [];
  try {
    await dbConnect();
    const dbProjects = await Project.find({ status: 'published' })
      .sort({ featured: -1, order: 1, createdAt: -1 })
      .limit(8)
      .lean();
    if (dbProjects && dbProjects.length > 0) {
      dynamicProjects = JSON.parse(JSON.stringify(dbProjects));
    }
  } catch (err) {
    console.error("Home page projects fetch note:", err);
  }

  return (
    <HomeClientWrapper>
      {/* Background Decor - soft ambient glows */}
      <div className="bg-parallax absolute top-[10%] left-0 w-[min(600px,80vw)] h-[min(600px,80vw)] bg-brand-purple/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="bg-parallax absolute top-[50%] right-0 w-[min(800px,80vw)] h-[min(800px,80vw)] bg-brand-magenta/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="bg-parallax absolute top-[80%] left-10 w-[min(700px,80vw)] h-[min(700px,80vw)] bg-[#00DFD8]/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10">
        
        {/* HERO */}
        <div className="relative z-20">
          <Hero />
        </div>
        
        {/* LOGO CLOUD */}
        <div className="relative z-30 border-t border-white/5">
          <LogoCloud />
        </div>

        {/* INSTITUTIONAL TRUST & ACCREDITATIONS */}
        <div className="reveal-section relative z-30">
          <TrustShowcase />
        </div>

        {/* BRAND CINEMA & WHAT WE DO SHOWREEL */}
        <div className="reveal-section relative z-30 border-t border-white/5">
          <ShowreelSection />
        </div>

        {/* SERVICES */}
        <div className="reveal-section relative z-30 border-t border-white/5">
          <Services />
        </div>

        {/* STOP SCROLLING START SCALING */}
        <div className="reveal-section relative z-30 border-t border-white/5">
          <StopScaling />
        </div>

        {/* OUR WORK */}
        <div className="reveal-section relative z-30 border-t border-white/5">
          <OurWork initialProjects={dynamicProjects} />
        </div>

        {/* PROCESS */}
        <div className="reveal-section relative z-30 border-t border-white/5">
          <Process />
        </div>

        {/* STATS BANNER */}
        <div className="reveal-section relative z-30">
          <StatsBanner />
        </div>

        {/* TESTIMONIALS */}
        <div className="reveal-section relative z-30 border-t border-white/5">
          <Testimonials />
        </div>

        {/* FAQ & CTA */}
        <div className="reveal-section relative z-30 border-t border-white/5">
          <FAQ />
        </div>

      </div>
    </HomeClientWrapper>
  );
}
