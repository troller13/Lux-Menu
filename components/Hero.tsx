import Link from "next/link";
import HeroBookingWidget from "./HeroBookingWidget";
import Ornament from "./Ornament";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[88vh] flex items-center justify-center overflow-hidden vignette -mt-[81px] pt-[81px]">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80')"
        }}
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-hero-grad" />

      <div className="container-x flex flex-col items-center text-center gap-6 py-28">
        {/* Open-now indicator */}
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.4em] text-white/70">
          <span className="relative inline-flex w-2 h-2">
            <span className="absolute inset-0 rounded-full bg-emerald-400 dot-live" />
            <span className="absolute inset-0 rounded-full bg-emerald-400" />
          </span>
          Deschis acum · până la 23:00
        </div>

        <span className="font-script italic text-gold text-lg md:text-xl">
          Cele mai bune din Moldova
        </span>
        <Ornament className="text-gold/70 floaty" />

        <h1 className="font-display uppercase tracking-wide text-3xl sm:text-5xl md:text-6xl leading-tight max-w-4xl gold-glow">
          Gustă bogăția aromelor
          <br />
          <span className="text-gold">din bucătăria moldovenească</span>
        </h1>

        <p className="max-w-xl text-sm md:text-base text-white/70">
          Vă invităm să descoperiți rețete autentice, transmise din bunici, servite
          într-un cadru elegant, cu vinuri de Cricova și ospitalitate moldovenească.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <Link href="/meniu" className="btn-gold">
            Vezi meniul
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
          <Link href="/galerie" className="btn-outline">
            Galerie
          </Link>
        </div>

        <div className="w-full mt-10">
          <HeroBookingWidget />
        </div>
      </div>

      {/* Scroll cue */}
      <div
        aria-hidden
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-[10px] uppercase tracking-[0.4em] flex flex-col items-center gap-2"
      >
        Scroll
        <span className="w-px h-10 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
