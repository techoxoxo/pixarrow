"use client";

import { useEffect, ReactNode } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on("scroll", ScrollTrigger.update);

    // Initial refresh to ensure correct layout measurements
    ScrollTrigger.refresh();

    // Global Section Snapping
    // We query elements inside a function or re-run on pathname change
    const getSnapPoints = () => {
      const sections = gsap.utils.toArray<HTMLElement>("section, .snap-section");
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (sections.length === 0 || scrollHeight <= 0) return null;
      
      return sections
        .filter(sec => sec.offsetHeight > window.innerHeight * 0.5) // Only snap to substantial sections
        .map(sec => {
          const rect = sec.getBoundingClientRect();
          const absoluteTop = rect.top + window.scrollY;
          return absoluteTop / scrollHeight;
        });
    };

    ScrollTrigger.create({
      start: 0,
      end: "max",
      snap: {
        snapTo: (value) => {
          const points = getSnapPoints();
          if (!points || points.length === 0) return value;
          
          const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (scrollHeight <= 0) return value;
          
          const closest = gsap.utils.snap(points, value);
          // Only snap if we are within 150px of a snap point to avoid unwanted jumps
          const threshold = 150 / scrollHeight; 
          if (Math.abs(closest - value) > threshold) {
            return value; // Stay where we are
          }
          
          return closest;
        },
        duration: { min: 0.5, max: 1.2 },
        delay: 0.6,
        ease: "power3.inOut"
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
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [pathname]);

  return <>{children}</>;
}
