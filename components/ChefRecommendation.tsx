import Link from "next/link";
import Reveal from "./Reveal";

export default function ChefRecommendation() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1920&q=80')"
        }}
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-bg via-bg/95 to-bg/40" />

      <div className="container-x py-24 grid md:grid-cols-2 gap-10 items-center">
        <Reveal variant="left">
          <div className="flex flex-col gap-5 max-w-lg">
            <span className="font-script italic text-gold text-xl">
              Cuvântul Chef-ului
            </span>
            <h2 className="h-section">
              Recomandarea mea <span className="text-gold">de săptămâna asta</span>
            </h2>
            <p className="text-white/70 leading-relaxed">
              Am primit ieri un purcel de la gospodăria fraților Cibotaru, din
              Hîrtopul Mare. L-am marinat 24 de ore în vin de Purcari, foi de dafin
              și usturoi de toamnă. Îl coc lent, 6 ore, în cuptorul de pământ.
            </p>
            <p className="text-white/70 leading-relaxed">
              Servim friptura cu cartofi noi rumeniți, varză de Bucovina călită și
              un pahar de Negru de Purcari, ales personal de Andrei.
            </p>

            <div className="flex items-center gap-4 mt-2">
              <div
                className="w-14 h-14 rounded-full bg-cover bg-center border border-gold/40"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=300&q=80')"
                }}
              />
              <div>
                <p className="font-display text-gold">Ștefan Vrabie</p>
                <p className="text-xs uppercase tracking-widest text-white/50">
                  Bucătar Șef
                </p>
              </div>
            </div>

            <Link href="/meniu#friptura" className="btn-outline self-start mt-3">
              Vezi în meniu
            </Link>
          </div>
        </Reveal>

        <Reveal variant="right">
          <div className="relative">
            <div
              className="aspect-[4/5] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1100&q=80')"
              }}
            />
            <div className="absolute -bottom-6 -left-6 bg-gold text-black px-6 py-4 hidden md:block">
              <p className="font-display text-2xl">420 lei</p>
              <p className="text-[11px] uppercase tracking-widest -mt-1">
                Friptură de purcel
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
