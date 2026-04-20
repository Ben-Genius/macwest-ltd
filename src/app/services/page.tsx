import { PlaceholderPage } from "@/components/pages/placeholder-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Services",
  "Certified construction, civil, housing, MEP, procurement, cement, and softworks.",
  "/services",
);

export default function ServicesPage() {
  return <PlaceholderPage title="Services" />;
}
