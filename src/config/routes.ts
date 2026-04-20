/**
 * Single source of truth for primary navigation & sitemap-driven routes.
 * Child routes can be nested later (e.g. dynamic project pages).
 */
export type NavItem = {
  label: string;
  href: string;
  children?: readonly { label: string; href: string }[];
};

export const mainNav: readonly NavItem[] = [
  {
    label: "About Us",
    href: "/about-us",
    children: [
      { label: "Who we are", href: "/about-us#who-we-are" },
      { label: "Leadership", href: "/board-members" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Certification & expertise", href: "/services#certification" },
      { label: "Civil construction", href: "/services#civil-construction" },
      { label: "Housing estates", href: "/services#housing-estates" },
      { label: "Concrete works", href: "/services#concrete-works" },
      { label: "MEP", href: "/services#mep" },
      { label: "Procurement", href: "/services#procurement" },
      { label: "Softworks / augmented", href: "/services#softworks" },
      { label: "Cement supply (Ghacem)", href: "/services#cement" },
    ],
  },
  {
    label: "Projects",
    href: "/projects",
    children: [
      { label: "Current highlights", href: "/current-projects" },
      { label: "Completed highlights", href: "/past-project" },
    ],
  },
  { label: "Partners", href: "/partners" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

export const secondaryRoutes = [
  { label: "Guiding principles", href: "/guiding-principles" },
  { label: "Organizational structure", href: "/organizational-structure" },
  { label: "QHSE policy", href: "/hse-policy-statement" },
] as const;
