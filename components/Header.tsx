import Link from "next/link";
import { nav, site, waMessages } from "@/lib/site";
import { WhatsAppCta } from "@/components/WhatsAppCta";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/90 bg-night/85 backdrop-blur-md">
      <div className="mx-auto flex min-h-14 max-w-5xl items-center justify-between gap-2 px-4 sm:min-h-16 sm:px-8">
        <Link
          href="/"
          className="shrink-0 font-sans text-[0.65rem] font-semibold tracking-[0.18em] text-cream sm:text-[0.8rem] sm:tracking-[0.28em]"
        >
          {site.name}
        </Link>
        <nav aria-label="Principal" className="flex items-center gap-0.5 sm:gap-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center px-2.5 text-sm font-medium text-cream transition-colors duration-200 hover:text-amber sm:px-3"
            >
              {item.label}
            </Link>
          ))}
          <WhatsAppCta
            message={waMessages.header}
            className="ml-1 min-h-11 px-3 text-sm sm:min-h-12 sm:px-5"
          >
            <span className="sm:hidden">GUASA</span>
            <span className="hidden sm:inline">Escribir GUASA</span>
          </WhatsAppCta>
        </nav>
      </div>
    </header>
  );
}
