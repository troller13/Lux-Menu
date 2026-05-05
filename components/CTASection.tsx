import Link from "next/link";
import Reveal from "./Reveal";
import Ornament from "./Ornament";

export default function CTASection() {
  return (
    <section className="relative isolate overflow-hidden vignette">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-cover bg-center scale-110"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80')"
        }}
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-bg/85" />

      <div className="container-x py-24 flex flex-col items-center text-center gap-6">
        <Reveal>
          <span className="font-script italic text-gold text-xl md:text-2xl">
            Vă așteptăm
          </span>
        </Reveal>
        <Reveal delay={80}>
          <Ornament className="text-gold/70 floaty" />
        </Reveal>
        <Reveal delay={120}>
          <h2 className="font-display uppercase text-3xl md:text-5xl tracking-wide leading-tight max-w-3xl gold-glow">
            Suntem gata să vă oferim
            <br />
            <span className="text-gold">cele mai bune experiențe culinare</span>
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <div className="flex flex-col sm:flex-row gap-6 mt-4 text-sm text-white/80">
            <p className="flex items-center gap-2">
              <span className="text-gold">⌖</span>
              Strada Ștefan cel Mare 73, Chișinău
            </p>
            <p className="flex items-center gap-2">
              <span className="text-gold">☏</span>
              +373 22 123 456
            </p>
          </div>
        </Reveal>

        <Reveal delay={280}>
          <Link href="/contact" className="btn-gold mt-2">
            Rezervă o masă
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
