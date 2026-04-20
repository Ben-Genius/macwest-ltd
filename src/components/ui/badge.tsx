import { type HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 font-medium font-sans transition-colors",
  {
    variants: {
      variant: {
        default:   "bg-brand-100 text-brand-700 border border-brand-200/60",
        brand:     "bg-brand-900 text-white",
        gold:      "bg-gold-400  text-brand-950",
        "gold-soft":"bg-gold-100 text-gold-700 border border-gold-200/60",
        outline:   "border border-brand-300 text-brand-700 bg-transparent",
        success:   "bg-success-50 text-success-900 border border-success-500/25",
        warning:   "bg-warning-50 text-brand-800 border border-warning-500/25",
        error:     "bg-error-50   text-error-500 border border-error-500/25",
        ghost:     "bg-sand-100   text-sand-700",
        /** For dark backgrounds */
        "dark-outline": "border border-white/20 text-white/80 bg-white/5",
      },
      size: {
        sm: "text-xs px-2    py-0.5 rounded-md",
        md: "text-xs px-2.5 py-1   rounded-lg",
        lg: "text-sm px-3   py-1   rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span
      className={cn(badgeVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
