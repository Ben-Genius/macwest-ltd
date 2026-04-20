"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface GSAPStaggerTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  y?: number;
}

export function GSAPStaggerText({
  text,
  className = "",
  wordClassName = "",
  delay = 0,
  duration = 0.8,
  stagger = 0.04,
  y = 40,
}: GSAPStaggerTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current) return;
      const elements = containerRef.current.querySelectorAll(".gsap-word");

      gsap.fromTo(
        elements,
        {
          opacity: 0,
          y: y,
          rotateX: 45,
          transformOrigin: "0% 50% -50",
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: duration,
          delay: delay,
          stagger: stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [text, y, duration, delay, stagger]);

  return (
    <div ref={containerRef} className={`${className} flex flex-wrap`}>
      {words.map((word, i) => (
        <span key={i} className={`overflow-hidden inline-block pb-1`}>
          <span
            className={`gsap-word inline-block mr-[0.25em] ${wordClassName}`}
            style={{ willChange: "transform, opacity" }}
          >
            {word}
          </span>
        </span>
      ))}
    </div>
  );
}
