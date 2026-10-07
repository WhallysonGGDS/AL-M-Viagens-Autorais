"use client";

import { useEffect, useState } from "react";
import { nav } from "@/lib/content";
import Logo from "./Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:px-6 md:pt-5">
        <div
          className={`pointer-events-auto flex w-full max-w-[1320px] items-center justify-between rounded-full transition-all duration-700 ease-[var(--ease-cine)] ${
            scrolled
              ? "glass-light py-2 pr-2 pl-5 text-ink shadow-[0_10px_40px_-20px_rgb(13_26_40/0.35)] md:max-w-[1100px]"
              : "glass py-3 pr-3 pl-6 text-white"
          }`}
        >
          <a href="#inicio" aria-label="ALÉM — início">
            <Logo />
          </a>

          <nav className="hidden items-center gap-5 lg:flex xl:gap-8" aria-label="Principal">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="eyebrow link-line pb-0.5 opacity-80 hover:opacity-100">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contato"
              className={`group hidden items-center gap-3 whitespace-nowrap rounded-full py-3 pr-3 pl-5 text-[13px] tracking-wide transition-colors duration-500 sm:flex ${
                scrolled ? "bg-deep text-sand hover:bg-ink" : "bg-sand text-ink hover:bg-white"
              }`}
            >
              Planejar minha viagem
              <span className={`grid size-7 place-items-center rounded-full ${scrolled ? "bg-sand/15" : "bg-ink/8"}`}>
                <span className="cta-arrow">→</span>
              </span>
            </a>
            <button
              onClick={() => setOpen(true)}
              className="grid size-11 place-items-center rounded-full lg:hidden"
              aria-label="Abrir menu"
            >
              <span className="flex w-5 flex-col gap-[5px]">
                <span className="h-px w-full bg-current" />
                <span className="h-px w-3/5 bg-current" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile: tela cheia, tipografia como protagonista */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-deep px-6 pt-6 pb-10 text-sand transition-[clip-path] duration-700 ease-[var(--ease-cine)] lg:hidden ${
          open ? "[clip-path:inset(0_0_0_0)]" : "pointer-events-none [clip-path:inset(0_0_100%_0)]"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between">
          <Logo />
          <button onClick={() => setOpen(false)} className="eyebrow py-3" aria-label="Fechar menu">
            Fechar
          </button>
        </div>
        <nav className="mt-auto flex flex-col gap-1">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4 border-b border-sand/10 py-3 font-serif text-[2.6rem] leading-none"
            >
              <span className="eyebrow w-6 text-gold">0{i + 1}</span>
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#contato" onClick={() => setOpen(false)} className="mt-10 flex items-center justify-between rounded-full bg-sand px-6 py-4 text-ink">
          Planejar minha viagem <span>→</span>
        </a>
      </div>
    </>
  );
}
