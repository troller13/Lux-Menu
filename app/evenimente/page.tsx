import Link from "next/link";
import type { Metadata } from "next";
import DiningEvents from "@/components/DiningEvents";

export const metadata: Metadata = {
  title: "Evenimente — Conacul Domnesc",
  description:
    "Pachete de evenimente private și corporative la Conacul Domnesc — Chișinău."
};

const halls = [
  {
    name: "Salonul Domnesc",
    capacity: "până la 40 persoane",
    desc: "Salonul principal cu candelabre de cristal și șemineu de marmură.",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1100&q=80"
  },
  {
    name: "Crama Boierească",
    capacity: "până la 16 persoane",
    desc: "Salon privat în pivnița de piatră, perfect pentru degustări de vin.",
    img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1100&q=80"
  },
  {
    name: "Foișorul de vară",
    capacity: "până la 24 persoane",
    desc: "Terasă acoperită cu viță de vie, deschisă din mai până în octombrie.",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1100&q=80"
  }
];

export default function EvenimentePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden -mt-[81px] pt-[81px]">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1530062845289-9109b2c9c868?auto=format&fit=crop&w=1920&q=80')"
          }}
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-bg/80" />

        <div className="container-x py-24 text-center flex flex-col items-center gap-4">
          <span className="ornament font-script italic text-gold">Evenimente speciale</span>
          <h1 className="font-display uppercase text-3xl md:text-5xl tracking-wide max-w-3xl">
            Sărbători nepieritoare la <span className="text-gold">Conacul Domnesc</span>
          </h1>
          <p className="max-w-xl text-sm text-white/70">
            Aniversări, nunți, evenimente corporative și degustări — gândim totul împreună
            cu dumneavoastră.
          </p>
        </div>
      </section>

      <DiningEvents />

      <section className="container-x py-20">
        <div className="text-center flex flex-col items-center gap-3 mb-12">
          <span className="ornament font-script italic text-gold">Saloanele noastre</span>
          <h2 className="h-section">Trei spații, o singură poveste</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {halls.map((h) => (
            <article key={h.name} className="card overflow-hidden flex flex-col">
              <div
                className="aspect-[4/3] bg-cover bg-center"
                style={{ backgroundImage: `url(${h.img})` }}
              />
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="font-display text-2xl text-gold">{h.name}</h3>
                <p className="text-xs uppercase tracking-widest text-white/50">
                  {h.capacity}
                </p>
                <p className="text-sm text-white/65 leading-relaxed flex-1">{h.desc}</p>
                <Link href="/contact" className="btn-outline self-start mt-2">
                  Solicită ofertă
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
