import { PlaceholderPage } from "@/components/pages/placeholder-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Contact",
  "Office locations, phone, email, and project enquiries.",
  "/contact",
);

export default function ContactPage() {
  return <PlaceholderPage title="Contact" description="Form + enquiry types will ship in the contact iteration." />;
}
