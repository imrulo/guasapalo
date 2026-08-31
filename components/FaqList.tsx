import type { FaqItem } from "@/lib/faq";

type FaqListProps = {
  items: FaqItem[];
};

export function FaqList({ items }: FaqListProps) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.q} className="group py-5">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-left text-cream marker:content-none [&::-webkit-details-marker]:hidden">
            <span className="font-display text-xl sm:text-2xl">{item.q}</span>
            <span
              aria-hidden="true"
              className="shrink-0 text-amber transition-transform duration-200 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
