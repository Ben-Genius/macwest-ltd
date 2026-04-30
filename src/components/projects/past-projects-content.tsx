"use client";

import { useState } from "react";
import { GSAPReveal } from "@/components/ui/gsap-reveal";
import { ProjectCard } from "./project-card";
import { YearFilter } from "./project-filter";
import { COMPLETED_PROJECTS } from "@/data/projects";

const years = [
  "All",
  ...Array.from(
    new Set(COMPLETED_PROJECTS.map((p) => p.yearCompleted ?? p.year))
  ).sort((a, b) => Number(b) - Number(a)),
];

type ViewMode = "grid" | "list";

export function PastProjectsContent() {
  const [activeYear, setActiveYear] = useState("All");
  const [viewMode, setViewMode] = useState<ViewMode>("list");

  const filtered =
    activeYear === "All"
      ? COMPLETED_PROJECTS
      : COMPLETED_PROJECTS.filter(
          (p) => (p.yearCompleted ?? p.year) === activeYear
        );

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Controls row */}
        <GSAPReveal y={14}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 sm:mb-14">
            <YearFilter
              years={years}
              active={activeYear}
              onChange={setActiveYear}
            />

            {/* View toggle */}
            <div className="flex items-center gap-1 bg-navy-50 rounded-lg p-1 self-start sm:self-auto flex-shrink-0">
              {(["list", "grid"] as ViewMode[]).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`px-3 py-1.5 rounded-md text-[11px] font-bold uppercase tracking-widest transition-all duration-200 ${
                    viewMode === mode
                      ? "bg-white text-navy-900 shadow-sm"
                      : "text-navy-400 hover:text-navy-700"
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>
        </GSAPReveal>

        {viewMode === "list" ? (
          /* ── Zaha Hadid-inspired list layout ── */
          <div key={`list-${activeYear}`}>
            {filtered.map((project, i) => (
              <GSAPReveal key={project.slug} delay={i * 0.05} y={18}>
                <ProjectCard project={project} variant="list" index={i} />
              </GSAPReveal>
            ))}
          </div>
        ) : (
          /* ── Grid layout ── */
          <div key={`grid-${activeYear}`} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project, i) => (
              <GSAPReveal key={project.slug} delay={i * 0.06} y={22}>
                <ProjectCard project={project} className="h-full" />
              </GSAPReveal>
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-navy-400 font-medium">
              No completed projects in {activeYear}.
            </p>
          </div>
        )}

        {/* Archive count */}
        {filtered.length > 0 && (
          <GSAPReveal y={12} className="mt-12 pt-8 border-t border-navy-100">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-navy-300 text-center">
              {filtered.length} of {COMPLETED_PROJECTS.length} completed projects shown
            </p>
          </GSAPReveal>
        )}
      </div>
    </section>
  );
}
