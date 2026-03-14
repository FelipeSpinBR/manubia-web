import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="section-space">
      <div className="container-site grid items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#0f8f4b]">
            Organização financeira familiar
          </p>

          <h1 className="text-4xl font-bold leading-tight text-[#1f2d24] lg:text-5xl">
            Mais clareza e tranquilidade para a vida financeira da sua família
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#5a6b61]">
            Com o apoio da IA, o ManubIA ajuda sua família a acompanhar gastos, organizar prioridades e cuidar melhor das
            decisões do dia a dia.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#"
              className="rounded-full bg-[#0f8f4b] px-6 py-3 font-semibold text-white hover:bg-[#0b6f3a]"
            >
              Começar grátis
            </a>

            <a
              href="#"
              className="rounded-full border border-[#d7e7dc] px-6 py-3 font-semibold text-[#1f2d24] hover:bg-[#edf7f0]"
            >
              Conheça o ManubIA
            </a>
          </div>
        </div>

        <div className="card-soft overflow-hidden p-0">
          <Image
            src="/images/hero-casal-financas-1600x900.png"
            alt="Casal organizando finanças em casa"
            width={1600}
            height={900}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}