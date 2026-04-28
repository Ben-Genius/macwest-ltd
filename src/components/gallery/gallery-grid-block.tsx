"use client";

import { useState, useCallback, useEffect, KeyboardEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { type GalleryImage } from "@/data/gallery";
import { cn } from "@/lib/utils";

/* ── Filter helpers ───────────────────────────────────────────── */

function getCategories(images: GalleryImage[]): string[] {
  const has = (o: "portrait" | "landscape") => images.some((img) =>
    o === "portrait" ? img.orientation === "portrait" : img.orientation !== "portrait",
  );
  const cats = ["All"];
  if (has("landscape")) cats.push("Landscape");
  if (has("portrait")) cats.push("Portrait");
  return cats;
}

function filterImages(images: GalleryImage[], filter: string): GalleryImage[] {
  if (filter === "All") return images;
  if (filter === "Portrait") return images.filter((i) => i.orientation === "portrait");
  return images.filter((i) => i.orientation !== "portrait");
}

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
    window.addEventListener("keydown", h as unknown as EventListener);
    return () => window.removeEventListener("keydown", h as unknown as EventListener);
  }, [onClose, onPrev, onNext]);

  const img = images[index];

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      onClick={onClose}
    >
      {/* counter */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 text-[13px] font-medium tabular-nums text-white/40">
        {index + 1} / {images.length}
      </div>

      {/* close */}
      <button
        aria-label="Close"
        className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
        onClick={onClose}
      >
        <X className="size-5" />
      </button>

      {/* prev */}
      <button
        aria-label="Previous"
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
      >
        <ChevronLeft className="size-6" />
      </button>

      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          /* eslint-disable-next-line @next/next/no-img-element */
          src={img.src}
          alt={img.alt}
          className="max-h-[84vh] max-w-[88vw] rounded-xl object-contain shadow-2xl"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
        />
      </AnimatePresence>

      {/* next */}
      <button
        aria-label="Next"
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
      >
        <ChevronRight className="size-6" />
      </button>

      {/* caption */}
      {img.alt && (
        <motion.p
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[12px] font-medium text-white/40 tracking-wide text-center"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
        >
          {img.alt}
        </motion.p>
      )}
    </motion.div>
  );
}

/* ── Main export ──────────────────────────────────────────────── */

export function GalleryGridBlock({ images }: { images: GalleryImage[] }) {
  const [filter, setFilter] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const categories = getCategories(images);
  const filtered = filterImages(images, filter);

  /* lightbox works on filtered list */
  const handlePrev = useCallback(
    () => setSelectedIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : 0)),
    [filtered.length],
  );
  const handleNext = useCallback(
    () => setSelectedIndex((i) => (i !== null ? (i + 1) % filtered.length : 0)),
    [filtered.length],
  );

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>, idx: number) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setSelectedIndex(idx); }
  };

  return (
    <section className="min-h-screen bg-navy-950 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Filter bar */}
        {categories.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-8 flex flex-wrap gap-2"
            role="group"
            aria-label="Filter by orientation"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setFilter(cat); setSelectedIndex(null); }}
                aria-pressed={filter === cat}
                className={cn(
                  "rounded-full px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.12em] transition-colors",
                  filter === cat
                    ? "bg-brand-600 text-white"
                    : "bg-navy-800 text-white/50 hover:bg-navy-700 hover:text-white/80",
                )}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        )}

        {/* Grid */}
        <motion.div
          layout
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Gallery images"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((image, i) => (
              <motion.div
                key={`${filter}-${i}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.28, delay: i * 0.04 }}
                role="listitem"
              >
                <div
                  className="group relative cursor-pointer overflow-hidden rounded-xl bg-navy-900 ring-1 ring-white/5 transition-all hover:ring-brand-600/50 hover:shadow-2xl hover:shadow-brand-950/50"
                  onClick={() => setSelectedIndex(i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Open ${image.alt}`}
                >
                  <div className={cn(
                    "relative overflow-hidden",
                    image.orientation === "portrait" ? "aspect-[3/4]" : "aspect-square",
                  )}>
                    <motion.img
                      /* eslint-disable-next-line @next/next/no-img-element */
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.4 }}
                    />
                    {/* hover overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-navy-950/60 backdrop-blur-sm"
                      aria-hidden="true"
                    >
                      <div className="rounded-full bg-white/15 p-3">
                        <ZoomIn className="size-5 text-white" />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <Lightbox
            images={filtered}
            index={selectedIndex}
            onClose={() => setSelectedIndex(null)}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
