import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { bakers } from "@/lib/data";

const socialIcons = ["instagram", "facebook", "x"] as const;

export function Chefs() {
  return (
    <section id="chefs" className="bg-ink py-20 md:py-28 scroll-mt-24 text-cream">
      <Container>
        <SectionHeading
          invert
          eyebrow="The People Behind the Bake"
          title="Meet Our Bakers"
          subtitle="Up before dawn and dusted in flour, our bakers fold heart and craft into every loaf, layer and crumb that leaves our ovens."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {bakers.map((b, i) => (
            <Reveal key={b.name} delay={i * 80}>
              <div className="group relative overflow-hidden rounded-3xl">
                <div className="relative aspect-[3/4]">
                  <Image
                    fill
                    src={b.image}
                    alt={b.name}
                    sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 90vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />

                <div className="absolute bottom-0 p-5">
                  <h3 className="font-serif text-xl text-cream">{b.name}</h3>
                  <p className="text-sm text-yellow">{b.role}</p>

                  <div className="mt-3 flex translate-y-2 gap-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {socialIcons.map((name) => (
                      <a
                        key={name}
                        href="#"
                        aria-label={`${b.name} on ${name}`}
                        className="rounded-full border border-cream/30 p-1.5 text-cream transition-colors duration-300 hover:border-yellow hover:bg-yellow hover:text-ink"
                      >
                        <Icon name={name} className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
