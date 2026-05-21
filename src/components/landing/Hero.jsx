import React from "react";
import { Phone, FileText, ArrowDown } from "lucide-react";
import siteConfig from "@/lib/siteConfig";
import WaterRipple from "./WaterRipple";
import { useLang, t } from "@/lib/LangContext";

// Atelier workbench SVG — copper pipes, ceramic tiles, minimal tool
function AtelierVisual() {
  return (
    <div className="relative w-full max-w-sm mx-auto aspect-square" aria-hidden="true">
      <svg viewBox="0 0 380 380" className="w-full h-full" fill="none">
        {/* Background ceramic tile grid */}
        {[0,1,2,3,4].map(row =>
          [0,1,2,3,4].map(col => (
            <rect
              key={`${row}-${col}`}
              x={col * 76 + 1}
              y={row * 76 + 1}
              width="74"
              height="74"
              rx="3"
              fill="hsl(38, 22%, 93%)"
              stroke="hsl(38, 18%, 87%)"
              strokeWidth="1"
              opacity="0.6"
            />
          ))
        )}

        {/* Main horizontal copper pipe */}
        <rect x="40" y="162" width="300" height="14" rx="7" fill="hsl(28, 55%, 52%)" opacity="0.85" />
        <rect x="40" y="164" width="300" height="4" rx="2" fill="hsl(28, 65%, 68%)" opacity="0.5" />
        {/* Pipe end caps */}
        <circle cx="40" cy="169" r="10" fill="hsl(28, 50%, 42%)" opacity="0.9" />
        <circle cx="340" cy="169" r="10" fill="hsl(28, 50%, 42%)" opacity="0.9" />
        <circle cx="40" cy="169" r="5" fill="hsl(28, 60%, 62%)" opacity="0.6" />
        <circle cx="340" cy="169" r="5" fill="hsl(28, 60%, 62%)" opacity="0.6" />

        {/* Vertical pipe drop */}
        <rect x="176" y="100" width="14" height="100" rx="7" fill="hsl(28, 52%, 48%)" opacity="0.8" />
        <rect x="178" y="100" width="4" height="100" rx="2" fill="hsl(28, 65%, 68%)" opacity="0.4" />

        {/* T-junction fitting */}
        <circle cx="183" cy="169" r="14" fill="hsl(28, 46%, 38%)" opacity="0.9" />
        <circle cx="183" cy="169" r="9" fill="hsl(28, 58%, 56%)" opacity="0.7" />
        <circle cx="183" cy="169" r="4" fill="hsl(28, 65%, 68%)" opacity="0.9" />

        {/* Tap / valve on the right */}
        <rect x="268" y="155" width="28" height="28" rx="5" fill="hsl(28, 46%, 40%)" opacity="0.85" />
        <rect x="278" y="149" width="8" height="8" rx="2" fill="hsl(28, 50%, 44%)" opacity="0.9" />
        <rect x="274" y="149" width="16" height="4" rx="2" fill="hsl(28, 60%, 58%)" opacity="0.6" />

        {/* Water drip animation */}
        <circle cx="183" cy="212" r="3" fill="hsl(198, 52%, 40%)" opacity="0.5">
          <animate attributeName="cy" values="210;224;210" dur="2.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1" />
          <animate attributeName="opacity" values="0;0.55;0" dur="2.4s" repeatCount="indefinite" />
        </circle>
        <ellipse cx="183" cy="228" rx="4" ry="2" fill="hsl(198, 52%, 40%)" opacity="0">
          <animate attributeName="opacity" values="0;0.3;0" dur="2.4s" begin="0.6s" repeatCount="indefinite" />
          <animate attributeName="rx" values="2;6;2" dur="2.4s" begin="0.6s" repeatCount="indefinite" />
        </ellipse>

        {/* Wrench silhouette — minimal */}
        <g transform="translate(68, 230) rotate(-35)">
          <rect x="0" y="4" width="60" height="8" rx="4" fill="hsl(20, 10%, 28%)" opacity="0.18" />
          <circle cx="4" cy="8" r="8" fill="none" stroke="hsl(20, 10%, 28%)" strokeWidth="4" opacity="0.18" />
          <rect x="4" y="5" width="5" height="6" rx="1" fill="hsl(38, 28%, 92%)" opacity="0.9" />
        </g>

        {/* Flowing water line — subtle */}
        <path
          d="M 40 169 Q 100 155 183 169 T 340 169"
          stroke="hsl(198, 52%, 55%)"
          strokeWidth="1"
          opacity="0"
          strokeDasharray="6 5"
        >
          <animate attributeName="opacity" values="0;0.25;0" dur="3s" repeatCount="indefinite" />
          <animate attributeName="stroke-dashoffset" values="0;-22" dur="1.5s" repeatCount="indefinite" />
        </path>

        {/* Corner ceramic accent — top right */}
        <circle cx="330" cy="52" r="18" fill="none" stroke="hsl(28, 50%, 52%)" strokeWidth="1.5" opacity="0.2" />
        <circle cx="330" cy="52" r="10" fill="none" stroke="hsl(28, 50%, 52%)" strokeWidth="1" opacity="0.15" />
        <circle cx="330" cy="52" r="3" fill="hsl(28, 55%, 52%)" opacity="0.25" />
      </svg>
    </div>
  );
}

