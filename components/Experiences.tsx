"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, ScrollTrigger, useScene } from "@/lib/gsap";
import { experiences } from "@/lib/content";

export default function Experiences() {
  const root = useRef<HTMLElement>(null);

  useScene(root, ({ isDesktop }) => {
    gsap.from("[data-x-title] > span > span", {
      yPercent: 110,
      duration: 1.4,
      stagger: 0.1,
      ease: "expo.out",
      scrollTrigger: { trigger: "[data-x-title]", start: "top 85%" },
    });

    if (!isDesktop) {
      gsap.utils.toArray<HTMLElement>("[data-x-m]").forEach((el) =>
        gsap.from(el, { clipPath: "inset(12% 0% 0% 0%)", duration: 1.4, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 85%" } }),
      );
      return;
    }

    const items = gsap.utils.toArray<HTMLElement>("[data-x-item]");
    const imgs = gsap.utils.toArray<HTMLElement>("[data-x-img]");
    const setActive = (i: number) =>
      items.forEach((el, j) => el.classList.toggle("is-active", i === j));
    setActive(0);

    // Cada nova experiência "sobe" sobre a anterior — uma cortina de fotografia
    imgs.forEach((img, i) => {
      if (i === 0) return;
      gsap.fromTo(
        img,
        { clipPath: "inset(100% 0% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "none",
          scrollTrigger: { trigger: items[i], start: "top 85%", end: "top 40%", scrub: true },
        },
      );
      gsap.fromTo(
        img.querySelector("img"),
        { scale: 1.18 },
        { scale: 1, ease: "none", scrollTrigger: { trigger: items[i], start: "top 85%", end: "bottom 30%", scrub: true } },
      );
    });

    items.forEach((el, i) =>
      ScrollTrigger.create({
        trigger: el,
        start: "top 55%",
        end: "bottom 55%",
        onToggle: (s) => s.isActive && setActive(i),
      }),
    );
  });

  return (
    <section ref={root} id="experiencias" className="bg-sand py-28 md:py-44">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
          <h2 data-x-title className="font-serif text-[clamp(3rem,7.5vw,7rem)] leading-[0.92] tracking-[-0.02em]">
            <span className="block overflow-hidden pb-[0.06em]"><span className="block">Não são apenas</span></span>
            <span className="block overflow-hidden pb-[0.08em]"><span className="block italic">destinos.</span></span>
          </h2>
          <p className="max-w-[20rem] text-[15px] leading-relaxed text-muted md:pb-3">
            São formas de viajar. Escolha a sua — o lugar vem depois.
          </p>
        </div>

        {/* Desktop: lista editorial à esquerda, fotografia fixa à direita */}
        <div className="hidden grid-cols-12 gap-10 lg:grid">
          <ol className="col-span-5">
            {experiences.map((x) => (
              <li
                key={x.name}
                data-x-item
                className="group/x flex min-h-[68vh] flex-col justify-center border-t border-ink/12 opacity-25 transition-opacity duration-700 [&.is-active]:opacity-100"
              >
                <span className="eyebrow text-gold">{x.n} / 06</span>
                <h3 className="mt-4 font-serif text-[clamp(3.4rem,5.4vw,5.6rem)] leading-[0.95]">{x.name}</h3>
                <p className="mt-5 max-w-[22rem] text-[15px] leading-relaxed text-muted">{x.line}</p>
                <a href="#contato" className="eyebrow link-line mt-8 w-fit pb-1">Ver roteiros →</a>
              </li>
            ))}
          </ol>
          <div className="col-span-7">
            <div className="sticky top-0 flex h-screen items-center">
              <div className="relative h-[82vh] w-full overflow-hidden rounded-[6px] bg-sand-2">
                {experiences.map((x, i) => (
                  <div key={x.name} data-x-img className="absolute inset-0 overflow-hidden" style={{ zIndex: i }}>
                    <Image src={x.img} alt={x.name} fill sizes="58vw" className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/tablet: cada experiência é uma página inteira */}
        <ol className="flex flex-col gap-14 lg:hidden">
          {experiences.map((x) => (
            <li key={x.name}>
              <div data-x-m className="relative aspect-[4/5] overflow-hidden rounded-[6px] md:aspect-[16/11]">
                <Image src={x.img} alt={x.name} fill sizes="100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/65 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-sand">
                  <span className="eyebrow text-[0.6rem] opacity-75">{x.n} / 06</span>
                  <h3 className="mt-2 font-serif text-[2.8rem] leading-none">{x.name}</h3>
                </div>
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">{x.line}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
