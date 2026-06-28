import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ui/ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { celebrationCakes } from "@/lib/data";

export function CelebrationCakes() {
  return (
    <section
      id="cakes"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-[#e4f4d2] via-[#d2ecb6] to-[#bfe29a] py-20 md:py-28"
    >
      {/* texture + soft glow */}
      <div className="texture-dots pointer-events-none absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-green/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-yellow/20 blur-3xl" />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrowClassName="text-green-dark"
            eyebrow="Made For Your Moments"
            title="Celebration Cakes"
            subtitle="Make every occasion extra special with our handcrafted celebration cakes. Beautifully designed and baked to perfection for life's sweetest moments."
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
