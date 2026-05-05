"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function FloatingActions() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-4 bottom-4 md:right-6 md:bottom-6 z-40 flex flex-col items-end gap-3 print:hidden">
      <Link
        href="/contact"
        aria-label="Rezervă o masă"
        className="group flex items-center gap-2 bg-gold text-black pl-4 pr-5 py-3 text-xs uppercase tracking-widest font-medium shadow-[0_10px_30px_-10px_rgba(243,193,75,0.6)] hover:bg-gold-soft transition"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 5a2 2 0 012-2h2l2 5-2 1a11 11 0 005 5l1-2 5 2v2a2 2 0 01-2 2A16 16 0 013 5z" strokeLinejoin="round" />
        </svg>
        <span>Rezervă</span>
      </Link>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Sus"
        className={`grid place-items-center w-11 h-11 border border-gold/60 text-gold bg-bg/90 backdrop-blur transition-all ${
          scrolled
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-3 pointer-events-none"
        } hover:bg-gold hover:text-black`}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}
