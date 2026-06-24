import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { aboutStats, img } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="bg-cream py-20 md:py-28 scroll-mt-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-card">
                <Image
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 40vw, 90vw"
                  alt="Inside a K Bakery outlet"
                  src={img("1517433670267-08bbd4be890f", 900)}
                />
              </div>

              <div className="absolute -bottom-8 -right-8 hidden h-56 w-44 overflow-hidden rounded-2xl shadow-card ring-8 ring-cream sm:block">
                <Image
                  fill
                  className="object-cover"
                  sizes="200px"
                  alt="Our baker shaping fresh dough"
                  src={img("1556910103-1c02745aae4d", 500)}
                />
              </div>

              <div className="absolute left-6 top-6 rounded-2xl bg-yellow px-5 py-3 text-ink shadow-warm">
                <span className="block font-serif text-3xl font-bold leading-none">35+</span>
                <span className="mt-1 block text-[0.7rem] font-semibold uppercase tracking-wide">
                  Years of Baking
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <SectionHeading
                align="left"
                eyebrow="Our Story"
                title="Baked Fresh in Chattogram Since 1989"
                subtitle="What began as a small neighbourhood oven is now the warm, sweet heart of the city — and we still rise before the sun for every loaf."
              />

              <p className="leading-relaxed text-muted">
                K Bakery started as a humble family kitchen and grew into the
                largest food chain in Chattogram, one happy customer at a time.
                Across every outlet we keep the same promise we made on day one:
                everything baked fresh every single morning, made with real
                butter, honest ingredients, and a whole lot of love.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {aboutStats.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-serif text-3xl font-bold text-yellow-dark">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-wide text-muted">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Button href="#menu" size="lg">
                  Explore Our Range
                </Button>
                <span className="font-script text-2xl text-green">
                  — The K Bakery Family
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
