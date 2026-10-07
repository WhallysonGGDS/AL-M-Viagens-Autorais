"use client";

import { useRef } from "react";
import { gsap, useScene } from "@/lib/gsap";
import { stats } from "@/lib/content";

const text =
  "Não vendemos pacotes. Desenhamos o tempo que você passa longe de casa — o hotel certo, a mesa certa, a trilha na hora em que a luz acontece.";

export default function Manifesto() {
  const root = useRef<HTMLElement>(null);

  useScene(root, () => {
    // Leitura guiada: as palavras "acendem" conforme o scroll
    gsap.fromTo(
      "[data-word]",
      { opacity: 0.14 },
      {
        opacity: 1,
        stagger: 0.05,
        ease: "none",
        scrollTrigger: { trigger: "[data-manifesto]", start: "top 80%", end: "bottom 45%", scrub: true },
      },
    );

    // Números contam uma única vez
    root.current!.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
      const to = Number(el.dataset.count);
      const obj = { v: 0 };
      gsap.to(obj, {
        v: to,
        duration: 2.2,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
        onUpdate: () => {
          el.textContent = Math.round(obj.v).toLocaleString("pt-BR");
        },
      });
    });

    gsap.from("[data-stat]", {
      autoAlpha: 0,
      y: 24,
      stagger: 0.1,
      duration: 1.2,
      ease: "expo.out",
      scrollTrigger: { trigger: "[data-stats]", start: "top 88%" },
    });
  });

  return (
    <section ref={root} className="mx-auto max-w-[1320px] px-5 pt-28 pb-24 md:px-10 md:pt-44 md:pb-36">
      <div className="grid gap-10 md:grid-cols-12">
        <p className="eyebrow text-muted md:col-span-3 md:pt-4">
          <span className="text-gold">—</span> A agência
        </p>
        <p data-manifesto className="font-serif text-[clamp(2rem,4.4vw,4.1rem)] leading-[1.06] tracking-[-0.01em] md:col-span-9">
          {text.split(" ").map((w, i) => (
            <span key={i} data-word className="inline">
              {w}{" "}
            </span>
          ))}
        </p>
      </div>

      {/* Números: uma linha tipográfica, não um painel de dashboard */}
      <dl data-stats className="mt-24 grid grid-cols-2 border-t border-ink/12 md:mt-32 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            data-stat
            className={`flex flex-col gap-3 pt-7 pb-6 md:pr-8 ${i % 2 ? "pl-5 md:pl-8" : "pr-5"} ${i > 0 ? "md:border-l md:border-ink/12 md:pl-8" : ""} ${i === 1 ? "border-l border-ink/12" : ""} ${i === 3 ? "border-l border-ink/12" : ""}`}
          >
            <dt className="eyebrow order-2 text-muted">{s.label}</dt>
            <dd className="order-1 font-serif text-[clamp(2.8rem,5vw,4.6rem)] leading-none">
              <span data-count={s.value}>{s.value.toLocaleString("pt-BR")}</span>
              <span className="text-gold">{s.suffix}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
