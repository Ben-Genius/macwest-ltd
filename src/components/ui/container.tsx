import { type HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const containerVariants = cva("mx-auto w-full", {
  variants: {
    size: {
      /** 640px — tight prose/form */
      sm:   "max-w-xl   px-4 sm:px-6",
      /** 768px — medium content */
      md:   "max-w-3xl  px-4 sm:px-6",
      /** 1024px — standard layout */
      lg:   "max-w-5xl  px-4 sm:px-6 lg:px-8",
      /** 1280px — wide layout */
      xl:   "max-w-6xl  px-4 sm:px-6 lg:px-8",
      /** 1536px — full bleed */
      "2xl":"max-w-7xl  px-4 sm:px-6 lg:px-8",
      /** No max-width — inner padding only */
      fluid:"px-4 sm:px-6 lg:px-8",
    },
  },
  defaultVariants: { size: "xl" },
});

export interface ContainerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

function Container({ className, size, ...props }: ContainerProps) {
  return (
    <div className={cn(containerVariants({ size, className }))} {...props} />
  );
}

export { Container, containerVariants };
