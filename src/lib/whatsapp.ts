// Substitua pelo número real da empresa: país + DDD + número, apenas dígitos.
export const WHATSAPP_NUMBER = "5579999999999";

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string): void {
  window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
}
