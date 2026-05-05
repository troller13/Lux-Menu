"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ReservationForm() {
  const params = useSearchParams();
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="card p-10 text-center flex flex-col items-center gap-3">
        <span className="font-script italic text-gold">Mulțumim</span>
        <h3 className="font-display text-2xl">Rezervarea a fost trimisă</h3>
        <p className="text-white/65 text-sm max-w-sm">
          Vă vom contacta în maximum 30 de minute pentru confirmare. Vă așteptăm la Conac.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card p-8 flex flex-col gap-5">
      <h3 className="font-display text-2xl text-gold">Formular de rezervare</h3>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Nume" name="name" required />
        <Field label="Telefon" name="phone" type="tel" required />
      </div>

      <Field label="Email" name="email" type="email" required />

      <div className="grid sm:grid-cols-3 gap-4">
        <Field
          label="Data"
          name="date"
          type="date"
          required
          defaultValue={params.get("date") ?? undefined}
        />
        <Field
          label="Ora"
          name="time"
          type="time"
          required
          defaultValue={params.get("time") ?? "19:30"}
        />
        <Field
          label="Persoane"
          name="guests"
          type="number"
          min={1}
          defaultValue={params.get("guests") ?? "2"}
          required
        />
      </div>

      <label className="flex flex-col gap-2 text-xs uppercase tracking-widest text-white/60">
        Mențiuni
        <textarea
          name="notes"
          rows={4}
          className="bg-transparent border border-bg-line p-3 text-sm text-white focus:border-gold outline-none"
          placeholder="Aniversare, alergii, preferințe..."
        />
      </label>

      <button type="submit" className="btn-gold self-start mt-2">
        Trimite rezervarea
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  min,
  defaultValue
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  min?: number;
  defaultValue?: string | number;
}) {
  return (
    <label className="flex flex-col gap-2 text-xs uppercase tracking-widest text-white/60">
      {label}
      <input
        type={type}
        name={name}
        required={required}
        min={min}
        defaultValue={defaultValue}
        className="bg-transparent border border-bg-line p-3 text-sm text-white focus:border-gold outline-none [color-scheme:dark]"
      />
    </label>
  );
}
