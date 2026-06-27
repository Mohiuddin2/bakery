import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CategoryTile } from "@/components/ui/CategoryTile";
import { Reveal } from "@/components/ui/Reveal";
import { categories } from "@/lib/data";

// Bento spans (applied at lg) — first category is the large feature tile.
const spans = [
  "col-span-2 row-span-2 lg:col-span-2 lg:row-span-2", // Cake & Pastry
  "lg:col-span-2", // Sweet
  "", // Biscuits
  "", // Snacks
  "lg:col-span-2", // Bread
  "", // Frozen Food
  "", // Dairy
];

export function ShopByCategory() {
  return (
    <section
      id="categories"
      className="texture-dots scroll-mt-24 bg-cream py-20 md:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Find Your Favorite"
            title="Shop by Category"
            subtitle="Explore our wide range of freshly baked goods, snacks, and desserts. Find your favorites with ease and discover something new in every category."
          />
        </Reveal>

        <div className="mt-14 grid auto-rows-[160px] grid-cols-2 gap-4 sm:gap-5 lg:auto-rows-[185px] lg:grid-cols-4">
          {categories.map((c, i) => (
            <Reveal
              key={c.name}
              as="div"
              delay={(i % 4) * 70}
              className={`${spans[i]} h-full`}
            >
              <CategoryTile category={c} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
