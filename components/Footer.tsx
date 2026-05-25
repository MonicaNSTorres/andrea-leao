"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { whatsappUrl } from "@/lib/site";

const quickLinks = [
  { label: "Benefícios", href: "#beneficios" },
  { label: "Sobre", href: "#sobre" },
  { label: "Psicoterapia", href: "#terapia" },
  { label: "Atendimento", href: "#atendimento" },
  { label: "Dúvidas", href: "#duvidas" },
];

const supportLinks = [
  { label: "Brasileiros no exterior", href: "#brasileiros-exterior" },
  { label: "Ansiedade e sobrecarga", href: "#beneficios" },
  { label: "Autoconhecimento", href: "#beneficios" },
  { label: "Saúde emocional", href: "#beneficios" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/50 bg-[#f2f1ec]">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 md:gap-12 xl:grid-cols-[1.2fr_0.8fr_0.9fr_1fr]">
          <Reveal>
            <div className="flex flex-col items-start gap-5">
              <Image
                src="/logo.png"
                alt="Andréa Leão Psicóloga"
                width={220}
                height={90}
                className="h-auto w-[150px] sm:w-[180px]"
              />

              <p className="max-w-sm text-sm leading-7 text-[#5a7076]">
                Psicoterapia com escuta acolhedora, ética e respeitosa para
                quem busca autoconhecimento, saúde emocional e novos caminhos.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#69c8c2]">
                Navegação
              </p>

              <div className="mt-5 flex flex-col gap-3">
                {quickLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-sm text-[#5a7076] transition hover:text-[#4a7d8f]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#69c8c2]">
                Temas
              </p>

              <div className="mt-5 flex flex-col gap-3">
                {supportLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-sm text-[#5a7076] transition hover:text-[#4a7d8f]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#69c8c2]">
                Contato
              </p>

              <div className="mt-5 space-y-3 text-sm leading-7 text-[#5a7076]">
                <p>WhatsApp: (12) 98178-8004</p>
                <p>Atendimento presencial em São José dos Campos - SP</p>
                <p>
                  Atendimento online para brasileiros em qualquer lugar do mundo
                </p>
                <p>
                  Av. Alfredo Ignácio Nogueira Penido, 255 - Jardim Aquarius
                </p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#4a7d8f] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#3d6d7d] sm:w-auto"
              >
                Agendar consulta
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[#4a7d8f]/10 pt-6 text-center md:mt-14 md:flex-row md:items-center md:justify-between md:text-left">
          <p className="text-sm leading-6 text-[#5a7076]">
            © {new Date().getFullYear()} Andréa Leão — Psicóloga
          </p>

          <div className="flex flex-col gap-2 text-sm text-[#5a7076] md:flex-row md:items-center md:gap-5">
            <Link
              href="/politica-de-privacidade"
              className="transition hover:text-[#4a7d8f]"
            >
              Política de Privacidade
            </Link>

            <p className="text-[#69c8c2]">
              Site desenvolvido por Mônica Torres
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}