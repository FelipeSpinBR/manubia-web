export function FinalCta() {
  return (
    <section className="section-space">
      <div className="container-site">
        <div
          className="card-soft px-8 py-14 text-center text-white lg:px-16"
          style={{ backgroundColor: 'var(--primary)' }}
        >
          <h2 className="text-3xl font-bold lg:text-4xl">Comece a cuidar da vida financeira da sua família com mais clareza</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-white/90">
            Transforme a rotina financeira da sua família em algo mais simples, organizado e fácil de acompanhar.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex rounded-full border border-[var(--border)] bg-white px-7 py-3 font-semibold text-[var(--primary)] transition hover:bg-[var(--surface-soft)]"
          >
            Começar grátis
          </a>
        </div>
      </div>
    </section>
  );
}
