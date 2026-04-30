"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GSAPReveal } from "@/components/ui/gsap-reveal";
import { ACTIVE_PROJECTS, COMPLETED_PROJECTS } from "@/data/projects";

const stats = [
  { value: String(ACTIVE_PROJECTS.length + COMPLETED_PROJECTS.length) + "+", label: "Total Projects" },
  { value: String(ACTIVE_PROJECTS.length), label: "Active Sites" },
  { value: "6", label: "Sectors" },
  { value: "14+", label: "Years" },
];

export function ProjectsOverviewHero() {
  return (
    <section className="relative bg-white overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20">
      {/* Subtle blueprint grid — very faint */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10,20,60,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(10,20,60,0.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Decorative star — Boffi-inspired */}
      <svg
        className="pointer-events-none absolute top-36 right-12 opacity-10 hidden lg:block"
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
      >
        <path d="M36 0L38.5 33.5L72 36L38.5 38.5L36 72L33.5 38.5L0 36L33.5 33.5L36 0Z" fill="#8B0B03" />
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <GSAPReveal delay={0.05} y={14}>
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-600 mb-6">
            Macwest Limited — Portfolio
          </p>
        </GSAPReveal>

        {/* Headline — Zaha Hadid large bold style */}
        <div className="mb-8">
          <GSAPReveal delay={0.1} y={40} duration={0.9}>
            <h1
              className="font-display font-bold text-navy-950 leading-[0.95] tracking-[-0.04em]"
              style={{ fontSize: "clamp(3.5rem, 9vw, 7.5rem)" }}
            >
              Projects
            </h1>
          </GSAPReveal>
          <GSAPReveal delay={0.2} y={40} duration={0.9}>
            <h1
              className="font-display font-bold leading-[0.95] tracking-[-0.04em] text-brand-600"
              style={{ fontSize: "clamp(3.5rem, 9vw, 7.5rem)" }}
            >
              built to last.
            </h1>
          </GSAPReveal>
        </div>

        {/* Subtext + CTAs in row */}
        <div className="flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-12">
          <GSAPReveal delay={0.35} y={18} className="max-w-md">
            <p className="text-base sm:text-lg text-navy-500 leading-relaxed">
              From civil infrastructure to offshore marine operations — certified, high-quality
              construction across Ghana and Sub-Saharan Africa.
            </p>
          </GSAPReveal>

          <GSAPReveal delay={0.45} y={14} className="flex flex-wrap gap-3 sm:ml-auto flex-shrink-0">
            <Link
              href="/current-projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-navy-950 hover:bg-navy-800 text-white text-[12px] font-bold uppercase tracking-widest transition-colors"
            >
              Current projects <ArrowUpRight className="size-3.5" />
            </Link>
            <Link
              href="/past-project"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-navy-200 hover:border-navy-400 text-navy-700 text-[12px] font-bold uppercase tracking-widest transition-colors"
            >
              Completed work
            </Link>
          </GSAPReveal>
        </div>

        {/* Stats row — horizontal rule with inline stats */}
        <div className="mt-16 pt-8 border-t border-navy-100 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <GSAPReveal key={stat.label} delay={0.5 + i * 0.06} y={12}>
              <div>
                <p className="font-display text-4xl sm:text-5xl font-bold text-navy-950 tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.2em] text-navy-400">
                  {stat.label}
                </p>
              </div>
            </GSAPReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
