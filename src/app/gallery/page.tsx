import { PageLayout } from "@/components/pages/page-layout";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Gallery",
  "Site visits, community engagement, and team moments.",
  "/gallery",
);

export default function GalleryPage() {
  return <PageLayout title="Gallery" />;
}
