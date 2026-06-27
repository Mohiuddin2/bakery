import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/data";

interface ProductCardProps {
  product: Product;
  /** "lg" gives a taller, more dramatic image for hero categories like cakes */
  size?: "md" | "lg";
  priority?: boolean;
  className?: string;
}

const tagTone: Record<string, string> = {
  Bestseller: "bg-yellow text-ink",
  Signature: "bg-yellow text-ink",
  Hot: "bg-brown text-cream",
  New: "bg-green text-cream",
  Premium: "bg-ink text-cream",
  Custom: "bg-green text-cream",
  Seasonal: "bg-green text-cream",
  Traditional: "bg-brown text-cream",
  Modern: "bg-ink text-cream",
};

export function ProductCard({
  product,
  size = "md",
  priority = false,
  className,
}: ProductCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl bg-cream shadow-card ring-1 ring-sand/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-warm",
        className,
      )}
    >
      {/* The hero of every card — large, appetising imagery */}
      <div
        className={cn(
          "relative w-full overflow-hidden",
          size === "lg" ? "aspect-[4/5]" : "aspect-square",
        )}
      >
        <Image
          fill
          priority={priority}
          sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 90vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          alt={product.name}
          src={product.image}
        />
        {/* gentle bottom fade so a price/name could sit on the image if needed */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {product.tag && (
          <span
            className={cn(
              "absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide shadow-sm",
              tagTone[product.tag] ?? "bg-yellow text-ink",
            )}
          >
            {product.tag}
          </span>
        )}

        {/* Wishlist */}
        <button
          type="button"
          aria-label={`Save ${product.name}`}
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-cream/85 text-brown backdrop-blur transition-all duration-300 hover:bg-yellow hover:text-ink"
        >
          <Icon name="heart" className="h-4 w-4" />
        </button>
      </div>

      {/* Minimal supporting copy — name, rating, price + add */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        {product.rating && (
          <div className="flex items-center gap-0.5 text-yellow">
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon
                key={i}
                name="star"
                className={cn("h-3.5 w-3.5", i >= product.rating! && "text-sand")}
              />
            ))}
          </div>
        )}

        <h3 className="mt-2 font-serif text-lg leading-snug text-ink transition-colors group-hover:text-yellow-dark">
          {product.name}
        </h3>

        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="font-serif text-xl font-bold text-brown">
            {product.price}
          </span>
          <button
            type="button"
            aria-label={`Add ${product.name} to cart`}
            className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3.5 py-2 text-xs font-bold text-cream transition-all duration-300 hover:bg-yellow hover:text-ink"
          >
            <Icon name="cart" className="h-4 w-4" />
            Add
          </button>
        </div>
      </div>
    </article>
  );
}
