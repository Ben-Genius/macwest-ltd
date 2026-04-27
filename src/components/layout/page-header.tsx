import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";


interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <Section theme="light" className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden relative">
      <Container className="relative z-10">
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
          <div className="mb-4 flex items-center space-x-2">
            <div className="h-1 w-12 bg-brand-600 mt-12" />
          </div>
          <Heading size="display-xl" as="h1" className="text-navy-900" >
            {title}
          </Heading>
          {description && (
            <p className="mt-6 text-xl text-brand-600 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 ease-out fill-mode-both">
              {description}
            </p>
          )}
        </div>
      </Container>
    </Section>
  );
}
