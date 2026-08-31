import Link from "next/link";
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
        Te saliste del mapa. GUASA alcanza igual. No hace falta volver a
        buscar el link correcto.
      </p>
      <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <WhatsAppCta message={waMessages.notFound}>Escribir GUASA</WhatsAppCta>
        <Link
          href="/"
          className="inline-flex min-h-11 items-center text-sm text-muted underline decoration-line underline-offset-4 hover:text-cream"
        >
          Volver al inicio
        </Link>
      </div>
    </Section>
  );
}
