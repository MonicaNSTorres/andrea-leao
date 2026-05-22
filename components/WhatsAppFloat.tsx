"use client";

import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export function WhatsAppFloat() {
  function handleClick() {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-SEU_ID_AQUI",
        value: 1.0,
        currency: "BRL",
      });
    }
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      aria-label="WhatsApp Andréa Leão"
      onClick={handleClick}
      className="fixed bottom-5 right-5 z-50 flex h-16 w-16 animate-pulse items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-105"
    >
      <MessageCircle size={30} />
    </a>
  );
}