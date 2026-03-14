const steps = [
  {
    title: 'Conecte suas contas',
    text: 'Reúna em um só lugar as principais informações financeiras da família. O ManubIA foi pensado para facilitar esse começo e transformar dados espalhados em uma visão mais organizada do dia a dia.',
  },
  {
    title: 'Veja seus gastos',
    text: 'Acompanhe receitas, despesas e movimentações com mais clareza. Em vez de tentar entender tudo sozinho, sua família passa a enxergar melhor para onde o dinheiro está indo e o que merece mais atenção.',
  },
  {
    title: 'Receba insights da IA',
    text: 'O ManubIA analisa os dados e ajuda a identificar padrões, mudanças e oportunidades de melhoria. Assim, fica mais fácil perceber excessos, ajustar hábitos e cuidar melhor da rotina financeira.',
  },
  {
    title: 'Planeje melhor a vida financeira',
    text: 'Com mais clareza sobre a situação da família, o planejamento se torna mais leve e possível. O ManubIA ajuda a transformar acompanhamento em ação, apoiando decisões com mais segurança e tranquilidade.',
  },
];

export function HowItWorksSection() {
  return (
    <section className="section-space" id="como-funciona">
      <div className="container-site">
        <h2 className="text-3xl font-bold text-[#1f2d24]">Como funciona</h2>
        <p className="mt-3 max-w-3xl text-lg text-[#5a6b61]">
          Um processo simples para ajudar sua família a entender melhor o dinheiro e tomar decisões com mais clareza.
        </p>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {steps.map((step, index) => (
            <article key={step.title} className="card-soft p-6">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#dff3e6] text-sm font-semibold text-[#0b6f3a]">
                {index + 1}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-[#1f2d24]">{step.title}</h3>
              <p className="mt-2 text-[#5a6b61]">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
