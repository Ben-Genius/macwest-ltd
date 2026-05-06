"use client";

import { useRef } from "react";
import type { Variants } from "framer-motion";
import {
  m,
  useInView,
} from "framer-motion";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { GSAPStaggerText } from "@/components/ui/gsap-stagger-text";
import {
  staggerContainer,
  fadeInUp,
  scaleIn,
} from "@/lib/animations";
import { ChevronRight, Users, Settings, ShieldCheck, Briefcase, BarChart3 } from "lucide-react";

const STRUCTURE = [
  {
    level: "Leadership",
    role: "Board of Directors & CEO",
    icon: Users,
    desc: "Strategic oversight, governance, and long-term vision.",
  },
  {
    level: "Management",
    role: "Project & Operations Managers",
    icon: Briefcase,
    desc: "Day-to-day execution, client relations, and resource allocation.",
  },
  {
    level: "Compliance",
    role: "QHSE & Regulatory Officers",
    icon: ShieldCheck,
    desc: "Ensuring every project meets global safety and quality standards.",
  },
  {
    level: "Technical",
    role: "Engineering & Design Teams",
    icon: Settings,
    desc: "Technical precision, structural design, and MEP implementation.",
  },
  {
    level: "Commercial",
    role: "Procurement & Finance",
    icon: BarChart3,
    desc: "Budget management, supply chain optimization, and cost control.",
  },
];

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

export function StructureContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Section theme="white" spacing="xl">
      <Container size="xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal variants={scaleIn} className="mb-6">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-navy-200 text-[13px] font-semibold tracking-wide text-navy-600 bg-navy-50">
              Governance
            </span>
          </Reveal>

          <GSAPStaggerText
            text="Our Organizational Structure"
            className="text-4xl sm:text-6xl font-display font-bold text-navy-900 mb-6 leading-tight"
            y={35}
            duration={0.8}
            stagger={0.04}
          />

          <Reveal variants={fadeInUp}>
            <p className="text-navy-500 text-lg sm:text-xl leading-relaxed">
              Macwest is structured to ensure seamless communication, rapid decision-making, and absolute accountability at every level of the organization.
            </p>
          </Reveal>
        </div>

        <m.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="flex flex-col gap-4 max-w-4xl mx-auto"
        >
          {STRUCTURE.map((item, i) => (
            <m.div
              key={i}
              variants={fadeInUp}
              className="group relative flex flex-col sm:flex-row sm:items-center gap-6 p-6 sm:p-8 rounded-2xl bg-white border border-navy-100 hover:border-brand-200 hover:shadow-xl hover:shadow-navy-900/5 transition-all duration-300"
            >
              <div className="size-14 rounded-xl bg-navy-50 flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                <item.icon className="size-6" />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-500">
                    {item.level}
                  </span>
                  <ChevronRight className="size-3 text-navy-200" />
                </div>
                <h3 className="font-display text-xl font-bold text-navy-900 mb-2">
                  {item.role}
                </h3>
                <p className="text-navy-500 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="hidden sm:block absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                <div className="size-10 rounded-full border border-brand-200 flex items-center justify-center text-brand-600">
                  <ChevronRight className="size-5" />
                </div>
              </div>
            </m.div>
          ))}
        </m.div>

        <Reveal variants={fadeInUp} className="mt-20 p-10 rounded-3xl bg-navy-950 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-600/20 to-transparent" />
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
              Integrated Project Delivery
            </h2>
            <p className="text-navy-300 max-w-2xl mx-auto leading-relaxed">
              Our multidisciplinary approach connects site operations directly with management, ensuring that technical challenges are solved in real-time and quality is never compromised.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
