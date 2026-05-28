"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ lerp: 0.08, wheelMultiplier: 0.9 });
    lenis.on("scroll", ScrollTrigger.update);
    const updateLenis = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    gsap.utils.toArray<HTMLElement>(".industrial-section").forEach((section) => {
      gsap.fromTo(
        section.querySelectorAll("h2, article, .metal-panel, blockquote"),
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.06,
          scrollTrigger: { trigger: section, start: "top 78%" },
        },
      );
    });

    return () => {
      gsap.ticker.remove(updateLenis);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      lenis.destroy();
    };
  }, []);

  return null;
}
