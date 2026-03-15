import { FeaturesSection } from '@/components/features-section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export default function RecursosPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section-space pb-0">
          <div className="container-site">
            <h1 className="text-4xl font-bold text-[var(--text-primary)]">Recursos</h1>
            <p className="mt-4 max-w-3xl text-lg text-[var(--text-secondary)]">
              Funcionalidades pensadas para trazer clareza, organização e confiança para a rotina financeira da sua família.
            </p>
          </div>
        </section>
        <FeaturesSection />
      </main>
      <SiteFooter />
    </>
  );
}
