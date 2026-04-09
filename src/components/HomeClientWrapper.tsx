"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomeClientWrapper({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const isMobile = window.innerWidth < 768;
    
    // 1. PINNED INTRO
    const pinningSections = gsap.utils.toArray(".pin-section");
    pinningSections.forEach((section: any, i: number) => {
        if (isMobile) return; // Skip pinning on mobile
        if (i === pinningSections.length - 1 && pinningSections.length > 1) return;

        ScrollTrigger.create({
            trigger: section,
            start: "top top",
            pin: true,
            pinSpacing: false,
            scrub: true,
        });

        gsap.to(section, {
            opacity: 0.2,
            scale: 0.95,
            scrollTrigger: {
                trigger: section,
                start: "bottom top",
                end: "bottom -50%",
                scrub: true
            }
        });
    });

    // 2. NORMAL REVEALS
    const revealedSections = gsap.utils.toArray(".reveal-section");
    revealedSections.forEach((section: any) => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1.5,
            ease: "expo.out",
            scrollTrigger: {
                trigger: section,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });
    });

    // 3. AMBIENT PARALLAX
    gsap.to(".bg-parallax", {
        y: -150,
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true
        }
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-brand-bg relative">
        {children}
    </div>
  );
}
