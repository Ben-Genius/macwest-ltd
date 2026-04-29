"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Images, Layers, ArrowRight } from "lucide-react";

import { GALLERY_COLLECTIONS, type GalleryCollection } from "@/data/gallery";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { GSAPReveal } from "@/components/ui/gsap-reveal";

function CollectionCard({
  collection,
  index,
}: {
  collection: GalleryCollection;
  index: number;
}) {
  const isNested = collection.type === "nested";
  const count = isNested
    ? collection.subAlbums?.length
    : collection.images?.length;

  const cardHeight =
    collection.span === "tall"
      ? "h-[580px]"
      : collection.span === "wide"
        ? "h-[300px]"
        : "h-[280px]";

  return (
    <GSAPReveal delay={index * 0.045} y={22}>
      <Link href={`/gallery/${collection.slug}`} className="block">
        <motion.article
          className={cn(
            "group relative overflow-hidden rounded-2xl bg-navy-900 cursor-pointer",
            collection.span === "wide" && "sm:col-span-2",
            collection.span === "tall" && "row-span-2",
          )}
          whileHover={{ scale: 1.018 }}
          transition={{ type: "spring", stiffness: 340, damping: 32 }}
        >
          {/* Image */}
          <div className={cn("relative overflow-hidden", cardHeight)}>
            <Image
              src={collection.cover}
              alt={collection.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              sizes={
                collection.span === "wide"
                  ? "66vw"
                  : "(max-width: 768px) 100vw, 33vw"
              }
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          </div>

          {/* Type badge */}
          <div className="absolute top-4 right-4">
            <span
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.1em] backdrop-blur-sm",
                isNested
                  ? "bg-gold-400/90 text-navy-950"
                  : "bg-white/15 text-white",
              )}
            >
              {isNested ? (
                <Layers className="size-3" />
              ) : (
                <Images className="size-3" />
              )}
              {isNested ? `${count} albums` : `${count} photos`}
            </span>
          </div>

          {/* Bottom content */}
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
            <h3 className="font-display text-xl font-bold text-white leading-snug">
              {collection.title}
            </h3>

            {collection.description && (
              <p className="mt-2 text-white/60 text-sm leading-relaxed line-clamp-2 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                {collection.description}
              </p>
            )}

            <div className="mt-3 flex items-center gap-2 text-brand-400 text-[13px] font-bold translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75 ease-out">
              <span>View collection</span>
              <ArrowRight className="size-3.5" />
            </div>
          </div>
        </motion.article>
      </Link>
    </GSAPReveal>
  );
}

export function CollectionGrid() {
  return (
    <section className="py-16 sm:py-24 bg-navy-950">
      <Container>
        {/* Section header */}
        <div className="mb-10 sm:mb-14">
          <GSAPReveal y={15}>
            <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-gold-500 mb-3">
              Collections
            </p>
          </GSAPReveal>
          <GSAPReveal y={20} delay={0.1}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-[-0.02em]">
              Browse by event
            </h2>
          </GSAPReveal>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          {GALLERY_COLLECTIONS.map((collection, i) => (
            <CollectionCard
              key={collection.slug}
              collection={collection}
              index={i}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
