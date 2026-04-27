"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { GSAPReveal } from "@/components/ui/gsap-reveal";
import { cn } from "@/lib/utils";

/* ── Helpers ─────────────────────────────────────────────── */

function MemberPortrait({ initials, className }: { initials: string; className?: string }) {
  return (
    <div className={cn("rounded-2xl overflow-hidden bg-gradient-to-br from-navy-100 via-sand-50 to-navy-200 flex flex-col items-center justify-center gap-4 relative", className)}>
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-900/10" />
      <span className="relative text-6xl font-display font-bold text-navy-300 select-none">{initials}</span>
      <span className="relative text-[11px] font-medium text-navy-400 tracking-widest uppercase">Portrait placeholder</span>
    </div>
  );
}

/* ── Data ─────────────────────────────────────────────────── */

const BOARD_MEMBERS = [
  {
    number: "01",
    initials: "FA",
    name: "Frank Adu Jr.",
    role: "Board Chairman",
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
    shortBio:
      "Percival Ampomah is a lawyer, finance and investment professional with expertise in private equity and venture capital. He is currently General Manager of the Venture Capital Trust Fund and currently sits on the boards of five companies.",
    fullBio:
      "Percival Ampomah is a lawyer, finance and investment professional with expertise in private equity and venture capital. He is currently General Manager of the Venture Capital Trust Fund and has previously served as General Manager at one of Ghana's largest asset management firms, as well as at Prime Equity Investments under the Ghana Growth Fund. Earlier in his career, he served as Deputy General Manager and Head of Investments at the Venture Capital Trust Fund. He is a Certified Valuation Analyst (CVA) and has experience in business valuation, investment appraisals, and advisory for corporate and mid-cap clients. Percival has also held board positions, including as a former member of the Ghana Alternative Exchange, and currently sits on the boards of five companies. He holds certificates from Harvard Business School and the Haas School of Business, University of California, Berkeley. He also earned an MSc in Finance from Durham University Business School (UK), an LLB from GIMPA Law School, and a qualifying law certificate from the Ghana School of Law. He also holds an Honours Degree in Electrical and Electronic Engineering from Kwame Nkrumah University of Science and Technology.",
  },
];

/* ── Member row ───────────────────────────────────────────── */

function MemberRow({
  member,
  index,
}: {
  member: (typeof BOARD_MEMBERS)[number];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const isEven = index % 2 === 1;

  return (
    <div className={cn("grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-start py-20 border-b border-navy-100 last:border-0", isEven && "")}>
      {isEven ? (
        /* Even: portrait left — content right */
        <>
          {/* Portrait */}
          <GSAPReveal y={30} delay={0.1} className="lg:col-span-5 lg:pr-16">
            <MemberPortrait initials={member.initials} className="aspect-[4/5] w-full" />
          </GSAPReveal>

          {/* Content */}
          <GSAPReveal y={20} className="lg:col-span-7 lg:pt-4">
            <MemberContent member={member} expanded={expanded} onToggle={() => setExpanded((p) => !p)} />
          </GSAPReveal>
        </>
      ) : (
        /* Odd: content left — portrait right */
        <>
          {/* Content */}
          <GSAPReveal y={20} className="lg:col-span-7 lg:pr-16 lg:pt-4">
            <MemberContent member={member} expanded={expanded} onToggle={() => setExpanded((p) => !p)} />
          </GSAPReveal>

          {/* Portrait */}
          <GSAPReveal y={30} delay={0.1} className="lg:col-span-5">
            <MemberPortrait initials={member.initials} className="aspect-[4/5] w-full" />
          </GSAPReveal>
        </>
      )}
    </div>
  );
}

function MemberContent({
  member,
  expanded,
  onToggle,
}: {
  member: (typeof BOARD_MEMBERS)[number];
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex flex-col h-full">
      {/* Number */}
      <span className="block text-[7rem] leading-none font-display font-bold text-navy-100 mb-2 select-none -ml-1">
        {member.number}
      </span>

      {/* Role chip */}
      <span className="inline-flex w-fit items-center px-3 py-1 rounded-full border border-navy-200 text-[11px] font-semibold tracking-widest text-navy-500 uppercase bg-navy-50 mb-4">
        {member.role}
      </span>

      {/* Name */}
      <h3 className="text-4xl sm:text-5xl font-display font-bold text-navy-900 leading-tight mb-6 tracking-tight">
        {member.name}
      </h3>

      {/* Bio — truncated or full */}
      <div className="relative">
        <AnimatePresence initial={false}>
          {expanded ? (
            <m.p
              key="full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="text-navy-500 leading-relaxed"
            >
              {member.fullBio}
            </m.p>
          ) : (
            <m.p
              key="short"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="text-navy-500 leading-relaxed"
            >
              {member.shortBio}
            </m.p>
          )}
        </AnimatePresence>
      </div>

      {/* Read more / less toggle */}
      <button
        onClick={onToggle}
        className="mt-5 inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-brand-600 hover:text-brand-700 transition-colors group w-fit"
      >
        {expanded ? "Read less" : "Read more"}
        <m.svg
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="size-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </m.svg>
      </button>
    </div>
  );
}

/* ── Page export ──────────────────────────────────────────── */

export function BoardContent() {
  return (
    <>
      {/* ── Introduction ─────────────────────────────────────── */}
      <Section theme="white" spacing="xl">
        <Container>
          <div className="max-w-3xl">
            <GSAPReveal y={20}>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-navy-200 text-[13px] font-semibold tracking-wide text-navy-600 bg-navy-50 mb-8">
                Leadership
              </span>
            </GSAPReveal>

            <GSAPReveal y={30} delay={0.1}>
              {/* Underline-accented title — matching the inspiration */}
              <div className="mb-3">
                <h2 className="text-5xl sm:text-6xl lg:text-[4rem] font-display font-bold text-navy-900 leading-tight tracking-tight inline">
                  Meet the{" "}
                </h2>
                <span className="relative inline-block">
                  <h2 className="text-5xl sm:text-6xl lg:text-[4rem] font-display font-bold text-navy-900 leading-tight tracking-tight inline">
                    Board
                  </h2>
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-brand-500 rounded-full" />
                </span>
              </div>
            </GSAPReveal>

            <GSAPReveal y={30} delay={0.2}>
              <p className="mt-8 text-lg text-navy-500 leading-relaxed">
                Our governance model combines the strategic oversight of the Board of Directors with the operational expertise of our Management Team, ensuring that every decision reflects our core values of integrity, profitability, teamwork, growth, and safety.
              </p>
              <p className="mt-4 text-navy-400 leading-relaxed">
                Working under the guidance of the Board, our Management Team drives day-to-day operations with a focus on quality delivery, innovation, and efficiency. Their collaborative approach strengthens our organisational structure, empowering every department to perform at its best while ensuring seamless execution across projects.
              </p>
            </GSAPReveal>
          </div>
        </Container>
      </Section>

      {/* ── Board members — alternating layout ───────────────── */}
      <Section theme="white" spacing="none">
        <Container>
          {BOARD_MEMBERS.map((member, index) => (
            <MemberRow key={member.name} member={member} index={index} />
          ))}
        </Container>
      </Section>
    </>
  );
}
