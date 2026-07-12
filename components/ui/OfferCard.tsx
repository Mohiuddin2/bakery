import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { Offer } from "@/lib/data";

const toneGradients: Record<Offer["tone"], string> = {
  brown: "from-brown-dark/95 via-brown/55 to-transparent",
  green: "from-green-dark/95 via-green/50 to-transparent",
  yellow: "from-yellow-dark/95 via-yellow/55 to-transparent",
};

const toneAccent: Record<Offer["tone"], string> = {
  brown: "text-yellow-light/10",
  green: "text-cream/10",
  yellow: "text-brown/10",
};

interface OfferCardProps {
  offer: Offer;
  className?: string;
}

export function OfferCard({ offer, className }: OfferCardProps) {
  return (
    <div
      className={cn(
        "group relative h-64 overflow-hidden rounded-[1.75rem] shadow-card ring-1 ring-ink/5 sm:h-72 lg:h-[22rem]",
        className,
      )}
    >
      <Image
        fill
        sizes="(min-width:768px) 50vw, 90vw"
        className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.08]"
        alt={offer.title}
        src={offer.image}
      />

      {/* Layered atmosphere */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-r",
          toneGradients[offer.tone],
        )}
      />
      <div className="texture-grain pointer-events-none absolute inset-0 opacity-[0.22] mix-blend-overlay" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-ink/15" />
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_140px_50px_rgba(42,27,18,0.45)]" />

      {/* Faint oversized accent — bakery receipt watermark */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute -right-2 top-1/2 -translate-y-1/2 select-none font-serif text-[7.5rem] font-bold leading-none tracking-tighter sm:text-[9rem]",
          toneAccent[offer.tone],
        )}
      >
        {offer.accent}
      </span>

      {/* Hanging price-tag badge — the signature element */}
      <div
        aria-hidden
        className="absolute right-5 top-5 z-10 origin-top-right rotate-[10deg] transition-transform duration-500 group-hover:rotate-[6deg] group-hover:scale-105"
      >
        <div className="relative flex flex-col items-center">
          {/* String */}
          <div className="h-3 w-px bg-cream/50" />
          {/* Hole punch */}
          <div className="relative -mt-0.5 h-3.5 w-3.5 rounded-full bg-sand shadow-[inset_0_1px_3px_rgba(42,27,18,0.35)] ring-2 ring-brown/25">
            <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brown/20" />
          </div>
          {/* Tag body */}
          <div className="relative -mt-1 min-w-[5.75rem] overflow-hidden rounded-sm border-2 border-dashed border-brown/35 bg-gradient-to-b from-yellow-light via-yellow to-yellow-dark px-4 pb-3.5 pt-2.5 shadow-warm">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent" />
            <p className="relative text-center font-serif text-[1.65rem] font-extrabold leading-none tracking-tight text-ink">
              {offer.badge}
            </p>
            <p className="relative mt-1 text-center text-[9px] font-bold uppercase tracking-[0.22em] text-brown/80">
              {offer.badge === "FREE" ? "Bonus" : "Off"}
            </p>
          </div>
        </div>
      </div>

      {/* Copy block */}
      <div className="absolute inset-0 flex flex-col justify-end gap-3 p-7 sm:p-9">
        <h3 className="max-w-[15rem] font-serif text-2xl font-bold leading-tight text-cream sm:max-w-[18rem] sm:text-[1.75rem]">
          {offer.title}
        </h3>
        <p className="max-w-[20rem] text-sm leading-relaxed text-cream/80">
          {offer.subtitle}
        </p>
        <Button href="#popular" size="md" className="mt-1 w-fit">
          Grab the Deal
        </Button>
      </div>
    </div>
  );
}
