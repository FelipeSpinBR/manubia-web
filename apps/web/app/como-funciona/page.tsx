import { HowItWorksSection } from '@/components/how-it-works-section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export default function ComoFuncionaPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section-space pb-0">
          <div className="container-site">
            <h1 className="text-4xl font-bold text-[var(--text-primary)]">Como funciona</h1>
            <p className="mt-4 max-w-3xl text-lg text-[var(--text-secondary)]">
              Um caminho simples para sua família organizar o dinheiro, enxergar padrões e planejar decisões com mais calma.
            </p>
          </div>
        </section>
        <HowItWorksSection />
      </main>
      <SiteFooter />
    </>
  );
}
