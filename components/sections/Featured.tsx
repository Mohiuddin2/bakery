import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { featuredDishes } from "@/lib/data";

export function Featured() {
  return (
    <section className="bg-sand py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Chef's Selection"
          title="Our Signature Dishes"
          subtitle="A handpicked trio of our most beloved plates — crafted with seasonal ingredients and a touch of Mediterranean soul."
        />
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {featuredDishes.map((d, i) => (
            <Reveal key={d.name} delay={i * 100}>
              <article className="group overflow-hidden rounded-2xl bg-cream shadow-card transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={d.image}
                    alt={d.name}
                    fill
                    sizes="(min-width:768px) 33vw, 90vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 text-sm font-semibold text-ink">
                    {d.price}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-ink transition-colors group-hover:text-gold">
                    {d.name}
                  </h3>
                  <div className="mt-3 flex items-center gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Icon key={s} name="star" className="h-4 w-4" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-muted">{d.description}</p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-dark"
                  >
                    Order Now
                    <Icon
                      name="arrow-right"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
