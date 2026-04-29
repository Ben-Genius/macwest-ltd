"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Images, ArrowRight } from "lucide-react";

import { type GallerySubAlbum } from "@/data/gallery";
import { Container } from "@/components/ui/container";
import { GSAPReveal } from "@/components/ui/gsap-reveal";

export function SubAlbumPicker({
  collectionSlug,
  subAlbums,
}: {
  collectionSlug: string;
  subAlbums: GallerySubAlbum[];
}) {
  return (
    <section className="py-12 sm:py-16 bg-navy-950">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {subAlbums.map((album, i) => (
            <GSAPReveal key={album.slug} delay={i * 0.07} y={20}>
              <Link href={`/gallery/${collectionSlug}/${album.slug}`} className="block">
                <motion.article
                  className="group relative overflow-hidden rounded-2xl bg-navy-900 cursor-pointer"
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 340, damping: 32 }}
                >
                  {/* Cover image */}
                  <div className="relative h-[220px] overflow-hidden">
                    <Image
                      src={album.cover}
                      alt={album.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  </div>

                  {/* Bottom row */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg font-bold text-white leading-snug">
                        {album.title}
                      </h3>
                      <p className="mt-1 text-white/50 text-[12px] flex items-center gap-1.5 font-medium">
                        <Images className="size-3" />
                        {album.images.length} photos
                      </p>
                    </div>

                    <div className="flex-shrink-0 p-2.5 rounded-full bg-white/10 group-hover:bg-brand-600 transition-colors duration-300">
                      <ArrowRight className="size-4 text-white" />
                    </div>
                  </div>
                </motion.article>
              </Link>
            </GSAPReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
