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
  fadeInLeft,
  fadeInUp,
  scaleIn,
  EASE,
} from "@/lib/animations";

const HSE_POINTS = [
  "Comply with all relevant HSE legislation, regulations and other requirements to which the organization subscribes.",
  "Provide and maintain safe and healthy working conditions, equipment and systems of work for all employees and contractors.",
  "Provide such information, instruction, training and supervision as is necessary to ensure the health and safety of employees and others.",
  "Strive to efficiently and effectively prevent pollution, prevent occupational injury and ill health, optimize energy and resource consumption and minimize the environmental impacts from activities, services and products.",
  "Regularly assess and continually improve EHS performance in a responsible manner by implementing management systems, setting goals and meeting objectives.",
  "Appropriately train, inform, motivate and consult with employees to help them perform their activities in a safe and environmentally responsible manner.",
  "Promote the adoption of similar principles by contractors and suppliers.",
];

const clipFromLeft: Variants = {
  hidden: { clipPath: "inset(0% 100% 0% 0%)" },
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

function StaggerList({ items }: { items: string[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" as any });

  return (
    <m.ul
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className="space-y-6"
    >
      {items.map((point, i) => (
        <m.li key={i} variants={fadeInLeft} className="flex items-start gap-4 group">
          <m.span
            className="mt-2.5 size-2 rounded-full bg-brand-500 flex-shrink-0 block"
            whileHover={{ scale: 1.8 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          />
          <span className="text-navy-600 leading-relaxed text-base sm:text-lg transition-colors duration-300 group-hover:text-navy-900">
            {point}
          </span>
        </m.li>
      ))}
    </m.ul>
  );
}

export function HseContent() {
  return (
    <>
      <Section theme="white" spacing="xl">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <Reveal variants={scaleIn} className="mb-6">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-navy-200 text-[13px] font-semibold tracking-wide text-navy-600 bg-navy-50">
                  HSE Policy
                </span>
              </Reveal>

              <GSAPStaggerText
                text="Quality, Health, Safety and Environment Policy Statement"
                className="text-3xl sm:text-5xl font-display font-bold text-navy-900 mb-8 leading-tight"
                y={35}
                duration={0.8}
                stagger={0.04}
              />

              <Reveal variants={fadeInUp} className="mb-10">
                <p className="text-navy-500 leading-relaxed text-lg sm:text-xl font-medium italic border-l-4 border-brand-500 pl-6">
                  "It is the policy of MACWEST LIMITED (MACWL) to achieve and maintain a high standard of health, safety and environmental performance. Our objective is to prevent injury, ill health and minimize the environmental impact of our operations."
                </p>
              </Reveal>

              <StaggerList items={HSE_POINTS} />

              <Reveal variants={fadeInUp} className="mt-12 pt-8 border-t border-navy-100">
                <div className="flex flex-col">
                  <p className="font-display text-2xl font-bold text-navy-900 mb-1">Michael Blay</p>
                  <p className="text-sm font-bold uppercase tracking-widest text-navy-400">Chief Executive Officer</p>
                </div>
              </Reveal>
            </div>

            <div className="sticky top-32">
              <Reveal variants={clipFromLeft}>
                <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden relative shadow-2xl">
                  <ParallaxImage
                    src="/images/qhse.jpg.jpeg"
                    alt="Macwest Safety Commitment"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-white text-sm font-medium leading-relaxed">
                      Our safety mindset ensures critical attention is given to the health and safety of our human and capital assets.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
