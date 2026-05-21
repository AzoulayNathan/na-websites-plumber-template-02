import React, { useEffect, useState } from "react";

export default function SplashScreen({ onDone }) {
  const [phase, setPhase] = useState("drop"); // drop → expand → fade

  useEffect(() => {
    // Phase 1 — drop falls: 0–700ms
    const t1 = setTimeout(() => setPhase("expand"), 700);
    // Phase 2 — ripple expands: 700–1400ms
    const t2 = setTimeout(() => setPhase("fade"), 1300);
    // Phase 3 — fade out: 1400–1900ms
    const t3 = setTimeout(() => onDone(), 1900);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "hsl(38, 28%, 96%)",
        opacity: phase === "fade" ? 0 : 1,
        transition: phase === "fade" ? "opacity 0.6s cubic-bezier(0.4,0,0.2,1)" : "none",
        pointerEvents: phase === "fade" ? "none" : "auto",
      }}
      aria-hidden="true"
    >
      {/* Ceramic dot grid background */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="splash-dots" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="16" cy="16" r="1" fill="hsl(38, 18%, 84%)" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#splash-dots)" />
      </svg>

      <div className="relative flex flex-col items-center">
        {/* SVG water drop + ripple */}
        <svg width="120" height="160" viewBox="0 0 120 160" fill="none" className="relative z-10">
          {/* Ripple circles — appear on expand */}
          {phase !== "drop" && [1, 2, 3].map(i => (
            <circle
              key={i}
              cx="60"
              cy="130"
              r={i * 18}
              stroke="hsl(28, 55%, 48%)"
              strokeWidth="1"
              fill="none"
              style={{
                opacity: 0,
                animation: `splashRipple 0.7s ease-out ${i * 120}ms forwards`,
              }}
            />
          ))}

          {/* Water drop body */}
          <path
            d="M60 10 C60 10 30 55 30 85 C30 102 43 115 60 115 C77 115 90 102 90 85 C90 55 60 10 60 10Z"
            fill="hsl(198, 52%, 32%)"
            style={{
              transformOrigin: "60px 10px",
              animation: phase === "drop"
                ? "dropFall 0.65s cubic-bezier(0.4, 0, 0.8, 1) forwards"
                : phase === "expand"
                ? "dropSplat 0.35s cubic-bezier(0.4, 0, 0.2, 1) forwards"
                : "none",
              opacity: phase === "expand" ? 0.7 : 1,
            }}
          />

          {/* Drop shine */}
          <ellipse
            cx="50"
            cy="68"
            rx="6"
            ry="10"
            fill="white"
            opacity="0.25"
            style={{
              animation: phase === "drop" ? "dropFall 0.65s cubic-bezier(0.4, 0, 0.8, 1) forwards" : "none",
            }}
          />

          {/* Copper pipe segment above drop */}
          <rect
            x="53" y="0" width="14" height="18" rx="3"
            fill="hsl(28, 55%, 48%)"
            opacity="0.7"
            style={{
              animation: phase === "drop" ? "pipeFade 0.5s ease-out 0.3s forwards" : "none",
              opacity: 0.7,
            }}
          />
          <rect
            x="56" y="0" width="4" height="18" rx="1"
            fill="hsl(28, 65%, 68%)"
            opacity="0.4"
          />
        </svg>

        {/* Business name — fades in just before splash ends */}
        <div
          style={{
            opacity: phase === "expand" || phase === "fade" ? 1 : 0,
            transform: phase === "expand" || phase === "fade" ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s",
          }}
          className="mt-2 text-center"
        >
          <span className="font-display text-lg text-hydraulic font-medium tracking-wide">
            Atelier Eau Claire
          </span>
          <p className="text-[10px] tracking-[0.25em] uppercase text-copper/60 mt-0.5 font-body">
            Plomberie artisanale
          </p>
        </div>
      </div>

      <style>{`
        @keyframes dropFall {
          0%   { transform: translateY(-60px) scaleY(0.7); opacity: 0; }
          60%  { opacity: 1; }
          100% { transform: translateY(0) scaleY(1); opacity: 1; }
        }
        @keyframes dropSplat {
          0%   { transform: scale(1); opacity: 1; }
          100% { transform: scale(0) translateY(20px); opacity: 0; }
        }
        @keyframes pipeFade {
          0%   { opacity: 0.7; }
          100% { opacity: 0; }
        }
        @keyframes splashRipple {
          0%   { r: 4; opacity: 0.6; }
          100% { r: 54; opacity: 0; }
        }
      `}</style>
    </div>
  );
}