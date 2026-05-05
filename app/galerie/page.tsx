import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import Ornament from "@/components/Ornament";

export const metadata: Metadata = {
  title: "Galerie — Conacul Domnesc",
  description:
    "Imagini din restaurantul Conacul Domnesc — bucate, saloane, ambianță și pivnița de vinuri."
};

export default function GaleriePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden -mt-[81px] pt-[81px]">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80')"
          }}
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-bg/85" />

        <div className="container-x py-24 text-center flex flex-col items-center gap-4">
          <span className="font-script italic text-gold text-xl">
            Imagini din Conac
          </span>
          <Ornament className="text-gold/70 floaty" />
          <h1 className="font-display uppercase text-3xl md:text-5xl tracking-wide max-w-3xl gold-glow">
            <span className="text-gold">Galerie</span> foto
          </h1>
          <p className="max-w-xl text-sm text-white/70">
            O privire în spatele cortinei — bucătăria, saloanele și pivnița de vinuri.
          </p>
        </div>
      </section>

      <section className="container-x py-16">
        <Gallery />
      </section>
    </>
  );
}
