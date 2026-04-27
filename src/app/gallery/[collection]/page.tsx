import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { GALLERY_COLLECTIONS, getCollection } from "@/data/gallery";
import { CollectionHeader } from "@/components/gallery/collection-header";
import { KineticPhotoGrid } from "@/components/gallery/kinetic-photo-grid";
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
  const count = isNested
    ? collection.subAlbums?.length
    : collection.images?.length;

  return (
    <>
      <CollectionHeader
        title={collection.title}
        description={collection.description}
        breadcrumbs={[
          { label: "Gallery", href: "/gallery" },
          { label: collection.title },
        ]}
        tag={
          isNested
            ? `${count} album${count !== 1 ? "s" : ""}`
            : `${count} photo${count !== 1 ? "s" : ""}`
        }
      />

      {isNested && collection.subAlbums ? (
        <SubAlbumPicker
          collectionSlug={collection.slug}
          subAlbums={collection.subAlbums}
        />
      ) : collection.images ? (
        <KineticPhotoGrid images={collection.images} />
      ) : null}
    </>
  );
}
