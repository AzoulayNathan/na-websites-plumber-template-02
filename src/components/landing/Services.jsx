import React, { useState } from "react";
import { Search, Wrench, RefreshCw, PackagePlus, CheckCircle, Layers } from "lucide-react";
import siteConfig from "@/lib/siteConfig";
import useScrollReveal from "./useScrollReveal";
import CopperLine from "./CopperLine";
import { useLang, t } from "@/lib/LangContext";

const gestureIcons = [Search, Wrench, RefreshCw, PackagePlus, CheckCircle, Layers];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [ref, isVisible] = useScrollReveal(0.08);
  const { lang } = useLang();
  const tx = t[lang];

  return (
    <section id="services" className="relative py-20 md:py-32 bg-porcelain overflow-hidden" ref={ref}>
      {/* Very subtle ceramic dot pattern */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="ceramic-dots" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="16" cy="16" r="1" fill="hsl(28, 30%, 72%)" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ceramic-dots)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className={`mb-14 md:mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-copper" />
            <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-muted-foreground">
              {tx.services.eyebrow}
            </span>
          </div>
          <h2 className="font-display text-2xl md:text-4xl text-graphite font-medium mb-3 max-w-lg leading-tight">
            {tx.services.title.replace("{name}", siteConfig.businessName)}
          </h2>
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
            {tx.services.subtitle}
          </p>
        </div>

        {/* Services grid — workshop cards */}
        <div className="grid sm:grid-cols-2 gap-0 border border-border/60 rounded-xl overflow-hidden shadow-sm">
          {siteConfig.services.map((service, index) => {
            const Icon = gestureIcons[index] || Search;
            const gesture = (tx.services.gestureLabels || [])[index] || "—";
            const isHovered = hoveredIndex === index;
            const isLast = index === siteConfig.services.length - 1;
            const isSecondLast = index === siteConfig.services.length - 2;
            const isRightCol = index % 2 === 1;

            return (
              <div
                key={service.id}
                className={`relative group p-7 md:p-9 bg-porcelain transition-all duration-400 cursor-default
                  ${isRightCol ? "sm:border-l border-border/60" : ""}
                  ${index < siteConfig.services.length - 2 ? "border-b border-border/60" : ""}
                  ${isHovered ? "bg-cream" : "hover:bg-cream/70"}
                `}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  transitionDelay: `${index * 80}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "none" : "translateY(16px)",
                  transition: `opacity 0.6s ease ${index * 80 + 200}ms, transform 0.6s ease ${index * 80 + 200}ms, background-color 0.3s ease`,
                }}
              >
                {/* Copper hover accent — left border */}
                <div
                  className={`absolute left-0 top-6 bottom-6 w-0.5 rounded-full transition-all duration-500 ${
                    isHovered ? "bg-copper opacity-70" : "bg-transparent"
                  }`}
                />

                {/* Workshop gesture label */}
                <div className="flex items-center gap-2.5 mb-5">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-400 ${
                    isHovered ? "bg-copper/15" : "bg-muted/60"
                  }`}>
                    <Icon className={`w-4 h-4 transition-colors duration-400 ${
                      isHovered ? "text-copper" : "text-muted-foreground"
                    }`} />
                  </div>
                  <span className={`text-[10px] font-semibold tracking-[0.22em] uppercase transition-colors duration-400 ${
                    isHovered ? "text-copper" : "text-muted-foreground/60"
                  }`}>
                    {gesture}
                  </span>
                </div>

                {/* Service title */}
                <h3 className={`font-display text-lg md:text-xl text-graphite mb-3 font-medium leading-snug transition-colors duration-300 ${
                  isHovered ? "text-hydraulic" : ""
                }`}>
                  {service.title}
                </h3>

                {/* Client-facing perspective */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.perspective}
                </p>

                {/* Hover detail — artisan note */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  isHovered ? "max-h-16 opacity-100" : "max-h-0 opacity-0"
                }`}>
                  <div className="flex items-start gap-2 pt-4 border-t border-copper/12">
                    <span className="text-copper mt-0.5 flex-shrink-0">→</span>
                    <p className="text-xs text-copper/80 leading-relaxed italic">
                      {service.detail}
                    </p>
                  </div>
                </div>

                {/* Copper pipe segment — hover decoration */}
                <div className={`absolute bottom-4 right-4 transition-all duration-500 ${
                  isHovered ? "opacity-40" : "opacity-0"
                }`} aria-hidden="true">
                  <svg width="32" height="8" viewBox="0 0 32 8" fill="none">
                    <rect x="0" y="2" width="28" height="4" rx="2" fill="hsl(28, 55%, 48%)" />
                    <circle cx="30" cy="4" r="3" fill="hsl(28, 50%, 42%)" />
                    <circle cx="30" cy="4" r="1.5" fill="hsl(28, 60%, 62%)" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        {/* Copper thread separator */}
        <CopperLine className="mt-16 md:mt-20" />
      </div>
    </section>
  );
}