import Link from "next/link";
import Reveal from "./Reveal";
import Ornament from "./Ornament";

export default function OurStory() {
  return (
    <section className="container-x py-20">
      <Reveal>
        <div className="flex flex-col items-center text-center gap-3 mb-12">
          <span className="font-script italic text-gold text-xl md:text-2xl">
            Despre noi
          </span>
          <Ornament className="text-gold/70" />
          <h2 className="h-section">Povestea Conacului</h2>
          <p className="max-w-xl text-sm text-white/60 leading-relaxed">
            O călătorie prin gustul autentic al Moldovei, păstrat cu grijă de patru
            generații.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <Reveal variant="left">
          <div className="grid grid-cols-2 gap-3 group">
            <div className="overflow-hidden">
              <div
                className="aspect-square bg-cover bg-center zoom-img"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80')"
                }}
              />
            </div>
            <div className="grid grid-rows-2 gap-3">
              <div className="overflow-hidden">
                <div
                  className="bg-cover bg-center w-full h-full zoom-img"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80')"
                  }}
                />
              </div>
              <div className="overflow-hidden">
                <div
                  className="bg-cover bg-center w-full h-full zoom-img"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80')"
                  }}
                />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal variant="right" delay={120}>
          <div className="flex flex-col gap-5 text-white/70 text-sm md:text-base leading-relaxed">
            <p>
              Conacul Domnesc s-a născut din dorința de a aduce în Chișinău aroma
              de odinioară a satelor moldovenești. Bucătarul nostru, Ștefan
              Vrabie, gătește după rețetele păstrate de bunica Tasia, în satul
              Hîrtopul Mare.
            </p>
            <p>
              Ingredientele vin din gospodării mici din Codrii Orheiului, brânza
              este de la stâna familiei Curecheriu, iar vinurile sunt selectate
              personal din podgoriile Cricova și Purcari.
            </p>
            <Link href="/despre" className="btn-outline self-start mt-2">
              Mai multe despre noi
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
