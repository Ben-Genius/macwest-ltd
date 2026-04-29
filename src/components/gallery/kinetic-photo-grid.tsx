"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useVelocity,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

import { type GalleryImage } from "@/data/gallery";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

/* ── Lightbox ──────────────────────────────────────────────────── */

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
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  const image = images[index];

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/96 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        aria-label="Close"
        className="absolute top-5 right-5 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        onClick={onClose}
      >
        <X className="size-5" />
      </button>

      {/* Counter */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/40 text-[13px] tabular-nums font-medium">
        {index + 1} / {images.length}
      </div>

      {/* Prev */}
      <button
        aria-label="Previous"
        className="absolute left-4 sm:left-6 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
      >
        <ChevronLeft className="size-6" />
      </button>

      {/* Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="relative w-[90vw] h-[85vh]"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-contain"
            sizes="90vw"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Next */}
      <button
        aria-label="Next"
        className="absolute right-4 sm:right-6 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
      >
        <ChevronRight className="size-6" />
      </button>
    </motion.div>
  );
}

/* ── Single image tile ─────────────────────────────────────────── */

function PhotoTile({
  image,
  index,
  onClick,
}: {
  image: GalleryImage;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl cursor-pointer bg-navy-900"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: (index % 9) * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 340, damping: 32 } }}
      onClick={onClick}
    >
      <div
        className={cn(
          "relative overflow-hidden",
          image.orientation === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]",
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Zoom icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="p-3 rounded-full bg-white/15 backdrop-blur-sm">
            <ZoomIn className="size-5 text-white" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Kinetic photo grid ────────────────────────────────────────── */

export function KineticPhotoGrid({ images }: { images: GalleryImage[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const velocity = useVelocity(scrollYProgress);
  const rawSkew = useTransform(velocity, [-0.4, 0, 0.4], [-3.5, 0, 3.5]);
  const skewY = useSpring(rawSkew, { mass: 0.1, stiffness: 80, damping: 40 });

  const handlePrev = useCallback(
    () =>
      setLightboxIndex((i) =>
        i !== null ? (i - 1 + images.length) % images.length : 0,
      ),
    [images.length],
  );
  const handleNext = useCallback(
    () =>
      setLightboxIndex((i) =>
        i !== null ? (i + 1) % images.length : 0,
      ),
    [images.length],
  );

  return (
    <section ref={containerRef} className="py-10 sm:py-14 bg-navy-950">
      <Container>
        <motion.div
          className="columns-1 sm:columns-2 lg:columns-3 gap-4"
          style={{ skewY }}
        >
          {images.map((image, i) => (
            <div key={i} className="break-inside-avoid mb-4">
              <PhotoTile
                image={image}
                index={i}
                onClick={() => setLightboxIndex(i)}
              />
            </div>
          ))}
        </motion.div>
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
    </section>
  );
}
