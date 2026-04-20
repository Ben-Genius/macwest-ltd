"use client";

import Image from "next/image";
import Link from "next/link";
import { m, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, Award, Globe, ArrowRight, ExternalLink, BadgeCheck, FileCheck } from "lucide-react";
import { useRef } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { GSAPReveal } from "@/components/ui/gsap-reveal";
import { GSAPStaggerText } from "@/components/ui/gsap-stagger-text";

const certs = [
  {
    icon: Award,
    code: "ISO 9001:2015",
    title: "Quality Management",
    body: "Systematic approach to consistently meeting customer requirements. Audited and verified annually.",
    certNo: "TVEOH04041738",
    issued: "04.04.2025",
    expiry: "03.04.2028",
    color: "gold",
  },
  {
    icon: Globe,
    code: "ISO 14001:2015",
    title: "Environmental",
    body: "Proven commitment to minimising environmental impact across all construction activities.",
    certNo: "TVEOH04041739",
    issued: "04.04.2025",
    expiry: "03.04.2028",
    color: "brand",
  },
  {
    icon: ShieldCheck,
    code: "ISO 45001:2018",
    title: "Occupational H&S",
    body: "World's leading standard for occupational health and safety — protecting every worker.",
    certNo: "TVEOH04041740",
    issued: "04.04.2025",
    expiry: "03.04.2028",
    color: "navy",
  },
];

const colorMap = {
  gold: { bg: "bg-gold-50", text: "text-gold-600", border: "border-gold-200" },
  brand: { bg: "bg-brand-50", text: "text-brand-600", border: "border-brand-200" },
  navy: { bg: "bg-navy-50", text: "text-navy-600", border: "border-navy-200" },
};

const verificationSteps = [
  { icon: FileCheck, text: "Independently audited by TVE Certification Services." },
  { icon: BadgeCheck, text: "IAF/IAS accredited — internationally recognised." },
  { icon: ShieldCheck, text: "Surveillance audits scheduled annually." },
];

