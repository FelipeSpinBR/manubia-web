import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="section-space">
      <div className="container-site grid items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">
            Organização financeira familiar
          </p>

          <h1 className="text-4xl font-bold leading-tight text-[var(--text-primary)] lg:text-5xl">
            Mais clareza e tranquilidade para a vida financeira da sua família
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--text-secondary)]">
            Com o apoio da IA, o manubIA.AI ajuda sua família a acompanhar gastos, organizar prioridades e cuidar melhor das
            decisões do dia a dia.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#"
              className="rounded-full bg-[var(--primary)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--primary-hover)]"
            >
              Começar grátis
            </a>

            <a
              href="#"
              className="rounded-full border border-[var(--border)] bg-white px-6 py-3 font-semibold text-[var(--primary)] transition hover:bg-[var(--surface-soft)]"
            >
              Conheça o manubIA.AI
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
