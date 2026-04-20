import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-sand-50 text-navy-950">
      {/* Blueprint architectural drawings — layered ABOVE content via mix-blend-mode
          multiply so dark lines show through any background colour. */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[60]"
        style={{
          backgroundImage: `
            url('/images/blueprints/bp-sections.png'),
            url('/images/blueprints/bp-cultural.png'),
            url('/images/blueprints/bp-floorplan.png'),
            url('/images/blueprints/bp-elevation.png')
          `,
          backgroundSize: "62%, 54%, 68%, 58%",
          backgroundPosition: "-6% 0%, 52% 28%, -8% 58%, 44% 82%",
          backgroundRepeat: "no-repeat",
          opacity: 0.07,
          mixBlendMode: "multiply",
          filter: "grayscale(100%) contrast(0.85)",
        }}
      />
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
