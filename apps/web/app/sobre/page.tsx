import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export default function SobrePage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-10 pb-12 lg:pt-14 lg:pb-16">
        <section className="container-site">
          <h1 className="text-4xl font-bold text-[var(--text-primary)]">Sobre o manubIA.AI</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[var(--text-secondary)]">
            O manubIA.AI nasceu para apoiar famílias brasileiras que desejam organizar melhor a vida financeira sem complicação.
            Nossa proposta é unir acolhimento e tecnologia para transformar dados em decisões mais claras para o dia a dia.
          </p>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[var(--text-secondary)]">
            Acreditamos que cuidar do dinheiro da casa pode ser mais leve quando existe uma visão simples, acompanhamento
            constante e suporte inteligente para ajustar prioridades ao longo do tempo.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
