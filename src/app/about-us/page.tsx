import { PlaceholderPage } from "@/components/pages/placeholder-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "About us",
  "Company story, mission, vision, and corporate social responsibility.",
  "/about-us",
);

export default function AboutPage() {
  return <PlaceholderPage title="About us" />;
}
