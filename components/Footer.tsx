import Link from "next/link";
import { site, waMessages } from "@/lib/site";
import { Container } from "@/components/Container";
import { WhatsAppCta } from "@/components/WhatsAppCta";

const legal = [
  { href: "/sesion", label: "Sesión" },
  { href: "/guias", label: "Guías" },
  { href: "/faq", label: "Preguntas" },
  { href: "/aviso", label: "Aviso" },
  { href: "/privacidad", label: "Privacidad" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-line bg-night-2 pb-28 pt-14 sm:pb-24">
      <Container>
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-sm">
            <p className="font-sans text-xs font-semibold tracking-[0.28em] text-cream">
              {site.name}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Entrenamiento práctico. No es terapia. No hay PDF. Un hombre
              escribe GUASA y se trabaja esta semana.
            </p>
            <p className="mt-4 text-xs tracking-wide text-muted">
              {site.age} · Contenido para adultos · No es un acto sexual
            </p>
          </div>
          <WhatsAppCta message={waMessages.default}>Escribir GUASA</WhatsAppCta>
        </div>
        <div className="mt-12 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-6">
          {legal.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center text-sm text-muted transition-colors duration-200 hover:text-cream"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
