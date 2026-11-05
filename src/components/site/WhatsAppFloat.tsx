import { whatsappUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./icons";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed right-4 bottom-4 z-40 inline-flex items-center gap-2 rounded-full bg-whatsapp p-3.5 text-whatsapp-foreground shadow-lift transition-transform hover:-translate-y-0.5 sm:right-6 sm:bottom-6 sm:pr-5"
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      <WhatsAppIcon className="size-7" />
      <span className="hidden text-sm font-semibold sm:inline">Chat with us</span>
    </a>
  );
}
