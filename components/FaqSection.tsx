export function FaqSection() {
  const faqs = [
    {
      question: "A terapia é indicada para mim?",
      answer:
        "A psicoterapia pode ajudar pessoas que estão enfrentando ansiedade, insegurança, conflitos emocionais, mudanças, sobrecarga ou que desejam se conhecer melhor.",
    },
    {
      question: "O atendimento pode ser online?",
      answer:
        "Sim. Andréa Leão realiza atendimentos presenciais em São José dos Campos e também atendimentos online para todo o Brasil.",
    },
    {
      question: "O atendimento é sigiloso?",
      answer:
        "Sim. Todo o processo terapêutico é conduzido com ética, sigilo e respeito à história de cada pessoa.",
    },
    {
      question: "Como faço para agendar?",
      answer:
        "Você pode clicar no botão de WhatsApp do site e enviar uma mensagem para verificar disponibilidade de horários.",
    },
  ];

  return (
    <section id="duvidas" className="px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#69c8c2]">
            Dúvidas frequentes
          </p>

          <h2 className="font-title text-3xl font-semibold text-[#23414a] md:text-5xl">
            Algumas perguntas importantes
          </h2>
        </div>

        <div className="space-y-5">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-[2rem] border border-white/70 bg-white/65 p-7 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-[#23414a]">
                {faq.question}
              </h3>

              <p className="mt-3 leading-8 text-[#596f75]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}