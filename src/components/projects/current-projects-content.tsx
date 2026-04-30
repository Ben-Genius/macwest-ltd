"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GSAPReveal } from "@/components/ui/gsap-reveal";
import { ProjectCard } from "./project-card";
import { ProjectFilter } from "./project-filter";
import { ACTIVE_PROJECTS } from "@/data/projects";
import type { ProjectCategory } from "@/data/projects";

const statItems = [
  { value: String(ACTIVE_PROJECTS.length), label: "Active Sites" },
  {
    value: String(new Set(ACTIVE_PROJECTS.map((p) => p.region)).size),
    label: "Regions",
  },
  {
    value: String(new Set(ACTIVE_PROJECTS.map((p) => p.category)).size),
    label: "Sectors",
  },
];

const categories: (ProjectCategory | "All")[] = [
  "All",
  ...Array.from(new Set(ACTIVE_PROJECTS.map((p) => p.category))),
];

export function CurrentProjectsContent() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">("All");

  const filtered =
    activeCategory === "All"
      ? ACTIVE_PROJECTS
      : ACTIVE_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Stats strip — light */}
      <section className="bg-sand-50 border-b border-navy-100 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-8 sm:gap-14">
            {statItems.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl sm:text-4xl font-bold text-navy-950 tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.22em] text-navy-400">
                  {stat.label}
                </p>
              </div>
            ))}
            <div className="ml-auto">
              <Link
                href="/past-project"
                className="inline-flex items-center gap-2 text-[11px] font-bold text-navy-400 hover:text-navy-900 transition-colors uppercase tracking-widest"
              >
                View completed <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter bar */}
          <GSAPReveal y={14}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
              <ProjectFilter
                categories={categories}
                active={activeCategory}
                onChange={setActiveCategory}
              />
              <p className="text-[11px] font-medium text-navy-400 flex-shrink-0 uppercase tracking-widest">
                {filtered.length} project{filtered.length !== 1 ? "s" : ""}
              </p>
            </div>
          </GSAPReveal>

          {/* Grid — Boffi-inspired with location labels below */}
          {/* key=activeCategory forces full re-mount on filter change, preventing stale GSAP refs */}
          <div key={activeCategory} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
            {filtered.map((project, i) => (
              <GSAPReveal key={project.slug} delay={i * 0.06} y={22}>
                <div className="group">
                  <ProjectCard project={project} className="h-[320px] sm:h-[360px]" />
                  {/* Boffi-style label below card */}
                  <div className="mt-3 flex items-start justify-between gap-2 px-1">
                    <div>
                      <p className="text-[11px] font-semibold text-navy-700 leading-snug">
                        {project.location}
                      </p>
                      <p className="text-[10px] text-navy-400">
                        Ghana
                      </p>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-navy-300 flex-shrink-0 mt-0.5">
                      {project.category.split(" ")[0]}
                    </span>
                  </div>
                </div>
              </GSAPReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-navy-400 font-medium">No active projects in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
