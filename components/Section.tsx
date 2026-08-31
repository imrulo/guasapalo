import type { ReactNode } from "react";
import { Container } from "@/components/Container";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
};

export function Section({ children, id, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

type EyebrowProps = {
  children: ReactNode;
  className?: string;
};

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <p
      className={`text-xs font-medium tracking-[0.22em] text-amber uppercase ${className}`}
    >
      {children}
    </p>
  );
}

type PageTitleProps = {
  children: ReactNode;
  className?: string;
};

export function PageTitle({ children, className = "" }: PageTitleProps) {
  return (
    <h1
      className={`font-display text-4xl leading-[1.1] text-cream sm:text-5xl md:text-6xl ${className}`}
    >
      {children}
    </h1>
  );
}
