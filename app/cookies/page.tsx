import Link from "next/link";
import { LegalBlock } from "@/components/LegalBlock";
import { Eyebrow, PageTitle, Section } from "@/components/Section";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import { pageMeta, waMessages } from "@/lib/site";

export const metadata = pageMeta({
  title: "Cookies",
  description:
    "Cookies esenciales de hosting. No usamos cookies de publicidad. No hay banner porque no hay trackers.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <>
      <Section className="lamp pt-16 sm:pt-24">
        <Eyebrow>Legal</Eyebrow>
        <PageTitle className="mt-4 max-w-3xl">Cookies</PageTitle>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Corto. No hay banner porque no hay píxel.
        </p>
      </Section>

      <Section className="border-t border-line">
        <div className="max-w-2xl space-y-10">
          <LegalBlock title="Qué hay ahora">
            <p>
              Esenciales: las que el hosting (Vercel) puede usar para servir la
              página, el HTTPS y el funcionamiento básico. Cloudflare, en DNS,
              puede ver lo técnico de una visita (IP, país aproximado, error).
            </p>
            <p>No usamos cookies de publicidad.</p>
            <p>
              No hay Google Analytics. No hay Meta Pixel. En el código hay un
              TODO para cuando exista un ID real. Hoy no hay script de medición
              pegado. Por eso no hay aviso agresivo ni casilla que frene el clic
              a WhatsApp.
            </p>
          </LegalBlock>

          <LegalBlock title="Si más adelante hay analítica">
            <p>
              Si se instala GA4 o Pixel, se declara aquí y, si hace falta, se
              pide. Hasta entonces, esta página dice la verdad: no hay trackers
              de marketing.
            </p>
            <p>
              El resto de datos (tu número, tu chat) no van por cookie. Van por
              WhatsApp. Eso está en{" "}
              <Link
                href="/privacidad"
                className="text-cream underline decoration-amber/70 underline-offset-4 hover:text-amber"
              >
                /privacidad
              </Link>
              .
            </p>
          </LegalBlock>
        </div>
        <WhatsAppCta message={waMessages.cookies} className="mt-14 min-h-12">
          Escribir GUASA
        </WhatsAppCta>
      </Section>
    </>
  );
}
