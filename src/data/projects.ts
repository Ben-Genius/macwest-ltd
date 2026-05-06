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
  description: string;
  scope: string[];
  highlights: { label: string; value: string }[];
  cover: string; // empty string = no image yet
  images: ProjectImage[];
  featured?: boolean;
  span?: "normal" | "wide" | "tall";
};

// ─────────────────────────────────────────────────────────────────────────────
// DJI aerial shoot — Sept 11 2024 — image-to-project assignment (no repeats)
//   AstroTurf (id:11)     → 0224, 0225, 0227, 0234, 0235, 0240
//   Sports Complex (id:12) → 0255, 0270
//   QIP Latrines (id:21)  → 0281, 0283, 0285, 0286, 0287, 0288
//   QIP Solar (id:20)     → 0257, 0308, 0310, 0314, 0315, 0316, 0317, 0319, 0320, 0325
//   Eni School Rehab (id:24):
//     Eikwe       → 0243, 0244, 0249, 0250, 0251
//     Anokyi Meth → 0258, 0260, 0261, 0262
//     Anokyi D/A  → 0265, 0267, 0268
//     Bakanta     → 0296, 0298, 0300
// ─────────────────────────────────────────────────────────────────────────────

const P  = "/images/projects/projects"; // shorthand
const PP = "/images/projects/pastProject"; // real project photos
const AGY  = `${PP}/1. Eastern Region (Agyanoa) - Complete Activities`;
const SHEA = `${PP}/2. Shea Farm Project - Complete Activities`;
const SAZ  = `${PP}/3. Sanzule Showroom - Complete Activities`;
const SCH  = `${PP}/4. School Project - Complete Activities`;
const MAIN = `${PP}/5. Main Site (Lounge/Main Building/New Shops/Top Offices) - Complete Activities`;

