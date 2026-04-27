import { PageLayout } from "@/components/pages/page-layout";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Projects",
  "Highlights of current and completed work across sectors.",
  "/projects",
);

export default function ProjectsPage() {
  return <PageLayout title="Projects" />;
}
