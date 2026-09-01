import Link from "next/link";
import { LegalBlock } from "@/components/LegalBlock";
import { Eyebrow, PageTitle, Section } from "@/components/Section";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import { pageMeta, site, waMessages, waUrl } from "@/lib/site";

export const metadata = pageMeta({
  title: "Privacidad",
  description:
    "Qué datos hay, para qué, quién los ve. WhatsApp es el canal. No vendemos listas. No hay newsletter.",
  path: "/privacidad",
});

export default function PrivacidadPage() {
  return (
    <>
      <Section className="lamp pt-16 sm:pt-24">
        <Eyebrow>Legal</Eyebrow>
        <PageTitle className="mt-4 max-w-3xl">Privacidad</PageTitle>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Poco dato. Poco rastro. El sitio convierte a un chat, no a una lista.
        </p>
      </Section>

      <Section className="border-t border-line">
        <div className="max-w-2xl space-y-10">
          <LegalBlock title="Responsable">
            <p>
              {site.legalName}. Sitio: {site.url}. Contacto:{" "}
              <a
                href={waUrl(waMessages.privacidad)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream underline decoration-amber/70 underline-offset-4 hover:text-amber"
              >
                WhatsApp
              </a>{" "}
              y {site.email}.
            </p>
          </LegalBlock>

          <LegalBlock title="Qué datos">
            <p>
              Los que tú escribes por WhatsApp: el nombre que muestres, el
              número, que estás en distancia, si el terreno es chat o cámara, y
              lo que haga falta para agendar y cobrar (comprobante).
            </p>
            <p>
              No pedimos nudes. No envíes fotos íntimas. Con cinco mensajes de
              texto alcanza.
            </p>
            <p>
              Esta web no tiene formulario de correo ni cuenta. El dato entra
              por el chat.
            </p>
          </LegalBlock>

          <LegalBlock title="Para qué">
            <p>
              Responder, agendar, cobrar, dar la sesión. Nada más. No vendemos
              listas. No hacemos perfiles publicitarios con tus chats. No hay
              newsletter.
            </p>
          </LegalBlock>

          <LegalBlock title="WhatsApp / Meta">
            <p>
              Al escribir por WhatsApp, aplican las políticas de WhatsApp y de
              Meta. El mensaje viaja por su red. Nosotros no publicamos tu hilo.
              Ellos tienen las suyas. Léelas en WhatsApp si te importa el
              detalle técnico.
            </p>
          </LegalBlock>

          <LegalBlock title="Conservación">
            <p>
              El tiempo de la relación comercial y lo mínimo después. No es un
              archivo de marketing. Si quieres que cerremos el hilo, lo pides.
            </p>
          </LegalBlock>

          <LegalBlock title="Tus derechos">
            <p>
              Acceder, rectificar, borrar. Lo pides por WhatsApp o por{" "}
              {site.email}. Sin formulario.
            </p>
          </LegalBlock>

          <LegalBlock title="Quién más toca datos">
            <p>
              Vercel (hosting). Cloudflare (DNS / CDN). WhatsApp (el canal). No
              hay otros encargados inventados. Pagos: crypto o transferencia, se
              coordinan en el chat. Esta web no guarda tarjetas.
            </p>
          </LegalBlock>

          <LegalBlock title="Cookies">
            <p>
              No hay píxel ni GA4 instalados. El detalle está en{" "}
              <Link
                href="/cookies"
                className="text-cream underline decoration-amber/70 underline-offset-4 hover:text-amber"
              >
                /cookies
              </Link>
              .
            </p>
          </LegalBlock>
        </div>
        <WhatsAppCta message={waMessages.privacidad} className="mt-14 min-h-12">
          Escribir GUASA
        </WhatsAppCta>
      </Section>
    </>
  );
}
