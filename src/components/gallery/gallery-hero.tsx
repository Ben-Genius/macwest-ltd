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

const G = "/images/Galleryy";

const COL_1: CollectionCard[] = [
  { src: `${G}/Site%20visit/IMG_2760.webp`, slug: "site-visits", title: "Site Visits" },
  { src: `${G}/Coastal%20Eng/AHANTAWEST/1H6A4274.webp`, slug: "coastal-engagement", title: "Coastal Engagement" },
  { src: `${G}/Interschools/8D4A2135.webp`, slug: "inter-schools-competition", title: "Inter Schools Competition" },
  { src: `${G}/Handing%20Ceremo%20Astroturf/8D4A2796.webp`, slug: "handing-over-ceremony-for-astroturf", title: "Handing Over — Astroturf" },
];

const COL_2: CollectionCard[] = [
  { src: `${G}/Staff%20Annual%20Retreat/1H6A4921.webp`, slug: "staff-annual-retreats", title: "Staff Annual Retreats" },
  { src: `${G}/Thanksgiving/2026/MGL3564.webp`, slug: "staff-annual-thanksgiving-service", title: "Staff Thanksgiving Service" },
  { src: `${G}/Staff%20Board%20ENG/2F2A9620.webp`, slug: "staff-board-engagement", title: "Staff-board Engagement" },
  { src: `${G}/Enrico%20Mattei%20Week%20Celeb/0T6A3460.webp`, slug: "enrico-mattei-week-celebration", title: "Enrico Mattei Week" },
];

const COL_3: CollectionCard[] = [
  { src: `${G}/Cleaning:cooking/Cleaning%20Cooking%20ENI%20day%201/E53A1438.webp`, slug: "cleaning-cooking-training-by-eni-ghana", title: "ENI Ghana Training Day 1" },
  { src: `${G}/VIS%20Training%20by%20ENI/E53A1606.webp`, slug: "vis-training-by-eni-ghana", title: "VIS Training — ENI Ghana" },
  { src: `${G}/Comm.Eng-Bakanta/0T6A5900.webp`, slug: "ldpj-community-engagement-bakanta-palace", title: "LDPJ — Bakanta Palace" },
  { src: `${G}/Comm.%20Eng-Sanzule/IMG_0359.webp`, slug: "ldpj-community-engagement-sanzule-palace", title: "LDPJ — Sanzule Palace" },
];

const containerV = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const itemV = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

function GalleryCard({ card }: { card: CollectionCard }) {
  return (
    <Link
      href={`/gallery/${card.slug}`}
      className="group relative block overflow-hidden rounded-xl shadow-elevated"
      title={card.title}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={card.src}
        alt={card.title}
        loading="lazy"
        decoding="async"
        className="aspect-2/1 block h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105 "
      />
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="px-3 pb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white/90">
          {card.title}
        </span>
      </div>
    </Link>
  );
}

const ALL_CARDS = [...COL_1, ...COL_2, ...COL_3];

export function GalleryHero() {
  return (
    <div className="relative bg-white p-2">


      {/* ── Subtle brand glow ── */}
      <div
        className="pointer-events-none absolute top-0 z-10 h-[60vh] w-full"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(139,11,3,0.06) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />

      {/* ── Mobile grid (< md) ── */}
      <div className="block md:hidden px-2 pt-10 pb-14">
        <div className="grid grid-cols-2 gap-3">
          {ALL_CARDS.map((c) => (
            <GalleryCard key={c.slug} card={c} />
          ))}
        </div>
      </div>

      {/* ── 3-D scroll gallery (md+) ── */}
      <div className="hidden md:block">
        <ContainerScroll className="relative h-[500vh] mb-12">
          <ContainerSticky className="h-svh">
            <GalleryContainer>
              <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
                {COL_1.map((c) => <GalleryCard key={c.slug} card={c} />)}
              </GalleryCol>
              <GalleryCol className="mt-[-50%]" yRange={["15%", "5%"]}>
                {COL_2.map((c) => <GalleryCard key={c.slug} card={c} />)}
              </GalleryCol>
              <GalleryCol yRange={["-40%", "2%"]} className="-mt-2">
                {COL_3.map((c) => <GalleryCard key={c.slug} card={c} />)}
              </GalleryCol>
            </GalleryContainer>
          </ContainerSticky>
        </ContainerScroll>
      </div>
    </div>
  );
}
