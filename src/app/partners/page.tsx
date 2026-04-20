import { PlaceholderPage } from "@/components/pages/placeholder-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Partners",
  "Strategic partners and collaborators (content TBD).",
  "/partners",
);

export default function PartnersPage() {
  return (
    <PlaceholderPage
      title="Partners"
      description="New route scaffold — replace with real partner stories, logos, and CTAs. The legacy site linked here from nav but the URL 404’d; this version ships a real page for UX + SEO."
    />
  );
}
