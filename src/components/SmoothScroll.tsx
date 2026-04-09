"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    const isMobile = window.innerWidth < 768;

    const lenis = new Lenis({
      duration: isMobile ? 1.0 : 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: isMobile ? 1.5 : 2,
      infinite: false,
    });

    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    // Initial refresh to ensure correct layout measurements
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    // Global Section Snapping
    // DISABLED on mobile to avoid "hard" scroll feel
    const getSnapPoints = () => {
      if (isMobile) return null;
      
      const sections = gsap.utils.toArray<HTMLElement>(".snap-section");
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (sections.length === 0 || scrollHeight <= 0) return null;
      
      return sections
        .filter(sec => sec.offsetHeight > window.innerHeight * 0.3) 
        .map(sec => {
          const rect = sec.getBoundingClientRect();
          const absoluteTop = rect.top + window.scrollY;
          return absoluteTop / scrollHeight;
        });
    };

    const mainST = ScrollTrigger.create({
      start: 0,
      end: "max",
      snap: isMobile ? undefined : {
        snapTo: (value) => {
          const points = getSnapPoints();
          if (!points || points.length === 0) return value;
          
          const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (scrollHeight <= 0) return value;
          
          const closest = gsap.utils.snap(points, value);
          const threshold = 100 / scrollHeight; 
          if (Math.abs(closest - value) > threshold) return value;
          
          return closest;
        },
        duration: { min: 0.4, max: 1.0 },
        delay: 0.1,
        ease: "power2.inOut"
      }
    });

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateLenis);
      mainST.kill();
    };
  }, []);

  return <>{children}</>;
}
