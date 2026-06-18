import { Carousel } from "@/components/Carousel";



const NAV = [
  { label: "Horario", href: "#horario" },
  { label: "Dirección", href: "#ubicacion" },
  { label: "Sobre", href: "#sobre" },
  { label: "Instagram", href: "https://www.instagram.com/frecuenciamadrid/" },
  { label: "Contacto", href: "#contacto" },
];

const CAROUSEL = [
  { src: "/carousel/IMG_2210.jpeg", alt: "Pour shot, sunset light" },
  { src: "/carousel/IMG_2209.jpeg", alt: "Coupe cocktail being served" },
  { src: "/carousel/IMG_2211.jpeg", alt: "Glowing wall lanterns" },
  { src: "/carousel/IMG_2208.jpeg", alt: "Bar Frecuencia menu print" },
  { src: "/carousel/IMG_2207.jpeg", alt: "Three coupe cocktails" },
  { src: "/carousel/IMG_2206.jpeg", alt: "Backlit coupe glass" },
  { src: "/carousel/IMG_2205.jpeg", alt: "Highball with garnish" },
  { src: "/carousel/IMG_2204.jpeg", alt: "Bar interior lounge" },
  { src: "/carousel/IMG_2203.jpeg", alt: "Bottles silhouetted against light" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <header className="flex items-start justify-between px-6 md:px-10 pt-6 md:pt-8">
        <a
          href="#"
          className="text-[11px] md:text-xs font-mono-body uppercase tracking-[0.18em] max-w-[60%] leading-snug text-secondary"
        >
          A space built around sound
          <br className="hidden sm:block" /> and human connection
        </a>
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em]">
          {NAV.map((n) => (
            <a key={n.label} href={n.href} className="hover:text-accent transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <details className="md:hidden">
          <summary className="list-none cursor-pointer text-xs uppercase tracking-[0.2em]">
            Menú
          </summary>
          <div className="absolute right-6 mt-3 flex flex-col gap-2 bg-background border border-foreground/20 p-4 rounded-md z-50">
            {NAV.map((n) => (
              <a key={n.label} href={n.href} className="text-sm">
                {n.label}
              </a>
            ))}
          </div>
        </details>
      </header>

      <section className="flex items-center justify-center min-h-[72vh] md:min-h-[82vh] px-4">
        <img
          src="/logo.png"
          alt="Frecuencia"
          className="select-none w-full max-w-[min(80vw,800px)]"
          draggable={false}
        />
      </section>

      <section className="text-center pb-16 md:pb-24 px-6 font-mono-body text-sm md:text-base text-secondary">
        <p>M – X : 21pm – 2am · J : 21pm – 4am</p>
        <p>V – S : 21pm – 6am · D – L : Cerrado</p>
      </section>

      {/* Carousel */}
      <section className="py-12 md:py-20 border-t border-foreground/15">
        <div className="px-6 md:px-10 mb-8 md:mb-12 flex items-end justify-between gap-6">
          <h2
            className="font-display text-accent"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            La atmósfera
          </h2>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] opacity-60 hidden sm:block">
            Galería
          </span>
        </div>
        <Carousel images={CAROUSEL} />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 border-t border-foreground/15 font-mono-body">
        <div id="horario" className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-foreground/15">
          <h3 className="text-[10px] uppercase tracking-[0.25em] mb-6 text-accent">
            Horario
          </h3>
          <ul className="space-y-2 text-base md:text-lg text-secondary">
            <li>M – X : 21pm – 2am</li>
            <li>J : 21pm – 4am</li>
            <li>V – S : 21pm – 6am</li>
            <li>D – L : Cerrado</li>
          </ul>
        </div>
        <div id="contacto" className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-foreground/15">
          <h3 className="text-[10px] uppercase tracking-[0.25em] mb-6 text-accent">
            Contacto
          </h3>
          <a
            href="mailto:frecuencia@grupolabikina.com"
            className="text-base md:text-lg text-secondary underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary break-words"
          >
            frecuencia@grupolabikina.com
          </a>
        </div>
        <div id="ubicacion" className="p-8 md:p-12">
          <h3 className="text-[10px] uppercase tracking-[0.25em] mb-6 text-accent">
            Ubicación
          </h3>
          <p className="text-base md:text-lg text-secondary">
            Calle de Lagasca, 103
            <br />
            Local derecha, Salamanca
            <br />
            28006 Madrid
          </p>
        </div>
      </section>

      <section className="border-t border-foreground/15 px-6 md:px-10 py-16 md:py-20 space-y-4 max-w-3xl mx-auto text-center font-mono-body text-sm md:text-base text-secondary/80">
        <p>Solo aceptamos reservas de +18 en toda la noche, incluyendo las cenas.</p>
        <p>Nos reservamos el derecho de admisión.</p>
        <p>
          Dress code: zapatos con pie cerrado en hombres, no shorts o pantalones cortos y
          playeras con manga.
        </p>
      </section>

      <section
        id="sobre"
        className="border-t border-foreground/15 px-6 md:px-10 py-24 md:py-40"
      >
        <div className="max-w-5xl mx-auto">
          <h2
            className="font-display mb-10 text-accent"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
          >
            Sobre Frecuencia
          </h2>
          <p className="font-mono-body text-lg md:text-2xl leading-relaxed max-w-3xl text-secondary">
            Inspired by Japan's hidden listening bars and Copenhagen's most iconic
            venues, Frecuencia reimagines the experience in Madrid. A space where music
            leads, design matters, and every detail is curated to make people feel part
            of something special.
          </p>
        </div>
      </section>

      <footer className="border-t border-foreground/15 px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-[0.25em] font-mono-body text-secondary/70">
        <span>© Frecuencia Madrid</span>
        <span>Lagasca 103 · Salamanca</span>
      </footer>
    </div>
  );
}
