"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setEmail("");
  }

  return (
    <div className="card p-8 md:p-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-4">
      <span className="font-script italic text-gold text-xl">
        Buletin de gust
      </span>
      <h3 className="font-display text-2xl md:text-3xl">
        Primiți meniurile sezoniere în avanpremieră
      </h3>
      <p className="text-sm text-white/60 max-w-md">
        O scrisoare lunară cu noutăți din bucătărie, degustări private și ocazii
        speciale. Fără spam.
      </p>

      {done ? (
        <p className="text-gold mt-3">
          Mulțumim! Ne vedem în următoarea scrisoare.
        </p>
      ) : (
        <form
          onSubmit={onSubmit}
          className="flex flex-col sm:flex-row w-full max-w-md gap-2 mt-3"
        >
          <input
            type="email"
            required
            placeholder="adresa@email.md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-transparent border border-bg-line px-4 py-3 text-sm focus:border-gold outline-none"
          />
          <button type="submit" className="btn-gold !px-6 !py-3">
            Abonare
          </button>
        </form>
      )}
    </div>
  );
}
