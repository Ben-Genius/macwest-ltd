import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import { mainNav, secondaryRoutes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { GSAPReveal } from "@/components/ui/gsap-reveal";

const certifications = [
  { label: "ISO 45001:2018", sub: "Occupational Health & Safety" },
  { label: "ISO 9001:2015", sub: "Quality Management" },
  { label: "ISO 14001:2015", sub: "Environmental Management" },
];

const socials = [
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
  { icon: FaXTwitter, href: "#", label: "Twitter" },
  { icon: FaGithub, href: "#", label: "Github" },
];

type SiteFooterProps = { className?: string };

export function SiteFooter({ className }: SiteFooterProps) {
  return (
    <footer
      className={cn(
        "bg-navy-950 text-white border-t border-white/5 relative overflow-hidden",
        className,
      )}
    >
      {/* Decorative Blueprint Background Element */}
      <div className="absolute top-0 right-0 w-[600px] h-full opacity-[0.03] pointer-events-none select-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <line x1="0" y1="0" x2="100" y2="100" stroke="white" strokeWidth="0.1" />
          <line x1="100" y1="0" x2="0" y2="100" stroke="white" strokeWidth="0.1" />
          <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.1" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pt-20 pb-12 relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_0.8fr_0.8fr_1.2fr]">

          {/* Brand column */}
          <GSAPReveal delay={0.1} y={20}>
            <div className="space-y-8">
              <Link href="/" className="inline-block group">
                <Image
                  src="/images/logo_1.png"
                  alt="Macwest Logo"
                  width={140}
                  height={40}
                  className="h-9 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition-all"
                />
              </Link>

              <p className="text-sm text-white/50 leading-relaxed max-w-[300px] font-medium">
                Macwest Limited: Ghana&apos;s leader in certified civil engineering,
                housing estates, and industrial infrastructure since 2011.
              </p>

              {/* Socials */}
              <div className="flex items-center gap-4">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="size-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-600 hover:border-brand-600 transition-all group"
                    aria-label={label}
                  >
                    <Icon className="size-4.5 text-white/60 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </GSAPReveal>

          {/* Navigation */}
          <GSAPReveal delay={0.2} y={20}>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/30 mb-8">
                Navigate
              </p>
              <ul className="space-y-4">
                {mainNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[13px] font-bold uppercase tracking-wider text-white/60 hover:text-brand-400 transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </GSAPReveal>

          {/* Company */}
          <GSAPReveal delay={0.3} y={20}>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/30 mb-8">
                Expertise
              </p>
              <ul className="space-y-4">
                {secondaryRoutes.map((r) => (
                  <li key={r.href}>
                    <Link
                      href={r.href}
                      className="text-[13px] font-semibold text-white/60 hover:text-brand-400 transition-colors duration-200"
                    >
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </GSAPReveal>

          {/* Contact & Certs */}
          <GSAPReveal delay={0.4} y={20}>
            <div className="space-y-10">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/30 mb-8">
                  Contact Office
                </p>
                <div className="space-y-4">
                  <a href={`mailto:${siteConfig.company.email}`} className="flex items-center gap-3 group text-white/60 hover:text-white transition-colors">
                    <Mail className="size-4 text-brand-500" />
                    <span className="text-[13px] font-medium">{siteConfig.company.email}</span>
                  </a>
                  <a href={`tel:${siteConfig.company.phoneDisplay.replace(/\s/g, "")}`} className="flex items-center gap-3 group text-white/60 hover:text-white transition-colors">
                    <Phone className="size-4 text-brand-500" />
                    <span className="text-[13px] font-medium">{siteConfig.company.phoneDisplay}</span>
                  </a>
                  <div className="flex items-start gap-3 text-white/60">
                    <MapPin className="size-4 text-brand-500 mt-0.5 shrink-0" />
                    <span className="text-[13px] font-medium leading-relaxed">
                      {siteConfig.company.addressLine}
                    </span>
                  </div>
                </div>
              </div>

              {/* Mini Certs List */}
              <div className="space-y-2 pt-6 border-t border-white/5">
                {certifications.map(({ label }) => (
                  <div key={label} className="flex items-center gap-2">
                    <div className="size-1 rounded-full bg-brand-500" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </GSAPReveal>
        </div>
      </div>

      <Separator className="bg-white/5" />

      {/* Bottom bar */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6 opacity-40">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} {siteConfig.name} &middot; RC NO. CA-89,951
        </p>
        <div className="flex items-center gap-6">
          <Link href="/privacy-policy" className="text-[10px] font-bold uppercase tracking-widest hover:text-brand-400">Privacy Policy</Link>
          <Link href="/terms" className="text-[10px] font-bold uppercase tracking-widest hover:text-brand-400">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
