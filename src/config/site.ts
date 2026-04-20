export const siteConfig = {
  name: "Macwest Limited",
  shortName: "Macwest",
  description:
    "Construction and engineering solutions in Ghana — civil works, housing estates, MEP, procurement, and more.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://macwest.com.gh",
  locale: "en_GH",
  company: {
    legalName: "Macwest Limited",
    incorporated: "May 2011",
    addressLine: "No 12 Joseph Richard Asiedu St, Accra-Ghana",
    email: "info@macwest.com.gh",
    phoneDisplay: "+233 (0) 244 270797",
  },
} as const;
