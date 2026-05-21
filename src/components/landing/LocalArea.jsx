import React, { useState } from "react";
import { MapPin } from "lucide-react";
import siteConfig from "@/lib/siteConfig";
import useScrollReveal from "./useScrollReveal";
import { useLang, t } from "@/lib/LangContext";

export default function LocalArea() {
  const [hoveredArea, setHoveredArea] = useState(null);
  const [ref, isVisible] = useScrollReveal(0.1);
  const { lang } = useLang();
  const tx = t[lang];

  // Generate node positions for the pipe network
  const nodePositions = [
    { x: 200, y: 180 },
    { x: 350, y: 120 },
    { x: 500, y: 200 },
    { x: 300, y: 300 },
    { x: 450, y: 340 },
  ];

  return (
    <section id="area" className="relative py-20 md:py-32 bg-porcelain" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* Left — Info */}
          <div className="md:col-span-5">
            <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-amber" />
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
                  {tx.area.eyebrow}
                </span>
              </div>
              <h2 className="font-display text-2xl md:text-4xl text-graphite font-medium mb-4 leading-tight">
                {tx.area.title.replace("{city}", siteConfig.city)}
                <br />
                <span className="italic text-hydraulic">{tx.area.titleItalic}</span>
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-sm">
                {tx.area.subtitle.replace("{city}", siteConfig.city)}
              </p>

              {/* Area list */}
              <div className="space-y-3">
                {siteConfig.serviceAreas.map((area, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 group cursor-default transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    }`}
                    style={{ transitionDelay: `${index * 100 + 400}ms` }}
                    onMouseEnter={() => setHoveredArea(index)}
                    onMouseLeave={() => setHoveredArea(null)}
                  >
                    <MapPin
                      className={`w-3.5 h-3.5 flex-shrink-0 transition-colors duration-300 ${
                        hoveredArea === index ? "text-amber" : "text-muted-foreground/40"
                      }`}
                    />
                    <span
                      className={`text-sm transition-colors duration-300 ${
                        hoveredArea === index ? "text-graphite font-medium" : "text-muted-foreground"
                      }`}
                    >
                      {area}
                    </span>
                    <div
                      className={`flex-1 h-px transition-all duration-500 ${
                        hoveredArea === index ? "bg-amber/30" : "bg-border/30"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Abstract pipe network */}
          <div className="md:col-span-7 flex justify-center">
            <div
              className={`w-full max-w-lg transition-all duration-1000 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <svg viewBox="0 0 600 450" className="w-full" fill="none">
                {/* Connection lines between nodes */}
                {[
                  [0, 1], [1, 2], [0, 3], [3, 4], [2, 4], [1, 3]
                ].map(([from, to], i) => (
                  <line
                    key={i}
                    x1={nodePositions[from].x}
                    y1={nodePositions[from].y}
                    x2={nodePositions[to].x}
                    y2={nodePositions[to].y}
                    stroke={
                      hoveredArea === from || hoveredArea === to
                        ? "hsl(38, 62%, 54%)"
                        : "hsl(202, 60%, 17%)"
                    }
                    strokeWidth={hoveredArea === from || hoveredArea === to ? "2" : "1"}
                    opacity={hoveredArea === from || hoveredArea === to ? "0.4" : "0.1"}
                    strokeDasharray={hoveredArea === from || hoveredArea === to ? "0" : "4 4"}
                    style={{ transition: "all 0.5s ease" }}
                  />
                ))}

                {/* Center hub */}
                <circle cx="350" cy="230" r="50" stroke="hsl(202, 60%, 17%)" strokeWidth="1" opacity="0.06" />
                <circle cx="350" cy="230" r="30" stroke="hsl(202, 60%, 17%)" strokeWidth="0.5" opacity="0.08" />
                <circle cx="350" cy="230" r="5" fill="hsl(38, 62%, 54%)" opacity="0.2">
                  <animate attributeName="r" values="4;7;4" dur="3s" repeatCount="indefinite" />
                </circle>
                <text x="350" y="233" textAnchor="middle" fill="hsl(202, 60%, 17%)" fontSize="8" fontFamily="var(--font-body)" opacity="0.3" fontWeight="600" letterSpacing="0.15em">
                  {siteConfig.city.toUpperCase()}
                </text>

                {/* Area nodes */}
                {nodePositions.map((pos, index) => (
                  <g key={index}>
                    {/* Hover ring */}
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={hoveredArea === index ? 20 : 12}
                      fill={hoveredArea === index ? "hsl(38, 62%, 54%)" : "hsl(202, 60%, 17%)"}
                      opacity={hoveredArea === index ? 0.1 : 0.04}
                      style={{ transition: "all 0.5s ease" }}
                    />
                    {/* Node */}
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r="5"
                      fill={hoveredArea === index ? "hsl(38, 62%, 54%)" : "hsl(202, 60%, 17%)"}
                      opacity={hoveredArea === index ? 0.6 : 0.2}
                      style={{ transition: "all 0.5s ease" }}
                    />
                    {/* Label */}
                    <text
                      x={pos.x}
                      y={pos.y + 24}
                      textAnchor="middle"
                      fill={hoveredArea === index ? "hsl(38, 62%, 54%)" : "hsl(202, 60%, 17%)"}
                      fontSize="9"
                      fontFamily="var(--font-body)"
                      opacity={hoveredArea === index ? 0.7 : 0.25}
                      fontWeight="500"
                      style={{ transition: "all 0.5s ease" }}
                    >
                      {siteConfig.serviceAreas[index]}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}