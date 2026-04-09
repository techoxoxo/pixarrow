"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01.",
    title: "Brand Alignment",
    items: ["Discovery workshop and assets collection", "Validating the visual direction", "Sitemap and wireframes"],
  },
  {
    num: "02.",
    title: "High-Fidelity Designs",
    items: ["Custom page designs in Figma", "Diagrams and product visualizations", "Bespoke icons and imagery"],
  },
  {
    num: "03.",
    title: "Web Development",
    items: ["Development, based on the approved designs", "Custom animations and interactions", "CMS setup, integrations"],
  },
  {
    num: "04.",
    title: "Website Delivery",
    items: ["Performance, accessibility & SEO optimization", "CMS / Editor training session", "DNS setup & launch"],
  },
];

export default function Process() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  // Still use Framer for the rocket as it's already perfectly tuned
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.25) setActiveStep(0);
    else if (latest < 0.5) setActiveStep(1);
    else if (latest < 0.75) setActiveStep(2);
    else setActiveStep(3);
  });

  // Rocket travels continuously across ALL 4 steps
  const rocketY = useTransform(scrollYProgress, [0, 1], ["0vh", "-58vh"]);
  const flameOpacity = useTransform(scrollYProgress, [0, 0.04, 0.95, 1], [0, 1, 1, 0.3]);
  const flameHeight = useTransform(scrollYProgress, [0, 0.08, 0.4, 0.7, 1], ["0px", "80px", "120px", "100px", "80px"]);
  const smokeOpacity = useTransform(scrollYProgress, [0, 0.06, 0.85, 1], [0, 0.7, 0.7, 0]);
  const smokeHeight = useTransform(scrollYProgress, [0, 0.08, 1], ["0px", "60px", "480px"]);

  // GSAP for Section Snapping within the h-[450vh]
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      snap: {
        snapTo: [0, 0.33, 0.66, 1], // Snap to the 4 steps
        duration: { min: 0.2, max: 0.8 },
        delay: 0.1,
        ease: "power2.inOut"
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="h-[450vh] relative z-10" id="process">
      {/* Full-viewport sticky panel */}
      <div className="sticky top-0 h-screen flex flex-col md:flex-row overflow-hidden">

        {/* Left: Launchpad */}
        <div className="w-full md:w-1/2 hidden md:flex flex-col relative overflow-hidden">
          <div className="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-[0.04]">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="border-r border-white h-full" />
            ))}
          </div>

          <div className="absolute inset-0 flex items-end justify-center">
            
            <motion.div
              style={{ opacity: smokeOpacity, height: smokeHeight }}
              className="absolute bottom-[18%] left-1/2 -translate-x-1/2 z-[15] origin-bottom w-20"
            >
              <div className="absolute inset-0 w-20 mx-auto bg-gradient-to-t from-white/15 via-white/8 to-transparent rounded-full blur-[14px]" />
              <div className="absolute inset-0 w-8 mx-auto bg-gradient-to-t from-white/25 via-brand-purple/10 to-transparent rounded-full blur-[6px]" />
              <div className="absolute bottom-0 w-10 h-20 left-1/2 -translate-x-1/2 bg-brand-purple/20 rounded-full blur-[10px]" />
            </motion.div>

            <motion.div
              style={{ y: rocketY }}
              className="relative z-20 flex flex-col items-center mb-[18%]"
            >
              <Rocket
                className="w-36 h-36 -rotate-45 z-20"
                strokeWidth={0.9}
                style={{
                  color: "var(--color-brand-purple)",
                  fill: "#08051a",
                  filter:
                    "drop-shadow(0 0 10px var(--color-brand-purple)) drop-shadow(0 0 28px rgba(101, 45, 232, 0.6)) drop-shadow(0 0 50px rgba(101, 45, 232, 0.3))",
                }}
              />
              <motion.div
                style={{ opacity: flameOpacity }}
                className="absolute top-[88%] left-1/2 -translate-x-1/2 origin-top z-10 flex items-start justify-center"
              >
                <motion.div style={{ height: flameHeight }} className="absolute w-10 bg-gradient-to-b from-brand-purple/40 via-brand-cyan/20 to-transparent rounded-full blur-[10px]" />
                <motion.div style={{ height: flameHeight }} className="absolute w-6 bg-gradient-to-b from-brand-purple/80 via-brand-purple/30 to-transparent rounded-full blur-[5px]" />
                <motion.div style={{ height: flameHeight }} className="absolute w-2.5 bg-gradient-to-b from-white via-brand-purple to-transparent rounded-full blur-[2px]" />
              </motion.div>
            </motion.div>

            <div className="absolute bottom-[-10%] w-[160%] h-[28%] bg-gradient-to-t from-[#0F011E] to-[#1A0B3A] rounded-[100%] opacity-90 z-30" />
            <div className="absolute bottom-[-15%] w-[130%] h-[22%] bg-[#2A0D5E] rounded-[100%] opacity-35 blur-[12px] z-10" />
          </div>
        </div>

        {/* Right: Step content — vertical slide */}
        <div className="w-full md:w-1/2 relative flex flex-col">
          <span className="absolute top-10 left-10 lg:left-20 text-brand-purple font-black tracking-widest text-xs uppercase z-40">
            The Blueprint
          </span>

          <div className="flex-1 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ y: 70, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -70, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-0 flex flex-col justify-center px-10 lg:px-20"
              >
                <div className="flex items-baseline gap-4 mb-8 flex-wrap">
                  <span className="text-brand-purple text-6xl lg:text-8xl font-black tracking-[-0.04em] leading-none">
                    {steps[activeStep].num}
                  </span>
                  <h2 className="text-4xl lg:text-7xl font-black tracking-tighter text-white italic leading-none">
                    {steps[activeStep].title}
                  </h2>
                </div>
                
                <ul className="space-y-6">
                  {steps[activeStep].items.map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-white/50 text-lg lg:text-2xl font-medium group">
                      <div className="w-8 h-8 rounded-full bg-brand-purple/10 flex items-center justify-center shrink-0 group-hover:bg-brand-purple/20 transition-colors">
                        <Check className="w-4 h-4 text-brand-purple" />
                      </div>
                      <span className="group-hover:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress Indicators */}
          <div className="absolute bottom-10 left-10 lg:left-20 flex gap-3">
             {steps.map((_, i) => (
               <div 
                 key={i} 
                 className={`h-0.5 transition-all duration-500 rounded-full ${i === activeStep ? "w-12 bg-brand-purple" : "w-6 bg-white/10"}`} 
               />
             ))}
          </div>
        </div>

      </div>
    </section>
  );
}
