"use client";

import Image from "next/image";
import Link from "next/link";
import { m, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, TrendingUp, Users, HardHat, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { GSAPReveal } from "@/components/ui/gsap-reveal";
import { GSAPStaggerText } from "@/components/ui/gsap-stagger-text";
import { EASE } from "@/lib/animations";

const pillars = [
  {
    icon: ShieldCheck,
    stat: "Zero",
    label: "Tolerance for unsafe conditions",
    description: "Every site enforces strict safety protocols — no exceptions, no shortcuts.",
  },
  {
    icon: TrendingUp,
    stat: "100%",
    label: "Regulatory compliance target",
    description: "Full alignment with Ghana EPA, labour laws, and international best practice.",
  },
  {
    icon: Users,
    stat: "All",
    label: "Workers trained in HSE protocol",
    description: "From site labourers to project managers — every team member is HSE certified.",
  },
  {
    icon: HardHat,
    stat: "3",
    label: "ISO certifications maintained",
    description: "ISO 9001, ISO 14001, and ISO 45001 — independently audited annually.",
  },
];

export function QHSESection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Subtle parallax for the main image
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={sectionRef} className="relative border-t border-black/10 py-18 sm:py-24 bg-sand-50 overflow-hidden">

      <div className="relative z-10 mx-auto max-w-[95rem] px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left: Content */}
          <div>
            <GSAPReveal delay={0.1} y={20}>
              <p className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-gold-600 mb-4">
                Quality, Health, Safety & Environment
              </p>
            </GSAPReveal>

            <GSAPStaggerText
              text="Zero compromise on quality, health, and safety."
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.02em] text-navy-900 leading-[1.08]"
              wordClassName="text-brand-600"
              stagger={0.05}
              duration={1}
            />

            <GSAPReveal delay={0.4} y={30}>
              <p className="mt-6 text-lg text-navy-600 font-medium leading-relaxed max-w-2xl">
                Our QHSE management system is built into every stage of every project —
                not as an afterthought, but as a core operating principle.
              </p>
            </GSAPReveal>

            {/* Pillars */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {pillars.map(({ icon: Icon, stat, label, description }, i) => (
                <GSAPReveal
                  key={stat + label}
                  delay={0.1 + i * 0.1}
                  y={40}
                  duration={1.2}
                >
                  <m.div
                    className="flex flex-col gap-3 p-6 rounded-2xl bg-white border border-black/5 shadow-soft group cursor-default"
                    whileHover={{ y: -5, boxShadow: "0 12px 32px -8px oklch(0% 0 0 / 0.14)", transition: { duration: 0.25, ease: EASE.spring } }}
                  >
                    <div className="flex items-center gap-3">
                      <m.div
                        className="size-10 rounded-xl bg-sand-50 flex items-center justify-center shrink-0 border border-black/5 group-hover:bg-brand-50 transition-colors"
                        whileHover={{ scale: 1.15, rotate: -8 }}
                        transition={{ type: "spring", stiffness: 380, damping: 18 }}
                      >
                        <Icon className="size-5 text-brand-600" />
                      </m.div>
                      <span className="font-display text-3xl font-bold text-navy-900 tracking-[-0.02em]">
                        {stat}
                      </span>
                    </div>
                    <span className="text-[13px] font-bold text-navy-800 leading-snug">{label}</span>
                    <span className="text-xs text-navy-600 font-medium leading-relaxed">{description}</span>
                  </m.div>
                </GSAPReveal>
              ))}
            </div>

            <GSAPReveal
              delay={0.6}
              y={20}
              className="mt-10 flex flex-wrap items-center gap-6"
            >
              <Link
                href="/hse-policy-statement"
                className="inline-flex items-center justify-center gap-2 text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 shadow-brand transition-all px-6 py-3.5 rounded-xl"
              >
                Read our HSE Policy <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/guiding-principles"
                className="inline-flex items-center gap-2 text-sm font-bold text-navy-600 hover:text-brand-600 transition-colors"
              >
                Guiding Principles <ArrowRight className="size-4" />
              </Link>
            </GSAPReveal>
          </div>

          {/* Right: Photo collage with pure light aesthetic */}
          <div className="grid grid-cols-2 gap-4">
            {/* Large image - workers in Macwest PPE */}
            <GSAPReveal
              delay={0.1}
              duration={1.2}
              x={40}
              className="col-span-2 relative aspect-[16/10] rounded-3xl overflow-hidden shadow-elevated border border-white"
            >
              <m.div style={{ y: parallaxY }} className="absolute inset-0 scale-110">
                <Image
                  src="/images/0T6A9949.jpg.jpeg"
                  alt="Macwest construction workers in full safety gear"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </m.div>
              {/* Soft overlay gradient for bottom tag readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-md rounded-xl px-5 py-3 shadow-soft border border-white">
                <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">Full PPE Compliance</span>
              </div>
            </GSAPReveal>

            {/* Workers on scaffolding */}
            <GSAPReveal
              delay={0.3}
              duration={1.2}
              x={-30}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-card border border-white"
            >
              <Image
                src="/images/IMG_8104-scaled.jpg.jpeg"
                alt="Workers on scaffolding following safety protocols"
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, 25vw"
              />
            </GSAPReveal>

            {/* Safety briefing */}
            <GSAPReveal
              delay={0.4}
              duration={1.2}
              x={30}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-card border border-white"
            >
              <Image
                src="/images/about-us-22.jpg.jpeg"
                alt="Safety briefing on Macwest construction site"
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, 25vw"
              />
            </GSAPReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
