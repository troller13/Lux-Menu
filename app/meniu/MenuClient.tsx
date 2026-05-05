"use client";

import { useMemo, useState } from "react";
import Reveal from "@/components/Reveal";
import {
  categories,
  type Diet,
  dietLabel,
  dietBadgeClass
} from "./data";

const dietOptions: Diet[] = ["veg", "vegan", "gf", "spicy"];

export default function MenuClient() {
  const [query, setQuery] = useState("");
  const [diets, setDiets] = useState<Set<Diet>>(new Set());
  const [signatureOnly, setSignatureOnly] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return categories
      .map((cat) => ({
        ...cat,
        items: cat.items.filter((it) => {
          if (q && !`${it.name} ${it.desc}`.toLowerCase().includes(q))
            return false;
          if (signatureOnly && !it.signature) return false;
          if (diets.size > 0) {
            const itemDiets = new Set(it.diet ?? []);
            for (const d of diets) if (!itemDiets.has(d)) return false;
          }
          return true;
        })
      }))
      .filter((c) => c.items.length > 0);
  }, [query, diets, signatureOnly]);

  function toggleDiet(d: Diet) {
    setDiets((prev) => {
      const next = new Set(prev);
      next.has(d) ? next.delete(d) : next.add(d);
      return next;
    });
  }

  const totalCount = filtered.reduce((sum, c) => sum + c.items.length, 0);

  return (
    <>
      {/* Sticky filter bar */}
      <div className="border-y border-bg-line bg-bg-soft/95 backdrop-blur sticky top-[76px] z-30">
        <div className="container-x py-4 flex flex-col gap-3">
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <div className="relative flex-1 max-w-md">
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Caută în meniu — sarmale, vișine, vin..."
                className="w-full bg-transparent border border-bg-line pl-10 pr-4 py-2.5 text-sm focus:border-gold outline-none placeholder:text-white/30"
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gold/70"
                width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path strokeLinecap="round" d="M21 21l-4.3-4.3" />
              </svg>
            </div>

            <div className="flex flex-wrap gap-2">
              {dietOptions.map((d) => {
                const active = diets.has(d);
                return (
                  <button
                    key={d}
                    onClick={() => toggleDiet(d)}
                    className={`px-3 py-1.5 text-[11px] uppercase tracking-widest border transition ${
                      active
                        ? "bg-gold text-black border-gold"
                        : "border-bg-line text-white/65 hover:border-gold hover:text-gold"
                    }`}
                  >
                    {dietLabel[d]}
                  </button>
                );
              })}
              <button
                onClick={() => setSignatureOnly((v) => !v)}
                className={`px-3 py-1.5 text-[11px] uppercase tracking-widest border transition ${
                  signatureOnly
                    ? "bg-gold text-black border-gold"
                    : "border-bg-line text-white/65 hover:border-gold hover:text-gold"
                }`}
              >
                ★ Semnătură
              </button>
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto -mx-1 px-1">
            {categories.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="whitespace-nowrap text-[11px] uppercase tracking-widest text-white/60 hover:text-gold transition px-3 py-1 border border-bg-line"
              >
                {c.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container-x py-16 flex flex-col gap-20">
        {totalCount === 0 && (
          <div className="text-center py-20">
            <p className="font-display text-2xl text-gold mb-2">
              Nu am găsit nimic
            </p>
            <p className="text-white/60 text-sm">
              Încearcă alt cuvânt sau resetează filtrele.
            </p>
            <button
              onClick={() => {
                setQuery("");
                setDiets(new Set());
                setSignatureOnly(false);
              }}
              className="btn-outline mt-6"
            >
              Resetează
            </button>
          </div>
        )}

        {filtered.map((cat, idx) => (
          <section key={cat.id} id={cat.id} className="scroll-mt-44">
            <Reveal>
              <div
                className={`grid md:grid-cols-12 gap-10 items-start ${
                  idx % 2 === 1 ? "md:[direction:rtl]" : ""
                }`}
              >
                <div className="md:col-span-5 [direction:ltr]">
                  <div className="overflow-hidden group">
                    <div
                      className="aspect-[4/5] bg-cover bg-center zoom-img"
                      style={{ backgroundImage: `url(${cat.img})` }}
                      role="img"
                      aria-label={cat.title}
                    />
                  </div>
                </div>

                <div className="md:col-span-7 [direction:ltr] flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <span className="font-script italic text-gold">{cat.subtitle}</span>
                    <h2 className="h-section">{cat.title}</h2>
                  </div>

                  <ul className="flex flex-col divide-y divide-bg-line">
                    {cat.items.map((it) => (
                      <li
                        key={it.name}
                        className="py-5 flex items-start gap-6 group"
                      >
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3">
                            <h3 className="font-display text-xl text-white group-hover:text-gold transition">
                              {it.name}
                            </h3>
                            {it.signature && (
                              <span className="text-[10px] uppercase tracking-widest border border-gold text-gold px-2 py-0.5">
                                ★ Semnătură
                              </span>
                            )}
                            {it.diet?.map((d) => (
                              <span
                                key={d}
                                className={`text-[10px] uppercase tracking-widest border px-2 py-0.5 ${dietBadgeClass[d]}`}
                              >
                                {dietLabel[d]}
                              </span>
                            ))}
                          </div>
                          <p className="text-sm text-white/60 mt-1 leading-relaxed">
                            {it.desc}
                          </p>
                        </div>
                        <div className="font-display text-xl text-gold whitespace-nowrap pt-1">
                          {it.price}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </section>
        ))}
      </div>
    </>
  );
}
