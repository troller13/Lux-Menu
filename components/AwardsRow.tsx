import Reveal from "./Reveal";

const awards = [
  { title: "Gault & Millau", subtitle: "Două tocuri · 2024" },
  { title: "Trip Advisor", subtitle: "Travelers' Choice · 2023" },
  { title: "World of Wine", subtitle: "Carta de aur · 2024" },
  { title: "Forbes Moldova", subtitle: "Top 10 restaurante · 2024" }
];

export default function AwardsRow() {
  return (
    <section className="container-x py-14">
      <Reveal>
        <p className="text-center text-xs uppercase tracking-[0.4em] text-white/40 mb-8">
          Recunoștere
        </p>
      </Reveal>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-2">
        {awards.map((a, i) => (
          <Reveal key={a.title} delay={i * 80}>
            <div className="flex flex-col items-center text-center gap-2 p-6 border border-bg-line transition hover:border-gold/60">
              <p className="font-display text-lg md:text-xl text-gold">
                {a.title}
              </p>
              <p className="text-[11px] uppercase tracking-widest text-white/55">
                {a.subtitle}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
