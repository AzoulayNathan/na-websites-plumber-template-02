import React from "react";
import { Phone, FileText } from "lucide-react";
import siteConfig from "@/lib/siteConfig";
import WaterRipple from "./WaterRipple";
import useScrollReveal from "./useScrollReveal";
import { useLang, t } from "@/lib/LangContext";

export default function FinalCTA() {
  const [ref, isVisible] = useScrollReveal(0.15);
  const { lang } = useLang();
  const tx = t[lang];

  return (
    <section id="contact" className="relative py-24 md:py-36 bg-hydraulic overflow-hidden" ref={ref}>
      {/* Pipe line animation echo */}
      <div className="absolute inset-0 pointer-events-none motion-reduce-hidden" aria-hidden="true">
        <svg viewBox="0 0 1200 400" className="absolute inset-0 w-full h-full" fill="none" preserveAspectRatio="xMidYMid slice">
          <path
            d="M -100 200 Q 200 150 400 200 T 800 180 Q 1000 160 1200 200"
            stroke="hsl(195, 30%, 90%)"
            strokeWidth="1"
            opacity="0.08"
            strokeDasharray="8 6"
          >
            <animate attributeName="stroke-dashoffset" values="0;-28" dur="4s" repeatCount="indefinite" />
          </path>
          <path
            d="M -100 250 Q 300 280 500 240 T 900 260 Q 1100 280 1300 250"
            stroke="hsl(38, 62%, 54%)"
            strokeWidth="1"
            opacity="0.06"
            strokeDasharray="6 8"
          >
            <animate attributeName="stroke-dashoffset" values="0;28" dur="5s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-5 md:px-8 text-center">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-copper/50" />
            <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-water/50">
              {tx.contact.eyebrow}
            </span>
            <div className="w-8 h-px bg-copper/50" />
          </div>

          {/* Title */}
          <h2 className="font-display text-3xl md:text-5xl text-water font-medium mb-6 leading-tight">
            {tx.contact.title}
            <br />
            <span className="italic">{tx.contact.titleItalic.replace("{city}", siteConfig.city)}</span>
          </h2>

          {/* Body */}
          <p className="text-base text-water/60 leading-relaxed max-w-lg mx-auto mb-10">
            {tx.contact.subtitle.replace("{name}", siteConfig.businessName)}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WaterRipple
              as="a"
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center justify-center gap-2.5 bg-copper text-porcelain px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-copper/90 transition-all duration-300 shadow-lg shadow-copper/25 animate-gentle-pulse"
            >
              <Phone className="w-4 h-4" />
              {tx.contact.cta1}
            </WaterRipple>

            <WaterRipple
              as="a"
              href={`mailto:${siteConfig.email}?subject=${tx.contact.cta2}`}
              className="inline-flex items-center justify-center gap-2.5 border-2 border-water/20 text-water px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:border-water/40 hover:bg-water/5 transition-all duration-300"
            >
              <FileText className="w-4 h-4" />
              {tx.contact.cta2}
            </WaterRipple>
          </div>

          {/* Contact info */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-water/40">
            <a href={`tel:${siteConfig.phone}`} className="hover:text-water/60 transition-colors">
              {siteConfig.phone}
            </a>
            <span className="hidden sm:block w-px h-3 bg-water/15" />
            <a href={`mailto:${siteConfig.email}`} className="hover:text-water/60 transition-colors">
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}