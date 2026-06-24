import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { productCategories } from "@/lib/data";

export function Featured() {
  return (
    <section className="bg-sand py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="What We Bake"
          title="Explore Our Range"
          subtitle="From pillowy cakes to crisp cookies and golden fast food — discover every category baked fresh daily across our family kitchens."
        />
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((c, i) => (
            <Reveal key={c.name} as="article" delay={i * 80}>
              <article className="group relative overflow-hidden rounded-3xl bg-cream shadow-card transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 90vw"
                    alt={c.name}
                    src={c.image}
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-green px-3 py-1 text-xs font-semibold text-cream">
                    {c.items}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-ink transition-colors group-hover:text-yellow-dark">
                    {c.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{c.description}</p>
                  <a
                    href="#menu"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-green"
                  >
                    View products
                    <Icon
                      name="arrow-right"
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
