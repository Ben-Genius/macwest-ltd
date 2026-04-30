export type ProjectStatus = "active" | "completed";

export type ProjectCategory =
  | "Civil Engineering"
  | "Housing Estates"
  | "Construction"
  | "Maritime & Offshore"
  | "MEP"
  | "Procurement";

export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  status: ProjectStatus;
  location: string;
  region: string;
  year: string;
  yearCompleted?: string;
  client?: string;
  duration?: string;
  contractValue?: string;
  description: string;
  scope: string[];
  highlights: { label: string; value: string }[];
  cover: string;
  images: ProjectImage[];
  featured?: boolean;
  span?: "normal" | "wide" | "tall";
};

export const ALL_PROJECTS: Project[] = [
  // ── ACTIVE / IN-PROGRESS ──────────────────────────────────────────
  {
    id: 1,
    slug: "six-unit-classroom-ass-school",
    title: "Six Unit Classroom Block",
    subtitle: "Construction of Educational Facility",
    category: "Construction",
    status: "active",
    location: "Western Region",
    region: "Western Region, Ghana",
    year: "2024",
    client: "Ghana Education Trust Fund",
    duration: "Ongoing",
    description:
      "Construction of a modern six-unit classroom block to expand educational infrastructure in the Western Region. The project includes foundation works, superstructure, roofing, internal finishes, and provision of external utility connections.",
    scope: [
      "Site preparation and earthworks",
      "Foundation and substructure",
      "Block-work superstructure and roofing",
      "Internal plastering, screeding, and painting",
      "Doors, windows, and louvres",
      "External drainage and access paths",
    ],
    highlights: [
      { label: "Units", value: "6 classrooms" },
      { label: "Beneficiaries", value: "300+ pupils" },
      { label: "Status", value: "In Progress" },
      { label: "Sector", value: "Education" },
    ],
    cover: "/images/IMG_2913-scaled.jpg.jpeg",
    images: [
      { src: "/images/IMG_2913-scaled.jpg.jpeg", alt: "Classroom construction" },
      { src: "/images/IMG_2859-scaled.jpg.jpeg", alt: "Block-work progress" },
      { src: "/images/IMG_2813-scaled.jpg.jpeg", alt: "Site overview" },
    ],
    featured: true,
    span: "normal",
  },
  {
    id: 2,
    slug: "esiama-market",
    title: "Esiama Market Redevelopment",
    subtitle: "Construction of Esiama Market Complex",
    category: "Construction",
    status: "active",
    location: "Esiama, Ellembele",
    region: "Western Region, Ghana",
    year: "2023",
    client: "Ellembele District Assembly",
    duration: "Ongoing",
    description:
      "Major redevelopment of the Esiama Market to provide a modern, well-organised trading space for the local community. The project delivers covered stalls, sanitation facilities, drainage infrastructure, and paved circulation areas.",
    scope: [
      "Demolition and site clearance",
      "Structural frame and roofing",
      "Market stalls construction — covered and open",
      "Sanitation and toilet facilities",
      "Stormwater drainage network",
      "Paving, landscaping, and security lighting",
    ],
    highlights: [
      { label: "Contract Value", value: "GHS 9.6M" },
      { label: "Market Stalls", value: "200+ units" },
      { label: "Status", value: "In Progress" },
      { label: "Location", value: "Esiama" },
    ],
    cover: "/images/IMG_2760-scaled.jpg.jpeg",
    images: [
      { src: "/images/IMG_2760-scaled.jpg.jpeg", alt: "Market site overview" },
      { src: "/images/IMG_2760-scaled.jpg_1.jpeg", alt: "Structural works" },
      { src: "/images/IMG_2805-scaled.jpg.jpeg", alt: "Market construction progress" },
    ],
    featured: true,
    span: "wide",
  },
  {
    id: 3,
    slug: "shear-farm-project",
    title: "Shear Farm Project",
    subtitle: "Agricultural Infrastructure Development",
    category: "Civil Engineering",
    status: "active",
    location: "Western Region",
    region: "Western Region, Ghana",
    year: "2024",
    client: "Confidential",
    duration: "Ongoing",
    description:
      "Civil and infrastructure works for a large-scale shear farm development, encompassing site levelling, access roads, drainage, and utility provision. The project supports agricultural production and post-harvest logistics in the region.",
    scope: [
      "Land clearing and grading",
      "Access road construction",
      "Drainage and irrigation channels",
      "Storage facility foundations",
      "Utility connections",
    ],
    highlights: [
      { label: "Contract Value", value: "GHS 3.6M" },
      { label: "Site Area", value: "Large-scale" },
      { label: "Status", value: "In Progress" },
      { label: "Sector", value: "Agriculture" },
    ],
    cover: "/images/DJI_20240911144011_0234_D_PARZIAIR.jpg.jpeg",
    images: [
      { src: "/images/DJI_20240911144011_0234_D_PARZIAIR.jpg.jpeg", alt: "Aerial site view" },
      { src: "/images/IMG_9861-scaled.jpg.jpeg", alt: "Earthworks" },
    ],
    featured: false,
    span: "normal",
  },
  {
    id: 4,
    slug: "conference-hall-project",
    title: "Conference Hall",
    subtitle: "Construction of Multi-Purpose Conference Facility",
    category: "Construction",
    status: "active",
    location: "Western Region",
    region: "Western Region, Ghana",
    year: "2024",
    client: "Confidential",
    duration: "Ongoing",
    description:
      "Construction of a purpose-built conference hall to host regional meetings, training sessions, and civic events. The facility features a main hall, breakout rooms, AV infrastructure, and full MEP services.",
    scope: [
      "Structural frame and roofing system",
      "Main auditorium and breakout rooms",
      "Acoustic treatment and interior finishes",
      "AV, electrical, and data cabling",
      "HVAC and ventilation",
      "External works and car parking",
    ],
    highlights: [
      { label: "Contract Value", value: "GHS 6.2M" },
      { label: "Hall Capacity", value: "500+ delegates" },
      { label: "Status", value: "In Progress" },
      { label: "Sector", value: "Civic" },
    ],
    cover: "/images/IMG_9528-scaled.jpg.jpeg",
    images: [
      { src: "/images/IMG_9528-scaled.jpg.jpeg", alt: "Conference hall construction" },
      { src: "/images/IMG_9861-scaled.jpg.jpeg", alt: "Structural works" },
    ],
    featured: true,
    span: "tall",
  },
  {
    id: 5,
    slug: "renovation-works",
    title: "Renovation Works Programme",
    subtitle: "Refurbishment & Building Rehabilitation",
    category: "Construction",
    status: "active",
    location: "Multiple Sites",
    region: "Western Region, Ghana",
    year: "2024",
    client: "Confidential",
    duration: "Ongoing",
    description:
      "A multi-site renovation programme covering the refurbishment and rehabilitation of existing buildings. Works include structural repairs, re-roofing, replastering, repainting, upgraded sanitation, and electrical rewiring.",
    scope: [
      "Structural assessment and repairs",
      "Roofing replacement and waterproofing",
      "Internal and external replastering",
      "Sanitation and plumbing upgrades",
      "Electrical rewiring and new fittings",
      "Painting and decorative finishes",
    ],
    highlights: [
      { label: "Contract Value", value: "GHS 800K" },
      { label: "Sites", value: "Multiple" },
      { label: "Status", value: "In Progress" },
      { label: "Sector", value: "Refurbishment" },
    ],
    cover: "/images/IMG_2913-scaled.jpg_1.jpeg",
    images: [
      { src: "/images/IMG_2913-scaled.jpg_1.jpeg", alt: "Renovation works" },
      { src: "/images/IMG_2859-scaled.jpg_1.jpeg", alt: "Refurbishment progress" },
    ],
    featured: false,
    span: "normal",
  },
  {
    id: 6,
    slug: "thermal-power-project",
    title: "Thermal Power Project",
    subtitle: "Energy Infrastructure & Civil Works",
    category: "Civil Engineering",
    status: "active",
    location: "Ghana",
    region: "Ghana",
    year: "2024",
    client: "Confidential",
    duration: "Ongoing",
    description:
      "Civil and infrastructure support works for a thermal power generation project. Macwest is responsible for site preparation, civil structures, access works, and coordination with mechanical and electrical installation teams.",
    scope: [
      "Site preparation and levelling",
      "Civil structures for plant foundations",
      "Access roads and hardstanding",
      "Underground utility routing",
      "Fencing and perimeter security",
    ],
    highlights: [
      { label: "Sector", value: "Energy" },
      { label: "Status", value: "In Progress" },
      { label: "Type", value: "Thermal Generation" },
      { label: "Scope", value: "Civil Works" },
    ],
    cover: "/images/IMG_9861-scaled.jpg.jpeg",
    images: [
      { src: "/images/IMG_9861-scaled.jpg.jpeg", alt: "Site works" },
      { src: "/images/DJI_20240911144011_0234_D_PARZIAIR.jpg_1.jpeg", alt: "Aerial overview" },
    ],
    featured: false,
    span: "normal",
  },
  {
    id: 7,
    slug: "coastal-engagement-fishing-shed-showroom",
    title: "Coastal Engagement — Fishing Shed & Showroom",
    subtitle: "Community Infrastructure for Fishing Communities",
    category: "Civil Engineering",
    status: "active",
    location: "Coastal Communities",
    region: "Western Region, Ghana",
    year: "2024",
    client: "ENI Ghana / Community Partners",
    duration: "Ongoing",
    description:
      "Construction of a fishing shed and showroom facility to support coastal fishing communities. The facility provides a covered processing area, storage, and a community showroom to improve post-harvest handling and market access for local fishermen.",
    scope: [
      "Structural frame and roofing",
      "Fish processing and storage areas",
      "Showroom and display space",
      "Sanitation and water supply",
      "Access and hard-standing",
    ],
    highlights: [
      { label: "Contract Value", value: "GHS 3.0M" },
      { label: "Communities", value: "Coastal" },
      { label: "Status", value: "In Progress" },
      { label: "Sector", value: "Community" },
    ],
    cover: "/images/IMG_4741-scaled.jpg.jpeg",
    images: [
      { src: "/images/IMG_4741-scaled.jpg.jpeg", alt: "Coastal facility" },
      { src: "/images/IMG_4737-scaled.jpg.jpeg", alt: "Community engagement" },
    ],
    featured: false,
    span: "normal",
  },
  {
    id: 8,
    slug: "ofankor-project",
    title: "Ofankor Development Project",
    subtitle: "Civil & Infrastructure Works",
    category: "Civil Engineering",
    status: "active",
    location: "Ofankor, Accra",
    region: "Greater Accra, Ghana",
    year: "2024",
    client: "Confidential",
    duration: "Ongoing",
    description:
      "Civil engineering and infrastructure development works in the Ofankor area of Greater Accra, covering road improvements, drainage, and utility installation as part of a wider urban development initiative.",
    scope: [
      "Road base preparation and surfacing",
      "Drainage channels and culverts",
      "Utility trenching and pipe installation",
      "Kerbing and road markings",
    ],
    highlights: [
      { label: "Contract Value", value: "GHS 1.85M" },
      { label: "Location", value: "Ofankor, Accra" },
      { label: "Status", value: "In Progress" },
      { label: "Sector", value: "Urban Infra" },
    ],
    cover: "/images/IMG_2913-scaled.jpg.jpeg",
    images: [
      { src: "/images/IMG_2913-scaled.jpg.jpeg", alt: "Road works" },
      { src: "/images/IMG_2859-scaled.jpg.jpeg", alt: "Drainage works" },
    ],
    featured: false,
    span: "normal",
  },

  // ── COMPLETED ────────────────────────────────────────────────────
  {
    id: 9,
    slug: "housing-estate-accra",
    title: "Housing Estate Development",
    subtitle: "Residential Planning & Construction",
    category: "Housing Estates",
    status: "completed",
    location: "Accra",
    region: "Greater Accra, Ghana",
    year: "2022",
    yearCompleted: "2023",
    client: "Imperial Homes Ghana",
    duration: "24 months",
    contractValue: "GHS 8.6M",
    description:
      "A 48-unit mixed residential estate developed for mid-market homeowners on the outskirts of Accra. The project included site preparation, infrastructure provision, and full construction of detached and semi-detached units to client specification.",
    scope: [
      "Site clearing and grading",
      "Road construction and drainage",
      "48-unit residential buildings",
      "Community amenities block",
      "Perimeter security and landscaping",
      "Utility connections — water, power, sewage",
    ],
    highlights: [
      { label: "Contract Value", value: "GHS 8.6M" },
      { label: "Units Delivered", value: "48 homes" },
      { label: "Site Area", value: "31,000 m²" },
      { label: "Duration", value: "24 months" },
    ],
    cover: "/images/IMG_8104-scaled.jpg.jpeg",
    images: [
      { src: "/images/IMG_8104-scaled.jpg.jpeg", alt: "Housing estate overview" },
      { src: "/images/IMG_8104-scaled.jpg_1.jpeg", alt: "Residential units" },
      { src: "/images/IMG_2760-scaled.jpg.jpeg", alt: "Community block" },
    ],
    featured: true,
    span: "wide",
  },
  {
    id: 10,
    slug: "offshore-support-vessel-operations",
    title: "Offshore Support Vessel Operations",
    subtitle: "Maritime & Offshore Logistics",
    category: "Maritime & Offshore",
    status: "completed",
    location: "Gulf of Guinea",
    region: "Gulf of Guinea, Ghana",
    year: "2022",
    yearCompleted: "2023",
    client: "ENI Ghana",
    duration: "16 months",
    contractValue: "USD 1.2M",
    description:
      "Provision of offshore support vessel (OSV) operations and marine logistics services for ENI Ghana's deepwater extraction programme. Scope covered crew boat operations, cargo handling, emergency standby, and safety management.",
    scope: [
      "Crew boat and vessel management",
      "Offshore cargo handling and logistics",
      "Emergency standby vessel services",
      "Safety management system implementation",
      "Anchor handling and mooring support",
    ],
    highlights: [
      { label: "Contract Value", value: "USD 1.2M" },
      { label: "Vessel Days", value: "480+ days" },
      { label: "Offshore Reach", value: "Deep water" },
      { label: "Duration", value: "16 months" },
    ],
    cover: "/images/IMG_4741-scaled.jpg.jpeg",
    images: [
      { src: "/images/IMG_4741-scaled.jpg.jpeg", alt: "Offshore operations" },
      { src: "/images/IMG_4737-scaled.jpg.jpeg", alt: "Vessel at sea" },
      { src: "/images/IMG_4738-scaled.jpg.jpeg", alt: "Cargo handling" },
    ],
    featured: true,
    span: "normal",
  },
  {
    id: 11,
    slug: "astroturf-construction-ellembele",
    title: "AstroTurf Pitch — Ellembele",
    subtitle: "Sports Infrastructure Delivery",
    category: "Civil Engineering",
    status: "completed",
    location: "Ellembele",
    region: "Western Region, Ghana",
    year: "2023",
    yearCompleted: "2024",
    client: "Ghana Education Trust Fund / ENI Ghana",
    duration: "10 months",
    contractValue: "GHS 1.9M",
    description:
      "Full design and construction of a FIFA-grade AstroTurf pitch for a community school in the Ellembele district. Officially handed over to the community in a ceremony attended by local government and ENI Ghana representatives.",
    scope: [
      "Site survey and levelling",
      "Drainage sub-base installation",
      "FIFA-grade artificial turf installation",
      "Perimeter fencing and floodlighting",
      "Dressing room facilities",
      "Handing over documentation and ceremony",
    ],
    highlights: [
      { label: "Contract Value", value: "GHS 1.9M" },
      { label: "Pitch Size", value: "90×60 m" },
      { label: "Standard", value: "FIFA Quality Pro" },
      { label: "Duration", value: "10 months" },
    ],
    cover: "/images/DJI_20240911144011_0234_D_PARZIAIR.jpg.jpeg",
    images: [
      { src: "/images/DJI_20240911144011_0234_D_PARZIAIR.jpg.jpeg", alt: "Aerial view of AstroTurf" },
      { src: "/images/DJI_20240911144011_0234_D_PARZIAIR.jpg_1.jpeg", alt: "Handover ceremony" },
      { src: "/images/IMG_9528-scaled.jpg.jpeg", alt: "Completed pitch" },
      { src: "/images/IMG_9861-scaled.jpg.jpeg", alt: "Floodlighting" },
    ],
    featured: false,
    span: "normal",
  },
  {
    id: 12,
    slug: "community-sports-complex-western",
    title: "Community Sports Complex",
    subtitle: "Structural Engineering & Civil Works",
    category: "Civil Engineering",
    status: "completed",
    location: "Western Region",
    region: "Western Region, Ghana",
    year: "2023",
    yearCompleted: "2024",
    client: "Ghana Education Trust Fund",
    duration: "18 months",
    contractValue: "GHS 4.2M",
    description:
      "A community sports facility serving over 10,000 residents across the Western Region. The project encompasses a multi-purpose sports hall, outdoor courts, AstroTurf pitch, and supporting civil infrastructure.",
    scope: [
      "Foundation and substructure works",
      "Steel frame superstructure",
      "Reinforced concrete stands",
      "AstroTurf pitch installation",
      "Drainage and stormwater management",
      "Electrical and lighting systems",
    ],
    highlights: [
      { label: "Contract Value", value: "GHS 4.2M" },
      { label: "Site Area", value: "12,400 m²" },
      { label: "Capacity", value: "2,500 seats" },
      { label: "Duration", value: "18 months" },
    ],
    cover: "/images/DJI_20240911144011_0234_D_PARZIAIR.jpg_1.jpeg",
    images: [
      { src: "/images/DJI_20240911144011_0234_D_PARZIAIR.jpg_1.jpeg", alt: "Sports complex aerial" },
      { src: "/images/IMG_9528-scaled.jpg.jpeg", alt: "Construction progress" },
      { src: "/images/IMG_9861-scaled.jpg.jpeg", alt: "Foundation works" },
    ],
    featured: false,
    span: "normal",
  },
];

export const ACTIVE_PROJECTS = ALL_PROJECTS.filter((p) => p.status === "active");
export const COMPLETED_PROJECTS = ALL_PROJECTS.filter((p) => p.status === "completed");
export const FEATURED_PROJECTS = ALL_PROJECTS.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return ALL_PROJECTS.find((p) => p.slug === slug);
}

export function getRelatedProjects(slug: string, count = 3): Project[] {
  const project = getProject(slug);
  if (!project) return [];
  const sameCategory = ALL_PROJECTS.filter(
    (p) => p.slug !== slug && p.category === project.category
  );
  const otherCategory = ALL_PROJECTS.filter(
    (p) => p.slug !== slug && p.category !== project.category
  );
  return [...sameCategory, ...otherCategory].slice(0, count);
}

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "Civil Engineering",
  "Housing Estates",
  "Construction",
  "Maritime & Offshore",
  "MEP",
  "Procurement",
];
