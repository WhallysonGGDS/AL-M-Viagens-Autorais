"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useScene } from "@/lib/gsap";

export default function FinalCta() {
  const root = useRef<HTMLElement>(null);

  useScene(root, () => {
    // Cena final — clímax: a imagem se expande até tomar a tela inteira
    const tl = gsap.timeline({
      scrollTrigger: { trigger: root.current, start: "top 85%", end: "top top", scrub: 1 },
    });
    tl.fromTo("[data-c-frame]", { clipPath: "inset(8% 6% 8% 6% round 10px)" }, { clipPath: "inset(0% 0% 0% 0% round 0px)", ease: "none" })
      .fromTo("[data-c-img]", { scale: 1.2 }, { scale: 1, ease: "none" }, 0);

    gsap.from("[data-c-line]", {
      yPercent: 110,
      stagger: 0.12,
      duration: 1.6,
      ease: "expo.out",
      scrollTrigger: { trigger: root.current, start: "top 30%" },
    });
    gsap.from("[data-c-fade]", {
      autoAlpha: 0,
      y: 20,
      stagger: 0.12,
      duration: 1.2,
      delay: 0.4,
      ease: "expo.out",
      scrollTrigger: { trigger: root.current, start: "top 30%" },
    });
  });

  return (
    <section ref={root} id="contato" className="bg-sand">
      <div data-c-frame className="relative h-[100svh] min-h-[620px] overflow-hidden">
        <div data-c-img className="absolute inset-0">
          <Image
            src="/images/final-mirante.webp"
            alt="Viajante observa o mar do alto de um penhasco ao pôr do sol"
            fill
            sizes="100vw"
            className="object-cover object-[70%_center]"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(13_26_40/0.1)_0%,rgb(13_26_40/0.1)_40%,rgb(13_26_40/0.7)_100%)]" />

        <div className="relative mx-auto flex h-full max-w-[1320px] flex-col justify-end px-5 pb-14 text-white md:px-10 md:pb-20">
          <h2 className="font-serif text-[clamp(3.4rem,10vw,10rem)] leading-[0.88] tracking-[-0.02em]">
            <span className="block overflow-hidden pb-[0.06em]"><span data-c-line className="block">O mundo está</span></span>
            <span className="block overflow-hidden pb-[0.08em]"><span data-c-line className="block italic text-[#f1dcb5]">esperando.</span></span>
          </h2>
          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p data-c-fade className="max-w-[24rem] text-[16px] leading-relaxed text-white/85">
              Conte para onde você quer ir.<br />Nós cuidamos do resto.
            </p>
            <div data-c-fade className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/5562999999999?text=Ol%C3%A1!%20Quero%20planejar%20minha%20viagem."
                className="group flex items-center justify-between gap-6 rounded-full bg-sand py-2.5 pr-2.5 pl-7 text-[15px] text-ink transition-colors hover:bg-white"
              >
                Planejar minha viagem
                <span className="grid size-11 place-items-center rounded-full bg-deep text-sand">
                  <span className="cta-arrow">→</span>
                </span>
              </a>
              <a href="mailto:ola@alemviagens.com" className="glass flex items-center justify-center rounded-full px-7 py-4 text-[15px] transition-colors hover:bg-white/25">
                Escrever para um especialista
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