export function CertificationsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax the certificate
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section ref={sectionRef} className="relative py-28 sm:py-36 bg-white overflow-hidden">

      <div className="relative z-10 mx-auto max-w-[95rem] px-4 sm:px-6 lg:px-8">
        {/* Container Scroll Presentation */}
        <div className="flex flex-col overflow-hidden mt-[-4rem] sm:mt-[-8rem] mb-10">
          <ContainerScroll
            titleComponent={
              <div className="flex flex-col items-center pb-8 sm:pb-16 pt-10">
                <GSAPReveal delay={0.1} y={20}>
                  <p className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-gold-600 mb-4">
                    Verified credentials
                  </p>
                </GSAPReveal>

                <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold tracking-[-0.02em] text-navy-900 leading-[1.05] mb-6 text-center">
                  <GSAPStaggerText
                    text="Triple certified."
                    stagger={0.05}
                    duration={1}
                    className="justify-center"
                  />
                  <GSAPStaggerText
                    text="Globally verified."
                    wordClassName="text-brand-600"
                    stagger={0.05}
                    duration={1}
                    className="justify-center"
                  />
                </h2>

                <GSAPReveal delay={0.4} y={30}>
                  <p className="text-lg text-navy-600 font-medium leading-relaxed max-w-2xl text-center mb-8">
                    Three independent ISO certifications confirm that Macwest operates to the highest
                    international engineering and safety standards — every project, every time.
                  </p>
                </GSAPReveal>
              </div>
            }
          >
            <div className="relative w-full h-full bg-white overflow-hidden grid grid-cols-1 md:grid-cols-3 p-4 md:p-8 gap-6 md:gap-10">
              {/* Certificate Side */}
              <div className="relative w-full h-full min-h-[300px] md:col-span-2 rounded-2xl overflow-hidden bg-sand-50/50 border border-black/5 shadow-inner">
                <m.div style={{ y: parallaxY }} className="absolute inset-0">
                  <Image
                    src="/images/0052b98d-c2fa-487d-8427-5307a9d4ef43.jpg.jpeg"
                    alt="Macwest ISO Certification Document"
                    fill
                    className="object-cover object-top sm:object-contain p-2 sm:p-4 scale-105"
                    draggable={false}
                  />
                </m.div>
                
                {/* Clean white tag overlapping inside the screen */}
                <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md rounded-2xl px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-3 shadow-elevated border border-black/5 z-10 w-max max-w-[95%]">
                  <BadgeCheck className="size-5 sm:size-6 text-brand-600 shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-navy-900 uppercase tracking-widest whitespace-nowrap">TVE Certified · IAF Accredited</span>
                </div>
              </div>

              {/* Verification Steps Sidebar */}
              <div className="flex flex-col justify-center gap-5 md:col-span-1 p-6 md:p-0 bg-sand-50/50 md:bg-transparent rounded-3xl border border-black/5 md:border-none">
                <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-brand-600 md:mb-2 text-center md:text-left">
                  Verification Overview
                </p>
                {verificationSteps.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-start gap-4">
                    <div className="size-10 rounded-full bg-white shadow-soft border border-black/5 flex items-center justify-center shrink-0">
                      <Icon className="size-5 text-brand-600" />
                    </div>
                    <span className="text-sm font-semibold text-navy-800 leading-snug">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </ContainerScroll>
        </div>

        {/* Cert cards — clean bright cards */}
        <div className="grid gap-6 sm:grid-cols-3">
          {certs.map((cert, i) => {
            const Icon = cert.icon;
            const colors = colorMap[cert.color as keyof typeof colorMap];
            return (
              <GSAPReveal
                key={cert.code}
                delay={0.1 + i * 0.15}
                y={50}
                duration={1}
                className="group relative rounded-3xl p-8 flex flex-col gap-6 bg-white border border-black/5 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex flex-col gap-5">
                  <div className={`size-14 rounded-2xl ${colors.bg} flex items-center justify-center border ${colors.border}`}>
                    <Icon className={`size-6 ${colors.text}`} />
                  </div>
                  <div>
                    <p className={`text-[10px] font-sans font-bold uppercase tracking-[0.2em] ${colors.text} mb-2`}>
                      {cert.code}
                    </p>
                    <h3 className="font-display text-2xl font-bold text-navy-900 tracking-[-0.015em]">
                      {cert.title}
                    </h3>
                    <p className="mt-3 text-sm text-navy-600 font-medium leading-relaxed">{cert.body}</p>
                  </div>

                  {/* Certificate details */}
                  <div className="mt-4 pt-5 border-t border-black/5 space-y-2.5">
                    <div className="flex justify-between items-center text-[11px] font-bold">
                      <span className="text-navy-400 uppercase tracking-widest">Cert No.</span>
                      <span className="text-navy-900 font-mono tracking-tight">{cert.certNo}</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px] font-bold">
                      <span className="text-navy-400 uppercase tracking-widest">Valid</span>
                      <span className="text-navy-900 font-mono tracking-tight">{cert.issued} — {cert.expiry}</span>
                    </div>
                    <div className="flex items-center gap-2 pt-2">
                      <span className={`size-2 rounded-full ${colors.bg} ring-2 ring-${colors.text} animate-pulse`} />
                      <span className={`text-[10px] uppercase font-bold tracking-widest ${colors.text}`}>Active & Verified</span>
                    </div>
                  </div>
                </div>
              </GSAPReveal>
            );
          })}
        </div>

        {/* Bottom CTA row */}
        <GSAPReveal
          delay={0.3}
          y={20}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-black/5"
        >
          <div className="text-center sm:text-left">
            <p className="text-navy-900 font-bold">
              All certifications independently audited and verified.
            </p>
            <p className="text-sm font-medium text-navy-500 mt-1">
              Certificates available on request for tender submissions.
            </p>
          </div>
          <div className="flex gap-4 flex-wrap justify-center sm:justify-end">
            <Link
              href="/hse-policy-statement"
              className="inline-flex items-center justify-center gap-2 text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 shadow-brand transition-all px-6 py-3 rounded-xl"
            >
              HSE Policy <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 text-sm font-bold text-brand-600 bg-brand-50 hover:bg-brand-100 transition-colors px-6 py-3 rounded-xl"
            >
              Request certificates <ExternalLink className="size-4" />
            </Link>
          </div>
        </GSAPReveal>
      </div>
    </section>
  );
}
