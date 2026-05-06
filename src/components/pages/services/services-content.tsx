"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Variants } from "framer-motion";
import { m, useInView, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { GSAPStaggerText } from "@/components/ui/gsap-stagger-text";
import { GSAPReveal } from "@/components/ui/gsap-reveal";
import { cn } from "@/lib/utils";
import { fadeInLeft, fadeInRight, fadeInUp, scaleIn, staggerContainer, EASE } from "@/lib/animations";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─── Data ──────────────────────────────────────────────────────── */

const SERVICES = [
  {
    number: "01",
    title: "Civil Construction",
    anchor: "civilconst",
    image: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A0094.jpg?resize=1600%2C1067&ssl=1",
    description:
      "Durable infrastructure built with precision and expertise — roads, bridges, culverts, drains, kerb laying, pavement walkways, and buildings across diverse sectors. We combine technical excellence with strict quality standards to deliver reliable solutions that stand the test of time.",
    tags: ["Roads & Bridges", "Culverts & Drains", "Pavement Works", "Buildings"],
  },
  {
    number: "02",
    title: "Housing Estates",
    anchor: "housingestates",
    image: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/Housing-Estates12.jpg?resize=1600%2C1067&ssl=1",
    description:
      "We design and develop modern, sustainable communities that balance comfort, functionality, and long-term value. From architectural and structural designs to project supervision and management, every housing development is executed with innovation and a commitment to quality living.",
    tags: ["Architectural Design", "Structural Design", "Project Supervision", "Community Planning"],
  },
  {
    number: "03",
    title: "Concrete Works",
    anchor: "concreteorks",
    image: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/Concrete-Works1.jpg?resize=1600%2C1067&ssl=1",
    description:
      "Our concrete solutions are engineered for strength, safety, and long-lasting performance. With a skilled team of experts, we execute all forms of concrete works — applying the highest standards to achieve the required compressive strength and structural integrity every project demands.",
    tags: ["Foundations", "Structural Slabs", "Retaining Walls", "Precast Elements"],
  },
  {
    number: "04",
    title: "Mechanical, Electrical & Plumbing",
    anchor: "mechanicalelectrical",
    image: "/images/img-steel-pipes.jpg",
    description:
      "Integrated MEP solutions ensuring efficiency, reliability, and seamless performance across every project. Our engineering team brings extensive experience in mechanical installations, electrical and circuit applications, and plumbing and water systems — handling both simple and complex installations.",
    tags: ["Mechanical Installations", "Electrical Systems", "Plumbing & Water", "Complex Fit-Outs"],
  },
  {
    number: "05",
    title: "Cement Supply — Ghacem",
    anchor: "cementsupply",
    image: "/images/Cement.jpg.jpeg",
    description:
      "Macwest is a trusted supplier of premium Ghacem cement, delivering consistent quality and reliability for all construction needs. We provide a full range of high-performance products tailored to diverse project requirements — ensuring durability, strength, and value.",
    tags: ["Premium Ghacem", "All Grades", "Volume Supply", "Reliable Delivery"],
  },
  {
    number: "06",
    title: "Procurement Services",
    anchor: "pservice",
    image: "/images/services/procure.png",
    description:
      "Comprehensive procurement solutions designed to support efficiency, cost-effectiveness, and reliability. Leveraging a strong supplier network, we provide seamless sourcing, purchasing, and delivery of quality materials and equipment — the right resources, at the right time.",
    tags: ["Strategic Sourcing", "Supplier Network", "Cost Efficiency", "Timely Delivery"],
  },
  {
    number: "07",
    title: "Softworks & Augmented Services",
    anchor: "softworks",
    image: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A0238.jpg?w=2048&ssl=1",
    description:
      "Beyond construction, Macwest extends value through specialised Softworks & Augmented Services — technical and vocational training, corporate leadership development, event management, branding, media coverage, and documentary production. Blending creativity with capability.",
    tags: ["Technical Training", "Leadership Dev.", "Event Management", "Branding & Media"],
    href: "/services/softworks-augmented",
  },
];

const CERTS = [
  {
    code: "ISO 9001:2015",
    name: "Quality Management System",
    desc: "Ensures consistent quality across all operations, from project planning through to delivery, meeting international benchmarks for construction excellence.",
  },
  {
    code: "ISO 14001:2015",
    name: "Environmental Management System",
    desc: "Demonstrates our commitment to minimising environmental impact through responsible practices throughout every phase of construction and procurement.",
  },
  {
    code: "ISO 45001:2018",
    name: "Occupational Health & Safety",
    desc: "Protects the health and safety of our workforce and stakeholders, ensuring every site operates to the highest globally recognised safety standards.",
  },
];

const CERT_SCOPE =
  "Building and Road Construction, Civil Engineering, General Procurement, Logistics, Haulage Services, Steel Fabrication, Modular Containers, Stakeholder Engagement and Organisation of Community Events.";

const CERT_LOGOS = [
  {
    src: "/images/tv.jpg",
    alt: "TVE CERT — Certification Body",
    width: 100,
    height: 78,
  },
  {
    src: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/08/IAF.png?fit=327%2C209&ssl=1",
    alt: "IAF — International Accreditation Forum",
    width: 120,
    height: 77,
  },

  {
    src: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-19-at-8.40.49-AM.jpeg?fit=1280%2C619&ssl=1",
    alt: "Macwest ISO Certification Badge",
    width: 120,
    height: 77,
  }
] as const;

/* ─── Animation variants ────────────────────────────────────────── */

const clipFromRight: Variants = {
  hidden: { clipPath: "inset(0% 100% 0% 0%)" },
  show: { clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 1.2, ease: EASE.outExpo } },
};

