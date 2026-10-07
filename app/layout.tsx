import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

// Fontes servidas localmente (sem dependência de rede no build)
const serif = localFont({
  src: [
    { path: "./fonts/instrument-serif-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/instrument-serif-latin-400-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-instrument",
  display: "swap",
});

const sans = localFont({
  src: [
    { path: "./fonts/inter-tight-latin-300-normal.woff2", weight: "300" },
    { path: "./fonts/inter-tight-latin-400-normal.woff2", weight: "400" },
    { path: "./fonts/inter-tight-latin-500-normal.woff2", weight: "500" },
  ],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ALÉM — Viagens Autorais",
  description:
    "Viagens cuidadosamente planejadas para transformar destinos em histórias inesquecíveis.",
};

export const viewport: Viewport = { themeColor: "#f3eee6" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
