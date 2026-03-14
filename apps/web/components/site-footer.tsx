const links = ['Como funciona', 'Recursos', 'Sobre', 'Privacidade', 'Contato', 'Instagram'];

export function SiteFooter() {
  return (
    <footer className="border-t border-[#d7e7dc] bg-[#ffffff] py-10">
      <div className="container-site flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <span className="text-2xl font-semibold tracking-tight text-[#0f8f4b]">manubIA</span>
        <nav className="flex flex-wrap gap-4 text-sm text-[#5a6b61]">
          {links.map((link) => (
            <a
              key={link}
              href={link === 'Como funciona' ? '/como-funciona' : link === 'Recursos' ? '/recursos' : link === 'Sobre' ? '/sobre' : '#'}
              className="hover:text-[#0f8f4b]"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
