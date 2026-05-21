import React from "react";
import { ShieldAlert, Zap, Ban, CircleAlert, Camera } from "lucide-react";
import siteConfig from "@/lib/siteConfig";
import useScrollReveal from "./useScrollReveal";
import { useLang, t } from "@/lib/LangContext";

const icons = [ShieldAlert, Zap, Ban, CircleAlert, Camera];

export default function BeforeArrival() {
  const [ref, isVisible] = useScrollReveal(0.1);
  const { lang } = useLang();
  const tx = t[lang];

  return (
    <section className="relative py-20 md:py-32 bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          {/* Left — Title block */}
          <div className="md:col-span-4 lg:col-span-5">
            <div className={`md:sticky md:top-32 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-copper" />
                <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-muted-foreground">
                  {tx.before.eyebrow}
                </span>
              </div>
              <h2 className="font-display text-2xl md:text-4xl text-graphite font-medium mb-4 leading-tight">
                {tx.before.title1}
                <br />
                <span className="italic text-hydraulic">{tx.before.title2}</span>
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                {tx.before.subtitle}
              </p>

              {/* Water level indicator */}
              <div className="mt-8 hidden md:block motion-reduce-hidden" aria-hidden="true">
                <div className="w-16 h-24 border border-border/60 rounded-md overflow-hidden relative">
                  <div className="absolute bottom-0 left-0 right-0 bg-water/40 animate-water-level" style={{ height: "60%" }}>
                    <div className="absolute top-0 left-0 right-0 h-1 bg-hydraulic/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Checklist */}
          <div className="md:col-span-8 lg:col-span-7">
            <div className="space-y-0">
              {siteConfig.beforeArrival.map((item, index) => {
                const Icon = icons[index];
                return (
                  <div
                    key={index}
                    className={`group transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                    style={{ transitionDelay: `${index * 120 + 200}ms` }}
                  >
                    <div className="flex gap-5 md:gap-8 py-7 md:py-9 border-b border-border/50 last:border-b-0">
                      {/* Check mark */}
                      <div className="flex-shrink-0 pt-0.5">
                        <div className="w-10 h-10 rounded-lg border border-copper/20 flex items-center justify-center group-hover:border-copper/40 group-hover:bg-copper/8 transition-all duration-500">
                          <Icon className="w-4 h-4 text-copper/50 group-hover:text-copper transition-colors duration-500" />
                        </div>
                      </div>

                      {/* Content */}
                      <div>
                        <h4 className="text-sm font-semibold text-graphite mb-1.5 group-hover:text-copper transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.advice}
                        </p>
                      </div>

                      {/* Step number */}
                      <div className="hidden sm:flex items-start ml-auto flex-shrink-0">
                        <span className="font-mono text-xs text-border group-hover:text-copper/35 transition-colors duration-500">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}