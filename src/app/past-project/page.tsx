import { PageLayout } from "@/components/pages/page-layout";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Completed projects",
  "Archive of delivered projects and programmes.",
  "/past-project",
);

export default function PastProjectsPage() {
  return <PageLayout title="Completed projects" />;
}
