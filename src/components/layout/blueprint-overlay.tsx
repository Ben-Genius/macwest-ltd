"use client";

import { useEffect, useState } from "react";

export function BlueprintOverlay() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(id);
  }, []);

  if (!visible) return null;

  return (
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
  );
}
