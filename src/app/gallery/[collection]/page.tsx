import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { GALLERY_COLLECTIONS, getCollection } from "@/data/gallery";
import { CollectionHeader } from "@/components/gallery/collection-header";
import { KineticScrollGallery } from "@/components/gallery/kinetic-scroll-gallery";
import { GalleryGridBlock } from "@/components/gallery/gallery-grid-block";
import { DraggableGrid } from "@/components/gallery/draggable-grid";
import { SubAlbumPicker } from "@/components/gallery/sub-album-picker";

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

  const isNested = collection.type === "nested";
  const count = isNested ? collection.subAlbums?.length : collection.images?.length;

  /* nested → sub-album picker, no header needed */
  if (isNested && collection.subAlbums) {
    return (
      <>
        <CollectionHeader
          title={collection.title}
          description={collection.description}
          breadcrumbs={[{ label: "Gallery", href: "/gallery" }, { label: collection.title }]}
          tag={`${count} album${count !== 1 ? "s" : ""}`}
        />
        <SubAlbumPicker collectionSlug={collection.slug} subAlbums={collection.subAlbums} />
      </>
    );
  }

  if (!collection.images) notFound();

  const style = collection.displayStyle ?? "kinetic";

  /* drag style fills the viewport — no header */
  if (style === "drag") {
    return <DraggableGrid images={collection.images} />;
  }

  return (
    <>
      <CollectionHeader
        title={collection.title}
        description={collection.description}
        breadcrumbs={[{ label: "Gallery", href: "/gallery" }, { label: collection.title }]}
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
