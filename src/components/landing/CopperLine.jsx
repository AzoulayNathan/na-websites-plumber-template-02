import React, { useEffect, useRef, useState } from "react";

/**
 * Decorative animated copper connector line between sections.
 * Reveals progressively on scroll via IntersectionObserver.
 */
export default function CopperLine({ className = "", vertical = false }) {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }

    let animFrame;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const start = performance.now();
          const duration = 1200;
          const animate = (now) => {
            const t = Math.min((now - start) / duration, 1);
            // ease out cubic
            setProgress(1 - Math.pow(1 - t, 3));
            if (t < 1) animFrame = requestAnimationFrame(animate);
          };
          animFrame = requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(animFrame);
    };
  }, []);

  if (vertical) {
    return (
      <div ref={ref} className={`flex justify-center ${className}`} aria-hidden="true">
        <svg width="2" height="64" viewBox="0 0 2 64" fill="none">
          <line
            x1="1" y1="0" x2="1" y2="64"
            stroke="url(#copperGradV)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="64"
            strokeDashoffset={64 - 64 * progress}
          />
          <defs>
            <linearGradient id="copperGradV" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
              <stop offset="0%" stopColor="hsl(28, 55%, 48%)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(28, 55%, 48%)" stopOpacity="0.15" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  return (
    <div ref={ref} className={`relative h-px overflow-visible ${className}`} aria-hidden="true">
      <svg
        className="absolute inset-0 w-full"
        height="12"
        viewBox="0 0 800 12"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M 0 6 Q 200 2 400 6 T 800 6"
          stroke="url(#copperGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="820"
          strokeDashoffset={820 - 820 * progress}
        />
        {/* End dot */}
        {progress > 0.9 && (
          <circle cx={800 * progress} cy="6" r="2.5" fill="hsl(28, 55%, 48%)" opacity="0.7">
            <animate attributeName="r" values="2;3.5;2" dur="2s" repeatCount="indefinite" />
          </circle>
        )}
        <defs>
          <linearGradient id="copperGrad" x1="0" y1="0" x2="1" y2="0" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor="hsl(28, 55%, 48%)" stopOpacity="0.15" />
            <stop offset="50%" stopColor="hsl(28, 55%, 52%)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="hsl(28, 55%, 48%)" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}