import {
  HeartHandshake,
  Leaf,
  Brain,
  MessageCircleHeart,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Mais clareza emocional",
    text: "Compreenda melhor seus sentimentos, pensamentos e padrões de comportamento.",
  },
  {
    icon: Leaf,
    title: "Redução da sobrecarga",
    text: "Aprenda a lidar com ansiedade, estresse e pressões do dia a dia com mais cuidado.",
  },
  {
    icon: HeartHandshake,
    title: "Relações mais saudáveis",
    text: "Desenvolva formas mais conscientes de se comunicar, se posicionar e se relacionar.",
  },
  {
    icon: Sparkles,
    title: "Autoconhecimento",
    text: "Reconheça sua história, suas necessidades e seus limites com mais gentileza.",
  },
  {
    icon: ShieldCheck,
    title: "Espaço seguro",
    text: "Um ambiente ético, sigiloso e acolhedor para falar sobre o que sente.",
  },
  {
    icon: MessageCircleHeart,
    title: "Fortalecimento emocional",
    text: "Construa recursos internos para atravessar fases difíceis com mais consciência.",
  },
];

export function BenefitsSection() {
  return (
    <section id="beneficios" className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#69c8c2]">
            Benefícios da terapia
          </p>

          <h2 className="font-title text-3xl font-semibold leading-tight text-[#23414a] sm:text-4xl md:text-5xl">
            Cuidar da mente também é cuidar da sua vida
          </h2>

          <p className="mt-5 text-base leading-8 text-[#5a7076] sm:text-lg">
            A psicoterapia oferece um espaço de escuta e elaboração para que
            você possa compreender sua história, fortalecer sua saúde emocional
            e construir novos caminhos.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group rounded-[2rem] border border-white/70 bg-white/65 p-6 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-xl sm:p-8"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}