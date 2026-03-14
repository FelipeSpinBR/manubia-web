import Image from "next/image";

export function SecuritySection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 md:grid-cols-2 md:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/images/seguranca-protecao-digital-1200x800.png"
            alt="Escudo digital representando segurança dos dados financeiros"
            width={1200}
            height={800}
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900 md:text-4xl">Segurança em primeiro lugar</h2>
          <p className="text-slate-600 md:text-lg">
            Seus dados financeiros protegidos com boas práticas de segurança e privacidade.
          </p>
        </div>
      </div>
    </section>
  );
}
