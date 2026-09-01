import { GuideCards } from "@/components/GuideCards";
import { Eyebrow, PageTitle, Section } from "@/components/Section";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import { womenGuides } from "@/lib/women-guides";
import { pageMeta, site, waMessages } from "@/lib/site";

export const metadata = pageMeta({
  title: "Guías para ellas",
  description:
    "Pedir sin que se asuste. Cómo pedir, cómo guiarlo, cómo recibir, cómo no quedar fría. Sesión 45 min, 69 USD. Se escribe PIDE.",
  path: "/mujeres",
});

export default function MujeresPage() {
  return (
    <>
      <Section className="lamp pt-16 sm:pt-20">
        <Eyebrow>Mujeres</Eyebrow>
        <PageTitle className="mt-4 max-w-3xl">
          Pedir. Sostener. Sin discurso.
        </PageTitle>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          El hombre dirige. Tú pides y sostienes. No es terapia. No hay PDF.
          +18. Cinco textos limpios. Si esta semana no sabes pedirlo, PIDE al
          WhatsApp.
        </p>
        <p className="mt-4 max-w-xl text-sm text-muted">
          La sesión es la misma tarifa: {site.sessionMinutes} min,{" "}
          {site.priceSessionUsd} USD. Se trabaja cómo pedir, no el libreto de
          él.
        </p>
      </Section>

      <Section className="border-t border-line pt-10 sm:pt-14">
        <GuideCards items={womenGuides} basePath="/mujeres" />
        <div className="mt-14">
          <WhatsAppCta message={waMessages.mujeres} className="min-h-14 px-8">
            Escribir PIDE
          </WhatsAppCta>
        </div>
      </Section>
    </>
  );
}
