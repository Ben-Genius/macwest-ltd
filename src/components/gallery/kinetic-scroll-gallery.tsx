"use client";

import { useState, useCallback, useEffect } from "react";
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  AnimatePresence,
  type MotionValue,
} from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { type GalleryImage } from "@/data/gallery";
import { Container } from "../ui";

/* ── Lightbox ─────────────────────────────────────────────────── */

function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/92"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      onClick={onClose}
    >
      <button
        aria-label="Close"
        className="absolute right-5 top-5 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
        onClick={onClose}
      >
        <X className="size-5" />
      </button>

      <div className="absolute top-5 left-1/2 -translate-x-1/2 text-[13px] font-medium tabular-nums text-white/40">
        {index + 1} / {images.length}
      </div>

      <button
        aria-label="Previous"
        className="absolute left-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 sm:left-6"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
      >
        <ChevronLeft className="size-6" />
      </button>

      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          /* eslint-disable-next-line @next/next/no-img-element */
          src={images[index].src}
          alt={images[index].alt}
          className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
        />
      </AnimatePresence>

      <button
        aria-label="Next"
        className="absolute right-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 sm:right-6"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
      >
        <ChevronRight className="size-6" />
      </button>
    </motion.div>
  );
}

/* ── Per-image kinetic tile ───────────────────────────────────── */

function KineticTile({
  image,
  skew,
  onClick,
  priority,
}: {
  image: GalleryImage;
  skew: MotionValue<number>;
  onClick: () => void;
  priority?: boolean;
}) {

  return (
    <motion.div
      className="group relative w-full cursor-pointer overflow-hidden rounded-lg bg-navy-50"
      style={{ skewX: skew as MotionValue<number> }}
      onClick={onClick}
    >
      {/* scale(1.15) prevents edge bleed during skew */}
      <div className="relative h-[30rem] overflow-hidden" style={{ transform: "scale(1.15)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image.src}
          alt={image.alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      {/* hover overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-navy-900/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">
          <svg className="size-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main export ──────────────────────────────────────────────── */

export function KineticScrollGallery({ images }: { images: GalleryImage[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothed = useSpring(scrollVelocity, { mass: 0.1, stiffness: 80, damping: 40 });
  const skew = useTransform(smoothed, [-1500, 0, 1500], [-15, 0, 15]);

  const handlePrev = useCallback(
    () => setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : 0)),
    [images.length],
  );
  const handleNext = useCallback(
    () => setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : 0)),
    [images.length],
  );

  return (
    <div className="min-h-screen bg-white py-12">
      <Container size="2xl" className="mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-2">
          {images.map((img, i) => (
            <KineticTile
              key={i}
              image={img}
              skew={skew}
              priority={i < 6}
              onClick={() => setLightboxIndex(i)}
            />
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={images}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
