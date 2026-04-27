import { GalleryHero } from "@/components/gallery/gallery-hero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Gallery",
  "Site visits, community engagement, and team moments from across Ghana.",
  "/gallery",
);

export default function GalleryPage() {
  return <GalleryHero />;
}
