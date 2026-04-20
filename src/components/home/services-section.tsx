"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { m, useScroll, useTransform, useInView } from "framer-motion";
import { HardHat, Zap, Building2, Droplets, Wrench, ArrowRight } from "lucide-react";
import { GSAPReveal } from "@/components/ui/gsap-reveal";
import { GSAPStaggerText } from "@/components/ui/gsap-stagger-text";

const services = [
  {
    icon: HardHat,
    title: "Building Construction",
    description: "Commercial, residential and industrial buildings from foundation to fit-out.",
    href: "/services",
  },
  {
    icon: Zap,
    title: "MEP Solutions",
    description: "Mechanical, electrical, and plumbing systems engineered for reliability.",
    href: "/services",
  },
  {
    icon: Building2,
    title: "Housing Estates",
    description: "End-to-end residential estate development — planning to handover.",
    href: "/services",
  },
  {
    icon: Droplets,
    title: "Water & Sanitation",
    description: "Borehole drilling, water treatment, and sanitation infrastructure.",
    href: "/services",
  },
  {
    icon: Wrench,
    title: "Project Management",
    description: "Full site supervision, procurement, and quality assurance.",
    href: "/services",
  },
];

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const isGridInView = useInView(gridRef, { once: true, margin: "-8% 0px" });

  return (
    <section ref={sectionRef} className="relative py-18 sm:py-26 bg-white overflow-hidden">
      <div className="mx-auto max-w-[95rem] px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <GSAPReveal delay={0.1} y={20}>
            <p className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-gold-600 mb-4">
              What we build
            </p>
          </GSAPReveal>

          <GSAPStaggerText
            text="Engineering solutions. Built to standard."
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.02em] text-navy-900 leading-[1.08]"
            wordClassName="text-brand-600"
            stagger={0.06}
            duration={1}
          />

          <GSAPReveal delay={0.4} y={30}>
            <p className="mt-6 text-lg text-navy-600 font-medium leading-relaxed max-w-2xl">
              From infrastructure to fit-out, we cover the full construction lifecycle —
              backed by rigorous testing and verified credentials.
            </p>
          </GSAPReveal>
        </div>

        {/* Bento grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Featured large card */}
          <m.div
            initial={{ opacity: 0, y: 50 }}
            animate={isGridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="sm:col-span-2 lg:col-span-1 lg:row-span-2 group relative bg-black/5 p-[1px] min-h-[400px] [clip-path:polygon(0_0,100%_0,100%_calc(100%-48px),calc(100%-48px)_100%,0_100%)] cursor-pointer"
          >
            <div className="relative w-full h-full bg-white flex flex-col justify-between overflow-hidden [clip-path:polygon(0_0,100%_0,100%_calc(100%-48px),calc(100%-48px)_100%,0_100%)]">
              <m.div
                style={{ y: parallaxY }}
                className="absolute inset-x-0 -inset-y-10 z-0"
              >
                <Image
                  src="/images/IMG_9861-scaled.jpg.jpeg"
                  alt="Civil engineering project"
                  fill
                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </m.div>

              <div className="absolute inset-0 bg-white/70 backdrop-blur-md z-[1]" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/50 to-white/30 z-[1]" />

              <div className="relative z-10 p-8 sm:p-10 flex flex-col h-full justify-between">
                <div>
                  <m.div
                    className="size-14 bg-brand-600 flex items-center justify-center mb-8 shadow-brand"
                    whileHover={{ scale: 1.1, rotate: -8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 18 }}
                  >
                    <Building2 className="size-7 text-white" />
                  </m.div>
                  <h3 className="font-display text-3xl font-bold text-navy-900 tracking-[-0.02em] leading-tight">
                    Civil Engineering
                  </h3>
                  <p className="mt-4 text-navy-700 font-medium leading-relaxed text-sm">
                    Roads, drainage, earthworks, and infrastructure projects built to international
                    standards across Ghana and Sub-Saharan Africa.
                  </p>
                </div>
                <Link
                  href="/services"
                  className="mt-8 inline-flex items-center justify-center gap-2 text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 shadow-brand transition-all group-hover:gap-3 duration-300 py-3.5 px-6"
                >
                  Explore service <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </m.div>

          {/* Service cards — staggered entrance + hover lift */}
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <m.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isGridInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.08 + i * 0.09,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } }}
                className="group relative bg-gold-400/10 border-[0.1] border-gold-500 p-[1px] shadow-sm hover:shadow-card [clip-path:polygon(0_0,100%_0,100%_calc(100%-48px),calc(100%-48px)_100%,0_100%)] cursor-pointer"
              >
                <div className="w-full h-full flex flex-col gap-6 p-8 bg-white group-hover:bg-sand-50/50 transition-colors duration-300 [clip-path:polygon(0_0,100%_0,100%_calc(100%-48px),calc(100%-48px)_100%,0_100%)]">
                  <m.div
                    className="size-12 bg-white flex items-center justify-center border border-black/5 group-hover:bg-brand-50 group-hover:border-brand-100 transition-colors duration-300"
                    whileHover={{ scale: 1.15, rotate: -6 }}
                    transition={{ type: "spring", stiffness: 400, damping: 18 }}
                  >
                    <Icon className="size-6 text-brand-600" />
                  </m.div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-navy-900 tracking-[-0.01em]">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm text-navy-600 font-medium leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <m.div
                    className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 w-fit"
                    initial={false}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-800 transition-colors"
                    >
                      Learn more <ArrowRight className="size-4" />
                    </Link>
                  </m.div>
                </div>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
