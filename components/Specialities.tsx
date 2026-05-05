"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

type Dish = {
  name: string;
  desc: string;
  price: string;
  img: string;
  reverse?: boolean;
};

const tabs = [
  "Plăcinte",
  "Sarmale",
  "Mămăligă",
  "Friptură",
  "Tochitură",
  "Vinuri",
  "Aperitive"
] as const;

type Tab = (typeof tabs)[number];

const dishesByTab: Record<Tab, Dish[]> = {
  Plăcinte: [
    {
      name: "Plăcinte cu brânză",
      desc: "Foi subțiri întinse manual, brânză de oi proaspătă, mărar și smântână de țară.",
      price: "120 lei",
      img: "https://images.unsplash.com/photo-1605522561233-768ad7a8fabf?auto=format&fit=crop&w=1100&q=80"
    },
    {
      name: "Plăcinte cu varză",
      desc: "Plăcinte rumenite cu varză călită, ceapă caramelizată și piper proaspăt măcinat.",
      price: "110 lei",
      img: "https://images.unsplash.com/photo-1601979031925-9c4f6a26e9ad?auto=format&fit=crop&w=1100&q=80",
      reverse: true
    },
    {
      name: "Plăcinte cu vișine",
      desc: "Desert cald cu vișine din livada bunicii, cu o pudră fină de zahăr aromat cu scorțișoară.",
      price: "130 lei",
      img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1100&q=80"
    }
  ],
  Sarmale: [
    {
      name: "Sarmale boierești",
      desc: "Sarmale în foi de viță, vițel fraged și orez aromat, servite cu mămăliguță și smântână.",
      price: "320 lei",
      img: "https://images.unsplash.com/photo-1625938145744-533e82c5dd0a?auto=format&fit=crop&w=1100&q=80"
    },
    {
      name: "Sarmale în foi de varză",
      desc: "Rețeta tradițională, fierte la cuptor cu lemn, cu afumătură de casă și boia dulce.",
      price: "290 lei",
      img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1100&q=80",
      reverse: true
    }
  ],
  Mămăligă: [
    {
      name: "Mămăligă cu brânză și jumări",
      desc: "Mălai de țară fiert lent, brânză frământată, jumări crocante și smântână grasă.",
      price: "240 lei",
      img: "https://images.unsplash.com/photo-1604908554007-9caea3e1d8c8?auto=format&fit=crop&w=1100&q=80"
    },
    {
      name: "Mămăligă cu pui la ceaun",
      desc: "Bucăți de pui rumenite în ceaun cu mujdei de usturoi și mărar proaspăt.",
      price: "260 lei",
      img: "https://images.unsplash.com/photo-1598103442257-8c4dcecdf28f?auto=format&fit=crop&w=1100&q=80",
      reverse: true
    }
  ],
  Friptură: [
    {
      name: "Friptură de purcel",
      desc: "Pulpă de purcel coaptă lent cu vin alb de Purcari, rozmarin și cartofi noi.",
      price: "420 lei",
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1100&q=80"
    },
    {
      name: "Mușchi de vită la grătar",
      desc: "Vită maturată, gătită pe lemn de fag, servită cu legume coapte și sos de hribi.",
      price: "490 lei",
      img: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1100&q=80",
      reverse: true
    }
  ],
  Tochitură: [
    {
      name: "Tochitură moldovenească",
      desc: "Carne de porc, afumătură de țară, ou ochi și mămăliguță rumenită la cuptor.",
      price: "310 lei",
      img: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=1100&q=80"
    }
  ],
  Vinuri: [
    {
      name: "Cricova — Negru de Purcari",
      desc: "Roșu sec, asamblaj de Cabernet, Saperavi și Rara Neagră, învechit în baricuri de stejar.",
      price: "780 lei / sticlă",
      img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1100&q=80"
    },
    {
      name: "Mileștii Mici — Fetească Albă",
      desc: "Vin alb sec, aromă fină de flori de tei și măr verde, recolta 2021.",
      price: "520 lei / sticlă",
      img: "https://images.unsplash.com/photo-1474722883778-792e7990302f?auto=format&fit=crop&w=1100&q=80",
      reverse: true
    }
  ],
  Aperitive: [
    {
      name: "Platou de aperitive de țară",
      desc: "Brânză de oi, slănină afumată, ouă de prepeliță, roșii uscate și pâine de casă.",
      price: "280 lei",
      img: "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=1100&q=80"
    }
  ]
};

export default function Specialities() {
  const [active, setActive] = useState<Tab>("Plăcinte");
  const dishes = dishesByTab[active];

  return (
    <section className="container-x py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Specialitățile noastre"
          title="Bucătăria casei"
          subtitle="O selecție din preparatele care ne reprezintă, gătite cu ingrediente de la producători locali."
        />
      </Reveal>

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`px-4 py-2 text-xs uppercase tracking-widest border transition ${
              active === t
                ? "bg-gold text-black border-gold"
                : "border-bg-line text-white/70 hover:border-gold hover:text-gold"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-12 flex flex-col gap-12">
        {dishes.map((d, i) => (
          <Reveal
            key={d.name}
            variant={d.reverse ? "right" : "left"}
            delay={i * 80}
          >
            <article
              className={`grid md:grid-cols-2 items-center gap-8 group ${
                d.reverse ? "md:[direction:rtl]" : ""
              }`}
            >
              <div className="overflow-hidden">
                <div
                  className="aspect-[16/10] bg-cover bg-center zoom-img"
                  style={{ backgroundImage: `url(${d.img})` }}
                  role="img"
                  aria-label={d.name}
                />
              </div>
              <div className="flex flex-col gap-4 [direction:ltr]">
                <h3 className="font-display text-3xl text-gold transition group-hover:gold-glow">
                  {d.name}
                </h3>
                <p className="text-sm text-white/65 leading-relaxed">{d.desc}</p>
                <p className="font-display text-2xl">{d.price}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
