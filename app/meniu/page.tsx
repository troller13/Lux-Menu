import Link from "next/link";
import type { Metadata } from "next";
import MenuClient from "./MenuClient";
import Ornament from "@/components/Ornament";

export const metadata: Metadata = {
  title: "Meniu — Conacul Domnesc",
  description:
    "Meniul restaurantului Conacul Domnesc — bucate moldovenești, vinuri locale și deserturi tradiționale."
};

export default function MeniuPage() {
  return (
    <>
      {/* Banner */}
      <section className="relative isolate overflow-hidden -mt-[81px] pt-[81px] vignette">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1920&q=80')"
          }}
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-bg/80" />

        <div className="container-x py-24 text-center flex flex-col items-center gap-4">
          <span className="font-script italic text-gold text-xl">Meniul nostru</span>
          <Ornament className="text-gold/70 floaty" />
          <h1 className="font-display uppercase text-3xl md:text-5xl tracking-wide max-w-3xl gold-glow">
            O carte de bucate <span className="text-gold">moldovenească</span>
          </h1>
          <p className="max-w-xl text-sm text-white/70">
            Toate prețurile sunt în lei moldovenești (MDL). Pentru alergii, vă rugăm
            anunțați chelnerul.
          </p>
        </div>
      </section>

      <MenuClient />

      <section className="container-x pb-20">
        <div className="card p-10 text-center flex flex-col items-center gap-4">
          <span className="font-script italic text-gold">Vă invităm la masă</span>
          <h3 className="font-display text-2xl md:text-3xl">
            Rezervați o masă pentru a savura toate aceste bucate
          </h3>
          <Link href="/contact" className="btn-gold mt-3">
            Rezervă o masă
          </Link>
        </div>
      </section>
    </>
  );
}
