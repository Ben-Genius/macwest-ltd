"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const STRIPS: string[][] = [
  [
    "/images/IMG_2760-scaled.jpg.jpeg",
    "/images/IMG_2859-scaled.jpg.jpeg",
    "/images/0T6A0203-scaled.jpg.jpeg",
    "/images/IMG_4737-scaled.jpg.jpeg",
    "/images/IMG_9861-scaled.jpg.jpeg",
    "/images/0T6A9136.jpg.jpeg",
  ],
  [
    "/images/IMG_2813-scaled.jpg.jpeg",
    "/images/DJI_20240911144011_0234_D_PARZIAIR.jpg.jpeg",
    "/images/0T6A9895.jpg.jpeg",
    "/images/IMG_8104-scaled.jpg.jpeg",
    "/images/0T6A9963.jpg.jpeg",
    "/images/IMG_2913-scaled.jpg.jpeg",
  ],
  [
    "/images/0T6A0334.jpg.jpeg",
    "/images/IMG_4738-scaled.jpg.jpeg",
    "/images/IMG_2805-scaled.jpg.jpeg",
    "/images/IMG_9528-scaled.jpg.jpeg",
    "/images/IMG_4741-scaled.jpg.jpeg",
    "/images/0T6A9949.jpg.jpeg",
  ],
  [
    "/images/IMG_2859-scaled.jpg_1.jpeg",
    "/images/IMG_2913-scaled.jpg_1.jpeg",
    "/images/IMG_2813-scaled.jpg_1.jpeg",
    "/images/IMG_8104-scaled.jpg_1.jpeg",
    "/images/IMG_9528-scaled.jpg_1.jpeg",
    "/images/0T6A0203-scaled.jpg_1.jpeg",
  ],
];

const DURATIONS = [28, 22, 32, 26];
const DIRECTIONS: Array<"up" | "down"> = ["up", "down", "up", "down"];

export function AnimatedStripsHero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden bg-navy-950 flex items-center justify-center">
      {/* Scrolling strips */}
      <div className="absolute inset-0 flex gap-2">
        {STRIPS.map((strip, i) => (
          <div key={i} className="flex-1 relative overflow-hidden">
            <div
              className="flex flex-col gap-2"
              style={{
                animation: `${DIRECTIONS[i] === "up" ? "gallery-scroll-up" : "gallery-scroll-down"} ${DURATIONS[i]}s linear infinite`,
              }}
            >
              {[...strip, ...strip].map((src, j) => (
                <div key={j} className="relative flex-shrink-0 h-[280px]">
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Gradient vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/85 via-navy-950/40 to-navy-950/85 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/70 via-transparent to-navy-950/70 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 select-none">
        <motion.p
          className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold-400 mb-5"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Macwest Limited
        </motion.p>

        <motion.h1
          className="font-display text-6xl sm:text-7xl lg:text-[7.5rem] font-bold text-white tracking-[-0.04em] leading-none mb-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Gallery
        </motion.h1>

        <motion.p
          className="text-white/55 text-lg max-w-sm mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Site visits, community engagements &amp; team moments from across Ghana.
        </motion.p>

        <motion.div
          className="mt-8 flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="h-px w-8 bg-gold-500/50" />
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/40">
            13 collections
          </span>
          <div className="h-px w-8 bg-gold-500/50" />
        </motion.div>
      </div>

      {/* Bottom scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent via-white/40 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
