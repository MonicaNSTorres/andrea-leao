"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

const links = [
  { href: "#beneficios", label: "Benefícios" },
  { href: "#sobre", label: "Sobre" },
  { href: "#terapia", label: "Psicoterapia" },
  { href: "#atendimento", label: "Atendimento" },
  { href: "#duvidas", label: "Dúvidas" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/40 bg-[#f2f1ec]/75 shadow-sm backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="Logo Andréa Leão"
            width={180}
            height={70}
            priority
            className="h-auto w-[140px] object-contain sm:w-[170px]"
          />
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-[#4a7d8f] lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-[#23414a]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          className="hidden rounded-full bg-[#4a7d8f] px-5 py-3 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-[#3d6d7d] md:inline-flex"
        >
          Agendar consulta
        </a>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#69c8c2]/30 bg-white/70 text-[#4a7d8f] shadow-sm backdrop-blur-xl md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/40 bg-[#f2f1ec]/95 px-5 py-5 shadow-2xl backdrop-blur-2xl md:hidden">
          <nav className="flex flex-col gap-3 text-[#4a7d8f]">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl bg-white/65 px-4 py-4 text-sm font-semibold shadow-sm"
              >
                {link.label}
              </a>
            ))}

            <a
              href={whatsappUrl}
              target="_blank"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-2xl bg-[#4a7d8f] px-4 py-4 text-center text-sm font-semibold text-white shadow-xl"
            >
              Agendar consulta
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}