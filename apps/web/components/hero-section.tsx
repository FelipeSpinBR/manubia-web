import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 md:grid-cols-2 md:px-6 lg:px-8">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
            Organize as finanças da sua família com tranquilidade
          </h1>
          <p className="text-base text-slate-600 md:text-lg">
            Tenha clareza sobre gastos, metas e contas em um só lugar, com uma experiência simples e segura.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-2xl overflow-hidden rounded-2xl shadow-xl">
          <Image
            src="/images/hero-casal-financas-1600x900.png"
            alt="Casal organizando as finanças com o ManubIA"
            width={1600}
            height={900}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
