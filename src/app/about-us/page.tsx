import { PageHeader } from "@/components/layout/page-header";
import { createPageMetadata } from "@/lib/metadata";
import { WhoWeAreContent } from "@/components/pages/about/who-we-are-content";

export const metadata = createPageMetadata(
  "About Us",
  "Company story, mission, vision, and corporate social responsibility.",
  "/about-us",
);

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" description="Who We Are" />
      <WhoWeAreContent />
    </>
  );
}
