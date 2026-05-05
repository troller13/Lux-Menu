"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const faqs = [
  {
    q: "Cum pot face o rezervare?",
    a: "Cel mai simplu, prin formularul de pe pagina de Contact sau telefonic la +373 22 123 456. Vă confirmăm rezervarea în maximum 30 de minute."
  },
  {
    q: "Există un cod vestimentar?",
    a: "Smart casual. Pentru cinele tematice și saloanele private recomandăm ținută elegantă. Bărbații sunt rugați să nu poarte pantaloni scurți după ora 19:00."
  },
  {
    q: "Aveți opțiuni vegetariene sau fără gluten?",
    a: "Da, aproape toate plăcintele și o bună parte din aperitive sunt vegetariene. Avem și un meniu fără gluten — îl putem aduce la cerere. Anunțați chelnerul despre orice alergie."
  },
  {
    q: "Pot organiza un eveniment privat la Conac?",
    a: "Cu plăcere. Avem trei saloane (Domnesc — 40 persoane, Crama Boierească — 16, Foișorul de vară — 24). Scrieți-ne la evenimente@conaculdomnesc.md pentru o ofertă personalizată."
  },
  {
    q: "Acceptați câini?",
    a: "Câinii cu botniță sunt bineveniți pe terasa de vară. În interior, doar câinii ghizi."
  },
  {
    q: "Aveți parcare?",
    a: "Da, parcare proprie cu valet la intrarea din curtea interioară, gratuită pentru oaspeții restaurantului."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="container-x py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Întrebări frecvente"
          title="Răspunsuri rapide"
          subtitle="Tot ce trebuie să știți înainte să ne vizitați."
        />
      </Reveal>

      <div className="max-w-3xl mx-auto mt-12 flex flex-col">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={f.q} delay={i * 60}>
              <div className="border-b border-bg-line">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-display text-lg md:text-xl transition ${
                      isOpen ? "text-gold" : "text-white"
                    }`}
                  >
                    {f.q}
                  </span>
                  <span
                    className={`text-gold text-2xl transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pb-5"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-white/65 leading-relaxed text-sm md:text-base pr-8">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
