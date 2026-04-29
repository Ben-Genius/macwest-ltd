"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import type { Variants } from "framer-motion";
import { m, AnimatePresence, useInView } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  scaleIn,
  lineReveal,
  EASE,
} from "@/lib/animations";

/* ─── Local animation variants ─────────────────────────────────── */

const clipFromLeft: Variants = {
  hidden: { clipPath: "inset(0% 100% 0% 0%)" },
  show: { clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 1.1, ease: EASE.outExpo } },
};

const clipFromRight: Variants = {
  hidden: { clipPath: "inset(0% 0% 0% 100%)" },
  show: { clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 1.1, ease: EASE.outExpo } },
};

/* ─── Reveal wrapper ────────────────────────────────────────────── */

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

/* ─── Portrait placeholder ──────────────────────────────────────── */

function MemberPortrait({ initials, image, name, className }: { initials: string; image?: string; name: string; className?: string }) {
  return (
    <div className={cn("rounded-2xl overflow-hidden bg-gradient-to-br from-navy-100 via-sand-50 to-navy-200 flex flex-col items-center justify-center gap-4 relative", className)}>
      {image ? (
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-900/10" />
          {/* Subtle animated shimmer */}
          <m.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
          />
          <span className="relative text-5xl sm:text-6xl font-display font-bold text-navy-300 select-none">
            {initials}
          </span>
          <span className="relative text-[11px] font-medium text-navy-400 tracking-widest uppercase">
            Portrait placeholder
          </span>
        </>
      )}
    </div>
  );
}

/* ─── Data ──────────────────────────────────────────────────────── */

const BOARD_MEMBERS = [
  {
    number: "01",
    initials: "FA",
    name: "Frank Adu Jr.",
    role: "Board Chairman",
    image: "/images/about/leadership/frank.png",
    shortBio:
      "Frank Adu Jr. is a respected leader in Ghana's financial and business community, with over three decades of experience in banking and corporate governance. He served as Managing Director and CEO of CAL Bank PLC for 20 years.",
    fullBio:
      "Frank Adu Jr. is a respected leader in Ghana's financial and business community, with over three decades of experience in banking and corporate governance. He served as Managing Director and CEO of CAL Bank PLC for 20 years, guiding the institution through a period of growth and transformation. He currently serves on the boards of Legacy Bonds Limited, Quality Insurance Company Limited, TLG Capital, University of Ghana Enterprises Limited, GAB Health Insurance Company Limited, Mojo Payments Limited, and Lead for Ghana. His career also includes service as Chairman of the National Health Insurance Council and the Ghana Stock Exchange, reflecting his broad influence across finance, health, and education. Beyond banking, Mr. Adu is Co-Founder and Chairman of The Roman Ridge School, a leading educational institution in Accra. He was awarded an Honorary Doctorate Degree by the University of Ghana in 2013 and recognised by the Ghana Institute of Architects with an Honorary Membership in 2021 for his contributions to the field. Mr. Adu is also the President of the Achimota Golf Club and Chairman of its Board of Trustees.",
  },
  {
    number: "02",
    initials: "MB",
    name: "Michael Blay",
    role: "Chief Executive Officer",
    image: "/images/about/leadership/michael.png",
    shortBio:
      "Michael Blay is an experienced executive with over a decade of leadership across the energy, logistics, and construction sectors. He has played key roles in structuring joint ventures, negotiating multimillion-dollar contracts, and managing large-scale operations.",
    fullBio:
      "Michael Blay is an experienced executive with over a decade of leadership across the energy, logistics, and construction sectors. He has played key roles in structuring joint ventures, negotiating multimillion-dollar contracts, and managing large-scale operations, bringing both financial expertise and practical business insight to each engagement. His approach to leadership emphasises sustainable growth, fiscal responsibility, and building high-performing teams. He holds a double major in Actuarial Science and Economics from the University of Toronto, where he developed the analytical and strategic foundation that underpins his career. Over the years, he has become a trusted figure in business and governance, recognised for his ability to navigate regulatory environments, strengthen organisational performance, and establish long-term partnerships. Through a combination of strategic foresight and hands-on operational experience, Michael has guided organisations through complex business landscapes and positioned them for sustained success.",
  },
  {
    number: "03",
    initials: "IG",
    name: "Isaac Gwumah, PhD.",
    role: "Non-Executive Director",
    image: "/images/about/leadership/Isaac gwumah.png",
    shortBio:
      "Dr. Isaac Gwumah is a distinguished private-sector development consultant and commercial research expert with over sixteen years of professional experience. Recently achieving his PhD in Marketing, he further strengthens his extensive technical background with advanced academic mastery of market dynamics.",
    fullBio:
      "Dr. Isaac Gwumah is a distinguished private-sector development consultant and commercial research expert with over sixteen years of professional experience. Recently achieving his PhD in Marketing, Dr. Gwumah further strengthens his extensive technical background with advanced academic mastery of market dynamics. A Chartered Marketer, he holds a Postgraduate Diploma from the Chartered Institute of Marketing (UK) and an MA in Applied Social Research from the University of Manchester (UK). As Director of the Bureau of Market & Social Research Ltd (Ghana), Isaac has led market innovations and route-to-market studies for blue-chip companies and SMEs across sectors including construction, FMCG, and financial services. His work has supported multinational brands in Ghana, Nigeria, and Guinea Conakry, with clients such as Samsung C&T, Nestlé, L'Oréal, Olam, CFAO, Fidelity Bank, and Diageo. Beyond corporate consulting, Isaac has driven private sector development initiatives and regularly speaks at marketing conferences on the role of research in driving growth.",
  },
  {
    number: "04",
    initials: "PA",
    name: "Percival O. Ampomah, ESQ.",
    role: "Non-Executive Director",
    image: "/images/about/leadership/Percival.png",
    shortBio:
      "Percival Ampomah is a lawyer, finance and investment professional with expertise in private equity and venture capital. He is currently General Manager of the Venture Capital Trust Fund and currently sits on the boards of five companies.",
    fullBio:
      "Percival Ampomah is a lawyer, finance and investment professional with expertise in private equity and venture capital. He is currently General Manager of the Venture Capital Trust Fund and has previously served as General Manager at one of Ghana's largest asset management firms, as well as at Prime Equity Investments under the Ghana Growth Fund. Earlier in his career, he served as Deputy General Manager and Head of Investments at the Venture Capital Trust Fund. He is a Certified Valuation Analyst (CVA) and has experience in business valuation, investment appraisals, and advisory for corporate and mid-cap clients. Percival has also held board positions, including as a former member of the Ghana Alternative Exchange, and currently sits on the boards of five companies. He holds certificates from Harvard Business School and the Haas School of Business, University of California, Berkeley. He also earned an MSc in Finance from Durham University Business School (UK), an LLB from GIMPA Law School, and a qualifying law certificate from the Ghana School of Law. He also holds an Honours Degree in Electrical and Electronic Engineering from Kwame Nkrumah University of Science and Technology.",
  },
];

