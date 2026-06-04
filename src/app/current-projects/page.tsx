import { createPageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/layout/page-header";
import { CurrentProjectsContent } from "@/components/projects/current-projects-content";
// import { CTABandSection } from "@/components/home/cta-band-section";

export const metadata = createPageMetadata(
  "Current Projects",
  "Active sites and programmes underway across Ghana.",
  "/current-projects",
);

export default function CurrentProjectsPage() {
  return (
    <>
      <PageHeader
        title="Current Projects"
        description="Active sites and programmes underway."
      />
      <CurrentProjectsContent />
      {/* <CTABandSection /> */}
    </>
  );
}
