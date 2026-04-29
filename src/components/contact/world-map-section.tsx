"use client";

import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { GSAPReveal } from "@/components/ui/gsap-reveal";
import { GSAPStaggerText } from "@/components/ui/gsap-stagger-text";

const GEO_URL = "/world-110m.json";

interface Location {
  id: string;
  name: string;
  address: string;
  flag: string;
  coordinates: [number, number];
}

const locations: Location[] = [
  {
    id: "accra",
    name: "Accra, Ghana",
    address: "Greater Accra Region, Ghana",
    flag: "🇬🇭",
    coordinates: [-0.187, 5.554],
  },
  {
    id: "takoradi",
    name: "Takoradi, Ghana",
    address: "Western Region, Ghana",
    flag: "🇬🇭",
    coordinates: [-1.75, 4.9],
  },
];

export function WorldMapSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="bg-white border-t border-navy-100 py-20 sm:py-28 overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-[380px_1fr] gap-12 lg:gap-16 items-center">

          {/* ── LEFT: Text + location cards ──────────────────────── */}
          <div className="flex flex-col">
            <GSAPReveal delay={0.05} y={18} duration={0.7}>
              <p className="text-sm italic text-navy-400 mb-6">/ our locations /</p>
            </GSAPReveal>

            <GSAPStaggerText
              text="Where to find us"
              delay={0.12}
              duration={0.9}
              stagger={0.05}
              y={38}
              className="font-display text-4xl sm:text-5xl font-bold text-navy-950 leading-[1.08] tracking-tight mb-6"
            />

            <GSAPReveal delay={0.22} y={18} duration={0.8}>
              <p className="text-sm text-navy-400 leading-relaxed mb-12 max-w-sm">
                Headquartered in Ghana with a growing international footprint —
                delivering certified engineering excellence across borders.
              </p>
            </GSAPReveal>

            {/* Location cards — staggered */}
            <div className="flex flex-col gap-3">
              {locations.map((loc, i) => (
                <GSAPReveal key={loc.id} delay={0.3 + i * 0.1} y={16} duration={0.75}>
                  <button
                    onMouseEnter={() => setActiveId(loc.id)}
                    onMouseLeave={() => setActiveId(null)}
                    onClick={() => setActiveId(activeId === loc.id ? null : loc.id)}
                    className={`w-full text-left flex items-center gap-4 rounded-2xl border px-6 py-4 transition-all duration-200 ${
                      activeId === loc.id
                        ? "bg-navy-950 border-navy-950"
                        : "bg-white border-navy-100 hover:border-navy-300"
                    }`}
                  >
                    <span className="text-2xl leading-none">{loc.flag}</span>
                    <div>
                      <p className={`font-bold text-sm ${activeId === loc.id ? "text-white" : "text-navy-900"}`}>
                        {loc.name}
                      </p>
                      <p className={`text-xs mt-0.5 ${activeId === loc.id ? "text-navy-300" : "text-navy-500"}`}>
                        {loc.address}
                      </p>
                    </div>
                    <div className={`ml-auto w-2 h-2 rounded-full flex-shrink-0 ${activeId === loc.id ? "bg-gold-400" : "bg-navy-200"}`} />
                  </button>
                </GSAPReveal>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Map ─────────────────────────────────────────── */}
          <GSAPReveal delay={0.18} x={60} y={0} duration={1.1} className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-brand-100 bg-navy-50/30">
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{ scale: 135, center: [15, 25] }}
                width={900}
                height={520}
                style={{ width: "100%", height: "auto" }}
              >
                <defs>
                  <pattern
                    id="dot-land"
                    x="0" y="0" width="5" height="5"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="2" cy="2" r="1.1" fill="#12161E" opacity="0.9" />
                  </pattern>
                  <filter id="pin-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <Geographies geography={GEO_URL}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="url(#dot-land)"
                        stroke="none"
                        style={{
                          default: { outline: "none" },
                          hover:   { outline: "none" },
                          pressed: { outline: "none" },
                        }}
                      />
                    ))
                  }
                </Geographies>

                {locations.map((loc) => {
                  const isActive = activeId === loc.id;
                  return (
                    <Marker
                      key={loc.id}
                      coordinates={loc.coordinates}
                      onMouseEnter={() => setActiveId(loc.id)}
                      onMouseLeave={() => setActiveId(null)}
                      onClick={() => setActiveId(isActive ? null : loc.id)}
                      className="cursor-pointer"
                    >
                      <circle
                        r={isActive ? 20 : 14}
                        fill={isActive ? "#8B0B03" : "#C5A55A"}
                        opacity={isActive ? 0.18 : 0.15}
                        style={{
                          transition: "r 0.3s ease, fill 0.3s ease",
                          animation: "map-ping 1.8s ease-out infinite",
                        }}
                      />
                      <circle
                        r={isActive ? 11 : 8}
                        fill={isActive ? "#8B0B03" : "#C5A55A"}
                        opacity={0.3}
                        style={{ transition: "r 0.3s ease, fill 0.3s ease" }}
                      />
                      <circle
                        r={5}
                        fill={isActive ? "#8B0B03" : "#C5A55A"}
                        stroke="white"
                        strokeWidth={2}
                        filter={isActive ? "url(#pin-glow)" : undefined}
                        style={{ transition: "fill 0.3s ease" }}
                      />
                      {isActive && (
                        <foreignObject x={10} y={-60} width={180} height={68} style={{ overflow: "visible" }}>
                          <div style={{
                            background: "white",
                            borderRadius: "12px",
                            padding: "10px 14px",
                            boxShadow: "0 8px 32px -4px rgba(18,22,30,0.18)",
                            border: "1px solid rgba(18,22,30,0.08)",
                            pointerEvents: "none",
                          }}>
                            <p style={{ fontWeight: 700, color: "#12161E", fontSize: "13px", margin: 0, lineHeight: 1.3 }}>
                              {loc.flag} {loc.name}
                            </p>
                            <p style={{ color: "#64748b", fontSize: "11px", margin: "3px 0 0", lineHeight: 1.4 }}>
                              {loc.address}
                            </p>
                          </div>
                        </foreignObject>
                      )}
                    </Marker>
                  );
                })}
              </ComposableMap>

              {/* Vignette */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_60px_20px_white]" />
            </div>
          </GSAPReveal>

        </div>
      </div>

      <style>{`
        @keyframes map-ping {
          0%   { transform: scale(1);   opacity: 0.18; }
          70%  { transform: scale(1.8); opacity: 0; }
          100% { transform: scale(1.8); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
