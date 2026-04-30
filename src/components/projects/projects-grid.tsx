"use client";

import { useState } from "react";
import { GSAPReveal } from "@/components/ui/gsap-reveal";
import { ProjectCard } from "./project-card";
import { ProjectFilter } from "./project-filter";
import { cn } from "@/lib/utils";
import type { Project, ProjectCategory } from "@/data/projects";

interface ProjectsGridProps {
  projects: Project[];
  showFilter?: boolean;
  filterType?: "category" | "year";
  variant?: "grid" | "list";
  className?: string;
}

export function ProjectsGrid({
  projects,
  showFilter = true,
  filterType = "category",
  variant = "grid",
  className,
}: ProjectsGridProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">("All");
  const [activeYear, setActiveYear] = useState<string>("All");

  const categories: (ProjectCategory | "All")[] = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  const years: string[] = [
    "All",
    ...Array.from(
      new Set(projects.map((p) => p.yearCompleted ?? p.year))
    ).sort((a, b) => Number(b) - Number(a)),
  ];

  const filtered = projects.filter((p) => {
    if (filterType === "category" && activeCategory !== "All") {
      return p.category === activeCategory;
    }
    if (filterType === "year" && activeYear !== "All") {
      return (p.yearCompleted ?? p.year) === activeYear;
    }
    return true;
  });

  return (
    <div className={cn("", className)}>
      {showFilter && (
        <div className="mb-8">
          {filterType === "category" ? (
            <ProjectFilter
              categories={categories}
              active={activeCategory}
              onChange={setActiveCategory}
            />
          ) : (
            <ProjectFilter
              categories={years as (ProjectCategory | "All")[]}
              active={activeYear as (ProjectCategory | "All")}
              onChange={(v) => setActiveYear(v)}
            />
          )}
        </div>
      )}

      {variant === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project, i) => (
            <GSAPReveal key={project.slug} delay={i * 0.05} y={20}>
              <ProjectCard project={project} />
            </GSAPReveal>
          ))}
        </div>
      ) : (
        <div className="divide-y divide-navy-100">
          {filtered.map((project, i) => (
            <GSAPReveal key={project.slug} delay={i * 0.04} y={14}>
              <ProjectCard project={project} variant="list" index={i} />
            </GSAPReveal>
          ))}
        </div>
      )}

      {filtered.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-navy-400 font-medium">No projects match the selected filter.</p>
        </div>
      )}
    </div>
  );
}
