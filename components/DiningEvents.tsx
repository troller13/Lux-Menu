"use client";

import { useState } from "react";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

type Mode = "private" | "corporate";

const packages = {
  private: [
    {
      price: "5 000 lei",
      title: "Cina Domnească",
      details: ["Bottle de vin spumant", "Meniu degustare pentru 2", "Desert al casei"],
      img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1300&q=80",
      side: "left" as const
    },
    {
      price: "8 000 lei",
      title: "Cina Boierească",
      details: ["Sticlă de Cricova", "Meniu Chef pentru 2+", "Desert"],
      img: "https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&w=1300&q=80",
      side: "right" as const
    },
    {
      price: "12 000 lei",
      title: "Cina Regală",
      details: ["Sticlă de Negru de Purcari", "Meniu special pentru 2+", "Desert regal"],
      img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1300&q=80",
      side: "left" as const
    }
  ],
  corporate: [
    {
      price: "15 000 lei",
      title: "Pachet Echipă (10 persoane)",
      details: ["Meniu fix cu 4 feluri", "Vinuri locale incluse", "Salon privat"],
      img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1300&q=80",
      side: "left" as const
    },
    {
      price: "25 000 lei",
      title: "Banchet Boieresc (20 persoane)",
      details: ["Meniu degustare cu 6 feluri", "Selecție de vinuri", "Tort personalizat"],
      img: "https://images.unsplash.com/photo-1530062845289-9109b2c9c868?auto=format&fit=crop&w=1300&q=80",
      side: "right" as const
    }
  ]
};

export default function DiningEvents() {
  const [mode, setMode] = useState<Mode>("private");
  const items = packages[mode];

  return (
    <section className="container-x py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Evenimente speciale"
          title="Cina la Conac"
          subtitle="Meniuri tematice gândite pentru ocazii speciale, în saloanele noastre intime."
        />
      </Reveal>

      <div className="mt-8 flex justify-center gap-3">
        <button
          onClick={() => setMode("private")}
          className={mode === "private" ? "btn-gold" : "btn-outline"}
        >
          Eveniment privat
        </button>
        <button
          onClick={() => setMode("corporate")}
          className={mode === "corporate" ? "btn-gold" : "btn-outline"}
        >
          Eveniment corporativ
        </button>
      </div>

      <div className="mt-12 flex flex-col gap-6">
        {items.map((p, i) => (
          <Reveal key={p.title} delay={i * 100} variant="zoom">
          <article
            className="card card-hover relative overflow-hidden min-h-[260px] grid grid-cols-1 md:grid-cols-2 group"
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-70 zoom-img"
              style={{ backgroundImage: `url(${p.img})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-transparent md:from-bg md:via-bg/80" />

            <div
              className={`relative z-10 p-8 flex flex-col justify-center gap-3 ${
                p.side === "right" ? "md:col-start-2 md:items-end md:text-right" : ""
              }`}
            >
              <p className="font-display text-3xl text-gold">{p.price}</p>
              <h3 className="font-display text-2xl">{p.title}</h3>
              <ul className="text-sm text-white/70 leading-relaxed">
                {p.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              <Link href="/contact" className="btn-outline mt-3 self-start md:self-auto">
                Rezervă pachetul
              </Link>
            </div>
          </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
