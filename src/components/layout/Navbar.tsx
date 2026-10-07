"use client";

import Link from "next/link";
import { useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import Container from "@/components/layout/Container";
import ThemeToggle from "@/components/ui/ThemeToggle";
import type { PortfolioContent } from "@/types/portfolio";

export default function Navbar({
  content,
}: {
  content: Pick<PortfolioContent, "nav" | "locale">;
}) {
  const [open, setOpen] = useState(false);
  const { nav, locale } = content;
  const links = [
    { href: "#about", label: nav.about },
    { href: "#experience", label: nav.experience },
    { href: "#projects", label: nav.projects },
  ];

  return (
    <header className="site-header">
      <Container className="nav-container">
        <a className="brand" href="#home" aria-label="Kenny Zhu">
          <span className="brand-symbol" aria-hidden="true">
            k<span>.</span>
          </span>
          <span className="brand-name">
            Kenny Zhu
          </span>
        </a>
        <nav className="desktop-nav" aria-label={nav.label}>
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <div
            className="language-switch"
            aria-label={locale === "en" ? "Language" : "Idioma"}
          >
            <Link
              href="/en"
              lang="en"
              hrefLang="en"
              aria-label="English"
              aria-current={locale === "en" ? "page" : undefined}
              className={locale === "en" ? "selected" : ""}
              onClick={() => setOpen(false)}
            >
              EN
            </Link>
            <Link
              href="/es"
              lang="es"
              hrefLang="es"
              aria-label="Español"
              aria-current={locale === "es" ? "page" : undefined}
              className={locale === "es" ? "selected" : ""}
              onClick={() => setOpen(false)}
            >
              ES
            </Link>
          </div>
          <ThemeToggle lightLabel={nav.lightMode} darkLabel={nav.darkMode} />
          <a className="nav-contact" href="#contact">
            {nav.contact} <FiArrowUpRight aria-hidden="true" />
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={open ? nav.close : nav.menu}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </Container>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label={nav.label}
        hidden={!open}
        onKeyDown={(event) => {
          if (event.key === "Escape") setOpen(false);
        }}
      >
        {[...links, { href: "#contact", label: nav.contact }].map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
            <FiArrowUpRight aria-hidden="true" />
          </a>
        ))}
      </nav>
    </header>
  );
}
