import React from "react";
import siteConfig from "@/lib/siteConfig";
import { useLang, t } from "@/lib/LangContext";

export default function Footer() {
  const { lang } = useLang();
  const tx = t[lang];
  return (
    <footer className="bg-graphite py-12 md:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-full border-2 border-water/30 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-water/40" />
              </div>
              <span className="font-body font-semibold text-sm tracking-wide text-water/80">
                {siteConfig.businessName}
              </span>
            </div>
            <p className="text-xs text-water/30 leading-relaxed max-w-xs">
              {tx.footer.tagline}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-water/40 mb-4">
              Contact
            </h4>
            <div className="space-y-2.5">
              <a href={`tel:${siteConfig.phone}`} className="block text-sm text-water/60 hover:text-water/80 transition-colors">
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="block text-sm text-water/60 hover:text-water/80 transition-colors">
                {siteConfig.email}
              </a>
            </div>
          </div>

          {/* Areas */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-water/40 mb-4">
              {tx.footer.serviceAreas}
            </h4>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5">
              {siteConfig.serviceAreas.map((area, i) => (
                <span key={i} className="text-sm text-water/50">{area}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-water/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-water/25">
            © {new Date().getFullYear()} {siteConfig.businessName}. {tx.footer.rights}
          </p>
          <p className="text-[11px] text-water/20">
            Template: SOS Ligne Claire
          </p>
        </div>
      </div>
    </footer>
  );
}