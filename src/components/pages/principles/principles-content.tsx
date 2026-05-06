"use client";

import { useRef } from "react";
import type { Variants } from "framer-motion";
import Image from "next/image";
import {
  m,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { GSAPStaggerText } from "@/components/ui/gsap-stagger-text";
import {
  staggerContainer,
  fadeInUp,
  scaleIn,
  EASE,
} from "@/lib/animations";

const PRINCIPLES = [
  {
    title: "Focus on Quality",
    desc: "Quality is the hallmark of every Macwest project. We adhere to rigorous standards and utilize premium materials to ensure lasting value.",
  },
  {
    title: "Integrity Above All",
    desc: "We conduct our business with absolute transparency and honesty, building trust with clients, partners, and communities.",
  },
  {
    title: "Safety First",
    desc: "Our 'Zero Harm' policy ensures that the health and safety of our people and the public is never compromised.",
  },
  {
    title: "Sustainable Innovation",
    desc: "We embrace contemporary engineering solutions that minimize environmental impact while maximizing efficiency.",
  },
  {
    title: "Community Impact",
    desc: "Every project is an opportunity to uplift the local community through employment, training, and infrastructure.",
  },
  {
    title: "Operational Excellence",
    desc: "We strive for precision and efficiency in every phase of our operations, from procurement to final handover.",
  },
];

const clipFromRight: Variants = {
  hidden: { clipPath: "inset(0% 0% 0% 100%)" },
  show: { clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 1.1, ease: EASE.outExpo } },
};

function Reveal({
  children,
  variants = fadeInUp,
  className,
  margin = "-80px",
}: {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  margin?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: margin as any });
  return (
    <m.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={className}
    >
      {children}
    </m.div>
  );
}

function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <m.div
        style={{ y, position: "absolute", top: -60, left: 0, right: 0, bottom: -60, willChange: "transform" }}
      >
        <Image src={src} alt={alt} fill className="object-cover" />
      </m.div>
    </div>
  );
}

export function PrinciplesContent() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-60px" });

  return (
    <>
      <Section theme="white" spacing="xl">
        <Container>
          <div className="max-w-3xl mb-20">
            <Reveal variants={scaleIn} className="mb-6">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-navy-200 text-[13px] font-semibold tracking-wide text-navy-600 bg-navy-50">
                Our Values
              </span>
            </Reveal>

            <GSAPStaggerText
              text="Our Guiding Principles"
              className="text-4xl sm:text-6xl font-display font-bold text-navy-900 mb-6 leading-tight"
              y={35}
              duration={0.8}
              stagger={0.04}
            />

            <Reveal variants={fadeInUp}>
              <p className="text-navy-500 text-lg sm:text-xl leading-relaxed">
                At Macwest, our principles aren't just words on a page — they are the bedrock of our culture and the compass that guides every decision we make.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-7">
              <m.div
                ref={containerRef}
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                className="grid grid-cols-1 sm:grid-cols-2 gap-8"
              >
                {PRINCIPLES.map((principle, i) => (
                  <m.div key={i} variants={fadeInUp} className="group">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="text-[10px] font-bold text-brand-500 tracking-widest tabular-nums border-b-2 border-brand-200 pb-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-xl font-bold text-navy-900 group-hover:text-brand-600 transition-colors">
                        {principle.title}
                      </h3>
                    </div>
                    <p className="text-navy-500 leading-relaxed text-sm sm:text-base">
                      {principle.desc}
                    </p>
                  </m.div>
                ))}
              </m.div>
            </div>

            <div className="lg:col-span-5 sticky top-32">
              <Reveal variants={clipFromRight}>
                <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden relative shadow-2xl">
                  <ParallaxImage
                    src="/images/img-construction.jpg"
                    alt="Guiding Principles in Action"
                  />
                  <div className="absolute inset-0 bg-navy-900/10" />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
