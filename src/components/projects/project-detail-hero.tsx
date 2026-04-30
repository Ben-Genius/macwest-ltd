"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

export function ProjectDetailHero({ project }: { project: Project }) {
  return (
    <>
      {/* ── Full-bleed image — no overlay, no text ─────────────────── */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: "clamp(300px, 62vh, 680px)" }}
      >
        <Image
          src={project.cover}
          alt={project.title}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Soft white fade at bottom only — ties into the content band */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />

        {/* Back link — top-left, minimal */}
        <div className="absolute top-0 left-0 right-0 pt-24 sm:pt-28 px-6 sm:px-10 lg:px-16 z-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.22em] text-white/60 hover:text-white transition-colors bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full"
          >
            <ChevronLeft className="size-3" />
            Projects
          </Link>
        </div>
      </div>

      {/* ── Title band — white, clean ──────────────────────────────── */}
      <div className="bg-white border-b border-navy-100">
        <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16 py-8 sm:py-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">

            {/* Title */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-600">
                  {project.category}
                </span>
                <span className="text-navy-200">·</span>
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em]",
                    project.status === "active" ? "text-emerald-600" : "text-navy-400"
                  )}
                >
                  <span className={cn(
                    "size-1.5 rounded-full",
                    project.status === "active" ? "bg-emerald-400 animate-pulse" : "bg-navy-300"
                  )} />
                  {project.status === "active" ? "Active" : "Completed"}
                </span>
              </div>
              <h1
                className="font-display font-bold text-navy-950 leading-[0.95] tracking-[-0.04em]"
                style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
              >
                {project.title}
              </h1>
            </div>

            {/* Meta — right aligned */}
            <div className="flex flex-wrap gap-x-8 gap-y-2 sm:text-right flex-shrink-0">
              {[
                { label: "Location", value: project.location },
                { label: "Year", value: project.yearCompleted ?? project.year },
                { label: "Duration", value: project.duration ?? "—" },
              ].map((m) => (
                <div key={m.label}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-navy-400">{m.label}</p>
                  <p className="text-sm font-semibold text-navy-900 mt-0.5">{m.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
