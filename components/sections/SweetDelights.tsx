import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ui/ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import { sweetDelights } from "@/lib/data";

export function SweetDelights() {
  return (
    <section className="texture-paper relative py-20 md:py-28">
      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Sweet On Tradition"
            title="Sweet Delights"
            subtitle="Indulge in our handcrafted collection of traditional and modern sweets. Made with premium ingredients to bring authentic flavors to every celebration."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-5 sm:gap-7 lg:grid-cols-3">
          {sweetDelights.map((p, i) => (
            <Reveal key={p.name} as="div" delay={(i % 3) * 80}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
