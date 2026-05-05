import Link from "next/link";

export default function Logo({ size = 44 }: { size?: number }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Conacul Domnesc">
      <span
        className="grid place-items-center rounded-full border border-gold/70"
        style={{ width: size, height: size }}
      >
        <span className="font-display text-gold text-lg leading-none">CD</span>
      </span>
      <span className="hidden sm:flex flex-col leading-tight">
        <span className="font-display text-gold tracking-widest text-sm">
          CONACUL
        </span>
        <span className="font-script italic text-white/80 -mt-1 text-sm">
          domnesc
        </span>
      </span>
    </Link>
  );
}
