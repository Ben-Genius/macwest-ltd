"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { fadeInUp, scaleIn, EASE } from "@/lib/animations";
import { GSAPStaggerText } from "@/components/ui/gsap-stagger-text";

export function CTABandSection() {
  return (
    <section className="relative bg-brand-800 overflow-hidden">
      {/* Ambient orbs */}


      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-28 lg:py-10 text-center">
        {/* Label */}
        <m.p
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-xs font-bold  text-white uppercase tracking-[0.22em] text-brand-400 mb-6"
        >
          Start a project
        </m.p>

        {/* Headline */}
        <GSAPStaggerText
          text="Ready to build something that lasts?"
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight justify-center mb-6"
          y={50}
          duration={1}
          stagger={0.04}
        />

        {/* Subtext */}
        <m.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-navy-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10"
        >
          From civil infrastructure to MEP and structural engineering — certified, precise, and built to international standards.
        </m.p>

        {/* CTA button */}
        <m.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <m.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="inline-block"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm sm:text-base tracking-wide transition-colors duration-200 shadow-lg shadow-brand-900/40"
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
        </m.div>


      </div>
    </section>
  );
}
