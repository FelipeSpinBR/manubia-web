import Image from 'next/image';

type Feature = {
  title: string;
  text: string;
  image: string;
  imageAlt: string;
};

const features: Feature[] = [
  {
    title: 'Gastos por categoria com mais clareza',
    text: 'Veja onde estão os principais gastos da família e acompanhe os hábitos do dia a dia de forma mais visual e simples.',
    image: '/images/recurso-gastos-categorias-1400x900.png',
    imageAlt: 'Painel de gastos por categoria no aplicativo',
  },
  {
    title: 'Metas financeiras que fazem sentido para a sua família',
    text: 'Planeje objetivos com mais organização e acompanhe cada passo com mais tranquilidade ao longo do tempo.',
    image: '/images/recurso-metas-financeiras-1400x900.png',
    imageAlt: 'Tela de metas financeiras da família',
  },
  {
    title: 'Contas e cartões em uma visão só',
    text: 'Reúna as principais informações financeiras da família em um único lugar, com mais praticidade para acompanhar a rotina.',
    image: '/images/recurso-contas-cartoes-1400x900.png',
    imageAlt: 'Resumo com contas e cartões em uma única visão',
  },
  {
    title: 'Insights da IA para apoiar suas decisões',
    text: 'Receba leituras mais inteligentes sobre a vida financeira da família, com ajuda para perceber padrões, excessos e oportunidades.',
    image: '/images/recurso-insights-ia-1400x900.png',
    imageAlt: 'Painel com insights inteligentes para decisões financeiras da família',
  },
];

type FeaturesSectionProps = {
  compact?: boolean;
};

export function FeaturesSection({ compact = false }: FeaturesSectionProps) {
  return (
    <section className={compact ? 'bg-[var(--surface)] py-10 lg:py-14' : 'section-space bg-[var(--surface)]'} id="recursos">
      <div className="container-site">
        <h2 className="max-w-4xl text-3xl font-bold text-[var(--text-primary)]">
          Recursos pensados para trazer clareza, organização e apoio às decisões da família
        </h2>
        <p className="mt-3 text-lg text-[var(--text-secondary)]">
          Mais do que acompanhar números, o ManubIA ajuda sua família a entender melhor a própria vida financeira.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {features.map((feature) => (
            <article key={feature.title} className="card-soft overflow-hidden">
              <div className="relative h-40">
                <Image src={feature.image} alt={feature.imageAlt} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">{feature.title}</h3>
                <p className="mt-2 text-[var(--text-secondary)]">{feature.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
