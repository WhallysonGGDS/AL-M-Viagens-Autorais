const links = [
  { label: "Destinos", href: "#destinos" },
  { label: "Experiências", href: "#experiencias" },
  { label: "Sobre", href: "#historias" },
  { label: "Contato", href: "#contato" },
];
const social = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "WhatsApp", href: "https://wa.me/5562999999999" },
  { label: "E-mail", href: "mailto:ola@alemviagens.com" },
];

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-ink text-sand">
      <div className="mx-auto max-w-[1320px] px-5 pt-20 md:px-10 md:pt-28">
        <div className="grid gap-12 md:grid-cols-12">
          <p className="font-serif text-[2rem] leading-[1.1] md:col-span-5">
            Viagens feitas para <em className="text-[#e7d3ad]">serem lembradas.</em>
          </p>
          <nav className="flex flex-col gap-3 md:col-span-2 md:col-start-8" aria-label="Rodapé">
            <p className="eyebrow mb-2 text-sand/40">Navegar</p>
            {links.map((l) => (
              <a key={l.label} href={l.href} className="link-line w-fit text-[15px] text-sand/85">{l.label}</a>
            ))}
          </nav>
          <div className="flex flex-col gap-3 md:col-span-3">
            <p className="eyebrow mb-2 text-sand/40">Conversar</p>
            {social.map((l) => (
              <a key={l.label} href={l.href} className="link-line w-fit text-[15px] text-sand/85">{l.label}</a>
            ))}
          </div>
        </div>
      </div>

      {/* A assinatura: a marca ocupando o horizonte */}
      <div className="mt-20 select-none border-t border-sand/10 md:mt-28">
        <p aria-hidden className="text-center font-serif text-[34vw] leading-[0.78] tracking-[-0.04em] text-sand/[0.06]">
          Além
        </p>
      </div>
      <div className="mx-auto flex max-w-[1320px] flex-col gap-2 px-5 pb-8 text-[12px] text-sand/40 md:flex-row md:justify-between md:px-10">
        <span>© 2026 Além Viagens Autorais · Goiânia · São Paulo</span>
        <span>Projeto conceitual de portfólio</span>
      </div>
    </footer>
  );
}
