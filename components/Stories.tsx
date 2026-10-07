"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useScene } from "@/lib/gsap";
import { stories } from "@/lib/content";

export default function Stories() {
  const root = useRef<HTMLElement>(null);
  const [lead, ...rest] = stories;

  useScene(root, () => {
    gsap.utils.toArray<HTMLElement>("[data-s-img]").forEach((el) => {
      gsap.from(el, { clipPath: "inset(0% 0% 100% 0%)", duration: 1.8, ease: "expo.inOut", scrollTrigger: { trigger: el, start: "top 80%" } });
      gsap.fromTo(el.querySelector("img"), { scale: 1.25 }, { scale: 1, duration: 2.4, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 80%" } });
    });
    gsap.utils.toArray<HTMLElement>("[data-s-text]").forEach((el) =>
      gsap.from(el.children, { autoAlpha: 0, y: 30, stagger: 0.12, duration: 1.3, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 82%" } }),
    );
  });

  return (
    <section ref={root} id="historias" className="bg-deep py-28 text-sand md:py-44">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="mb-16 grid gap-6 md:mb-28 md:grid-cols-12">
          <p className="eyebrow text-sand/50 md:col-span-3 md:pt-5"><span className="text-gold">—</span> Histórias</p>
          <h2 className="font-serif text-[clamp(2.8rem,6.4vw,6rem)] leading-[0.95] tracking-[-0.02em] md:col-span-9">
            Histórias que começam <em className="text-[#e7d3ad]">antes do embarque.</em>
          </h2>
        </div>

        {/* Matéria principal */}
        <article className="grid gap-10 md:grid-cols-12 md:items-end">
          <div data-s-img className="relative aspect-[4/5] overflow-hidden rounded-[6px] md:col-span-6 md:aspect-[5/6]">
            <Image src={lead.img} alt={lead.place} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
          </div>
          <div data-s-text className="md:col-span-5 md:col-start-8 md:pb-8">
            <p className="eyebrow text-gold">{lead.place}</p>
            <blockquote className="mt-6 font-serif text-[clamp(2rem,3.4vw,3.2rem)] leading-[1.08]">
              “{lead.quote}”
            </blockquote>
            <p className="mt-8 text-[14px] text-sand/60">{lead.name}</p>
          </div>
        </article>

        {/* Notas menores, desalinhadas como numa revista */}
        <div className="mt-24 grid gap-16 md:mt-36 md:grid-cols-12 md:gap-10">
          {rest.map((s, i) => (
            <article key={s.name} className={i === 0 ? "md:col-span-5 md:col-start-2" : "md:col-span-4 md:col-start-8 md:mt-40"}>
              <div data-s-img className={`relative overflow-hidden rounded-[6px] ${i === 0 ? "aspect-[16/11]" : "aspect-[3/4]"}`}>
                <Image src={s.img} alt={s.place} fill sizes="(min-width:768px) 40vw, 100vw" className="object-cover" />
              </div>
              <div data-s-text className="mt-7 border-l border-gold/50 pl-5">
                <p className="eyebrow text-gold">{s.place}</p>
                <blockquote className="mt-3 font-serif text-[1.7rem] leading-[1.15]">“{s.quote}”</blockquote>
                <p className="mt-4 text-[14px] text-sand/60">{s.name}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
