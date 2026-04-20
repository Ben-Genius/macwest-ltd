import { PlaceholderPage } from "@/components/pages/placeholder-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Projects",
  "Highlights of current and completed work across sectors.",
  "/projects",
);

export default function ProjectsPage() {
  return <PlaceholderPage title="Projects" />;
}
