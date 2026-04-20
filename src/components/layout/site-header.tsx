"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { m, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { mainNav } from "@/config/routes";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/animations";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const hoverLeaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const inactivityTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropdownLeaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setIsHovered(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  /* Auto-close bottom expansion after 4s of no interaction */
  useEffect(() => {
    if (isHovered) {
      inactivityTimer.current = setTimeout(() => setIsHovered(false), 4000);
      return () => {
        if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
      };
    }
  }, [isHovered]);

  const handleHoverEnter = () => {
    if (hoverLeaveTimer.current) clearTimeout(hoverLeaveTimer.current);
    if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
    if (scrolled) setIsHovered(true);
  };

  const handleHoverLeave = () => {
    if (scrolled) {
      hoverLeaveTimer.current = setTimeout(() => setIsHovered(false), 250);
    }
  };

  const handleDropdownEnter = (label: string) => {
    if (dropdownLeaveTimer.current) clearTimeout(dropdownLeaveTimer.current);
    setOpenDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownLeaveTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          "fixed z-[400] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] w-full flex flex-col items-center px-4",
          scrolled ? "bottom-8" : "top-8"
        )}
      >
        <div
          className="relative flex flex-col items-center"
          onMouseEnter={handleHoverEnter}
          onMouseLeave={handleHoverLeave}
        >
          {/* Expansion menu — only when scrolled + hovered */}
          <AnimatePresence>
            {scrolled && isHovered && (
              <m.div
                initial={{ opacity: 0, y: 12, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.96 }}
                transition={{ duration: 0.2, ease: EASE.outExpo }}
                className="mb-3 w-[260px] bg-white shadow-elevated border border-brand-100 rounded-xl overflow-hidden flex flex-col p-2 z-50 pointer-events-auto"
              >
                <div className="max-h-[280px] overflow-y-auto pr-1 space-y-0.5">
                  {mainNav.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={cn(
                        "flex items-center justify-between px-3 py-2.5 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all",
                        isActive(item.href)
                          ? "bg-brand-50 text-brand-600"
                          : "text-navy-700 hover:bg-sand-50 hover:text-brand-600"
                      )}
                    >
                      {item.label}
                      <ArrowRight className="size-3 opacity-30" />
                    </Link>
                  ))}
                </div>
              </m.div>
            )}
          </AnimatePresence>

          {/* Invisible bridge so mouse can travel from pill up to expansion */}
          {scrolled && (
            <div className="absolute bottom-full left-0 right-0 h-4 z-50" />
          )}

          <div className="flex items-center gap-2 md:gap-3 transition-all duration-700">

            {/* Main nav pill */}
            <div className={cn(
              "bg-white/95 backdrop-blur-md border border-brand-100 rounded-xl p-3 flex items-center   transition-all duration-700 overflow-hidden shadow-elevated",
              scrolled ? "w-auto" : "w-full max-w-6xl"
            )}>

              {/* Logo — full wordmark when at top, icon-only when scrolled to bottom */}
              <Link
                href="/"
                className="flex items-center gap-2 px-2 sm:px-3 flex-shrink-0 group"
                aria-label="Macwest Limited — home"
              >
                {scrolled ? (
                  <Image
                    src="/images/cropped-Icon_1.png"
                    alt="Macwest"
                    width={36}
                    height={36}
                    className="size-8 object-contain transition-transform group-hover:scale-105"
                    priority
                  />
                ) : (
                  <Image
                    src="/images/logo_1.png"
                    alt="Macwest"
                    width={110}
                    height={32}
                    className="h-6 sm:h-7 w-auto object-contain transition-transform group-hover:scale-105"
                    priority
                  />
                )}
              </Link>

              {/* Divider */}
              {!scrolled && <div className="w-px h-5 bg-navy-100 mx-2 hidden lg:block" />}

              {/* Center links (only when not scrolled, desktop) */}
              <div
                className={cn(
                  "hidden lg:flex items-center transition-all duration-500 ease-out overflow-hidden gap-0.5",
                  !scrolled ? "w-auto opacity-100 pr-2" : "w-0 opacity-0 pointer-events-none"
                )}
              >
                {!scrolled && mainNav.map((item) => {
                  const hasChildren = item.children && item.children.length > 0;
                  return (
                    <div
                      key={item.label}
                      className="relative group/navitem flex items-center justify-center h-9"
                      onMouseEnter={() => hasChildren && handleDropdownEnter(item.label)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      {hasChildren ? (
                        <button
                          className={cn(
                            "flex items-center gap-1 px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-colors whitespace-nowrap",
                            isActive(item.href) ? "text-brand-600 bg-brand-50" : "text-navy-600 hover:text-brand-600 hover:bg-sand-50"
                          )}
                        >
                          {item.label}
                          <ChevronDown className={cn("size-3 transition-transform duration-200 opacity-60", openDropdown === item.label && "rotate-180")} />
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          className={cn(
                            "flex items-center px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-colors whitespace-nowrap",
                            isActive(item.href) ? "text-brand-600 bg-brand-50" : "text-navy-600 hover:text-brand-600 hover:bg-sand-50"
                          )}
                        >
                          {item.label}
                        </Link>
                      )}

                      {/* Desktop dropdown */}
                      <AnimatePresence>
                        {hasChildren && openDropdown === item.label && (
                          <m.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.95 }}
                            transition={{ duration: 0.18, ease: EASE.spring }}
                            className="absolute top-full mt-3 left-1/2 -translate-x-1/2 min-w-[180px] rounded-xl bg-white border border-brand-100 shadow-floating p-1.5 z-50 flex flex-col gap-0.5"
                            onMouseEnter={() => handleDropdownEnter(item.label)}
                            onMouseLeave={handleDropdownLeave}
                          >
                            <div className="max-h-[220px] overflow-y-auto pr-1 custom-scrollbar">
                              {item.children!.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="flex flex-col items-start px-3 py-2 rounded-lg hover:bg-sand-50 transition-colors duration-150 group/child"
                                >
                                  <span className="text-[11px] font-bold text-navy-700 group-hover/child:text-brand-600 transition-colors uppercase tracking-wide">
                                    {child.label}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </m.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Right-side links: always About Us arrow; + Services & Projects when scrolled */}
              <div className={cn(
                "hidden lg:flex items-center gap-1 border-l border-navy-100 ml-1 transition-all",
                scrolled ? "pl-2 pr-1" : "pl-3 pr-2"
              )}>
                {/* Extra links shown ONLY in bottom-pill (scrolled) state */}
                {scrolled && (
                  <>
                    <Link
                      href="/services"
                      className={cn(
                        "flex items-center px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-colors whitespace-nowrap",
                        isActive("/services") ? "text-brand-600 bg-brand-50" : "text-navy-600 hover:text-brand-600 hover:bg-sand-50"
                      )}
                    >
                      Services
                    </Link>
                    <Link
                      href="/projects"
                      className={cn(
                        "flex items-center px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-colors whitespace-nowrap",
                        isActive("/projects") ? "text-brand-600 bg-brand-50" : "text-navy-600 hover:text-brand-600 hover:bg-sand-50"
                      )}
                    >
                      Projects
                    </Link>
                    <div className="w-px h-4 bg-navy-100 mx-1" />
                  </>
                )}
                <Link
                  href="/about-us"
                  className="flex items-center px-2 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider text-navy-500 hover:text-brand-600 hover:bg-sand-50 transition-all group/link"
                >
                  {!scrolled && <span className="mr-1">About Us</span>}
                  <ArrowRight className={cn("size-3 opacity-50 transition-transform", !scrolled && "group-hover/link:translate-x-0.5")} />
                </Link>
              </div>

              {/* Mobile menu toggle */}
              <div className="lg:hidden flex items-center pr-1 ml-auto">
                <button
                  type="button"
                  aria-label={mobileOpen ? "Close menu" : "Open menu"}
                  aria-expanded={mobileOpen}
                  onClick={() => setMobileOpen(!mobileOpen)}
                  className="flex items-center justify-center size-9 rounded-lg bg-sand-50 hover:bg-sand-100 border border-navy-100 text-navy-900 transition-colors"
                >
                  {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
                </button>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-brand-600 rounded-xl  flex items-center p-3  shadow-brand hover:bg-brand-700 transition-colors">
              <Link
                href="/contact"
                className="flex items-center gap-2 px-3 h-full rounded-lg group transition-all"
              >
                <span className="text-[11px] font-bold uppercase tracking-widest text-white ml-1">Contact</span>
                <div className="size-7 sm:size-9 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center text-white group-hover:scale-105 transition-all">
                  <ArrowRight className="size-3.5 sm:size-4" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <m.div
            initial={{ opacity: 0, y: scrolled ? "100%" : "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: scrolled ? "100%" : "-100%" }}
            transition={{ duration: 0.4, ease: EASE.outExpo }}
            className={cn(
              "fixed inset-0 z-[390] bg-white lg:hidden h-svh w-screen overflow-y-auto",
              scrolled ? "pb-32 pt-10 px-6" : "pt-32 pb-10 px-6"
            )}
          >
            <div className="flex flex-col h-full gap-8 max-w-lg mx-auto">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/logo_1.png"
                  alt="Macwest"
                  width={130}
                  height={40}
                  className="h-8 w-auto"
                />
              </div>

              <nav className="flex-1 space-y-4 mt-6">
                {mainNav.map((item) => (
                  <div key={item.label} className="border-b border-navy-50 pb-4">
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "flex items-center py-2 text-2xl font-display font-bold tracking-tight transition-colors uppercase",
                        isActive(item.href) ? "text-brand-600" : "text-navy-900 hover:text-brand-600"
                      )}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="grid grid-cols-1 gap-2 mt-3 pl-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center py-2.5 px-4 rounded-lg text-[13px] font-bold uppercase tracking-wider text-navy-500 bg-sand-50 hover:bg-sand-100 hover:text-brand-600 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
