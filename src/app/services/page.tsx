import { createPageMetadata } from "@/lib/metadata";
import { ServicesContent } from "@/components/pages/services/services-content";

export const metadata = createPageMetadata(
  "Services",
  "Certified construction, civil engineering, housing, MEP, procurement, cement supply, and augmented services.",
  "/services",
);

export default function ServicesPage() {
  return <ServicesContent />;
}
