import type { Metadata, Viewport } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Grain } from "@/components/Grain";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { MobileTabBar } from "@/components/MobileTabBar";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { site } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "¿Qué es guasapalo? · GUASAPALO",
    template: "%s · GUASAPALO",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "guasapalo",
    "relación a distancia",
    "WhatsApp",
    "sesión",
    "español",
  ],
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: site.url,
    siteName: site.name,
    title: "¿Qué es guasapalo?",
    description: site.description,
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
    title: "¿Qué es guasapalo?",
    description: site.description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "education",
};

export const viewport: Viewport = {
  themeColor: "#140E0C",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${outfit.variable}`}
    >
      <body className="min-h-dvh bg-night font-sans text-cream antialiased">
        {/* TODO: Pixel / GA4 — pegar aquí el script oficial cuando haya ID. No instalar tracking de mentira. */}
        <JsonLd />
        <Grain />
        <a
          href="#contenido"
          className="absolute top-3 left-3 z-50 -translate-y-16 bg-amber px-4 py-2 text-night transition-transform duration-200 focus:translate-y-0"
        >
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <MobileTabBar />
      </body>
    </html>
  );
}
