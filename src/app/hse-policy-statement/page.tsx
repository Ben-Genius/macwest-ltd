import { PageHeader } from "@/components/layout/page-header";
import { createPageMetadata } from "@/lib/metadata";
import { HseContent } from "@/components/pages/hse/hse-content";

export const metadata = createPageMetadata(
  "HSE Policy Statement",
  "Quality, Health, Safety and Environment Policy Statement of Macwest Limited.",
  "/hse-policy-statement",
);

export default function HsePolicyPage() {
  return (
    <>
      <PageHeader title="HSE Policy" description="Commitment to Excellence" />
      <HseContent />
    </>
  );
}
