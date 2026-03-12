const navItems = ['Home', 'Como funciona', 'Recursos', 'Sobre'];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <div className="container-site flex h-20 items-center justify-between">
        <span className="text-2xl font-semibold tracking-tight text-brand-700">manubIA</span>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-medium text-slate-600 transition hover:text-brand-600"
            >
              {item}
            </a>
          ))}
          <a href="#" className="text-sm font-medium text-slate-600 transition hover:text-brand-600">
            Entrar
          </a>
          <a
            href="#"
            className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            Começar grátis
          </a>
        </nav>
      </div>
    </header>
  );
}
