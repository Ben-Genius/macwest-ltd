import { ContactHero } from "@/components/contact/contact-hero";
import { ContactSection } from "@/components/contact/contact-section";
import { WorldMapSection } from "@/components/contact/world-map-section";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Contact",
  "Office locations, phone, email, and project enquiries.",
  "/contact",
);

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactSection />
      <WorldMapSection />
    </>
  );
}