const clipFromLeft: Variants = {
  hidden: { clipPath: "inset(0% 0% 0% 100%)" },
  show: { clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 1.2, ease: EASE.outExpo } },
};

/* ─── Helpers ───────────────────────────────────────────────────── */

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isInView = useInView(ref, { once: true, margin: margin as any });
  return (
    <m.div ref={ref} variants={variants} initial="hidden" animate={isInView ? "show" : "hidden"} className={className}>
      {children}
    </m.div>
  );
}

function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-35, 35]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <m.div
        style={{ y, position: "absolute", top: -55, left: 0, right: 0, bottom: -55, willChange: "transform" }}
      >
        <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
      </m.div>
    </div>
  );
}

/* ─── Service row ───────────────────────────────────────────────── */

function ServiceRow({ service, index }: { service: (typeof SERVICES)[number]; index: number }) {
  const isEven = index % 2 === 0;
  const ref = useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isInView = useInView(ref, { once: true, margin: "-80px" as any });

  return (
    <div
      ref={ref}
      id={service.anchor}
      className="grid grid-cols-1 lg:grid-cols-2 lg:items-stretch border-t border-navy-100 last:border-b"
    >
      {/* ── Text ── */}
      <m.div
        variants={isEven ? fadeInLeft : fadeInRight}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className={cn(
          "flex flex-col justify-center px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20 bg-white order-2",
          isEven ? "lg:order-1" : "lg:order-2"
        )}
      >
        {/* Large faded number */}
        <span className="text-[5.5rem] sm:text-[8rem] font-display font-black text-navy-50 leading-none select-none -mb-4 -ml-1">
          {service.number}
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-display font-bold text-navy-900 leading-tight tracking-tight">
          {service.title}
        </h2>

        {/* Animated accent line */}
        <m.div
          className="h-[2px] bg-brand-500 rounded-full my-5 origin-left"
          style={{ width: 48 }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.7, ease: EASE.outExpo, delay: 0.3 }}
        />

        <p className="text-navy-500 leading-relaxed text-base mb-7 max-w-[42ch]">
          {service.description}
        </p>

        {/* Tag chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-semibold tracking-wide text-navy-600 bg-navy-50 border border-navy-200 px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-6 items-center">
          <m.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300, damping: 25 }}>
            <Link
              href={`/contact?service=${service.anchor}`}
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-700 transition-colors"
            >
              Enquire about this service
              <m.svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </m.svg>
            </Link>
          </m.div>

          {service.href && (
            <m.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300, damping: 25 }}>
              <Link
                href={service.href}
                className="inline-flex items-center gap-2 text-sm font-bold text-navy-900 hover:text-brand-600 transition-colors group"
              >
                Read More
                <m.svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </m.svg>
              </Link>
            </m.div>
          )}
        </div>
      </m.div>

      {/* ── Image ── */}
      <m.div
        variants={isEven ? clipFromRight : clipFromLeft}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className={cn(
          "relative min-h-[300px] sm:min-h-[420px] lg:min-h-0 order-1",
          isEven ? "lg:order-2" : "lg:order-1"
        )}
      >
        <ParallaxImage src={service.image} alt={service.title} />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/5 to-navy-900/20 pointer-events-none" />
      </m.div>
    </div>
  );
}

