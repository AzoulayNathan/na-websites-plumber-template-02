import React, { useState } from "react";
import Navbar from "@/components/landing/Navbar";
import SplashScreen from "@/components/landing/SplashScreen";
import { LangProvider } from "@/lib/LangContext";
import Hero from "@/components/landing/Hero";
import ProblemStrip from "@/components/landing/ProblemStrip";
import TrustStrip from "@/components/landing/TrustStrip";
import Services from "@/components/landing/Services";
import BeforeArrival from "@/components/landing/BeforeArrival";
import InterventionPath from "@/components/landing/InterventionPath";
import LocalArea from "@/components/landing/LocalArea";
import QuoteClarity from "@/components/landing/QuoteClarity";
import FinalCTA from "@/components/landing/FinalCTA";
import StickyMobileCTA from "@/components/landing/StickyMobileCTA";
import Footer from "@/components/landing/Footer";
import siteConfig from "@/lib/siteConfig";

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {/* SEO structured data placeholder */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Plumber",
            name: siteConfig.businessName,
            telephone: siteConfig.phone,
            email: siteConfig.email,
            areaServed: siteConfig.serviceAreas.map(area => ({
              "@type": "City",
              name: area,
            })),
            address: {
              "@type": "PostalAddress",
              addressLocality: siteConfig.city,
            },
          }),
        }}
      />

      {!splashDone && <SplashScreen onDone={() => setSplashDone(true)} />}
      <LangProvider>
      <div className="min-h-screen bg-porcelain" style={{ visibility: splashDone ? "visible" : "hidden" }}>
        <Navbar />
        <main>
          <Hero />
          <ProblemStrip />
          <TrustStrip />
          <Services />
          <BeforeArrival />
          <InterventionPath />
          <LocalArea />
          <QuoteClarity />
          <FinalCTA />
        </main>
        <Footer />
        <StickyMobileCTA />
      </div>
      </LangProvider>
    </>
  );
}