import Link from "next/link";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { waMessages, waUrl } from "@/lib/site";

const tabs = [
  { href: "/guias", label: "Guías", kind: "link" as const },
  { href: "/sesion", label: "Sesión", kind: "link" as const },
  {
    href: waUrl(waMessages.float),
    label: "WhatsApp",
    kind: "whatsapp" as const,
  },
];

export function MobileTabBar() {
  return (
    <nav
      aria-label="Acceso rápido"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-night/95 backdrop-blur-md md:hidden"
    >
      <ul className="grid grid-cols-3 pb-[env(safe-area-inset-bottom)]">
        {tabs.map((tab) => {
          const className =
            tab.kind === "whatsapp"
              ? "flex min-h-14 flex-col items-center justify-center gap-0.5 bg-amber text-[0.7rem] font-semibold tracking-wide text-night"
              : "flex min-h-14 flex-col items-center justify-center gap-0.5 text-[0.7rem] font-semibold tracking-wide text-cream";

          if (tab.kind === "whatsapp") {
            return (
              <li key={tab.label}>
                <a
                  href={tab.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  <WhatsAppIcon className="h-5 w-5 text-night" />
                  {tab.label}
                </a>
              </li>
            );
          }

          return (
            <li key={tab.href}>
              <Link href={tab.href} className={className}>
                {tab.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
