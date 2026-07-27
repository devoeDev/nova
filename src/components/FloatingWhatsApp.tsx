import { MessageCircle } from "lucide-react";
import { openWhatsApp } from "../lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <button
      className="floating-whatsapp"
      type="button"
      aria-label="Solicitar orçamento pelo WhatsApp"
      onClick={() => openWhatsApp("Olá! Vim pelo site da Nova Aliança e gostaria de solicitar um orçamento.")}
    >
      <MessageCircle aria-hidden="true" />
      <span>Orçamento</span>
    </button>
  );
}
