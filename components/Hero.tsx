"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useScene } from "@/lib/gsap";
import SearchBar from "./SearchBar";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useScene(root, ({ isDesktop }) => {
    // Cena 01 — a abertura: a imagem "assenta", o título sobe por máscara
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
    tl.from("[data-hero-img]", { scale: 1.18, duration: 2.6 })
      .from("[data-hero-line]", { yPercent: 110, duration: 1.6, stagger: 0.12 }, 0.35)
      .from("[data-hero-fade]", { autoAlpha: 0, y: 16, duration: 1.2, stagger: 0.08 }, 0.9)
      .from("[data-search]", { autoAlpha: 0, y: 40, duration: 1.4 }, 1.1);

    // Ao rolar, a foto desce mais devagar que a página e o texto se dissolve
    gsap.to("[data-hero-media]", {
      yPercent: isDesktop ? 18 : 10,
      ease: "none",
      scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
    });
    gsap.to("[data-hero-copy]", {
      yPercent: -20,
      autoAlpha: 0,
      ease: "none",
      scrollTrigger: { trigger: root.current, start: "15% top", end: "70% top", scrub: true },
    });
  });

  return (
    <section ref={root} id="inicio" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-deep">
        <div data-hero-media className="absolute inset-0 will-change-transform">
          <div data-hero-img className="absolute inset-0">
            <Image
              src="/images/hero-amalfi.webp"
              alt="Piscina infinita sobre a Costa Amalfitana ao entardecer"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[62%_center]"
            />
          </div>
        </div>

        {/* Gradiente mínimo: só onde o texto precisa respirar */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(13_26_40/0.38)_0%,rgb(13_26_40/0)_28%,rgb(13_26_40/0)_50%,rgb(13_26_40/0.65)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_75%,rgb(13_26_40/0.45),transparent_60%)]" />

        <div data-hero-copy className="relative z-10 mx-auto flex w-full max-w-[1320px] flex-1 flex-col justify-end px-5 pt-32 pb-10 text-white md:px-10 md:pt-40 md:pb-12">
          <p data-hero-fade className="eyebrow mb-6 flex items-center gap-4 opacity-85">
            <span className="h-px w-10 bg-white/60" />
            Viajar · Descobrir · Pertencer
          </p>

          <h1 className="font-serif text-[clamp(3.4rem,10.5vw,10rem)] leading-[0.88] tracking-[-0.02em]">
            <span className="block overflow-hidden pb-[0.06em]">
              <span data-hero-line className="block">Descubra o mundo</span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <span data-hero-line className="block">
                <em className="text-[#f1dcb5]">além</em> do óbvio.
              </span>
            </span>
          </h1>

          <div className="mt-8 flex flex-col gap-8 md:mt-10 md:flex-row md:items-end md:justify-between">
            <p data-hero-fade className="max-w-[24rem] text-[15px] leading-relaxed text-white/85 md:text-base">
              Viagens cuidadosamente planejadas para transformar destinos em histórias inesquecíveis.
            </p>
            <div data-hero-fade className="flex flex-wrap items-center gap-3">
              <a href="#destinos" className="group flex items-center gap-3 rounded-full bg-sand py-2.5 pr-2.5 pl-6 text-[14px] text-ink transition-colors hover:bg-white">
                Explorar destinos
                <span className="grid size-9 place-items-center rounded-full bg-ink text-sand">
                  <span className="cta-arrow">→</span>
                </span>
              </a>
              <a href="#contato" className="glass hidden rounded-full px-6 py-[0.95rem] text-[14px] transition-colors hover:bg-white/25 md:inline-block">
                Planejar minha viagem
              </a>
            </div>
          </div>
        </div>

        {/* Legenda de fotografia — o detalhe que dá cara de revista */}
        <div data-hero-fade className="absolute top-1/2 right-6 z-10 hidden -translate-y-1/2 flex-col items-end gap-3 text-right text-white/80 lg:flex xl:right-10">
          <span className="eyebrow text-[0.6rem]">Costa Amalfitana</span>
          <span className="h-16 w-px bg-white/40" />
          <span className="font-serif text-xl italic">40°37′N</span>
        </div>


      {/* A busca pousa dentro da cena, nunca cortada pela dobra */}
      <div className="relative z-10 pb-5 md:pb-8">
        <SearchBar />
      </div>
    </section>
  );
}
