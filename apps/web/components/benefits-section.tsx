import Image from "next/image";

export function BenefitsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 md:grid-cols-2 md:px-6 lg:px-8">
        <div className="order-2 space-y-4 md:order-1">
          <h2 className="text-2xl font-semibold text-slate-900 md:text-4xl">Benefícios para toda a família</h2>
          <p className="text-slate-600 md:text-lg">
            Acompanhe o orçamento, reduza desperdícios e tome decisões melhores com quem você ama.
          </p>
        </div>

        <div className="order-1 overflow-hidden rounded-2xl shadow-lg md:order-2">
          <Image
            src="/images/beneficios-familia-feliz-1200x800.png"
            alt="Família feliz consultando planejamento financeiro"
            width={1200}
            height={800}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
