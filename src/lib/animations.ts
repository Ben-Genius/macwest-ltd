/**
 * Macwest — Framer Motion variant library.
 * Import individual variants or the SPRING / EASING constants into any component.
 */

import type { Variants, Transition } from "framer-motion";

/* ── Easing presets ─────────────────────────────────────────── */

export const EASE = {
  spring:   [0.22, 1, 0.36, 1]   as [number, number, number, number],
  smooth:   [0.4, 0, 0.2, 1]     as [number, number, number, number],
  outExpo:  [0.16, 1, 0.3, 1]    as [number, number, number, number],
  bounce:   [0.34, 1.56, 0.64, 1] as [number, number, number, number],
  inBack:   [0.36, 0, 0.66, -0.56] as [number, number, number, number],
} as const;

/* ── Transition presets ─────────────────────────────────────── */

export const TRANSITION = {
  fast:    { duration: 0.20, ease: EASE.smooth  } satisfies Transition,
  default: { duration: 0.35, ease: EASE.spring  } satisfies Transition,
  slow:    { duration: 0.55, ease: EASE.outExpo } satisfies Transition,
  spring:  { type: "spring", stiffness: 300, damping: 30 } satisfies Transition,
  springGentle: { type: "spring", stiffness: 160, damping: 26 } satisfies Transition,
} as const;

/* ── Stagger helpers ────────────────────────────────────────── */

export function staggerParent(staggerChildren = 0.07, delayChildren = 0): Variants {
  return {
    hidden: {},
    show: {
      transition: { staggerChildren, delayChildren },
    },
  };
}

/* ── Fade variants ──────────────────────────────────────────── */

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: TRANSITION.default },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE.spring } },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.45, ease: EASE.spring } },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  show:   { opacity: 1, x: 0,  transition: { duration: 0.45, ease: EASE.spring } },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  show:   { opacity: 1, x: 0,  transition: { duration: 0.45, ease: EASE.spring } },
};

/* ── Scale variants ─────────────────────────────────────────── */

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show:   { opacity: 1, scale: 1, transition: { duration: 0.40, ease: EASE.spring } },
};

export const scaleInCenter: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  show:   { opacity: 1, scale: 1, transition: TRANSITION.springGentle },
};

/* ── Slide variants ─────────────────────────────────────────── */

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: "-100%" },
  show:   { opacity: 1, x: 0, transition: TRANSITION.slow },
  exit:   { opacity: 0, x: "-100%", transition: TRANSITION.fast },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: "100%" },
  show:   { opacity: 1, x: 0, transition: TRANSITION.slow },
  exit:   { opacity: 0, x: "100%", transition: TRANSITION.fast },
};

/* ── Clip / reveal variants ─────────────────────────────────── */

export const clipRevealUp: Variants = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
  show:   {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: { duration: 0.65, ease: EASE.outExpo },
  },
};

export const lineReveal: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  show:   { scaleX: 1, transition: { duration: 0.6, ease: EASE.outExpo, delay: 0.1 } },
};

/* ── Number counter (requires JS counter logic) ─────────────── */

export const counterUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE.spring } },
};

/* ── Hover / tap micro-interactions ────────────────────────── */

export const hoverLift = {
  initial: { y: 0, boxShadow: "0 4px 16px -4px oklch(0% 0 0 / 0.10)" },
  whileHover: {
    y: -4,
    boxShadow: "0 12px 32px -8px oklch(0% 0 0 / 0.18)",
    transition: TRANSITION.springGentle,
  },
} as const;

export const hoverScale = {
  whileHover: { scale: 1.02, transition: TRANSITION.springGentle },
  whileTap:   { scale: 0.98 },
} as const;

export const hoverGlow = {
  whileHover: {
    boxShadow: "0 0 24px 4px oklch(77% 0.164 79 / 0.3)",
    transition: TRANSITION.fast,
  },
} as const;

/* ── Preset stagger groups ──────────────────────────────────── */

export const staggerContainer = staggerParent(0.07, 0.1);
export const staggerContainerFast = staggerParent(0.04, 0.05);
export const staggerContainerSlow = staggerParent(0.12, 0.15);

/* ── Page transition ────────────────────────────────────────── */

export const pageVariants: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE.spring } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.25, ease: EASE.smooth } },
};
