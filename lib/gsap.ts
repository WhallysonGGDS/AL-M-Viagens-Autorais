"use client";

import { useLayoutEffect, useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Escopo GSAP por seção. As animações só rodam com
 * prefers-reduced-motion: no-preference — sem movimento, o conteúdo
 * já está no estado final (nada fica escondido).
 */
export function useScene(
  scope: RefObject<HTMLElement | null>,
  build: (ctx: { isDesktop: boolean }) => void,
) {
  useIsoLayoutEffect(() => {
    if (!scope.current) return;
    const mm = gsap.matchMedia(scope.current);
    mm.add(
      {
        motion: "(prefers-reduced-motion: no-preference)",
        isDesktop: "(min-width: 1024px)",
      },
      (c) => {
        const { motion, isDesktop } = c.conditions as { motion: boolean; isDesktop: boolean };
        if (motion) build({ isDesktop });
      },
    );
    return () => mm.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export { gsap, ScrollTrigger };
