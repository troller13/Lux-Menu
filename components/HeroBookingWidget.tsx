"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function tomorrow() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().slice(0, 10);
}

export default function HeroBookingWidget() {
  const router = useRouter();
  const [date, setDate] = useState(tomorrow());
  const [time, setTime] = useState("19:30");
  const [guests, setGuests] = useState("2");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const q = new URLSearchParams({ date, time, guests }).toString();
    router.push(`/contact?${q}`);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="w-full max-w-3xl bg-bg/80 backdrop-blur border border-gold/30 grid grid-cols-2 md:grid-cols-4 gap-px"
    >
      <Field label="Data">
        <input
          type="date"
          value={date}
          min={tomorrow()}
          onChange={(e) => setDate(e.target.value)}
          className="w-full bg-transparent text-white py-3 outline-none [color-scheme:dark]"
        />
      </Field>
      <Field label="Ora">
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full bg-transparent text-white py-3 outline-none [color-scheme:dark]"
        />
      </Field>
      <Field label="Persoane">
        <select
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="w-full bg-transparent text-white py-3 outline-none"
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
            <option key={n} value={n} className="bg-bg text-white">
              {n} {n === 1 ? "persoană" : "persoane"}
            </option>
          ))}
        </select>
      </Field>

      <button
        type="submit"
        className="bg-gold text-black font-medium uppercase tracking-widest text-xs px-4 py-3 hover:bg-gold-soft transition col-span-2 md:col-span-1"
      >
        Verifică disponibilitatea
      </button>
    </form>
  );
}

function Field({
  label,
  children
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="bg-bg/60 px-4 py-2 flex flex-col gap-0">
      <span className="text-[10px] uppercase tracking-widest text-gold/80">
        {label}
      </span>
      {children}
    </label>
  );
}
