"use client";

import { ZoomParallax } from "@/components/ui/zoom-parallax";
import { GSAPReveal } from "@/components/ui/gsap-reveal";
import { GSAPStaggerText } from "@/components/ui/gsap-stagger-text";

const visionImages = [
  {
    src: "/images/IMG_2913-scaled.jpg.jpeg",
    alt: "Commercial Building Construction site showcasing Macwest precision",
  },
  {
    src: "/images/IMG_8104-scaled.jpg.jpeg",
    alt: "Housing Estate Development in Accra",
  },
  {
    src: "/images/DJI_20240911144011_0234_D_PARZIAIR.jpg_1.jpeg",
    alt: "Aerial view of Community Sports Complex",
  },
  {
    src: "/images/IMG_2813-scaled.jpg_1.jpeg",
    alt: "Civil engineering project site in Western Region",
  },
  {
    src: "/images/IMG_4741-scaled.jpg.jpeg",
    alt: "Offshore Support Vessel Operations in the Gulf of Guinea",
  },
  {
    src: "/images/IMG_4738-scaled.jpg.jpeg",
    alt: "Industrial steel infrastructure at project site",
  },
  {
    src: "/images/IMG_9861-scaled.jpg.jpeg",
    alt: "Infrastructure foundation work and concrete engineering",
  },
];

export function VisionParallaxSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Introduction text for the experience */}
      <div className="relative h-[30vh] max-w-[95rem] mx-auto flex flex-col items-start justify-center text-center px-24 bg-white">
        <div className="max-w-3xl text-left">
          <GSAPReveal delay={0.1} y={20}>
            <p className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-gold-600 mb-4">
              Visual Experience
            </p>
          </GSAPReveal>

          <GSAPStaggerText
            text="Engineering the Future."
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.02em] text-navy-900 leading-[1.08]"
            wordClassName="text-brand-600"
            stagger={0.08}
            duration={1.2}
          />

          <GSAPReveal delay={0.4} y={30}>
            <p className="mt-6 text-lg text-navy-600 font-medium leading-relaxed max-w-2xl mx-auto">
              A deep dive into the blueprint of Ghana&apos;s evolving landscape, delivered
              with precision and verifiable quality.
            </p>
          </GSAPReveal>
        </div>

        {/* Decorative arrow indicating scroll */}
        <GSAPReveal delay={0.8} opacity={0} duration={1.5} className="mt-12 animate-bounce flex flex-col items-center gap-2">
          <span className="text-[10px] font-bold text-navy-400 uppercase tracking-widest">Scroll to dive</span>
          <div className="h-px w-6 bg-brand-200" />
        </GSAPReveal>
      </div>

      <ZoomParallax images={visionImages} />

      {/* Outro / Bridge text */}
      <div className="relative h-[2vh] bg-white flex items-start justify-center">
        <div className="h-px w-[90%] max-w-7xl bg-navy-50" />
      </div>
    </section>
  );
}
