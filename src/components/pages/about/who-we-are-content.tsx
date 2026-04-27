"use client";

import { useState, useRef, useEffect } from "react";
import type { Variants } from "framer-motion";
import Image from "next/image";
import {
  m,
  AnimatePresence,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  animate,
} from "framer-motion";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { GSAPStaggerText } from "@/components/ui/gsap-stagger-text";
import { Globe } from "@/components/ui/globe";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  scaleIn,
  scaleInCenter,
  EASE,
} from "@/lib/animations";

/* ─── Data ──────────────────────────────────────────────────────── */

const STATS = [
  { value: "14+", label: "Years of excellence" },
  { value: "3",   label: "ISO certifications" },
  { value: "100+", label: "Projects delivered" },
];

const VISION_MARKERS = [
  { id: "accra",        location: [5.6037,   -0.187]   as [number, number], label: "Accra, Ghana" },
  { id: "lagos",        location: [6.5244,    3.3792]  as [number, number], label: "Lagos, Nigeria" },
  { id: "nairobi",      location: [-1.2921,  36.8219]  as [number, number], label: "Nairobi, Kenya" },
  { id: "johannesburg", location: [-26.2041, 28.0473]  as [number, number], label: "Johannesburg" },
  { id: "abidjan",      location: [5.3599,   -4.0083]  as [number, number], label: "Abidjan, Côte d'Ivoire" },
  { id: "dakar",        location: [14.7167, -17.4677]  as [number, number], label: "Dakar, Senegal" },
  { id: "dar",          location: [-6.7924,  39.2083]  as [number, number], label: "Dar es Salaam" },
  { id: "douala",       location: [4.0511,    9.7679]  as [number, number], label: "Douala, Cameroon" },
];

const VISION_ARCS = [
  { id: "accra-lagos",        from: [5.6037,  -0.187]  as [number, number], to: [6.5244,    3.3792]  as [number, number] },
  { id: "accra-abidjan",      from: [5.6037,  -0.187]  as [number, number], to: [5.3599,   -4.0083]  as [number, number] },
  { id: "accra-nairobi",      from: [5.6037,  -0.187]  as [number, number], to: [-1.2921,  36.8219]  as [number, number] },
  { id: "accra-johannesburg", from: [5.6037,  -0.187]  as [number, number], to: [-26.2041, 28.0473]  as [number, number] },
  { id: "lagos-dar",          from: [6.5244,   3.3792] as [number, number], to: [-6.7924,  39.2083]  as [number, number] },
];

const VISION_POINTS = [
  "Expand our footprint across Sub-Saharan Africa",
  "Set the standard for quality and reliability in the region",
  "Deliver forward-thinking, future-ready engineering solutions",
  "Build lasting partnerships with public and private sectors",
];

const MISSION_POINTS = [
  "Offer precision engineering for structures built to last",
  "Deliver cost-effective solutions without compromising quality",
  "Champion health, safety, and environmental responsibility",
  "Empower local talent and support community growth",
];

const CSR_PILLARS = [
  { title: "Infrastructure", desc: "Building lasting structures that uplift communities" },
  { title: "Education",      desc: "Supporting training programmes and skills development" },
  { title: "Sustainability", desc: "Environmentally responsible construction practices" },
  { title: "Community",     desc: "Engaging and empowering local people in every project" },
];

/* ─── Local animation variants ─────────────────────────────────── */

const clipFromLeft: Variants = {
  hidden: { clipPath: "inset(0% 100% 0% 0%)" },
  show:   { clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 1.1, ease: EASE.outExpo } },
};

const clipFromRight: Variants = {
  hidden: { clipPath: "inset(0% 0% 0% 100%)" },
  show:   { clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 1.1, ease: EASE.outExpo } },
};

const clipFromBottom: Variants = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
  show:   { clipPath: "inset(0% 0% 0% 0%)", opacity: 1, transition: { duration: 0.85, ease: EASE.outExpo } },
};

/* ─── Sub-components ────────────────────────────────────────────── */

