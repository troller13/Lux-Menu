const items = [
  "Patru generații de tradiție",
  "Vinuri de Cricova & Purcari",
  "Produse de la stână, zilnic",
  "Recomandat Gault & Millau 2024",
  "Plăcinte coapte pe vatră",
  "Sommelier dedicat",
  "Salon privat pentru evenimente"
];

export default function MarqueeStrip() {
  const row = (
    <div className="marquee items-center text-gold/80 font-script italic text-xl whitespace-nowrap">
      {[...items, ...items].map((t, i) => (
        <span key={i} className="flex items-center gap-12">
          <span>{t}</span>
          <span className="text-gold">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="border-y border-bg-line bg-bg-soft py-5 overflow-hidden">
      {row}
    </div>
  );
}
