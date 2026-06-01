import { PageHeader } from "@/components/layout/page-header";
import { GalleryHero } from "@/components/gallery/gallery-hero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Gallery",
  "Site visits, community engagement, and team moments from across Ghana.",
  "/gallery",
);

export default function GalleryPage() {
  return (
    <>
      <PageHeader title="Gallery" description="Our work, our people, our story." />
      <GalleryHero />
    </>
  );
}
