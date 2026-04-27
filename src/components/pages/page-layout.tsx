"use client";

import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";

interface PageLayoutProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function PageLayout({ title, description, children }: PageLayoutProps) {
  return (
    <>
      <PageHeader title={title} description={description} />
      <Section theme="light" className="min-h-[50vh]">
        <Container>
          {children || (
            <div className="rounded-2xl border-2 border-dashed border-navy-200 p-12 text-center flex flex-col items-center justify-center min-h-[40vh] bg-navy-50/50">
               <h2 className="text-2xl font-medium text-navy-900 mb-2">Content Strategy Pending</h2>
               <p className="text-navy-600 max-w-md mx-auto">The content for the {title} section is currently being developed and will be implemented in the next phase.</p>
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
