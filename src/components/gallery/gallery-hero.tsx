"use client";

import Link from "next/link";
import {
  ContainerAnimated,
  ContainerScroll,
  ContainerStagger,
  ContainerSticky,
  GalleryCol,
  GalleryContainer,
} from "@/components/blocks/animated-gallery";

/* ─── Collection image data ──────────────────────────────────── */

type CollectionCard = { src: string; slug: string; title: string };

const COL_1: CollectionCard[] = [
  {
    src: "/images/IMG_2760-scaled.jpg.jpeg",
    slug: "site-visits",
    title: "Site Visits",
  },
  {
    src: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/1H6A4274.jpg",
    slug: "coastal-engagement",
    title: "Coastal Engagement",
  },
  {
    src: "https://macwest.com.gh/wp-content/uploads/2025/03/8D4A2129.jpg",
    slug: "inter-schools-competition",
    title: "Inter Schools Competition",
  },
  {
    src: "/images/DJI_20240911144011_0234_D_PARZIAIR.jpg.jpeg",
    slug: "handing-over-ceremony-for-astroturf",
    title: "Handing Over — Astroturf",
  },
];

const COL_2: CollectionCard[] = [
  {
    src: "/images/0T6A0203-scaled.jpg.jpeg",
    slug: "staff-annual-retreats",
    title: "Staff Annual Retreats",
  },
  {
    src: "/images/0T6A9136.jpg.jpeg",
    slug: "staff-annual-thanksgiving-service",
    title: "Staff Thanksgiving Service",
  },
  {
    src: "/images/IMG_8104-scaled.jpg.jpeg",
    slug: "staff-board-engagement",
    title: "Staff-board Engagement",
  },
  {
    src: "/images/0T6A9895.jpg.jpeg",
    slug: "enrico-mattei-week-celebration",
    title: "Enrico Mattei Week",
  },
];

const COL_3: CollectionCard[] = [
  {
    src: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/E53A1491-scaled.jpg",
    slug: "cleaning-cooking-training-by-eni-ghana",
    title: "ENI Ghana Training Day 1",
  },
  {
    src: "/images/IMG_4737-scaled.jpg.jpeg",
    slug: "vis-training-by-eni-ghana",
    title: "VIS Training — ENI Ghana",
  },
  {
    src: "/images/IMG_4738-scaled.jpg.jpeg",
    slug: "ldpj-community-engagement-bakanta-palace",
    title: "LDPJ — Bakanta Palace",
  },
  {
    src: "/images/IMG_4741-scaled.jpg.jpeg",
    slug: "ldpj-community-engagement-sanzule-palace",
    title: "LDPJ — Sanzule Palace",
  },
];

/* ─── Single card ────────────────────────────────────────────── */

function GalleryCard({ card }: { card: CollectionCard }) {
  return (
    <Link
      href={`/gallery/${card.slug}`}
      className="group relative block overflow-hidden rounded-md shadow"
      title={card.title}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={card.src}
        alt={card.title}
        className="aspect-video block h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* hover label */}
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="px-3 pb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white/90">
          {card.title}
        </span>
      </div>
    </Link>
  );
}

/* ─── Hero ───────────────────────────────────────────────────── */

export function GalleryHero() {
  return (
    <div className="relative bg-navy-950">
      {/* Text block — sits above the scroll container */}
      <ContainerStagger className="relative z-[9999] -mb-16 px-6 pt-32 text-center sm:pt-40">
        <ContainerAnimated>
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-gold-400">
            Macwest Limited
          </p>
        </ContainerAnimated>
        <ContainerAnimated>
          <h1 className="font-display text-5xl font-bold tracking-[-0.03em] text-white md:text-6xl lg:text-7xl">
            Our work,
          </h1>
        </ContainerAnimated>
        <ContainerAnimated>
          <h1 className="font-display text-5xl font-bold tracking-[-0.03em] text-white md:text-6xl lg:text-7xl">
            our{" "}
            <span className="text-brand-400">people</span>,
            our story.
          </h1>
        </ContainerAnimated>
        <ContainerAnimated className="mt-5">
          <p className="mx-auto max-w-md leading-relaxed tracking-tight text-white/50">
            A visual record of projects, community engagements, and team
            moments from across Ghana.
          </p>
        </ContainerAnimated>
        <ContainerAnimated className="mt-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/30">
            Scroll to explore 13 collections ↓
          </p>
        </ContainerAnimated>
      </ContainerStagger>

      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute z-10 h-[70vh] w-full"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(139,11,3,0.18) 0%, rgba(197,165,90,0.08) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Scrolling 3-D gallery */}
      <ContainerScroll className="relative h-[350vh]">
        <ContainerSticky className="h-svh">
          <GalleryContainer>
            <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
              {COL_1.map((card) => (
                <GalleryCard key={card.slug} card={card} />
              ))}
            </GalleryCol>

            <GalleryCol className="mt-[-50%]" yRange={["15%", "5%"]}>
              {COL_2.map((card) => (
                <GalleryCard key={card.slug} card={card} />
              ))}
            </GalleryCol>

            <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
              {COL_3.map((card) => (
                <GalleryCard key={card.slug} card={card} />
              ))}
            </GalleryCol>
          </GalleryContainer>
        </ContainerSticky>
      </ContainerScroll>
    </div>
  );
}
