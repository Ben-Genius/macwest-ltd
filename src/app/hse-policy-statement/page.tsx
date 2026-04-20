import { PlaceholderPage } from "@/components/pages/placeholder-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "QHSE policy",
  "Quality, health, safety, and environment policy and performance.",
  "/hse-policy-statement",
);

export default function HsePolicyPage() {
  return <PlaceholderPage title="QHSE policy & performance" />;
}
