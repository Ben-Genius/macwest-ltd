import { PlaceholderPage } from "@/components/pages/placeholder-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Current project highlights",
  "Active sites and programmes underway.",
  "/current-projects",
);

export default function CurrentProjectsPage() {
  return <PlaceholderPage title="Current project highlights" />;
}
