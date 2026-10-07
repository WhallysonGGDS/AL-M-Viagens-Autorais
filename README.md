# ALÉM — Viagens Autorais

Site conceitual de agência de viagens de luxo. Next.js 15 · React 19 · TypeScript · Tailwind v4 · GSAP + ScrollTrigger · Lenis.

```bash
npm install
npm run dev   # http://localhost:3000
```

- Conteúdo (textos, destinos, fotos): `lib/content.ts`
- Fotos otimizadas em `public/images` (WebP; next/image serve AVIF/WebP responsivo)
- Fontes locais em `app/fonts` (Instrument Serif + Inter Tight)
- Animações só rodam com `prefers-reduced-motion: no-preference`
- WhatsApp/e-mail de exemplo em `FinalCta.tsx` e `Footer.tsx`
