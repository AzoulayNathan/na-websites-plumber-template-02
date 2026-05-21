import React from "react";
import { Search, MessageCircle, ClipboardList } from "lucide-react";
import useScrollReveal from "./useScrollReveal";
import { useLang, t } from "@/lib/LangContext";

const clarityIcons = [Search, MessageCircle, ClipboardList];

export default function QuoteClarity() {
  const [ref, isVisible] = useScrollReveal(0.15);
  const { lang } = useLang();
  const tx = t[lang];

  return (
    <section className="relative py-20 md:py-32 bg-water/20" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-start">
          {/* Left — Copy */}
          <div className="md:col-span-5">
            <div className={`md:sticky md:top-32 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-amber" />
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
                  {tx.clarity.eyebrow}
                </span>
              </div>
              <h2 className="font-display text-2xl md:text-4xl text-graphite font-medium mb-6 leading-tight">
                {tx.clarity.title}
                <br />
                <span className="italic text-hydraulic">{tx.clarity.titleItalic}</span>
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                {tx.clarity.subtitle}
              </p>
            </div>
          </div>

          {/* Right — Clarity points */}
          <div className="md:col-span-7">
            <div className="space-y-6">
              {(tx.clarity.points || []).map((point, index) => {
                const Icon = clarityIcons[index] || Search;
                return (
                  <div
                    key={index}
                    className={`group transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                    style={{ transitionDelay: `${index * 150 + 300}ms` }}
                  >
                    <div className="flex gap-6 p-6 md:p-8 rounded-lg border border-border/40 bg-porcelain/80 group-hover:border-amber/20 group-hover:shadow-sm transition-all duration-500">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full border border-hydraulic/10 flex items-center justify-center group-hover:border-amber/25 transition-all duration-500">
                          <Icon className="w-5 h-5 text-hydraulic/40 group-hover:text-amber transition-colors duration-500" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-graphite mb-1.5 group-hover:text-hydraulic transition-colors duration-300">
                          {point.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {point.description}
                        </p>
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