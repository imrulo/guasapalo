import { FaqList } from "@/components/FaqList";
import { Eyebrow, PageTitle, Section } from "@/components/Section";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import { fullFaq } from "@/lib/faq";
import { pageMeta, waMessages } from "@/lib/site";

export const metadata = pageMeta({
  title: "Preguntas frecuentes",
  description:
    "Qué es la sesión, cómo se paga, por qué no hay PDF, para quién es GUASAPALO y qué no tratamos.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <Section className="lamp pt-20 sm:pt-28">
        <Eyebrow>FAQ</Eyebrow>
        <PageTitle className="mt-4 max-w-3xl">
          Preguntas. Sin teatro.
        </PageTitle>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Si la tuya no está, escribe GUASA. No hace falta un formulario.
        </p>
      </Section>
      <Section className="border-t border-line">
        <FaqList items={fullFaq} />
        <WhatsAppCta message={waMessages.faq} className="mt-12">
          Seguir por WhatsApp
        </WhatsAppCta>
      </Section>
    </>
  );
}
