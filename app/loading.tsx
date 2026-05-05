export default function Loading() {
  return (
    <div className="min-h-[60vh] grid place-items-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 border border-bg-line rounded-full" />
          <div className="absolute inset-0 border-t border-gold rounded-full animate-spin" />
        </div>
        <p className="text-xs uppercase tracking-[0.4em] text-gold/70">
          Se încarcă
        </p>
      </div>
    </div>
  );
}
