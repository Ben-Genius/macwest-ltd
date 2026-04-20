"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GSAPReveal } from "@/components/ui/gsap-reveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    id: 1,
    title: "Community Sports Complex",
    subtitle: "Structural Engineering & Civil Works",
    category: "Civil Engineering",
    location: "Western Region, Ghana",
    year: "2024",
    image: "/images/DJI_20240911144011_0234_D_PARZIAIR.jpg_1.jpeg",
  },
  {
    id: 2,
    title: "Housing Estate Development",
    subtitle: "Residential Planning & Development",
    category: "Housing Estates",
    location: "Accra, Ghana",
    year: "2023",
    image: "/images/IMG_8104-scaled.jpg.jpeg",
  },
  {
    id: 3,
    title: "Commercial Building",
    subtitle: "Construction & Finishing Works",
    category: "Construction",
    location: "Western Region, Ghana",
    year: "2023",
    image: "/images/IMG_2913-scaled.jpg.jpeg",
  },
  {
    id: 4,
    title: "Offshore Support Vessel Operations",
    subtitle: "Maritime & Offshore Services",
    category: "Maritime & Offshore",
    location: "Gulf of Guinea",
    year: "2023",
    image: "/images/IMG_4741-scaled.jpg.jpeg",
  },
  {
    id: 5,
    title: "Concrete Works & Foundation",
    subtitle: "Geotechnical & Foundation Works",
    category: "Civil Engineering",
    location: "Northern Region, Ghana",
    year: "2024",
    image: "/images/IMG_9861-scaled.jpg.jpeg",
  },
];

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
      className="h-screen overflow-hidden bg-sand-50 flex flex-col"
    >
      {/* Header */}
      <div className="flex-shrink-0 flex items-start justify-between px-8 sm:px-12 lg:px-16 pt-12 pb-8">
        <div>
          <GSAPReveal delay={0.1} y={15}>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold-600 mb-3">
              Selected work
            </p>
          </GSAPReveal>
          <GSAPReveal delay={0.2} y={20}>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-[-0.02em] text-navy-900 leading-[1.05]">
              Projects built <span className="text-brand-600"> to last. </span>
            </h2>
          </GSAPReveal>
        </div>
        <GSAPReveal delay={0.3} y={15} className="mt-3">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[13px] font-bold text-white bg-brand-600 hover:bg-brand-700 transition-colors px-5 py-3 rounded-xl shadow-sm"
          >
            View all <ArrowRight className="size-4" />
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
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="flex-shrink-0 flex flex-col gap-3 group"
              style={{ width: "clamp(320px, 38vw, 500px)" }}
            >
              {/* Index + divider + category */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="text-[11px] font-bold text-gray-400 tracking-widest tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="h-px flex-1 bg-gray-300 group-hover:bg-brand-400 transition-colors duration-500" />
                <span className="text-[10px] font-bold text-gray-400 tracking-[0.14em] uppercase whitespace-nowrap">
                  {project.category}
                </span>
              </div>

              {/* Card */}
              <div className="flex-1 relative overflow-hidden rounded-md  cursor-pointer min-h-0 max-h-[62vh]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 80vw, 32vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* Bottom text */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 transform transition-transform duration-500 group-hover:-translate-y-2 text-white">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/75 mb-1.5">
                    {project.subtitle}
                  </p>
                  <h3 className="font-display text-xl sm:text-[1.45rem] font-bold text-white leading-snug">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-[12px] text-white/70 font-medium tracking-wide">
                    {project.location} &middot; {project.year}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
