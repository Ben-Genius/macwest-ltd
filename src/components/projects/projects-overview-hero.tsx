"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { m } from "framer-motion";
import { GSAPReveal } from "@/components/ui/gsap-reveal";
import { ACTIVE_PROJECTS, COMPLETED_PROJECTS } from "@/data/projects";

const stats = [
  { value: String(ACTIVE_PROJECTS.length + COMPLETED_PROJECTS.length) + "+", label: "Total Projects" },
  { value: String(ACTIVE_PROJECTS.length), label: "Active Sites" },
  { value: "6", label: "Sectors" },
  { value: "14+", label: "Years Active" },
];

function Sparkle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 56 56"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M28 0L30.3 24.7L56 28L30.3 31.3L28 56L25.7 31.3L0 28L25.7 24.7L28 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ProjectsOverviewHero() {
  return (
    <>
      {/* ── 1. Full-bleed hero image — no overlay, no text ─────────── */}
      <section className="relative overflow-hidden" style={{ height: "clamp(320px, 58vh, 640px)" }}>
        <Image
          src="/images/DJI_20240911144011_0234_D_PARZIAIR.jpg_1.jpeg"
          alt="Macwest project aerial view"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Soft bottom fade into the white band */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ── 2. Title band — Boffi-inspired, light ──────────────────── */}
      <section className="relative bg-white overflow-hidden">

        {/* Sparkle decorations — positioned at image/band boundary */}
        <div className="absolute -top-6 right-[18%] pointer-events-none">
          <Sparkle className="size-14 text-navy-900 opacity-90" />
        </div>
        <div className="absolute top-6 right-[26%] pointer-events-none">
          <Sparkle className="size-6 text-navy-400 opacity-60" />
        </div>

        {/* Main title row */}
        <div className="max-w-[100rem] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-8 pt-6 sm:pt-3 pb-0">

            {/* Giant display title */}
            <GSAPReveal y={40} duration={1} className="flex-1 min-w-0">
              <h1
                className="font-display font-bold text-navy-950 leading-[0.88] tracking-[-0.04em]"
                style={{ fontSize: "clamp(3.5rem, 13vw, 11rem)" }}
              >
                Projects
              </h1>
            </GSAPReveal>

            {/* Right: brand label + description */}
            <GSAPReveal y={24} delay={0.18} className="sm:flex-shrink-0 max-w-full sm:max-w-[260px] md:max-w-[300px] pb-0 sm:pb-3 md:pb-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-brand-600 mb-2">
                Macwest Portfolio
              </p>
              <p className="text-[13px] text-navy-500 leading-relaxed">
                Our projects span civil construction, housing estates, MEP, maritime
                operations, and community infrastructure — each delivered to ISO standards.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <Link
                  href="/current-projects"
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-navy-700 hover:text-brand-600 transition-colors"
                >
                  Current <ArrowUpRight className="size-3" />
                </Link>
                <span className="text-navy-200">·</span>
                <Link
                  href="/past-project"
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-navy-700 hover:text-brand-600 transition-colors"
                >
                  Completed <ArrowUpRight className="size-3" />
                </Link>
              </div>
            </GSAPReveal>
          </div>
        </div>

        {/* ── 3. Stats strip ─────────────────────────────────────────── */}
        <div className="border-t border-navy-100 mt-6">
          <div className="max-w-[100rem] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-navy-100">
              {stats.map((stat, i) => (
                <GSAPReveal key={stat.label} delay={0.1 + i * 0.07} y={16}>
                  <m.div
                    whileHover={{ backgroundColor: "rgba(139,11,3,0.03)" }}
                    className="px-5 py-7 sm:px-8 sm:py-9 transition-colors duration-200"
                  >
                    <p
                      className="font-display font-bold text-navy-950 tracking-tight leading-none"
                      style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
                    >
                      {stat.value}
                    </p>
                    <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.22em] text-navy-400">
                      {stat.label}
                    </p>
                  </m.div>
                </GSAPReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
