"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Language, SiteContent } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type NavLink = {
  label: string;
  href: string;
};

type NavbarProps = {
  lang: Language;
  t: SiteContent;
  onToggleLanguage: () => void;
  links?: NavLink[];
  brandHref?: string;
};

export default function Navbar({ lang, t, onToggleLanguage, links, brandHref = "#top" }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = useMemo(
    () =>
      links ?? [
        { label: t.nav.story, href: "#story" },
        { label: t.nav.projects, href: "#projects" },
        { label: t.nav.process, href: "#process" },
        { label: t.nav.highlights, href: "#highlights" },
        { label: t.nav.contact, href: "#contact" }
      ],
    [links, t]
  );

  const flag = lang === "pt" ? "\uD83C\uDDFA\uD83C\uDDF8" : "\uD83C\uDDE7\uD83C\uDDF7";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 border-b border-transparent transition-all duration-300",
        scrolled && "border-[rgba(255,255,255,0.06)] bg-[rgba(10,15,25,0.65)] backdrop-blur-[12px]"
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href={brandHref} className="focus-ring rounded-md text-sm uppercase tracking-[0.2em] text-white/92">
          {t.person.name}
        </Link>
        <div className="flex items-center gap-2 sm:gap-5">
          <div className="hidden items-center gap-5 sm:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-label={link.label}
                className="focus-ring rounded-md px-2 py-1 text-xs uppercase tracking-[0.2em] text-white/72 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <button
            type="button"
            onClick={onToggleLanguage}
            aria-label={t.nav.languageAria}
            className="focus-ring rounded-full border border-white/20 bg-white/[0.06] px-3 py-1 text-sm transition-colors duration-200 hover:bg-white/[0.12]"
          >
            {flag}
          </button>
        </div>
      </nav>
    </header>
  );
}
