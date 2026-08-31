import { site, waMessages } from "@/lib/site";
import { WhatsAppCta } from "@/components/WhatsAppCta";

export function PriceCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <article className="border border-amber/40 bg-surface p-7 sm:p-8">
        <p className="text-xs tracking-[0.2em] text-amber uppercase">
          Principal
        </p>
        <h3 className="mt-3 font-display text-3xl text-cream">
          Sesión {site.sessionMinutes} min
        </h3>
        <p className="mt-2 font-display text-4xl text-cream">
          {site.priceSessionUsd} USD
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Video. Frases en tu tono. Tarea de 48 horas. Se agenda cuando llega el
          comprobante.
        </p>
        <WhatsAppCta message={waMessages.sesion} className="mt-8" block>
          Quiero la sesión
        </WhatsAppCta>
      </article>
      <article className="border border-line bg-night-2 p-7 sm:p-8">
        <p className="text-xs tracking-[0.2em] text-muted uppercase">
          Pack
        </p>
        <h3 className="mt-3 font-display text-3xl text-cream">
          3 sesiones
        </h3>
        <p className="mt-2 font-display text-4xl text-cream">
          {site.pricePackUsd} USD
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Misma lógica, tres veces. Para meter el hábito en la boca, no para
          coleccionar módulos.
        </p>
        <WhatsAppCta message={waMessages.pack} variant="line" className="mt-8" block>
          Quiero el pack
        </WhatsAppCta>
      </article>
    </div>
  );
}

export function PriceNote() {
  return (
    <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted">
      Crypto y transferencias: se coordinan por WhatsApp. No hay checkout en la
      web. Se agenda cuando llega el comprobante.
    </p>
  );
}
