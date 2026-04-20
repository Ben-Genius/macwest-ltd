import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SeparatorProps extends HTMLAttributes<HTMLHRElement> {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
  /** "light" for white/sand sections, "dark" for navy sections */
  theme?: "light" | "dark" | "gold";
}

function Separator({
  orientation = "horizontal",
  decorative = true,
  theme = "light",
  className,
  ...props
}: SeparatorProps) {
  return (
    <hr
      role={decorative ? "none" : "separator"}
      aria-orientation={!decorative ? orientation : undefined}
      className={cn(
        "shrink-0 border-none",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        theme === "light" && "bg-sand-200",
        theme === "dark"  && "bg-white/10",
        theme === "gold"  && "bg-gold-300/40",
        className,
      )}
      {...props}
    />
  );
}

export { Separator };
