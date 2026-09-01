import Link from "next/link";
import { LegalBlock } from "@/components/LegalBlock";
import { Eyebrow, PageTitle, Section } from "@/components/Section";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import { pageMeta, site, waMessages, waUrl } from "@/lib/site";

export const metadata = pageMeta({
  title: "Aviso legal",
  description:
    "Qué es GUASAPALO, para quién, cómo se contrata la sesión y qué no es. +18. No es terapia. No hay PDF.",
  path: "/aviso",
});

export default function AvisoPage() {
  return (
    <>
      <Section className="lamp pt-16 sm:pt-24">
        <Eyebrow>Legal</Eyebrow>
        <PageTitle className="mt-4 max-w-3xl">Aviso</PageTitle>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Condiciones de uso. En corto. Si algo de esto no te encaja, no
          escribas.
        </p>
      </Section>

      <Section className="border-t border-line">
        <div className="max-w-2xl space-y-10">
          <LegalBlock title="Qué es este sitio">
            <p>
              Guasapalo es entrenamiento práctico de comunicación íntima a
              distancia para adultos ({site.age}). WhatsApp o cámara. Qué decir,
              cómo dirigir, cómo pedir, cómo no desaparecer.
            </p>
            <p>
              No es terapia. No es sexología clínica. No es un servicio
              sanitario. No hay diagnóstico ni tratamiento.
            </p>
          </LegalBlock>

          <LegalBlock title="Para quién">
            <p>
              Hombres, en la home y en /guias. Mujeres, en{" "}
              <Link
                href="/mujeres"
                className="text-cream underline decoration-amber/70 underline-offset-4 hover:text-amber"
              >
                /mujeres
              </Link>
              . En los dos casos: adultos que consienten.
            </p>
            <p>
              Si hay violencia, abuso, menores o disfunción clínica, esto no es
              el lugar. Busca ayuda adecuada.
            </p>
          </LegalBlock>

          <LegalBlock title="El contenido público">
            <p>
              Las guías son orientativas. Las frases de ejemplo no son un acto
              sexual ni un diagnóstico. No hay encuentros. No hay cámara de más.
            </p>
            <p>
              Tú eres responsable de lo que le mandes a tu pareja y de no
              involucrar a nadie menor de dieciocho años.
            </p>
          </LegalBlock>

          <LegalBlock title="La sesión">
            <p>
              Sesión {site.sessionMinutes} min — {site.priceSessionUsd} USD.
              Pack 3 — {site.pricePackUsd} USD. Se paga antes, por WhatsApp
              (crypto o transferencia). Se agenda cuando llega el comprobante.
              No hay checkout en esta web.
            </p>
            <p>
              No hay PDF. No hay producto descargable. Se entrega un rato de
              video. Por eso no aplica el desistimiento típico de un archivo que
              se baja: si reservas y no te presentas sin aviso, la sesión se da
              por usada.
            </p>
            <p>
              Hombres escriben GUASA. Mujeres escriben PIDE. Así se sabe el
              terreno. En la de ellas se trabaja cómo pedir, no el libreto de
              él.
            </p>
          </LegalBlock>

          <LegalBlock title="Qué no prometemos">
            <p>
              No sustituimos psicólogo, sexólogo ni abogado. No hay garantía de
              resultado. Nadie te asegura que “tu pareja se va a encender”. Se
              entrena el lenguaje. El resto no se vende.
            </p>
          </LegalBlock>

          <LegalBlock title="Propiedad">
            <p>
              Marca Guasapalo, textos, dominio. No copies el método para
              revenderlo. Hecho con amor por{" "}
              <a
                href="https://github.com/imrulo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream underline decoration-amber/70 underline-offset-4 hover:text-amber"
              >
                imrulo.eth
              </a>
              .
            </p>
          </LegalBlock>

          <LegalBlock title="Ley y contacto">
            <p>Ley aplicable: {site.jurisdiction}.</p>
            <p>
              Responsable: {site.legalName}. Contacto:{" "}
              <a
                href={waUrl(waMessages.aviso)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream underline decoration-amber/70 underline-offset-4 hover:text-amber"
              >
                WhatsApp
              </a>{" "}
              y {site.email}.
            </p>
          </LegalBlock>
        </div>
        <WhatsAppCta message={waMessages.aviso} className="mt-14 min-h-12">
          Entendido. Escribir GUASA
        </WhatsAppCta>
      </Section>
    </>
  );
}
