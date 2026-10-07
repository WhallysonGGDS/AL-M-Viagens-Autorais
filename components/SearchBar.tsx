"use client";

const fields = [
  { id: "destino", label: "Destino", type: "text", placeholder: "Para onde você quer ir?" },
  { id: "datas", label: "Datas", type: "text", placeholder: "Escolha suas datas" },
];

const selectCls =
  "w-full appearance-none bg-transparent text-[15px] text-ink outline-none cursor-pointer";

export default function SearchBar() {
  return (
    <div data-search className="px-4 md:px-10">
      {/* Desktop/tablet: um objeto de vidro pousado sobre a fotografia */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="glass-light mx-auto hidden max-w-[1240px] grid-cols-[1.3fr_1fr_0.9fr_1fr_auto] items-center rounded-[28px] p-2 shadow-[0_30px_80px_-30px_rgb(13_26_40/0.6)] lg:grid"
      >
        {fields.map((f) => (
          <label key={f.id} className="group flex cursor-text flex-col gap-1 border-r border-ink/10 px-4 py-3 xl:px-6">
            <span className="eyebrow text-[0.6rem] text-muted">{f.label}</span>
            <input
              type={f.type}
              placeholder={f.placeholder}
              className="bg-transparent text-[15px] text-ink outline-none placeholder:text-ink/45"
            />
          </label>
        ))}
        <label className="flex flex-col gap-1 border-r border-ink/10 px-4 py-3 xl:px-6">
          <span className="eyebrow text-[0.6rem] text-muted">Viajantes</span>
          <select defaultValue="2" className={selectCls}>
            {["1", "2", "3", "4", "5+"].map((n) => (
              <option key={n} value={n}>
                {n} {n === "1" ? "viajante" : "viajantes"}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1 px-4 py-3 xl:px-6">
          <span className="eyebrow text-[0.6rem] text-muted">Estilo</span>
          <select defaultValue="" className={selectCls}>
            <option value="" disabled>
              Que tipo de viagem?
            </option>
            {["Lua de mel", "Expedição", "Gastronomia", "Família", "Luxo", "Aventura"].map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <button className="group flex h-full items-center gap-3 rounded-[22px] bg-deep px-7 text-[14px] text-sand transition-colors hover:bg-ink">
          Explorar <span className="cta-arrow">→</span>
        </button>
      </form>

      {/* Mobile/tablet: uma única decisão, sem formulário apertado */}
      <a
        href="#contato"
        className="glass-light group mx-auto flex items-center justify-between rounded-[24px] p-2 pl-5 max-w-[560px] shadow-[0_24px_60px_-28px_rgb(13_26_40/0.5)] lg:hidden"
      >
        <span className="flex flex-col py-2">
          <span className="eyebrow text-[0.58rem] text-muted">Sua próxima viagem</span>
          <span className="font-serif text-[1.45rem] leading-tight text-ink">Planejar minha viagem</span>
        </span>
        <span className="grid size-14 place-items-center rounded-[18px] bg-deep text-sand">
          <span className="cta-arrow">→</span>
        </span>
      </a>
    </div>
  );
}
