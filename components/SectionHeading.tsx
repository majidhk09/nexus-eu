export default function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "left",
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`mb-10 ${
        align === "center" ? "text-center mx-auto max-w-3xl" : ""
      }`}
    >
      {kicker && <div className="kicker mb-2">{kicker}</div>}
      <h2 className="text-3xl sm:text-4xl font-black text-navy leading-tight">
        {title}
      </h2>
      <div
        className={`flag-stripe mt-4 ${align === "center" ? "mx-auto" : ""}`}
      />
      {subtitle && (
        <p className="mt-4 text-ink-soft text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
