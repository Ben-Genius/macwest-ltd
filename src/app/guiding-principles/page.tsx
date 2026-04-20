import { PlaceholderPage } from "@/components/pages/placeholder-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Guiding principles",
  "Integrity, profitability, excellence, growth, teamwork, and safety.",
  "/guiding-principles",
);

export default function GuidingPrinciplesPage() {
  return <PlaceholderPage title="Guiding principles" />;
}
