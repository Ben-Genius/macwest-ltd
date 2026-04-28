import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { GALLERY_COLLECTIONS, getCollection, type GalleryImage } from "@/data/gallery";
import { CollectionHeader } from "@/components/gallery/collection-header";
import { KineticScrollGallery } from "@/components/gallery/kinetic-scroll-gallery";
import { GalleryGridBlock } from "@/components/gallery/gallery-grid-block";

type Props = { params: Promise<{ collection: string }> };

export async function generateStaticParams() {
  return GALLERY_COLLECTIONS.map((c) => ({ collection: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { collection: slug } = await params;
  const collection = getCollection(slug);
  return {
    title: collection
      ? `${collection.title} — Gallery | Macwest Limited`
      : "Gallery | Macwest Limited",
    description: collection?.description ?? "",
  };
}

export default async function CollectionPage({ params }: Props) {
  const { collection: slug } = await params;
  const collection = getCollection(slug);
  if (!collection) notFound();

  /* ── Nested: combine all sub-album images with category label ── */
  if (collection.type === "nested" && collection.subAlbums) {
    const count = collection.subAlbums.length;
    const combinedImages: GalleryImage[] = collection.subAlbums.flatMap(
      (album) => album.images.map((img) => ({ ...img, category: album.title })),
    );

    return (
      <>
        <CollectionHeader
          title={collection.title}
          description={collection.description}
          breadcrumbs={[
            { label: "Gallery", href: "/gallery" },
            { label: collection.title },
          ]}
          tag={`${count} album${count !== 1 ? "s" : ""}`}
        />
        <GalleryGridBlock images={combinedImages} />
      </>
    );
  }

  /* ── Flat ── */
  if (!collection.images) notFound();

  const count = collection.images.length;
  const style = collection.displayStyle ?? "kinetic";

  return (
    <>
      <CollectionHeader
        title={collection.title}
        description={collection.description}
        breadcrumbs={[
          { label: "Gallery", href: "/gallery" },
          { label: collection.title },
        ]}
        tag={`${count} photo${count !== 1 ? "s" : ""}`}
      />
      {style === "grid" ? (
        <GalleryGridBlock images={collection.images} />
      ) : (
        <KineticScrollGallery images={collection.images} />
      )}
    </>
  );
}
