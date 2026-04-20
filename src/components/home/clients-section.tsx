"use client";

import { GSAPReveal } from "@/components/ui/gsap-reveal";

const clients = [
  "Government of Ghana",
  "World Bank",
  "GIIF",
  "Ghana Water Company",
  "Accra Metropolitan Assembly",
  "Ministry of Roads",
  "COCOBOD",
  "Ghana Ports & Harbours Authority",
  "Tullow Oil",
  "GOIL",
  "Stanbic Bank",
  "Anglogold Ashanti",
];

function MarqueeTrack({ reverse = false }: { reverse?: boolean }) {
  return (
    <div
      className={`flex items-center gap-12 animate-marquee${reverse ? "-reverse" : ""} whitespace-nowrap`}
      aria-hidden={reverse}
    >
      {[...clients, ...clients].map((client, i) => (
        <span
          key={`${client}-${i}`}
          className="text-sm font-semibold text-sand-500 hover:text-navy-700 transition-colors duration-200 cursor-default px-2"
        >
          {client}
        </span>
      ))}
    </div>
  );
}

export function ClientsSection() {
  return (
    <section className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[95rem] mx-auto pb-10">
      {/* Stats strip */}
      <GSAPReveal
        delay={0.2}
        duration={1}
        y={40}
        className="mt-0 grid grid-cols-2 sm:grid-cols-4 gap-6 p-8 rounded-3xl bg-white shadow-card border border-black/5"
      >
        {[
          { value: "50+", label: "Projects Completed" },
          { value: "14+", label: "Years Active" },
          { value: "6", label: "Regions Served" },
          { value: "100%", label: "Certified Delivery" },
        ].map((item, i) => (
          <GSAPReveal key={item.label} delay={0.3 + i * 0.15} y={20} className="text-center">
            <p className="font-display text-4xl font-bold text-brand-600 tracking-[-0.02em]">
              {item.value}
            </p>
            <p className="mt-2 text-xs text-navy-500 font-sans font-bold uppercase tracking-wider">{item.label}</p>
          </GSAPReveal>
        ))}
      </GSAPReveal>
    </section>
  );
}
