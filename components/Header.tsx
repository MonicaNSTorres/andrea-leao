"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/30 bg-[#f2f1ec]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo Andréa Leão"
            width={180}
            height={70}
            priority
            className="h-auto w-[140px] object-contain sm:w-[170px]"
          />
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#4a7d8f] md:flex">
          <a href="#sobre" className="transition hover:text-[#23414a]">
            Sobre
          </a>

          <a href="#terapia" className="transition hover:text-[#23414a]">
            Psicoterapia
          </a>

          <a href="#duvidas" className="transition hover:text-[#23414a]">
            Dúvidas
          </a>
        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          className="hidden rounded-full bg-[#4a7d8f] px-5 py-3 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-[#3d6d7d] md:inline-flex"
        >
          Agendar consulta
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#69c8c2]/30 bg-white/60 text-[#4a7d8f] shadow-sm md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="border-t border-white/30 bg-[#f2f1ec]/95 px-5 py-5 shadow-2xl backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-4 text-[#4a7d8f]">
            <a
              href="#sobre"
              onClick={() => setOpen(false)}
              className="rounded-2xl bg-white/60 px-4 py-4 text-sm font-semibold shadow-sm"
            >
              Sobre
            </a>

            <a
              href="#terapia"
              onClick={() => setOpen(false)}
              className="rounded-2xl bg-white/60 px-4 py-4 text-sm font-semibold shadow-sm"
            >
              Psicoterapia
            </a>

            <a
              href="#duvidas"
              onClick={() => setOpen(false)}
              className="rounded-2xl bg-white/60 px-4 py-4 text-sm font-semibold shadow-sm"
            >
              Dúvidas
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
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