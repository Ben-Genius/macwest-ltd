"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  className?: string;
  variant?: "default" | "list";
  index?: number;
}

export function ProjectCard({ project, className, variant = "default", index }: ProjectCardProps) {
  if (variant === "list") {
    return (
      <Link
        href={`/projects/${project.slug}`}
        className={cn(
          "group flex items-center gap-6 py-6 border-b border-navy-100 last:border-0 hover:bg-sand-50/60 transition-colors duration-200 px-2 rounded-lg",
          className
        )}
      >
        <span className="flex-shrink-0 w-8 text-[11px] font-bold text-navy-300 tabular-nums tracking-widest">
          {String((index ?? 0) + 1).padStart(2, "0")}
        </span>

        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-600 mb-1">
            {project.category}
          </p>
          <h3 className="font-display text-lg sm:text-xl font-bold text-navy-900 group-hover:text-brand-700 transition-colors leading-snug truncate">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-navy-500 flex items-center gap-1.5">
            <MapPin className="size-3 text-navy-400" />
            {project.region} &middot; {project.yearCompleted ?? project.year}
          </p>
        </div>

        <div className="flex-shrink-0 w-20 h-16 relative overflow-hidden rounded-lg hidden sm:block">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="80px"
          />
        </div>

        <ArrowUpRight className="flex-shrink-0 size-4 text-navy-300 group-hover:text-brand-600 transition-colors" />
      </Link>
    );
  }

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn("group block relative overflow-hidden rounded-2xl bg-navy-900 cursor-pointer", className)}
    >
      <div className="relative h-[340px] sm:h-[400px] overflow-hidden">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
      </div>

      {/* Status badge */}
      <div className="absolute top-4 left-4 z-10">
        <span
          className={cn(
            "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.12em]",
            project.status === "active"
              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-400/30"
              : "bg-white/10 text-white/80 border border-white/20"
          )}
        >
          <span
            className={cn(
              "size-1.5 rounded-full",
              project.status === "active" ? "bg-emerald-400 animate-pulse" : "bg-white/60"
            )}
          />
          {project.status === "active" ? "Active" : "Completed"}
        </span>
      </div>

      {/* Arrow badge */}
      <div className="absolute top-4 right-4 z-10 size-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
        <ArrowUpRight className="size-3.5 text-white" />
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 transform transition-transform duration-400 group-hover:-translate-y-1">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400 mb-1.5">
          {project.category}
        </p>
        <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-snug">
          {project.title}
        </h3>
        <p className="mt-2 text-[12px] text-white/65 font-medium tracking-wide flex items-center gap-1.5">
          <MapPin className="size-3" />
          {project.region} &middot; {project.yearCompleted ?? project.year}
        </p>

        {/* Contract value — revealed on hover */}
        {project.contractValue && project.contractValue !== "—" && (
          <p className="mt-3 text-[11px] font-bold text-white/50 tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
            Contract: {project.contractValue}
          </p>
        )}
      </div>
    </Link>
  );
}
