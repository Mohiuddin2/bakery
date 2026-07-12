import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ui/ProductCard";
import { OfferCard } from "@/components/ui/OfferCard";
import { Reveal } from "@/components/ui/Reveal";
import { newArrivals, offers } from "@/lib/data";

export function NewArrivals() {
  return (
    <section id="offers" className="scroll-mt-24 bg-sand py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Limited Time"
            title="New Arrivals & Offers"
            subtitle="Fresh bakes meet sweet savings — discover this week's arrivals and exclusive deals before they're gone."
            eyebrowClassName="text-yellow-dark"
          />
        </Reveal>

        {/* Featured discount promos */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {offers.map((offer, i) => (
            <Reveal key={offer.title} as="div" delay={i * 100}>
              <OfferCard offer={offer} />
            </Reveal>
          ))}
        </div>

        {/* Discounted product picks */}
        <Reveal>
          <div className="mt-16 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-brown/20" />
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-brown">
              On Sale This Week
            </p>
            <span className="h-px w-12 bg-brown/20" />
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-5 sm:gap-7 lg:grid-cols-4">
          {newArrivals.map((p, i) => (
            <Reveal key={p.name} as="div" delay={(i % 4) * 80}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
