"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";

interface Crumb {
  label: string;
  href?: string;
}

interface CollectionHeaderProps {
  title: string;
  description?: string;
  cover?: string;
  breadcrumbs: Crumb[];
  tag?: string;
}

export function CollectionHeader({
  title,
  description,
  breadcrumbs,
  tag,
}: CollectionHeaderProps) {
  return (
    <div className="bg-navy-950 pt-28 sm:pt-36 pb-10 sm:pb-14 border-b border-white/[0.07]">
      <Container>
        {/* Breadcrumb */}
        <motion.nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 mb-6 flex-wrap"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {i > 0 && (
                <ChevronRight className="size-3.5 text-white/25 flex-shrink-0" />
              )}
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="text-[12px] font-medium text-white/45 hover:text-gold-400 transition-colors uppercase tracking-[0.12em]"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[12px] font-medium text-white/70 uppercase tracking-[0.12em]">
                  {crumb.label}
                </span>
              )}
            </span>
          ))}
        </motion.nav>

        {/* Tag */}
        {tag && (
          <motion.p
            className="text-[11px] font-bold uppercase tracking-[0.26em] text-gold-500 mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            {tag}
          </motion.p>
        )}

        {/* Title */}
        <motion.h1
          className="font-display text-4xl sm:text-5xl font-bold text-white tracking-[-0.025em] leading-[1.05] max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>

        {/* Description */}
        {description && (
          <motion.p
            className="mt-4 text-white/55 text-base sm:text-lg max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            {description}
          </motion.p>
        )}
      </Container>
    </div>
  );
}
