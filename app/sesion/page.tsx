import Link from "next/link";
import { PriceCards, PriceNote } from "@/components/PriceCards";
import { Eyebrow, PageTitle, Section } from "@/components/Section";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import { pageMeta, site, waMessages } from "@/lib/site";

export const metadata = pageMeta({
  title: "Sesión de 45 minutos",
  description:
    "Revisión de chats, 10–12 frases a tu boca, ensayo y tarea de 48 horas. 69 USD. Se paga por WhatsApp. No hay PDF.",
  path: "/sesion",
});

const happens = [
  {
    title: "Revisión de chats",
    body: "Traes lo real. Se mira lo que ya escribiste, no un personaje inventado.",
  },
  {
    title: "10–12 frases a tu boca",
    body: "En tu tono. Las de esta semana. No un guion de otro.",
  },
  {
    title: "Ensayo",
    body: "Las dices. Se oyen. Se ajustan. El oído no miente.",
  },
  {
    title: "Tarea 48 h",
    body: "Qué mandas. Qué no. El minuto después. Sin desaparecer.",
  },
] as const;

const ready = [
  "Cinco mensajes reales de texto. El hilo de ahora, no el de la luna de miel.",
  "No fotos. No nudes. El chat.",
  "Saber si esta semana es WhatsApp o cámara. Son dos músculos.",
  "Un rato sin gente detrás de la puerta. 45 minutos enteros.",
  "Estar +18 y en terreno de consentimiento. Si hay violencia o trauma clínico, esto no es el lugar.",
] as const;

const includes = [
  "45 minutos por video",
  "Frases en tu tono, para esta semana",
  "Tarea de 48 horas",
  "Un solo objetivo: que no se te trabe el próximo hilo",
] as const;

const excludes = [
  "PDF, descargas, grabación para reenviar",
  "Terapia, diagnóstico, trabajo de trauma",
  "Seguimiento eterno ni grupo",
] as const;

export default function SesionPage() {
  return (
    <>
      <Section className="lamp pt-20 sm:pt-28">
        <Eyebrow>Sesión</Eyebrow>
        <PageTitle className="mt-4 max-w-3xl">
          45 minutos. Sales con frases, no con un archivo.
        </PageTitle>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Entrenamiento práctico. Qué decir, cómo dirigir, cómo no desaparecer.
          Se paga antes. Se agenda cuando llega el comprobante.
        </p>
        <WhatsAppCta message={waMessages.sesion} className="mt-8 min-h-12">
          Quiero la sesión · {site.priceSessionUsd} USD
        </WhatsAppCta>
        <p className="mt-6 max-w-xl text-sm text-muted">
          También hay guías para ellas.{" "}
          <Link
            href="/mujeres"
            className="font-medium text-cream underline decoration-amber/70 underline-offset-4 hover:text-amber"
          >
            /mujeres
          </Link>
        </p>
      </Section>

      <Section className="border-t border-line bg-night-2">
        <Eyebrow>Qué pasa</Eyebrow>
        <h2 className="mt-4 max-w-xl font-display text-3xl text-cream sm:text-4xl">
          El rato tiene oficio. No es charla suelta.
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {happens.map((item, i) => (
            <article key={item.title} className="border-t border-line pt-6">
              <p className="font-display text-amber">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-display text-2xl text-cream">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <Eyebrow>Qué debes tener listo</Eyebrow>
        <h2 className="mt-4 font-display text-3xl text-cream sm:text-4xl">
          Cinco mensajes. Nada de álbum.
        </h2>
        <ol className="mt-10 max-w-2xl space-y-4">
          {ready.map((line, i) => (
            <li key={line} className="flex gap-4 text-cream">
              <span className="font-display text-amber">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="leading-relaxed">{line}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="border-y border-line bg-night-2">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <Eyebrow>Incluye</Eyebrow>
            <ul className="mt-6 space-y-3">
              {includes.map((line) => (
                <li key={line} className="border-l border-amber pl-4 text-cream">
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>No incluye</Eyebrow>
            <ul className="mt-6 space-y-3">
              {excludes.map((line) => (
                <li key={line} className="border-l border-line pl-4 text-muted">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <Eyebrow>Precio</Eyebrow>
        <h2 className="mt-4 font-display text-3xl text-cream sm:text-4xl">
          {site.priceSessionUsd} USD la sesión. {site.pricePackUsd} el pack.
        </h2>
        <div className="mt-10">
          <PriceCards />
          <PriceNote />
        </div>
      </Section>
    </>
  );
}
