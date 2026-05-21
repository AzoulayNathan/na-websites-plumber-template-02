import React from "react";
import siteConfig from "@/lib/siteConfig";
import useScrollReveal from "./useScrollReveal";
import { useLang, t } from "@/lib/LangContext";

export default function InterventionPath() {
  const [ref, isVisible] = useScrollReveal(0.1);
  const { lang } = useLang();
  const tx = t[lang];

  return (
    <section id="process" className="relative py-20 md:py-32 bg-hydraulic overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Section header */}
        <div className={`mb-16 md:mb-24 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-amber" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-water/50">
              {tx.process.eyebrow}
            </span>
          </div>
          <h2 className="font-display text-2xl md:text-4xl text-water font-medium max-w-md">
            {tx.process.title}
          </h2>
        </div>

        {/* Desktop: horizontal pipe timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Pipe line */}
            <div className="absolute top-6 left-0 right-0 h-px bg-water/15" aria-hidden="true">
              <div
                className={`h-full bg-amber/30 transition-all duration-[2s] ease-out motion-reduce-hidden ${
                  isVisible ? "w-full" : "w-0"
                }`}
              />
            </div>

            <div className="grid grid-cols-5 gap-4">
              {siteConfig.steps.map((step, index) => (
                <div
                  key={index}
                  className={`relative transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${index * 200 + 400}ms` }}
                >
                  {/* Node */}
                  <div className="relative mb-8">
                    <div className="w-12 h-12 rounded-full border-2 border-water/20 bg-hydraulic flex items-center justify-center relative z-10">
                      <span className="text-xs font-mono text-amber font-medium">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <h4 className="text-sm font-semibold text-water mb-2">{step.title}</h4>
                  <p className="text-xs text-water/50 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden">
          <div className="relative pl-10">
            {/* Vertical pipe */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-water/15" aria-hidden="true" />

            <div className="space-y-10">
              {siteConfig.steps.map((step, index) => (
                <div
                  key={index}
                  className={`relative transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 150 + 200}ms` }}
                >
                  {/* Node */}
                  <div className="absolute -left-10 top-0 w-8 h-8 rounded-full border-2 border-water/20 bg-hydraulic flex items-center justify-center">
                    <span className="text-[10px] font-mono text-amber font-medium">{step.number}</span>
                  </div>

                  <h4 className="text-sm font-semibold text-water mb-1">{step.title}</h4>
                  <p className="text-xs text-water/50 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}