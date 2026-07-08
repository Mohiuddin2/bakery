import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionOverlay } from "@/components/ui/SectionOverlay";
import { ProductCard } from "@/components/ui/ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { celebrationCakes } from "@/lib/data";

export function CelebrationCakes() {
  return (
    <section
      id="cakes"
      className="relative scroll-mt-24 overflow-hidden bg-green py-20 md:py-28"
    >
      <SectionOverlay src="/overlay/celebration-cakes.jpeg" opacity={0.35} />
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-green-dark/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-yellow/15 blur-3xl" />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Made For Your Moments"
            title="Celebration Cakes"
            subtitle="Make every occasion extra special with our handcrafted celebration cakes. Beautifully designed and baked to perfection for life's sweetest moments."
            eyebrowClassName="text-yellow"
            titleClassName="text-cream"
            subtitleClassName="text-cream/90"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {celebrationCakes.map((cake, i) => (
            <Reveal key={cake.name} as="div" delay={(i % 3) * 90}>
              <ProductCard product={cake} size="lg" />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" href="#offers">
            Order a Custom Cake
          </Button>
        </div>
      </Container>
    </section>
  );
}
