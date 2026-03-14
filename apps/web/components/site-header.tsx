const navItems = ['Home', 'Como funciona', 'Recursos', 'Sobre'];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#d7e7dc]/90 bg-[#ffffff]/95 backdrop-blur">
      <div className="container-site flex h-20 items-center justify-between">
        <span className="text-2xl font-semibold tracking-tight text-[#0f8f4b]">manubIA</span>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-medium text-[#5a6b61] transition hover:text-[#0f8f4b]"
            >
              {item}
            </a>
          ))}
          <a href="#" className="text-sm font-medium text-[#5a6b61] transition hover:text-[#0f8f4b]">
            Entrar
          </a>
          <a
            href="#"
            className="rounded-full bg-[#0f8f4b] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0b6f3a]"
          >
            Começar grátis
          </a>
        </nav>
      </div>
    </header>
  );
}
