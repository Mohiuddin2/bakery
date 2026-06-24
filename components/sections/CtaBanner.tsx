import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { site, img } from "@/lib/data";

export function CtaBanner() {
  const telHref = `tel:${site.phone.replace(/[^+\d]/g, "")}`;

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <Image
        fill
        className="object-cover"
        sizes="100vw"
        alt="A celebration cake from K Bakery"
        src={img("1578985545062-69928b1d9587", 1600)}
      />
      <div className="absolute inset-0 bg-brown-dark/85" />

      <Container className="relative z-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center text-cream">
            <SectionHeading
              invert
              eyebrow="For Every Celebration"
              title="Custom Cakes, Made Just for You"
              subtitle="From birthdays to weddings, our bakers hand-craft show-stopping cakes to your taste — baked fresh, beautifully decorated, and made to make every moment unforgettable."
              className="mx-auto"
            />

            <div className="mt-8">
              <a
                href={telHref}
                className="group inline-flex items-center justify-center gap-3 font-serif text-2xl text-yellow transition-colors duration-300 hover:text-yellow-light md:text-3xl"
              >
                <Icon
                  name="phone"
                  className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-12"
                />
                {site.phone}
              </a>
            </div>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button href="#contact" size="lg">
                Order Your Cake
              </Button>
              <Button variant="outline" size="lg" href="#menu">
                See Our Range
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
