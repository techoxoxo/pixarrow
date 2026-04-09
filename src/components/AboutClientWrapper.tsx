"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutClientWrapper({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. PINNED MANIFESTO
    const pinners = gsap.utils.toArray(".about-pin");
    pinners.forEach((section: any, i: number) => {
        if (i === pinners.length - 1) return;

        ScrollTrigger.create({
            trigger: section,
            start: "top top",
            pin: true,
            pinSpacing: false,
            scrub: true,
        });

        gsap.to(section, {
            opacity: 0,
            scale: 0.9,
            scrollTrigger: {
                trigger: section,
                start: "bottom top",
                end: "bottom -50%",
                scrub: true
            }
        });
    });

    // 2. PARALLAX ASSETS
    gsap.to(".about-orb", {
        y: -150,
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true
        }
    });

    // 3. REVEALS
    const reveals = gsap.utils.toArray(".about-reveal");
    reveals.forEach((section: any) => {
        gsap.from(section, {
            opacity: 0,
            y: 40,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: section,
                start: "top 85%",
            }
        });
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-brand-bg relative">
        {children}
    </div>
  );
}
