import { notFound } from "next/navigation";
import { Eyebrow, PageTitle, Section } from "@/components/Section";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import { getGuide, guides } from "@/lib/guides";
import { pageMeta, waMessageForGuide } from "@/lib/site";

type GuideParams = PageProps<"/guias/[slug]">;

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: GuideParams) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) {
    return {};
  }
  return pageMeta({
    title: guide.title,
    description: guide.description,
    path: `/guias/${guide.slug}`,
  });
}

export default async function GuidePage({ params }: GuideParams) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) {
    notFound();
  }

  const message = waMessageForGuide(guide.title);

  return (
    <>
      <Section className="lamp pt-20 sm:pt-28">
        <Eyebrow>{guide.kicker}</Eyebrow>
        <PageTitle className="mt-4 max-w-3xl">{guide.title}</PageTitle>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          {guide.description}
        </p>
      </Section>

      <Section className="border-t border-line pt-12 sm:pt-16">
        <article className="max-w-2xl">
          {guide.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="mb-5 text-[1.0625rem] leading-[1.7] text-cream/90"
            >
              {paragraph}
            </p>
          ))}
        </article>
        <div className="mt-14 max-w-2xl border-t border-line pt-10">
          <p className="font-display text-2xl text-cream">
            Si te trancas esta semana, GUASA al WhatsApp.
          </p>
          <WhatsAppCta message={message} className="mt-6">
            Escribir GUASA
          </WhatsAppCta>
        </div>
      </Section>
    </>
  );
}
