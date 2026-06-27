import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import type { Category } from "@/lib/data";

interface CategoryTileProps {
  category: Category;
  className?: string;
}

/**
 * Full-bleed image tile with the category name overlaid — image does the
 * talking, text stays minimal. Used in the bento "Shop by Category" grid.
 */
export function CategoryTile({ category, className }: CategoryTileProps) {
  return (
    <a
      href="#popular"
      aria-label={`Shop ${category.name}`}
      className={cn(
        "group relative block h-full min-h-44 overflow-hidden rounded-3xl shadow-card",
        className,
      )}
    >
      <Image
        fill
        sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 90vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        alt={category.name}
        src={category.image}
      />
      {/* Readability scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
        <div>
          <h3 className="font-serif text-xl font-semibold text-cream sm:text-2xl">
            {category.name}
          </h3>
          <p className="text-xs font-medium text-cream/75">{category.items}</p>
        </div>
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-yellow text-ink transition-transform duration-300 group-hover:translate-x-1">
          <Icon name="arrow-right" className="h-5 w-5" />
        </span>
      </div>
    </a>
  );
}
