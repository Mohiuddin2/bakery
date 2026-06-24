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
              <div className="relative block aspect-[4/5] overflow-hidden rounded-2xl shadow-card">
                <Image
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 40vw, 90vw"
                  alt="Plated Mediterranean dishes"
                  src={img("1414235077428-338989a2e8c0", 900)}
                />
              </div>

              <div className="absolute left-6 top-6 rounded-xl bg-gold px-5 py-3 text-ink shadow-gold">
                <div className="font-serif text-3xl leading-none">18+</div>
                <div className="mt-1 text-[0.625rem] uppercase tracking-wide">
                  Years of Craft
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 hidden h-56 w-44 overflow-hidden rounded-2xl shadow-card ring-8 ring-cream sm:block">
                <Image
                  fill
                  className="object-cover"
                  sizes="200px"
                  alt="Fresh herbs in our kitchen"
                  src={img("1466637574441-749b8f19452f", 500)}
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <SectionHeading
                align="left"
                eyebrow="Our Story"
                title="Where Tradition Meets the Modern Table"
                subtitle="Born from a love of sun-drenched coastlines and the slow rituals of the table, Saffron brings the soul of the Mediterranean to every plate."
              />

              <p className="leading-relaxed text-muted">
                We source heirloom produce, day-boat seafood, and small-batch
                olive oils, then let each ingredient speak for itself. Our
                kitchen honors recipes passed down through generations while
                embracing the artistry of the modern table — a place where
                hospitality is the finest seasoning of all.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {aboutStats.map((stat) => (
                  <Reveal key={stat.label}>
                    <div>
                      <div className="font-serif text-3xl text-gold">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-xs uppercase tracking-wide text-muted">
                        {stat.label}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Button href="#menu">Discover Our Menu</Button>
                <span className="font-script text-2xl text-gold">
                  — Marco Alvarez, Executive Chef
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
