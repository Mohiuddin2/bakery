import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ui/ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { popularProducts } from "@/lib/data";

export function PopularProducts() {
  return (
    <section id="popular" className="scroll-mt-24 bg-cream py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Customer Favorites"
            title="Popular Products"
            subtitle="Discover the bakery favorites loved by our customers every day. From signature treats to freshly baked delights, these bestsellers never disappoint."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-5 sm:gap-7 lg:grid-cols-4">
          {popularProducts.map((p, i) => (
            <Reveal key={p.name} as="div" delay={(i % 4) * 80}>
              <ProductCard product={p} priority={i < 4} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="secondary" size="lg" href="#categories">
            View All Products
          </Button>
        </div>
      </Container>
    </section>
  );
}
