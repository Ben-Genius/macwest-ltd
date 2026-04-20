import { forwardRef, type ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "font-display font-medium tracking-tight",
    "transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-40",
    "select-none cursor-pointer",
    "active:scale-[0.97]",
  ].join(" "),
  {
    variants: {
      variant: {
        /** Burgundy brand — primary action */
        primary:
          "bg-brand-700 text-white hover:bg-brand-600 shadow-brand/30 shadow-sm",
        /** Gold — high-emphasis CTA */
        gold:
          "bg-gold-400 text-navy-950 font-semibold hover:bg-gold-300 shadow-gold/30 shadow-sm",
        /** Bordered navy */
        outline:
          "border border-navy-200 bg-transparent text-navy-900 hover:bg-navy-50 hover:border-navy-300",
        /** Gold border */
        "outline-gold":
          "border border-gold-400 text-gold-600 hover:bg-gold-50 hover:border-gold-500",
        /** For use on dark/navy backgrounds */
        "ghost-white":
          "text-white/80 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/20",
        /** Subtle — tertiary action */
        ghost:
          "text-navy-700 hover:bg-navy-50 hover:text-navy-900",
        /** Inline link style */
        link:
          "text-brand-600 underline-offset-4 hover:underline p-0 h-auto font-normal shadow-none active:scale-100",
        /** Destructive */
        destructive:
          "bg-error-500 text-white hover:bg-error-500/90",
      },
      size: {
        xs:   "h-7  px-3    text-xs  rounded-lg  gap-1.5",
        sm:   "h-9  px-4    text-sm  rounded-xl  gap-1.5",
        md:   "h-11 px-6    text-sm  rounded-xl  gap-2",
        lg:   "h-13 px-8    text-base rounded-xl  gap-2",
        xl:   "h-15 px-10   text-lg  rounded-2xl gap-2.5",
        icon: "size-11 rounded-xl",
        "icon-sm": "size-9 rounded-lg",
        "icon-lg": "size-13 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
