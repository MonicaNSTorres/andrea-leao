import { Sparkles, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export function TherapySection() {
  return (
    <section
      id="terapia"
      className="relative overflow-hidden bg-[#d2f5ef]/40 px-5 py-24"
    >
      <div className="absolute left-[-150px] top-10 h-80 w-80 rounded-full bg-[#69c8c2]/20 blur-3xl" />

      <div className="absolute right-[-120px] bottom-0 h-72 w-72 rounded-full bg-[#4a7d8f]/20 blur-3xl" />

      <div className="relative mx-auto max-w-5xl text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
          <Sparkles className="text-[#4a7d8f]" size={28} />
        </div>

        <h2 className="font-title text-3xl font-semibold leading-tight text-[#23414a] md:text-5xl">
          Terapia não é sobre dar conta de tudo sozinha
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#556b71]">
          É sobre ter um espaço seguro para falar, compreender emoções,
          reorganizar pensamentos e construir novas possibilidades com mais
          consciência e acolhimento.
        </p>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#556b71]">
          Um processo terapêutico voltado para quem deseja cuidar da saúde
          emocional e viver relações mais saudáveis consigo e com o mundo.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-[#4a7d8f] px-8 py-4 font-semibold text-white shadow-2xl transition hover:-translate-y-1 hover:bg-[#3d6d7d]"
        >
          Quero iniciar minha terapia
          <MessageCircle size={18} />
        </a>
      </div>
    </section>
  );
}