export default function Hero() {
  const { lang } = useLang();
  const tx = t[lang];
  return (
    <section className="relative min-h-screen flex items-center bg-cream overflow-hidden">
      {/* Ceramic tile background texture */}
      <div className="absolute inset-0 ceramic-texture opacity-60 pointer-events-none" aria-hidden="true" />

      {/* Warm paper overlay */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1200 800" className="absolute inset-0 w-full h-full" fill="none" preserveAspectRatio="xMidYMid slice">
          {/* Faint copper pipe sketch — background */}
          <path
            d="M -40 520 Q 180 500 320 540 T 620 510 Q 820 490 1040 530 Q 1150 548 1260 520"
            stroke="hsl(28, 55%, 48%)"
            strokeWidth="1"
            opacity="0.07"
            strokeLinecap="round"
          />
          <path
            d="M -40 560 Q 200 545 380 570 T 700 545 Q 900 530 1100 555 Q 1200 568 1260 558"
            stroke="hsl(28, 55%, 48%)"
            strokeWidth="0.8"
            opacity="0.05"
            strokeLinecap="round"
          />
          {/* Very faint grid — technical blueprint feel */}
          {[200, 400, 600, 800, 1000].map(x => (
            <line key={x} x1={x} y1="0" x2={x} y2="800" stroke="hsl(198, 30%, 50%)" strokeWidth="0.4" opacity="0.04" />
          ))}
          {[200, 400, 600].map(y => (
            <line key={y} x1="0" y1={y} x2="1200" y2={y} stroke="hsl(198, 30%, 50%)" strokeWidth="0.4" opacity="0.03" />
          ))}
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-center">
          {/* Left — Message */}
          <div className="md:col-span-7 lg:col-span-6">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-7 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-6 h-px bg-copper" />
              <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-muted-foreground">
                {tx.hero.eyebrow} — {siteConfig.city}
              </span>
            </div>

            {/* Hero title */}
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] font-medium leading-[1.07] text-graphite mb-5 animate-fade-in-up"
              style={{ animationDelay: "0.22s" }}
            >
              {tx.hero.title1}<br />
              <span className="italic text-hydraulic">{tx.hero.title2}</span>
            </h1>

            {/* Micro-copy */}
            <p
              className="text-base md:text-[1.05rem] text-muted-foreground leading-[1.75] max-w-md mb-9 animate-fade-in-up"
              style={{ animationDelay: "0.38s" }}
            >
              {tx.hero.subtitle.replace("{name}", siteConfig.businessName)}
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-3.5 mb-9 animate-fade-in-up"
              style={{ animationDelay: "0.52s" }}
            >
              <WaterRipple
                as="a"
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center gap-2.5 bg-hydraulic text-porcelain px-7 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-hydraulic/90 transition-all duration-300 animate-pulse-glow shadow-md shadow-hydraulic/15"
              >
                <Phone className="w-4 h-4" />
                {tx.hero.cta1.replace("{name}", siteConfig.businessName)}
              </WaterRipple>

              <WaterRipple
                as="a"
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 border border-copper/30 text-graphite px-7 py-4 rounded-full text-sm font-semibold tracking-wide hover:border-copper/60 hover:bg-copper/5 transition-all duration-300"
              >
                <FileText className="w-4 h-4" />
                {tx.hero.cta2}
              </WaterRipple>
            </div>

            {/* Micro trust — 3 pillars */}
            <div
              className="flex flex-wrap items-center gap-x-5 gap-y-2.5 text-xs text-muted-foreground animate-fade-in-up"
              style={{ animationDelay: "0.66s" }}
            >
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                {tx.hero.pill1}
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                {tx.hero.pill2}
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                {tx.hero.pill3}
              </span>
            </div>

            {/* Urgent badge */}
            <div
              className="mt-7 inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-copper/8 border border-copper/18 animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              <span className="w-2 h-2 rounded-full bg-copper animate-gentle-pulse" />
              <span className="text-xs font-medium text-copper">
                {tx.hero.urgent}
              </span>
            </div>
          </div>

          {/* Right — Atelier visual */}
          <div className="hidden md:flex md:col-span-5 lg:col-span-6 items-center justify-center">
            <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <AtelierVisual />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in-up hidden md:block" style={{ animationDelay: "1.1s" }}>
          <a href="#problems" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-copper transition-colors duration-300">
            <span className="text-[10px] tracking-[0.2em] uppercase">{tx.hero.scroll}</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}