import { Eyebrow, PageTitle, Section } from "@/components/Section";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import { pageMeta, waMessages } from "@/lib/site";

export const metadata = pageMeta({
  title: "Privacidad",
  description:
    "GUASAPALO trabaja por WhatsApp. No vendemos listas. Cookies mínimas. Sin checkout en la web.",
  path: "/privacidad",
});

const blocks = [
  {
    title: "WhatsApp es el canal",
    body: "Esta web no pide correo ni cuenta. El contacto es por WhatsApp. Lo que escribas ahí queda en esa conversación, sujeta a las reglas de Meta/WhatsApp y a que no publiquemos tu hilo.",
  },
  {
    title: "Qué datos hay",
    body: "El número con el que escribes, el nombre que muestres en WhatsApp, y lo que decidas contar para agendar (terreno, distancia, comprobante de pago). No hay formulario en el sitio que reciba eso.",
  },
  {
    title: "No vendemos listas",
    body: "No revendemos números. No hacemos newsletters. No hay CRM de infoproducto. Si algún día hubiera una herramienta de agenda, se avisará aquí.",
  },
  {
    title: "Pagos",
    body: "Crypto y transferencias se coordinan por el chat. Esta web no procesa tarjetas ni guarda datos bancarios. El comprobante sirve para agendar, no para armar una base comercial.",
  },
  {
    title: "Cookies mínimas",
    body: "No hay píxel instalado. No hay Google Analytics de mentira. El hosting (Vercel) puede registrar lo técnico habitual de un sitio: visitas, errores, país aproximado. Si se instala medición, irá con su aviso. Hay un TODO en el código para no fingir tracking.",
  },
  {
    title: "Conservación y baja",
    body: "Los chats se tratan como trabajo confidencial, no como archivo de marketing. Si quieres que cerremos el hilo, lo dices por WhatsApp. El dominio y los logs del hosting siguen las políticas del proveedor.",
  },
] as const;

export default function PrivacidadPage() {
  return (
    <>
      <Section className="lamp pt-20 sm:pt-28">
        <Eyebrow>Legal</Eyebrow>
        <PageTitle className="mt-4 max-w-3xl">Privacidad</PageTitle>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Poco dato. Poco rastro. El sitio convierte a un chat, no a una lista.
        </p>
      </Section>
      <Section className="border-t border-line">
        <div className="max-w-2xl space-y-10">
          {blocks.map((block) => (
            <article key={block.title}>
              <h2 className="font-display text-2xl text-cream">{block.title}</h2>
              <p className="mt-3 leading-relaxed text-muted">{block.body}</p>
            </article>
          ))}
        </div>
        <WhatsAppCta message={waMessages.privacidad} className="mt-14 min-h-12">
          Escribir GUASA
        </WhatsAppCta>
      </Section>
    </>
  );
}
