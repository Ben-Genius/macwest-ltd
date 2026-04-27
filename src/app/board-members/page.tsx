import { PageHeader } from "@/components/layout/page-header";
import { BoardContent } from "@/components/pages/about/board-content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Leadership & Board",
  "Board of directors and executive leadership.",
  "/board-members",
);

export default function BoardMembersPage() {
  return (
    <>
      <PageHeader title="Leadership & Board" description="The people guiding Macwest's vision and growth." />
      <BoardContent />
    </>
  );
}
