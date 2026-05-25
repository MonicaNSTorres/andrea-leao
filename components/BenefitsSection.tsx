import {
  HeartHandshake,
  Leaf,
  Brain,
  MessageCircleHeart,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

const benefits = [
  {
    icon: Brain,
    title: "Saúde mental e compreensão emocional",
    text: "Compreenda sentimentos, pensamentos e padrões de comportamento com mais profundidade, favorecendo uma relação mais consciente consigo, com o outro e com suas escolhas.",
  },
  {
    icon: HeartHandshake,
    title: "Relações e comunicação",
    text: "Desenvolva formas mais maduras de se comunicar, estabelecer limites e se posicionar em vínculos afetivos, familiares e profissionais.",
  },
  {
    icon: Sparkles,
    title: "Transições de carreira e decisões importantes",
    text: "Elabore mudanças, dúvidas e escolhas profissionais com discernimento, segurança emocional e maior consciência dos seus valores e prioridades.",
  },
  {
    icon: Leaf,
    title: "Orientação parental",
    text: "Aprofunde a compreensão sobre os desafios da parentalidade, fortalecendo vínculos, presença emocional e formas mais conscientes de cuidado.",
  },
  {
    icon: ShieldCheck,
    title: "Fortalecimento emocional",
    text: "Fortaleça recursos emocionais e comportamentais para lidar com momentos de crise, mudança ou sofrimento emocional.",
  },
  {
    icon: MessageCircleHeart,
    title: "Escuta clínica qualificada",
    text: "Um acompanhamento ético, sigiloso e humanizado, sustentado por experiência clínica, profundidade técnica e respeito à história de cada pessoa.",
  },
];

export function BenefitsSection() {
  return (
    <section id="beneficios" className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#69c8c2]">
              Benefícios da terapia
            </p>

            <h2 className="font-title text-3xl font-semibold leading-tight text-[#23414a] sm:text-4xl md:text-5xl">
              Cuidar da mente também é cuidar da sua vida
            </h2>

            <p className="mt-5 text-base leading-8 text-[#5a7076] sm:text-lg">
              A psicoterapia oferece um espaço de escuta e elaboração emocional,
              favorecendo o autoconhecimento, a promoção da saúde mental e formas
              mais conscientes de compreender os relacionamentos, a carreira e os
              desafios da vida contemporânea.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 0.08} className="h-full">
              <div className="group h-full rounded-[2rem] border border-white/70 bg-white/65 p-6 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-xl sm:p-8">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d2f5ef] text-[#4a7d8f] transition group-hover:scale-105">
                  <benefit.icon size={27} />
                </div>

                <h3 className="text-xl font-semibold text-[#23414a]">
                  {benefit.title}
                </h3>

                <p className="mt-3 leading-7 text-[#5a7076]">
                  {benefit.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}