export function LocationSection() {
  return (
    <section className="px-5 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#69c8c2]">
            Atendimento
          </p>

          <h2 className="font-title text-3xl font-semibold leading-tight text-[#23414a] md:text-5xl">
            Atendimento presencial em São José dos Campos e online para todo o
            Brasil
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#5a7076]">
            Um espaço acolhedor pensado para oferecer conforto, escuta e cuidado
            emocional durante o processo terapêutico.
          </p>

          <div className="mt-10 rounded-[2rem] border border-white/70 bg-white/70 p-7 shadow-sm">
            <h3 className="text-xl font-semibold text-[#23414a]">
              Endereço
            </h3>

            <p className="mt-4 leading-8 text-[#5a7076]">
              Av. Alfredo Ignácio Nogueira Penido, 255
              <br />
              Jardim Aquarius
              <br />
              São José dos Campos - SP
              <br />
              CEP: 12246-000
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-[#d2f5ef] px-4 py-2 text-sm font-medium text-[#4a7d8f]">
                Atendimento presencial
              </span>

              <span className="rounded-full bg-[#d2f5ef] px-4 py-2 text-sm font-medium text-[#4a7d8f]">
                Atendimento online
              </span>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[3rem] border border-white/60 bg-white/70 p-3 shadow-2xl">
          <iframe
            src="https://www.google.com/maps?q=Av.%20Alfredo%20Ign%C3%A1cio%20Nogueira%20Penido,%20255%20-%20Jardim%20Aquarius,%20S%C3%A3o%20Jos%C3%A9%20dos%20Campos%20-%20SP&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            className="min-h-[500px] rounded-[2.5rem]"
          />
        </div>
      </div>
    </section>
  );
}