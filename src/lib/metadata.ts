import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function createPageMetadata(
  title: string,
  description?: string,
  path = "",
): Metadata {
  const pageTitle = `${title} | ${siteConfig.shortName}`;
  const url = new URL(path || "/", siteConfig.url);

  return {
    title: pageTitle,
    description: description ?? siteConfig.description,
    alternates: { canonical: url.toString() },
    openGraph: {
      title: pageTitle,
      description: description ?? siteConfig.description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: description ?? siteConfig.description,
    },
  };
}
