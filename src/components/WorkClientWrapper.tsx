"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WorkClientWrapper({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax Title
    gsap.to(".big-title", {
       xPercent: -30,
       scrollTrigger: {
          trigger: ".big-title",
          start: "top bottom",
          end: "bottom top",
          scrub: 1
       }
    });

    const projects = gsap.utils.toArray(".project-item");
    projects.forEach((item: any) => {
        gsap.to(item.querySelector(".project-image"), {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
                trigger: item,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            }
        });

        gsap.from(item.querySelector(".project-info"), {
            opacity: 0,
            y: 50,
            duration: 1.5,
            ease: "expo.out",
            scrollTrigger: {
                trigger: item,
                start: "top 80%",
            }
        });
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-brand-bg relative overflow-x-hidden">
        {children}
    </div>
  );
}
