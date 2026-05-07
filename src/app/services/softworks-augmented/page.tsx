import { createPageMetadata } from "@/lib/metadata";
import { SoftworksAugmentedContent } from "@/components/pages/services/softworks-augmented-content";

export const metadata = createPageMetadata(
  "Softworks & Augmented Services",
  "Beyond construction, Macwest provides specialised training, leadership development, event management, branding, and media production.",
  "/services/softworks-augmented",
);

export default function SoftworksAugmentedPage() {
  return <SoftworksAugmentedContent />;
}
