import { notFound } from "next/navigation";
import { ALL_PROJECTS, getProject, getRelatedProjects } from "@/data/projects";
import { createPageMetadata } from "@/lib/metadata";
import { ProjectDetailHero } from "@/components/projects/project-detail-hero";
import { ProjectDetailBody } from "@/components/projects/project-detail-body";
// import { CTABandSection } from "@/components/home/cta-band-section";

export function generateStaticParams() {
  return ALL_PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return createPageMetadata(
    project.title,
    project.subtitle,
    `/projects/${slug}`
  );
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = getRelatedProjects(slug, 3);

  return (
    <>
      <ProjectDetailHero project={project} />
      <ProjectDetailBody project={project} related={related} />

    </>
  );
}
