import type { Metadata } from "next";

export const WHATSAPP_FALLBACK = "381641409093";

export const site = {
  name: "GUASAPALO",
  shortName: "Guasapalo",
  url: "https://guasapalo.com",
  locale: "es",
  tagline: "Qué decir cuando se te tranca la lengua.",
  description:
    "Ganas a distancia. WhatsApp o cámara. Entrenamiento práctico de 45 minutos: qué decir, cómo dirigir, cómo no desaparecer. No es terapia. No hay PDF.",
  email: "[EMAIL]",
  legalName: "[NOMBRE LEGAL]",
  jurisdiction: "[PAÍS / JURISDICCIÓN]",
  priceSessionUsd: 69,
  pricePackUsd: 179,
  sessionMinutes: 45,
  age: "+18",
} as const;

export const waMessages = {
  default:
    "GUASA. Vi guasapalo.com. Relación a distancia. Quiero la sesión.",
  home: "GUASA. Vi guasapalo.com. Relación a distancia. Quiero la sesión.",
  header: "GUASA. Vi guasapalo.com. Quiero hablar.",
  float: "GUASA. Vi guasapalo.com. Relación a distancia. Quiero la sesión.",
  sesion: "GUASA. Vi /sesion. Quiero agendar la sesión de 45 min.",
  pack: "GUASA. Vi guasapalo.com. Quiero el pack de 3 sesiones.",
  guias: "GUASA. Leí las guías. Esta semana se me tranca. Quiero la sesión.",
  mujeres: "PIDE. Vi /mujeres. Quiero la sesión.",
  faq: "GUASA. Vi el FAQ. Quiero la sesión.",
  aviso: "GUASA. Vi el aviso. Quiero la sesión.",
  privacidad: "GUASA. Vi privacidad. Quiero hablar.",
  cookies: "GUASA. Vi cookies. Quiero hablar.",
  notFound: "GUASA. Llegué al 404. Igual quiero la sesión.",
} as const;

export function whatsappDigits(): string {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP ?? WHATSAPP_FALLBACK;
  return raw.replace(/\D/g, "") || WHATSAPP_FALLBACK;
}

export function waUrl(message: string = waMessages.default): string {
  return `https://wa.me/${whatsappDigits()}?text=${encodeURIComponent(message)}`;
}

export function waMessageForGuide(title: string): string {
  return `GUASA. Leí la guía "${title}". Quiero la sesión.`;
}

export function waMessageForWomen(slug?: string): string {
  if (slug) {
    return `PIDE. Vi /mujeres/${slug}. Quiero la sesión.`;
  }
  return waMessages.mujeres;
}

export const nav = [
  { href: "/guias", label: "Guías" },
  { href: "/sesion", label: "Sesión" },
  { href: "/mujeres", label: "Mujeres" },
] as const;

export function pageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = path === "/" ? site.url : `${site.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type:
        path.startsWith("/guias/") || path.startsWith("/mujeres/")
          ? "article"
          : "website",
      title,
      description,
      url,
      siteName: site.name,
      locale: "es_ES",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: "¿Qué es guasapalo?",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
  };
}

export function jsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": `${site.url}/#negocio`,
        name: site.name,
        alternateName: site.shortName,
        url: site.url,
        image: `${site.url}/og.png`,
        description: site.description,
        priceRange: "USD 69-179",
        currenciesAccepted: "USD",
        availableLanguage: "Spanish",
        areaServed: {
          "@type": "Place",
          name: "Remoto / hispanohablante",
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "CU",
        },
        isAccessibleForFree: false,
        audience: {
          "@type": "Audience",
          audienceType: "Hombres hispanohablantes, +18",
        },
        makesOffer: [
          {
            "@type": "Offer",
            name: "Sesión 45 min",
            price: String(site.priceSessionUsd),
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            url: `${site.url}/sesion`,
          },
          {
            "@type": "Offer",
            name: "Pack 3 sesiones",
            price: String(site.pricePackUsd),
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            url: `${site.url}/sesion`,
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#web`,
        url: site.url,
        name: site.name,
        inLanguage: "es",
        publisher: { "@id": `${site.url}/#negocio` },
      },
    ],
  };
}
