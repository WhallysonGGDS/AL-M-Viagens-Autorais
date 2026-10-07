// Todo o conteúdo editorial num lugar só — trocar fotos/textos aqui.

export const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Destinos", href: "#destinos" },
  { label: "Experiências", href: "#experiencias" },
  { label: "Viagens", href: "#sob-medida" },
  { label: "Sobre", href: "#historias" },
  { label: "Contato", href: "#contato" },
];

export type Destination = {
  name: string;
  country: string;
  line: string;
  img: string;
  coord: string;
};

export const destinations: Destination[] = [
  { name: "Maldivas", country: "Oceano Índico", line: "Água transparente, villas sobre o mar e nenhum relógio.", img: "/images/maldivas.webp", coord: "3°12′N" },
  { name: "Kyoto", country: "Japão", line: "Ruas de pedra, lanternas acesas e a primavera em flor.", img: "/images/japao-kyoto.webp", coord: "35°00′N" },
  { name: "Dolomitas", country: "Itália", line: "Refúgios de pedra diante das montanhas mais dramáticas da Europa.", img: "/images/dolomitas.webp", coord: "46°24′N" },
  { name: "Patagônia", country: "Chile · Argentina", line: "Trilhas no fim do mundo, lagos de vidro e vento cortante.", img: "/images/patagonia-mirante.webp", coord: "50°56′S" },
  { name: "Dubai", country: "Emirados Árabes", line: "O deserto encontra o horizonte de vidro ao pôr do sol.", img: "/images/dubai.webp", coord: "25°12′N" },
  { name: "Paris", country: "França", line: "Manhãs douradas, cafés de esquina e a arte de não ter pressa.", img: "/images/paris.webp", coord: "48°51′N" },
];

export const experiences = [
  { name: "Expedições", n: "01", line: "Roteiros a pé pelos lugares onde a estrada termina.", img: "/images/patagonia-trilha.webp" },
  { name: "Lua de mel", n: "02", line: "O começo de uma história, no cenário que ela merece.", img: "/images/lua-de-mel.webp" },
  { name: "Gastronomia", n: "03", line: "Mesas com vista, cozinhas locais e vinhos de origem.", img: "/images/gastronomia-amalfi.webp" },
  { name: "Luxo", n: "04", line: "Suítes, villas e hotéis escolhidos um a um.", img: "/images/suite-como.webp" },
  { name: "Aventura", n: "05", line: "Safáris, travessias e o silêncio da savana.", img: "/images/safari.webp" },
  { name: "Família", n: "06", line: "Viagens em que cada geração encontra o seu ritmo.", img: "/images/alpes-chalet.webp" },
];

export const stories = [
  {
    place: "Maldivas",
    name: "Helena & Rafael",
    quote: "A gente não lembra do voo, nem do check-in. Lembra da água às sete da manhã.",
    img: "/images/maldivas.webp",
  },
  {
    place: "Patagônia",
    name: "Marcos Vieira",
    quote: "Oito dias de trilha e nenhuma decisão para tomar além de para onde olhar.",
    img: "/images/patagonia-trilha.webp",
  },
  {
    place: "Kyoto",
    name: "Ana Luísa Prado",
    quote: "Chegamos para as cerejeiras. Voltamos falando das lanternas.",
    img: "/images/japao-kyoto.webp",
  },
];

export const stats = [
  { value: 250, suffix: "+", label: "Destinos" },
  { value: 50, suffix: "K+", label: "Viajantes" },
  { value: 1200, suffix: "+", label: "Experiências" },
  { value: 95, suffix: "+", label: "Países" },
];

export const journal = [
  { kicker: "Estação", title: "O Mediterrâneo no verão", meta: "Junho — Setembro", img: "/images/textura-mar.webp" },
  { kicker: "Roteiro", title: "Japão na primavera", meta: "12 noites · Tóquio, Kyoto, Hakone", img: "/images/japao-kyoto.webp" },
  { kicker: "Ritmo", title: "Uma semana que pede silêncio", meta: "Retiros & hotéis de design", img: "/images/textura-cortina.webp" },
  { kicker: "Natureza", title: "A estação verde nos trópicos", meta: "Costa Rica · Bali", img: "/images/textura-folha.webp" },
];
