import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { GALLERY_COLLECTIONS, getCollection, getSubAlbum } from "@/data/gallery";
import { CollectionHeader } from "@/components/gallery/collection-header";
import { KineticPhotoGrid } from "@/components/gallery/kinetic-photo-grid";

type Props = { params: Promise<{ collection: string; album: string }> };

export async function generateStaticParams() {
  const paths: { collection: string; album: string }[] = [];
  for (const c of GALLERY_COLLECTIONS) {
    if (c.type === "nested" && c.subAlbums) {
      for (const a of c.subAlbums) {
        paths.push({ collection: c.slug, album: a.slug });
      }
    }
  }
  return paths;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { collection: cSlug, album: aSlug } = await params;
  const album = getSubAlbum(cSlug, aSlug);
  const collection = getCollection(cSlug);
  return {
    title: album
      ? `${album.title} — ${collection?.title} | Gallery | Macwest Limited`
      : "Gallery | Macwest Limited",
    description: `${album?.images.length ?? 0} photos from ${album?.title}.`,
  };
}

export default async function SubAlbumPage({ params }: Props) {
  const { collection: cSlug, album: aSlug } = await params;
  const collection = getCollection(cSlug);
  const album = getSubAlbum(cSlug, aSlug);

  if (!collection || !album) notFound();

  return (
    <>
      <CollectionHeader
        title={album.title}
        description={`${album.images.length} photos`}
        breadcrumbs={[
          { label: "Gallery", href: "/gallery" },
          { label: collection.title, href: `/gallery/${cSlug}` },
          { label: album.title },
        ]}
        tag={collection.title}
      />
      <KineticPhotoGrid images={album.images} />
    </>
  );
}