/* ─── Member content ────────────────────────────────────────────── */

function MemberContent({
  member,
  expanded,
  onToggle,
  direction,
}: {
  member: (typeof BOARD_MEMBERS)[number];
  expanded: boolean;
  onToggle: () => void;
  direction: "left" | "right";
}) {
  const ref = useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isInView = useInView(ref, { once: true, margin: "-80px" as any });

  return (
    <m.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className="flex flex-col h-full"
    >
      {/* Large number */}
      <m.span
        variants={direction === "left" ? fadeInLeft : fadeInRight}
        className="block text-[5rem] sm:text-[7rem] leading-none font-display font-bold text-navy-100 mb-2 select-none -ml-1"
      >
        {member.number}
      </m.span>

      {/* Role chip */}
      <m.span
        variants={scaleIn}
        className="inline-flex w-fit items-center px-3 py-1 rounded-full border border-navy-200 text-[11px] font-semibold tracking-widest text-navy-500 uppercase bg-navy-50 mb-4"
      >
        {member.role}
      </m.span>

      {/* Underline accent */}
      <m.div variants={lineReveal} className="h-[2px] w-12 bg-brand-500 rounded-full mb-5 origin-left" />

      {/* Name */}
      <m.h3
        variants={direction === "left" ? fadeInLeft : fadeInRight}
        className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-navy-900 leading-tight mb-6 tracking-tight"
      >
        {member.name}
      </m.h3>

      {/* Bio */}
      <div className="relative">
        <AnimatePresence mode="wait">
          {expanded ? (
            <m.p
              key="full"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: EASE.smooth }}
              className="text-navy-500 leading-relaxed text-sm sm:text-base"
            >
              {member.fullBio}
            </m.p>
          ) : (
            <m.p
              key="short"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: EASE.smooth }}
              className="text-navy-500 leading-relaxed text-sm sm:text-base"
            >
              {member.shortBio}
            </m.p>
          )}
        </AnimatePresence>
      </div>

      {/* Read more toggle */}
      <m.button
        onClick={onToggle}
        className="mt-5 inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-brand-600 hover:text-brand-700 transition-colors group w-fit"
        whileHover={{ x: 3 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {expanded ? "Read less" : "Read more"}
        <m.svg
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.35, ease: EASE.spring }}
          className="size-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </m.svg>
      </m.button>
    </m.div>
  );
}

