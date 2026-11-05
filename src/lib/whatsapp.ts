import { institute } from "@/content/institute";

/** Builds a wa.me click-to-chat link with a URL-encoded, pre-filled message. */
export function whatsappUrl(message: string = institute.whatsappMessage, number: string = institute.whatsapp) {
  const digits = number.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function courseWhatsappMessage(courseName: string) {
  return `Hello, I visited your website and would like to know more about the ${courseName} course — batches, fees and the admission process.`;
}
