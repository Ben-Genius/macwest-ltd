import { PageLayout } from "@/components/pages/page-layout";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "QHSE policy",
  "Quality, health, safety, and environment policy and performance.",
  "/hse-policy-statement",
);

export default function HsePolicyPage() {
  return <PageLayout title="QHSE policy & performance" />;
}
