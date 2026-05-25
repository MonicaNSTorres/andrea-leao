"use client";

import {
  Brain,
  GraduationCap,
  HeartHandshake,
  Mic,
  PenLine,
  ShieldCheck,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";

const formations = [
  "Neuropsicologia",
  "Modelagem Cognitiva",
  "Terapia da Compaixão",
  "Psicologia Hospitalar",
  "Saúde Mental",
  "ABA",
  "Orientação de Carreira",
  "Orientação Parental",
];

export function TrajectorySection() {
  return (
    <section className="relative overflow-hidden bg-andrea-soft px-5 py-20 md:py-28">
      <div className="absolute right-[-140px] top-20 h-80 w-80 rounded-full bg-[#9fe8d7]/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        <Reveal>
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#69c8c2]">
              Trajetória profissional
            </p>

            <h2 className="font-title text-3xl font-semibold leading-tight text-[#23414a] sm:text-4xl md:text-5xl">
              Ciência, escuta e experiência humana no cuidado emocional
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#5a7076]">
              Andréa Leão é psicóloga, educadora e pesquisadora, com mais de 15
              anos de trajetória dedicada ao desenvolvimento humano e à saúde
              emocional. Ao longo de sua carreira, acompanhou milhares de
              pessoas em processos de cuidado, autoconhecimento e
              desenvolvimento emocional.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">

          <Reveal className="lg:col-span-2">
            <div className="rounded-[2rem] border border-white/70 bg-white/65 p-7 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white hover:shadow-xl lg:col-span-2">

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d2f5ef] text-[#4a7d8f]">
                <GraduationCap size={28} />
              </div>

              <h3 className="text-2xl font-semibold text-[#23414a]">
                Formação interdisciplinar
              </h3>

              <p className="mt-4 leading-8 text-[#5a7076]">
                Mestre em Redes Neurais Artificiais pelo INPE, construiu uma
                formação interdisciplinar que integra ciência, cognição,
                comportamento humano e saúde mental.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {formations.map((item, index) => (
                  <Reveal
                    key={item}
                    delay={index * 0.04}
                  >
                    <span className="rounded-full bg-[#d2f5ef] px-4 py-2 text-sm font-semibold text-[#4a7d8f]">
                      {item}
                    </span>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-[2rem] border border-white/70 bg-[#4a7d8f] p-7 text-white shadow-xl">

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <ShieldCheck size={28} />
              </div>

              <h3 className="text-2xl font-semibold">
                Mais de 15 anos
              </h3>

              <p className="mt-4 leading-8 text-white/85">
                Uma prática clínica marcada por profundidade técnica,
                consistência ética e compreensão singular da experiência humana.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: HeartHandshake,
              title: "Clínica psicológica",
              text: "Atuação voltada ao cuidado emocional, autoconhecimento e desenvolvimento humano.",
            },
            {
              icon: Mic,
              title: "Educação e palestras",
              text: "Experiência como professora universitária, palestrante e orientadora.",
            },
            {
              icon: PenLine,
              title: "Escrita e comunicação",
              text: "Conteúdos que aproximam conhecimento científico e linguagem acessível.",
            },
          ].map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.08}
              className="h-full"
            >
              <div className="group h-full rounded-[2rem] border border-white/70 bg-white/65 p-7 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white hover:shadow-xl">

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d2f5ef] text-[#4a7d8f] transition group-hover:scale-105">
                  <item.icon size={24} />
                </div>

                <h3 className="text-xl font-semibold text-[#23414a]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-[#5a7076]">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.18}>
          <div className="mt-6 rounded-[2rem] border border-white/70 bg-white/65 p-7 shadow-sm backdrop-blur-xl transition hover:bg-white hover:shadow-xl">

            <div className="flex flex-col gap-5 md:flex-row md:items-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#d2f5ef] text-[#4a7d8f]">
                <Brain size={24} />
              </div>

              <p className="leading-8 text-[#5a7076]">
                Sua experiência ultrapassa o contexto clínico, abrangendo
                atuação como professora universitária, pesquisadora,
                palestrante, comunicadora e orientadora parental. Ao longo da
                carreira, participou de projetos, formações e eventos voltados
                ao desenvolvimento emocional, educação e relações humanas, além
                de realizar atendimento multicultural com diferentes perfis e
                contextos de vida.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}