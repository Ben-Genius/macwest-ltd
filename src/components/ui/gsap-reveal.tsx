"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger globally once
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface GSAPRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  opacity?: number;
  scale?: number;
  rotate?: number;
  scrub?: boolean | number;
}

export function GSAPReveal({
  children,
  className = "",
  delay = 0,
  duration = 1.2,
  y = 50,
  x = 0,
  opacity = 0,
  scale = 1,
  rotate = 0,
  scrub = false,
}: GSAPRevealProps) {
  const compRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!compRef.current) return;

      gsap.fromTo(
        compRef.current,
        {
          opacity: opacity,
          y: y,
          x: x,
          scale: scale,
          rotate: rotate,
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          rotate: 0,
          duration: duration,
          delay: delay,
          ease: "expo.out",
          scrollTrigger: {
            trigger: compRef.current,
            start: "top 90%",
            once: !scrub,
            scrub: scrub,
          },
        }
      );
    }, compRef);

    return () => ctx.revert();
  }, [y, x, scale, opacity, duration, delay, scrub, rotate]);

  return (
    <div ref={compRef} className={className}>
      {children}
    </div>
  );
}
