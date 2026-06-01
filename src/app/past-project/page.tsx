import { createPageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/layout/page-header";
import { PastProjectsContent } from "@/components/projects/past-projects-content";
import { CTABandSection } from "@/components/home/cta-band-section";

export const metadata = createPageMetadata(
  "Completed Projects",
  "Archive of delivered projects and programmes.",
  "/past-project",
);

export default function PastProjectsPage() {
  return (
    <>
      <PageHeader
        title="Completed Projects"
        description="A track record of delivered projects across construction, civil engineering, maritime, and housing."
      />
      <PastProjectsContent />
      {/* <CTABandSection /> */}
    </>
  );
}
