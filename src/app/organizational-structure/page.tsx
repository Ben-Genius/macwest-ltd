import { PageHeader } from "@/components/layout/page-header";
import { createPageMetadata } from "@/lib/metadata";
import { StructureContent } from "@/components/pages/structure/structure-content";

export const metadata = createPageMetadata(
  "Organizational Structure",
  "The governance and team connectivity across Macwest Limited.",
  "/organizational-structure",
);

export default function OrganizationalStructurePage() {
  return (
    <>
      <PageHeader title="Structure" description="Teams & Governance" />
      <StructureContent />
    </>
  );
}
