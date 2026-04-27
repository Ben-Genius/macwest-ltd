import { PageLayout } from "@/components/pages/page-layout";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Guiding principles",
  "Integrity, profitability, excellence, growth, teamwork, and safety.",
  "/guiding-principles",
);

export default function GuidingPrinciplesPage() {
  return <PageLayout title="Guiding principles" />;
}
