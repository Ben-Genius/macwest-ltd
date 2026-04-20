import { type HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sectionVariants = cva("relative", {
  variants: {
    theme: {
      /** Warm off-white — default content section */
      light:  "bg-sand-50  text-navy-950",
      /** Pure white — higher contrast content */
      white:  "bg-white    text-navy-950",
      /** Soft brand tint */
      tinted: "bg-brand-50 text-navy-950",
      /** Deep navy — hero, feature, CTA sections */
      dark:   "bg-navy-950 text-white",
      /** Mid navy */
      brand:  "bg-navy-900 text-white",
      /** Warm gold tint */
      gold:   "bg-gold-50   text-navy-950",
      /** None — inherit from parent */
      none:   "",
    },
    spacing: {
      none:  "",
      sm:    "py-12 sm:py-16",
      md:    "py-16 sm:py-20 lg:py-24",
      lg:    "py-20 sm:py-28 lg:py-32",
      xl:    "py-24 sm:py-32 lg:py-40",
    },
  },
  defaultVariants: {
    theme: "light",
    spacing: "md",
  },
});

export interface SectionProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  as?: "section" | "div" | "article" | "aside";
}

function Section({ className, theme, spacing, as: Tag = "section", ...props }: SectionProps) {
  return (
    <Tag
      className={cn(sectionVariants({ theme, spacing, className }))}
      {...props}
    />
  );
}

export { Section, sectionVariants };
