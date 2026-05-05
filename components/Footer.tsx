import Link from "next/link";
import Logo from "./Logo";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <footer className="border-t border-bg-line bg-bg-soft">
      <div className="container-x pt-16 pb-10">
        <Newsletter />

        <div className="grid md:grid-cols-4 gap-10 mt-16">
          <div className="flex flex-col gap-4">
            <Logo size={56} />
            <p className="text-sm text-white/55 leading-relaxed max-w-xs">
              Restaurant tradițional moldovenesc — patru generații de bucătărie
              autentică, în inima Chișinăului.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-xs uppercase tracking-widest text-gold">Navigare</h4>
            <Link href="/" className="text-sm text-white/70 hover:text-gold">Acasă</Link>
            <Link href="/meniu" className="text-sm text-white/70 hover:text-gold">Meniu</Link>
            <Link href="/galerie" className="text-sm text-white/70 hover:text-gold">Galerie</Link>
            <Link href="/despre" className="text-sm text-white/70 hover:text-gold">Despre</Link>
            <Link href="/evenimente" className="text-sm text-white/70 hover:text-gold">Evenimente</Link>
            <Link href="/contact" className="text-sm text-white/70 hover:text-gold">Contact</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-xs uppercase tracking-widest text-gold">Contact</h4>
            <p className="text-sm text-white/70">
              Strada Ștefan cel Mare 73<br />
              Chișinău, MD-2001
            </p>
            <a
              href="tel:+37322123456"
              className="text-sm text-white/70 hover:text-gold"
            >
              +373 22 123 456
            </a>
            <a
              href="mailto:rezervari@conaculdomnesc.md"
              className="text-sm text-white/70 hover:text-gold"
            >
              rezervari@conaculdomnesc.md
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-xs uppercase tracking-widest text-gold">Program</h4>
            <p className="text-sm text-white/70">Luni – Joi · 12:00 – 23:00</p>
            <p className="text-sm text-white/70">Vineri – Sâmbătă · 12:00 – 01:00</p>
            <p className="text-sm text-white/70">Duminică · 12:00 – 22:00</p>

            <div className="flex gap-3 mt-4">
              <SocialIcon label="Instagram" href="#" path="M16 8.5h.01M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm5 5a4 4 0 100 8 4 4 0 000-8z" />
              <SocialIcon label="Facebook" href="#" path="M9 8H7v4h2v8h4v-8h3l1-4h-4V6c0-1 .5-2 2-2h2V0h-3a5 5 0 00-5 5v3z" />
              <SocialIcon label="TikTok" href="#" path="M12 4v10a3 3 0 11-3-3M16 4a4 4 0 004 4" />
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-bg-line flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-white/40">
          <p>© {new Date().getFullYear()} Conacul Domnesc. Toate drepturile rezervate.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-gold">Termeni</Link>
            <Link href="#" className="hover:text-gold">Confidențialitate</Link>
            <Link href="#" className="hover:text-gold">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  label,
  href,
  path
}: {
  label: string;
  href: string;
  path: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-9 h-9 grid place-items-center border border-bg-line text-white/70 hover:text-gold hover:border-gold transition"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d={path} />
      </svg>
    </a>
  );
}
