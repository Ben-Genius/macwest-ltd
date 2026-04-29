import { PageLayout } from "@/components/pages/page-layout";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Current project highlights",
  "Active sites and programmes underway.",
  "/current-projects",
);

export default function CurrentProjectsPage() {
  return <PageLayout title="Current project highlights" />;
}
