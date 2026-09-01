import { Eyebrow, PageTitle, Section } from "@/components/Section";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import { pageMeta, waMessages } from "@/lib/site";

export const metadata = pageMeta({
  title: "Aviso",
  description:
    "GUASAPALO no es terapia. +18. No tratamos trauma, violencia ni disfunción clínica. El contenido público no es un acto sexual.",
  path: "/aviso",
});

const blocks = [
  {
    title: "No es terapia",
    body: "Esto es entrenamiento práctico de lenguaje y dirección a distancia. No hay diagnóstico. No hay tratamiento. No sustituye a un profesional de la salud mental ni de la salud sexual clínica.",
  },
  {
    title: "+18",
    body: "El sitio y la sesión son para adultos. Si no tienes dieciocho años, no escribas. No trabajamos con menores.",
  },
  {
    title: "Lo que no tratamos",
    body: "Trauma, violencia, abuso, coerción, disfunción clínica, adicción. Si eso es el centro de lo que te pasa, busca ayuda adecuada. Aquí no se trabaja.",
  },
  {
    title: "Consentimiento",
    body: "Se trabaja sobre conversaciones entre adultos que consienten. Nada de lo que se ensaya sirve para presionar, humillar o saltarse un no.",
  },
  {
    title: "El contenido público no es un acto sexual",
    body: "Las guías son orientación. No son una escena. No son un servicio sexual. No hay encuentros. No hay cámaras de más. La sesión es formación, por video, de pago.",
  },
  {
    title: "Confidencialidad",
    body: "No publicamos nombres, números ni chats. Tú no reenvías la sesión como producto. No hay archivo descargable que circular.",
  },
] as const;

export default function AvisoPage() {
  return (
    <>
      <Section className="lamp pt-20 sm:pt-28">
        <Eyebrow>Legal</Eyebrow>
        <PageTitle className="mt-4 max-w-3xl">Aviso</PageTitle>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Leerlo no es un trámite de letra chica. Es el borde del trabajo.
        </p>
      </Section>
      <Section className="border-t border-line">
        <div className="max-w-2xl space-y-10">
          {blocks.map((block) => (
            <article key={block.title}>
              <h2 className="font-display text-2xl text-cream">{block.title}</h2>
              <p className="mt-3 leading-relaxed text-muted">{block.body}</p>
            </article>
          ))}
        </div>
        <WhatsAppCta message={waMessages.aviso} className="mt-14 min-h-12">
          Entendido. Escribir GUASA
        </WhatsAppCta>
      </Section>
    </>
  );
}
