"use client";

import Image from "next/image";
import { ArrowRight, Heart, MapPin, Monitor, ShieldCheck } from "lucide-react";
import { whatsappUrl } from "@/lib/site";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-andrea-aqua px-5 pb-16 pt-28 sm:pt-32 md:pb-28 md:pt-40">
      <div className="absolute left-[-140px] top-20 h-72 w-72 rounded-full bg-[#9fe8d7]/60 blur-3xl" />
      <div className="absolute right-[-140px] top-52 h-80 w-80 rounded-full bg-[#4a7d8f]/25 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10 text-center md:text-left"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-2 text-xs font-semibold text-[#4a7d8f] shadow-lg backdrop-blur-xl sm:text-sm">
            <Heart size={16} />
            Psicóloga em São José dos Campos e online
          </span>

          <h1 className="font-title mx-auto max-w-3xl text-3xl font-semibold leading-tight text-[#23414a] sm:text-4xl md:mx-0 md:text-6xl">
            Psicoterapia com{" "}
            <span className="bg-gradient-to-r from-[#4a7d8f] to-[#69c8c2] bg-clip-text text-transparent">
              profundidade clínica
            </span>
            , escuta qualificada e cuidado humano.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#4f656b] sm:text-lg md:mx-0">
            Atendimento presencial no Jardim Aquarius, em São José dos Campos,
            e online para brasileiros em diferentes regiões do mundo.
          </p>

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-[#4f656b] sm:text-lg md:mx-0">
            Psicoterapia presencial no Jardim Aquarius e online para brasileiros
            em qualquer lugar do mundo, com escuta ética, acolhedora e
            respeitosa.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <a
              href={whatsappUrl}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#4a7d8f] px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(74,125,143,0.35)] transition hover:-translate-y-1 hover:bg-[#3d6d7d] sm:text-base"
            >
              Agendar consulta
              <ArrowRight size={18} />
            </a>

            <a
              href="#beneficios"
              className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/70 px-7 py-4 text-sm font-semibold text-[#4a7d8f] shadow-lg backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white sm:text-base"
            >
              Ver benefícios da terapia
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { icon: MapPin, label: "Jardim Aquarius" },
              { icon: Monitor, label: "Brasileiros no mundo" },
              { icon: ShieldCheck, label: "Sigilo e ética" },
            ].map((item) => (
              <div
                key={item.label}
                className="group flex items-center justify-center gap-2 rounded-2xl border border-white/70 bg-white/60 px-4 py-3 text-sm font-semibold text-[#4a7d8f] shadow-lg backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white md:justify-start"
              >
                <item.icon
                  size={17}
                  className="transition group-hover:scale-110"
                />
                {item.label}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto w-full max-w-[430px] md:max-w-none"
        >
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[#d2f5ef] via-[#69c8c2] to-[#4a7d8f] opacity-70 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/45 p-2 shadow-[0_30px_90px_rgba(74,125,143,0.25)] backdrop-blur-xl sm:p-3 md:rounded-[3rem]">
            <Image
              src="/images/andrea/andrea-hero.jpeg"
              alt="Psicóloga Andréa Leão"
              width={900}
              height={1200}
              priority
              className="h-[430px] w-full rounded-[2rem] object-cover object-center sm:h-[540px] md:h-[640px] md:rounded-[2.5rem]"
            />

            <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/60 bg-white/75 p-4 shadow-2xl backdrop-blur-xl">
              <p className="text-sm font-semibold text-[#23414a]">
                Atendimento humanizado para quem busca equilíbrio emocional,
                autoconhecimento e transformação.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}