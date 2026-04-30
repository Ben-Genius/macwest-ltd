"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

interface ProjectDetailHeroProps {
  project: Project;
}

export function ProjectDetailHero({ project }: ProjectDetailHeroProps) {
  return (
    <section className="relative bg-navy-950 overflow-hidden" style={{ minHeight: "75vh" }}>
      {/* Full-bleed background image with less darken — let the image breathe */}
      <div className="absolute inset-0">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient: transparent top → opaque bottom so title reads clearly */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10" />
      </div>

      {/* Back nav */}
      <div className="relative z-10 pt-28 sm:pt-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white/90 transition-colors"
        >
          <ChevronLeft className="size-3.5" />
          All Projects
        </Link>
      </div>

      {/* Content — big Boffi-style title at bottom, overlapping the image edge */}
      <div
        className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full"
        style={{ paddingBottom: "clamp(2.5rem, 5vw, 4rem)", paddingTop: "clamp(6rem, 15vw, 12rem)" }}
      >
        {/* Badges row */}
        <div className="flex flex-wrap items-center gap-2 mb-5">
          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.16em] bg-gold-400/20 text-gold-300 border border-gold-400/30">
            {project.category}
          </span>
          <span
            className={cn(
              "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.12em] border",
              project.status === "active"
                ? "bg-emerald-500/20 text-emerald-300 border-emerald-400/30"
                : "bg-white/10 text-white/70 border-white/20"
            )}
          >
            <span
              className={cn(
                "size-1.5 rounded-full",
                project.status === "active" ? "bg-emerald-400 animate-pulse" : "bg-white/50"
              )}
            />
            {project.status === "active" ? "Active" : "Completed"}
          </span>
        </div>

        {/* Title — huge display */}
        <h1
          className="font-display font-bold text-white leading-[0.95] tracking-[-0.04em] mb-5"
          style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
        >
          {project.title}
        </h1>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-4 text-[12px] text-white/55 font-medium">
          <span className="flex items-center gap-1.5">
            <MapPin className="size-3.5" />
            {project.region}
          </span>
          <span className="text-white/25">·</span>
          <span>{project.yearCompleted ?? project.year}</span>
          {project.client && (
            <>
              <span className="text-white/25">·</span>
              <span>{project.client}</span>
            </>
          )}
          {project.contractValue && project.contractValue !== "—" && (
            <>
              <span className="text-white/25">·</span>
              <span>{project.contractValue}</span>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
