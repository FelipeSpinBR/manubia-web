const navItems = ['Home', 'Como funciona', 'Recursos', 'Sobre'];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--border)] bg-[color:var(--surface)]/90 backdrop-blur">
      <div className="container-site flex h-20 items-center justify-between">
        <span className="text-2xl font-semibold tracking-tight text-[var(--primary)]">manubIA</span>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-medium text-[var(--text-secondary)] transition hover:text-[var(--primary)]"
            >
              {item}
            </a>
          ))}
          <a href="#" className="text-sm font-medium text-[var(--text-secondary)] transition hover:text-[var(--primary)]">
            Entrar
          </a>
          <a
            href="#"
            className="rounded-full bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--primary-hover)]"
          >
            Começar grátis
          </a>
        </nav>
      </div>
    </header>
  );
}
