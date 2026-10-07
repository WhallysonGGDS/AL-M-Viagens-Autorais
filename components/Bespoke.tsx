"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useScene } from "@/lib/gsap";

const steps = [
  { n: "I", t: "Uma conversa", d: "Sem formulário. Queremos saber como você gosta de acordar." },
  { n: "II", t: "Um roteiro autoral", d: "Hotéis, mesas, guias e tempos livres desenhados para você." },
  { n: "III", t: "Uma viagem sem atrito", d: "Concierge 24h do embarque ao último jantar." },
];

export default function Bespoke() {
  const root = useRef<HTMLElement>(null);

  useScene(root, ({ isDesktop }) => {
    gsap.fromTo("[data-b-img]", { yPercent: -8 }, {
      yPercent: 8,
      ease: "none",
      scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true },
    });
    gsap.from("[data-b-frame]", {
      clipPath: isDesktop ? "inset(0% 0% 0% 100%)" : "inset(100% 0% 0% 0%)",
      duration: 1.8,
      ease: "expo.inOut",
      scrollTrigger: { trigger: "[data-b-frame]", start: "top 75%" },
    });
    gsap.from("[data-b-chip]", { autoAlpha: 0, y: 20, duration: 1.2, delay: 1, ease: "expo.out", scrollTrigger: { trigger: "[data-b-frame]", start: "top 75%" } });
    gsap.from("[data-b-step]", {
      autoAlpha: 0,
      y: 30,
      stagger: 0.15,
      duration: 1.2,
      ease: "expo.out",
      scrollTrigger: { trigger: "[data-b-steps]", start: "top 80%" },
    });
  });

  return (
    <section ref={root} id="sob-medida" className="bg-sand-2 py-28 md:py-44">
      <div className="mx-auto grid max-w-[1320px] gap-14 px-5 md:px-10 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <div data-b-frame className="relative aspect-[4/5] overflow-hidden rounded-[6px] lg:aspect-[5/6]">
            <div data-b-img className="absolute -inset-y-[10%] inset-x-0">
              <Image
                src="/images/textura-cortina.webp"
                alt="Cortinas de linho tocadas pela luz da tarde"
                fill
                sizes="(min-width:1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div data-b-chip className="glass-light absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4 rounded-[18px] px-5 py-4 md:right-auto md:min-w-[20rem]">
              <div>
                <p className="eyebrow text-[0.58rem] text-muted">Roteiro nº 0412</p>
                <p className="mt-1 font-serif text-[1.35rem] leading-tight">Kyoto & Maldivas</p>
              </div>
              <p className="text-right text-[12px] leading-snug text-muted">
                16 noites<br />em ritmo lento
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center lg:col-span-5 lg:col-start-8">
          <p className="eyebrow mb-8 text-muted"><span className="text-gold">—</span> Viagens sob medida</p>
          <h2 className="font-serif text-[clamp(3rem,6vw,5.8rem)] leading-[0.92] tracking-[-0.02em]">
            Sua viagem.<br />
            <em>Do seu jeito.</em>
          </h2>
          <p className="mt-8 max-w-[26rem] text-[16px] leading-relaxed text-ink/75">
            Cada roteiro é criado de acordo com seu ritmo, seus interesses e a forma como você deseja viver o mundo.
          </p>

          <ol data-b-steps className="mt-12 border-t border-ink/12">
            {steps.map((s) => (
              <li key={s.n} data-b-step className="grid grid-cols-[3rem_1fr] gap-2 border-b border-ink/12 py-5">
                <span className="font-serif text-lg italic text-gold">{s.n}</span>
                <div>
                  <p className="text-[15px] font-medium">{s.t}</p>
                  <p className="mt-1 text-[14px] leading-relaxed text-muted">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>

          <a href="#contato" className="group mt-10 flex w-fit items-center gap-4 rounded-full bg-deep py-2.5 pr-2.5 pl-7 text-[14px] text-sand transition-colors hover:bg-ink">
            Criar minha viagem
            <span className="grid size-9 place-items-center rounded-full bg-sand/12">
              <span className="cta-arrow">→</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
