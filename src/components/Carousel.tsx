import { useRef } from "react";

interface CarouselProps {
  images: { src: string; alt: string }[];
}

export function Carousel({ images }: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.85 * dir;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="relative w-full">
      <div
        ref={trackRef}
        className="carousel-track flex gap-4 md:gap-6 overflow-x-auto px-6 md:px-10 py-2"
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="carousel-item shrink-0 w-[78vw] sm:w-[60vw] md:w-[42vw] lg:w-[32vw] aspect-[3/4] overflow-hidden bg-foreground/5"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between px-6 md:px-10 mt-6">
        <span className="text-[10px] uppercase tracking-[0.25em] opacity-60">
          Desliza →
        </span>
        <div className="flex gap-2">
          <button
            aria-label="Anterior"
            onClick={() => scrollBy(-1)}
            className="h-10 w-10 rounded-full border border-foreground/30 hover:bg-foreground hover:text-background transition-colors flex items-center justify-center"
          >
            ←
          </button>
          <button
            aria-label="Siguiente"
            onClick={() => scrollBy(1)}
            className="h-10 w-10 rounded-full border border-foreground/30 hover:bg-foreground hover:text-background transition-colors flex items-center justify-center"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
