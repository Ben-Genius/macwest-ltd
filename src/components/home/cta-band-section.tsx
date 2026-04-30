"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { m, useScroll, useTransform } from "framer-motion";
import { fadeInUp, scaleIn } from "@/lib/animations";
import { GSAPStaggerText } from "@/components/ui/gsap-stagger-text";
import { ArrowRight, Phone } from "lucide-react";

export function CTABandSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-14%", "14%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-sand-50 py-16 sm:py-20"
    >
      {/* Parallax image — right side, no overlay */}
      <div className="absolute inset-y-0 right-0 w-full sm:w-[58%] overflow-hidden">
        <m.div style={{ y: imageY }} className="absolute inset-x-0 -inset-y-[20%]" aria-hidden>
          <Image
            src="/images/img-port.jpg"
            alt=""
            fill
            className="object-cover object-center"
            sizes="58vw"
          />
        </m.div>
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-sand-50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[95rem] mx-auto px-6 sm:px-10 lg:px-16 flex items-center">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="w-full sm:max-w-[480px] bg-white/88 backdrop-blur-xl rounded-2xl shadow-[0_4px_32px_rgba(10,20,60,0.08)] px-8 py-8 sm:px-10 sm:py-10"
        >
          {/* Eyebrow */}
          <m.p
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[11px] font-bold text-brand-600 uppercase tracking-[0.3em] mb-4"
          >
            Start a project
          </m.p>

          {/* Headline */}
          <GSAPStaggerText
            text="Ready to build something that lasts?"
            className="font-display font-bold text-navy-950 leading-[1.04] tracking-[-0.03em] mb-4"
            y={35}
            duration={0.85}
            stagger={0.04}
          />

          {/* Body */}
          <m.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-navy-500 text-sm leading-relaxed mb-7"
          >
            Certified civil engineering, MEP, and structural solutions built to
            international standards across Ghana and Sub-Saharan Africa.
          </m.p>

          {/* CTAs */}
          <m.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-3"
          >
            <m.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 320, damping: 24 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm tracking-wide transition-colors shadow-sm"
              >
                Get a Quote
                <m.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
                  <ArrowRight className="size-4" />
                </m.span>
              </Link>
            </m.div>

            <m.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 320, damping: 24 }}>
              <Link
                href="tel:+233244270797"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-navy-200 hover:border-navy-400 text-navy-700 hover:text-navy-900 font-bold text-sm tracking-wide transition-all"
              >
                <Phone className="size-3.5" />
                Call us
              </Link>
            </m.div>
          </m.div>

          <m.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-5 text-[10px] font-medium text-navy-300 tracking-widest uppercase"
          >
            ISO 9001 · ISO 14001 · ISO 45001
          </m.p>
        </m.div>
      </div>
    </section>
  );
}
