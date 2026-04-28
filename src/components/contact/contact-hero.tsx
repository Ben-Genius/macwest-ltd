import Image from "next/image";
import Link from "next/link";

export function ContactHero() {
  return (
    <section className="relative bg-white pt-[72px] sm:pt-[80px] overflow-hidden">
      {/* Inset rounded card — same pattern as home hero */}
      <div className="mx-3 sm:mx-4 overflow-hidden rounded-xl sm:rounded-[2rem] relative h-[42vh] sm:h-[48vh] md:h-[52vh]">

        {/* Background image */}
        <Image
          src="/images/contact/contact.jpg"
          alt="Contacts background"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Subtle bottom gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* ── Top-left: logo mark ─────────────────────────────── */}
        <div className="absolute top-6 left-7 sm:top-8 sm:left-10 z-10">
          <Image
            src="/images/cropped-Icon.png"
            alt="Macwest"
            width={32}
            height={32}
            className="brightness-0 invert opacity-90 object-contain"
          />
        </div>


        {/* ── Right-edge: vertical ghost text ────────────────── */}
        <div className="absolute right-0 top-0 bottom-0 z-10 flex items-center justify-center">
          <span
            className="block font-display font-bold text-white/20 select-none pointer-events-none tracking-tight"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              transform: "rotate(180deg)",
              fontSize: "clamp(4rem, 10vw, 7.5rem)",
              lineHeight: 1,
              paddingRight: "0.25rem",
            }}
          >
            Contacts
          </span>
        </div>

        {/* ── Bottom-right: breadcrumb pill ───────────────────── */}
        <div className="absolute bottom-0 right-0 sm:-bottom-1 sm:right-8 mt-6 z-10">
          <div className="inline-flex  items-center gap-2 rounded-md bg-white/90 backdrop-blur-sm px-4 py-3 text-[11px] font-medium text-navy-800 shadow-sm">
            <Link href="/" className="hover:text-brand-600 transition-colors duration-150">
              Home
            </Link>
            <span className="w-px h-3 bg-navy-300" />
            <span className="text-navy-500">Contacts</span>
          </div>
        </div>

      </div>
    </section>
  );
}
