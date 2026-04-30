"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { GSAPReveal } from "@/components/ui/gsap-reveal";
import { ACTIVE_PROJECTS, COMPLETED_PROJECTS } from "@/data/projects";

const cards = [
  {
    href: "/current-projects",
    label: "Current Projects",
    count: ACTIVE_PROJECTS.length,
    countLabel: "active sites",
    description:
      "Construction, civil engineering, MEP, and community infrastructure underway across Ghana.",
    cover: "/images/DJI_20240911144011_0234_D_PARZIAIR.jpg_1.jpeg",
    statusDot: "bg-emerald-400 animate-pulse",
    statusText: "In progress",
    statusStyle: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  },
  {
    href: "/past-project",
    label: "Completed Projects",
    count: COMPLETED_PROJECTS.length,
    countLabel: "delivered",
    description:
      "Housing estates, marine logistics, sports infrastructure, and civil works — delivered.",
    cover: "/images/IMG_8104-scaled.jpg.jpeg",
    statusDot: "bg-navy-400",
    statusText: "Delivered",
    statusStyle: "bg-navy-50 text-navy-600 border border-navy-200",
  },
];

export function ProjectsHubCards() {
  return (
    <section className="bg-sand-50 py-16 sm:py-24 border-t border-navy-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <GSAPReveal y={14}>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-600 mb-3">
                Browse by status
              </p>
            </GSAPReveal>
            <GSAPReveal y={18} delay={0.1}>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950 tracking-[-0.03em]">
                Explore the portfolio
              </h2>
            </GSAPReveal>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cards.map((card, i) => (
            <GSAPReveal key={card.href} delay={0.12 + i * 0.1} y={24}>
              <Link
                href={card.href}
                className="group block bg-white rounded-2xl border border-navy-100 overflow-hidden hover:border-navy-200 hover:shadow-lg transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-[240px] sm:h-[280px] overflow-hidden rounded-t-2xl">
                  <Image
                    src={card.cover}
                    alt={card.label}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                  {/* Corner arrow */}
                  <div className="absolute top-4 right-4 size-9 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                    <ArrowUpRight className="size-4 text-navy-900" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-4">
                    {/* Status pill */}
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.12em] ${card.statusStyle}`}>
                      <span className={`size-1.5 rounded-full ${card.statusDot}`} />
                      {card.statusText}
                    </span>

                    {/* Count */}
                    <span className="font-display text-3xl font-bold text-navy-950">
                      {card.count}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-navy-950 mb-2">
                    {card.label}
                  </h3>
                  <p className="text-sm text-navy-500 leading-relaxed mb-5">
                    {card.description}
                  </p>

                  <div className="flex items-center gap-2 text-[12px] font-bold text-navy-400 group-hover:text-brand-600 transition-colors uppercase tracking-widest">
                    <span>View all</span>
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </GSAPReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
