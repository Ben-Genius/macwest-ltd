"use client";

import { m } from "framer-motion";

type PlaceholderPageProps = {
  title: string;
  description?: string;
};

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <m.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 text-lg text-zinc-600">{description}</p>
        ) : (
          <p className="mt-4 text-lg text-zinc-600">
            Content for this page will be implemented in a dedicated pass. This route
            is wired for layout, SEO metadata, and navigation.
          </p>
        )}
      </m.div>
    </section>
  );
}
