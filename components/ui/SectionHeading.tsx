import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  invert?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  invert = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      <p className="font-script text-2xl text-gold sm:text-3xl">{eyebrow}</p>
      <h2
        className={cn(
          "mt-2 text-3xl font-semibold leading-tight sm:text-4xl md:text-[2.75rem]",
          invert ? "text-cream" : "text-ink",
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "mt-5 flex items-center gap-3",
          align === "center" ? "justify-center" : "justify-start",
        )}
      >
        <span className="h-px w-8 bg-gold/50" />
        <span className="h-2 w-2 rotate-45 bg-gold" />
        <span className="h-px w-8 bg-gold/50" />
      </div>
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed",
            invert ? "text-cream/70" : "text-muted",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
