"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { m, AnimatePresence, useInView } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { GSAPStaggerText } from "@/components/ui/gsap-stagger-text";
import { fadeInUp, scaleIn, staggerContainer, EASE } from "@/lib/animations";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";

/* ─── Data ──────────────────────────────────────────────────────── */

type MediaItem = {
  id: number;
  url: string;
  title: string;
  desc: string;
  span: string;
};

type Service = {
  id: string;
  shortTitle: string;
  title: string;
  cover: string;
  description: string;
  points: string[];
  images: MediaItem[];
};

const SERVICES: Service[] = [
  {
    id: "sanitary-pads",
    shortTitle: "Sanitary Pads Training",
    title: "Advanced Training on Sewing Reusable Sanitary Pads",
    cover: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A5768-scaled.jpg",
    description:
      "Hands-on vocational training empowering women and youth with skills to produce reusable sanitary pads — promoting health, sustainability, and economic independence in local communities.",
    points: ["Hygiene Education", "Entrepreneurship Skills", "Sustainable Sourcing", "Precision Sewing", "Community Support"],
    images: [
      { id: 1, url: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A5657-1-scaled.jpg", title: "Training Session", desc: "Participants learning sewing techniques", span: "col-span-2 row-span-4" },
      { id: 2, url: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A5686-1-scaled.jpg", title: "Practical Work", desc: "Hands-on sewing practice", span: "col-span-1 row-span-2" },
      { id: 3, url: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A5687-3-scaled.jpg", title: "Group Activity", desc: "Collaborative training session", span: "col-span-1 row-span-2" },
      { id: 4, url: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A5695-1-scaled.jpg", title: "Materials", desc: "Quality fabric and materials", span: "col-span-1 row-span-2" },
      { id: 5, url: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A5727-scaled.jpg", title: "Skills Development", desc: "Learning precision stitching", span: "col-span-1 row-span-2" },
      { id: 6, url: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A5772-scaled.jpg", title: "Workshop", desc: "Training workshop in progress", span: "col-span-2 row-span-3" },
      { id: 7, url: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A5779.jpg", title: "Final Products", desc: "Completed reusable pads", span: "col-span-1 row-span-2" },
      { id: 8, url: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A5798.jpg", title: "Group Photo", desc: "Participants and facilitators", span: "col-span-1 row-span-2" },
      { id: 9, url: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A5869-scaled.jpg", title: "Certification", desc: "Recognition of achievement", span: "col-span-2 row-span-2" },
    ],
  },
  {
    id: "argon-welding",
    shortTitle: "Argon Welding",
    title: "Argon Welding Training Programme",
    cover: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A0271.jpg",
    description:
      "Specialised argon TIG/MIG welding training equipping participants with advanced skills for industrial applications — bridging vocational education and real-world engineering practice.",
    points: ["TIG/MIG Techniques", "Industrial Safety", "Equipment Setup", "Blueprint Reading", "Structural Precision"],
    images: [
      { id: 1, url: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A0203-scaled.jpg", title: "Welding Setup", desc: "Argon welding equipment and station", span: "col-span-2 row-span-4" },
      { id: 2, url: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A0238-1.jpg", title: "In Action", desc: "Participant performing a weld", span: "col-span-1 row-span-2" },
      { id: 3, url: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A0271.jpg", title: "Technique", desc: "Precision TIG welding", span: "col-span-1 row-span-2" },
      { id: 4, url: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A0291.jpg", title: "Safety First", desc: "Proper PPE and safety practices", span: "col-span-1 row-span-2" },
      { id: 5, url: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A0334-1.jpg", title: "Instruction", desc: "Expert trainer guidance", span: "col-span-1 row-span-2" },
      { id: 6, url: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A0341.jpg", title: "Workshop Floor", desc: "Training facility overview", span: "col-span-2 row-span-3" },
      { id: 7, url: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A0375.jpg", title: "Weld Quality", desc: "Inspecting finished welds", span: "col-span-1 row-span-2" },
      { id: 8, url: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A0394.jpg", title: "Team Work", desc: "Collaborative practice session", span: "col-span-1 row-span-2" },
      { id: 9, url: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A0406.jpg", title: "Completion", desc: "Finished welding project", span: "col-span-1 row-span-2" },
      { id: 10, url: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A0369.jpg", title: "Achievement", desc: "Skilled welders ready for industry", span: "col-span-1 row-span-2" },
      { id: 11, url: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A0418.jpg", title: "Graduation", desc: "Programme completion ceremony", span: "col-span-2 row-span-2" },
    ],
  },
  {
    id: "health-training",
    shortTitle: "Health Training",
    title: "Health Training & Provision of Hygiene & Health Materials",
    cover: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A9000-scaled.jpg",
    description:
      "Community health education sessions paired with direct distribution of hygiene and health materials — improving health literacy and supporting wellbeing in underserved communities.",
    points: ["Hygiene Kits", "Sanitation Practices", "Community Outreach", "Health Literacy", "Awareness Campaigns"],
    images: [
      { id: 1, url: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A9000-scaled.jpg", title: "Health Session", desc: "Community health training programme", span: "col-span-2 row-span-5" },
      { id: 2, url: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A8979-scaled.jpg", title: "Materials Distribution", desc: "Hygiene kits distributed to participants", span: "col-span-2 row-span-5" },
    ],
  },
  {
    id: "stakeholder-engagements",
    shortTitle: "Stakeholder Engagements",
    title: "Stakeholder Engagements",
    cover: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A0171-scaled.jpg",
    description:
      "Facilitated forums, community meetings, and corporate dialogues that build trust, align expectations, and foster collaborative relationships between Macwest, project stakeholders, and local communities.",
    points: ["Community Dialogue", "Conflict Resolution", "Stakeholder Mapping", "Transparency", "Collaborative Management"],
    images: [
      { id: 1, url: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A0100-2.jpg", title: "Community Forum", desc: "Large-scale stakeholder forum", span: "col-span-2 row-span-4" },
      { id: 2, url: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A0259-scaled.jpg", title: "Open Dialogue", desc: "Discussion and Q&A session", span: "col-span-1 row-span-2" },
      { id: 3, url: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A0171-scaled.jpg", title: "Leadership Engagement", desc: "Executive-level stakeholder meeting", span: "col-span-1 row-span-2" },
      { id: 4, url: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A0211-1.jpg", title: "Community Meeting", desc: "Local community participation", span: "col-span-1 row-span-2" },
      { id: 5, url: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A9662-scaled.jpg", title: "Partnership Building", desc: "Forming lasting partnerships", span: "col-span-1 row-span-2" },
      { id: 6, url: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A9692-scaled.jpg", title: "Collaborative Workshop", desc: "Working towards shared outcomes", span: "col-span-2 row-span-3" },
      { id: 7, url: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A9744-scaled.jpg", title: "Project Outcomes", desc: "Agreed deliverables and next steps", span: "col-span-1 row-span-2" },
      { id: 8, url: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A9588-scaled.jpg", title: "Active Participation", desc: "Community members engaged", span: "col-span-1 row-span-2" },
      { id: 9, url: "https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A9575-scaled.jpg", title: "Closing Remarks", desc: "Session wrap-up and commitments", span: "col-span-2 row-span-2" },
    ],
  },
];

/* ─── Helpers ───────────────────────────────────────────────────── */

function Reveal({
  children,
  variants = fadeInUp,
  className,
}: {
  children: React.ReactNode;
  variants?: Parameters<typeof m.div>[0]["variants"];
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" as never });
  return (
    <m.div ref={ref} variants={variants} initial="hidden" animate={isInView ? "show" : "hidden"} className={className}>
      {children}
    </m.div>
  );
}

/* ─── Gallery Modal ─────────────────────────────────────────────── */

function GalleryModal({
  item,
  items,
  onClose,
  onSelect,
}: {
  item: MediaItem;
  items: MediaItem[];
  onClose: () => void;
  onSelect: (item: MediaItem) => void;
}) {
  const idx = items.findIndex((i) => i.id === item.id);

  const prev = () => onSelect(items[(idx - 1 + items.length) % items.length]);
  const next = () => onSelect(items[(idx + 1) % items.length]);

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-navy-950/95 backdrop-blur-md p-4"
      onClick={onClose}
    >
      {/* Main image */}
      <m.div
        initial={{ scale: 0.94, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.94, y: 20 }}
        transition={{ type: "spring", stiffness: 420, damping: 32 }}
        className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl bg-navy-900"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video">
          <AnimatePresence mode="wait">
            <m.div
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.22 }}
              className="absolute inset-0"
            >
              <Image src={item.url} alt={item.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 900px" />
            </m.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

          {/* Caption */}
          <AnimatePresence mode="wait">
            <m.div
              key={item.id + "-cap"}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-0 left-0 right-0 p-6 text-white"
            >
              <h3 className="text-white font-display font-bold text-xl leading-snug">{item.title}</h3>
              <p className="text-white/60 text-sm mt-1">{item.desc}</p>
            </m.div>
          </AnimatePresence>

          {/* Prev / Next */}
          {items.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
              >
                <ChevronRight className="size-5" />
              </button>
            </>
          )}

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Thumbnail strip */}
        <div className="flex items-center gap-2 p-3 bg-navy-950 overflow-x-auto" onClick={(e) => e.stopPropagation()}>
          <span className="text-[10px] font-bold uppercase tracking-widest text-navy-500 mr-1 flex-shrink-0">
            {idx + 1}/{items.length}
          </span>
          {items.map((thumb) => (
            <button
              key={thumb.id}
              onClick={() => onSelect(thumb)}
              className={`relative flex-shrink-0 w-14 h-10 rounded-lg overflow-hidden ring-2 transition-all duration-200 ${thumb.id === item.id ? "ring-brand-500 scale-105" : "ring-transparent opacity-60 hover:opacity-100 hover:ring-white/30"
                }`}
            >
              <Image src={thumb.url} alt={thumb.title} fill className="object-cover" sizes="56px" />
            </button>
          ))}
        </div>
      </m.div>
    </m.div>
  );
}

/* ─── Bento Gallery ─────────────────────────────────────────────── */

function BentoGallery({ items }: { items: MediaItem[] }) {
  const [selected, setSelected] = useState<MediaItem | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  return (
    <>
      <m.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 auto-rows-[80px] sm:auto-rows-[100px] lg:auto-rows-[110px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
        }}
      >
        {items.map((item, index) => (
          <m.div
            key={item.id}
            className={`relative overflow-hidden rounded-xl cursor-pointer group ${item.span}`}
            variants={{
              hidden: { y: 40, scale: 0.92, opacity: 0 },
              visible: {
                y: 0,
                scale: 1,
                opacity: 1,
                transition: { type: "spring", stiffness: 350, damping: 25, delay: index * 0.05 },
              },
            }}
            whileHover={{ scale: 1.02 }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.8}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setTimeout(() => setIsDragging(false), 80)}
            onClick={() => { if (!isDragging) setSelected(item); }}
          >
            <Image
              src={item.url}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105 "
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />

            {/* Hover overlay */}
            <m.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-white text-xs font-semibold leading-snug line-clamp-1">{item.title}</p>
                <p className="text-white/60 text-[10px] mt-0.5 line-clamp-2">{item.desc}</p>
              </div>
            </m.div>
          </m.div>
        ))}
      </m.div>

      <AnimatePresence>
        {selected && (
          <GalleryModal
            item={selected}
            items={items}
            onClose={() => setSelected(null)}
            onSelect={setSelected}
          />
        )}
      </AnimatePresence>
    </>
  );
}

/* ─── Page Component ────────────────────────────────────────────── */

export function SoftworksAugmentedContent() {
  const [activeId, setActiveId] = useState(SERVICES[0].id);
  const active = SERVICES.find((s) => s.id === activeId)!;

  return (
    <div className="bg-white">



      {/* ══ Overview + Fan Selector ═══════════════════════════════ */}
      <Section theme="white" spacing="none" className="py-10 lg:py-16">
        <Container size="2xl">
          {/* Overview copy */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-16">
            <div>
              <Reveal variants={scaleIn} className="mb-4">
                <span className="inline-flex items-center px-3.5 py-1 rounded-full border border-navy-200 text-[12px] font-semibold tracking-wide text-navy-600 bg-navy-50">
                  /Our Approach
                </span>
              </Reveal>
              <GSAPStaggerText
                text="Where capability meets community."
                className="font-display text-3xl sm:text-4xl font-bold text-navy-900 leading-tight"
                y={30}
              />
            </div>
            <Reveal variants={fadeInUp} className="lg:pt-10">
              <p className="text-navy-500 leading-relaxed">
                We don&apos;t just build structures — we invest in people. Every augmented programme is designed alongside our construction projects, creating lasting social value: skilled workers, healthier communities, and aligned stakeholders.
              </p>
            </Reveal>
          </div>

          {/* Fan accordion */}
          <Reveal variants={fadeInUp} className="mb-4">
            <p className="text-[11px] font-bold uppercase tracking-widest text-navy-400">
              Select a programme to explore its gallery
            </p>
          </Reveal>

          <div className="flex items-stretch gap-2 h-[400px] sm:h-[460px] w-full overflow-hidden rounded-2xl">
            {SERVICES.map((service) => {
              const isActive = activeId === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveId(service.id)}
                  className={`relative overflow-hidden rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] text-left ${isActive ? "flex-[3.5]" : "flex-[0.8] hover:flex-[1.1]"
                    }`}
                >
                  <Image
                    src={service.cover}
                    alt={service.shortTitle}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${isActive
                      ? "bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent"
                      : "bg-navy-950/55"
                      }`}
                  />

                  {/* Active label */}
                  {isActive && (
                    <m.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="absolute bottom-0 left-0 right-0 p-5"
                    >
                      <div className="h-[2px] w-8 bg-brand-400 rounded-full mb-3" />
                      <h3 className="text-white font-display font-bold text-base sm:text-lg leading-snug mb-2">
                        {service.shortTitle}
                      </h3>
                      <p className="text-white/60 text-xs leading-relaxed line-clamp-3 hidden sm:block">
                        {service.description}
                      </p>
                    </m.div>
                  )}

                  {/* Collapsed label — vertical */}
                  {!isActive && (
                    <div className="absolute inset-0 flex items-end justify-center pb-5">
                      <span
                        className="text-white/70 text-[11px] font-semibold tracking-wider"
                        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                      >
                        {service.shortTitle}
                      </span>
                    </div>
                  )}

                  {/* Active badge */}
                  {isActive && (
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 rounded-full bg-brand-500/20 border border-brand-400/40 text-brand-300 text-[10px] font-bold uppercase tracking-widest">
                        Viewing
                      </span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ══ Gallery ════════════════════════════════════════════════ */}
      <section className="bg-navy-50 py-20 lg:py-28w">
        <Container size="2xl">
          {/* Gallery header */}
          <div className="mb-10">
            <span className="text-[11px] font-bold uppercase tracking-widest text-brand-600 block mb-3">
              /Programme Gallery
            </span>
            <AnimatePresence mode="wait">
              <m.div
                key={activeId}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 leading-tight mb-3 max-w-2xl">
                  {active.title}
                </h2>
                <p className="text-navy-500 leading-relaxed max-w-2xl text-sm sm:text-base mb-6">
                  {active.description}
                </p>

                {/* Key features / points */}
                <m.div
                  key={activeId + "-points"}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-wrap gap-2"
                >
                  {active.points.map((point) => (
                    <span
                      key={point}
                      className="px-3 py-1 rounded-lg bg-white border border-navy-100 text-[11px] font-bold text-brand-600 uppercase tracking-wider shadow-sm"
                    >
                      • {point}
                    </span>
                  ))}
                </m.div>
              </m.div>
            </AnimatePresence>
          </div>

          {/* Bento grid */}
          <AnimatePresence mode="wait">
            <m.div
              key={activeId + "-gallery"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <BentoGallery items={active.images} />
            </m.div>
          </AnimatePresence>
        </Container>
      </section>

      {/* ══ CTA ════════════════════════════════════════════════════ */}
      <Section theme="brand" spacing="lg">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div>
              <Reveal variants={scaleIn} className="mb-5">
                <span className="inline-flex items-center px-3.5 py-1 rounded-full border border-white/20 text-[12px] font-semibold tracking-wide text-white bg-white/5">
                  Partner with us
                </span>
              </Reveal>
              <GSAPStaggerText
                text="Deliver augmented value on your next project."
                className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight"
                y={35}
                duration={0.85}
                stagger={0.04}
              />
            </div>

            <Reveal variants={fadeInUp}>
              <p className="text-navy-200 leading-relaxed mb-8 text-base">
                Need vocational training for your project workforce, community engagement facilitation, or health and hygiene outreach? Our augmented services team designs tailored programmes that create lasting community impact alongside every project.
              </p>
              <m.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="inline-block"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white hover:bg-brand-50 text-brand-600 font-bold text-sm tracking-wide transition-colors shadow-xl"
                >
                  Discuss a Programme
                  <m.svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </m.svg>
                </Link>
              </m.div>
            </Reveal>
          </div>
        </Container>
      </Section>

    </div>
  );
}
