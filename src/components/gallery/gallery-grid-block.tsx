"use client";

import { useState, KeyboardEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { type GalleryImage } from "@/data/gallery";

/* ── Category helpers ─────────────────────────────────────────── */

function deriveCategories(images: GalleryImage[]): string[] {
  const hasNamed = images.some((i) => i.category);
  if (hasNamed) {
    const unique = [
      ...new Set(images.map((i) => i.category).filter(Boolean)),
    ] as string[];
    return ["All", ...unique];
  }
  const cats: string[] = ["All"];
  if (images.some((i) => i.orientation !== "portrait")) cats.push("Landscape");
  if (images.some((i) => i.orientation === "portrait")) cats.push("Portrait");
  return cats;
}

function applyFilter(images: GalleryImage[], filter: string): GalleryImage[] {
  if (filter === "All") return images;
  if (images.some((i) => i.category))
    return images.filter((i) => i.category === filter);
  if (filter === "Portrait")
    return images.filter((i) => i.orientation === "portrait");
  return images.filter((i) => i.orientation !== "portrait");
}

/* ── Props ────────────────────────────────────────────────────── */

interface GalleryGridBlockProps {
  images: GalleryImage[];
}

/* ── Component ────────────────────────────────────────────────── */

export function GalleryGridBlock({ images }: GalleryGridBlockProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = deriveCategories(images);
  const filteredImages = applyFilter(images, filter);

  const handleNext = () => {
    if (selectedImage !== null)
      setSelectedImage((selectedImage + 1) % filteredImages.length);
  };
  const handlePrev = () => {
    if (selectedImage !== null)
      setSelectedImage(
        (selectedImage - 1 + filteredImages.length) % filteredImages.length,
      );
  };

  const selectedImageData =
    selectedImage !== null ? filteredImages[selectedImage] : null;

  const handleCardKeyDown = (
    e: KeyboardEvent<HTMLDivElement>,
    idx: number,
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setSelectedImage(idx);
    }
  };

  return (
    <section className="w-full bg-white px-4 py-12" aria-label="Gallery grid">
      <div className="mx-auto max-w-[90%]">

        {/* ── Filter tabs — centered ── */}
        {categories.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-8 flex flex-wrap justify-center gap-2"
            role="group"
            aria-label="Filter gallery"
          >
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={filter === cat ? "primary" : "outline"}
                size="sm"
                onClick={() => {
                  setFilter(cat);
                  setSelectedImage(null);
                }}
                aria-pressed={filter === cat}
              >
                {cat}
              </Button>
            ))}
          </motion.div>
        )}

        {/* ── Grid ── */}
        <motion.div
          layout
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Gallery items"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${filter}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                role="listitem"
              >
                <Card
                  variant="default"
                  padding="none"
                  className="group relative cursor-pointer overflow-hidden border-navy-100 transition-all hover:border-navy-200 hover:shadow-xl"
                  onClick={() => setSelectedImage(index)}
                  onKeyDown={(e) => handleCardKeyDown(e, index)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${image.alt}`}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <motion.img
                      /* eslint-disable-next-line @next/next/no-img-element */
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm"
                      aria-hidden="true"
                    >
                      <ZoomIn className="mb-2 size-8 text-white/80" />
                      <p className="px-4 text-center text-sm font-semibold text-white/80 line-clamp-2">
                        {image.alt}
                      </p>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {selectedImage !== null && selectedImageData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-5xl"
            >
              {/* Close */}
              <Button
                size="icon-sm"
                variant="ghost-white"
                className="absolute -right-12 top-0"
                onClick={() => setSelectedImage(null)}
                aria-label="Close"
              >
                <X className="size-5" />
              </Button>

              {/* Prev */}
              <Button
                size="icon-sm"
                variant="ghost-white"
                className="absolute left-4 top-1/2 -translate-y-1/2"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                aria-label="Previous image"
              >
                <ChevronLeft className="size-6" />
              </Button>

              {/* Next */}
              <Button
                size="icon-sm"
                variant="ghost-white"
                className="absolute right-4 top-1/2 -translate-y-1/2"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label="Next image"
              >
                <ChevronRight className="size-6" />
              </Button>

              {/* Image */}
              <motion.img
                key={selectedImage}
                /* eslint-disable-next-line @next/next/no-img-element */
                src={selectedImageData.src}
                alt={selectedImageData.alt}
                className="max-h-[80vh] w-auto rounded-xl shadow-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />

              {/* Caption */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-4 text-center"
              >
                <p className="text-sm font-medium text-white/70">
                  {selectedImageData.alt}
                </p>
                <p className="mt-1 text-[12px] tabular-nums text-white/35">
                  {selectedImage + 1} / {filteredImages.length}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
