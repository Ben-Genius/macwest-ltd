import { type HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva("relative flex flex-col overflow-hidden", {
  variants: {
    variant: {
      /** Clean white card with subtle border */
      default:
        "bg-white border border-sand-200 shadow-card rounded-2xl",
      /** Slightly elevated, more shadow */
      elevated:
        "bg-white border border-sand-200/60 shadow-elevated rounded-2xl",
      /** Navy dark card */
      brand:
        "bg-brand-900 border border-brand-800/60 text-white rounded-2xl",
      /** Deep dark for dark sections */
      dark:
        "bg-brand-950 border border-white/8 text-white rounded-2xl",
      /** Gold accent card */
      gold:
        "bg-gold-50 border border-gold-200/60 rounded-2xl",
      /** Outlined / ghost */
      outline:
        "border border-sand-200 bg-transparent rounded-2xl",
      /** Flat — no shadow */
      flat:
        "bg-sand-50 border border-sand-200 rounded-2xl",
    },
    padding: {
      none: "",
      sm:   "p-4",
      md:   "p-6",
      lg:   "p-8",
      xl:   "p-10",
    },
  },
  defaultVariants: {
    variant: "default",
    padding: "md",
  },
});

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

function Card({ className, variant, padding, ...props }: CardProps) {
  return (
    <div
      className={cn(cardVariants({ variant, padding, className }))}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col gap-1.5", className)} {...props} />;
}

function CardTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("font-display text-xl font-semibold leading-tight tracking-tight", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm leading-relaxed text-sand-500", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex-1", className)} {...props} />;
}

function CardFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex items-center pt-4 mt-auto", className)}
      {...props}
    />
  );
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, cardVariants };