/* ─── Cert detail cards ─────────────────────────────────────────── */

function CertCards() {
  const ref = useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isInView = useInView(ref, { once: true, margin: "-60px" as any });

  return (
    <m.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className="grid grid-cols-1 sm:grid-cols-3 gap-4"
    >
      {CERTS.map((cert) => (
        <m.div
          key={cert.code}
          variants={fadeInUp}
          whileHover={{ y: -4, transition: { duration: 0.25, ease: EASE.spring } }}
          className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/[0.12] hover:shadow-xl transition-colors duration-300"
        >
          <m.div
            className="h-[2px] bg-brand-400 rounded-full mb-5 origin-left"
            style={{ width: 32 }}
            whileHover={{ scaleX: 1.75, backgroundColor: "#D4AF37" }}
            transition={{ duration: 0.3, ease: EASE.spring }}
          />
          <div className="text-lg font-display font-bold text-white mb-1">{cert.code}</div>
          <div className="text-[11px] font-semibold text-brand-300 uppercase tracking-wider mb-3">{cert.name}</div>
          <p className="text-sm text-navy-300 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
            {cert.desc}
          </p>
        </m.div>
      ))}
    </m.div>
  );
}

/* ─── Page ──────────────────────────────────────────────────────── */

export function ServicesContent() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageRef.current) return;
    gsap.fromTo(
      pageRef.current,
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 1.1, ease: "expo.out", clearProps: "all" }
    );
  }, []);

  return (
    <div ref={pageRef}>
      {/* ══ 1 · Editorial intro — exact design match ════════════════ */}
      <section className="bg-white overflow-hidden pt-12">
        <div className="max-w-[95rem] mx-auto px-6 sm:px-10 lg:px-16 pt-16 sm:pt-24 lg:pt-32 pb-10 sm:pb-12">

          {/* Heading row: very large left + small description top-right */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-12 mb-8 sm:mb-10">
            {/* Left — display heading */}
            <div className="flex-1 min-w-0">
              <GSAPStaggerText
                text="Explore Our Services."
                className="font-display text-4xl sm:text-5xl lg:text-[4rem] font-bold text-navy-900 leading-[1.05] tracking-tight"
                y={30}
                duration={1}
                stagger={0.05}
              />
            </div>

            {/* Right — small description, top-aligned */}
            <GSAPReveal delay={0.45} y={20}>
              <p className="text-navy-500 text-sm sm:text-base leading-relaxed lg:max-w-[660px] xl:max-w-[500px] lg:text-right lg:pt-3">
                Our team of engineers and specialists brings decades of experience across civil construction, MEP, housing estates, and augmented services — each certified to ISO standards.
              </p>
            </GSAPReveal>
          </div>

          {/* Two hero images — wider left, narrower right */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            {/* Left image — wider */}
            <m.div
              initial={{ clipPath: "inset(0% 100% 0% 0%)", opacity: 0 }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
              transition={{ duration: 1.1, ease: EASE.outExpo }}
              viewport={{ once: true }}
              className="relative flex-[1.65] min-h-[220px] sm:min-h-[320px] lg:min-h-[440px] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A0394.jpg?resize=1600%2C1067&ssl=1"
                alt="Macwest construction and procurement services"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 100vw, 62vw"
              />
            </m.div>

            {/* Right image — narrower, stacked two on mobile via a column */}
            <div className="flex flex-row sm:flex-col gap-3 sm:gap-4 flex-1">
              <m.div
                initial={{ clipPath: "inset(0% 0% 0% 100%)", opacity: 0 }}
                whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
                transition={{ duration: 1.1, ease: EASE.outExpo, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative flex-1 min-h-[160px] sm:min-h-0 sm:flex-1 rounded-2xl overflow-hidden"
              >
                <Image
                  src="https://i0.wp.com/macwest.com.gh/wp-content/uploads/2024/09/ridge-town-houses3.jpeg?resize=1200%2C800&ssl=1"
                  alt="Macwest housing estates — Ridge Town Houses"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 36vw"
                />
              </m.div>
              <m.div
                initial={{ clipPath: "inset(0% 0% 0% 100%)", opacity: 0 }}
                whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
                transition={{ duration: 1.1, ease: EASE.outExpo, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative flex-1 min-h-[160px] sm:min-h-0 sm:flex-1 rounded-2xl overflow-hidden"
              >
                <Image
                  src="https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A0271.jpg?resize=1200%2C800&ssl=1"
                  alt="Macwest augmented and softworks services"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 36vw"
                />
              </m.div>
            </div>
          </div>

          {/* Certification pill strip */}
          <Reveal variants={fadeInUp} margin="-20px" className="mt-8">
            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-navy-100">
              <span className="text-[11px] font-bold uppercase tracking-widest text-navy-400">
                ISO Certified
              </span>
              {CERTS.map((cert) => (
                <span
                  key={cert.code}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-700 bg-navy-50 border border-navy-200 rounded-full px-3 py-1"
                >
                  <span className="size-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                  {cert.code}
                </span>
              ))}
              <span className="text-[11px] text-navy-400 hidden sm:inline">
                — Building &amp; Road Construction · Civil Engineering · Procurement · Logistics
              </span>
            </div>
          </Reveal>
        </div>
      </section>



      {/* ══ 3 · Service rows — stacked editorial layout ══════════════ */}
      <Section theme="white" spacing="none">
        {SERVICES.map((service, index) => (
          <ServiceRow key={service.anchor} service={service} index={index} />
        ))}
      </Section>

      {/* ══ 4 · ISO Certifications detail ═══════════════════════════ */}
      <Section theme="brand" spacing="lg" className="relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <m.div
            className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-brand-700/20 blur-[100px]"
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.65, 0.4] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          <m.div
            className="absolute -bottom-16 right-0 w-[400px] h-[400px] rounded-full bg-brand-800/15 blur-[80px]"
            animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>

        <Container size="2xl" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Left — text */}
            <div className="lg:col-span-4">
              <Reveal variants={scaleIn}>
                <span className="text-white inline-flex w-fit items-center px-3.5 py-1 rounded-full border border-white/20 text-[12px] font-semibold tracking-wide bg-white/5 mb-6">
                  /Quality Assurance
                </span>
              </Reveal>
              <GSAPStaggerText
                text="Every service delivered to ISO standard."
                className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight mb-6"
                y={35}
                duration={0.85}
                stagger={0.045}
              />
              <Reveal variants={fadeInUp}>
                <p className="text-navy-300 leading-relaxed text-sm mb-4">
                  <span className="text-white font-semibold">Scope: </span>
                  {CERT_SCOPE}
                </p>
                <m.div
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="mt-2"
                >
                  <Link
                    href="https://www.iafcertsearch.org/certification/090yrhGzuRrHICKRcRcCv88u"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-gold-400 hover:text-gold-300 transition-colors"
                  >
                    Verify our certifications
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                  </Link>
                </m.div>


              </Reveal>
            </div>

            {/* Right — cert cards + certificate badge */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              <CertCards />

              {/* Accreditation logos */}
              <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-navy-400">
                  Certified &amp; Accredited by
                </p>
                <div className="flex  items-center gap-4">
                  {CERT_LOGOS.map((logo) => (
                    <div
                      key={logo.alt}
                      className=" rounded-xl px-4 py-3 flex items-center justify-center shadow-sm"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        className="object-contain rounded-md"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ══ 5 · CTA ══════════════════════════════════════════════════ */}
      <Section theme="white" spacing="lg">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div>
              <Reveal variants={scaleIn} className="mb-5">
                <span className="inline-flex items-center px-3.5 py-1 rounded-full border border-navy-200 text-[12px] font-semibold tracking-wide text-navy-600 bg-navy-50">
                  /Start a Project
                </span>
              </Reveal>
              <GSAPStaggerText
                text="Ready to discuss your next project with us?"
                className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-navy-900 leading-tight tracking-tight"
                y={35}
                duration={0.85}
                stagger={0.04}
              />
            </div>
            <Reveal variants={fadeInUp}>
              <p className="text-navy-500 leading-relaxed mb-8 text-base sm:text-lg">
                Whether you need a civil engineering solution, a housing development, MEP fit-out, or procurement support — our team is ready to deliver to international standards.
              </p>
              <m.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="inline-block"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm sm:text-base tracking-wide transition-colors duration-200 shadow-lg shadow-brand-200"
                >
                  Get a Quote
                  <m.svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </m.svg>
                </Link>
              </m.div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </div>
  );
}