export const ALL_PROJECTS: Project[] = [

  // ══════════════════════════════════════════════════════════════════
  // ACTIVE / IN-PROGRESS
  // ══════════════════════════════════════════════════════════════════

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
    cover: "/images/IMG_2859-scaled.jpg.jpeg",
    images: [
      { src: "/images/IMG_2859-scaled.jpg.jpeg", alt: "Classroom construction progress" },
      { src: "/images/IMG_2859-scaled.jpg_1.jpeg", alt: "Block-work progress" },
      { src: "/images/IMG_2813-scaled.jpg.jpeg", alt: "Site overview" },
    ],
    featured: true,
    span: "normal",
  },

  {
    id: 2,
    slug: "esiama-market",
    title: "Esiama Market & Bus Terminal",
    subtitle: "Construction of Market Complex & Transit Hub",
    category: "Construction",
    status: "active",
    location: "Esiama, Ellembele",
    region: "Western Region, Ghana",
    year: "2023",
    client: "Ellembele District Assembly",
    duration: "Ongoing",
    description:
      "Major redevelopment of the Esiama Market to provide a modern, well-organised trading space and integrated bus terminal for the local community. The project delivers covered stalls, sanitation facilities, drainage infrastructure, and paved circulation areas.",
    scope: [
      "Demolition and site clearance",
      "Structural frame and roofing",
      "Market stalls construction — covered and open",
      "Bus terminal and passenger waiting area",
      "Sanitation and toilet facilities",
      "Stormwater drainage and security lighting",
    ],
    highlights: [
      { label: "Market Stalls", value: "200+ units" },
      { label: "Status", value: "In Progress" },
      { label: "Location", value: "Esiama" },
    ],
    cover: `${P}/market/market.webp`,
    images: [
      { src: `${P}/market/market.webp`, alt: "Market complex overview" },
      { src: `${P}/market/Market-and-bus-terminal.webp`, alt: "Market and bus terminal" },
      { src: `${P}/market/WhatsApp-Image-2026-02-18-at-4.24.48-PM-market.webp`, alt: "Construction progress" },
      { src: `${P}/market/WhatsApp-Image-2026-02-18-at-4.24.49-PM-Market-terminal.webp`, alt: "Terminal works" },
      { src: `${P}/market/WhatsApp-Image-2026-02-18-at-4.24.50-PM-market-terminal.webp`, alt: "Site works ongoing" },
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
      "Civil and infrastructure works for a large-scale shear farm development, encompassing site levelling, access roads, drainage, and utility provision to support agricultural production and post-harvest logistics.",
    scope: [
      "Land clearing and grading",
      "Access road construction",
      "Drainage and irrigation channels",
      "Storage facility foundations",
      "Utility connections",
    ],
    highlights: [
      { label: "Site Area", value: "Large-scale" },
      { label: "Status", value: "In Progress" },
      { label: "Sector", value: "Agriculture" },
    ],
    cover: `${SHEA}/00001509-PHOTO-2026-04-30-21-11-12.webp`,
    images: [
      { src: `${SHEA}/00001509-PHOTO-2026-04-30-21-11-12.webp`, alt: "Shea farm site" },
      { src: `${SHEA}/00001510-PHOTO-2026-04-30-21-11-13.webp`, alt: "Farm infrastructure works" },
      { src: `${SHEA}/00001514-PHOTO-2026-05-01-09-48-12.webp`, alt: "Site development progress" },
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
      "Construction of a purpose-built conference hall for regional meetings, training sessions, and civic events. The facility features a main hall, breakout rooms, AV infrastructure, and full MEP services.",
    scope: [
      "Structural frame and roofing system",
      "Main auditorium and breakout rooms",
      "Acoustic treatment and interior finishes",
      "AV, electrical, and data cabling",
      "HVAC and ventilation",
      "External works and car parking",
    ],
    highlights: [
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
      "A multi-site renovation programme covering the refurbishment and rehabilitation of existing residential and commercial buildings — structural repairs, re-roofing, replastering, repainting, upgraded sanitation, and electrical rewiring.",
    scope: [
      "Structural assessment and repairs",
      "Roofing replacement and waterproofing",
      "Internal and external replastering",
      "Sanitation and plumbing upgrades",
      "Electrical rewiring and new fittings",
      "Painting and decorative finishes",
    ],
    highlights: [
      { label: "Sites", value: "Multiple" },
      { label: "Status", value: "In Progress" },
      { label: "Sector", value: "Refurbishment" },
    ],
    cover: `${P}/home-service/home-service.webp`,
    images: [
      { src: `${P}/home-service/home-service.webp`, alt: "Renovation works overview" },
      { src: `${P}/home-service/home-service1.webp`, alt: "Interior refurbishment" },
      { src: `${P}/home-service/home-service11.webp`, alt: "Replastering works" },
      { src: `${P}/home-service/home-service31.webp`, alt: "Painting and finishes" },
      { src: `${P}/home-service/home-service312.webp`, alt: "Completed interior" },
      { src: `${P}/home-service/home-service011.webp`, alt: "External renovation" },
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
      "Civil and infrastructure support works for a thermal power generation project — site preparation, civil structures, access works, and coordination with mechanical and electrical installation teams.",
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
    cover: `${P}/new-gas/new-gas_1.webp`,
    images: [
      { src: `${P}/new-gas/new-gas_1.webp`, alt: "Energy infrastructure works" },
      { src: `${P}/tg/TG-Thumb_1.webp`, alt: "Thermal generation site" },
      { src: "/images/img-steel-pipes.jpg", alt: "Pipe and utility installation" },
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
      "Construction of a fishing shed and showroom facility supporting coastal fishing communities with covered processing, storage, and a community showroom to improve post-harvest handling and market access.",
    scope: [
      "Structural frame and roofing",
      "Fish processing and storage areas",
      "Showroom and display space",
      "Sanitation and water supply",
      "Access and hard-standing",
    ],
    highlights: [
      { label: "Communities", value: "Coastal" },
      { label: "Status", value: "In Progress" },
      { label: "Sector", value: "Community" },
    ],
    cover: "/images/img-port.jpg",
    images: [
      { src: "/images/img-port.jpg", alt: "Coastal facility" },
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
      "Civil engineering and infrastructure development in Ofankor, Greater Accra — road improvements, drainage, and utility installation as part of a wider urban development initiative.",
    scope: [
      "Road base preparation and surfacing",
      "Drainage channels and culverts",
      "Utility trenching and pipe installation",
      "Kerbing and road markings",
    ],
    highlights: [
      { label: "Location", value: "Ofankor, Accra" },
      { label: "Status", value: "In Progress" },
      { label: "Sector", value: "Urban Infra" },
    ],
    cover: "/images/IMG_2760-scaled.jpg_2.jpeg",
    images: [
      { src: "/images/IMG_2760-scaled.jpg_2.jpeg", alt: "Road works" },
      { src: "/images/IMG_2760-scaled.jpg_1.jpeg", alt: "Drainage works" },
    ],
    featured: false,
    span: "normal",
  },

  {
    id: 25,
    slug: "nkroful-projects",
    title: "Nkroful Construction Projects",
    subtitle: "Civil & Building Works",
    category: "Construction",
    status: "active",
    location: "Nkroful, Western Region",
    region: "Western Region, Ghana",
    year: "2025",
    client: "Confidential",
    duration: "Ongoing",
    description:
      "Ongoing civil and building construction works in Nkroful, Western Region — covering structural works, infrastructure installation, and site development as part of Macwest's expanding portfolio in the area.",
    scope: [
      "Site preparation and substructure",
      "Structural frame and block-work",
      "Roofing and weatherproofing",
      "Internal and external finishes",
      "MEP services installation",
      "External works and site clearance",
    ],
    highlights: [
      { label: "Location", value: "Nkroful" },
      { label: "Status", value: "In Progress" },
      { label: "Year", value: "2025–ongoing" },
    ],
    cover: `${P}/nkroful/nkrofulpro.webp`,
    images: [
      { src: `${P}/nkroful/nkrofulpro.webp`, alt: "Nkroful project site" },
      { src: `${P}/nkroful/WhatsApp-Image-2026-02-18-at-4.28.57-PM-Nkroful.webp`, alt: "Construction progress" },
      { src: `${P}/nkroful/WhatsApp-Image-2026-02-18-at-4.29.00-Nkroful-Project.webp`, alt: "Structural works" },
      { src: `${P}/nkroful/WhatsApp-Image-2026-02-18-at-4.29.01-PM-Nkroful-Project.webp`, alt: "Building works" },
      { src: `${P}/nkroful/WhatsApp-Image-2026-02-18-at-4.29.03-PM-Nkroful-Project.webp`, alt: "Site overview" },
    ],
    featured: false,
    span: "normal",
  },

  // ══════════════════════════════════════════════════════════════════
  // COMPLETED
  // ══════════════════════════════════════════════════════════════════

  {
    id: 9,
    slug: "paradise-estate-villas",
    title: "Paradise Estate — 3 & 4 Bedroom Villas",
    subtitle: "Residential Housing Development",
    category: "Housing Estates",
    status: "completed",
    location: "Ghana",
    region: "Ghana",
    year: "2022",
    yearCompleted: "2024",
    client: "Imperial Homes Ghana",
    duration: "24 months",
    description:
      "Construction of 3-bedroom and 4-bedroom villa units at Paradise Estate for a private residential development — full structural works, MEP installations, premium internal finishes, and landscaping for each unit.",
    scope: [
      "Site clearing and infrastructure works",
      "Foundation and substructure",
      "Superstructure — block-work, columns, and beam",
      "Roofing, fascia, and guttering",
      "Internal plastering, tiling, and finishes",
      "MEP installations — electrical, plumbing, HVAC",
      "Landscaping and perimeter walling",
    ],
    highlights: [
      { label: "Type", value: "3 & 4 Bed Villas" },
      { label: "Duration", value: "24 months" },
      { label: "Sector", value: "Private Residential" },
    ],
    cover: "",
    images: [],
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
    description:
      "Provision of offshore support vessel (OSV) operations and marine logistics for ENI Ghana's deepwater extraction programme — crew boat operations, cargo handling, emergency standby, and safety management.",
    scope: [
      "Crew boat and vessel management",
      "Offshore cargo handling and logistics",
      "Emergency standby vessel services",
      "Safety management system implementation",
      "Anchor handling and mooring support",
    ],
    highlights: [
      { label: "Vessel Days", value: "480+ days" },
      { label: "Offshore Reach", value: "Deep water" },
      { label: "Duration", value: "16 months" },
    ],
    cover: "",
    images: [],
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
    client: "QIP / Eni Ghana Exploration and Production",
    duration: "10 months",
    description:
      "Full design and construction of a FIFA-grade AstroTurf pitch for a community school in the Ellembele district, officially handed over in a ceremony attended by local government and ENI Ghana representatives.",
    scope: [
      "Site survey and levelling",
      "Drainage sub-base installation",
      "FIFA-grade artificial turf installation",
      "Perimeter fencing and floodlighting",
      "Dressing room facilities",
      "Handover documentation and ceremony",
    ],
    highlights: [
      { label: "Pitch Size", value: "90×60 m" },
      { label: "Standard", value: "FIFA Quality Pro" },
      { label: "Duration", value: "10 months" },
    ],
    cover: `${P}/DJI/DJI_20240911144032_0235_D_PARZIAIR.webp`,
    images: [
      { src: `${P}/DJI/DJI_20240911144032_0235_D_PARZIAIR.webp`, alt: "AstroTurf aerial view" },
      { src: `${P}/DJI/DJI_20240911144011_0234_D_PARZIAIR.webp`, alt: "Completed pitch from above" },
      { src: `${P}/DJI/DJI_20240911143424_0224_D_PARZIAIR.webp`, alt: "Pitch site overview" },
      { src: `${P}/DJI/DJI_20240911143449_0225_D_PARZIAIR.webp`, alt: "Pitch and surroundings" },
      { src: `${P}/DJI/DJI_20240911143542_0227_D_PARZIAIR.webp`, alt: "Community area aerial" },
      { src: `${P}/DJI/DJI_20240911144342_0240_D_PARZIAIR.webp`, alt: "Floodlighting and perimeter" },
      { src: `${P}/football/football-gala.webp`, alt: "Handover ceremony football gala" },
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
    description:
      "A community sports facility serving over 10,000 residents — multi-purpose sports hall, outdoor courts, AstroTurf pitch, and supporting civil infrastructure across the Western Region.",
    scope: [
      "Foundation and substructure works",
      "Steel frame superstructure",
      "Reinforced concrete stands",
      "AstroTurf pitch installation",
      "Drainage and stormwater management",
      "Electrical and lighting systems",
    ],
    highlights: [
      { label: "Site Area", value: "12,400 m²" },
      { label: "Capacity", value: "2,500 seats" },
      { label: "Duration", value: "18 months" },
    ],
    cover: `${P}/DJI/DJI_20240911150341_0255_D_PARZIAIR.webp`,
    images: [
      { src: `${P}/DJI/DJI_20240911150341_0255_D_PARZIAIR.webp`, alt: "Sports complex aerial" },
      { src: `${P}/DJI/DJI_20240911151915_0270_D_PARZIAIR.webp`, alt: "Facility overview from above" },
    ],
    featured: false,
    span: "normal",
  },

  {
    id: 13,
    slug: "solaris-twelve-floor-apartment",
    title: "Solaris — 12-Floor Apartment Building",
    subtitle: "High-Rise Residential Construction",
    category: "Construction",
    status: "completed",
    location: "Ghana",
    region: "Ghana",
    year: "2023",
    yearCompleted: "2025",
    client: "Confidential",
    duration: "22 months",
    description:
      "Construction of a twelve-storey residential apartment building — Solaris — delivering premium urban living units with full structural frame, MEP systems, facade works, and high-specification internal finishes across all floors.",
    scope: [
      "Deep foundation and substructure works",
      "Reinforced concrete frame — 12 floors",
      "External facade and glazing",
      "MEP installations — electrical, plumbing, HVAC, lift",
      "Internal finishes and joinery",
      "Basement car parking and site works",
    ],
    highlights: [
      { label: "Floors", value: "12 storeys" },
      { label: "Type", value: "Residential Apartments" },
      { label: "Duration", value: "22 months" },
    ],
    cover: `${P}/apartment-solaris/Apartment-Solaris.webp`,
    images: [
      { src: `${P}/apartment-solaris/Apartment-Solaris.webp`, alt: "Solaris building exterior" },
      { src: `${P}/apartment-solaris/Apartment-Solaris1.webp`, alt: "High-rise construction progress" },
    ],
    featured: true,
    span: "tall",
  },

  {
    id: 14,
    slug: "springfield-estate-road-concrete",
    title: "Springfield Estate — Concrete Roads",
    subtitle: "Estate Road Infrastructure Works",
    category: "Civil Engineering",
    status: "completed",
    location: "Springfield Estate, Ghana",
    region: "Ghana",
    year: "2022",
    yearCompleted: "2024",
    client: "Confidential",
    duration: "18 months",
    description:
      "Design and construction of a concrete road network within Springfield Estate, providing durable all-weather carriageways, kerb drainage, and road markings to serve the residential estate and improve internal circulation.",
    scope: [
      "Sub-grade preparation and compaction",
      "Stone base and sub-base construction",
      "Reinforced concrete carriageway (150–200 mm)",
      "Kerbing and channel drainage",
      "Road markings and signage",
      "Street lighting provision",
    ],
    highlights: [
      { label: "Road Type", value: "Concrete carriageway" },
      { label: "Standard", value: "Estate road spec" },
      { label: "Duration", value: "18 months" },
    ],
    cover: `${P}/concrete/Concrete-Works1.webp`,
    images: [
      { src: `${P}/concrete/Concrete-Works1.webp`, alt: "Concrete road construction" },
      { src: `${P}/concrete/concrete-works.webp`, alt: "Road base and kerbing works" },
    ],
    featured: false,
    span: "normal",
  },

  {
    id: 15,
    slug: "ridge-town-houses",
    title: "Ridge Town Houses",
    subtitle: "High-End Residential Construction",
    category: "Housing Estates",
    status: "completed",
    location: "Ridge, Accra",
    region: "Greater Accra, Ghana",
    year: "2023",
    yearCompleted: "2024",
    client: "Grow Engineering and Construction Limited Ghana",
    duration: "14 months",
    description:
      "Construction of premium town houses in the prestigious Ridge neighbourhood of Accra — high-specification finishes, bespoke joinery, contemporary architectural detailing, and landscaped courtyards.",
    scope: [
      "Foundation and substructure",
      "Reinforced concrete superstructure",
      "External masonry and rendered finishes",
      "Premium internal tiling and joinery",
      "Full MEP installations",
      "Landscaped courtyards and boundary walls",
    ],
    highlights: [
      { label: "Location", value: "Ridge, Accra" },
      { label: "Type", value: "Luxury Town Houses" },
      { label: "Duration", value: "14 months" },
    ],
    cover: `${P}/ridge-town-houses/ridge-town-houses5.webp`,
    images: [
      { src: `${P}/ridge-town-houses/ridge-town-houses5.webp`, alt: "Ridge town houses exterior" },
      { src: `${P}/ridge-town-houses/ridge-town-houses1.webp`, alt: "Town house facade" },
      { src: `${P}/ridge-town-houses/ridge-town-houses2.webp`, alt: "Structural works in progress" },
      { src: `${P}/ridge-town-houses/ridge-town-houses3.webp`, alt: "Finishing works" },
      { src: `${P}/ridge-town-houses/ridge-town-houses4.webp`, alt: "Interior finishes" },
      { src: `${P}/ridge-town-houses/ridge-town-houses6.webp`, alt: "Completed units" },
      { src: `${P}/ridge-town-houses/ridge-town-houses7.webp`, alt: "Estate overview" },
    ],
    featured: true,
    span: "normal",
  },

  {
    id: 16,
    slug: "mampong-steel-modular-bridge",
    title: "Mampong Steel Modular Bridge",
    subtitle: "Civil Infrastructure — Bridge Construction",
    category: "Civil Engineering",
    status: "completed",
    location: "Mampong, Ghana",
    region: "Ashanti Region, Ghana",
    year: "2023",
    yearCompleted: "2024",
    client: "Confidential",
    duration: "12 months",
    description:
      "Design, fabrication, and installation of a steel modular bridge at Mampong — improving connectivity across a watercourse for communities and vehicles, including approach road works, abutment construction, and bridge deck installation.",
    scope: [
      "Site investigation and topographic survey",
      "Abutment and wing wall construction",
      "Steel modular superstructure fabrication",
      "Bridge deck installation and erection",
      "Approach embankments and road works",
      "Guard rails, signage, and drainage",
    ],
    highlights: [
      { label: "Type", value: "Steel Modular Bridge" },
      { label: "Location", value: "Mampong" },
      { label: "Duration", value: "12 months" },
    ],
    cover: `${P}/mampong-steel/mampong-steel-main.webp`,
    images: [
      { src: `${P}/mampong-steel/mampong-steel-main.webp`, alt: "Mampong bridge overview" },
      { src: `${P}/mampong-steel/mampong-bridge-main.webp`, alt: "Bridge completed" },
      { src: `${P}/mampong-steel/Mampong-Steel1.webp`, alt: "Steel structure erection" },
      { src: `${P}/mampong-steel/Mampong-Steel2.webp`, alt: "Bridge deck installation" },
      { src: `${P}/mampong-steel/Mampong-Steel3.webp`, alt: "Abutment works" },
      { src: `${P}/mampong-steel/Mampong-Steel4.webp`, alt: "Approach road works" },
      { src: `${P}/mampong-steel/Mampong-Steel6.webp`, alt: "Completed bridge structure" },
      { src: `${P}/mampong-steel/Mampong-Steel7.webp`, alt: "Bridge from access road" },
      { src: `${P}/mampong-steel/mampong-bridge1.webp`, alt: "Bridge detail view" },
      { src: `${P}/mampong-steel/mampong-bridge2.webp`, alt: "Deck and railings" },
    ],
    featured: false,
    span: "normal",
  },

  {
    id: 17,
    slug: "bureau-national-communications-office",
    title: "Bureau of National Communications — Office Complex",
    subtitle: "Government Office Building Construction",
    category: "Construction",
    status: "completed",
    location: "Tamale, Northern Region",
    region: "Northern Region, Ghana",
    year: "2018",
    yearCompleted: "2019",
    client: "Bureau of National Communications / Ministry of Communications, Ghana",
    duration: "14 months",
    description:
      "Construction of a one-storey office complex for the Bureau of National Communications in Tamale, providing modern administrative offices, meeting rooms, and support facilities under a Ministry of Communications contract.",
    scope: [
      "Site clearance and substructure",
      "Structural frame and block-work",
      "Roofing and waterproofing",
      "Internal partitions and finishes",
      "MEP installations",
      "External works — car parking, perimeter walling, landscaping",
    ],
    highlights: [
      { label: "Client", value: "Bureau of National Communications" },
      { label: "Location", value: "Tamale" },
      { label: "Contract Award", value: "September 2018" },
      { label: "Duration", value: "14 months" },
    ],
    cover: `${P}/bureau/bureau-of-national-communications-main.webp`,
    images: [
      { src: `${P}/bureau/bureau-of-national-communications-main.webp`, alt: "BNC office complex" },
      { src: `${P}/bureau/bureau-of-national-communications-thumbnail.webp`, alt: "Office building exterior" },
      { src: `${P}/bureau/bureau-of-national-communications10.webp`, alt: "Construction progress" },
      { src: `${P}/bureau/bureau-of-national-communications11.webp`, alt: "Superstructure works" },
      { src: `${P}/bureau/bureau-of-national-communications12.webp`, alt: "Internal finishes" },
      { src: `${P}/bureau/bureau-of-national-communications8.webp`, alt: "Office interior" },
      { src: `${P}/bureau/bureau-of-national-communications9.webp`, alt: "Completed building" },
      { src: `${P}/bnc/bnc-main_1.webp`, alt: "BNC main entrance" },
    ],
    featured: false,
    span: "normal",
  },

  {
    id: 18,
    slug: "gnpc-six-unit-classroom-ejisu",
    title: "GNPC — 6-Unit Classroom Block",
    subtitle: "Educational Facility Construction",
    category: "Construction",
    status: "completed",
    location: "Ejisu, Ashanti Region",
    region: "Ashanti Region, Ghana",
    year: "2019",
    yearCompleted: "2020",
    client: "GNPC Foundation (Ghana National Petroleum Corporation Foundation)",
    duration: "12 months",
    description:
      "Construction of a six-unit classroom block for a community school in Ejisu under the GNPC Foundation's social responsibility programme — improving learning conditions for hundreds of pupils with new sanitation facilities and perimeter fencing.",
    scope: [
      "Site clearance and foundations",
      "Six-unit block-work superstructure",
      "Roofing, ceilings, and louvres",
      "Internal plastering and painting",
      "Sanitation and ablution block",
      "Perimeter fencing and access path",
    ],
    highlights: [
      { label: "Units", value: "6 classrooms" },
      { label: "Client", value: "GNPC Foundation" },
      { label: "Contract Award", value: "September 2019" },
      { label: "Location", value: "Ejisu, Ashanti" },
    ],
    cover: `${P}/ejisu/ejisu-project-main.webp`,
    images: [
      { src: `${P}/ejisu/ejisu-project-main.webp`, alt: "Ejisu classroom block" },
      { src: `${P}/ejisu/ejisu-project.webp`, alt: "Construction in progress" },
    ],
    featured: false,
    span: "normal",
  },

  {
    id: 19,
    slug: "quarry-aggregate-mining-site",
    title: "Quarry & Aggregate Mining Site",
    subtitle: "Materials Production & Procurement",
    category: "Procurement",
    status: "completed",
    location: "Western Region",
    region: "Western Region, Ghana",
    year: "2020",
    yearCompleted: "2022",
    client: "Confidential",
    duration: "24 months",
    description:
      "Establishment and operation of a quarry and aggregate mining site in the Western Region, producing crushed stone, chippings, and sand aggregates to supply Macwest's construction projects and third-party clients across Ghana.",
    scope: [
      "Site acquisition, clearing, and access roads",
      "Rock drilling and blasting operations",
      "Crushing and screening plant setup",
      "Aggregate stockpiling and grading",
      "Quality control and materials testing",
      "Environmental management and rehabilitation",
    ],
    highlights: [
      { label: "Location", value: "Western Region" },
      { label: "Output", value: "Crushed aggregate" },
      { label: "Duration", value: "24 months" },
    ],
    cover: `${P}/quarry-site/Quarry-site-main.webp`,
    images: [
      { src: `${P}/quarry-site/Quarry-site-main.webp`, alt: "Quarry site overview" },
      { src: `${P}/quarry-site/Quarry-site-thumbnail.webp`, alt: "Quarry aerial" },
      { src: `${P}/quarry-site/quarry-site1.webp`, alt: "Rock quarrying operations" },
      { src: `${P}/quarry-site/quarry-site2.webp`, alt: "Crushing plant" },
      { src: `${P}/quarry-site/quarry-site3.webp`, alt: "Aggregate stockpile" },
      { src: `${P}/quarry-site/quarry-site4.webp`, alt: "Site operations" },
    ],
    featured: false,
    span: "normal",
  },

  {
    id: 20,
    slug: "qip-solar-panel-installation",
    title: "QIP — Solar Panel Installation",
    subtitle: "Community Energy Infrastructure",
    category: "MEP",
    status: "completed",
    location: "Western Region",
    region: "Western Region, Ghana",
    year: "2024",
    yearCompleted: "2024",
    client: "QIP / Eni Ghana Exploration and Production",
    duration: "4 months",
    description:
      "Installation of a 5KVA solar energy system for a community facility in Eni Ghana's operational zone, providing clean, reliable electricity to the beneficiary community under the Quality Investment Programme.",
    scope: [
      "Site assessment and solar design",
      "Solar panel mounting structure fabrication",
      "PV panel installation and cable routing",
      "Battery storage system installation",
      "Inverter and control panel setup",
      "Testing, commissioning, and handover",
    ],
    highlights: [
      { label: "Capacity", value: "5KVA Solar System" },
      { label: "Client", value: "QIP / Eni Ghana" },
      { label: "Type", value: "Off-grid Solar" },
      { label: "Duration", value: "4 months" },
    ],
    cover: `${P}/solar-installation/solar-installation-main.webp`,
    images: [
      { src: `${P}/solar-installation/solar-installation-main.webp`, alt: "Solar installation overview" },
      { src: `${P}/solar-installation/solar-installation1.webp`, alt: "Panel mounting works" },
      { src: `${P}/solar-installation/solar-installation2.webp`, alt: "PV panel installation" },
      { src: `${P}/solar-installation/solar-installation3.webp`, alt: "Wiring and cabling" },
      { src: `${P}/solar-installation/solar-installation4.webp`, alt: "Completed solar system" },
      { src: `${P}/DJI/DJI_20240911150520_0257_D_PARZIAIR.webp`, alt: "Solar site aerial view" },
      { src: `${P}/DJI/DJI_20240911170134_0308_D_PARZIAIR.webp`, alt: "Aerial — solar panels on structure" },
      { src: `${P}/DJI/DJI_20240911170205_0310_D_PARZIAIR.webp`, alt: "Solar field from above" },
      { src: `${P}/DJI/DJI_20240911170352_0314_D_PARZIAIR.webp`, alt: "Installation aerial" },
      { src: `${P}/DJI/DJI_20240911170750_0325_D_PARZIAIR.webp`, alt: "Completed solar system aerial" },
    ],
    featured: false,
    span: "normal",
  },

  {
    id: 21,
    slug: "qip-modern-latrines-biodigesters",
    title: "QIP — Modern Latrines with Biodigesters",
    subtitle: "Community Sanitation Infrastructure",
    category: "Civil Engineering",
    status: "completed",
    location: "Western Region",
    region: "Western Region, Ghana",
    year: "2023",
    yearCompleted: "2024",
    client: "QIP / Eni Ghana Exploration and Production",
    duration: "6 months",
    description:
      "Construction of modern sanitation facilities incorporating biodigester systems for coastal and fishing communities in Eni Ghana's operational zone — providing safe, hygienic sanitation and bio-treated waste management.",
    scope: [
      "Site preparation and foundation works",
      "Superstructure and roofing",
      "Biodigester tank installation",
      "Plumbing and sanitary fittings",
      "Ventilation and odour control",
      "External works and handover",
    ],
    highlights: [
      { label: "Type", value: "Biodigester Latrines" },
      { label: "Client", value: "QIP / Eni Ghana" },
      { label: "Sector", value: "Community Sanitation" },
      { label: "Duration", value: "6 months" },
    ],
    cover: `${P}/DJI/DJI_20240911153013_0281_D_PARZIAIR.webp`,
    images: [
      { src: `${P}/DJI/DJI_20240911153013_0281_D_PARZIAIR.webp`, alt: "Site aerial view" },
      { src: `${P}/DJI/DJI_20240911153050_0283_D_PARZIAIR.webp`, alt: "Facility aerial" },
      { src: `${P}/DJI/DJI_20240911153202_0286_D_PARZIAIR.webp`, alt: "Construction overview from above" },
      { src: `${P}/DJI/DJI_20240911153227_0288_D_PARZIAIR.webp`, alt: "Completed facility aerial" },
      { src: `${P}/DJI/DJI_20240911153146_0285_D_PARZIAIR.webp`, alt: "Community site" },
      { src: `${P}/DJI/DJI_20240911153218_0287_D_PARZIAIR.webp`, alt: "Sanitation block aerial" },
    ],
    featured: false,
    span: "normal",
  },

  {
    id: 22,
    slug: "qip-sanzule-krisan-school-canteen",
    title: "QIP — Sanzule-Krisan School Canteen Refurbishment",
    subtitle: "School Facility Refurbishment",
    category: "Construction",
    status: "completed",
    location: "Sanzule-Krisan, Western Region",
    region: "Western Region, Ghana",
    year: "2023",
    yearCompleted: "2024",
    client: "QIP / Eni Ghana Exploration and Production",
    duration: "5 months",
    description:
      "Refurbishment of the canteen facility at Sanzule-Krisan Primary and Junior High School under Eni Ghana's Quality Investment Programme — restoring the facility to full use for pupils and staff.",
    scope: [
      "Structural repairs and re-roofing",
      "Internal replastering and painting",
      "New floor screed and tiling",
      "Sanitation and water point upgrade",
      "Electrical rewiring and lighting",
      "External works and fencing",
    ],
    highlights: [
      { label: "Facility", value: "School Canteen" },
      { label: "Location", value: "Sanzule-Krisan" },
      { label: "Client", value: "QIP / Eni Ghana" },
      { label: "Duration", value: "5 months" },
    ],
    cover: `${SAZ}/00001517-PHOTO-2026-05-01-09-49-26.webp`,
    images: [
      { src: `${SAZ}/00001517-PHOTO-2026-05-01-09-49-26.webp`, alt: "Sanzule showroom — completed" },
      { src: `${SAZ}/00001518-PHOTO-2026-05-01-09-49-26.webp`, alt: "Showroom interior" },
      { src: `${SAZ}/00001519-PHOTO-2026-05-01-09-49-27.webp`, alt: "Canteen and showroom works" },
      { src: `${SAZ}/00001520-PHOTO-2026-05-01-09-49-27.webp`, alt: "Facility progress" },
      { src: `${SAZ}/00001521-PHOTO-2026-05-01-09-49-28.webp`, alt: "Completed facility handover" },
    ],
    featured: false,
    span: "normal",
  },

  {
    id: 23,
    slug: "qip-fishing-sheds-coastal-communities",
    title: "QIP — Fishing Sheds (4 Communities)",
    subtitle: "Coastal Community Infrastructure",
    category: "Construction",
    status: "completed",
    location: "Baku, Ngalekpole, Ngalekyi & Old Bakanta",
    region: "Western Region, Ghana",
    year: "2023",
    yearCompleted: "2024",
    client: "QIP / Eni Ghana Exploration and Production",
    duration: "8 months",
    description:
      "Construction of fishing sheds across four coastal fishing communities — Baku, Ngalekpole, Ngalekyi, and Old Bakanta — providing covered processing, storage, and equipment bays to improve post-harvest conditions for local fishermen.",
    scope: [
      "Foundation and concrete slab",
      "Steel frame and corrugated roofing",
      "Perimeter block-work and openings",
      "Storage and equipment bays",
      "Water supply point",
      "Site works and access hardstanding",
    ],
    highlights: [
      { label: "Communities", value: "4 locations" },
      { label: "Client", value: "QIP / Eni Ghana" },
      { label: "Sector", value: "Fisheries / Community" },
      { label: "Duration", value: "8 months" },
    ],
    cover: `${P}/new-bakanta/New-Bakanta.webp`,
    images: [
      { src: `${P}/new-bakanta/New-Bakanta.webp`, alt: "New Bakanta fishing community" },
    ],
    featured: false,
    span: "normal",
  },

  {
    id: 24,
    slug: "eni-school-rehabilitation-programme",
    title: "Eni Ghana — School Rehabilitation Programme",
    subtitle: "Community School Infrastructure — 5 Schools",
    category: "Construction",
    status: "completed",
    location: "Western Region (5 Communities)",
    region: "Western Region, Ghana",
    year: "2023",
    yearCompleted: "2024",
    client: "Eni Ghana Exploration and Production",
    duration: "12 months",
    description:
      "Rehabilitation and construction works across five community schools — Anokyi D/A JHS, Anokyi Methodist Primary, Bakanta Catholic Primary, Eikwe Catholic JHS, and Sanzule/Krisan JHS & Primary — improving learning environments for thousands of pupils.",
    scope: [
      "Structural repairs and re-roofing",
      "Internal and external replastering and painting",
      "New flooring and ceiling works",
      "Window, door, and louvre replacement",
      "Sanitation and WASH facilities upgrade",
      "Perimeter fencing and site works",
    ],
    highlights: [
      { label: "Schools Rehabilitated", value: "5 schools" },
      { label: "Client", value: "Eni Ghana" },
      { label: "Region", value: "Western Region" },
      { label: "Duration", value: "12 months" },
    ],
    cover: `${P}/eni/eni-project-main.webp`,
    images: [
      { src: `${P}/eni/eni-project-main.webp`, alt: "Eni school rehabilitation" },
      { src: `${P}/eni/Eni-project01.webp`, alt: "School works — overview" },
      { src: `${P}/eni/Eni-project02.webp`, alt: "Rehabilitation in progress" },
      { src: `${P}/eni/Eni-project03.webp`, alt: "Structural repair works" },
      { src: `${P}/anochie/Anochie-JHS.webp`, alt: "Anokyi D/A Junior High School" },
      { src: `${P}/anochie/Anochie-primary.webp`, alt: "Anokyi Methodist Primary School" },
      { src: `${P}/anochie/anochie.webp`, alt: "Anokyi community school" },
      { src: `${P}/eikwe/Eikwe-JHS.webp`, alt: "Eikwe Catholic JHS" },
      { src: `${P}/eikwe/Eikwe-primary1.webp`, alt: "Eikwe Primary School" },
      { src: `${P}/DJI/DJI_20240911145204_0243_D_PARZIAIR.webp`, alt: "Eikwe aerial view" },
      { src: `${P}/DJI/DJI_20240911145509_0249_D_PARZIAIR.webp`, alt: "Eikwe site from above" },
      { src: `${P}/DJI/DJI_20240911151157_0258_D_PARZIAIR.webp`, alt: "Anokyi Methodist — aerial" },
      { src: `${P}/DJI/DJI_20240911151734_0265_D_PARZIAIR.webp`, alt: "Anokyi D/A JHS — aerial" },
      { src: `${P}/DJI/DJI_20240911163912_0296_D_PARZIAIR.webp`, alt: "Bakanta Catholic — aerial" },
      { src: `${P}/DJI/DJI_20240911163938_0298_D_PARZIAIR.webp`, alt: "Bakanta school site" },
    ],
    featured: true,
    span: "wide",
  },

  {
    id: 26,
    slug: "two-unit-dormitory-block",
    title: "2-Unit Single-Storey Dormitory Block",
    subtitle: "Residential Accommodation Construction",
    category: "Construction",
    status: "completed",
    location: "Ghana",
    region: "Ghana",
    year: "2021",
    yearCompleted: "2022",
    client: "Confidential",
    duration: "10 months",
    description:
      "Construction of a two-unit single-storey dormitory block providing comfortable residential accommodation. Works covered full structural frame, roofing, internal finishes, sanitation facilities, and external works.",
    scope: [
      "Foundation and substructure works",
      "Block-work superstructure — 2 units",
      "Roofing and fascia",
      "Internal plastering and painting",
      "Sanitation and bathroom fittings",
      "Electrical installation",
      "External works and drainage",
    ],
    highlights: [
      { label: "Units", value: "2 dormitory blocks" },
      { label: "Type", value: "Single-Storey" },
      { label: "Duration", value: "10 months" },
    ],
    cover: `${P}/dormitory/Construction-of-2-units-single-storey-dormitory-block-main.webp`,
    images: [
      { src: `${P}/dormitory/Construction-of-2-units-single-storey-dormitory-block-main.webp`, alt: "Dormitory block construction" },
      { src: `${P}/dormitory/2-units-single-storey-dormitory-block-main.webp`, alt: "Completed dormitory block" },
      { src: `${P}/dormitory/Construction-of-2-units-single-storey-dormitory-block1.webp`, alt: "Superstructure works" },
      { src: `${P}/dormitory/Construction-of-2-units-single-storey-dormitory-block2.webp`, alt: "Roofing installation" },
      { src: `${P}/dormitory/Construction-of-2-units-single-storey-dormitory-block3.webp`, alt: "Internal finishes" },
      { src: `${P}/dormitory/Construction-of-2-units-single-storey-dormitory-block4.webp`, alt: "External works" },
    ],
    featured: false,
    span: "normal",
  },

  {
    id: 27,
    slug: "hiawanwu-da-primary-classroom-block",
    title: "Hiawanwu D.A. Primary — 6 Classroom Block",
    subtitle: "Educational Facility Construction",
    category: "Construction",
    status: "completed",
    location: "Hiawanwu, Ghana",
    region: "Ghana",
    year: "2022",
    yearCompleted: "2023",
    client: "GETFund / District Assembly",
    duration: "12 months",
    description:
      "Construction of a six-unit classroom block at Hiawanwu D.A. Primary School, providing modern learning spaces for pupils in the community. Works included structural frame, roofing, internal finishes, and sanitation facilities.",
    scope: [
      "Site preparation and earthworks",
      "Foundation and substructure",
      "Six-unit block-work superstructure",
      "Roofing, ceilings, and louvres",
      "Internal plastering and painting",
      "Sanitation block and perimeter fencing",
    ],
    highlights: [
      { label: "Units", value: "6 classrooms" },
      { label: "School", value: "Hiawanwu D.A. Primary" },
      { label: "Duration", value: "12 months" },
    ],
    cover: `${SCH}/00001438-PHOTO-2026-04-28-19-07-24.webp`,
    images: [
      { src: `${SCH}/00001438-PHOTO-2026-04-28-19-07-24.webp`, alt: "School project — completed" },
      { src: `${SCH}/00001456-PHOTO-2026-04-29-18-38-53.webp`, alt: "Classroom block overview" },
      { src: `${SCH}/00001457-PHOTO-2026-04-29-18-38-54.webp`, alt: "Structural works" },
      { src: `${SCH}/00001458-PHOTO-2026-04-29-18-38-54.webp`, alt: "Internal finishes" },
      { src: `${SCH}/00001459-PHOTO-2026-04-29-18-38-54.webp`, alt: "Block-work detail" },
      { src: `${SCH}/00001559-PHOTO-2026-05-01-21-34-46.webp`, alt: "Completed school facility" },
      { src: `${SCH}/00001560-PHOTO-2026-05-01-21-34-46.webp`, alt: "Final handover" },
    ],
    featured: false,
    span: "normal",
  },

  {
    id: 28,
    slug: "ho-mawuli-construction-project",
    title: "Ho Mawuli Construction Project",
    subtitle: "Building & Civil Works — Volta Region",
    category: "Construction",
    status: "completed",
    location: "Ho, Volta Region",
    region: "Volta Region, Ghana",
    year: "2022",
    yearCompleted: "2023",
    client: "Confidential",
    duration: "14 months",
    description:
      "Construction works at Ho Mawuli in the Volta Region of Ghana, delivering structural building works, internal finishes, and site development in support of a community or institutional facility.",
    scope: [
      "Site preparation and substructure",
      "Structural superstructure and roofing",
      "Internal plastering and finishes",
      "MEP installations",
      "External works and access roads",
    ],
    highlights: [
      { label: "Location", value: "Ho, Volta Region" },
      { label: "Duration", value: "14 months" },
      { label: "Sector", value: "Community" },
    ],
    cover: `${P}/ho/Ho-mawuli-project-main.webp`,
    images: [
      { src: `${P}/ho/Ho-mawuli-project-main.webp`, alt: "Ho Mawuli project overview" },
      { src: `${P}/ho/Ho-mawuli-project-thumbnail.webp`, alt: "Building site" },
      { src: `${P}/ho/Ho-Mawuli-Project1.webp`, alt: "Structural works" },
      { src: `${P}/ho/Ho-Mawuli-Project2.webp`, alt: "Construction progress" },
      { src: `${P}/ho/Ho-Mawuli-Project3.webp`, alt: "Internal finishes" },
      { src: `${P}/ho/Ho-Mawuli-Project4.webp`, alt: "Completed facility" },
    ],
    featured: false,
    span: "normal",
  },

  {
    id: 29,
    slug: "lmi-beahu-project",
    title: "LMI Beahu Project",
    subtitle: "Civil & Construction Works",
    category: "Civil Engineering",
    status: "completed",
    location: "Beahu, Western Region",
    region: "Western Region, Ghana",
    year: "2021",
    yearCompleted: "2022",
    client: "Confidential",
    duration: "12 months",
    description:
      "Civil and construction works at Beahu in the Western Region under the LMI programme, delivering infrastructure improvements and building works to support the local community.",
    scope: [
      "Site preparation and earthworks",
      "Structural and civil works",
      "Drainage and utility installation",
      "Building finishes and fittings",
      "External hardstanding and access",
    ],
    highlights: [
      { label: "Location", value: "Beahu, Western Region" },
      { label: "Duration", value: "12 months" },
      { label: "Sector", value: "Community Infrastructure" },
    ],
    cover: `${P}/lmi-beahu/main-limI-beahu0_1.webp`,
    images: [
      { src: `${P}/lmi-beahu/main-limI-beahu0_1.webp`, alt: "LMI Beahu project overview" },
      { src: `${P}/lmi-beahu/main-limI-beahu00_1.webp`, alt: "Site overview" },
      { src: `${P}/lmi-beahu/LMI-Beahu1.webp`, alt: "Civil works in progress" },
      { src: `${P}/lmi-beahu/LMI-Beahu2.webp`, alt: "Structural works" },
      { src: `${P}/lmi-beahu/LMI-Beahu3.webp`, alt: "Construction detail" },
      { src: `${P}/lmi-beahu/LMI-Beahu4.webp`, alt: "Building progress" },
      { src: `${P}/lmi-beahu/LMI-Beahu11.webp`, alt: "Works nearing completion" },
      { src: `${P}/lmi-beahu/LMI-Beahu33.webp`, alt: "External works" },
      { src: `${P}/lmi-beahu/LMI-Beahu44.webp`, alt: "Completed facility" },
    ],
    featured: false,
    span: "normal",
  },

  {
    id: 30,
    slug: "solarium-swami-india-ghana",
    title: "Solarium — Swami India Ghana Limited",
    subtitle: "High-Specification Residential Construction",
    category: "Construction",
    status: "completed",
    location: "Ghana",
    region: "Ghana",
    year: "2022",
    yearCompleted: "2024",
    client: "Swami India Ghana Limited",
    duration: "20 months",
    description:
      "Construction of a high-specification residential building — Solarium — for Swami India Ghana Limited, featuring contemporary architectural design, premium material specifications, bespoke joinery, and full MEP services throughout.",
    scope: [
      "Foundation and reinforced concrete structure",
      "External facade and architectural finishes",
      "Premium internal tiling, joinery, and finishes",
      "Full MEP installations — electrical, plumbing, AC",
      "Staircase, balustrades, and glazing",
      "Landscaping and external works",
    ],
    highlights: [
      { label: "Client", value: "Swami India Ghana Ltd" },
      { label: "Type", value: "Premium Residential" },
      { label: "Duration", value: "20 months" },
    ],
    cover: `${P}/solarium/solarium-main.webp`,
    images: [
      { src: `${P}/solarium/solarium-main.webp`, alt: "Solarium building exterior" },
      { src: `${P}/solarium/Solarium-by-Swami-India-Ghana-Limited1.webp`, alt: "Facade and entrance" },
      { src: `${P}/solarium/Solarium-by-Swami-India-Ghana-Limited2.webp`, alt: "Interior spaces" },
      { src: `${P}/solarium/Solarium-by-Swami-India-Ghana-Limited3.webp`, alt: "Premium finishes" },
      { src: `${P}/solarium/Solarium-by-Swami-India-Ghana-Limited4.webp`, alt: "Living areas" },
      { src: `${P}/solarium/Solarium-by-Swami-India-Ghana-Limited5.webp`, alt: "Architectural details" },
      { src: `${P}/solarium/Solarium-by-Swami-India-Ghana-Limited6.webp`, alt: "Kitchen and fittings" },
      { src: `${P}/solarium/Solarium-by-Swami-India-Ghana-Limited7.webp`, alt: "Bedrooms and joinery" },
      { src: `${P}/solarium/Solarium-by-Swami-India-Ghana-Limited8.webp`, alt: "Bathrooms and tiling" },
      { src: `${P}/solarium/Solarium-by-Swami-India-Ghana-Limited9.webp`, alt: "Staircase and glazing" },
      { src: `${P}/solarium/Solarium-by-Swami-India-Ghana-Limited10.webp`, alt: "External terrace" },
      { src: `${P}/solarium/Solarium-by-Swami-India-Ghana-Limited11.webp`, alt: "Landscaping and garden" },
    ],
    featured: true,
    span: "wide",
  },

  {
    id: 31,
    slug: "eastern-region-agyanoa-project",
    title: "Eastern Region — Agyanoa Construction",
    subtitle: "Civil & Building Works",
    category: "Construction",
    status: "completed",
    location: "Agyanoa, Eastern Region",
    region: "Eastern Region, Ghana",
    year: "2025",
    yearCompleted: "2026",
    client: "Confidential",
    duration: "12 months",
    description:
      "Construction and civil works at Agyanoa in the Eastern Region of Ghana, delivering infrastructure and building works for the local community. The project represents Macwest's growing footprint across multiple regions of the country.",
    scope: [
      "Site preparation and earthworks",
      "Structural frame and block-work",
      "Roofing and weatherproofing",
      "Internal and external finishes",
      "MEP services installation",
      "External works and site clearance",
    ],
    highlights: [
      { label: "Location", value: "Agyanoa, Eastern Region" },
      { label: "Status", value: "Completed" },
      { label: "Year", value: "2026" },
    ],
    cover: `${AGY}/00001442-PHOTO-2026-04-29-17-54-49.webp`,
    images: [
      { src: `${AGY}/00001442-PHOTO-2026-04-29-17-54-49.webp`, alt: "Agyanoa project overview" },
      { src: `${AGY}/00000414-PHOTO-2026-03-19-19-00-29.webp`, alt: "Early works" },
      { src: `${AGY}/00001443-PHOTO-2026-04-29-17-58-19.webp`, alt: "Construction progress" },
      { src: `${AGY}/00001444-PHOTO-2026-04-29-17-58-29.webp`, alt: "Structural works" },
      { src: `${AGY}/00001445-PHOTO-2026-04-29-17-58-29.webp`, alt: "Building works" },
      { src: `${AGY}/00001482-PHOTO-2026-04-30-17-15-28.webp`, alt: "Near completion" },
      { src: `${AGY}/00001483-PHOTO-2026-04-30-17-15-30.webp`, alt: "Final works" },
      { src: `${AGY}/00001587-PHOTO-2026-05-04-18-08-54.webp`, alt: "Completed facility" },
      { src: `${AGY}/00001588-PHOTO-2026-05-04-18-08-54.webp`, alt: "External works done" },
      { src: `${AGY}/00001589-PHOTO-2026-05-04-18-08-55.webp`, alt: "Site handover" },
      { src: `${AGY}/00001590-PHOTO-2026-05-04-18-08-55.webp`, alt: "Project completed" },
    ],
    featured: false,
    span: "normal",
  },

  {
    id: 32,
    slug: "main-site-commercial-complex",
    title: "Main Site — Commercial Complex",
    subtitle: "Lounge, Main Building, Shops & Top Offices",
    category: "Construction",
    status: "completed",
    location: "Ghana",
    region: "Ghana",
    year: "2025",
    yearCompleted: "2026",
    client: "Confidential",
    duration: "14 months",
    description:
      "Construction of a multi-section commercial complex comprising a lounge, main building, new shops, and top-floor offices. Works covered the full structural and fitout package across all sections, delivered to a high specification.",
    scope: [
      "Lounge and reception area construction",
      "Main building structural frame and finishes",
      "New shops — shell and core and fitout",
      "Top floor office suite construction",
      "MEP throughout — electrical, plumbing, HVAC",
      "External works, car parking, and signage",
    ],
    highlights: [
      { label: "Sections", value: "Lounge, Building, Shops, Offices" },
      { label: "Type", value: "Commercial Complex" },
      { label: "Duration", value: "14 months" },
    ],
    cover: `${MAIN}/00001417-PHOTO-2026-04-28-18-04-33.webp`,
    images: [
      { src: `${MAIN}/00001417-PHOTO-2026-04-28-18-04-33.webp`, alt: "Commercial complex exterior" },
      { src: `${MAIN}/00001418-PHOTO-2026-04-28-18-04-34.webp`, alt: "Main building works" },
      { src: `${MAIN}/00001448-PHOTO-2026-04-29-18-35-33.webp`, alt: "Shops construction" },
      { src: `${MAIN}/00001449-PHOTO-2026-04-29-18-35-34.webp`, alt: "Interior progress" },
      { src: `${MAIN}/00001499-PHOTO-2026-04-30-18-31-28.webp`, alt: "Office floors" },
      { src: `${MAIN}/00001500-PHOTO-2026-04-30-18-31-28.webp`, alt: "Top offices works" },
      { src: `${MAIN}/00001545-PHOTO-2026-05-01-19-10-21.webp`, alt: "Lounge fitout" },
      { src: `${MAIN}/00001546-PHOTO-2026-05-01-19-10-22.webp`, alt: "Shop fitout detail" },
      { src: `${MAIN}/00001547-PHOTO-2026-05-01-19-10-22.webp`, alt: "Finishes and fittings" },
      { src: `${MAIN}/00001592-PHOTO-2026-05-04-18-41-30.webp`, alt: "Near completion" },
      { src: `${MAIN}/00001593-PHOTO-2026-05-04-18-41-30.webp`, alt: "Final finishes" },
      { src: `${MAIN}/00001594-PHOTO-2026-05-04-18-41-31.webp`, alt: "External elevation" },
      { src: `${MAIN}/00001605-PHOTO-2026-05-04-19-09-32.webp`, alt: "Complex overview" },
      { src: `${MAIN}/00001606-PHOTO-2026-05-04-19-09-33.webp`, alt: "Completed complex" },
      { src: `${MAIN}/00001615-PHOTO-2026-05-05-19-14-09.webp`, alt: "Lounge area" },
      { src: `${MAIN}/00001616-PHOTO-2026-05-05-19-14-09.webp`, alt: "Shop fronts" },
      { src: `${MAIN}/00001617-PHOTO-2026-05-05-19-14-10.webp`, alt: "Office entrance" },
      { src: `${MAIN}/00001618-PHOTO-2026-05-05-19-14-10.webp`, alt: "Interior spaces" },
      { src: `${MAIN}/00001619-PHOTO-2026-05-05-19-14-10.webp`, alt: "Corridor and circulation" },
      { src: `${MAIN}/00001624-PHOTO-2026-05-05-19-22-42.webp`, alt: "Final site" },
      { src: `${MAIN}/00001625-PHOTO-2026-05-05-19-22-42.webp`, alt: "Handover ready" },
      { src: `${MAIN}/00001626-PHOTO-2026-05-05-19-22-42.webp`, alt: "Project delivered" },
    ],
    featured: true,
    span: "wide",
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
