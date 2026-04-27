"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { m, useScroll, useTransform, useInView } from "framer-motion";
import { HardHat, Zap, Building2, Layers3, Package, ServerCrashIcon, ArrowRight } from "lucide-react";
import { GSAPStaggerText } from "@/components/ui/gsap-stagger-text";
import { GSAPReveal } from "@/components/ui/gsap-reveal";
import { EASE } from "@/lib/animations";

/* ─── Data ──────────────────────────────────────────────────────── */

const SERVICES = [
  {
    icon: HardHat,
    title: "Civil Construction",
    description:
      "Durable infrastructure built with precision — roads, bridges, culverts, drains, kerb laying, and buildings across Ghana and Sub-Saharan Africa.",
    href: "/services#civilconst",
    image: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A0094.jpg?resize=1200%2C800&ssl=1",
  },
  {
    icon: Building2,
    title: "Housing Estates",
    description:
      "Modern, sustainable communities — from architectural and structural designs to project supervision, balancing comfort, functionality, and long-term value.",
    href: "/services#housingestates",
    image: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/Housing-Estates12.jpg?resize=1200%2C800&ssl=1",
  },
  {
    icon: Layers3,
    title: "Concrete Works",
    description:
      "Engineered for strength, safety, and long-lasting performance — applying the highest standards for compressive strength and structural integrity.",
    href: "/services#concreteorks",
    image: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/Concrete-Works1.jpg?resize=1200%2C800&ssl=1",
  },
  {
    icon: Zap,
    title: "Mechanical, Electrical & Plumbing",
    description:
      "Integrated MEP solutions covering mechanical installations, electrical systems, and plumbing — handling simple and complex fit-outs with precision.",
    href: "/services#mechanicalelectrical",
    image: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A0406.jpg?resize=1200%2C800&ssl=1",
  },
  {
    icon: Package,
    title: "Cement Supply — Ghacem",
    description:
      "Trusted supplier of premium Ghacem cement — consistent quality and a full range of high-performance products for diverse project requirements.",
    href: "/services#cementsupply",
    image: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A0238.jpg?resize=1200%2C800&ssl=1",
  },
  {
    icon: ServerCrashIcon,
    title: "Softworks & Augmented Services",
    description:
      "Beyond construction — vocational training, leadership development, event management, branding, media, and documentary production.",
    href: "/services#softworks",
    image: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A0271.jpg?resize=1200%2C800&ssl=1",
  },
];

/* ─── Service card with hover image ────────────────────────────── */

