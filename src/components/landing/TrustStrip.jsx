import React from "react";
import { Eye, ShieldCheck, BellOff, Receipt } from "lucide-react";
import siteConfig from "@/lib/siteConfig";
import useScrollReveal from "./useScrollReveal";
import CopperLine from "./CopperLine";
import { useLang, t } from "@/lib/LangContext";

const icons = [Eye, ShieldCheck, BellOff, Receipt];

export default function TrustStrip() {
  const [ref, isVisible] = useScrollReveal(0.12);
  const { lang } = useLang();
  const tx = t[lang];

  return (
    <section className="relative py-20 md:py-28 bg-cream overflow-hidden" ref={ref}>
      {/* Warm paper texture */}
      <div className="absolute inset-0 paper-texture pointer-events-none opacity-60" aria-hidden="true" />

      {/* Faint joint schema background */}
      <div className="absolute top-0 right-0 w-72 h-72 pointer-events-none opacity-[0.035]" aria-hidden="true">
        <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
          <circle cx="100" cy="100" r="80" stroke="hsl(28, 55%, 48%)" strokeWidth="2" />
          <circle cx="100" cy="100" r="55" stroke="hsl(28, 55%, 48%)" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="30" stroke="hsl(28, 55%, 48%)" strokeWidth="1" />
          <line x1="20" y1="100" x2="180" y2="100" stroke="hsl(28, 55%, 48%)" strokeWidth="1.5" />
          <line x1="100" y1="20" x2="100" y2="180" stroke="hsl(28, 55%, 48%)" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8">
        {/* Section header */}
        <div className={`mb-14 md:mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-copper" />
            <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-muted-foreground">
              {tx.trust.eyebrow}
            </span>
          </div>
          <h2 className="font-display text-2xl md:text-4xl text-graphite font-medium leading-tight max-w-md">
            {tx.trust.title}<br />
            <span className="italic text-hydraulic">{tx.trust.titleItalic}</span>
          </h2>
        </div>

        {/* Trust points — 2×2 grid */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {siteConfig.trustPoints.map((point, index) => {
            const Icon = icons[index] || Eye;
            const humanLabel = (tx.trust.labels || [])[index];
            return (
              <div
                key={index}
                className={`group relative p-7 md:p-8 rounded-xl border border-border/60 bg-porcelain/70 hover:bg-porcelain hover:border-copper/25 hover:shadow-md hover:shadow-copper/5 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 120 + 200}ms` }}
              >
                {/* Icon + human label */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-copper/10 group-hover:bg-copper/18 flex items-center justify-center transition-colors duration-400">
                    <Icon className="w-4 h-4 text-copper" />
                  </div>
                  <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-copper/70 group-hover:text-copper leading-tight pt-1.5 transition-colors duration-300">
                    {humanLabel}
                  </p>
                </div>

                {/* Title */}
                <h3 className="text-base md:text-lg font-semibold text-graphite mb-2 group-hover:text-hydraulic transition-colors duration-300 leading-snug">
                  {point.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {point.description}
                </p>

                {/* Decorative corner pipe cap */}
                <div className="absolute bottom-4 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="8" stroke="hsl(28, 55%, 48%)" strokeWidth="1.5" opacity="0.4" />
                    <circle cx="10" cy="10" r="4" fill="hsl(28, 55%, 48%)" opacity="0.2" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        <CopperLine className="mt-16 md:mt-20" />
      </div>
    </section>
  );
}