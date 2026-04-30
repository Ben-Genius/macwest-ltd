"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { GSAPReveal } from "@/components/ui/gsap-reveal";
import { ProjectCard } from "./project-card";
import type { Project } from "@/data/projects";

interface ProjectDetailBodyProps {
  project: Project;
  related: Project[];
}

export function ProjectDetailBody({ project, related }: ProjectDetailBodyProps) {
  return (
    <>
      {/* ── Info band — light ──────────────────────────────────────── */}
      <section className="bg-white border-b border-navy-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-navy-100">
            {[
              { label: "Location", value: project.location },
              { label: "Sector", value: project.category },
              { label: "Year", value: project.yearCompleted ?? project.year },
              { label: "Duration", value: project.duration ?? "—" },
            ].map((item) => (
              <div key={item.label} className="px-5 py-6 sm:px-8 sm:py-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-navy-400 mb-1.5">
                  {item.label}
                </p>
                <p className="text-sm sm:text-[15px] font-semibold text-navy-900 leading-snug">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Description + scope — light ────────────────────────────── */}
      <section className="bg-sand-50 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Description side */}
            <div>
              <GSAPReveal y={16}>
                <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-brand-600 mb-4">
                  Project overview
                </p>
              </GSAPReveal>
              <GSAPReveal y={20} delay={0.1}>
                <p className="text-lg sm:text-xl text-navy-700 leading-relaxed">
                  {project.description}
                </p>
              </GSAPReveal>

              {/* Highlights grid */}
              {project.highlights.length > 0 && (
                <GSAPReveal y={18} delay={0.2} className="mt-10">
                  <div className="grid grid-cols-2 gap-3">
                    {project.highlights.map((h) => (
                      <div
                        key={h.label}
                        className="bg-white rounded-xl px-5 py-5 border border-navy-100 hover:border-navy-200 transition-colors"
                      >
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-navy-400 mb-1.5">
                          {h.label}
                        </p>
                        <p className="font-display text-xl font-bold text-navy-950 leading-snug">
                          {h.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </GSAPReveal>
              )}
            </div>

            {/* Scope side */}
            <div>
              <GSAPReveal y={16} delay={0.15}>
                <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-brand-600 mb-4">
                  Scope of works
                </p>
              </GSAPReveal>
              <ul className="space-y-3.5">
                {project.scope.map((item, i) => (
                  <GSAPReveal key={item} delay={0.2 + i * 0.04} y={10}>
                    <li className="flex items-start gap-3 text-navy-700 text-[15px] leading-snug py-2 border-b border-navy-100 last:border-0">
                      <CheckCircle2 className="size-4 text-brand-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  </GSAPReveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Photo gallery — white ──────────────────────────────────── */}
      {project.images.length > 1 && (
        <section className="bg-white py-16 sm:py-20 border-t border-navy-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <GSAPReveal y={14} className="mb-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-600">
                Site photography
              </p>
            </GSAPReveal>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {project.images.map((img, i) => (
                <GSAPReveal
                  key={img.src}
                  delay={i * 0.06}
                  y={16}
                  className={i === 0 ? "col-span-2 sm:col-span-2 sm:row-span-1" : ""}
                >
                  <div
                    className={`relative overflow-hidden rounded-xl bg-navy-100 ${
                      i === 0 ? "h-[240px] sm:h-[300px]" : "h-[180px] sm:h-[220px]"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 640px) 50vw, 33vw"
                    />
                  </div>
                  {/* Boffi-style label below each photo */}
                  <p className="mt-2 text-[10px] text-navy-400 px-0.5">{img.alt}</p>
                </GSAPReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Related projects — sand ────────────────────────────────── */}
      {related.length > 0 && (
        <section className="bg-sand-50 py-16 sm:py-24 border-t border-navy-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
              <div>
                <GSAPReveal y={14}>
                  <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-brand-600 mb-2">
                    Keep exploring
                  </p>
                </GSAPReveal>
                <GSAPReveal y={18} delay={0.1}>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-950 tracking-[-0.02em]">
                    Related projects
                  </h2>
                </GSAPReveal>
              </div>
              <GSAPReveal y={12} delay={0.1}>
                <Link
                  href="/projects"
                  className="hidden sm:inline-flex items-center gap-2 text-[12px] font-bold text-navy-400 hover:text-navy-900 transition-colors uppercase tracking-widest"
                >
                  View all <ArrowUpRight className="size-3.5" />
                </Link>
              </GSAPReveal>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
              {related.map((p, i) => (
                <GSAPReveal key={p.slug} delay={i * 0.07} y={20}>
                  <div>
                    <ProjectCard project={p} className="h-[300px]" />
                    <div className="mt-2.5 flex items-start justify-between gap-2 px-1">
                      <p className="text-[11px] font-semibold text-navy-700 leading-snug">{p.location}</p>
                      <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-navy-300 flex-shrink-0">
                        {p.yearCompleted ?? p.year}
                      </span>
                    </div>
                  </div>
                </GSAPReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
