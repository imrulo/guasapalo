import { notFound } from "next/navigation";
import { ShareBar } from "@/components/ShareBar";
import { Eyebrow, PageTitle, Section } from "@/components/Section";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import { getWomenGuide, womenGuides } from "@/lib/women-guides";
import { pageMeta, waMessageForWomen } from "@/lib/site";

type WomenGuideParams = PageProps<"/mujeres/[slug]">;

export function generateStaticParams() {
  return womenGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: WomenGuideParams) {
  const { slug } = await params;
  const guide = getWomenGuide(slug);
  if (!guide) {
    return {};
  }
  return pageMeta({
    title: guide.title,
    description: guide.description,
    path: `/mujeres/${guide.slug}`,
  });
}

export default async function WomenGuidePage({ params }: WomenGuideParams) {
  const { slug } = await params;
  const guide = getWomenGuide(slug);
  if (!guide) {
    notFound();
  }

  const path = `/mujeres/${guide.slug}`;
  const sessionMessage = waMessageForWomen(guide.slug);

  return (
    <>
      <Section className="lamp pt-16 sm:pt-24">
        <Eyebrow>{guide.kicker}</Eyebrow>
        <PageTitle className="mt-4 max-w-3xl">{guide.title}</PageTitle>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          {guide.description}
        </p>
        <div className="mt-8 max-w-2xl">
          <ShareBar
            title={guide.title}
            path={path}
            heading="Pásalo"
          />
        </div>
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
          <ShareBar title={guide.title} path={path} heading="Pásalo" />
          <p className="mt-10 font-display text-2xl text-cream">
            Si esta semana no sabes pedirlo, PIDE al WhatsApp.
          </p>
          <WhatsAppCta
            message={sessionMessage}
            className="mt-6 min-h-14 w-full max-w-md px-8 text-base"
          >
            Escribir PIDE
          </WhatsAppCta>
        </div>
      </Section>
    </>
  );
}
