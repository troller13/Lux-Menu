import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Despre noi — Conacul Domnesc",
  description:
    "Patru generații de bucătărie moldovenească autentică, în inima Chișinăului."
};

const milestones = [
  { year: "1947", title: "Bunica Tasia", text: "Începuturile la cuptorul de lut din satul Hîrtopul Mare." },
  { year: "1985", title: "Hanul de la răscruce", text: "Familia deschide primul han pe drumul vechi al Chișinăului." },
  { year: "2008", title: "Conacul Domnesc", text: "Restaurantul de astăzi își deschide porțile pe Ștefan cel Mare." },
  { year: "2024", title: "Premiul Gault & Millau", text: "Două tocuri pentru bucătăria autentică moldovenească." }
];

export default function DesprePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden -mt-[81px] pt-[81px]">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=1920&q=80')"
          }}
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-bg/80" />

        <div className="container-x py-24 text-center flex flex-col items-center gap-4">
          <span className="ornament font-script italic text-gold">Despre noi</span>
          <h1 className="font-display uppercase text-3xl md:text-5xl tracking-wide max-w-3xl">
            Patru generații de <span className="text-gold">bucătărie autentică</span>
          </h1>
        </div>
      </section>

      <section className="container-x py-20 grid md:grid-cols-2 gap-10 items-center">
        <div
          className="aspect-[4/5] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1100&q=80')"
          }}
        />
        <div className="flex flex-col gap-5 text-white/70 leading-relaxed">
          <span className="ornament font-script italic text-gold">Povestea noastră</span>
          <h2 className="h-section">De la cuptorul de lut, la masa boierească</h2>
          <p>
            Conacul Domnesc este un proiect de familie — patru generații care au păstrat
            cu sfințenie rețetele bunicii Tasia din satul Hîrtopul Mare, raionul Criuleni.
            Tot ce gătim este făcut zilnic, manual, fără compromisuri.
          </p>
          <p>
            Bucătarul nostru, Ștefan Vrabie, este nepotul ei — a învățat să întindă foile
            de plăcintă la 9 ani și astăzi conduce echipa Conacului. Amestecăm tradiția cu
            tehnici moderne, dar gustul rămâne neschimbat.
          </p>
          <p>
            Lucrăm direct cu producători mici din Codrii Orheiului, brânza vine de la
            stâna familiei Curecheriu, iar vinurile le selectăm personal de la Cricova,
            Purcari, Mileștii Mici și Castel Mimi.
          </p>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="text-center flex flex-col items-center gap-3 mb-12">
          <span className="ornament font-script italic text-gold">Drumul nostru</span>
          <h2 className="h-section">Repere</h2>
        </div>

        <ol className="grid md:grid-cols-4 gap-6">
          {milestones.map((m) => (
            <li key={m.year} className="card p-6 flex flex-col gap-2">
              <p className="font-display text-3xl text-gold">{m.year}</p>
              <h3 className="font-display text-lg">{m.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{m.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="container-x py-20">
        <div className="text-center flex flex-col items-center gap-3 mb-12">
          <span className="ornament font-script italic text-gold">Echipa</span>
          <h2 className="h-section">Oamenii Conacului</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Ștefan Vrabie",
              role: "Bucătar Șef",
              img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80"
            },
            {
              name: "Maria Lungu",
              role: "Maître d'hôtel",
              img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80"
            },
            {
              name: "Andrei Postolache",
              role: "Sommelier",
              img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
            }
          ].map((p) => (
            <article key={p.name} className="card overflow-hidden">
              <div
                className="aspect-[4/5] bg-cover bg-center"
                style={{ backgroundImage: `url(${p.img})` }}
              />
              <div className="p-6 text-center">
                <h3 className="font-display text-xl text-gold">{p.name}</h3>
                <p className="text-sm uppercase tracking-widest text-white/60 mt-1">
                  {p.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="card p-10 text-center flex flex-col items-center gap-4">
          <h3 className="font-display text-2xl md:text-3xl">
            Vă invităm să trăiți povestea noastră la masă
          </h3>
          <Link href="/contact" className="btn-gold mt-3">
            Rezervă o masă
          </Link>
        </div>
      </section>
    </>
  );
}
