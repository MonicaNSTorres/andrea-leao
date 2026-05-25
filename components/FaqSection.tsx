"use client";

import { Reveal } from "@/components/Reveal";

export function FaqSection() {
  const faqs = [
    {
      question: "A terapia é indicada para mim?",
      answer:
        "A psicoterapia pode auxiliar pessoas que vivenciam sofrimento emocional, dificuldades nos relacionamentos, transições de vida ou carreira, desafios da parentalidade ou desejo de ampliar o cuidado com a saúde mental.",
    },
    {
      question: "O atendimento pode ser online?",
      answer:
        "Sim. Andréa Leão realiza atendimentos presenciais em São José dos Campos e atendimentos online para brasileiros que vivem no Brasil ou no exterior.",
    },
    {
      question: "O atendimento é sigiloso?",
      answer:
        "Sim. Todo o processo terapêutico é conduzido com ética, sigilo e respeito à singularidade e à história de cada pessoa.",
    },
    {
      question: "Como faço para agendar?",
      answer:
        "Entre em contato pelo WhatsApp para verificar a disponibilidade de horários e obter informações sobre os atendimentos.",
    },
  ];

  return (
    <section
      id="duvidas"
      className="relative overflow-hidden bg-andrea-soft px-5 py-24"
    >
      <div className="absolute left-[-120px] top-10 h-72 w-72 rounded-full bg-[#9fe8d7]/30 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">

        <Reveal>
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#69c8c2]">
              Dúvidas frequentes
            </p>

            <h2 className="font-title text-3xl font-semibold text-[#23414a] md:text-5xl">
              Algumas perguntas importantes
            </h2>
          </div>
        </Reveal>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <Reveal
              key={faq.question}
              delay={index * 0.08}
            >
              <div className="group rounded-[2rem] border border-white/70 bg-white/65 p-7 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white hover:shadow-xl">

                <h3 className="text-xl font-semibold text-[#23414a] transition group-hover:text-[#4a7d8f]">
                  {faq.question}
                </h3>

                <p className="mt-3 leading-8 text-[#596f75]">
                  {faq.answer}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}