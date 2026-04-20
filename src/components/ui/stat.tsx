import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface StatProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  label: string;
  description?: string;
  /** "light" for use on white/sand sections, "dark" for navy sections */
  theme?: "light" | "dark";
}

function Stat({ value, label, description, theme = "light", className, ...props }: StatProps) {
  const isDark = theme === "dark";
  return (
    <div className={cn("flex flex-col gap-1", className)} {...props}>
      <span
        className={cn(
          "font-display text-4xl font-bold tracking-tight leading-none",
          isDark ? "text-gold-400" : "text-navy-900",
        )}
      >
        {value}
      </span>
      <span
        className={cn(
          "font-display text-sm font-semibold uppercase tracking-widest",
          isDark ? "text-white" : "text-navy-800",
        )}
      >
        {label}
      </span>
      {description && (
        <span
          className={cn(
            "text-sm leading-relaxed mt-0.5",
            isDark ? "text-white/55" : "text-sand-500",
          )}
        >
          {description}
        </span>
      )}
    </div>
  );
}

export { Stat };
