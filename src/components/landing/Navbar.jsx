import React, { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import siteConfig from "@/lib/siteConfig";
import WaterRipple from "./WaterRipple";
import { useLang, t } from "@/lib/LangContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang } = useLang();
  const tx = t[lang].nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: tx.problems, href: "#problems" },
    { label: tx.services, href: "#services" },
    { label: tx.process, href: "#process" },
    { label: tx.area, href: "#area" },
    { label: tx.contact, href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/96 backdrop-blur-md shadow-sm border-b border-border/70"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo — goutte d'eau stylisée */}
          <a href="#" className="flex items-center gap-2.5 group">
            <svg viewBox="0 0 36 36" className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              {/* Drop shape */}
              <path d="M18 4 C18 4 8 16 8 22 C8 27.5 12.5 32 18 32 C23.5 32 28 27.5 28 22 C28 16 18 4 18 4Z" fill="hsl(198,52%,22%)" />
              {/* Inner highlight */}
              <path d="M18 9 C18 9 12 18 12 22 C12 25.3 14.7 28 18 28 C21.3 28 24 25.3 24 22 C24 18 18 9 18 9Z" fill="hsl(198,52%,32%)" opacity="0.6" />
              {/* Copper pipe ring at base */}
              <ellipse cx="18" cy="28" rx="6" ry="2" fill="hsl(28,55%,48%)" opacity="0.7" />
              {/* Shine */}
              <ellipse cx="15" cy="17" rx="1.5" ry="3" fill="white" opacity="0.18" transform="rotate(-15 15 17)" />
            </svg>
            <span className="font-body font-semibold text-sm tracking-wide text-graphite">
              {siteConfig.businessName}
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium tracking-widest uppercase text-muted-foreground hover:text-graphite transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Lang switcher + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language toggle */}
            <div className="relative flex items-center bg-muted/70 rounded-full px-1 py-1 border border-border/60">
              {["fr","en","es"].map(l => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide transition-all duration-300 ${lang === l ? "bg-copper text-porcelain shadow-sm" : "text-muted-foreground hover:text-graphite"}`}
                  aria-label={`Switch to ${l}`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            <WaterRipple
              as="a"
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 bg-hydraulic text-porcelain px-5 py-2.5 rounded-full text-sm font-medium hover:bg-hydraulic/90 transition-all duration-300 shadow-sm animate-pulse-glow"
            >
              <Phone className="w-3.5 h-3.5" />
              {siteConfig.phone}
            </WaterRipple>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-graphite"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream/98 backdrop-blur-md border-t border-border/60">
          <div className="px-5 py-6 space-y-4">
            {/* Mobile lang toggle */}
            <div className="flex items-center gap-2 pb-2 border-b border-border/40">
              <span className="text-xs text-muted-foreground">Langue · Language</span>
              <div className="ml-auto flex items-center bg-muted/70 rounded-full px-1 py-1 border border-border/60">
                {["fr","en","es"].map(l => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all duration-300 ${lang === l ? "bg-copper text-porcelain" : "text-muted-foreground"}`}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-sm font-medium tracking-wide text-graphite hover:text-copper transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 bg-hydraulic text-porcelain px-5 py-3 rounded-full text-sm font-semibold justify-center mt-4 shadow-md shadow-hydraulic/10"
            >
              <Phone className="w-4 h-4" />
              {tx.call} {siteConfig.businessName}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}