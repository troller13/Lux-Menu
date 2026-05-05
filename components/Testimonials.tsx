"use client";

import { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const reviews = [
  {
    text: "Cea mai apropiată experiență de masa bunicii dintr-un restaurant fine-dining. Sarmalele boierești și plăcintele cu vișine — pură poezie.",
    name: "Ana Munteanu",
    role: "Critic culinar, Diez.md",
    rating: 5
  },
  {
    text: "Am organizat o aniversare în Crama Boierească — atmosfera, sommelierul Andrei și meniul degustare au lăsat toți invitații fără cuvinte.",
    name: "Victor Ciobanu",
    role: "Antreprenor, Chișinău",
    rating: 5
  },
  {
    text: "Bucătărie moldovenească autentică, fără concesii. Vinurile selectate cu pricepere completează fiecare fel. O bijuterie pe Ștefan cel Mare.",
    name: "Elena Rusu",
    role: "Sommelier, București",
    rating: 5
  },
  {
    text: "Tochitura și mămăliga la ceaun mi-au amintit de copilăria de la bunici. Servire impecabilă, ambianță ca dintr-un conac vechi.",
    name: "Mihai Popescu",
    role: "Travel writer",
    rating: 5
  }
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const total = reviews.length;

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % total), 6500);
    return () => clearInterval(id);
  }, [total]);

  const next = () => setI((p) => (p + 1) % total);
  const prev = () => setI((p) => (p - 1 + total) % total);

  return (
    <section className="container-x py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Voci de la masă"
          title="Ce spun oaspeții"
          subtitle="Recenzii alese din cartea de oaspeți și din presa locală."
        />
      </Reveal>

      <div className="relative mt-12 overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: `translateX(-${i * 100}%)` }}
        >
          {reviews.map((r) => (
            <article
              key={r.name}
              className="min-w-full px-2 md:px-12 flex flex-col items-center text-center gap-5"
            >
              <div className="text-gold text-6xl font-display leading-none">“</div>
              <p className="max-w-2xl text-base md:text-xl italic font-script text-white/85 leading-relaxed">
                {r.text}
              </p>
              <div className="stars text-lg">
                {"★".repeat(r.rating)}
                <span className="opacity-30">{"★".repeat(5 - r.rating)}</span>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-display text-gold">{r.name}</p>
                <p className="text-xs uppercase tracking-widest text-white/50">
                  {r.role}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={prev}
            aria-label="Recenzia anterioară"
            className="w-10 h-10 grid place-items-center border border-bg-line text-white/70 hover:border-gold hover:text-gold transition"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M15 6l-6 6 6 6" />
            </svg>
          </button>

          <div className="flex gap-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Recenzia ${idx + 1}`}
                className={`h-1 transition-all ${
                  idx === i ? "w-8 bg-gold" : "w-3 bg-white/20"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Recenzia următoare"
            className="w-10 h-10 grid place-items-center border border-bg-line text-white/70 hover:border-gold hover:text-gold transition"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
