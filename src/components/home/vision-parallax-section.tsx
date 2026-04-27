"use client";

import { useRef } from "react";
import { m, useInView } from "framer-motion";
import { ZoomParallax } from "@/components/ui/zoom-parallax";
import { GSAPStaggerText } from "@/components/ui/gsap-stagger-text";
import { GSAPReveal } from "@/components/ui/gsap-reveal";
import { scaleIn, fadeInUp } from "@/lib/animations";

const visionImages = [
  { src: "/images/IMG_2913-scaled.jpg.jpeg", alt: "Commercial Building Construction site showcasing Macwest precision" },
  { src: "/images/IMG_8104-scaled.jpg.jpeg", alt: "Housing Estate Development in Accra" },
  { src: "/images/DJI_20240911144011_0234_D_PARZIAIR.jpg_1.jpeg", alt: "Aerial view of Community Sports Complex" },
  { src: "/images/1.webp", alt: "Civil engineering project site in Western Region" },
  { src: "/images/4.webp", alt: "Offshore Support Vessel Operations in the Gulf of Guinea" },
  { src: "/images/5.webp", alt: "Industrial steel infrastructure at project site" },
  { src: "/images/Cement.jpg.jpeg", alt: "Infrastructure foundation work and concrete engineering" },
  { src: "/images/6.webp", alt: "Infrastructure foundation work and concrete engineering" },
];

/* ── Scroll-cue arrow ─────────────────────────────────────────── */
function ScrollCue() {
  const ref = useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isInView = useInView(ref, { once: true, margin: "-40px" as any });

  return (
    <m.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className="mt-10 flex flex-col items-start gap-2"
    >
      {/* Pulsing dot + line */}
      <div className="flex items-center gap-3">
        <m.span
          className="size-1.5 rounded-full bg-brand-500 block"
          animate={{ opacity: [1, 0.3, 1], scale: [1, 1.4, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="text-[10px] font-bold text-navy-400 uppercase tracking-widest">
          Scroll to dive
        </span>
      </div>
      <m.div
        className="h-8 w-px bg-gradient-to-b from-brand-400 to-transparent ml-[2.5px]"
        animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        style={{ originY: 0 }}
      />
    </m.div>
  );
}

export function VisionParallaxSection() {
  const ref = useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isInView = useInView(ref, { once: true, margin: "-60px" as any });

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Ambient background orb */}
      1

      {/* Intro text */}
      <div
        ref={ref}
        className="relative h-[28vh] sm:h-[30vh] max-w-[95rem] mx-auto flex flex-col items-start justify-center px-6 sm:px-12 lg:px-24 bg-white"
      >
        <div className="max-w-xl sm:max-w-2xl lg:max-w-3xl text-left">
          {/* Label */}
          <m.p
            variants={scaleIn}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-gold-600 mb-4"
          >
            Visual Experience
          </m.p>

          {/* Headline */}
          <GSAPStaggerText
            text="Engineering the Future."
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.02em] text-navy-900 leading-[1.08]"
            wordClassName="text-brand-600"
            stagger={0.08}
            duration={1.2}
          />

          {/* Body */}
          <GSAPReveal delay={0.4} y={30}>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-navy-600 font-medium leading-relaxed max-w-xl">
              A deep dive into the blueprint of Ghana&apos;s evolving landscape, delivered with precision and verifiable quality.
            </p>
          </GSAPReveal>

          <ScrollCue />
        </div>
      </div>

      {/* Zoom parallax grid */}
      <ZoomParallax images={visionImages} />

    </section>
  );
}
