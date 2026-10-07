"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useScene } from "@/lib/gsap";
import { journal } from "@/lib/content";

// Alturas e alinhamentos diferentes — ritmo de revista, não grade de cards
const shape = ["h-[62vh] self-start", "h-[48vh] self-end", "h-[70vh] self-center", "h-[52vh] self-start"];
const widths = ["w-[34vw]", "w-[26vw]", "w-[40vw]", "w-[28vw]"];

export default function Journal() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useScene(root, ({ isDesktop }) => {
    if (!isDesktop) {
      gsap.utils.toArray<HTMLElement>("[data-j-m]").forEach((el) =>
        gsap.from(el, { autoAlpha: 0, y: 40, duration: 1.3, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 85%" } }),
      );
      return;
    }
    // Movimento horizontal: a página vertical vira um corredor de fotografias
    const t = track.current!;
    const dist = () => t.scrollWidth - window.innerWidth;
    gsap.to(t, {
      x: () => -dist(),
      ease: "none",
      scrollTrigger: {
        trigger: root.current,
        start: "top top",
        end: () => "+=" + dist(),
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
  });

  return (
    <section ref={root} className="overflow-hidden bg-sand">
      {/* Desktop */}
      <div className="hidden h-screen items-center lg:flex">
        <div ref={track} className="flex h-[82vh] items-stretch gap-[4vw] pr-[8vw] pl-10 will-change-transform">
          <div className="flex w-[30vw] shrink-0 flex-col justify-between py-4">
            <p className="eyebrow text-muted"><span className="text-gold">—</span> Inspiração · Edição de outono</p>
            <h2 className="font-serif text-[clamp(4rem,6.6vw,7.4rem)] leading-[0.9] tracking-[-0.02em]">
              Para onde<br />vamos <em>agora?</em>
            </h2>
            <p className="max-w-[18rem] text-[15px] leading-relaxed text-muted">
              Notas da nossa equipe sobre estações, rotas e o que vale a viagem neste momento.
            </p>
          </div>
          {journal.map((j, i) => (
            <a key={j.title} href="#contato" className={`group flex shrink-0 flex-col ${shape[i]} ${widths[i]}`}>
              <div className="relative min-h-0 flex-1 overflow-hidden rounded-[6px]">
                <Image src={j.img} alt={j.title} fill sizes="40vw" className="object-cover transition-transform duration-[1.6s] ease-[var(--ease-cine)] group-hover:scale-[1.05]" />
              </div>
              <div className="mt-5 flex items-end justify-between gap-6">
                <div>
                  <p className="eyebrow text-gold">{j.kicker}</p>
                  <h3 className="mt-2 font-serif text-[1.9rem] leading-[1.05]">{j.title}</h3>
                  <p className="mt-1 text-[13px] text-muted">{j.meta}</p>
                </div>
                <span className="cta-arrow pb-2 text-xl">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Mobile/tablet: composição vertical assimétrica */}
      <div className="px-5 py-28 md:px-10 lg:hidden">
        <p className="eyebrow mb-6 text-muted"><span className="text-gold">—</span> Inspiração</p>
        <h2 className="font-serif text-[clamp(3rem,9vw,5rem)] leading-[0.92] tracking-[-0.02em]">
          Para onde vamos <em>agora?</em>
        </h2>
        <div className="mt-14 grid grid-cols-6 gap-x-4 gap-y-12">
          {journal.map((j, i) => (
            <a
              key={j.title}
              href="#contato"
              data-j-m
              className={i % 2 === 0 ? "col-span-6 md:col-span-4" : "col-span-5 col-start-2 md:col-span-3 md:col-start-4"}
            >
              <div className={`relative overflow-hidden rounded-[6px] ${i % 2 === 0 ? "aspect-[4/3]" : "aspect-[4/5]"}`}>
                <Image src={j.img} alt={j.title} fill sizes="90vw" className="object-cover" />
              </div>
              <p className="eyebrow mt-4 text-gold">{j.kicker}</p>
              <h3 className="mt-2 font-serif text-[1.8rem] leading-[1.05]">{j.title}</h3>
              <p className="mt-1 text-[13px] text-muted">{j.meta}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
