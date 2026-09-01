import type { ReactNode } from "react";

type LegalBlockProps = {
  title: string;
  children: ReactNode;
};

export function LegalBlock({ title, children }: LegalBlockProps) {
  return (
    <article>
      <h2 className="font-display text-2xl text-cream">{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-muted">{children}</div>
    </article>
  );
}
