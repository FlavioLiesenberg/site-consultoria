import { MessageCircle } from "lucide-react";
import { site } from "@/data/content";

export function WhatsAppButton() {
  const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed right-5 bottom-5 z-50 inline-flex items-center gap-2.5 rounded-full bg-brand px-4 py-3.5 font-semibold text-brand-foreground shadow-[var(--shadow-elevated)] transition-transform hover:-translate-y-0.5 sm:px-5"
    >
      <MessageCircle className="size-5" />
      <span className="hidden text-sm sm:inline">Falar no WhatsApp</span>
    </a>
  );
}
