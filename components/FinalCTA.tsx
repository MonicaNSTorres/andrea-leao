import { ArrowRight } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="px-5 pb-28">
      <div className="relative mx-auto overflow-hidden rounded-[3rem] bg-[#4a7d8f] px-8 py-16 text-center text-white shadow-2xl md:max-w-7xl md:px-16">
        <div className="absolute left-[-100px] top-[-100px] h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute bottom-[-100px] right-[-100px] h-72 w-72 rounded-full bg-[#9fe8d7]/20 blur-3xl" />

        <div className="relative">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#d2f5ef]">
            Seu processo começa aqui
          </p>

          <h2 className="font-title mx-auto max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
            Você não precisa atravessar tudo sozinha
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/85">
            Dê o primeiro passo para cuidar da sua saúde emocional com
            acolhimento, escuta e respeito ao seu tempo.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-[#4a7d8f] shadow-2xl transition hover:-translate-y-1"
          >
            Agendar consulta
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}