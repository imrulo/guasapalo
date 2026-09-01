import { ButtonLink } from "@/components/ButtonLink";
import { FaqList } from "@/components/FaqList";
import { GuideCards } from "@/components/GuideCards";
import { PriceCards, PriceNote } from "@/components/PriceCards";
import { Container } from "@/components/Container";
import { Eyebrow, Section } from "@/components/Section";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import { homeFaq } from "@/lib/faq";
import { pageMeta, waMessages } from "@/lib/site";

export const metadata = pageMeta({
  title: "¿Qué es guasapalo?",
  description:
    "Ganas. WhatsApp o cámara. Ella lejos. Te pide que le hables y se te tranca la lengua. Sesión de 45 min. Se escribe GUASA.",
  path: "/",
});

const pain = [
  {
    title: "Se te tranca",
    body: "Ella pide que le hables. El chat se queda en blanco. Sabes lo que quieres. Las frases no salen.",
  },
  {
    title: "“Qué linda” apaga",
    body: "Rellenas con un halago de postal. Suena a extraño. El deseo pide dirección, no decoración.",
  },
  {
    title: "Desapareces después",
    body: "Se acaba la llamada y te sales de la escena. Ella lo nota. La próxima cuesta más.",
  },
] as const;

const notThis = [
  "No es terapia. No vamos a curar tu infancia.",
  "No es un curso de 40 horas.",
  "No hay PDF. El método no se descarga.",
  "No es un show. No hay cámara de más.",
] as const;

const steps = [
  {
    n: "01",
    title: "Escribes GUASA",
    body: "WhatsApp. La palabra. No tienes que contar tu vida.",
  },
  {
    n: "02",
    title: "Tres preguntas",
    body: "Terreno, distancia, qué se te tranca esta semana.",
  },
  {
    n: "03",
    title: "Pagas",
    body: "69 USD la sesión. Crypto o transferencia. Se coordina en el chat.",
  },
  {
    n: "04",
    title: "Sesión",
    body: "45 minutos por video. Sales con frases en tu boca y una tarea de 48 horas.",
  },
] as const;

export default function Home() {
  return (
    <>
      <section className="lamp relative overflow-hidden">
        <Container className="pb-10 pt-12 sm:pb-14 sm:pt-16">
          <p className="rise text-xs font-medium tracking-[0.28em] text-amber uppercase">
            Guasap + echar un palo
          </p>
          <h1 className="rise mt-4 max-w-3xl font-display text-4xl leading-[0.95] text-cream sm:text-6xl md:text-7xl">
            ¿Qué es guasapalo?
          </h1>
          <p className="rise mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-xl">
            Ganas. WhatsApp o cámara. Ella lejos. Te pide que le hables y se te
            tranca la lengua.
          </p>
          <div className="rise mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <WhatsAppCta message={waMessages.home} className="min-h-12 px-7">
              Escribir GUASA
            </WhatsAppCta>
            <ButtonLink href="/guias" variant="line" className="min-h-12">
              Leer las guías
            </ButtonLink>
          </div>
          <p className="rise mt-4 text-sm text-muted">
            No tienes que contar tu vida. Con la palabra alcanza.
          </p>
        </Container>
      </section>

      <Section id="guias" className="border-t border-line pt-10 sm:pt-14">
        <Eyebrow>Dos caminos</Eyebrow>
        <h2 className="mt-3 max-w-xl font-display text-3xl text-cream sm:text-4xl">
          Empieza por una guía. O escribe GUASA.
        </h2>
        <div className="mt-8">
          <GuideCards />
        </div>
      </Section>

      <Section className="border-t border-line">
        <p className="max-w-2xl font-display text-2xl leading-snug text-cream sm:text-3xl">
          Deseo a distancia. Lo que se pide cuando se tranca la lengua. No
          somos sexólogos. Somos entrenamiento: qué decir, cómo dirigir, cómo
          no desaparecer.
        </p>
        <p className="mt-6 max-w-xl text-sm text-muted">
          Esto le pasa a más de uno. No hace falta inflar números.
        </p>
      </Section>

      <Section className="border-t border-line bg-night-2">
        <Eyebrow>El trancón</Eyebrow>
        <h2 className="mt-4 max-w-xl font-display text-3xl text-cream sm:text-4xl">
          Tres formas de apagarte
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {pain.map((item) => (
            <article key={item.title} className="border-t border-line pt-6">
              <h3 className="font-display text-2xl text-cream">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <Eyebrow>Qué no es</Eyebrow>
            <ul className="mt-6 space-y-4">
              {notThis.map((line) => (
                <li
                  key={line}
                  className="border-l border-wine pl-4 text-cream"
                >
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>Qué sí es</Eyebrow>
            <p className="mt-6 font-display text-3xl leading-snug text-cream sm:text-4xl">
              45 minutos. Frases en tu tono. Para esta semana.
            </p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
              Sales con algo que te quepa en la boca. No con un personaje. No
              con un archivo para reenviar.
            </p>
            <WhatsAppCta message={waMessages.sesion} className="mt-8 min-h-12">
              Escribir GUASA
            </WhatsAppCta>
          </div>
        </div>
      </Section>

      <Section className="border-y border-line bg-night-2" id="como">
        <Eyebrow>Cómo funciona</Eyebrow>
        <h2 className="mt-4 font-display text-3xl text-cream sm:text-4xl">
          Cuatro pasos. Sin formulario.
        </h2>
        <ol className="mt-12 grid gap-10 sm:grid-cols-2">
          {steps.map((step) => (
            <li key={step.n} className="flex gap-5">
              <span className="font-display text-2xl text-amber">{step.n}</span>
              <div>
                <h3 className="font-display text-2xl text-cream">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="precio">
        <Eyebrow>Precio</Eyebrow>
        <h2 className="mt-4 font-display text-3xl text-cream sm:text-4xl">
          Se paga antes. Se agenda después.
        </h2>
        <div className="mt-10">
          <PriceCards />
          <PriceNote />
        </div>
      </Section>

      <Section className="border-t border-line bg-night-2">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-4 font-display text-3xl text-cream sm:text-4xl">
              Corto
            </h2>
          </div>
          <ButtonLink href="/faq" variant="line">
            Ver todas
          </ButtonLink>
        </div>
        <FaqList items={homeFaq} />
      </Section>

      <Section>
        <p className="max-w-xl font-display text-3xl leading-snug text-cream sm:text-4xl">
          Si esta semana se te tranca, no hace falta un discurso.
        </p>
        <p className="mt-4 text-muted">Escribes GUASA. Con la palabra alcanza.</p>
        <WhatsAppCta message={waMessages.home} className="mt-8 min-h-14 px-8">
          Escribir GUASA
        </WhatsAppCta>
      </Section>
    </>
  );
}
