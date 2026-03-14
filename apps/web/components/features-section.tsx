import Image from "next/image";

type FeatureCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  width: number;
  height: number;
};

function FeatureCard({ title, description, imageSrc, imageAlt, width, height }: FeatureCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-hidden">
        <Image src={imageSrc} alt={imageAlt} width={width} height={height} className="h-auto w-full object-cover" />
      </div>
      <div className="space-y-2 p-6">
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </article>
  );
}

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl space-y-8 px-4 md:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-slate-900 md:text-4xl">Recursos que simplificam sua rotina financeira</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            title="Gastos por categoria"
            description="Visualize rapidamente para onde seu dinheiro está indo e ajuste hábitos com confiança."
            imageSrc="/images/recurso-gastos-categorias-1400x900.png"
            imageAlt="Tela com gráfico de gastos por categoria"
            width={1400}
            height={900}
          />

          <FeatureCard
            title="Metas financeiras"
            description="Crie metas realistas e acompanhe o progresso para realizar planos importantes."
            imageSrc="/images/recurso-metas-financeiras-1400x900.png"
            imageAlt="Painel com metas financeiras e progresso"
            width={1400}
            height={900}
          />

          <FeatureCard
            title="Contas e cartões"
            description="Gerencie vencimentos e evite atrasos com uma visão centralizada de contas e cartões."
            imageSrc="/images/recurso-contas-cartoes-1400x900.png"
            imageAlt="Resumo de contas e cartões em painel financeiro"
            width={1400}
            height={900}
          />
        </div>
      </div>
    </section>
  );
}
