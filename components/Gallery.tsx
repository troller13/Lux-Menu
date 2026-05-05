"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";

type Img = { src: string; tag: "Bucate" | "Saloane" | "Ambianță" | "Vinuri"; alt: string };

const images: Img[] = [
  { src: "https://images.unsplash.com/photo-1625938145744-533e82c5dd0a?auto=format&fit=crop&w=1100&q=80", tag: "Bucate", alt: "Sarmale boierești" },
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1100&q=80", tag: "Saloane", alt: "Salonul Domnesc" },
  { src: "https://images.unsplash.com/photo-1605522561233-768ad7a8fabf?auto=format&fit=crop&w=1100&q=80", tag: "Bucate", alt: "Plăcinte cu brânză" },
  { src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1100&q=80", tag: "Vinuri", alt: "Pivnița de vinuri" },
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1100&q=80", tag: "Ambianță", alt: "Atmosferă de seară" },
  { src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1100&q=80", tag: "Bucate", alt: "Friptură de purcel" },
  { src: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1100&q=80", tag: "Bucate", alt: "Pește la grătar" },
  { src: "https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&w=1100&q=80", tag: "Saloane", alt: "Salonul principal" },
  { src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1100&q=80", tag: "Ambianță", alt: "Bucătăria deschisă" },
  { src: "https://images.unsplash.com/photo-1474722883778-792e7990302f?auto=format&fit=crop&w=1100&q=80", tag: "Vinuri", alt: "Pahare de vin" },
  { src: "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=1100&q=80", tag: "Bucate", alt: "Platou aperitive" },
  { src: "https://images.unsplash.com/photo-1530062845289-9109b2c9c868?auto=format&fit=crop&w=1100&q=80", tag: "Saloane", alt: "Banchet" }
];

const filters = ["Toate", "Bucate", "Saloane", "Ambianță", "Vinuri"] as const;
type Filter = (typeof filters)[number];

export default function Gallery() {
  const [filter, setFilter] = useState<Filter>("Toate");
  const [open, setOpen] = useState<number | null>(null);

  const visible =
    filter === "Toate" ? images : images.filter((i) => i.tag === filter);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((p) => (p === null ? 0 : (p + 1) % visible.length));
      if (e.key === "ArrowLeft") setOpen((p) => (p === null ? 0 : (p - 1 + visible.length) % visible.length));
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, visible.length]);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 text-xs uppercase tracking-widest border transition ${
              filter === f
                ? "bg-gold text-black border-gold"
                : "border-bg-line text-white/70 hover:border-gold hover:text-gold"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {visible.map((img, i) => (
          <Reveal key={img.src} delay={i * 40} variant="zoom">
            <button
              onClick={() => setOpen(i)}
              className="group relative block w-full overflow-hidden card card-hover"
              aria-label={`Mărește ${img.alt}`}
            >
              <div
                className="aspect-square bg-cover bg-center zoom-img"
                style={{ backgroundImage: `url(${img.src})` }}
                role="img"
                aria-label={img.alt}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-gold">{img.tag}</span>
                <span className="text-white/80">{img.alt}</span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 text-gold text-3xl"
            onClick={() => setOpen(null)}
            aria-label="Închide"
          >
            ×
          </button>

          <button
            type="button"
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-gold text-3xl"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((p) => (p === null ? 0 : (p - 1 + visible.length) % visible.length));
            }}
            aria-label="Imaginea anterioară"
          >
            ‹
          </button>

          <figure
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={visible[open].src}
              alt={visible[open].alt}
              className="w-full max-h-[80vh] object-contain"
            />
            <figcaption className="text-center mt-4 text-white/70 text-sm">
              <span className="text-gold uppercase tracking-widest text-xs mr-3">
                {visible[open].tag}
              </span>
              {visible[open].alt}
            </figcaption>
          </figure>

          <button
            type="button"
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-gold text-3xl"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((p) => (p === null ? 0 : (p + 1) % visible.length));
            }}
            aria-label="Imaginea următoare"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
