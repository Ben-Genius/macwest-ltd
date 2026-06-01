import { PageHeader } from "@/components/layout/page-header";
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
      <PageHeader title="Contact" description="Office locations, phone, email, and project enquiries." />
      <ContactSection />
      <WorldMapSection />
    </>
  );
}
