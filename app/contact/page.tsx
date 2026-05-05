import { Suspense } from "react";
import type { Metadata } from "next";
import ReservationForm from "@/components/ReservationForm";

export const metadata: Metadata = {
  title: "Contact — Conacul Domnesc",
  description:
    "Rezervare masă, contact și locație — Conacul Domnesc, Strada Ștefan cel Mare 73, Chișinău."
};

export default function ContactPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden -mt-[81px] pt-[81px]">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80')"
          }}
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-bg/80" />

        <div className="container-x py-24 text-center flex flex-col items-center gap-4">
          <span className="ornament font-script italic text-gold">Vă așteptăm</span>
          <h1 className="font-display uppercase text-3xl md:text-5xl tracking-wide max-w-3xl">
            Rezervă o <span className="text-gold">masă</span>
          </h1>
        </div>
      </section>

      <section className="container-x py-20 grid md:grid-cols-5 gap-12">
        <div className="md:col-span-2 flex flex-col gap-8">
          <div>
            <p className="font-script italic text-gold text-lg">Adresa</p>
            <p className="text-white/80 mt-1 leading-relaxed">
              Strada Ștefan cel Mare 73<br />
              Chișinău, MD-2001
            </p>
          </div>

          <div>
            <p className="font-script italic text-gold text-lg">Telefon</p>
            <p className="text-white/80 mt-1">+373 22 123 456</p>
            <p className="text-white/80">+373 69 123 456 (rezervări)</p>
          </div>

          <div>
            <p className="font-script italic text-gold text-lg">Email</p>
            <p className="text-white/80 mt-1">rezervari@conaculdomnesc.md</p>
            <p className="text-white/80">evenimente@conaculdomnesc.md</p>
          </div>

          <div>
            <p className="font-script italic text-gold text-lg">Program</p>
            <ul className="text-white/80 mt-1 leading-relaxed text-sm">
              <li>Luni – Joi: 12:00 – 23:00</li>
              <li>Vineri – Sâmbătă: 12:00 – 01:00</li>
              <li>Duminică: 12:00 – 22:00</li>
            </ul>
          </div>
        </div>

        <div className="md:col-span-3">
          <Suspense fallback={<div className="card p-8 h-96 animate-pulse" />}>
            <ReservationForm />
          </Suspense>
        </div>
      </section>

      <section className="border-t border-bg-line">
        <iframe
          title="Hartă Conacul Domnesc"
          src="https://www.openstreetmap.org/export/embed.html?bbox=28.823%2C47.020%2C28.843%2C47.030&layer=mapnik"
          className="w-full h-96 border-0"
          loading="lazy"
        />
      </section>
    </>
  );
}
