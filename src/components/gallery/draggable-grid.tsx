"use client";

import {
  memo,
  useContext,
  useEffect,
  useRef,
  useState,
  createContext,
} from "react";
import {
  animate,
  motion,
  useMotionValue,
} from "framer-motion";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { type GalleryImage } from "@/data/gallery";

/* ── Inline wrap utility ─────────────────────────────────────── */
function wrapRange(min: number, max: number, v: number): number {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

const EASE = [0.18, 0.71, 0.11, 1] as [number, number, number, number];

/* ── Types ────────────────────────────────────────────────────── */
type Variant = "default" | "masonry" | "polaroid";
const GridVariantContext = createContext<Variant | undefined>(undefined);

/* ── Motion variants ──────────────────────────────────────────── */
const rowVariants = {
  initial: { opacity: 0, scale: 0.3 },
  animate: () => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: Math.random() + 1.5,
      duration: 1.4,
      ease: EASE,
    },
  }),
};

/* ── DraggableContainer ───────────────────────────────────────── */
export const DraggableContainer = ({
  className,
  children,
  variant = "masonry",
}: {
  className?: string;
  children: React.ReactNode;
  variant?: Variant;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const container = ref.current?.getBoundingClientRect();
    if (!container) return;
    const { width, height } = container;

    const offX = x.on("change", (latest) => {
      x.set(wrapRange(-(width / 2), 0, latest));
    });
    const offY = y.on("change", (latest) => {
      y.set(wrapRange(-(height / 2), 0, latest));
    });

    const onWheel = (e: WheelEvent) => {
      if (!isDragging) {
        animate(y, y.get() - e.deltaY * 2.7, {
          type: "tween",
          duration: 1.2,
          ease: EASE,
        });
      }
    };

    window.addEventListener("wheel", onWheel);
    return () => {
      offX();
      offY();
      window.removeEventListener("wheel", onWheel);
    };
  }, [x, y, isDragging]);

  return (
    <GridVariantContext.Provider value={variant}>
      <div className="h-dvh overflow-hidden bg-navy-950">
        <motion.div className="h-dvh overflow-hidden">
          <motion.div
            className={cn(
              "grid h-fit w-fit cursor-grab grid-cols-[repeat(2,1fr)] active:cursor-grabbing will-change-transform",
              className,
            )}
            drag
            dragMomentum
            dragTransition={{ timeConstant: 200, power: 0.28, restDelta: 0, bounceStiffness: 0 }}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            style={{ x, y }}
            ref={ref}
          >
            {children}
          </motion.div>
        </motion.div>
      </div>
    </GridVariantContext.Provider>
  );
};

/* ── GridItem ─────────────────────────────────────────────────── */
export const GridItem = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const variant = useContext(GridVariantContext);

  const styles = cva(
    "overflow-hidden hover:cursor-pointer w-full h-full will-change-transform",
    {
      variants: {
        variant: {
          default: "rounded-sm",
          masonry: "even:mt-[60%] rounded-sm",
          polaroid:
            "border-[10px] border-b-[28px] border-white shadow-xl even:rotate-3 odd:-rotate-2 hover:rotate-0 transition-transform ease-out duration-300 even:mt-[60%]",
        },
      },
      defaultVariants: { variant: "default" },
    },
  );

  return (
    <motion.div
      className={cn(styles({ variant, className }))}
      variants={rowVariants}
      initial="initial"
      animate="animate"
    >
      {children}
    </motion.div>
  );
};

/* ── GridBody ─────────────────────────────────────────────────── */
export const GridBody = memo(
  ({ children, className }: { children: React.ReactNode; className?: string }) => {
    const variant = useContext(GridVariantContext);

    const styles = cva("grid grid-cols-[repeat(6,1fr)] h-fit w-fit", {
      variants: {
        variant: {
          default: "gap-14 p-7 md:gap-28 md:p-14",
          masonry: "gap-x-14 px-7 md:gap-x-28 md:px-14",
          polaroid: "gap-x-14 px-7 md:gap-x-28 md:px-14",
        },
      },
      defaultVariants: { variant: "default" },
    });

    return (
      <>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className={cn(styles({ variant, className }))}>
            {children}
          </div>
        ))}
      </>
    );
  },
);
GridBody.displayName = "GridBody";

/* ── Page-level export ───────────────────────────────────────── */
export function DraggableGrid({ images }: { images: GalleryImage[] }) {
  return (
    <DraggableContainer variant="masonry">
      <GridBody>
        {images.map((image, i) => (
          <GridItem key={i}>
            <div className="h-52 w-60">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover"
              />
            </div>
          </GridItem>
        ))}
      </GridBody>
    </DraggableContainer>
  );
}
