"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GSAPReveal } from "@/components/ui/gsap-reveal";
import { ACTIVE_PROJECTS, COMPLETED_PROJECTS } from "@/data/projects";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ── Shared horizontal scroll strip ──────────────────────────── */
interface HorizontalStripProps {
  projects: Project[];
  eyebrow: string;
  title: string;
  titleAccent: string;
  viewMoreHref: string;
  viewMoreLabel: string;
  statusVariant: "active" | "completed";
}

function HorizontalStrip({
  projects,
  eyebrow,
  title,
  titleAccent,
  viewMoreHref,
  viewMoreLabel,
  statusVariant,
}: HorizontalStripProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => -(track.scrollWidth - window.innerWidth);

      gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${Math.abs(getScrollAmount())}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={cn(
        "h-screen overflow-hidden flex flex-col border-t border-navy-100 pt-30",
        statusVariant === "active" ? "bg-white" : "bg-sand-50"
      )}
    >
      {/* Header */}
      <div className="flex-shrink-0 flex flex-wrap items-start justify-between gap-4 px-6 sm:px-12 lg:px-16 pt-12 pb-8">
        <div>
          <GSAPReveal delay={0.05} y={14}>
            <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-brand-600 mb-3">
              {eyebrow}
            </p>
          </GSAPReveal>
          <GSAPReveal delay={0.15} y={20}>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-[-0.02em] text-navy-950 leading-[1.05]">
              {title} <span className="text-brand-600">{titleAccent}</span>
            </h2>
          </GSAPReveal>
          <GSAPReveal delay={0.2} y={12}>
            <p className="mt-2 text-[12px] font-medium text-navy-400 uppercase tracking-widest">
              {projects.length} project{projects.length !== 1 ? "s" : ""}
            </p>
          </GSAPReveal>
        </div>

        <GSAPReveal delay={0.25} y={14} className="mt-3">
          <Link
            href={viewMoreHref}
            className="inline-flex items-center gap-2 text-[12px] font-bold text-white bg-brand-600 hover:bg-brand-700 transition-colors px-5 py-3 rounded-xl shadow-sm"
          >
            {viewMoreLabel} <ArrowRight className="size-4" />
          </Link>
        </GSAPReveal>
      </div>

      {/* Horizontal scrolling track */}
      <div className="flex-1 overflow-hidden min-h-0">
        <div
          ref={trackRef}
          className="flex h-full pl-8 sm:pl-12 lg:pl-16 pr-24 pb-10 gap-4 will-change-transform"
          style={{ width: "max-content" }}
        >
          {projects.map((project, i) => {
            const isPlaceholder = statusVariant === "active" || !project.cover;

            return (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="flex-shrink-0 flex flex-col gap-3 group"
                style={{ width: "clamp(300px, 36vw, 480px)" }}
              >
                {/* Index + divider + category */}
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-[11px] font-bold text-navy-300 tracking-widest tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="h-px flex-1 bg-navy-500 group-hover:bg-brand-400 transition-colors duration-500" />
                  <span className="text-[10px] font-bold text-navy-400 tracking-[0.14em] uppercase whitespace-nowrap">
                    {project.category}
                  </span>
                </div>

                {/* Card */}
                <div className="text-white flex-1 relative overflow-hidden rounded-xl bg-navy-50/50 cursor-pointer min-h-0 max-h-[62vh]">
                  {!isPlaceholder ? (
                    <Image
                      src={project.cover}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 640px) 80vw, 32vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-navy-700">
                      <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-navy-300">
                        Images coming soon
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Status pill */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-[0.14em]",
                        statusVariant === "active"
                          ? "bg-emerald-500/90 text-white"
                          : "bg-white/15 text-white/80 backdrop-blur-sm"
                      )}
                    >
                      <span
                        className={cn(
                          "size-1.5 rounded-full",
                          statusVariant === "active"
                            ? "bg-white animate-pulse"
                            : "bg-white/60"
                        )}
                      />
                      {statusVariant === "active" ? "Active" : "Delivered"}
                    </span>
                  </div>

                  {/* Bottom text */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 transform transition-transform duration-500 group-hover:-translate-y-2 text-white">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 mb-1.5">
                      {project.subtitle}
                    </p>
                    <h3 className="font-display text-xl sm:text-[1.4rem] font-bold text-white leading-snug">
                      {project.title}
                    </h3>
                    <p className="mt-1.5 text-[12px] text-white/65 font-medium tracking-wide">
                      {project.location} &middot; {project.yearCompleted ?? project.year}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Exported wrapper — renders both strips ───────────────────── */
export function ProjectsHubCards() {
  return (
    <>
      <HorizontalStrip
        projects={ACTIVE_PROJECTS}
        eyebrow="Ongoing work"
        title="Currently"
        titleAccent="in progress."
        viewMoreHref="/current-projects"
        viewMoreLabel="View all active"
        statusVariant="active"
      />
      <HorizontalStrip
        projects={COMPLETED_PROJECTS}
        eyebrow="Delivered work"
        title="Completed"
        titleAccent="projects."
        viewMoreHref="/past-project"
        viewMoreLabel="View all completed"
        statusVariant="completed"
      />
    </>
  );
}
