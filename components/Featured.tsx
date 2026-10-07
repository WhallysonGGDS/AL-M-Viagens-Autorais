"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useScene } from "@/lib/gsap";

const facts = [
  { k: "Melhor época", v: "Maio a outubro" },
  { k: "Duração ideal", v: "10 a 14 noites" },
  { k: "Experiências", v: "Veleiro nas Cíclades · Jantar em Oia · Vinícolas vulcânicas" },
];

export default function Featured() {
  const root = useRef<HTMLElement>(null);

  useScene(root, ({ isDesktop }) => {
    // Cena 03 — a janela se abre, a foto respira devagar, a informação chega por partes
    const tl = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: { trigger: root.current, start: "top top", end: "bottom bottom", scrub: 1 },
    });
    tl.fromTo(
      "[data-f-frame]",
      { clipPath: isDesktop ? "inset(14% 12% 14% 12% round 10px)" : "inset(10% 5% 10% 5% round 10px)" },
      { clipPath: "inset(0% 0% 0% 0% round 0px)", duration: 1 },
    )
      .fromTo("[data-f-img]", { scale: 1.22 }, { scale: 1.02, duration: 3 }, 0)
      .from("[data-f-line]", { yPercent: 110, stagger: 0.12, duration: 0.6, ease: "power2.out" }, 0.75)
      .from("[data-f-fact]", { autoAlpha: 0, y: 24, stagger: 0.25, duration: 0.5, ease: "power2.out" }, 1.5)
      .from("[data-f-cta]", { autoAlpha: 0, y: 16, duration: 0.4 }, 2.3)
      .to({}, { duration: 0.6 });
  });

  return (
    <section ref={root} className="relative h-[260vh] bg-deep text-sand md:h-[300vh]">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <div data-f-frame className="absolute inset-0 overflow-hidden">
          <div data-f-img className="absolute inset-0 will-change-transform">
            <Image
              src="/images/grecia-santorini.webp"
              alt="Igrejas de cúpulas azuis em Santorini ao pôr do sol"
              fill
              sizes="100vw"
              className="object-cover object-[30%_center]"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(13_26_40/0.05)_30%,rgb(13_26_40/0.7)_100%)] max-md:bg-[linear-gradient(180deg,rgb(13_26_40/0)_25%,rgb(13_26_40/0.85)_100%)]" />
        </div>

        <div className="relative mx-auto flex h-full max-w-[1320px] flex-col justify-end px-5 pb-12 md:items-end md:justify-center md:px-10 md:pb-0">
          <div className="w-full md:max-w-[40rem]">
            <p className="eyebrow mb-6 flex items-center gap-3 text-sand/80">
              <span className="text-gold">◆</span> Destino em destaque · Grécia
            </p>
            <h2 className="font-serif text-[clamp(2.6rem,5.6vw,5.4rem)] leading-[0.95] tracking-[-0.01em]">
              <span className="block overflow-hidden pb-[0.06em]"><span data-f-line className="block">Entre o azul do mar</span></span>
              <span className="block overflow-hidden pb-[0.08em]"><span data-f-line className="block italic">e o branco das ilhas.</span></span>
            </h2>

            <dl className="mt-10 border-t border-sand/20">
              {facts.map((f) => (
                <div key={f.k} data-f-fact className="grid grid-cols-[8.5rem_1fr] gap-4 border-b border-sand/20 py-4 text-[14px] md:grid-cols-[10rem_1fr]">
                  <dt className="eyebrow pt-0.5 text-sand/55">{f.k}</dt>
                  <dd className="text-sand/95">{f.v}</dd>
                </div>
              ))}
            </dl>

            <a data-f-cta href="#contato" className="group glass mt-8 inline-flex items-center gap-4 rounded-full py-2.5 pr-2.5 pl-6 text-[14px] transition-colors hover:bg-white/25">
              Explorar Grécia
              <span className="grid size-9 place-items-center rounded-full bg-sand text-ink">
                <span className="cta-arrow">→</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
