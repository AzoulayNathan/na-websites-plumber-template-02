import React, { useEffect, useState } from "react";

export default function HeroPipeAnimation() {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none motion-reduce-hidden" aria-hidden="true">
      <svg
        viewBox="0 0 1200 800"
        className="absolute inset-0 w-full h-full"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Main copper pipe line */}
        <path
          d="M -50 420 Q 200 390 400 410 T 700 370 Q 880 350 1000 420 Q 1100 480 1200 450"
          stroke="hsl(28, 55%, 48%)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.1"
          strokeDasharray="1500"
          strokeDashoffset={started ? "0" : "1500"}
          style={{ transition: "stroke-dashoffset 3.2s cubic-bezier(0.22, 1, 0.36, 1)" }}
        />

        {/* Secondary lighter line */}
        <path
          d="M -50 490 Q 150 475 320 510 T 620 470 Q 820 445 1020 490 Q 1120 510 1260 480"
          stroke="hsl(198, 52%, 40%)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.07"
          strokeDasharray="1500"
          strokeDashoffset={started ? "0" : "1500"}
          style={{ transition: "stroke-dashoffset 4s cubic-bezier(0.22, 1, 0.36, 1) 0.4s" }}
        />

        {/* Animated water flow on main pipe */}
        {started && (
          <path
            d="M -50 420 Q 200 390 400 410 T 700 370 Q 880 350 1000 420 Q 1100 480 1200 450"
            stroke="hsl(198, 52%, 55%)"
            strokeWidth="0.8"
            strokeLinecap="round"
            opacity="0.12"
            strokeDasharray="12 18"
          >
            <animate attributeName="stroke-dashoffset" values="0;-60" dur="2s" repeatCount="indefinite" />
          </path>
        )}

        {/* Junction nodes */}
        {started && (
          <>
            <circle cx="400" cy="410" r="3.5" fill="hsl(28, 55%, 48%)" opacity="0.2">
              <animate attributeName="r" values="2.5;5;2.5" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="700" cy="370" r="3" fill="hsl(28, 55%, 48%)" opacity="0.15">
              <animate attributeName="r" values="2;4.5;2" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="1000" cy="420" r="4" fill="hsl(198, 52%, 40%)" opacity="0.1">
              <animate attributeName="r" values="3;6;3" dur="3.5s" repeatCount="indefinite" />
            </circle>
          </>
        )}

        {/* Very faint technical grid */}
        {[280, 560, 840, 1120].map(x => (
          <line key={x} x1={x} y1="0" x2={x} y2="800" stroke="hsl(198, 30%, 50%)" strokeWidth="0.5" opacity="0.03" />
        ))}
        {[200, 400, 600].map(y => (
          <line key={y} x1="0" y1={y} x2="1200" y2={y} stroke="hsl(198, 30%, 50%)" strokeWidth="0.5" opacity="0.025" />
        ))}
      </svg>
    </div>
  );
}