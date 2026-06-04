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

const P = "/images/projects/projects"; // shorthand
const PP = "/images/projects/pastProject"; // real project photos
// const AGY = `${PP}/1. Eastern Region (Agyanoa) - Complete Activities`;
// const SHEA = `${PP}/2. Shea Farm Project - Complete Activities`;
// const SCH = `${PP}/4. School Project - Complete Activities`;
// const MAIN = `${PP}/5. Main Site (Lounge/Main Building/New Shops/Top Offices) - Complete Activities`;

export const ALL_PROJECTS: Project[] = [

  // ══════════════════════════════════════════════════════════════════
  // ACTIVE / IN-PROGRESS
  // ══════════════════════════════════════════════════════════════════

  {
    id: 1,
    slug: "eastern-region-project-agyanoa",
    title: "Agyano Eastern Region ",
    subtitle: "Infrastructure Development",
    category: "Construction",
    status: "active",
    location: "Agyanoa Eastern Region",
    region: "Eastern Region, Ghana",
    year: "2026",
    duration: "Ongoing",
    description:
      "Ongoing construction and infrastructure development project located in Agyanoa, Eastern Region.",
    scope: [
      "Site preparation and earthworks",
      "Civil and structural works",
    ],
    highlights: [
      { label: "Location", value: "Agyanoa" },
      { label: "Status", value: "In Progress" },
    ],
    cover: "/images/Ongoing Project/Eastern region project- Agyanoa/1.webp",
    images: [
      { src: "/images/Ongoing Project/Eastern region project- Agyanoa/1.webp", alt: "Eastern Region Project Agyanoa 1" },
      { src: "/images/Ongoing Project/Eastern region project- Agyanoa/2.webp", alt: "Eastern Region Project Agyanoa 2" },
      { src: "/images/Ongoing Project/Eastern region project- Agyanoa/3.webp", alt: "Eastern Region Project Agyanoa 3" },
      { src: "/images/Ongoing Project/Eastern region project- Agyanoa/4.webp", alt: "Eastern Region Project Agyanoa 4" },
      { src: "/images/Ongoing Project/Eastern region project- Agyanoa/5.webp", alt: "Eastern Region Project Agyanoa 5" },
      { src: "/images/Ongoing Project/Eastern region project- Agyanoa/6.webp", alt: "Eastern Region Project Agyanoa 6" },
      { src: "/images/Ongoing Project/Eastern region project- Agyanoa/7.webp", alt: "Eastern Region Project Agyanoa 7" },
      { src: "/images/Ongoing Project/Eastern region project- Agyanoa/8.webp", alt: "Eastern Region Project Agyanoa 8" },
      { src: "/images/Ongoing Project/Eastern region project- Agyanoa/9.webp", alt: "Eastern Region Project Agyanoa 9" }
    ],
    featured: true,
    span: "normal",
  },

  {
    id: 2,
    slug: "anloga-senior-high-school",
    title: "Anloga Senior High School ",
    subtitle: "Educational Facility Construction",
    category: "Construction",
    status: "active",
    location: "Ghana",
    region: "Ghana",
    year: "2026",
    duration: "Ongoing",
    description:
      "Construction and development works for the  Anloga Senior High School to improve educational infrastructure.",
    scope: [
      "Classroom construction",
      "Facility upgrades",
    ],
    highlights: [
      { label: "Sector", value: "Education" },
      { label: "Status", value: "In Progress" },
    ],
    cover: "/images/Ongoing Project/Anloga Senior High School- Project/1.webp",
    images: [
      { src: "/images/Ongoing Project/Anloga Senior High School- Project/1.webp", alt: "Anloga Senior High School Project 1" },
      { src: "/images/Ongoing Project/Anloga Senior High School- Project/2.webp", alt: "Anloga Senior High School Project 2" },
      { src: "/images/Ongoing Project/Anloga Senior High School- Project/3.webp", alt: "Anloga Senior High School Project 3" }
    ],
    featured: true,
    span: "normal",
  },

  {
    id: 3,
    slug: "ada-senior-high-school-12-unit",
    title: "Ada Senior High School",
    subtitle: "12 Unit Classroom Block, Bungalows & Dormitory",
    category: "Construction",
    status: "active",
    location: "Ada",
    region: "Greater Accra, Ghana",
    year: "2026",
    duration: "Ongoing",
    description:
      "CONSTRUCTION OF A 12 UNIT CLASSROOM BLOCK, BUNGALOWS, AND DORMITORY, WITH ANCILLARY FACILITIES.",
    scope: [
      "12-Unit classroom block",
      "Staff bungalows",
      "Student dormitory",
      "Ancillary facilities",
    ],
    highlights: [
      { label: "Units", value: "12 Classrooms" },
      { label: "Facilities", value: "Dormitory & Bungalows" },
    ],
    cover: "/images/Ongoing Project/ADA SENIOR HIGH SCHOOL/1.webp",
    images: [
      { src: "/images/Ongoing Project/ADA SENIOR HIGH SCHOOL/1.webp", alt: "Ada Senior High School 12 Unit Classroom Block 1" },
      { src: "/images/Ongoing Project/ADA SENIOR HIGH SCHOOL/2.webp", alt: "Ada Senior High School 12 Unit Classroom Block 2" },
      { src: "/images/Ongoing Project/ADA SENIOR HIGH SCHOOL/3.webp", alt: "Ada Senior High School 12 Unit Classroom Block 3" },
      { src: "/images/Ongoing Project/ADA SENIOR HIGH SCHOOL/4.webp", alt: "Ada Senior High School 12 Unit Classroom Block 4" }
    ],
    featured: true,
    span: "wide",
  },

  {
    id: 4,
    slug: "ada-shts-24-unit",
    title: "Ada SHTS",
    subtitle: "24 Unit Classroom Block",
    category: "Construction",
    status: "active",
    location: "Ada",
    region: "Greater Accra, Ghana",
    year: "2026",
    duration: "Ongoing",
    description:
      "CONSTRUCTION OF 24 UNIT CLASSROOM BLOCK WITH ANCILLARY FACILITIES.",
    scope: [
      "24-Unit classroom block",
      "Ancillary facilities",
    ],
    highlights: [
      { label: "Units", value: "24 Classrooms" },
      { label: "Sector", value: "Education" },
    ],
    cover: "/images/Ongoing Project/ADA SHTS/1.webp",
    images: [
      { src: "/images/Ongoing Project/ADA SHTS/1.webp", alt: "Ada SHTS 24 Unit Classroom Block 1" },
      { src: "/images/Ongoing Project/ADA SHTS/2.webp", alt: "Ada SHTS 24 Unit Classroom Block 2" }
    ],
    featured: true,
    span: "normal",
  },

  {
    id: 5,
    slug: "essiama-market",
    title: "Essiama Market & Bus Terminal",
    subtitle: "Ultra Modern Market Complex & Transit Hub",
    category: "Construction",
    status: "active",
    location: "Essiama, Ellembele",
    region: "Western Region, Ghana",
    year: "2026",
    client: "Ellembele District Assembly",
    duration: "Ongoing",
    description:
      "Construction of an ultra modern market and bus terminal at Essiama in the Ellembele district. This major redevelopment provides a modern, well-organised trading space and integrated transit hub for the local community.",
    scope: [
      "Ultra modern market stalls",
      "Integrated bus terminal",
      "Sanitation and drainage infrastructure",
      "Paved circulation areas and security lighting",
    ],
    highlights: [
      { label: "Project", value: "Ultra Modern Market" },
      { label: "Location", value: "Essiama" },
      { label: "Status", value: "In Progress" },
    ],
    cover: "/images/Ongoing Project/Construction of an ultra modern market/1.webp",
    images: [
      { src: "/images/Ongoing Project/Construction of an ultra modern market/1.webp", alt: "Essiama Market complex overview 1" },
      { src: "/images/Ongoing Project/Construction of an ultra modern market/2.webp", alt: "Essiama Market complex overview 2" },
      { src: "/images/Ongoing Project/Construction of an ultra modern market/3.webp", alt: "Essiama Market complex overview 3" },
      { src: "/images/Ongoing Project/Construction of an ultra modern market/4.webp", alt: "Essiama Market complex overview 4" },
      { src: "/images/Ongoing Project/Construction of an ultra modern market/5.webp", alt: "Essiama Market complex overview 5" }
    ],
    featured: true,
    span: "wide",
  },

  {
    id: 6,
    slug: "24hr-economy-market",
    title: "24hr Economy Market",
    subtitle: "Modern Market Infrastructure",
    category: "Construction",
    status: "active",
    location: "Ghana",
    region: "Ghana",
    year: "2026",
    duration: "Ongoing",
    description:
      "Construction of a modern market facility designed to support Ghana's 24-hour economy initiative, providing extended trading hours and infrastructure for round-the-clock commercial activity.",
    scope: [
      "Market stalls and trading bays",
      "Sanitation and drainage infrastructure",
      "Lighting and security systems",
      "Paved circulation and parking",
    ],
    highlights: [
      { label: "Project", value: "24hr Economy Market" },
      { label: "Status", value: "In Progress" },
    ],
    cover: "",
    images: [],
    featured: true,
    span: "normal",
  },

  {
    id: 7,
    slug: "goil-fuel-station-facelift",
    title: "Goil Fuel Station Facelift",
    subtitle: "Service Station Refurbishment",
    category: "Construction",
    status: "active",
    location: "Ghana",
    region: "Ghana",
    year: "2026",
    client: "Goil",
    duration: "Ongoing",
    description:
      "Refurbishment and modernisation works for a Goil fuel station, updating the forecourt, canopy, retail building, and supporting facilities to current brand standards.",
    scope: [
      "Forecourt resurfacing and works",
      "Canopy refurbishment and signage",
      "Retail building upgrade",
      "Electrical and lighting works",
    ],
    highlights: [
      { label: "Client", value: "Goil" },
      { label: "Project", value: "Station Facelift" },
      { label: "Status", value: "In Progress" },
    ],
    cover: "",
    images: [],
    featured: true,
    span: "normal",
  },

  {
    id: 8,
    slug: "asasetre-technical-institute-dormitory",
    title: "Asasetre Technical Institute",
    subtitle: "2 Storey Dormitory Block",
    category: "Construction",
    status: "active",
    location: "Asasetre",
    region: "Western Region, Ghana",
    year: "2026",
    duration: "Ongoing",
    description:
      "Construction of a 2-storey dormitory block for the Asasetre Technical Institute, providing modern accommodation facilities for students.",
    scope: [
      "2-storey dormitory block construction",
      "Structural works and finishes",
      "MEP installations — electrical, plumbing",
      "Sanitation and ablution block",
    ],
    highlights: [
      { label: "Project", value: "2 Storey Dormitory" },
      { label: "Location", value: "Asasetre" },
      { label: "Status", value: "In Progress" },
    ],
    cover: "",
    images: [],
    featured: true,
    span: "normal",
  },

  {
    id: 37,
    slug: "asasetre-technical-institute-classroom",
    title: "Asasetre Technical Institute",
    subtitle: "2 Storey 12 Unit Classroom Block",
    category: "Construction",
    status: "active",
    location: "Asasetre",
    region: "Western Region, Ghana",
    year: "2026",
    duration: "Ongoing",
    description:
      "Construction of a 2-storey 12-unit classroom block for the Asasetre Technical Institute to enhance educational infrastructure and learning environments.",
    scope: [
      "12-Unit classroom block",
      "Structural and civil works",
      "Internal finishes and MEP",
      "Ancillary facilities",
    ],
    highlights: [
      { label: "Units", value: "12 Classrooms" },
      { label: "Location", value: "Asasetre" },
      { label: "Status", value: "In Progress" },
    ],
    cover: "",
    images: [],
    featured: true,
    span: "normal",
  },

  // ══════════════════════════════════════════════════════════════════
  // COMPLETED
  // ══════════════════════════════════════════════════════════════════

  {
    id: 33,
    slug: "cable-trench-duct-at-orf-plant",
    title: "Cable Trench Duct at ORF Plant",
    subtitle: "Industrial Infrastructure",
    category: "Civil Engineering",
    status: "completed",
    location: "Ghana",
    region: "Ghana",
    year: "2026",
    duration: "Completed",
    description: "Construction of cable trench duct infrastructure at the ORF Plant.",
    scope: ["Civil Engineering", "Infrastructure Development"],
    highlights: [{ label: "Project", value: "Cable Trench Duct" }],
    cover: "/images/Completed Project/Cable Trench Duct at ORF Plant/1.jpeg",
    images: [
      { src: "/images/Completed Project/Cable Trench Duct at ORF Plant/1.jpeg", alt: "Cable Trench Duct at ORF Plant 1" },
      { src: "/images/Completed Project/Cable Trench Duct at ORF Plant/2.jpeg", alt: "Cable Trench Duct at ORF Plant 2" },
      { src: "/images/Completed Project/Cable Trench Duct at ORF Plant/3.jpeg", alt: "Cable Trench Duct at ORF Plant 3" },
      { src: "/images/Completed Project/Cable Trench Duct at ORF Plant/4.jpeg", alt: "Cable Trench Duct at ORF Plant 4" },
      { src: "/images/Completed Project/Cable Trench Duct at ORF Plant/5.jpeg", alt: "Cable Trench Duct at ORF Plant 5" }
    ],
    featured: true,
    span: "normal",
  },

  {
    id: 34,
    slug: "construction-of-6-units-classroom-block-at-nass",
    title: "Construction of 6 units classroom block at NASS",
    subtitle: "Educational Facility",
    category: "Construction",
    status: "completed",
    location: "Ghana",
    region: "Ghana",
    year: "2026",
    duration: "Completed",
    description: "Construction of 6 units classroom block at NASS.",
    scope: ["Classroom construction", "Educational infrastructure"],
    highlights: [{ label: "Sector", value: "Education" }],
    cover: "/images/Completed Project/Construction of 6 units classroom block at NASS/1.jpeg",
    images: [
      { src: "/images/Completed Project/Construction of 6 units classroom block at NASS/1.jpeg", alt: "Construction of 6 units classroom block at NASS 1" },
      { src: "/images/Completed Project/Construction of 6 units classroom block at NASS/2.jpeg", alt: "Construction of 6 units classroom block at NASS 2" },
      { src: "/images/Completed Project/Construction of 6 units classroom block at NASS/3.jpeg", alt: "Construction of 6 units classroom block at NASS 3" },
      { src: "/images/Completed Project/Construction of 6 units classroom block at NASS/4.jpeg", alt: "Construction of 6 units classroom block at NASS 4" },
      { src: "/images/Completed Project/Construction of 6 units classroom block at NASS/5.jpeg", alt: "Construction of 6 units classroom block at NASS 5" },
      { src: "/images/Completed Project/Construction of 6 units classroom block at NASS/6.jpeg", alt: "Construction of 6 units classroom block at NASS 6" }
    ],
    featured: true,
    span: "normal",
  },

  {
    id: 35,
    slug: "sanzule-washroom",
    title: "Sanzule Washroom",
    subtitle: "Sanitation Facility",
    category: "Civil Engineering",
    status: "completed",
    location: "Sanzule",
    region: "Western Region, Ghana",
    year: "2026",
    duration: "Completed",
    description: "Construction of washroom facilities at Sanzule.",
    scope: ["Sanitation", "Plumbing"],
    highlights: [{ label: "Facility", value: "Washroom" }],
    cover: "/images/Completed Project/Sanzule Washroom/1.jpeg",
    images: [
      { src: "/images/Completed Project/Sanzule Washroom/1.jpeg", alt: "Sanzule Washroom 1" },
      { src: "/images/Completed Project/Sanzule Washroom/2.jpeg", alt: "Sanzule Washroom 2" },
      { src: "/images/Completed Project/Sanzule Washroom/3.jpeg", alt: "Sanzule Washroom 3" },
      { src: "/images/Completed Project/Sanzule Washroom/4.jpeg", alt: "Sanzule Washroom 4" }
    ],
    featured: true,
    span: "normal",
  },

  {
    id: 36,
    slug: "atuabo-fishing-shed",
    title: "Atuabo Fishing Shed",
    subtitle: "Community Infrastructure",
    category: "Construction",
    status: "completed",
    location: "Atuabo",
    region: "Western Region, Ghana",
    year: "2026",
    duration: "Completed",
    description: "Construction of fishing shed for the Atuabo community.",
    scope: ["Shed construction", "Community infrastructure"],
    highlights: [{ label: "Sector", value: "Fisheries" }],
    cover: "/images/Completed Project/Atuabo Fishing Shed/2.jpeg",
    images: [
      { src: "/images/Completed Project/Atuabo Fishing Shed/1.jpeg", alt: "Atuabo Fishing Shed 1" },
      { src: "/images/Completed Project/Atuabo Fishing Shed/2.jpeg", alt: "Atuabo Fishing Shed 2" },
      { src: "/images/Completed Project/Atuabo Fishing Shed/3.jpeg", alt: "Atuabo Fishing Shed 3" },
      { src: "/images/Completed Project/Atuabo Fishing Shed/4.jpeg", alt: "Atuabo Fishing Shed 4" },
      { src: "/images/Completed Project/Atuabo Fishing Shed/5.jpeg", alt: "Atuabo Fishing Shed 5" },
      { src: "/images/Completed Project/Atuabo Fishing Shed/6.jpeg", alt: "Atuabo Fishing Shed 6" }
    ],
    featured: true,
    span: "normal",
  },

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
    cover: "/images/Completed Project/Construction of 3&4 Bedroom Villa - Paradise Estate/IMG_8100-scaled.jpg.jpeg",
    images: [
      { src: "/images/Completed Project/Construction of 3&4 Bedroom Villa - Paradise Estate/IMG_8100-scaled.jpg.jpeg", alt: "Paradise Estate Villa 1" },
      { src: "/images/Completed Project/Construction of 3&4 Bedroom Villa - Paradise Estate/IMG_8101-scaled.jpg.jpeg", alt: "Paradise Estate Villa 2" },
      { src: "/images/Completed Project/Construction of 3&4 Bedroom Villa - Paradise Estate/IMG_8104-scaled.jpg.jpeg", alt: "Paradise Estate Villa 3" }
    ],
    featured: true,
    span: "wide",
  },


  {
    id: 11,
    slug: "astroturf-construction-ellembele",
    title: "AstroTurf Pitch — QIP Civil Works",
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

  // {
  //   id: 12,
  //   slug: "community-sports-complex-western",
  //   title: "Community Sports Complex",
  //   subtitle: "Structural Engineering & Civil Works",
  //   category: "Civil Engineering",
  //   status: "completed",
  //   location: "Western Region",
  //   region: "Western Region, Ghana",
  //   year: "2023",
  //   yearCompleted: "2024",
  //   client: "Ghana Education Trust Fund",
  //   duration: "18 months",
  //   description:
  //     "A community sports facility serving over 10,000 residents — multi-purpose sports hall, outdoor courts, AstroTurf pitch, and supporting civil infrastructure across the Western Region.",
  //   scope: [
  //     "Foundation and substructure works",
  //     "Steel frame superstructure",
  //     "Reinforced concrete stands",
  //     "AstroTurf pitch installation",
  //     "Drainage and stormwater management",
  //     "Electrical and lighting systems",
  //   ],
  //   highlights: [
  //     { label: "Site Area", value: "12,400 m²" },
  //     { label: "Capacity", value: "2,500 seats" },
  //     { label: "Duration", value: "18 months" },
  //   ],
  //   cover: `${P}/DJI/DJI_20240911150341_0255_D_PARZIAIR.webp`,
  //   images: [
  //     { src: `${P}/DJI/DJI_20240911150341_0255_D_PARZIAIR.webp`, alt: "Sports complex aerial" },
  //     { src: `${P}/DJI/DJI_20240911151915_0270_D_PARZIAIR.webp`, alt: "Facility overview from above" },
  //   ],
  //   featured: false,
  //   span: "normal",
  // },

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
    cover: "/images/Completed Project/Construction of Twelve Floor Apartment Building - Solaris/IMG_9499-scaled.jpg.jpeg",
    images: [
      { src: "/images/Completed Project/Construction of Twelve Floor Apartment Building - Solaris/IMG_9499-scaled.jpg.jpeg", alt: "Solaris apartment building 1" },
      { src: "/images/Completed Project/Construction of Twelve Floor Apartment Building - Solaris/IMG_9505-scaled.jpg.jpeg", alt: "Solaris apartment building 2" },
      { src: "/images/Completed Project/Construction of Twelve Floor Apartment Building - Solaris/IMG_9509-scaled.jpg.jpeg", alt: "Solaris apartment building 3" },
      { src: "/images/Completed Project/Construction of Twelve Floor Apartment Building - Solaris/IMG_9527-scaled.jpg.jpeg", alt: "Solaris apartment building 4" },
      { src: "/images/Completed Project/Construction of Twelve Floor Apartment Building - Solaris/IMG_9528-scaled.jpg.jpeg", alt: "Solaris apartment building 5" },
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
    cover: "/images/Completed Project/Construction of road concrete for Springfield Estate/IMG_8316-scaled.jpg.jpeg",
    images: [
      { src: "/images/Completed Project/Construction of road concrete for Springfield Estate/IMG_8316-scaled.jpg.jpeg", alt: "Springfield Estate concrete road 1" },
      { src: "/images/Completed Project/Construction of road concrete for Springfield Estate/IMG_8385-scaled.jpg.jpeg", alt: "Springfield Estate concrete road 2" },
      { src: "/images/Completed Project/Construction of road concrete for Springfield Estate/IMG_8785-scaled.jpg.jpeg", alt: "Springfield Estate concrete road 3" },
      { src: "/images/Completed Project/Construction of road concrete for Springfield Estate/IMG_8880-scaled.jpg.jpeg", alt: "Springfield Estate concrete road 4" },
      { src: "/images/Completed Project/Construction of road concrete for Springfield Estate/IMG_9008-scaled.jpg.jpeg", alt: "Springfield Estate concrete road 5" },
      { src: "/images/Completed Project/Construction of road concrete for Springfield Estate/IMG_9008-scaled.jpg_1.jpeg", alt: "Springfield Estate concrete road 6" },
      { src: "/images/Completed Project/Construction of road concrete for Springfield Estate/IMG_9028-scaled.jpg.jpeg", alt: "Springfield Estate concrete road 7" },
      { src: "/images/Completed Project/Construction of road concrete for Springfield Estate/IMG_9861-scaled.jpg.jpeg", alt: "Springfield Estate concrete road 8" },
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
    cover: "/images/Completed Project/officecomplex1.webp",
    images: [
      { src: "/images/Completed Project/officecomplex1.webp", alt: "Bureau of National Communications office complex" },
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
    cover: "/images/Completed Project/6 units classroom gnpc/gnpc1.webp",
    images: [
      { src: "/images/Completed Project/6 units classroom gnpc/gnpc1.webp", alt: "GNPC 6-unit classroom block 1" },
      { src: "/images/Completed Project/6 units classroom gnpc/gnpc2.webp", alt: "GNPC 6-unit classroom block 2" },
      { src: "/images/Completed Project/6 units classroom gnpc/gnpc3.webp", alt: "GNPC 6-unit classroom block 3" },
    ],
    featured: false,
    span: "normal",
  },

  // {
  //   id: 19,
  //   slug: "quarry-aggregate-mining-site",
  //   title: "Quarry & Aggregate Mining Site",
  //   subtitle: "Materials Production & Procurement",
  //   category: "Procurement",
  //   status: "completed",
  //   location: "Western Region",
  //   region: "Western Region, Ghana",
  //   year: "2020",
  //   yearCompleted: "2022",
  //   client: "Confidential",
  //   duration: "24 months",
  //   description:
  //     "Establishment and operation of a quarry and aggregate mining site in the Western Region, producing crushed stone, chippings, and sand aggregates to supply Macwest's construction projects and third-party clients across Ghana.",
  //   scope: [
  //     "Site acquisition, clearing, and access roads",
  //     "Rock drilling and blasting operations",
  //     "Crushing and screening plant setup",
  //     "Aggregate stockpiling and grading",
  //     "Quality control and materials testing",
  //     "Environmental management and rehabilitation",
  //   ],
  //   highlights: [
  //     { label: "Location", value: "Western Region" },
  //     { label: "Output", value: "Crushed aggregate" },
  //     { label: "Duration", value: "24 months" },
  //   ],
  //   cover: `${P}/quarry-site/Quarry-site-main.webp`,
  //   images: [
  //     { src: `${P}/quarry-site/Quarry-site-main.webp`, alt: "Quarry site overview" },
  //     { src: `${P}/quarry-site/Quarry-site-thumbnail.webp`, alt: "Quarry aerial" },
  //     { src: `${P}/quarry-site/quarry-site1.webp`, alt: "Rock quarrying operations" },
  //     { src: `${P}/quarry-site/quarry-site2.webp`, alt: "Crushing plant" },
  //     { src: `${P}/quarry-site/quarry-site3.webp`, alt: "Aggregate stockpile" },
  //     { src: `${P}/quarry-site/quarry-site4.webp`, alt: "Site operations" },
  //   ],
  //   featured: false,
  //   span: "normal",
  // },

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
    cover: "/images/Completed Project/solar panel installation- QIP/solar1.webp",
    images: [
      { src: "/images/Completed Project/solar panel installation- QIP/solar1.webp", alt: "QIP solar panel installation 1" },
      { src: "/images/Completed Project/solar panel installation- QIP/solar2.webp", alt: "QIP solar panel installation 2" },
      { src: "/images/Completed Project/solar panel installation- QIP/solar3.webp", alt: "QIP solar panel installation 3" },
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
    cover: "/images/Completed Project/modern latrines with biogesters/latrines1.webp",
    images: [
      { src: "/images/Completed Project/modern latrines with biogesters/latrines1.webp", alt: "Modern latrine with biodigester 1" },
      { src: "/images/Completed Project/modern latrines with biogesters/latrines2.webp", alt: "Modern latrine with biodigester 2" },
      { src: "/images/Completed Project/modern latrines with biogesters/latrines3.webp", alt: "Modern latrine with biodigester 3" },
      { src: "/images/Completed Project/modern latrines with biogesters/latrines4.webp", alt: "Modern latrine with biodigester 4" },
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
    client: "QIP Civil Works",
    duration: "- months",
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
    cover: "/images/Completed Project/Refurbishment of Sanzule-Krisan Primary & JHS School Canteen/s1.webp",
    images: [
      { src: "/images/Completed Project/Refurbishment of Sanzule-Krisan Primary & JHS School Canteen/s1.webp", alt: "Sanzule-Krisan school canteen 1" },
      { src: "/images/Completed Project/Refurbishment of Sanzule-Krisan Primary & JHS School Canteen/s2.webp", alt: "Sanzule-Krisan school canteen 2" },
      { src: "/images/Completed Project/Refurbishment of Sanzule-Krisan Primary & JHS School Canteen/s3.webp", alt: "Sanzule-Krisan school canteen 3" },
      { src: "/images/Completed Project/Refurbishment of Sanzule-Krisan Primary & JHS School Canteen/s4.webp", alt: "Sanzule-Krisan school canteen 4" },
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
    cover: "/images/Completed Project/Construction of fishing sheds- QIP/1.webp",
    images: [
      { src: "/images/Completed Project/Construction of fishing sheds- QIP/1.webp", alt: "QIP fishing shed 1" },
      { src: "/images/Completed Project/Construction of fishing sheds- QIP/2.webp", alt: "QIP fishing shed 2" },
      { src: "/images/Completed Project/Construction of fishing sheds- QIP/3.webp", alt: "QIP fishing shed 3" },
      { src: "/images/Completed Project/Construction of fishing sheds- QIP/4.webp", alt: "QIP fishing shed 4" },
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
    cover: "/images/Completed Project/Eni Ghana/Eikwe Primary/Eikwe-primary1.jpeg",
    images: [
      // Eikwe Primary
      { src: "/images/Completed Project/Eni Ghana/Eikwe Primary/Eikwe-primary1.jpeg", alt: "Eikwe Primary School 1" },
      { src: "/images/Completed Project/Eni Ghana/Eikwe Primary/Eikwe-primary1_1.jpeg", alt: "Eikwe Primary School 2" },
      { src: "/images/Completed Project/Eni Ghana/Eikwe Primary/Eikwe-primary2.jpeg", alt: "Eikwe Primary School 3" },
      { src: "/images/Completed Project/Eni Ghana/Eikwe Primary/Eikwe-primary3.jpeg", alt: "Eikwe Primary School 4" },
      { src: "/images/Completed Project/Eni Ghana/Eikwe Primary/Eikwe-primary4.jpeg", alt: "Eikwe Primary School 5" },
      // Eikwe Catholic Junior
      { src: "/images/Completed Project/Eni Ghana/Eikwe catholic junior/0T6A9161.jpg.jpeg", alt: "Eikwe Catholic JHS 1" },
      { src: "/images/Completed Project/Eni Ghana/Eikwe catholic junior/0T6A9162.jpg.jpeg", alt: "Eikwe Catholic JHS 2" },
      { src: "/images/Completed Project/Eni Ghana/Eikwe catholic junior/0T6A9165.jpg.jpeg", alt: "Eikwe Catholic JHS 3" },
      { src: "/images/Completed Project/Eni Ghana/Eikwe catholic junior/0T6A9166.jpg.jpeg", alt: "Eikwe Catholic JHS 4" },
      { src: "/images/Completed Project/Eni Ghana/Eikwe catholic junior/DJI_20240911145204_0243_D_PARZIAIR.jpg.jpeg", alt: "Eikwe Catholic JHS aerial 1" },
      { src: "/images/Completed Project/Eni Ghana/Eikwe catholic junior/DJI_20240911145234_0244_D_PARZIAIR.jpg.jpeg", alt: "Eikwe Catholic JHS aerial 2" },
      { src: "/images/Completed Project/Eni Ghana/Eikwe catholic junior/DJI_20240911145509_0249_D_PARZIAIR.jpg.jpeg", alt: "Eikwe Catholic JHS aerial 3" },
      { src: "/images/Completed Project/Eni Ghana/Eikwe catholic junior/DJI_20240911145522_0250_D_PARZIAIR.jpg.jpeg", alt: "Eikwe Catholic JHS aerial 4" },
      { src: "/images/Completed Project/Eni Ghana/Eikwe catholic junior/DJI_20240911145536_0251_D_PARZIAIR.jpg.jpeg", alt: "Eikwe Catholic JHS aerial 5" },
      // Anokyi Methodist
      { src: "/images/Completed Project/Eni Ghana/Anokyi Methodist/0T6A9188.jpg.jpeg", alt: "Anokyi Methodist Primary 1" },
      { src: "/images/Completed Project/Eni Ghana/Anokyi Methodist/0T6A9190.jpg.jpeg", alt: "Anokyi Methodist Primary 2" },
      { src: "/images/Completed Project/Eni Ghana/Anokyi Methodist/0T6A9192.jpg.jpeg", alt: "Anokyi Methodist Primary 3" },
      { src: "/images/Completed Project/Eni Ghana/Anokyi Methodist/0T6A9193.jpg.jpeg", alt: "Anokyi Methodist Primary 4" },
      { src: "/images/Completed Project/Eni Ghana/Anokyi Methodist/0T6A9195.jpg.jpeg", alt: "Anokyi Methodist Primary 5" },
      { src: "/images/Completed Project/Eni Ghana/Anokyi Methodist/0T6A9196.jpg.jpeg", alt: "Anokyi Methodist Primary 6" },
      { src: "/images/Completed Project/Eni Ghana/Anokyi Methodist/0T6A9200.jpg.jpeg", alt: "Anokyi Methodist Primary 7" },
      { src: "/images/Completed Project/Eni Ghana/Anokyi Methodist/DJI_20240911151157_0258_D_PARZIAIR.jpg.jpeg", alt: "Anokyi Methodist aerial 1" },
      { src: "/images/Completed Project/Eni Ghana/Anokyi Methodist/DJI_20240911151249_0260_D_PARZIAIR.jpg.jpeg", alt: "Anokyi Methodist aerial 2" },
      { src: "/images/Completed Project/Eni Ghana/Anokyi Methodist/DJI_20240911151322_0261_D_PARZIAIR.jpg.jpeg", alt: "Anokyi Methodist aerial 3" },
      { src: "/images/Completed Project/Eni Ghana/Anokyi Methodist/DJI_20240911151347_0262_D_PARZIAIR.jpg.jpeg", alt: "Anokyi Methodist aerial 4" },
      // Anokyi D/A Junior High
      { src: "/images/Completed Project/Eni Ghana/Anokyi DA Junior High/0T6A9201.jpg.jpeg", alt: "Anokyi D/A Junior High 1" },
      { src: "/images/Completed Project/Eni Ghana/Anokyi DA Junior High/0T6A9203.jpg.jpeg", alt: "Anokyi D/A Junior High 2" },
      { src: "/images/Completed Project/Eni Ghana/Anokyi DA Junior High/0T6A9204.jpg.jpeg", alt: "Anokyi D/A Junior High 3" },
      { src: "/images/Completed Project/Eni Ghana/Anokyi DA Junior High/0T6A9205.jpg.jpeg", alt: "Anokyi D/A Junior High 4" },
      { src: "/images/Completed Project/Eni Ghana/Anokyi DA Junior High/0T6A9207.jpg.jpeg", alt: "Anokyi D/A Junior High 5" },
      { src: "/images/Completed Project/Eni Ghana/Anokyi DA Junior High/0T6A9210.jpg.jpeg", alt: "Anokyi D/A Junior High 6" },
      { src: "/images/Completed Project/Eni Ghana/Anokyi DA Junior High/0T6A9213.jpg.jpeg", alt: "Anokyi D/A Junior High 7" },
      { src: "/images/Completed Project/Eni Ghana/Anokyi DA Junior High/0T6A9216.jpg.jpeg", alt: "Anokyi D/A Junior High 8" },
      { src: "/images/Completed Project/Eni Ghana/Anokyi DA Junior High/0T6A9219.jpg.jpeg", alt: "Anokyi D/A Junior High 9" },
      { src: "/images/Completed Project/Eni Ghana/Anokyi DA Junior High/DJI_20240911151734_0265_D_PARZIAIR.jpg.jpeg", alt: "Anokyi D/A JHS aerial 1" },
      { src: "/images/Completed Project/Eni Ghana/Anokyi DA Junior High/DJI_20240911151805_0267_D_PARZIAIR.jpg.jpeg", alt: "Anokyi D/A JHS aerial 2" },
      { src: "/images/Completed Project/Eni Ghana/Anokyi DA Junior High/DJI_20240911151824_0268_D_PARZIAIR.jpg.jpeg", alt: "Anokyi D/A JHS aerial 3" },
      // Bakanta Catholic Primary
      { src: "/images/Completed Project/Eni Ghana/Bakanta catholic primary/0T6A9320.jpg.jpeg", alt: "Bakanta Catholic Primary 1" },
      { src: "/images/Completed Project/Eni Ghana/Bakanta catholic primary/0T6A9327.jpg.jpeg", alt: "Bakanta Catholic Primary 2" },
      { src: "/images/Completed Project/Eni Ghana/Bakanta catholic primary/0T6A9329.jpg.jpeg", alt: "Bakanta Catholic Primary 3" },
      { src: "/images/Completed Project/Eni Ghana/Bakanta catholic primary/0T6A9332.jpg.jpeg", alt: "Bakanta Catholic Primary 4" },
      { src: "/images/Completed Project/Eni Ghana/Bakanta catholic primary/0T6A9336.jpg.jpeg", alt: "Bakanta Catholic Primary 5" },
      { src: "/images/Completed Project/Eni Ghana/Bakanta catholic primary/0T6A9337.jpg.jpeg", alt: "Bakanta Catholic Primary 6" },
      { src: "/images/Completed Project/Eni Ghana/Bakanta catholic primary/0T6A9338.jpg.jpeg", alt: "Bakanta Catholic Primary 7" },
      { src: "/images/Completed Project/Eni Ghana/Bakanta catholic primary/0T6A9341.jpg.jpeg", alt: "Bakanta Catholic Primary 8" },
      { src: "/images/Completed Project/Eni Ghana/Bakanta catholic primary/DJI_20240911163912_0296_D_PARZIAIR.jpg.jpeg", alt: "Bakanta Catholic aerial 1" },
      { src: "/images/Completed Project/Eni Ghana/Bakanta catholic primary/DJI_20240911163938_0298_D_PARZIAIR.jpg.jpeg", alt: "Bakanta Catholic aerial 2" },
      { src: "/images/Completed Project/Eni Ghana/Bakanta catholic primary/DJI_20240911164008_0300_D_PARZIAIR.jpg.jpeg", alt: "Bakanta Catholic aerial 3" },
      // Sanzule-Krisan JHS
      { src: "/images/Completed Project/Eni Ghana/Sanzule-Krisan JHS/0T6A9137.jpg.jpeg", alt: "Sanzule-Krisan JHS 1" },
      { src: "/images/Completed Project/Eni Ghana/Sanzule-Krisan JHS/0T6A9139.jpg.jpeg", alt: "Sanzule-Krisan JHS 2" },
      { src: "/images/Completed Project/Eni Ghana/Sanzule-Krisan JHS/0T6A9146.jpg.jpeg", alt: "Sanzule-Krisan JHS 3" },
      { src: "/images/Completed Project/Eni Ghana/Sanzule-Krisan JHS/0T6A9149.jpg.jpeg", alt: "Sanzule-Krisan JHS 4" },
      { src: "/images/Completed Project/Eni Ghana/Sanzule-Krisan JHS/0T6A9153.jpg.jpeg", alt: "Sanzule-Krisan JHS 5" },
      { src: "/images/Completed Project/Eni Ghana/Sanzule-Krisan JHS/0T6A9158.jpg.jpeg", alt: "Sanzule-Krisan JHS 6" },
      { src: "/images/Completed Project/Eni Ghana/Sanzule-Krisan JHS/DJI_20240911143424_0224_D_PARZIAIR-1.jpg.jpeg", alt: "Sanzule-Krisan JHS aerial 1" },
      { src: "/images/Completed Project/Eni Ghana/Sanzule-Krisan JHS/DJI_20240911143449_0225_D_PARZIAIR.jpg.jpeg", alt: "Sanzule-Krisan JHS aerial 2" },
      { src: "/images/Completed Project/Eni Ghana/Sanzule-Krisan JHS/DJI_20240911144032_0235_D_PARZIAIR.jpg.jpeg", alt: "Sanzule-Krisan JHS aerial 3" },
      { src: "/images/Completed Project/Eni Ghana/Sanzule-Krisan JHS/DJI_20240911144342_0240_D_PARZIAIR.jpg.jpeg", alt: "Sanzule-Krisan JHS aerial 4" },
      // Installation of 5KVA Solar system (grouped under Eni)
      { src: "/images/Completed Project/Eni Ghana/installation of 5KVA Solar system/solar-installation-main.jpg.jpeg", alt: "5KVA solar system installation main" },
      { src: "/images/Completed Project/Eni Ghana/installation of 5KVA Solar system/solar-installation1.jpeg", alt: "5KVA solar system installation 1" },
      { src: "/images/Completed Project/Eni Ghana/installation of 5KVA Solar system/solar-installation2.jpeg", alt: "5KVA solar system installation 2" },
      { src: "/images/Completed Project/Eni Ghana/installation of 5KVA Solar system/solar-installation3.jpeg", alt: "5KVA solar system installation 3" },
      { src: "/images/Completed Project/Eni Ghana/installation of 5KVA Solar system/solar-installation4.jpeg", alt: "5KVA solar system installation 4" },
    ],
    featured: true,
    span: "wide",
  },

  // {
  //   id: 26,
  //   slug: "two-unit-dormitory-block",
  //   title: "2-Unit Single-Storey Dormitory Block",
  //   subtitle: "Residential Accommodation Construction",
  //   category: "Construction",
  //   status: "completed",
  //   location: "Ghana",
  //   region: "Ghana",
  //   year: "2021",
  //   yearCompleted: "2022",
  //   client: "Confidential",
  //   duration: "10 months",
  //   description:
  //     "Construction of a two-unit single-storey dormitory block providing comfortable residential accommodation. Works covered full structural frame, roofing, internal finishes, sanitation facilities, and external works.",
  //   scope: [
  //     "Foundation and substructure works",
  //     "Block-work superstructure — 2 units",
  //     "Roofing and fascia",
  //     "Internal plastering and painting",
  //     "Sanitation and bathroom fittings",
  //     "Electrical installation",
  //     "External works and drainage",
  //   ],
  //   highlights: [
  //     { label: "Units", value: "2 dormitory blocks" },
  //     { label: "Type", value: "Single-Storey" },
  //     { label: "Duration", value: "10 months" },
  //   ],
  //   cover: `${P}/dormitory/Construction-of-2-units-single-storey-dormitory-block2.webp`,
  //   images: [
  //     { src: `${P}/dormitory/2-units-single-storey-dormitory-block-main.webp`, alt: "Completed dormitory block" },
  //     // { src: `${P}/dormitory/Construction-of-2-units-single-storey-dormitory-block1.webp`, alt: "Superstructure works" },
  //     { src: `${P}/dormitory/Construction-of-2-units-single-storey-dormitory-block2.webp`, alt: "Roofing installation" },
  //     { src: `${P}/dormitory/Construction-of-2-units-single-storey-dormitory-block3.webp`, alt: "Internal finishes" },
  //     { src: `${P}/dormitory/Construction-of-2-units-single-storey-dormitory-block4.webp`, alt: "External works" },
  //   ],
  //   featured: false,
  //   span: "normal",
  // },

  // {
  //   id: 27,
  //   slug: "hiawanwu-da-primary-classroom-block",
  //   title: "Hiawanwu D.A. Primary — 6 Classroom Block",
  //   subtitle: "Educational Facility Construction",
  //   category: "Construction",
  //   status: "completed",
  //   location: "Hiawanwu, Ghana",
  //   region: "Ghana",
  //   year: "2022",
  //   yearCompleted: "2023",
  //   client: "GETFund / District Assembly",
  //   duration: "12 months",
  //   description:
  //     "Construction of a six-unit classroom block at Hiawanwu D.A. Primary School, providing modern learning spaces for pupils in the community. Works included structural frame, roofing, internal finishes, and sanitation facilities.",
  //   scope: [
  //     "Site preparation and earthworks",
  //     "Foundation and substructure",
  //     "Six-unit block-work superstructure",
  //     "Roofing, ceilings, and louvres",
  //     "Internal plastering and painting",
  //     "Sanitation block and perimeter fencing",
  //   ],
  //   highlights: [
  //     { label: "Units", value: "6 classrooms" },
  //     { label: "School", value: "Hiawanwu D.A. Primary" },
  //     { label: "Duration", value: "12 months" },
  //   ],
  //   cover: `${SCH}/00001438-PHOTO-2026-04-28-19-07-24.webp`,
  //   images: [
  //     { src: `${SCH}/00001438-PHOTO-2026-04-28-19-07-24.webp`, alt: "School project — completed" },
  //     { src: `${SCH}/00001456-PHOTO-2026-04-29-18-38-53.webp`, alt: "Classroom block overview" },
  //     { src: `${SCH}/00001457-PHOTO-2026-04-29-18-38-54.webp`, alt: "Structural works" },
  //     { src: `${SCH}/00001458-PHOTO-2026-04-29-18-38-54.webp`, alt: "Internal finishes" },
  //     { src: `${SCH}/00001459-PHOTO-2026-04-29-18-38-54.webp`, alt: "Block-work detail" },
  //     { src: `${SCH}/00001559-PHOTO-2026-05-01-21-34-46.webp`, alt: "Completed school facility" },
  //     { src: `${SCH}/00001560-PHOTO-2026-05-01-21-34-46.webp`, alt: "Final handover" },
  //   ],
  //   featured: false,
  //   span: "normal",
  // },

  // {
  //   id: 28,
  //   slug: "ho-mawuli-construction-project",
  //   title: "Ho Mawuli Construction Project",
  //   subtitle: "Building & Civil Works — Volta Region",
  //   category: "Construction",
  //   status: "completed",
  //   location: "Ho, Volta Region",
  //   region: "Volta Region, Ghana",
  //   year: "2022",
  //   yearCompleted: "2023",
  //   client: "Confidential",
  //   duration: "14 months",
  //   description:
  //     "Construction works at Ho Mawuli in the Volta Region of Ghana, delivering structural building works, internal finishes, and site development in support of a community or institutional facility.",
  //   scope: [
  //     "Site preparation and substructure",
  //     "Structural superstructure and roofing",
  //     "Internal plastering and finishes",
  //     "MEP installations",
  //     "External works and access roads",
  //   ],
  //   highlights: [
  //     { label: "Location", value: "Ho, Volta Region" },
  //     { label: "Duration", value: "14 months" },
  //     { label: "Sector", value: "Community" },
  //   ],
  //   cover: `${P}/ho/Ho-mawuli-project-main.webp`,
  //   images: [
  //     { src: `${P}/ho/Ho-mawuli-project-main.webp`, alt: "Ho Mawuli project overview" },
  //     { src: `${P}/ho/Ho-mawuli-project-thumbnail.webp`, alt: "Building site" },
  //     { src: `${P}/ho/Ho-Mawuli-Project1.webp`, alt: "Structural works" },
  //     { src: `${P}/ho/Ho-Mawuli-Project2.webp`, alt: "Construction progress" },
  //     { src: `${P}/ho/Ho-Mawuli-Project3.webp`, alt: "Internal finishes" },
  //     { src: `${P}/ho/Ho-Mawuli-Project4.webp`, alt: "Completed facility" },
  //   ],
  //   featured: false,
  //   span: "normal",
  // },

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


  // {
  //   id: 32,
  //   slug: "main-site-commercial-complex",
  //   title: "Main Site — Commercial Complex",
  //   subtitle: "Lounge, Main Building, Shops & Top Offices",
  //   category: "Construction",
  //   status: "completed",
  //   location: "Ghana",
  //   region: "Ghana",
  //   year: "2025",
  //   yearCompleted: "2026",
  //   client: "Confidential",
  //   duration: "14 months",
  //   description:
  //     "Construction of a multi-section commercial complex comprising a lounge, main building, new shops, and top-floor offices. Works covered the full structural and fitout package across all sections, delivered to a high specification.",
  //   scope: [
  //     "Lounge and reception area construction",
  //     "Main building structural frame and finishes",
  //     "New shops — shell and core and fitout",
  //     "Top floor office suite construction",
  //     "MEP throughout — electrical, plumbing, HVAC",
  //     "External works, car parking, and signage",
  //   ],
  //   highlights: [
  //     { label: "Sections", value: "Lounge, Building, Shops, Offices" },
  //     { label: "Type", value: "Commercial Complex" },
  //     { label: "Duration", value: "14 months" },
  //   ],
  //   cover: `${MAIN}/00001417-PHOTO-2026-04-28-18-04-33.webp`,
  //   images: [
  //     { src: `${MAIN}/00001417-PHOTO-2026-04-28-18-04-33.webp`, alt: "Commercial complex exterior" },
  //     { src: `${MAIN}/00001418-PHOTO-2026-04-28-18-04-34.webp`, alt: "Main building works" },
  //     { src: `${MAIN}/00001448-PHOTO-2026-04-29-18-35-33.webp`, alt: "Shops construction" },
  //     { src: `${MAIN}/00001449-PHOTO-2026-04-29-18-35-34.webp`, alt: "Interior progress" },
  //     { src: `${MAIN}/00001499-PHOTO-2026-04-30-18-31-28.webp`, alt: "Office floors" },
  //     { src: `${MAIN}/00001500-PHOTO-2026-04-30-18-31-28.webp`, alt: "Top offices works" },
  //     { src: `${MAIN}/00001545-PHOTO-2026-05-01-19-10-21.webp`, alt: "Lounge fitout" },
  //     { src: `${MAIN}/00001546-PHOTO-2026-05-01-19-10-22.webp`, alt: "Shop fitout detail" },
  //     { src: `${MAIN}/00001547-PHOTO-2026-05-01-19-10-22.webp`, alt: "Finishes and fittings" },
  //     { src: `${MAIN}/00001592-PHOTO-2026-05-04-18-41-30.webp`, alt: "Near completion" },
  //     { src: `${MAIN}/00001593-PHOTO-2026-05-04-18-41-30.webp`, alt: "Final finishes" },
  //     { src: `${MAIN}/00001594-PHOTO-2026-05-04-18-41-31.webp`, alt: "External elevation" },
  //     { src: `${MAIN}/00001605-PHOTO-2026-05-04-19-09-32.webp`, alt: "Complex overview" },
  //     { src: `${MAIN}/00001606-PHOTO-2026-05-04-19-09-33.webp`, alt: "Completed complex" },
  //     { src: `${MAIN}/00001615-PHOTO-2026-05-05-19-14-09.webp`, alt: "Lounge area" },
  //     { src: `${MAIN}/00001616-PHOTO-2026-05-05-19-14-09.webp`, alt: "Shop fronts" },
  //     { src: `${MAIN}/00001617-PHOTO-2026-05-05-19-14-10.webp`, alt: "Office entrance" },
  //     { src: `${MAIN}/00001618-PHOTO-2026-05-05-19-14-10.webp`, alt: "Interior spaces" },
  //     { src: `${MAIN}/00001619-PHOTO-2026-05-05-19-14-10.webp`, alt: "Corridor and circulation" },
  //     { src: `${MAIN}/00001624-PHOTO-2026-05-05-19-22-42.webp`, alt: "Final site" },
  //     { src: `${MAIN}/00001625-PHOTO-2026-05-05-19-22-42.webp`, alt: "Handover ready" },
  //     { src: `${MAIN}/00001626-PHOTO-2026-05-05-19-22-42.webp`, alt: "Project delivered" },
  //   ],
  //   featured: true,
  //   span: "wide",
  // },
];

export const ACTIVE_PROJECTS = ALL_PROJECTS.filter((p) => p.status === "active");
export const COMPLETED_PROJECTS = ALL_PROJECTS.filter((p) => p.status === "completed").sort((a, b) => {
  const aHasImages = a.images && a.images.length > 0 ? 1 : 0;
  const bHasImages = b.images && b.images.length > 0 ? 1 : 0;
  if (aHasImages !== bHasImages) {
    return bHasImages - aHasImages;
  }
  const aYear = parseInt(a.yearCompleted || a.year || "0");
  const bYear = parseInt(b.yearCompleted || b.year || "0");
  if (aYear !== bYear) {
    return bYear - aYear;
  }
  return b.id - a.id;
});
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
  "MEP",
  "Procurement",
];
