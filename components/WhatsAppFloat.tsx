"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export function WhatsAppFloat() {
  const [showBubble, setShowBubble] = useState(true);

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
    <div className="fixed bottom-5 right-5 z-50">
      {showBubble && (
        <div className="absolute bottom-[88px] right-0 w-[310px] rounded-3xl bg-[#121716] px-6 py-5 text-white shadow-2xl">
          <button
            type="button"
            onClick={() => setShowBubble(false)}
            className="absolute right-4 top-4 text-white/60 transition hover:text-white"
            aria-label="Fechar mensagem"
          >
            <X size={16} />
          </button>

          <div className="mb-3 flex items-center gap-2 text-sm font-bold uppercase text-[#25D366]">
            <span className="h-3 w-3 rounded-full bg-[#25D366]" />
            Online agora
          </div>

          <p className="pr-4 text-lg font-semibold leading-snug text-white/90">
            Posso ajudar você a agendar sua consulta?
          </p>

          <div className="absolute -bottom-3 right-12 h-7 w-7 rotate-45 bg-[#121716]" />
        </div>
      )}

      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />

      <a
        href={whatsappUrl}
        target="_blank"
        aria-label="WhatsApp Andréa Leão"
        onClick={handleClick}
        className="relative flex h-[76px] w-[76px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_20px_50px_rgba(37,211,102,0.45)] transition hover:scale-110"
      >
        <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-red-600 text-sm font-bold text-white">
          1
        </span>

        <MessageCircle size={40} strokeWidth={2.5} />
      </a>
    </div>
  );
}