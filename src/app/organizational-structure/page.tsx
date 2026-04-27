import { PageLayout } from "@/components/pages/page-layout";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Organizational structure",
  "How teams and governance connect across Macwest.",
  "/organizational-structure",
);

export default function OrganizationalStructurePage() {
  return <PageLayout title="Organizational structure" />;
}
