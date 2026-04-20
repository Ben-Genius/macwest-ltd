"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "@studio-freight/lenis";

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
      autoResize: true,
    });

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Global resize handler to ensure Lenis recalculates dynamically
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });
    // Observing documentElement tends to be more reliable in Next.js
    resizeObserver.observe(document.documentElement);
    resizeObserver.observe(document.body);

    // Some dynamic elements (images, lazy loaders) might slip past ResizeObserver
    const mutationObserver = new MutationObserver(() => {
      lenis.resize();
    });
    mutationObserver.observe(document.body, { 
      childList: true, 
      subtree: true,
      attributes: true,
      attributeFilter: ["style", "class"] 
    });

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      mutationObserver.disconnect();
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
