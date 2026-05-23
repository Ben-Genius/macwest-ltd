"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { GSAPReveal } from "@/components/ui/gsap-reveal";
import { ProjectCard } from "./project-card";
import type { Project } from "@/data/projects";

function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" className={className} aria-hidden>
      <path d="M28 0L30.3 24.7L56 28L30.3 31.3L28 56L25.7 31.3L0 28L25.7 24.7L28 0Z" fill="currentColor" />
    </svg>
  );
}

interface ProjectDetailBodyProps {
  project: Project;
  related: Project[];
}

export function ProjectDetailBody({ project, related }: ProjectDetailBodyProps) {
  return (
    <div className="bg-white">
      {/* ── Description + scope ──────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-24 border-b border-navy-100">
        <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-0">

            {/* Description */}
            <div className="lg:pr-16 pb-12 lg:pb-0">
              <GSAPReveal y={14}>
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-brand-600 mb-5">
                  Project overview
                </p>
              </GSAPReveal>
              <GSAPReveal y={20} delay={0.1}>
                <p className="text-base sm:text-lg text-navy-600 leading-relaxed">
                  {project.description}
                </p>
              </GSAPReveal>

              {project.highlights.length > 0 && (
                <GSAPReveal y={16} delay={0.2} className="mt-10">
                  <div className="grid grid-cols-2 gap-3">
                    {project.highlights.map((h) => (
                      <div key={h.label} className="border border-navy-100 rounded-xl px-5 py-4 hover:border-navy-200 transition-colors">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-navy-400 mb-1">{h.label}</p>
                        <p className="font-display text-lg font-bold text-navy-950">{h.value}</p>
                      </div>
                    ))}
                  </div>
                </GSAPReveal>
              )}
            </div>

            {/* Vertical divider */}
            <div className="hidden lg:block w-px bg-navy-100 mx-0" />

            {/* Scope */}
            <div className="lg:pl-16 pt-12 lg:pt-0 border-t lg:border-t-0 border-navy-100">
              <GSAPReveal y={14} delay={0.1}>
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-brand-600 mb-5">
                  Scope of works
                </p>
              </GSAPReveal>
              <ul>
                {project.scope.map((item, i) => (
                  <GSAPReveal key={item} delay={0.15 + i * 0.04} y={10}>
                    <li className="flex items-start gap-3 text-navy-600 text-[14px] leading-snug py-3 border-b border-navy-100 last:border-0">
                      <CheckCircle2 className="size-3.5 text-brand-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  </GSAPReveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Boffi-style gallery — full bleed, asymmetric ─────────────── */}
      {project.images.length > 0 && (
        <section className=" max-w-[100rem] mx-auto py-16 sm:py-20">
          {/* Section label — inside padding */}
          <GSAPReveal y={14} className="px-6 sm:px-10 lg:px-16 mb-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-navy-400">
              Site photography
            </p>
          </GSAPReveal>

          {/* Full-bleed grid — Boffi layout */}
          <div className="px-3 sm:px-4">
            <div className="grid grid-cols-3 gap-2 sm:gap-3">

              {/* Row 1: large left (spans 2 cols + 2 rows) + two stacked right */}
              <GSAPReveal
                y={20}
                delay={0}
                className="col-span-2 row-span-2"
              >
                <div className="relative w-full overflow-hidden rounded-xl bg-navy-100" style={{ height: "clamp(300px, 48vw, 580px)" }}>
                  <Image
                    src={project.images[0]?.src ?? project.cover}
                    alt={project.images[0]?.alt ?? project.title}
                    fill
                    className="object-cover hover:scale-[1.03] transition-transform duration-700 ease-out"
                    sizes="66vw"
                  />
                </div>
                <div className="mt-2 flex items-center justify-between px-0.5">
                  <p className="text-[10px] text-navy-500 font-medium">{project.location}</p>
                  <p className="text-[10px] text-navy-400">Ghana</p>
                </div>
              </GSAPReveal>

              {/* Top-right small */}
              <GSAPReveal y={20} delay={0.08}>
                <div className="relative w-full overflow-hidden rounded-xl bg-navy-100" style={{ height: "clamp(140px, 22vw, 280px)" }}>
                  <Image
                    src={project.images[1]?.src ?? project.cover}
                    alt={project.images[1]?.alt ?? ""}
                    fill
                    className="object-cover hover:scale-[1.03] transition-transform duration-700 ease-out"
                    sizes="33vw"
                  />
                </div>
                <div className="mt-2 px-0.5">
                  <p className="text-[10px] text-navy-500 font-medium">{project.subtitle}</p>
                </div>
              </GSAPReveal>

              {/* Bottom-right small */}
              <GSAPReveal y={20} delay={0.14}>
                <div className="relative w-full overflow-hidden rounded-xl bg-navy-100" style={{ height: "clamp(140px, 22vw, 280px)" }}>
                  <Image
                    src={project.images[2]?.src ?? project.images[1]?.src ?? project.cover}
                    alt={project.images[2]?.alt ?? ""}
                    fill
                    className="object-cover hover:scale-[1.03] transition-transform duration-700 ease-out"
                    sizes="33vw"
                  />
                </div>
                <div className="mt-2 px-0.5">
                  <p className="text-[10px] text-navy-400">{project.year}</p>
                </div>
              </GSAPReveal>

              {/* Row 2: small + wide spanning 2 + star cell */}
              {project.images.length > 3 && (
                <>
                  <GSAPReveal y={20} delay={0.2}>
                    <div className="relative w-full overflow-hidden rounded-xl bg-navy-100" style={{ height: "clamp(160px, 24vw, 300px)" }}>
                      <Image
                        src={project.images[3].src}
                        alt={project.images[3].alt}
                        fill
                        className="object-cover hover:scale-[1.03] transition-transform duration-700 ease-out"
                        sizes="33vw"
                      />
                    </div>
                    <div className="mt-2 px-0.5">
                      <p className="text-[10px] text-navy-500 font-medium">{project.location}</p>
                    </div>
                  </GSAPReveal>

                  {project.images[4] ? (
                    <GSAPReveal y={20} delay={0.26} className="col-span-2">
                      <div className="relative w-full overflow-hidden rounded-xl bg-navy-100" style={{ height: "clamp(160px, 24vw, 300px)" }}>
                        <Image
                          src={project.images[4].src}
                          alt={project.images[4].alt}
                          fill
                          className="object-cover hover:scale-[1.03] transition-transform duration-700 ease-out"
                          sizes="66vw"
                        />
                      </div>
                      <div className="mt-2 px-0.5">
                        <p className="text-[10px] text-navy-400">{project.category}</p>
                      </div>
                    </GSAPReveal>
                  ) : (
                    /* Decorative star cell when no 5th image */
                    <div className="col-span-2 flex items-center justify-end gap-6 pr-8">
                      <Sparkle className="size-10 text-navy-200" />
                      <Sparkle className="size-5 text-navy-100" />
                    </div>
                  )}
                </>
              )}

              {/* Decorative star row if we have enough images */}
              {project.images.length <= 3 && (
                <div className="col-span-3 flex items-center justify-end gap-4 pr-4 pt-2">
                  <Sparkle className="size-8 text-navy-200" />
                  <Sparkle className="size-4 text-navy-100" />
                </div>
              )}
            </div>
          </div>
        </section>
      )}


    </div>
  );
}
