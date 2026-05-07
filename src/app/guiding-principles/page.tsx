import { PageHeader } from "@/components/layout/page-header";
import { createPageMetadata } from "@/lib/metadata";
import { PrinciplesContent } from "@/components/pages/principles/principles-content";

export const metadata = createPageMetadata(
  "Guiding Principles",
  "The core values and principles that drive Macwest Limited.",
  "/guiding-principles",
);

export default function GuidingPrinciplesPage() {
  return (
    <>
      <PageHeader title="Principles" description="Our North Star" />
      <PrinciplesContent />
    </>
  );
}
