import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  /** Optional leading dot color indicator */
  dot?: "brand" | "gold" | "success" | "warning" | "error" | "none";
  theme?: "light" | "dark";
}

const dotColors = {
  brand:   "bg-brand-500",
  gold:    "bg-gold-400",
  success: "bg-success-500",
  warning: "bg-warning-500",
  error:   "bg-error-500",
  none:    "",
} as const;

function Chip({ dot = "none", theme = "light", className, children, ...props }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium font-sans",
        theme === "light" && "bg-sand-100 text-sand-700 border border-sand-200",
        theme === "dark"  && "bg-white/8  text-white/75 border border-white/12",
        className,
      )}
      {...props}
    >
      {dot !== "none" && (
        <span className={cn("size-1.5 rounded-full shrink-0", dotColors[dot])} />
      )}
      {children}
    </span>
  );
}

export { Chip };
