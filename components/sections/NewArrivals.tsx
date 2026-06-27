import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ui/ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { newArrivals, offers } from "@/lib/data";

const toneRing: Record<string, string> = {
  brown: "from-brown-dark/95 via-brown-dark/70",
  green: "from-green-dark/95 via-green-dark/65",
  yellow: "from-yellow-dark/95 via-yellow-dark/65",
};

export function NewArrivals() {
  return (
    <section id="offers" className="scroll-mt-24 bg-sand py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Fresh & Exclusive"
            title="New Arrivals & Offers"
            subtitle="Stay updated with our latest creations and exclusive deals. Enjoy fresh flavors, seasonal specials, and sweet savings all in one place."
          />
        </Reveal>

        {/* Offer banners — image-led promos */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {offers.map((offer, i) => (
            <Reveal key={offer.title} as="div" delay={i * 100}>
              <div className="group relative h-56 overflow-hidden rounded-3xl shadow-card sm:h-64">
                <Image
                  fill
                  sizes="(min-width:768px) 50vw, 90vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={offer.title}
                  src={offer.image}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${toneRing[offer.tone]} to-transparent`}
                />
                <div className="absolute inset-0 flex flex-col justify-center gap-3 p-7 sm:p-9">
                  <span className="w-fit rounded-full bg-yellow px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-ink">
                    {offer.badge}
                  </span>
                  <h3 className="max-w-[16rem] font-serif text-2xl font-bold leading-tight text-cream sm:text-3xl">
                    {offer.title}
                  </h3>
                  <p className="max-w-[18rem] text-sm text-cream/85">
                    {offer.subtitle}
                  </p>
                  <Button href="#popular" size="md" className="mt-1 w-fit">
                    Grab the Deal
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* New arrivals */}
        <Reveal>
          <h3 className="mt-16 text-center font-script text-3xl text-green sm:text-4xl">
            Just Out of the Oven
          </h3>
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
