import { PageLayout } from "@/components/pages/page-layout";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Partners",
  "Strategic partners and collaborators (content TBD).",
  "/partners",
);

export default function PartnersPage() {
  return (
    <PageLayout
      title="Partners"
      description="New route scaffold — replace with real partner stories, logos, and CTAs. The legacy site linked here from nav but the URL 404’d; this version ships a real page for UX + SEO."
    />
  );
}
