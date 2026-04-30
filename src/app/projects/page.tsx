import { createPageMetadata } from "@/lib/metadata";
import { ProjectsOverviewHero } from "@/components/projects/projects-overview-hero";
import { ProjectsHubCards } from "@/components/projects/projects-hub-cards";
import { FeaturedProjects } from "@/components/projects/featured-projects";
import { CTABandSection } from "@/components/home/cta-band-section";

export const metadata = createPageMetadata(
  "Projects",
  "Highlights of current and completed work across sectors.",
  "/projects",
);

export default function ProjectsPage() {
  return (
    <>
      <ProjectsOverviewHero />
      <ProjectsHubCards />
      {/* <CTABandSection /> */}
    </>
  );
}