/** Scroll-triggered fade/slide wrapper */
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

/** Animated count-up stat */
function AnimatedCounter({ raw }: { raw: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const num = parseInt(raw.replace(/\D/g, ""));
  const suffix = raw.replace(/\d/g, "");

  useEffect(() => {
    if (!isInView || isNaN(num)) return;
    const controls = animate(0, num, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setCount(Math.floor(v)),
    });
    return () => controls.stop();
  }, [isInView, num]);

  return <span ref={ref}>{isNaN(num) ? raw : `${count}${suffix}`}</span>;
}

/** 3-D perspective tilt card — disables on touch devices */
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const rotY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });

  return (
    <m.div
      ref={cardRef}
      style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
      onMouseMove={(e) => {
        const rect = cardRef.current?.getBoundingClientRect();
        if (!rect) return;
        mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      className={className}
    >
      {children}
    </m.div>
  );
}

/** Scroll-parallax image — fills a positioned parent */
function ParallaxImage({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <m.div
        style={{ y, position: "absolute", top: -60, left: 0, right: 0, bottom: -60, willChange: "transform" }}
      >
        <Image src={src} alt={alt} fill className="object-cover" priority={priority} />
      </m.div>
    </div>
  );
}

/** Staggered bullet list */
function StaggerList({
  items,
  itemVariant = fadeInLeft,
}: {
  items: string[];
  itemVariant?: Variants;
}) {
  const ref = useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isInView = useInView(ref, { once: true, margin: "-60px" as any });

  return (
    <m.ul
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className="space-y-4"
    >
      {items.map((point) => (
        <m.li key={point} variants={itemVariant} className="flex items-start gap-3.5 group cursor-default">
          <m.span
            className="mt-2 size-2 rounded-full bg-brand-500 flex-shrink-0 block"
            whileHover={{ scale: 1.8 }}
            style={{ backgroundColor: "var(--color-brand-500, #8B1A2E)" }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          />
          <span className="text-navy-600 leading-relaxed transition-colors duration-300 group-hover:text-navy-900">
            {point}
          </span>
        </m.li>
      ))}
    </m.ul>
  );
}

/* ─── CSR pillar cards ──────────────────────────────────────────── */

function CSRPillars() {
  const ref = useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isInView = useInView(ref, { once: true, margin: "-60px" as any });

  return (
    <m.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
      {CSR_PILLARS.map((pillar) => (
        <m.div key={pillar.title} variants={fadeInUp}>
          <TiltCard className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/[0.15] hover:shadow-2xl transition-colors duration-300 cursor-default h-full">
            <m.div
              className="h-0.5 mb-4 rounded-full origin-left bg-brand-500"
              style={{ width: 32 }}
              animate={{ scaleX: 1 }}
              whileHover={{ scaleX: 1.5, backgroundColor: "#D4AF37" }}
              transition={{ duration: 0.3, ease: EASE.spring }}
            />
            <div className="font-semibold text-white mb-1.5 text-sm tracking-wide uppercase transition-colors duration-300 group-hover:text-gold-100">
              {pillar.title}
            </div>
            <div className="text-sm text-navy-300 leading-snug transition-colors duration-300 group-hover:text-white/90">
              {pillar.desc}
            </div>
          </TiltCard>
        </m.div>
      ))}
    </m.div>
  );
}

/* ─── Page ──────────────────────────────────────────────────────── */

export function WhoWeAreContent() {
  const [storyExpanded, setStoryExpanded] = useState(false);
  const [csrExpanded,   setCsrExpanded]   = useState(false);

  return (
    <>
      {/* ══ 1 · Hero ════════════════════════════════════════════════ */}
      <Section theme="white" spacing="sm" className="overflow-hidden">
        {/* Ambient background orbs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <m.div
            className="absolute -top-32 -right-24 sm:-right-32 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] rounded-full bg-brand-100/40 blur-[80px]"
            animate={{ scale: [1, 1.1, 1], opacity: [0.35, 0.6, 0.35] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <m.div
            className="absolute -bottom-16 -left-16 w-[220px] sm:w-[320px] h-[220px] sm:h-[320px] rounded-full bg-navy-100/25 blur-[60px]"
            animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>

        <Container size="2xl" className="relative z-10">
          {/* Badge */}
          <Reveal variants={scaleIn} className="mb-8">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-navy-200 text-[13px] font-semibold tracking-wide text-navy-600 bg-navy-50">
              Who We Are
            </span>
          </Reveal>

          {/* Headline — stagger + trailing fade */}
          <div className="max-w-full w-full mb-14">
            <GSAPStaggerText
              text="We're a proudly Ghanaian-owned company meeting the evolving demand for modern civil engineering and construction."
              className="text-center text-3xl sm:text-5xl md:text-6xl lg:text-[3.5rem] font-display font-bold leading-[1.12] tracking-tight text-navy-900 justify-center"
              y={55}
              duration={0.95}
              stagger={0.03}
            />
            <Reveal variants={clipFromBottom} margin="-20px">
              <p className="text-center text-3xl sm:text-5xl md:text-6xl lg:text-[3.5rem] font-display font-bold leading-[1.12] tracking-tight text-navy-300 mt-1">
                Built on integrity, driven by excellence since 2011.
              </p>
            </Reveal>
          </div>

          {/* Hero image — clip-left reveal + parallax */}
          <Reveal variants={clipFromLeft}>
            <div className="w-full aspect-[16/7] rounded-2xl overflow-hidden relative group shadow-xl">
              <ParallaxImage
                src="https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A9939.jpg?fit=2048%2C1365&ssl=1"
                alt="Macwest Limited — flagship project"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ══ 2 · Vision ══════════════════════════════════════════════ */}
      <Section theme="white" spacing="xl">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div className="flex flex-col">
              <Reveal variants={scaleIn} className="mb-6">
                <span className="inline-flex w-fit items-center px-3.5 py-1 rounded-full border border-navy-200 text-[12px] font-semibold tracking-wide text-navy-600 bg-navy-50">
                  Our Vision
                </span>
              </Reveal>

              <GSAPStaggerText
                text="The most reliable and preferred construction company in Sub-Saharan Africa."
                className="text-3xl sm:text-4xl font-display font-bold text-navy-900 mb-5 leading-tight"
                y={35}
                duration={0.8}
                stagger={0.04}
              />

              <Reveal variants={fadeInUp} className="mb-8">
                <p className="text-navy-500 leading-relaxed text-base sm:text-lg">
                  We aim to be the most reliable and preferred Construction and Engineering Company in Sub-Saharan Africa and beyond — building trust through every project we deliver.
                </p>
              </Reveal>

              <StaggerList items={VISION_POINTS} itemVariant={fadeInLeft} />
            </div>

            {/* Globe */}
            <Reveal variants={scaleInCenter} className="flex items-center justify-center">
              <div className="w-full max-w-[320px] sm:max-w-lg mx-auto">
                <Globe
                  markers={VISION_MARKERS}
                  arcs={VISION_ARCS}
                  markerColor={[0.55, 0.1, 0.2]}
                  baseColor={[0.95, 0.95, 0.98]}
                  arcColor={[0.55, 0.1, 0.2]}
                  glowColor={[0.9, 0.88, 0.9]}
                  dark={0}
                  mapBrightness={9}
                  markerSize={0.03}
                  theta={0.15}
                  speed={0.002}
                />
                <Reveal variants={fadeInUp}>
                  <p className="text-center text-xs text-navy-400 mt-4 tracking-wide">
                    Expanding across Sub-Saharan Africa
                  </p>
                </Reveal>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ══ 3 · Mission ═════════════════════════════════════════════ */}
      <Section theme="light" spacing="xl">
        <Container size="xl" className="mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <Reveal variants={clipFromLeft} className="lg:order-1 order-2">
              <div className="aspect-[3/2.8] w-full rounded-2xl overflow-hidden relative shadow-lg">
                <ParallaxImage
                  src="/images/about/mission.jpeg"
                  alt="Macwest mission — construction excellence"
                />
              </div>
            </Reveal>

            {/* Text */}
            <div className="lg:order-2 order-1 flex flex-col">
              <Reveal variants={scaleIn} className="mb-6">
                <span className="inline-flex w-fit items-center px-3.5 py-1 rounded-full border border-navy-200 text-[12px] font-semibold tracking-wide text-navy-600 bg-white">
                  Our Mission
                </span>
              </Reveal>

              <GSAPStaggerText
                text="Creating value through contemporary construction and engineering solutions."
                className="text-3xl sm:text-4xl font-display font-bold text-navy-900 mb-5 leading-tight"
                y={35}
                duration={0.8}
                stagger={0.04}
              />

              <Reveal variants={fadeInUp} className="mb-8">
                <p className="text-navy-500 leading-relaxed text-base sm:text-lg">
                  To emerge as a regional leader through the creation of value by providing contemporary Construction and Engineering solutions designed to meet infrastructural needs.
                </p>
              </Reveal>

              <StaggerList items={MISSION_POINTS} itemVariant={fadeInRight} />
            </div>
          </div>
        </Container>
      </Section>

      {/* ══ 4 · Our Story ═══════════════════════════════════════════ */}
      <Section theme="white" spacing="xl">
        <Container size="xl" className="mx-auto">
          <Reveal variants={scaleIn} className="mb-3">
            <span className="inline-flex w-fit items-center px-3.5 py-1 rounded-full border border-navy-200 text-[12px] font-semibold tracking-wide text-navy-600 bg-navy-50">
              Our Story
            </span>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            {/* Left — heading + image */}
            <div className="lg:col-span-5">
              <GSAPStaggerText
                text="Built on Integrity, Driven by Excellence."
                className="text-3xl sm:text-4xl font-display font-bold text-navy-900 leading-tight mb-6"
                y={35}
                duration={0.8}
                stagger={0.05}
              />

              <Reveal variants={clipFromLeft}>
                <div className="aspect-[3/2.3] w-full rounded-2xl overflow-hidden relative shadow-lg">
                  <ParallaxImage src="/images/about/our_story.JPG" alt="Macwest — our story" />
                </div>
              </Reveal>
            </div>

            {/* Right — prose + stats */}
            <div className="lg:col-span-7">
              <div className="space-y-6 pt-2">
                <Reveal variants={fadeInUp}>
                  <p className="text-lg sm:text-xl text-navy-800 leading-relaxed font-medium">
                    Macwest Limited was registered in May 2011, under the Companies Act of 1963, with a mandate to serve Ghana&apos;s evolving need for Modern Civil and Engineering Innovations.
                  </p>
                </Reveal>

                <Reveal variants={fadeInUp}>
                  <p className="text-navy-500 leading-relaxed">
                    Built on the values of precision, integrity, and innovation, we have since earned several global certifications and are trusted partners in the industry. From our earliest projects, we set out to blend technical excellence with practical problem-solving — delivering structures of lasting value.
                  </p>
                </Reveal>

                <AnimatePresence initial={false}>
                  {storyExpanded && (
                    <m.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: EASE.spring }}
                      className="overflow-hidden"
                    >
                      <p className="text-navy-500 leading-relaxed pt-4">
                        Over the years, we&apos;ve built and trained a strong team of engineers, skilled craftspeople, and creative professionals whose diverse expertise drives our work. What began as a local construction venture has grown into a full-service engineering and construction firm, recognised for cost-effective and future-ready solutions.
                      </p>
                      <p className="text-navy-500 leading-relaxed pt-4 mb-2">
                        Looking ahead, we are focused on expanding our footprint across Sub-Saharan Africa, bringing the same standards of quality and reliability to clients throughout the region. At our core, we remain true to the principles that guided our founding — always committed to exceeding expectations.
                      </p>
                    </m.div>
                  )}
                </AnimatePresence>

                <m.button
                  onClick={() => setStoryExpanded(!storyExpanded)}
                  className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-600 hover:text-brand-700 transition-colors mt-2"
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  {storyExpanded ? "Read Less" : "Read More"}
                  <m.svg
                    animate={{ rotate: storyExpanded ? 180 : 0 }}
                    transition={{ duration: 0.35, ease: EASE.spring }}
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </m.svg>
                </m.button>

                {/* Stats — count-up */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-navy-100">
                  {STATS.map((stat, i) => (
                    <Reveal
                      key={stat.label}
                      variants={{
                        hidden: { opacity: 0, y: 24 },
                        show: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.5, delay: i * 0.12, ease: EASE.spring },
                        },
                      }}
                    >
                      <m.div
                        className="group cursor-default"
                        whileHover={{ y: -4 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      >
                        <div className="text-3xl sm:text-4xl font-display font-bold text-brand-600 mb-1 transition-colors duration-300 group-hover:text-gold-500">
                          <AnimatedCounter raw={stat.value} />
                        </div>
                        <div className="text-sm font-medium text-navy-500 transition-colors duration-300 group-hover:text-navy-800">
                          {stat.label}
                        </div>
                      </m.div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ══ 5 · Corporate Social Responsibility ═════════════════════ */}
      <Section theme="brand" spacing="sm" className="relative overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <m.div
            className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-600/10 to-transparent blur-3xl"
            animate={{ opacity: [0.5, 0.85, 0.5] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <m.div
            className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-gold-500/5 to-transparent blur-3xl"
            animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.06, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          />
          <m.div
            className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-brand-800/15 blur-[100px]"
            animate={{ scale: [0.85, 1.1, 0.85] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <Container size="2xl" className="relative z-10 mx-auto">
          <Reveal variants={scaleIn} className="mb-3">
            <span className="text-white inline-flex w-fit items-center px-3.5 py-1 rounded-full border border-white/20 text-[12px] font-semibold tracking-wide bg-white/5">
              Community Impact
            </span>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <GSAPStaggerText
                text="Corporate Social Responsibility"
                className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight"
                y={40}
                duration={0.9}
                stagger={0.04}
              />

              <Reveal variants={fadeInUp} className="mb-5">
                <p className="text-navy-200 leading-relaxed text-base sm:text-lg">
                  At Macwest, Corporate Social Responsibility is not an obligation — it guides how we work and how we engage with communities.
                </p>
              </Reveal>

              <Reveal variants={fadeInUp}>
                <p className="text-navy-300 leading-relaxed mb-5">
                  We believe every project is an opportunity to create a lasting, positive impact beyond the immediate scope of construction or development.
                </p>
              </Reveal>

              <AnimatePresence initial={false}>
                {csrExpanded && (
                  <m.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: EASE.spring }}
                    className="overflow-hidden"
                  >
                    <p className="text-navy-300 leading-relaxed mb-8 pt-2">
                      While we pursue economic growth and business excellence, our CSR initiatives are designed to support education, community development, and sustainable livelihoods, ensuring that our presence brings tangible value to local communities.
                    </p>
                  </m.div>
                )}
              </AnimatePresence>

              <m.button
                onClick={() => setCsrExpanded(!csrExpanded)}
                className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gold-400 hover:text-gold-300 transition-colors mb-10"
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {csrExpanded ? "Read Less" : "Read More"}
                <m.svg
                  animate={{ rotate: csrExpanded ? 180 : 0 }}
                  transition={{ duration: 0.35, ease: EASE.spring }}
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </m.svg>
              </m.button>

              <CSRPillars />
            </div>

            {/* Image */}
            <Reveal variants={clipFromRight}>
              <div className="aspect-[3/3] w-full rounded-2xl overflow-hidden relative shadow-2xl">
                <ParallaxImage
                  src="https://i0.wp.com/www.macwest.com.gh/wp-content/uploads/2025/07/1H6A1074-scaled.jpg"
                  alt="Macwest corporate social responsibility"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