function ServiceCard({
  service,
  index,
  featured = false,
  isInView,
}: {
  service: (typeof SERVICES)[number];
  index: number;
  featured?: boolean;
  isInView: boolean;
}) {
  const Icon = service.icon;

  return (
    <m.div
      initial={{ opacity: 0, y: 48 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.09, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } }}
      className={
        featured
          ? "sm:col-span-2 lg:col-span-1 lg:row-span-2 group relative overflow-hidden rounded-2xl border border-navy-100 cursor-pointer min-h-[420px]"
          : "group relative overflow-hidden rounded-2xl border border-navy-100 cursor-pointer"
      }
    >
      {/* Background image — reveals on hover */}
      <div className="absolute inset-0 overflow-hidden">
        <m.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          whileHover={{ scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </m.div>
        {/* Gradient overlay always present */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-7 sm:p-8 bg-white group-hover:bg-transparent transition-colors duration-500">
        <div>
          <m.div
            className="size-11 bg-brand-50 border border-brand-100 flex items-center justify-center rounded-xl mb-6 group-hover:bg-brand-600 group-hover:border-brand-600 transition-colors duration-300"
            whileHover={{ scale: 1.1, rotate: -6 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
          >
            <Icon className="size-5 text-brand-600 group-hover:text-white transition-colors duration-300" />
          </m.div>

          <h3 className="font-display text-xl sm:text-2xl font-bold text-navy-900 group-hover:text-white tracking-tight leading-tight transition-colors duration-300 mb-3">
            {service.title}
          </h3>
          <p className="text-sm text-navy-500 group-hover:text-white/80 font-medium leading-relaxed transition-colors duration-300">
            {service.description}
          </p>
        </div>

        <m.div
          className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-600 group-hover:text-white transition-colors duration-300 w-fit"
          whileHover={{ x: 4 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <Link href={service.href} className="inline-flex items-center gap-2">
            Learn more <ArrowRight className="size-4" />
          </Link>
        </m.div>
      </div>
    </m.div>
  );
}

/* ─── Main section ──────────────────────────────────────────────── */

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const imgLeftY  = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const imgRightY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isHeroInView = useInView(heroRef,  { once: true, margin: "-60px" as any });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isGridInView = useInView(gridRef,  { once: true, margin: "-8% 0px" as any });

  return (
    <section ref={sectionRef} className="relative bg-white overflow-hidden">

      {/* ══ 1 · Editorial header ════════════════════════════════════ */}
      <div className="max-w-[95rem] mx-auto px-6 sm:px-10 lg:px-16 pt-20 sm:pt-28 lg:pt-36 pb-10">
        {/* Heading + description — 2-column like the design inspiration */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-20 items-start mb-10 sm:mb-14">
          {/* Left — large display heading */}
          <div>
            <GSAPStaggerText
              text="Explore Our Services."
              className="font-display text-5xl sm:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold text-navy-950 leading-[1.05] tracking-tight"
              y={55}
              duration={1}
              stagger={0.06}
            />
          </div>

          {/* Right — description + CTA, top-aligned */}
          <GSAPReveal delay={0.35} y={25}>
            <div className="lg:max-w-[320px] lg:pt-3 text-left lg:text-right">
              <p className="text-navy-500 leading-relaxed text-sm sm:text-base mb-5">
                Our team of engineers and specialists brings decades of industry experience across civil, MEP, housing, and augmented disciplines — each certified to international ISO standards.
              </p>
              <m.div
                whileHover={{ x: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="inline-block"
              >
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-700 transition-colors"
                >
                  View all services <ArrowRight className="size-4" />
                </Link>
              </m.div>
            </div>
          </GSAPReveal>
        </div>

        {/* ══ 2 · Dual hero images ═══════════════════════════════════ */}
        <div ref={heroRef} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          {/* Left — wider image */}
          <m.div
            initial={{ opacity: 0, clipPath: "inset(0% 100% 0% 0%)" }}
            animate={isHeroInView ? { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" } : {}}
            transition={{ duration: 1.1, ease: EASE.outExpo }}
            className="relative overflow-hidden rounded-2xl flex-[1.7] min-h-[260px] sm:min-h-[340px] lg:min-h-[420px]"
          >
            <m.div style={{ y: imgLeftY }} className="absolute inset-0 scale-[1.12]">
              <Image
                src="https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A0094.jpg?resize=1600%2C1067&ssl=1"
                alt="Civil construction — Macwest project site"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 100vw, 65vw"
              />
            </m.div>
            {/* Subtle label overlay */}
            <div className="absolute bottom-4 left-4 z-10">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/80 bg-navy-900/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                Civil Construction
              </span>
            </div>
          </m.div>

          {/* Right — narrower image */}
          <m.div
            initial={{ opacity: 0, clipPath: "inset(0% 0% 0% 100%)" }}
            animate={isHeroInView ? { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" } : {}}
            transition={{ duration: 1.1, ease: EASE.outExpo, delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl flex-1 min-h-[220px] sm:min-h-[340px] lg:min-h-[420px]"
          >
            <m.div style={{ y: imgRightY }} className="absolute inset-0 scale-[1.12]">
              <Image
                src="https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/Housing-Estates12.jpg?resize=1200%2C800&ssl=1"
                alt="Housing estates — Macwest development"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 100vw, 35vw"
              />
            </m.div>
            <div className="absolute bottom-4 left-4 z-10">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/80 bg-navy-900/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                Housing Estates
              </span>
            </div>
          </m.div>
        </div>
      </div>

      {/* ══ 3 · Capability statement ════════════════════════════════ */}
      <div className="max-w-[95rem] mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-20 border-b border-navy-100">
        <div className="max-w-4xl mx-auto text-center">
          <GSAPReveal delay={0.1} y={20}>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-navy-400 mb-5">
              /Our Capabilities
            </p>
          </GSAPReveal>
          <GSAPStaggerText
            text="We pride ourselves on delivering certified engineering and construction excellence — combining precision, innovation, and compliance in every project we undertake."
            className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-800 leading-[1.25] tracking-tight justify-center"
            y={30}
            duration={0.85}
            stagger={0.025}
          />
        </div>
      </div>

      {/* ══ 4 · Service cards grid ══════════════════════════════════ */}
      <div className="max-w-[95rem] mx-auto px-6 sm:px-10 lg:px-16 pt-14 sm:pt-20 pb-20 sm:pb-28 lg:pb-36">
        {/* /Services label + sub-heading */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-20 items-end mb-10 sm:mb-14">
          <div>
            <GSAPReveal delay={0.05} y={20}>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-navy-400 mb-4">
                /Services
              </p>
            </GSAPReveal>
            <GSAPStaggerText
              text="Tailored Engineering and Construction Solutions."
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-[1.1] tracking-tight"
              y={35}
              duration={0.9}
              stagger={0.04}
            />
          </div>
          <GSAPReveal delay={0.3} y={20}>
            <p className="lg:max-w-[280px] text-sm text-navy-500 leading-relaxed lg:text-right">
              Certified quality, health &amp; safety, and environmental management across all service lines.
            </p>
          </GSAPReveal>
        </div>

        {/* Cards */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={i}
              isInView={isGridInView}
            />
          ))}
        </div>

        {/* Discover more link */}
        <GSAPReveal delay={0.2} y={20} className="mt-10 flex justify-center">
          <m.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl border border-navy-200 text-sm font-bold text-navy-700 hover:bg-navy-950 hover:text-white hover:border-navy-950 transition-all duration-300"
            >
              Discover all services <ArrowRight className="size-4" />
            </Link>
          </m.div>
        </GSAPReveal>
      </div>
    </section>
  );
}
