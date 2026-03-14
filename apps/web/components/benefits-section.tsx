import Image from 'next/image';

const benefits = [
  {
    title: 'Entenda seus gastos',
    text: 'Veja com mais calma para onde o dinheiro da família está indo e entenda melhor os hábitos do dia a dia.',
  },
  {
    title: 'Veja tudo em um só lugar',
    text: 'Tenha receitas, despesas e objetivos reunidos de forma simples, para acompanhar a vida financeira da família com mais tranquilidade.',
  },
  {
    title: 'Organize a vida financeira da família',
    text: 'Crie uma rotina mais leve para planejar o mês, alinhar prioridades e cuidar melhor das decisões da casa.',
  },
];

export function BenefitsSection() {
  return (
    <section className="section-space bg-[#ffffff]">
      <div className="container-site grid gap-10 lg:grid-cols-2">
        <div className="card-soft overflow-hidden min-h-[340px] p-0">
          <Image
            src="/images/beneficios-familia-feliz-1200x800.png"
            alt="Família feliz em casa organizando a vida financeira"
            width={1200}
            height={800}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#1f2d24]">
            Mais clareza para a vida financeira da sua família
          </h2>

          <div className="mt-8 space-y-6">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="flex gap-4 rounded-2xl border border-[#d7e7dc] bg-[#edf7f0] p-5"
              >
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#0f8f4b]" />
                <div>
                  <h3 className="font-semibold text-[#1f2d24]">{benefit.title}</h3>
                  <p className="mt-1 text-[#5a6b61]">{benefit.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}