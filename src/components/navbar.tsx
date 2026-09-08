"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useLanguage, useTranslation } from "@/lib/language-context";
import { NAV_PAGE_KEYS, ROUTES } from "@/lib/routes";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = useTranslation();
  const pathname = usePathname();
  const labelForKey = {
    services: t.navbar.services,
    company: t.navbar.company,
    portfolio: t.navbar.portfolio,
    blog: t.navbar.blog,
    contact: t.navbar.contact,
  } as const;
  const items = NAV_PAGE_KEYS.map((key) => ({
    label: labelForKey[key as keyof typeof labelForKey],
    href: ROUTES[key],
  }));
  // "/servicos" should stay active on its own sub-pages (the 3 service-detail
  // routes) too, not just on an exact match.
  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname?.startsWith(href + "/"));
  return (
    <header className="site-header">
      <nav
        aria-label={
          language === "en" ? "Main navigation" : "Navegação principal"
        }
      >
        <Link href={ROUTES.home} className="brand" aria-label="Idealisa">
          <span className="brand-badge">
            <img src="/idealisa-logo.png" alt="" width={24} height={24} />
          </span>
          <span translate="no">
            Id<span className="text-[#F6C744]">e</span>alisa
          </span>
        </Link>
        <div className="desktop-links">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="nav-actions">
          <div className="language-toggle">
            {(["pt-AO", "en"] as const).map((locale) => (
              <button
                key={locale}
                type="button"
                aria-pressed={language === locale}
                onClick={() => setLanguage(locale)}
              >
                {locale === "en" ? "EN" : "PT"}
              </button>
            ))}
          </div>
          <button
            className="menu-toggle"
            type="button"
            aria-label={language === "en" ? "Menu" : "Menu de navegação"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      {open && (
        <div id="mobile-navigation" className="mobile-navigation">
          {items.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
