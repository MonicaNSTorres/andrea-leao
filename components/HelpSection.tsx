"use client";

import { Brain, Flower2, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function HelpSection() {
  const items = [
    {
      icon: Brain,
      title: "Ansiedade e sobrecarga emocional",
      text: "Um espaço seguro para compreender emoções, pensamentos e lidar melhor com os desafios do dia a dia.",
    },
    {
      icon: Flower2,
      title: "Autoconhecimento",
      text: "Um processo terapêutico voltado para compreender sua história, fortalecer sua identidade e desenvolver clareza emocional.",
    },
    {
      icon: ShieldCheck,
      title: "Mudanças e novos ciclos",
      text: "Acolhimento para momentos de transição, conflitos internos, inseguranças e recomeços.",
    },
  ];

  return (
    <section className="bg-andrea-soft px-5 py-24">
      <div className="mx-auto max-w-7xl">

        <Reveal>
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#69c8c2]">
              Como posso ajudar
            </p>

            <h2 className="font-title text-3xl font-semibold text-[#23414a] md:text-5xl">
              Um espaço de acolhimento e cuidado emocional
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.08}
              className="h-full"
            >
              <div className="group h-full rounded-[2rem] border border-white/70 bg-white/60 p-8 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white hover:shadow-xl">

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d2f5ef] text-[#4a7d8f] transition group-hover:scale-105">
                  <item.icon size={28} />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-[#23414a]">
                  {item.title}
                </h3>

                <p className="leading-7 text-[#5a7076]">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}