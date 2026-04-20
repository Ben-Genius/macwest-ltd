"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { m, useInView } from "framer-motion";
import { GSAPReveal } from "@/components/ui/gsap-reveal";
import { GSAPStaggerText } from "@/components/ui/gsap-stagger-text";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const reasons = [
  {
    stat: "14+",
    unit: "Years",
    heading: "Over a decade of proven delivery.",
    body: "Since 2011, Macwest has completed infrastructure, housing, and MEP projects across Ghana — on time, on budget, to specification.",
    points: [
      "GIIF and Government of Ghana project experience",
      "World Bank and donor-funded project track record",
      "Consistent quality across all project scales",
    ],
    image: "/images/IMG_2913-scaled.jpg.jpeg",
    flip: false,
  },
  {
    stat: "ISO³",
    unit: "Certifications",
    heading: "Triple certified. Zero compromise.",
    body: "We hold ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 — verifiable proof that our quality, environmental, and safety management systems meet global benchmarks.",
    points: [
      "ISO 9001:2015 — Quality Management",
      "ISO 14001:2015 — Environmental Management",
      "ISO 45001:2018 — Occupational Health & Safety",
    ],
    image: "/images/0T6A9895.jpg.jpeg",
    flip: true,
  },
  {
    stat: "50+",
    unit: "Projects",
    heading: "Scale that speaks for itself.",
    body: "From borehole drilling programmes serving thousands of Ghanaians to multi-storey commercial developments — our portfolio covers the breadth of the built environment.",
    points: [
      "Rural water & sanitation infrastructure",
      "Commercial and residential construction",
      "Roads, earthworks, and drainage works",
    ],
    image: "/images/IMG_8104-scaled.jpg_2.jpeg",
    flip: false,
  },
];

function ReasonRow({ reason, i }: { reason: (typeof reasons)[0]; i: number }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rowRef, { once: true, margin: "-12% 0px" });

  const textX = reason.flip ? 60 : -60;
  const imgX = reason.flip ? -60 : 60;

  return (
    <div
      ref={rowRef}
      className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
        reason.flip ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Text side */}
      <m.div
        initial={{ opacity: 0, x: textX }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col gap-6"
      >
        {/* Stat badge */}
        <m.div
          className="flex items-baseline gap-2"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.15, duration: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <span className="font-display text-5xl sm:text-6xl font-bold text-brand-600 tracking-[-0.03em]">
            {reason.stat}
          </span>
          <span className="text-lg font-semibold text-navy-400 uppercase tracking-widest">
            {reason.unit}
          </span>
        </m.div>

        <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 tracking-[-0.02em] leading-tight max-w-md">
          {reason.heading}
        </h3>
        <p className="text-navy-600 font-medium leading-relaxed max-w-md">{reason.body}</p>

        <div className="space-y-3 pt-4 border-t border-brand-100">
          {reason.points.map((point, pi) => (
            <m.div
              key={point}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.25 + pi * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <CheckCircle2 className="size-5 text-brand-600 mt-0.5 shrink-0" />
              <span className="text-sm font-semibold text-navy-700">{point}</span>
            </m.div>
          ))}
        </div>

        {i === 0 && (
          <m.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.45, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/about-us"
              className="inline-flex items-center gap-2 text-sm font-bold text-white bg-brand-600 shadow-brand hover:bg-brand-700 transition-colors w-fit group mt-4 px-6 py-3.5 rounded-xl"
            >
              Our story <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </m.div>
        )}
      </m.div>

      {/* Visual side */}
      <m.div
        initial={{ opacity: 0, x: imgX }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.1, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-light shadow-elevated border border-white p-2"
        whileHover={{ scale: 1.015, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
      >
        <div className="w-full h-full rounded-2xl overflow-hidden relative">
          <Image
            src={reason.image}
            alt={reason.heading}
            fill
            className="object-cover transition-transform duration-700 hover:scale-[1.04]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
        </div>
      </m.div>
    </div>
  );
}

export function WhyMacwestSection() {
  return (
    <section className="relative py-28 sm:py-36 bg-white overflow-hidden">
      <div className="mx-auto max-w-[95rem] px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <div className="max-w-3xl text-left mb-24">
          <GSAPReveal delay={0.1} y={20}>
            <p className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-gold-600 mb-4">
              Why choose Macwest
            </p>
          </GSAPReveal>

          <GSAPStaggerText
            text="Engineering Precision."
            className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold tracking-[-0.02em] text-navy-900 leading-[1.05]"
            wordClassName="text-brand-600"
            stagger={0.06}
            duration={1.2}
          />

          <GSAPReveal delay={0.4} y={30}>
            <p className="mt-6 text-lg text-navy-600 font-medium leading-relaxed max-w-2xl">
              A legacy built on precision, quality, and rigorous standards. We turn architectural blueprints into concrete reality.
            </p>
          </GSAPReveal>
        </div>

        {/* Alternating split rows */}
        <div className="space-y-32">
          {reasons.map((reason, i) => (
            <ReasonRow key={reason.stat} reason={reason} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
