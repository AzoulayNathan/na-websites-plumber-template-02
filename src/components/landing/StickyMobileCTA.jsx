import React, { useState, useEffect } from "react";
import { Phone, FileText } from "lucide-react";
import siteConfig from "@/lib/siteConfig";
import { useLang, t } from "@/lib/LangContext";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const { lang } = useLang();
  const tx = t[lang];

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="bg-cream/96 backdrop-blur-md border-t border-border/60 shadow-xl">
        <div className="flex gap-2 px-4 py-3 max-w-md mx-auto">
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex-1 flex items-center justify-center gap-2 bg-hydraulic text-porcelain py-3.5 rounded-full text-sm font-semibold shadow-md shadow-hydraulic/15"
          >
            <Phone className="w-4 h-4" />
            {tx.sticky.call}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex-1 flex items-center justify-center gap-2 border border-copper/30 text-graphite py-3.5 rounded-full text-sm font-semibold hover:bg-copper/5 transition-colors"
          >
            <FileText className="w-4 h-4" />
            {tx.sticky.quote}
          </a>
        </div>
      </div>
    </div>
  );
}