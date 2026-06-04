import { Suspense } from "react";
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
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="w-8 h-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin"></div>
        </div>
      }>
        <ContactSection />
      </Suspense>
      <WorldMapSection />
    </>
  );
}

