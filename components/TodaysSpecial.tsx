import Link from "next/link";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const specials = [
  {
    name: "Sarmale boierești",
    img: "https://images.unsplash.com/photo-1625938145744-533e82c5dd0a?auto=format&fit=crop&w=900&q=80",
    desc: "Sarmale învelite în frunze de viță, umplute cu carne fragedă de vițel și orez aromat, servite cu mămăliguță și smântână de țară.",
    price: "320 lei"
  },
  {
    name: "Plăcinte cu brânză",
    img: "https://images.unsplash.com/photo-1605522561233-768ad7a8fabf?auto=format&fit=crop&w=900&q=80",
    desc: "Plăcinte coapte pe vatră, cu brânză de oi proaspătă, mărar verde și foi subțiri întinse manual, după rețeta bunicii.",
    price: "120 lei"
  },
  {
    name: "Tochitură moldovenească",
    img: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=900&q=80",
    desc: "Tochitură tradițională cu carne de porc, afumătură de țară, ou ochi și mămăliguță rumenită — gustul casei părintești.",
    price: "310 lei"
  }
];

export default function TodaysSpecial() {
  return (
    <section className="container-x py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Specialitățile zilei"
          title="Astăzi pe vatră"
          subtitle="Bucătarul nostru a pregătit câteva preparate care merită încercate astăzi."
        />
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {specials.map((s, i) => (
          <Reveal key={s.name} delay={i * 120}>
            <article className="card card-hover group flex flex-col h-full overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center zoom-img"
                  style={{ backgroundImage: `url(${s.img})` }}
                  role="img"
                  aria-label={s.name}
                />
                <div className="absolute top-3 right-3 bg-bg/85 backdrop-blur px-3 py-1 text-xs font-display text-gold">
                  {s.price}
                </div>
              </div>
              <div className="p-6 flex flex-col gap-4 flex-1">
                <h3 className="font-display text-2xl text-gold">{s.name}</h3>
                <p className="text-sm text-white/60 leading-relaxed flex-1">
                  {s.desc}
                </p>
                <div className="stars text-lg">★ ★ ★ ★ ★</div>
                <Link href="/contact" className="btn-outline self-start">
                  Comandă acum
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
