import { waMessages } from "@/lib/site";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function WhatsAppFloat() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 hidden justify-end p-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] md:flex sm:p-6">
      <WhatsAppCta
        message={waMessages.float}
        variant="float"
        className="pointer-events-auto"
        aria-label="Escribir GUASA por WhatsApp"
      >
        <WhatsAppIcon className="h-7 w-7 text-wa" />
      </WhatsAppCta>
    </div>
  );
}
