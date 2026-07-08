import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ui/ProductCard";
import type { ProductDetails } from "@/lib/products";

interface RelatedProductsProps {
  products: ProductDetails[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section className="border-t border-sand bg-sand/30 py-16 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="You Might Also Like"
          title="Related Products"
          subtitle="More freshly baked favourites from the same aisle — perfect to add to your order."
          align="left"
          eyebrowClassName="text-yellow"
          titleClassName="text-brown-dark"
          subtitleClassName="text-brown"
        />
        <div className="mt-10 grid grid-cols-2 gap-5 sm:gap-7 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
