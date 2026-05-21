import React, { useState } from "react";
import { Droplet, CircleOff, Waves, Thermometer, Wrench } from "lucide-react";
import siteConfig from "@/lib/siteConfig";
import useScrollReveal from "./useScrollReveal";
import { useLang, t } from "@/lib/LangContext";

const iconMap = {
  droplet: Droplet,
  "circle-off": CircleOff,
  waves: Waves,
  thermometer: Thermometer,
  wrench: Wrench,
};

export default function ProblemStrip() {
  const [selected, setSelected] = useState(null);
  const [ref, isVisible] = useScrollReveal(0.1);
  const { lang } = useLang();
  const tx = t[lang];

  return (
    <section id="problems" className="relative py-20 md:py-28 bg-hydraulic overflow-hidden" ref={ref}>
      {/* Subtle technical grid */}
      <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true">
        <svg width="100%" height="100%" className="w-full h-full">
          <defs>
            <pattern id="grid-p" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="hsl(38, 50%, 85%)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-p)" />
        </svg>
      </div>
      {/* Copper accent top border */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-copper/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        {/* Section header */}
        <div className={`mb-12 md:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-copper/60" />
            <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-water/50">
              {tx.problems.eyebrow}
            </span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl text-water font-medium">
            {tx.problems.title}
          </h2>
        </div>

        {/* Problem selector */}
        <div className="space-y-2">
          {siteConfig.problems.map((problem, index) => {
            const Icon = iconMap[problem.icon];
            const isOpen = selected === problem.id;

            return (
              <button
                key={problem.id}
                onClick={() => setSelected(isOpen ? null : problem.id)}
                className={`w-full text-left group transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <div
                  className={`border rounded-xl transition-all duration-300 ${
                    isOpen
                      ? "border-copper/35 bg-white/8"
                      : "border-water/10 hover:border-copper/20 hover:bg-white/4"
                  }`}
                >
                  <div className="flex items-center gap-4 md:gap-6 px-5 md:px-8 py-5">
                    {/* Icon */}
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-copper/20 text-copper"
                          : "bg-water/8 text-water/50 group-hover:text-water/70"
                      }`}
                    >
                      <Icon className="w-4.5 h-4.5" />
                    </div>

                    {/* Label */}
                    <span
                      className={`text-sm md:text-base font-medium tracking-wide flex-1 transition-colors duration-300 ${
                        isOpen ? "text-water" : "text-water/70 group-hover:text-water/90"
                      }`}
                    >
                      {problem.label}
                    </span>

                    {/* Indicator */}
                    <div
                      className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "border-copper bg-copper/20 rotate-45"
                          : "border-water/20 group-hover:border-copper/30"
                      }`}
                    >
                      <span
                        className={`block w-2.5 h-px transition-colors ${
                          isOpen ? "bg-copper" : "bg-water/30"
                        }`}
                      />
                      <span
                        className={`absolute block w-px h-2.5 transition-all ${
                          isOpen ? "bg-copper" : "bg-water/30"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Expanded advice */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 md:px-8 pb-5 pt-0">
                       <div className="pl-14 md:pl-16 border-l border-copper/25 ml-5">
                         <p className="text-sm text-water/70 leading-relaxed pl-4">
                          {problem.advice}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}