/* ─── Member row ────────────────────────────────────────────────── */

function MemberRow({
  member,
  index,
}: {
  member: (typeof BOARD_MEMBERS)[number];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const isEven = index % 2 === 1;
  const portraitVariant = isEven ? clipFromLeft : clipFromRight;
  const portraitDirection = isEven ? "left" : "right";

  return (
    <div className={cn(
      "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-start py-16 sm:py-20 border-b border-navy-100 last:border-0",
    )}>
      {isEven ? (
        <>
          {/* Portrait left */}
          <Reveal variants={portraitVariant} className="lg:col-span-5 lg:pr-16">
            <MemberPortrait initials={member.initials} image={member.image} name={member.name} className="aspect-[4/5] w-full" />
          </Reveal>
          {/* Content right */}
          <div className="lg:col-span-7 lg:pt-4">
            <MemberContent
              member={member}
              expanded={expanded}
              onToggle={() => setExpanded((p) => !p)}
              direction={portraitDirection}
            />
          </div>
        </>
      ) : (
        <>
          {/* Content left */}
          <div className="lg:col-span-7 lg:pr-16 lg:pt-4">
            <MemberContent
              member={member}
              expanded={expanded}
              onToggle={() => setExpanded((p) => !p)}
              direction={portraitDirection}
            />
          </div>
          {/* Portrait right */}
          <Reveal variants={portraitVariant} className="lg:col-span-5">
            <MemberPortrait initials={member.initials} image={member.image} name={member.name} className="aspect-[4/5] w-full" />
          </Reveal>
        </>
      )}
    </div>
  );
}

/* ─── Page export ───────────────────────────────────────────────── */

export function BoardContent() {
  return (
    <>
      {/* ── Introduction ──────────────────────────────────────────── */}
      <Section theme="white" spacing="xl" className="overflow-hidden">
        {/* Ambient orb */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <m.div
            className="absolute -top-40 -right-40 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-brand-100/30 blur-[100px]"
            animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.55, 0.3] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <Container className="relative z-10" >
          <div className="max-w-3xl">
            <Reveal variants={scaleIn} className="mb-8">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-navy-200 text-[13px] font-semibold tracking-wide text-navy-600 bg-navy-50">
                Leadership
              </span>
            </Reveal>

            {/* Title with underline accent */}
            <Reveal variants={fadeInUp} className="mb-3">
              <div className="mb-3">
                <h2 className="text-4xl sm:text-5xl lg:text-[4rem] font-display font-bold text-navy-900 leading-tight tracking-tight inline">
                  Meet the{" "}
                </h2>
                <span className="relative inline-block">
                  <h2 className="text-4xl sm:text-5xl lg:text-[4rem] font-display font-bold text-navy-900 leading-tight tracking-tight inline">
                    Board
                  </h2>
                  <m.span
                    variants={lineReveal}
                    className="absolute -bottom-1 left-0 w-full h-1 bg-brand-500 rounded-full origin-left"
                  />
                </span>
              </div>
            </Reveal>

            <Reveal variants={fadeInUp} margin="-40px">
              <p className="mt-8 text-base sm:text-lg text-navy-500 leading-relaxed">
                Our governance model combines the strategic oversight of the Board of Directors with the operational expertise of our Management Team, ensuring that every decision reflects our core values of integrity, profitability, teamwork, growth, and safety.
              </p>
              <p className="mt-4 text-navy-400 leading-relaxed">
                Working under the guidance of the Board, our Management Team drives day-to-day operations with a focus on quality delivery, innovation, and efficiency. Their collaborative approach strengthens our organisational structure, empowering every department to perform at its best while ensuring seamless execution across projects.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ── Board members — alternating layout ────────────────────── */}
      <Section theme="white" spacing="none">
        <Container size="xl">
          {BOARD_MEMBERS.map((member, index) => (
            <MemberRow key={member.name} member={member} index={index} />
          ))}
        </Container>
      </Section>
    </>
  );
}
