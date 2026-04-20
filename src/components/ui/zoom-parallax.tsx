"use client";

import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface ParallaxImage {
  src: string;
  alt?: string;
}

interface ZoomParallaxProps {
  /** Array of images to be displayed in the parallax effect max 7 images */
  images: ParallaxImage[];
}

/* Per-index layout offsets applied as inline styles on the inner picture div.
   All offsets are relative to the flex-centered origin of each motion layer. */
const LAYOUTS: { top?: string; left?: string; height: string; width: string }[] = [
  { height: "25vh", width: "25vw" }, // 0 — center
  { top: "-30vh", left: "5vw", height: "30vh", width: "35vw" }, // 1 — top-right
  { top: "-10vh", left: "-25vw", height: "45vh", width: "20vw" }, // 2 — top-left tall
  { left: "27.5vw", height: "25vh", width: "25vw" }, // 3 — right
  { top: "27.5vh", left: "5vw", height: "25vh", width: "20vw" }, // 4 — bottom-right
  { top: "27.5vh", left: "-22.5vw", height: "25vh", width: "30vw" }, // 5 — bottom-left
  { top: "22.5vh", left: "25vw", height: "15vh", width: "15vw" }, // 6 — small right
];

export function ZoomParallax({ images }: ZoomParallaxProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const scales: MotionValue<number>[] = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

  return (
    <div ref={container} className="relative h-[150vh]  bg-white">
      <div className="sticky top-0 h-screen overflow-hidden">
        {images.map(({ src, alt }, index) => {
          const scale = scales[index % scales.length];
          const layout = LAYOUTS[index] ?? LAYOUTS[0];

          return (
            <motion.div
              key={index}
              style={{ scale }}
              className="absolute top-0 flex h-full w-full items-center justify-center"
            >
              <div
                className="relative rounded-2xl overflow-hidden shadow-elevated border border-white/20"
                style={layout}
              >
                <Image
                  src={src || "/placeholder.svg"}
                  alt={alt || `Parallax image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
