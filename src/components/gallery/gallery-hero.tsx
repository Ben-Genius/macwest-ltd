"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ContainerScroll,
  ContainerSticky,
  GalleryCol,
  GalleryContainer,
} from "@/components/blocks/animated-gallery";

type CollectionCard = { src: string; slug: string; title: string };

const COL_1: CollectionCard[] = [
  { src: "/images/IMG_2760-scaled.jpg.jpeg", slug: "site-visits", title: "Site Visits" },
  { src: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/1H6A4274.jpg", slug: "coastal-engagement", title: "Coastal Engagement" },
  { src: "https://macwest.com.gh/wp-content/uploads/2025/03/8D4A2129.jpg", slug: "inter-schools-competition", title: "Inter Schools Competition" },
  { src: "/images/DJI_20240911144011_0234_D_PARZIAIR.jpg.jpeg", slug: "handing-over-ceremony-for-astroturf", title: "Handing Over — Astroturf" },
];

const COL_2: CollectionCard[] = [
  { src: "/images/0T6A0203-scaled.jpg.jpeg", slug: "staff-annual-retreats", title: "Staff Annual Retreats" },
  { src: "/images/0T6A9136.jpg.jpeg", slug: "staff-annual-thanksgiving-service", title: "Staff Thanksgiving Service" },
  { src: "/images/IMG_8104-scaled.jpg.jpeg", slug: "staff-board-engagement", title: "Staff-board Engagement" },
  { src: "/images/0T6A9895.jpg.jpeg", slug: "enrico-mattei-week-celebration", title: "Enrico Mattei Week" },
];

const COL_3: CollectionCard[] = [
  { src: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/E53A1491-scaled.jpg", slug: "cleaning-cooking-training-by-eni-ghana", title: "ENI Ghana Training Day 1" },
  { src: "/images/IMG_4737-scaled.jpg.jpeg", slug: "vis-training-by-eni-ghana", title: "VIS Training — ENI Ghana" },
  { src: "/images/IMG_4738-scaled.jpg.jpeg", slug: "ldpj-community-engagement-bakanta-palace", title: "LDPJ — Bakanta Palace" },
  { src: "/images/IMG_4741-scaled.jpg.jpeg", slug: "ldpj-community-engagement-sanzule-palace", title: "LDPJ — Sanzule Palace" },
];

/* stagger variants — animate on mount, not on scroll */
const containerV = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
};
const itemV = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
  },
};

function GalleryCard({ card }: { card: CollectionCard }) {
  return (
    <Link
      href={`/gallery/${card.slug}`}
      className="group relative block overflow-hidden rounded-md shadow-lg"
      title={card.title}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={card.src}
        alt={card.title}
        className="aspect-video block h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="px-3 pb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white/90">
          {card.title}
        </span>
      </div>
    </Link>
  );
}

export function GalleryHero() {
  return (
    <div className="relative bg-navy-950">
      {/* ── Hero text — animate on mount so it's always visible ── */}
      <motion.div
        className="relative z-[9999] -mb-16 px-6 pt-32 text-center sm:pt-40"
        variants={containerV}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={itemV}
          className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-gold-400"
        >
          Macwest Limited
        </motion.p>

        <motion.h1
          variants={itemV}
          className="font-display text-5xl font-bold tracking-[-0.03em] text-white md:text-6xl lg:text-[5.5rem]"
        >
          Our work,
        </motion.h1>

        <motion.h1
          variants={itemV}
          className="font-display text-5xl font-bold tracking-[-0.03em] text-white md:text-6xl lg:text-[5.5rem]"
        >
          our <span className="text-brand-400">people</span>, our story.
        </motion.h1>

        <motion.p
          variants={itemV}
          className="mx-auto mt-5 max-w-md text-base leading-relaxed text-white/50"
        >
          A visual record of projects, community engagements, and team moments
          from across Ghana.
        </motion.p>

        <motion.p
          variants={itemV}
          className="mt-6 text-[11px] font-bold uppercase tracking-[0.24em] text-white/25"
        >
          Scroll to explore 13 collections ↓
        </motion.p>
      </motion.div>

      {/* ── Subtle glow ── */}
      <div
        className="pointer-events-none absolute top-0 z-10 h-[70vh] w-full"
        style={{
          background:
            "radial-gradient(ellipse at 50% 35%, rgba(139,11,3,0.16) 0%, rgba(197,165,90,0.06) 45%, transparent 70%)",
          filter: "blur(55px)",
        }}
      />

      {/* ── 3-D scroll gallery ── */}
      <ContainerScroll className="relative h-[350vh]">
        <ContainerSticky className="h-svh">
          <GalleryContainer>
            <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
              {COL_1.map((c) => <GalleryCard key={c.slug} card={c} />)}
            </GalleryCol>
            <GalleryCol className="mt-[-50%]" yRange={["15%", "5%"]}>
              {COL_2.map((c) => <GalleryCard key={c.slug} card={c} />)}
            </GalleryCol>
            <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
              {COL_3.map((c) => <GalleryCard key={c.slug} card={c} />)}
            </GalleryCol>
          </GalleryContainer>
        </ContainerSticky>
      </ContainerScroll>
    </div>
  );
}
