const pillars = [
  {
    title: 'Privacidade dos dados',
    text: 'As informações da sua família devem ser tratadas com respeito e proteção.',
  },
  {
    title: 'Controle do usuário',
    text: 'Você precisa ter clareza sobre o uso das informações e sobre sua experiência na plataforma.',
  },
  {
    title: 'Tratamento responsável',
    text: 'O ManubIA nasce com o compromisso de lidar com dados financeiros de forma séria, cuidadosa e alinhada à LGPD.',
  },
];

export function SecuritySection() {
  return (
    <section className="section-space">
      <div className="container-site grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Sua informação financeira protegida com seriedade</h2>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            O ManubIA foi pensado para tratar informações financeiras com responsabilidade, clareza e respeito à privacidade, em
            linha com os princípios da LGPD.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="card-soft p-5">
                <h3 className="font-semibold text-slate-900">{pillar.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="card-soft min-h-72 bg-gradient-to-br from-slate-100 to-sky-50 p-6" />
      </div>
    </section>
  );
}
