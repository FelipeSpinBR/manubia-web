export function HeroSection() {
  return (
    <section className="section-space">
      <div className="container-site grid items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-brand-600">Organização financeira familiar</p>
          <h1 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
            Mais clareza e tranquilidade para a vida financeira da sua família
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Com o apoio da IA, o ManubIA ajuda sua família a acompanhar gastos, organizar prioridades e cuidar melhor das
            decisões do dia a dia.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#" className="rounded-full bg-brand-600 px-6 py-3 font-semibold text-white hover:bg-brand-700">
              Começar grátis
            </a>
            <a href="#" className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-100">
              Conheça o ManubIA
            </a>
          </div>
        </div>

        <div className="card-soft p-5">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-sky-100 p-6">
            <div className="h-64 rounded-2xl bg-white/85 p-5">
              <p className="text-sm font-semibold text-slate-700">Gastos por categoria</p>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                {['Moradia', 'Alimentação', 'Transporte', 'Educação', 'Lazer'].map((item, idx) => (
                  <div key={item} className="grid grid-cols-[110px_1fr] items-center gap-2">
                    <span>{item}</span>
                    <div className="h-2 rounded-full bg-slate-200">
                      <div className="h-2 rounded-full bg-brand-500" style={{ width: `${80 - idx * 12}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-4 right-4 max-w-xs rounded-2xl bg-white p-4 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">Insight da IA</p>
              <p className="mt-1 text-sm text-slate-700">Percebemos aumento em Alimentação nas últimas semanas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
