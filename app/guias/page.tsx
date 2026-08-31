import Link from "next/link";
import { Eyebrow, PageTitle, Section } from "@/components/Section";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import { guides } from "@/lib/guides";
import { pageMeta, waMessages } from "@/lib/site";

export const metadata = pageMeta({
  title: "Guías",
  description:
    "Guías públicas y orientativas: por qué se te va la voz, las 4 puertas, por qué “qué linda” enfría, el minuto después, chat vs cámara.",
  path: "/guias",
});

export default function GuiasPage() {
  return (
    <>
      <Section className="lamp pt-20 sm:pt-28">
        <Eyebrow>Guías</Eyebrow>
        <PageTitle className="mt-4 max-w-3xl">
          Orientación pública. El oficio, en sesión.
        </PageTitle>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Cinco textos limpios. Sin receta sucia. Sin PDF. Si esta semana se te
          tranca, GUASA al WhatsApp.
        </p>
      </Section>

      <Section className="border-t border-line pt-0 sm:pt-0">
        <ul className="divide-y divide-line border-y border-line">
          {guides.map((guide) => (
            <li key={guide.slug}>
              <Link
                href={`/guias/${guide.slug}`}
                className="group flex min-h-11 flex-col gap-2 py-8 transition-colors duration-200 hover:bg-night-2/50 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
              >
                <div>
                  <p className="text-xs tracking-[0.2em] text-amber uppercase">
                    {guide.kicker}
                  </p>
                  <h2 className="mt-2 font-display text-2xl text-cream group-hover:text-amber sm:text-3xl">
                    {guide.title}
                  </h2>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                    {guide.description}
                  </p>
                </div>
                <span className="shrink-0 text-sm text-amber">Leer</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-14">
          <WhatsAppCta message={waMessages.guias}>
            Esta semana se me tranca · GUASA
          </WhatsAppCta>
        </div>
      </Section>
    </>
  );
}
