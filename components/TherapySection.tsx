"use client";

import { Sparkles, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function TherapySection() {
  return (
    <section
      id="terapia"
      className="relative overflow-hidden bg-andrea-dark px-5 py-24"
    >
      <div className="absolute left-[-150px] top-10 h-80 w-80 rounded-full bg-[#69c8c2]/20 blur-3xl" />

      <div className="absolute right-[-120px] bottom-0 h-72 w-72 rounded-full bg-[#4a7d8f]/20 blur-3xl" />

      <div className="relative mx-auto max-w-5xl text-center">
        <Reveal>
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/15 shadow-lg backdrop-blur-xl">
            <Sparkles className="text-white" size={28} />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="font-title text-3xl font-semibold leading-tight text-white md:text-5xl">
            A psicoterapia oferece um espaço de escuta e elaboração emocional
          </h2>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-white/80">
            A psicoterapia pode ser um importante recurso diante de momentos de
            sofrimento e crise emocional. Seu alcance, porém, vai além do alívio
            imediato das dificuldades.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-white/80">
            Trata-se de um processo de compreensão da experiência humana em sua
            complexidade — emoções, relações, escolhas, vulnerabilidades e
            diferentes formas de existir no mundo. Um cuidado que considera a
            singularidade de cada pessoa, respeitando sua história, limites e
            possibilidades.
          </p>
        </Reveal>

        <Reveal delay={0.26}>
          <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-white/80">
            Mais do que oferecer respostas prontas, a psicoterapia favorece a
            ampliação da compreensão emocional e o desenvolvimento de novos
            modos de lidar com os desafios, as mudanças, os vínculos e a própria
            condição humana em sua finitude.
          </p>
        </Reveal>

        <Reveal delay={0.34}>
          <a
            href={whatsappUrl}
            target="_blank"
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-[#23414a] shadow-[0_18px_45px_rgba(255,255,255,0.15)] transition hover:-translate-y-1 hover:scale-[1.02]"
          >
            Quero iniciar minha terapia
            <MessageCircle size={18} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}