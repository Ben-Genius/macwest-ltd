import { PlaceholderPage } from "@/components/pages/placeholder-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Organizational structure",
  "How teams and governance connect across Macwest.",
  "/organizational-structure",
);

export default function OrganizationalStructurePage() {
  return <PlaceholderPage title="Organizational structure" />;
}
