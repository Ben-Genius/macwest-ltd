"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { useEffect, useRef } from "react";
import { GSAPReveal } from "@/components/ui/gsap-reveal";

/* ── Partner logos ─────────────────────────────────────────────── */
const partners = [
  { src: "/images/Partners/Global-Communities.png", alt: "Global Communities" },
  { src: "/images/Partners/eni-logo-png_seeklogo-489503.png", alt: "Eni" },
  { src: "/images/Partners/gmc-logo-png_seeklogo-252337.png", alt: "GMC" },
  { src: "/images/Partners/NEWgwl-LOGO.png", alt: "GWL" },
  { src: "/images/Partners/NCA_-_Logo-04.png", alt: "NCA" },
  { src: "/images/Partners/devtracoplus_logo_298_x_125_-01.png", alt: "Devtraco Plus" },
  { src: "/images/Partners/bbl.jpg.jpeg", alt: "BBL" },
  { src: "/images/Partners/valco.jpg.jpeg", alt: "Valco" },
  { src: "/images/Partners/swami-ghana-logo.png", alt: "Swami Ghana" },
  { src: "/images/Partners/American_Council_of_Engineering_Companies_Logo.png", alt: "ACEC" },
  { src: "/images/Partners/imperialhomesgh_logo.jpeg", alt: "Imperial Homes" },
  { src: "/images/Partners/new-gas.png", alt: "New Gas" },
  { src: "/images/Partners/Fabrico.png", alt: "Fabrico" },
  { src: "/images/Partners/mendanha.jpeg", alt: "Mendanha" },
];

const certBadges = [
  { icon: ShieldCheck, text: "ISO 45001:2018" },
  { icon: Award, text: "ISO 9001:2015" },
  { icon: Globe, text: "ISO 14001:2015" },
];

const stats = [
  { value: "14+", label: "Years", description: "Engineering excellence" },
  { value: "ISO³", label: "Certified", description: "9001 · 14001 · 45001" },
  { value: "50+", label: "Projects", description: "Completed across Ghana" },
  { value: "2011", label: "Established", description: "Incorporated May 2011" },
];

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Slow down the video
    }
  }, []);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative min-h-svh overflow-hidden bg-white">
        {/* Video with rounded corners — inset so it floats inside the section */}
        <div className="absolute inset-3 sm:inset-4 overflow-hidden rounded-xl sm:rounded-[2rem]">
          <video
            ref={videoRef}
            src="/videos/hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover brightness-110"
          />
          {/* Subtle gradient so text stays legible without killing the video */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
        </div>

        {/* Content — sits above the video container */}
        <div className="relative z-10 mx-auto flex min-h-svh max-w-[95rem] flex-col justify-between px-6 sm:px-8 lg:px-2 pt-36 pb-20 overflow-hidden">

          {/* Cert badges */}
          <GSAPReveal delay={0.0} duration={0.6} y={15} className="flex flex-wrap items-center gap-2">
            {certBadges.map(({ icon: Icon, text }) => (
              <span
                key={text}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/90"
              >
                <Icon className="size-3 text-gold-300" />
                {text}
              </span>
            ))}
            <span className="hidden sm:block text-[10px] text-white/50 font-medium ml-2 uppercase tracking-widest">
              Triple ISO · Ghana
            </span>
          </GSAPReveal>

          {/* Headline — text appears one after the other */}
          <div className="mt-auto max-w-6xl [perspective:1000px]">
            <h1
              className="font-display font-bold leading-[1.02] tracking-[-0.03em] text-white drop-shadow-xl flex flex-col items-start"
              style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)" }}
            >
              <GSAPReveal delay={0.08} duration={0.65} y={35}>
                <span className="text-white">Building</span>
              </GSAPReveal>
              <GSAPReveal delay={0.16} duration={0.65} y={35}>
                <span className="text-gradient-gold">Ghana&apos;s</span>
              </GSAPReveal>
              <GSAPReveal delay={0.24} duration={0.65} y={35}>
                <span className="text-white/90">Infrastructure.</span>
              </GSAPReveal>
            </h1>

            <GSAPReveal delay={0.34} duration={0.8} y={20}>
              <p className="mt-6 max-w-xl text-lg sm:text-xl text-white drop-shadow-md font-medium leading-relaxed">
                Macwest Limited delivers certified civil engineering, housing estates, and MEP
                solutions across Ghana and Sub-Saharan Africa — built to last.
              </p>
            </GSAPReveal>

            <GSAPReveal delay={0.44} duration={0.7} y={20} className="mt-10 flex flex-wrap items-center gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-xl bg-brand-600 hover:bg-brand-700 text-white shadow-brand border-0 h-12 px-6 text-[13px] font-bold uppercase tracking-widest"
              >
                <Link href="/contact">
                  Start a project
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-xl bg-white/10 backdrop-blur-md border-white/40 text-white hover:bg-white/20 h-12 px-6 text-[13px] font-bold uppercase tracking-widest"
              >
                <Link href="/projects">View our work</Link>
              </Button>
            </GSAPReveal>


          </div>
        </div>
      </section>

      {/* ── Partner marquee ───────────────────────────────────────── */}
      <section className="relative border-t border-black/5 bg-white py-10">
        <div className="mx-auto max-w-8xl px-12">
          <div className="flex flex-col items-center gap-6 md:flex-row md:gap-0">

            {/* Left label */}
            <div className="flex-shrink-0 md:max-w-full mx-auto md:border-r md:border-black/8 md:pr-8">
              <p className="text-center text-[11px] font-bold uppercase tracking-[0.18em] text-navy-400 md:text-right leading-relaxed">
                Trusted partners<br className="hidden md:block" /> &amp; clients
              </p>
            </div>

            {/* Slider */}
            <div className="relative w-full md:w-[calc(100%-13rem)] md:pl-8">
              <InfiniteSlider gap={96} duration={40} durationOnHover={80}>
                {partners.map(({ src, alt }) => (
                  <div key={alt} className="flex items-center justify-center">
                    <Image
                      src={src}
                      alt={alt}
                      width={65}
                      height={0}
                      className=" w-auto object-cover  opacity-95 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                ))}
              </InfiniteSlider>

              {/* Fade edges */}
              <ProgressiveBlur
                className="pointer-events-none absolute left-0 top-0 h-full w-24"
                direction="left"
                blurIntensity={0.8}
              />
              <ProgressiveBlur
                className="pointer-events-none absolute right-0 top-0 h-full w-24"
                direction="right"
                blurIntensity={0.8}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
