"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useScene } from "@/lib/gsap";
import { destinations, type Destination } from "@/lib/content";

// Composição editorial: cada destino tem proporção e posição próprias
const layout = [
  "lg:col-start-1 lg:col-span-7 aspect-[4/3]",
  "lg:col-start-9 lg:col-span-4 aspect-[3/4] lg:mt-40",
  "lg:col-start-2 lg:col-span-4 aspect-[4/5] lg:-mt-24",
  "lg:col-start-7 lg:col-span-6 aspect-[16/10] lg:mt-24",
  "lg:col-start-1 lg:col-span-5 aspect-[1/1] lg:mt-8",
  "lg:col-start-8 lg:col-span-4 aspect-[4/5] lg:-mt-16",
];

function Card({ d, i, cls }: { d: Destination; i: number; cls: string }) {
  return (
    <a href="#contato" data-dest className={`group block ${cls.replace(/aspect-\S+/, "")}`}>
      <figure className={`relative overflow-hidden rounded-[6px] bg-sand-2 ${cls.match(/aspect-\S+/)?.[0]}`} data-clip>
        <div data-par className="absolute -inset-y-[10%] inset-x-0">
          <Image
            src={d.img}
            alt={`${d.name}, ${d.country}`}
            fill
            sizes="(min-width:1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-[1.6s] ease-[var(--ease-cine)] group-hover:scale-[1.06]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-deep/0 to-deep/0 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
        <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-6 text-sand opacity-0 transition-all duration-700 ease-[var(--ease-cine)] group-hover:opacity-100 md:translate-y-3 md:group-hover:translate-y-0">
          <span className="max-w-[22rem] text-[15px] leading-snug">{d.line}</span>
          <span className="glass grid size-11 shrink-0 place-items-center rounded-full">
            <span className="cta-arrow">→</span>
          </span>
        </figcaption>
        <span className="glass eyebrow absolute top-4 left-4 rounded-full px-3 py-1.5 text-[0.58rem] text-white">{d.coord}</span>
      </figure>
      <div className="mt-5 flex items-baseline justify-between gap-4 border-b border-ink/12 pb-4">
        <div className="flex items-baseline gap-4">
          <span className="eyebrow text-gold">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="font-serif text-[2rem] leading-none md:text-[2.4rem]">{d.name}</h3>
        </div>
        <span className="eyebrow text-muted">{d.country}</span>
      </div>
    </a>
  );
}

export default function Destinations() {
  const root = useRef<HTMLElement>(null);

  useScene(root, ({ isDesktop }) => {
    gsap.from("[data-dest-title] > span > span", {
      yPercent: 110,
      duration: 1.4,
      stagger: 0.1,
      ease: "expo.out",
      scrollTrigger: { trigger: "[data-dest-title]", start: "top 85%" },
    });

    if (!isDesktop) return;
    gsap.utils.toArray<HTMLElement>("[data-dest]").forEach((card) => {
      const clip = card.querySelector("[data-clip]");
      const par = card.querySelector("[data-par]");
      gsap.fromTo(
        clip,
        { clipPath: "inset(18% 8% 0% 8% round 6px)" },
        {
          clipPath: "inset(0% 0% 0% 0% round 6px)",
          ease: "power2.out",
          scrollTrigger: { trigger: card, start: "top 95%", end: "top 45%", scrub: true },
        },
      );
      gsap.fromTo(par, { yPercent: -6 }, {
        yPercent: 6,
        ease: "none",
        scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: true },
      });
    });
  });

  return (
    <section ref={root} id="destinos" className="pb-28 md:pb-44">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="mb-14 grid gap-8 md:mb-24 md:grid-cols-12 md:items-end">
          <h2 data-dest-title className="font-serif text-[clamp(3rem,7.5vw,7rem)] leading-[0.92] tracking-[-0.02em] md:col-span-8">
            <span className="block overflow-hidden pb-[0.06em]"><span className="block">Escolha o próximo</span></span>
            <span className="block overflow-hidden pb-[0.08em]"><span className="block italic">capítulo.</span></span>
          </h2>
          <div className="flex flex-col gap-6 md:col-span-4 md:pb-3">
            <p className="max-w-[22rem] text-[15px] leading-relaxed text-muted">
              Seis lugares que nossos viajantes não param de pedir. Cada um com uma forma própria de ser vivido.
            </p>
            <a href="#contato" className="eyebrow link-line w-fit pb-1">Todos os 250 destinos →</a>
          </div>
        </div>

        {/* Desktop/tablet: composição editorial assimétrica */}
        <div className="hidden gap-x-8 gap-y-20 md:grid md:grid-cols-2 lg:grid-cols-12 lg:gap-y-24">
          {destinations.map((d, i) => (
            <Card key={d.name} d={d} i={i} cls={layout[i]} />
          ))}
        </div>
      </div>

      {/* Mobile: um carrossel de páginas — o polegar folheia a revista */}
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:hidden">
        {destinations.map((d, i) => (
          <a key={d.name} href="#contato" className="relative block w-[78vw] shrink-0 snap-center">
            <figure className="relative aspect-[3/4] overflow-hidden rounded-[6px]">
              <Image src={d.img} alt={`${d.name}, ${d.country}`} fill sizes="80vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/75 via-transparent to-transparent" />
              <span className="glass eyebrow absolute top-4 left-4 rounded-full px-3 py-1.5 text-[0.58rem] text-white">{d.coord}</span>
              <figcaption className="absolute inset-x-0 bottom-0 p-5 text-sand">
                <span className="eyebrow text-[0.6rem] opacity-75">{String(i + 1).padStart(2, "0")} · {d.country}</span>
                <h3 className="mt-2 font-serif text-[2.4rem] leading-none">{d.name}</h3>
                <p className="mt-3 text-[14px] leading-snug text-sand/80">{d.line}</p>
              </figcaption>
            </figure>
          </a>
        ))}
      </div>
    </section>
  );
}
