import Ornament from "./Ornament";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center"
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <span className="font-script italic text-gold text-xl md:text-2xl">
          {eyebrow}
        </span>
      )}
      <Ornament className="text-gold/70" />
      <h2 className="h-section">{title}</h2>
      {subtitle && (
        <p className="max-w-xl text-sm text-white/60 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
