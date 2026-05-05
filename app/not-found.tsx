import Link from "next/link";
import Ornament from "@/components/Ornament";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] grid place-items-center container-x">
      <div className="text-center flex flex-col items-center gap-5">
        <span className="font-script italic text-gold text-xl">404</span>
        <Ornament className="text-gold/70 floaty" />
        <h1 className="font-display uppercase text-3xl md:text-5xl tracking-wide">
          Pagina <span className="text-gold">nu există</span>
        </h1>
        <p className="max-w-md text-sm text-white/60">
          Se pare că vatra s-a stins pe acest drum. Întoarceți-vă la masa
          principală sau răsfoiți meniul.
        </p>
        <div className="flex gap-3 mt-2">
          <Link href="/" className="btn-gold">
            Înapoi acasă
          </Link>
          <Link href="/meniu" className="btn-outline">
            Vezi meniul
          </Link>
        </div>
      </div>
    </section>
  );
}
