"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GSAPReveal } from "@/components/ui/gsap-reveal";
import { ACTIVE_PROJECTS } from "@/data/projects";
import type { ProjectCategory } from "@/data/projects";

const categories: (ProjectCategory | "All")[] = [
  "All",
  ...Array.from(new Set(ACTIVE_PROJECTS.map((p) => p.category))),
];

export function CurrentProjectsContent() {
  const [active, setActive] = useState<ProjectCategory | "All">("All");

  const filtered =
    active === "All"
      ? ACTIVE_PROJECTS
      : ACTIVE_PROJECTS.filter((p) => p.category === active);

  const heroImages = ACTIVE_PROJECTS.slice(0, 2);

  return (
    <div className="bg-white">

      {/* ── 1. Large centered header ─────────────────────────────── */}
      <div className="pt-36 pb-10 text-center px-6 border-b border-navy-100">
        <GSAPReveal y={30} duration={1}>
          <h1
            className="font-display font-bold text-navy-950 leading-[0.92] tracking-[-0.04em] uppercase"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            Active
            <br />
            Projects
          </h1>
        </GSAPReveal>
      </div>

      {/* ── 2. Dual hero images ──────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row gap-1 px-0">
        {heroImages.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group relative flex-1 overflow-hidden"
            style={{ height: "clamp(220px, 36vw, 440px)" }}
          >
            <Image
              src={p.cover}
              alt={p.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
            <div className="absolute bottom-4 left-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/80 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full">
                {p.category}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* ── 3. Info bar ──────────────────────────────────────────── */}
      <div className="border-b border-navy-100 px-6 sm:px-10 lg:px-16 py-5 flex flex-wrap items-start justify-between gap-6">
        <div className="flex items-center gap-3">
          <Link
            href="/past-project"
            className="inline-flex items-center gap-1.5 text-[11px] font-bold border border-navy-200 text-navy-700 hover:border-navy-400 hover:text-navy-900 transition-all px-3.5 py-2 rounded-lg"
          >
            View completed <ArrowUpRight className="size-3" />
          </Link>
        </div>

        <p className="text-[12px] text-navy-500 leading-relaxed max-w-xs">
          Civil construction, MEP, housing, and community infrastructure — active across
          multiple regions of Ghana.
        </p>

        <div className="flex flex-wrap gap-3">
          {[
            { v: String(ACTIVE_PROJECTS.length), l: "Active sites" },
            { v: String(new Set(ACTIVE_PROJECTS.map((p) => p.region)).size), l: "Regions" },
            { v: String(new Set(ACTIVE_PROJECTS.map((p) => p.category)).size), l: "Sectors" },
          ].map((s) => (
            <div key={s.l} className="text-right">
              <p className="font-display text-xl font-bold text-navy-950">{s.v}</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-navy-400">{s.l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── 4. Filter + list ─────────────────────────────────────── */}
      <div className="flex flex-col lg:flex-row">

        {/* Sidebar filter */}
        <aside className="lg:w-48 flex-shrink-0 border-b lg:border-b-0 lg:border-r border-navy-100 px-6 sm:px-10 lg:px-8 py-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-navy-400 mb-5">
            Filter
          </p>
          <ul className="space-y-1">
            {categories.map((cat) => {
              const count =
                cat === "All"
                  ? ACTIVE_PROJECTS.length
                  : ACTIVE_PROJECTS.filter((p) => p.category === cat).length;
              return (
                <li key={cat}>
                  <button
                    onClick={() => setActive(cat)}
                    className={`w-full flex items-center justify-between text-left py-2 px-0 text-[12px] font-semibold transition-colors duration-150 border-b border-transparent ${active === cat
                      ? "text-brand-600 border-brand-600"
                      : "text-navy-500 hover:text-navy-900"
                      }`}
                  >
                    <span>{cat}</span>
                    <span className={`text-[10px] tabular-nums ${active === cat ? "text-brand-500" : "text-navy-300"}`}>
                      {count}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        {/* Project list */}
        <div className="flex-1 divide-y divide-navy-100" key={active}>
          {filtered.map((project, i) => (
            <GSAPReveal key={project.slug} delay={i * 0.04} y={16}>
              <Link
                href={`/projects/${project.slug}`}
                className="group grid grid-cols-[2rem_1fr_2fr_1fr] sm:grid-cols-[2rem_1fr_2fr_1fr] lg:grid-cols-[2.0rem_1fr_2fr_2fr] items-start gap-6 px-6 sm:px-10 lg:px-12 py-8 hover:bg-sand-50/60 transition-colors duration-200"
              >
                {/* Col 1 — index, top-aligned */}
                <span className="text-[11px] font-bold text-navy-300 tabular-nums pt-[3px]">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Col 2 — title + badge + location, top-aligned */}
                <div className="min-w-0 flex flex-col justify-between h-full">

                  <h3 className="font-display text-lg sm:text-xl font-bold text-navy-950 group-hover:text-brand-600 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-[11px] text-navy-400 mt-1 font-bold">{project.location}</p>
                </div>

                {/* Col 3 — description top-aligned with title, CTA below */}
                <div className="hidden md:flex flex-col justify-between items-start h-full">
                  <p className="text-[14px] text-navy-500 leading-relaxed">
                    {project.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-bold text-navy-400 group-hover:text-brand-600 transition-colors uppercase tracking-widest">
                    View project <ArrowUpRight className="size-3" />
                  </span>
                </div>

                {/* Col 4 — image stretches to fill the full row height */}
                <div className="relative overflow-hidden rounded-xl bg-navy-100 self-stretch min-h-[350px]">
                  <Image
                    src={project.cover}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 220px, (max-width: 1024px) 300px, 380px"
                  />
                </div>
              </Link>
            </GSAPReveal>
          ))}

          {filtered.length === 0 && (
            <div className="py-24 text-center px-6">
              <p className="text-navy-400 font-medium">No projects in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
