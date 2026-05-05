import Reveal from "./Reveal";

const press = [
  "VOGUE Adriatic",
  "FORBES Moldova",
  "DIEZ.MD",
  "AGORA",
  "MOLDOVA1",
  "GAULT & MILLAU"
];

export default function PressStrip() {
  return (
    <section className="border-y border-bg-line bg-bg-soft">
      <div className="container-x py-10">
        <Reveal>
          <p className="text-center text-[11px] uppercase tracking-[0.4em] text-white/40 mb-6">
            Apariții în presă
          </p>
        </Reveal>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
          {press.map((p, i) => (
            <Reveal key={p} delay={i * 60}>
              <span className="font-display tracking-[0.3em] text-white/55 hover:text-gold transition text-sm md:text-base">
                {p}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
