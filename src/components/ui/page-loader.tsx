"use client";

import { m, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const STORAGE_KEY = "mw_loader_v2";

export function PageLoader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show only once per browser session
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    setIsVisible(true);
    document.body.style.overflow = "hidden";
    sessionStorage.setItem(STORAGE_KEY, "1");

    const maxTimer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "";
    }, 4500);

    const dismiss = () =>
      setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = "";
      }, 500);

    if (document.readyState === "complete") {
      setTimeout(dismiss, 2500);
    } else {
      window.addEventListener("load", () => setTimeout(dismiss, 2500), { once: true });
    }

    return () => {
      clearTimeout(maxTimer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <m.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.05, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white overflow-hidden"
        >
          {/* Top accent sweep */}
          <m.div
            className="absolute top-0 left-0 right-0 h-[3px] origin-left bg-gradient-to-r from-brand-600 via-gold-400 to-brand-600"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2.8, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* SVGator animated logo — <object> lets the embedded JS player run */}
          <m.div
            initial={{ opacity: 0, scale: 0.9, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <object
              type="image/svg+xml"
              data="/loader-animate.svg"
              aria-label="Macwest"
              width={300}
              className="pointer-events-none select-none block"
              style={{ height: "auto" }}
            />
          </m.div>

          <m.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.45 }}
            className="mt-8 text-[10px] font-bold uppercase tracking-[0.3em] text-navy-300"
          >
            Loading
          </m.p>

          {/* Bottom progress line */}
          <m.div
            className="absolute bottom-0 left-0 h-[2px] bg-brand-600 origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 3.2, ease: "linear" }}
          />
        </m.div>
      )}
    </AnimatePresence>
  );
}
