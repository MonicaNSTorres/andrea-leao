"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export function ExpatSection() {
  return (
    <section className="relative overflow-hidden bg-andrea-soft px-5 py-24">
      <div className="absolute left-[-120px] top-10 h-80 w-80 rounded-full bg-[#9fe8d7]/30 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

        <Reveal>
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#69c8c2]">
              Brasileiros no exterior
            </p>

            <h2 className="font-title text-3xl font-semibold leading-tight text-[#23414a] sm:text-4xl md:text-5xl">
              Você pode morar em outro país…
              <br />
              mas sua dor ainda fala português.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-[#5b7075]">

              <Reveal delay={0.08}>
                <p>
                  Você pode viver em outro idioma. Mas aquilo que te atravessa
                  emocionalmente ainda procura palavras na língua em que sua
                  história começou.
                </p>
              </Reveal>

              <Reveal delay={0.14}>
                <p>
                  Muitas pessoas conseguem se adaptar à rotina, ao trabalho e
                  até ao idioma. Mas quando o assunto envolve saudade,
                  pertencimento, solidão, insegurança ou identidade,
                  frequentemente surge a necessidade de ser compreendido
                  emocionalmente em sua língua materna.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <p>
                  A psicoterapia pode oferecer um espaço seguro para elaborar
                  essas experiências com profundidade, acolhimento e conexão
                  cultural.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.28}>
              <div className="mt-10 inline-flex rounded-full border border-white/60 bg-white/70 px-5 py-3 text-sm font-semibold text-[#4a7d8f] shadow-lg backdrop-blur-xl">
                Atendimento online para brasileiros em qualquer lugar do mundo ✨
              </div>
            </Reveal>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative">
            <div className="absolute -inset-3 rounded-[3rem] bg-gradient-to-br from-[#d2f5ef] via-[#9fe8d7] to-[#4a7d8f] opacity-50 blur-2xl" />

            <div className="relative overflow-hidden rounded-[3rem] border border-white/60 bg-white/60 p-3 shadow-2xl backdrop-blur-xl">
              <Image
                src="/images/andrea/andrea-expat.jpeg"
                alt="Psicóloga Andréa Leão"
                width={900}
                height={1200}
                className="h-[620px] w-full rounded-[2.5rem] object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}