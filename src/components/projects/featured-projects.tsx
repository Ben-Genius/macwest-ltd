"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { GSAPReveal } from "@/components/ui/gsap-reveal";
import { FEATURED_PROJECTS } from "@/data/projects";
import { cn } from "@/lib/utils";

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={cn("", className)}
      aria-hidden
    >
      <path
        d="M24 0L25.7 21.3L48 24L25.7 26.7L24 48L22.3 26.7L0 24L22.3 21.3L24 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function FeaturedProjects() {
  const featured = FEATURED_PROJECTS.slice(0, 4);

  return (
    <section className="bg-white py-16 sm:py-24 border-t border-navy-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <GSAPReveal y={14}>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-600 mb-3">
                Selected work
              </p>
            </GSAPReveal>
            <GSAPReveal y={20} delay={0.1}>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950 tracking-[-0.03em]">
                Featured projects
              </h2>
            </GSAPReveal>
          </div>
          <GSAPReveal y={14} delay={0.15}>
            <Link
              href="/projects"
              className="hidden sm:inline-flex items-center gap-2 text-[12px] font-bold text-navy-400 hover:text-navy-900 transition-colors uppercase tracking-widest"
            >
              View all <ArrowUpRight className="size-3.5" />
            </Link>
          </GSAPReveal>
        </div>

        {/* Boffi-inspired masonry grid — images with location below */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-8 sm:gap-x-4 sm:gap-y-10">
          {featured.map((project, i) => (
            <GSAPReveal
              key={project.slug}
              delay={i * 0.07}
              y={22}
              className={cn(
                project.span === "wide" ? "col-span-2 sm:col-span-2" : "",
                project.span === "tall" ? "row-span-2" : ""
              )}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group block"
              >
                {/* Image — no overlay text, Boffi-style */}
                <div
                  className={cn(
                    "relative overflow-hidden rounded-xl bg-navy-100",
                    project.span === "wide" ? "h-[220px] sm:h-[280px]" : "h-[240px] sm:h-[320px]"
                  )}
                >
                  <Image
                    src={project.cover}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />

                  {/* Status badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-[0.14em]",
                        project.status === "active"
                          ? "bg-emerald-500/90 text-white"
                          : "bg-black/40 text-white/90 backdrop-blur-sm"
                      )}
                    >
                      <span
                        className={cn(
                          "size-1.5 rounded-full",
                          project.status === "active" ? "bg-white animate-pulse" : "bg-white/70"
                        )}
                      />
                      {project.status === "active" ? "Active" : "Delivered"}
                    </span>
                  </div>

                  {/* Hover arrow */}
                  <div className="absolute top-3 right-3 size-8 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 shadow-sm">
                    <ArrowUpRight className="size-3.5 text-navy-900" />
                  </div>
                </div>

                {/* Boffi-style: location left + category right below image */}
                <div className="mt-2.5 flex items-start justify-between gap-2">
                  <div>
                    <p className="text-[11px] font-semibold text-navy-800 leading-snug group-hover:text-brand-600 transition-colors">
                      {project.title}
                    </p>
                    <p className="text-[10px] text-navy-400 mt-0.5">
                      {project.location}
                    </p>
                  </div>
                  <span className="flex-shrink-0 text-[10px] font-bold uppercase tracking-[0.14em] text-navy-300 mt-0.5">
                    {project.yearCompleted ?? project.year}
                  </span>
                </div>
              </Link>
            </GSAPReveal>
          ))}

          {/* Decorative star cell — Boffi-inspired */}
          <div className="hidden sm:flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <StarIcon className="size-10 text-navy-200" />
              <StarIcon className="size-5 text-navy-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
