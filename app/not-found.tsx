import { ButtonLink } from "@/components/ButtonLink";
import { Eyebrow, PageTitle, Section } from "@/components/Section";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import { waMessages } from "@/lib/site";

export default function NotFound() {
  return (
    <Section className="lamp flex min-h-[70vh] flex-col justify-center pt-20">
      <Eyebrow>404</Eyebrow>
      <PageTitle className="mt-4 max-w-2xl">
        Esta página no está. El chat sí.
      </PageTitle>
      <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
        Te saliste del mapa. GUASA alcanza igual. O entra por las guías.
      </p>
      <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
        <WhatsAppCta message={waMessages.notFound} className="min-h-12">
          Escribir GUASA
        </WhatsAppCta>
        <ButtonLink href="/guias" variant="line">
          Leer las guías
        </ButtonLink>
      </div>
    </Section>
  );
}
