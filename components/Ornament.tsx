export default function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 14"
      width="120"
      height="14"
      className={className}
      aria-hidden
    >
      <line x1="0" y1="7" x2="48" y2="7" stroke="currentColor" strokeWidth="1" />
      <line x1="72" y1="7" x2="120" y2="7" stroke="currentColor" strokeWidth="1" />
      <path
        d="M60 1 L66 7 L60 13 L54 7 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle cx="60" cy="7" r="1.4" fill="currentColor" />
    </svg>
  );
}
