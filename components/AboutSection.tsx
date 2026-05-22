import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export function AboutSection() {
  return (
    <section id="sobre" className="px-5 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
        <div className="relative">
          <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-[#9fe8d7]/40 blur-3xl" />

          <div className="relative overflow-hidden rounded-[3rem] border border-white/60 bg-white/60 p-3 shadow-2xl">
            <Image
              src="/images/andrea/andrea-sobre.jpeg"
              alt="Psicóloga Andréa Leão"
              width={900}
              height={1200}
              className="h-[680px] w-full rounded-[2.5rem] object-cover"
            />
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#69c8c2]">
            Sobre Andréa Leão
          </p>

          <h2 className="font-title text-3xl font-semibold leading-tight text-[#23414a] md:text-5xl">
            Uma escuta acolhedora, humana e respeitosa
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#586d73]">
            A psicoterapia é um espaço seguro para olhar para si com mais
            gentileza. Andréa Leão conduz seus atendimentos com ética,
            acolhimento e sensibilidade, respeitando a singularidade e o tempo
            de cada pessoa.
          </p>

          <p className="mt-6 text-lg leading-8 text-[#586d73]">
            O processo terapêutico busca fortalecer o autoconhecimento, ampliar
            a compreensão emocional e auxiliar na construção de caminhos mais
            leves e conscientes.
          </p>

          <div className="mt-10 space-y-5">
            {[
              "Atendimento psicológico presencial e online",
              "Escuta ética, sigilosa e acolhedora",
              "Espaço seguro para desenvolvimento emocional",
              "Atendimento individualizado",
            ].map((item) => (
              <div key={item} className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d2f5ef]">
                  <CheckCircle2 size={20} className="text-[#4a7d8f]" />
                </div>

                <span className="text-[#4f656b]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}