"use client";

import { useEffect, useRef, useState } from "react";

type Stat = { value: number; suffix?: string; label: string };

const stats: Stat[] = [
  { value: 76, suffix: "+", label: "Ani de tradiție" },
  { value: 142, suffix: "", label: "Preparate în meniu" },
  { value: 38, suffix: "", label: "Vinuri locale" },
  { value: 12500, suffix: "+", label: "Oaspeți pe an" }
];

function useCounter(target: number, start: boolean, duration = 1600) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return n;
}

function StatCard({ s, start }: { s: Stat; start: boolean }) {
  const n = useCounter(s.value, start);
  return (
    <div className="flex flex-col items-center text-center gap-2">
      <p className="font-display stat-num text-4xl md:text-6xl text-gold">
        {n.toLocaleString("ro-RO")}
        {s.suffix}
      </p>
      <p className="text-xs uppercase tracking-widest text-white/60">{s.label}</p>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStart(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden border-y border-bg-line"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-15"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1920&q=80')"
        }}
      />
      <div className="container-x py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <StatCard key={s.label} s={s} start={start} />
        ))}
      </div>
    </section>
  );
}
