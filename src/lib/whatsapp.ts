import { COMPANY } from "./company";

export const WHATSAPP_NUMBER = COMPANY.phones[1].whatsappNumber;

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string): void {
  window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
}
