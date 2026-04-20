"use client";

import { DicedHeroSection } from "@/components/ui/diced-hero-section";
import { useRouter } from "next/navigation";

export function CTABandSection() {
  const router = useRouter();

  return (
    <section className="relative bg-sand-50 py-10 md:py-20 border-t border-black/5 overflow-hidden">
      <DicedHeroSection
        topText="Start a project"
        mainText="Your Vision"
        subMainText="Let's build the infrastructure of tomorrow. We specialize in certified civil engineering, structural developments, and MEP solutions configured to precise international standards across Ghana."
        buttonText="Get a Quote"
        slides={[
          {
            title: "Civil Engineering",
            image: "/images/IMG_9861-scaled.jpg.jpeg",
          },
          {
            title: "Construction Site",
            image: "/images/IMG_8104-scaled.jpg.jpeg",
          },
          {
            title: "Project Management",
            image: "/images/IMG_2913-scaled.jpg_1.jpeg",
          },
          {
            title: "Structural Engineering",
            image: "/images/0T6A9963.jpg.jpeg",
          },
        ]}
        onMainButtonClick={() => router.push("/contact")}
        onGridImageHover={(index) => console.log(`Previewing project image ${index}`)}
        onGridImageClick={(index) => router.push("/projects")}
        topTextStyle={{ 
          color: "oklch(42% 0.175 22)", // Brand 600 Burgundy
          fontSize: "0.875rem",
          gradient: "linear-gradient(45deg, oklch(51% 0.175 22), oklch(42% 0.175 22))"
        }}
        mainTextStyle={{
          fontSize: "clamp(3rem, 6vw, 4.5rem)",
          gradient: "linear-gradient(45deg, oklch(15% 0.028 248), oklch(29% 0.072 248))", // Navy gradient
        }}
        subMainTextStyle={{ 
          color: "oklch(29% 0.072 248)", // Navy 700 
          fontSize: "1.125rem" 
        }}
        buttonStyle={{
          backgroundColor: "oklch(42% 0.175 22)", // Brand 600 Burgundy
          color: "#ffffff",
          borderRadius: "1rem",
          hoverColor: "oklch(35% 0.160 22)", // Brand 700
          hoverForeground: "#f5f0e8", // Sand 50
        }}
        separatorColor="oklch(74% 0.112 74)" // Gold 400
        mobileBreakpoint={1000}
        fontFamily="var(--font-sans)"
      />
    </section>
  );
}
