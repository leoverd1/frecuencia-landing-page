const NAV = [
  { label: "Horario", href: "#horario" },
  { label: "Dirección", href: "#ubicacion" },
  { label: "Sobre", href: "#sobre" },
  { label: "Instagram", href: "https://www.instagram.com/frecuenciamadrid/" },
  { label: "Contacto", href: "#contacto" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <header className="flex items-start justify-between px-6 md:px-10 pt-6 md:pt-8">
        <a href="#" className="text-sm md:text-base font-medium tracking-tight">
          Buena Música. Buena Gente.
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {NAV.map((n) => (
            <a key={n.label} href={n.href} className="hover:opacity-60 transition-opacity">
              {n.label}
            </a>
          ))}
        </nav>
        <details className="md:hidden">
          <summary className="list-none cursor-pointer text-sm">Menú</summary>
          <div className="absolute right-6 mt-3 flex flex-col gap-2 bg-background border border-border p-4 rounded-md">
            {NAV.map((n) => (
              <a key={n.label} href={n.href} className="text-sm">
                {n.label}
              </a>
            ))}
          </div>
        </details>
      </header>

      <section className="flex items-center justify-center min-h-[78vh] px-4">
        <h1
          className="font-display text-center select-none w-full leading-none frecuencia-vibrate"
          style={{ fontSize: "clamp(4rem, 17vw, 20rem)" }}
          data-text="Frecuencia"
        >
          Frecuencia
        </h1>
      </section>

      <section className="text-center pb-20 md:pb-32 px-6">
        <p className="text-base md:text-lg">M – X : 21pm – 2am · J : 21pm – 4am</p>
        <p className="text-base md:text-lg">V – S : 21pm – 6am · D – L : Cerrado</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 border-t border-foreground/20">
        <div id="horario" className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-foreground/20">
          <h3 className="text-xs uppercase tracking-[0.2em] mb-6 opacity-70">Horario</h3>
          <ul className="space-y-2 text-base md:text-lg">
            <li>M – X : 21pm – 2am</li>
            <li>J : 21.00pm – 4am</li>
            <li>V – S : 21pm – 6am</li>
            <li>D – L : Cerrado</li>
          </ul>
        </div>
        <div id="contacto" className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-foreground/20">
          <h3 className="text-xs uppercase tracking-[0.2em] mb-6 opacity-70">Contacto</h3>
          <a
            href="mailto:frecuencia@grupolabikina.com"
            className="text-base md:text-lg underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground"
          >
            frecuencia@grupolabikina.com
          </a>
        </div>
        <div id="ubicacion" className="p-8 md:p-12">
          <h3 className="text-xs uppercase tracking-[0.2em] mb-6 opacity-70">Ubicación</h3>
          <p className="text-base md:text-lg">
            Calle de Lagasca, 103
            <br />
            Local derecha, Salamanca
            <br />
            28006 Madrid
          </p>
        </div>
      </section>

      <section className="border-t border-foreground/20 px-6 md:px-10 py-16 md:py-20 space-y-4 max-w-3xl mx-auto text-center text-sm md:text-base opacity-80">
        <p>Solo aceptamos reservas de +18 en toda la noche, incluyendo las cenas.</p>
        <p>Nos reservamos el derecho de admisión.</p>
        <p>
          Dress code: zapatos con pie cerrado en hombres, no shorts o pantalones cortos y
          playeras con manga.
        </p>
      </section>

      <section
        id="sobre"
        className="border-t border-foreground/20 px-6 md:px-10 py-24 md:py-40"
      >
        <div className="max-w-5xl mx-auto">
          <h2
            className="font-display mb-10"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
          >
            Sobre Frecuencia
          </h2>
          <p className="text-lg md:text-2xl leading-relaxed max-w-3xl">
            Inspirados en los lugares más recónditos para escuchar música en Japón
            (listening bar), hasta los bares más cool de Copenhague, hemos creado un
            espacio en Madrid que combina estos dos estilos y busca hacer sentir a las
            personas en un concepto original y de diseño.
          </p>
        </div>
      </section>

      <footer className="border-t border-foreground/20 px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs uppercase tracking-[0.2em]">
        <span>© Frecuencia Madrid</span>
        <span>Lagasca 103 · Salamanca</span>
      </footer>
    </div>
  );
}
