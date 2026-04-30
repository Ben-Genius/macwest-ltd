"use client";

import { cn } from "@/lib/utils";
import type { ProjectCategory } from "@/data/projects";

interface ProjectFilterProps {
  categories: (ProjectCategory | "All")[];
  active: ProjectCategory | "All";
  onChange: (cat: ProjectCategory | "All") => void;
  className?: string;
}

export function ProjectFilter({ categories, active, onChange, className }: ProjectFilterProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={cn(
            "px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-200",
            active === cat
              ? "bg-brand-600 text-white shadow-sm"
              : "bg-white border border-navy-200 text-navy-600 hover:border-brand-400 hover:text-brand-700"
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

interface YearFilterProps {
  years: (string | "All")[];
  active: string;
  onChange: (year: string) => void;
  className?: string;
}

export function YearFilter({ years, active, onChange, className }: YearFilterProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {years.map((year) => (
        <button
          key={year}
          onClick={() => onChange(year)}
          className={cn(
            "px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-200",
            active === year
              ? "bg-navy-900 text-white shadow-sm"
              : "bg-white border border-navy-200 text-navy-600 hover:border-navy-400 hover:text-navy-900"
          )}
        >
          {year}
        </button>
      ))}
    </div>
  );
}
