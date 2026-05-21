import React, { createContext, useContext, useState } from "react";

const LangContext = createContext({ lang: "fr", setLang: () => {} });

export function LangProvider({ children }) {
  const [lang, setLang] = useState("fr");
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

export const t = {
  fr: {
    nav: {
      problems: "Pannes",
      services: "Services",
      process: "Déroulement",
      area: "Zone",
      contact: "Contact · Devis",
      call: "Appeler",
    },
    hero: {
      eyebrow: "Plomberie artisanale",
      title1: "On explique",
      title2: "avant d'intervenir.",
      subtitle: "Fuites, bouchons, chauffe-eau — {name} travaille avec soin, explique ce qu'il fait, et ne démarre qu'une fois le problème compris ensemble.",
      cta1: "Appeler {name}",
      cta2: "Demander un devis",
      pill1: "Explication avant geste",
      pill2: "Devis clair",
      pill3: "Contact direct",
      urgent: "Urgence ? Appelez directement pour un contact immédiat",
      scroll: "Défiler",
    },
    problems: {
      eyebrow: "Identifier le problème",
      title: "Qu'est-ce qui se passe ?",
    },
    trust: {
      eyebrow: "La façon de travailler",
      title: "Un artisan sérieux,",
      titleItalic: "ça s'explique.",
      labels: [
        "Ce qui est expliqué avant de commencer",
        "Ce qui est vérifié sur place",
        "Ce qui évite les mauvaises surprises",
        "Ce qui est posé par écrit",
      ],
    },
    services: {
      eyebrow: "L'atelier",
      title: "Ce que fait {name}",
      subtitle: "Chaque intervention suit un même fil : comprendre d'abord, agir ensuite.",
      gestureLabels: ["Diagnostiquer", "Réparer", "Remplacer", "Installer", "Vérifier", "Nettoyer"],
    },
    before: {
      eyebrow: "Avant l'arrivée",
      title1: "En attendant,",
      title2: "quelques gestes",
      subtitle: "Des actions simples qui peuvent limiter les dégâts avant l'intervention. Pas de panique — utilisez votre bon sens.",
    },
    process: {
      eyebrow: "Déroulement",
      title: "Simple, clair, sans promesses en l'air",
    },
    area: {
      eyebrow: "Zone d'intervention",
      title: "On intervient à {city}",
      titleItalic: "et ses environs",
      subtitle: "Services de plomberie locaux disponibles à {city} et dans les environs. La disponibilité peut varier selon la localisation.",
    },
    contact: {
      eyebrow: "Prendre contact",
      title: "Un problème de plomberie",
      titleItalic: "à {city} ?",
      subtitle: "Appelez directement {name}, ou envoyez une demande de devis pour un travail planifié. On vous répond clairement.",
      cta1: "Appeler maintenant",
      cta2: "Demander un devis",
    },
    clarity: {
      eyebrow: "Transparence",
      title: "Clair avant",
      titleItalic: "de s'engager",
      subtitle: "Pour un problème urgent, appeler est la voie la plus rapide. Pour un travail planifié, une demande de devis aide à préciser le besoin, le lieu, le moment et la prochaine étape.",
      points: [
        { title: "Problème expliqué", description: "Chaque situation commence par comprendre ce qui s'est passé." },
        { title: "Travail discuté avant toute action", description: "Aucun travail ne commence sans une conversation claire." },
        { title: "Devis pour les travaux planifiés", description: "Les travaux non urgents bénéficient d'un devis écrit et d'un calendrier." },
      ],
    },
    footer: {
      tagline: "Plomberie artisanale — disponible localement.",
      serviceAreas: "Zones desservies",
      rights: "Tous droits réservés.",
    },
    sticky: {
      call: "Appeler",
      quote: "Devis",
    },
  },
  en: {
    nav: {
      problems: "Issues",
      services: "Services",
      process: "Process",
      area: "Area",
      contact: "Contact · Quote",
      call: "Call",
    },
    hero: {
      eyebrow: "Artisan plumbing",
      title1: "We explain",
      title2: "before we act.",
      subtitle: "Leaks, blockages, water heaters — {name} works with care, explains what they do, and only starts once the problem is understood together.",
      cta1: "Call {name}",
      cta2: "Request a quote",
      pill1: "Explanation first",
      pill2: "Clear quote",
      pill3: "Direct contact",
      urgent: "Emergency? Call directly for immediate contact",
      scroll: "Scroll",
    },
    problems: {
      eyebrow: "Identify the problem",
      title: "What is happening?",
    },
    trust: {
      eyebrow: "How we work",
      title: "A serious tradesperson",
      titleItalic: "explains themselves.",
      labels: [
        "What is explained before starting",
        "What is checked on-site",
        "What avoids bad surprises",
        "What is put in writing",
      ],
    },
    services: {
      eyebrow: "The workshop",
      title: "What {name} does",
      subtitle: "Every job follows the same thread: understand first, act second.",
      gestureLabels: ["Diagnose", "Repair", "Replace", "Install", "Check", "Clean"],
    },
    before: {
      eyebrow: "Before arrival",
      title1: "While waiting,",
      title2: "a few steps",
      subtitle: "Simple actions that can limit damage before the visit. No panic — use your common sense.",
    },
    process: {
      eyebrow: "How it works",
      title: "Simple, clear, no theatrical promises",
    },
    area: {
      eyebrow: "Service area",
      title: "Serving {city}",
      titleItalic: "and nearby areas",
      subtitle: "Local plumbing services available in {city} and surrounding areas. Contact availability may vary by location.",
    },
    contact: {
      eyebrow: "Get in touch",
      title: "A plumbing problem",
      titleItalic: "in {city}?",
      subtitle: "Call {name} directly, or send a quote request for planned work. We will answer clearly.",
      cta1: "Call now",
      cta2: "Request a quote",
    },
    clarity: {
      eyebrow: "Transparency",
      title: "Clear before",
      titleItalic: "committing",
      subtitle: "For urgent issues, calling is usually the fastest path. For planned work, a quote request helps clarify the need, the place, the timing and the next step.",
      points: [
        { title: "Problem explained", description: "Every situation starts with understanding what happened." },
        { title: "Work discussed before action", description: "No work begins without a clear conversation first." },
        { title: "Quote request for planned jobs", description: "Non-urgent work benefits from a written quote and timeline." },
      ],
    },
    footer: {
      tagline: "Artisan plumbing — locally available.",
      serviceAreas: "Service areas",
      rights: "All rights reserved.",
    },
    sticky: {
      call: "Call",
      quote: "Quote",
    },
  },
  es: {
    nav: {
      problems: "Averías",
      services: "Servicios",
      process: "Proceso",
      area: "Zona",
      contact: "Contacto · Presupuesto",
      call: "Llamar",
    },
    hero: {
      eyebrow: "Fontanería artesanal",
      title1: "Explicamos",
      title2: "antes de actuar.",
      subtitle: "Fugas, atascos, calentadores — {name} trabaja con cuidado, explica lo que hace y sólo empieza una vez entendido el problema juntos.",
      cta1: "Llamar a {name}",
      cta2: "Pedir presupuesto",
      pill1: "Explicación primero",
      pill2: "Presupuesto claro",
      pill3: "Contacto directo",
      urgent: "¿Urgencia? Llame directamente para contacto inmediato",
      scroll: "Bajar",
    },
    problems: {
      eyebrow: "Identificar el problema",
      title: "¿Qué está pasando?",
    },
    trust: {
      eyebrow: "Cómo trabajamos",
      title: "Un profesional serio",
      titleItalic: "se explica.",
      labels: [
        "Lo que se explica antes de empezar",
        "Lo que se verifica in situ",
        "Lo que evita sorpresas",
        "Lo que queda por escrito",
      ],
    },
    services: {
      eyebrow: "El taller",
      title: "Lo que hace {name}",
      subtitle: "Cada intervención sigue el mismo hilo: entender primero, actuar después.",
      gestureLabels: ["Diagnosticar", "Reparar", "Reemplazar", "Instalar", "Verificar", "Limpiar"],
    },
    before: {
      eyebrow: "Antes de la llegada",
      title1: "Mientras tanto,",
      title2: "algunos gestos",
      subtitle: "Acciones simples que pueden limitar los daños antes de la intervención. Sin pánico — usa el sentido común.",
    },
    process: {
      eyebrow: "Cómo funciona",
      title: "Simple, claro, sin promesas vacías",
    },
    area: {
      eyebrow: "Zona de intervención",
      title: "Servicios en {city}",
      titleItalic: "y alrededores",
      subtitle: "Servicios de fontanería locales disponibles en {city} y zonas cercanas. La disponibilidad puede variar según la ubicación.",
    },
    contact: {
      eyebrow: "Ponerse en contacto",
      title: "¿Un problema de fontanería",
      titleItalic: "en {city}?",
      subtitle: "Llame directamente a {name}, o envíe una solicitud de presupuesto para trabajo planificado. Le responderemos con claridad.",
      cta1: "Llamar ahora",
      cta2: "Pedir presupuesto",
    },
    clarity: {
      eyebrow: "Transparencia",
      title: "Claro antes",
      titleItalic: "de comprometerse",
      subtitle: "Para problemas urgentes, llamar es la vía más rápida. Para trabajos planificados, una solicitud de presupuesto ayuda a precisar la necesidad, el lugar, el momento y el siguiente paso.",
      points: [
        { title: "Problema explicado", description: "Cada situación comienza por entender qué ha pasado." },
        { title: "Trabajo discutido antes de actuar", description: "Ningún trabajo comienza sin una conversación clara primero." },
        { title: "Presupuesto para trabajos planificados", description: "Los trabajos no urgentes se benefician de un presupuesto escrito y un calendario." },
      ],
    },
    footer: {
      tagline: "Fontanería artesanal — disponible localmente.",
      serviceAreas: "Zonas de servicio",
      rights: "Todos los derechos reservados.",
    },
    sticky: {
      call: "Llamar",
      quote: "Presupuesto",
    },
  },
};