import { PlaceholderPage } from "@/components/pages/placeholder-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Gallery",
  "Site visits, community engagement, and team moments.",
  "/gallery",
);

export default function GalleryPage() {
  return <PlaceholderPage title="Gallery" />;
}
