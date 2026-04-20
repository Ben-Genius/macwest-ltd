import { type HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva("font-display tracking-tight", {
  variants: {
    size: {
      /** 60–72px — hero display */
      "display-2xl": "text-6xl sm:text-7xl lg:text-8xl leading-[1.04] font-bold",
      /** 48–60px — hero sub-display */
      "display-xl":  "text-5xl sm:text-6xl lg:text-7xl leading-[1.06] font-bold",
      /** 40–52px — section hero */
      "display-lg":  "text-4xl sm:text-5xl lg:text-6xl leading-[1.08] font-semibold",
      /** 32–40px — section heading */
      "display-md":  "text-3xl sm:text-4xl lg:text-5xl leading-[1.10] font-semibold",
      /** 28–36px — sub-section heading */
      "display-sm":  "text-2xl sm:text-3xl lg:text-4xl leading-[1.15] font-semibold",
      /** 24–28px — card / article heading */
      xl:            "text-2xl sm:text-3xl leading-[1.20] font-semibold",
      /** 20–24px — component heading */
      lg:            "text-xl sm:text-2xl leading-[1.25] font-semibold",
      /** 18–20px — tight heading */
      md:            "text-lg sm:text-xl leading-[1.30] font-medium",
      /** 16–18px — label heading */
      sm:            "text-base sm:text-lg leading-[1.35] font-medium",
      /** 14px — caption heading */
      xs:            "text-sm leading-[1.40] font-medium",
    },
    /** Visual colour tone — named `tone` to avoid collision with HTMLAttributes.color */
    tone: {
      default:      "text-navy-900",
      muted:        "text-sand-600",
      white:        "text-white",
      "white-muted": "text-white/70",
      gold:         "text-gold-500",
      brand:        "text-brand-600",
    },
  },
  defaultVariants: {
    size: "display-md",
    tone: "default",
  },
});

export interface HeadingProps
  extends Omit<HTMLAttributes<HTMLHeadingElement>, "color">,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

function Heading({ className, size, tone, as: Tag = "h2", ...props }: HeadingProps) {
  return (
    <Tag
      className={cn(headingVariants({ size, tone, className }))}
      {...props}
    />
  );
}

export { Heading, headingVariants };
