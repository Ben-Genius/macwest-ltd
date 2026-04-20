import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import dynamic from "next/dynamic";
import { HeroSection } from "@/components/home/hero-section";
import { ServicesSection } from "@/components/home/services-section";

const WhyMacwestSection = dynamic(() => import("@/components/home/why-macwest-section").then((mod) => mod.WhyMacwestSection));
const CertificationsSection = dynamic(() => import("@/components/home/certifications-section").then((mod) => mod.CertificationsSection));
const VisionParallaxSection = dynamic(() => import("@/components/home/vision-parallax-section").then((mod) => mod.VisionParallaxSection));
const ProjectsSection = dynamic(() => import("@/components/home/projects-section").then((mod) => mod.ProjectsSection));
const ClientsSection = dynamic(() => import("@/components/home/clients-section").then((mod) => mod.ClientsSection));
const QHSESection = dynamic(() => import("@/components/home/qhse-section").then((mod) => mod.QHSESection));
const CTABandSection = dynamic(() => import("@/components/home/cta-band-section").then((mod) => mod.CTABandSection));

export const metadata: Metadata = {
  title: "Home",
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyMacwestSection />
      <CertificationsSection />
      <VisionParallaxSection />
      <ProjectsSection />
      {/* <ClientsSection /> */}
      <QHSESection />
      <CTABandSection />
    </>
  );
}
