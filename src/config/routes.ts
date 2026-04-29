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
      { label: "Who We Are", href: "/about-us" },
      { label: "Leadership", href: "/board-members" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Certification", href: "/services#certification" },
      { label: "Civil Construction", href: "/services#civilconst" },
      { label: "Concrete Works", href: "/services#concreteorks" },
      { label: "Housing Estates", href: "/services#housingestates" },
      { label: "MEP", href: "/services#mechanicalelectrical" },
      { label: "Procurement", href: "/services#pservice" },
      { label: "Softworks & Augmented", href: "/services#softworks" },
      { label: "Cement Supply", href: "/services#cementsupply" },
    ],
  },
  {
    label: "Projects",
    href: "/projects",
    children: [
      { label: "Current Projects", href: "/current-projects" },
      { label: "Completed Projects", href: "/past-project" },
    ],
  },
  // { label: "Partners", href: "/partners" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

export const secondaryRoutes = [
  { label: "Guiding principles", href: "/guiding-principles" },
  { label: "Organizational structure", href: "/organizational-structure" },
  { label: "QHSE policy", href: "/hse-policy-statement" },
] as const;
