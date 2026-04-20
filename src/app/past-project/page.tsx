import { PlaceholderPage } from "@/components/pages/placeholder-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Completed projects",
  "Archive of delivered projects and programmes.",
  "/past-project",
);

export default function PastProjectsPage() {
  return <PlaceholderPage title="Completed projects" />;
}
