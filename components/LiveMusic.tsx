import Link from "next/link";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const program = [
  {
    day: "Joi",
    date: "8 mai",
    title: "Ansamblul Tezaur",
    desc: "Muzică populară moldovenească · 19:30 — 22:30",
    img: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=900&q=80"
  },
  {
    day: "Vineri",
    date: "9 mai",
    title: "Trio Jazz Ștefan Petrache",
    desc: "Jazz acustic · 20:00 — 23:00",
    img: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=900&q=80"
  },
  {
    day: "Sâmbătă",
    date: "10 mai",
    title: "Soprana Olga Busuioc",
    desc: "Recital de operă · 20:30 — 22:30",
    img: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=900&q=80"
  }
];

export default function LiveMusic() {
  return (
    <section className="container-x py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Muzică live"
          title="Programul săptămânii"
          subtitle="În fiecare seară de joi, vineri și sâmbătă, masa devine concert."
        />
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {program.map((p, i) => (
          <Reveal key={p.title} delay={i * 100}>
            <article className="card card-hover group overflow-hidden flex flex-col h-full">
              <div className="relative overflow-hidden">
                <div
                  className="aspect-[4/3] bg-cover bg-center zoom-img"
                  style={{ backgroundImage: `url(${p.img})` }}
                  role="img"
                  aria-label={p.title}
                />
                <div className="absolute top-3 left-3 bg-bg/85 backdrop-blur px-3 py-2 text-center">
                  <p className="text-[10px] uppercase tracking-widest text-gold">
                    {p.day}
                  </p>
                  <p className="font-display text-lg leading-none">{p.date}</p>
                </div>
              </div>
              <div className="p-6 flex flex-col gap-2 flex-1">
                <h3 className="font-display text-xl text-gold">{p.title}</h3>
                <p className="text-sm text-white/60">{p.desc}</p>
                <Link
                  href="/contact"
                  className="text-xs uppercase tracking-widest text-gold mt-3 inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Rezervă seara
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
