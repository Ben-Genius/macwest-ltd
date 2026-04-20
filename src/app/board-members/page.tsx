import { PlaceholderPage } from "@/components/pages/placeholder-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Leadership & board",
  "Board of directors and executive leadership.",
  "/board-members",
);

export default function BoardMembersPage() {
  return <PlaceholderPage title="Leadership & board" />;
}
