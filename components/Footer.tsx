import Link from "next/link";
import { site, waMessages } from "@/lib/site";
import { Container } from "@/components/Container";
import { WhatsAppCta } from "@/components/WhatsAppCta";

const legal = [
  { href: "/guias", label: "Guías" },
  { href: "/sesion", label: "Sesión" },
  { href: "/faq", label: "FAQ" },
  { href: "/aviso", label: "Aviso" },
  { href: "/privacidad", label: "Privacidad" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-line bg-night-2 pb-[calc(6.75rem+env(safe-area-inset-bottom))] pt-14 md:pb-24">
      <Container>
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-sm">
            <p className="font-sans text-xs font-semibold tracking-[0.28em] text-cream">
              {site.name}
            </p>
            <p className="mt-4 text-sm font-medium tracking-wide text-cream">
              +18 · No es terapia
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Entrenamiento práctico. No hay PDF. Un hombre escribe GUASA y se
              trabaja esta semana.
            </p>
            <p className="mt-4 text-sm text-muted">
              Hecho con amor por{" "}
              <a
                href="https://github.com/imrulo"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-cream underline decoration-amber/70 underline-offset-4 hover:text-amber"
              >
                imrulo.eth
              </a>
            </p>
          </div>
          <WhatsAppCta message={waMessages.default} className="min-h-12">
            Escribir GUASA
          </WhatsAppCta>
        </div>
        <div className="mt-12 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-6">
          {legal.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center text-sm text-cream transition-colors duration-200 hover:text-amber"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
