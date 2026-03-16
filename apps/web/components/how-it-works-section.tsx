const steps = [
  {
    title: 'Conecte suas contas',
    text: 'Reúna em um só lugar as principais informações financeiras da família. O manubIA.AI foi pensado para facilitar esse começo e transformar dados espalhados em uma visão mais organizada do dia a dia.',
  },
  {
    title: 'Veja seus gastos',
    text: 'Acompanhe receitas, despesas e movimentações com mais clareza. Em vez de tentar entender tudo sozinho, sua família passa a enxergar melhor para onde o dinheiro está indo e o que merece mais atenção.',
  },
  {
    title: 'Receba insights da IA',
    text: 'O manubIA.AI analisa os dados e ajuda a identificar padrões, mudanças e oportunidades de melhoria. Assim, fica mais fácil perceber excessos, ajustar hábitos e cuidar melhor da rotina financeira.',
  },
  {
    title: 'Planeje melhor a vida financeira',
    text: 'Com mais clareza sobre a situação da família, o planejamento se torna mais leve e possível. O manubIA.AI ajuda a transformar acompanhamento em ação, apoiando decisões com mais segurança e tranquilidade.',
  },
];

type HowItWorksSectionProps = {
  compact?: boolean;
};

export function HowItWorksSection({ compact = false }: HowItWorksSectionProps) {
  return (
    <section className={compact ? 'py-10 lg:py-14' : 'section-space'} id="como-funciona">
      <div className="container-site">
        <h2 className="text-3xl font-bold text-[var(--text-primary)]">Como funciona</h2>
        <p className="mt-3 max-w-3xl text-lg text-[var(--text-secondary)]">
          Um processo simples para ajudar sua família a entender melhor o dinheiro e tomar decisões com mais clareza.
        </p>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {steps.map((step, index) => (
            <article key={step.title} className="card-soft p-6">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--primary-soft)] text-sm font-semibold text-[var(--primary)]">
                {index + 1}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-[var(--text-primary)]">{step.title}</h3>
              <p className="mt-2 text-[var(--text-secondary)]">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
