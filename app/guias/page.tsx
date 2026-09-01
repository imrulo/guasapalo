import { GuideCards } from "@/components/GuideCards";
import { Eyebrow, PageTitle, Section } from "@/components/Section";
import { WhatsAppCta } from "@/components/WhatsAppCta";
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
      <Section className="lamp pt-16 sm:pt-20">
        <Eyebrow>Guías</Eyebrow>
        <PageTitle className="mt-4 max-w-3xl">
          Orientación pública. El oficio, en sesión.
        </PageTitle>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Cinco textos limpios. Sin receta sucia. Sin PDF. Si esta semana se te
          tranca, GUASA al WhatsApp.
        </p>
      </Section>

      <Section className="border-t border-line pt-10 sm:pt-14">
        <GuideCards />
        <div className="mt-14">
          <WhatsAppCta message={waMessages.guias} className="min-h-14 px-8">
            Esta semana se me tranca · GUASA
          </WhatsAppCta>
        </div>
      </Section>
    </>
  );
}
