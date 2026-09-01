import Link from "next/link";
import { CopyLinkButton } from "@/components/CopyLinkButton";
import { guides } from "@/lib/guides";
import { guideCanonical } from "@/lib/share";

export function GuideCards() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
      {guides.map((guide) => (
        <li
          key={guide.slug}
          className="relative flex h-full min-h-52 flex-col border border-line bg-surface transition-colors duration-200 hover:border-amber"
        >
          <CopyLinkButton
            url={guideCanonical(guide.slug)}
            compact
            className="absolute top-3 right-3 z-10"
          />
          <Link
            href={`/guias/${guide.slug}`}
            className="flex h-full flex-col p-5 pr-16 sm:p-6 sm:pr-16"
          >
            <p className="text-[0.65rem] tracking-[0.2em] text-amber uppercase">
              {guide.kicker}
            </p>
            <h2 className="mt-3 font-display text-2xl leading-tight text-cream">
              {guide.title}
            </h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
              {guide.teaser}
            </p>
            <span className="mt-6 inline-flex min-h-12 items-center justify-center bg-wine px-4 text-sm font-medium tracking-wide text-cream">
              Leer guía
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
