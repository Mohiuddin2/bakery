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
        alt="Saffron dining room ambiance"
        src={img("1552566626-52f8b828add9", 1600)}
      />
      <div className="absolute inset-0 bg-ink/80" />

      <Container className="relative z-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center text-cream">
            <SectionHeading
              invert
              eyebrow="Reserve Your Evening"
              title="Dine With Us Tonight"
              subtitle="Secure your table for an unforgettable Mediterranean evening — intimate ambiance, seasonal flavors, and warm hospitality await."
              className="mx-auto"
            />

            <div className="mt-8">
              <a
                href={telHref}
                className="inline-flex items-center justify-center gap-3 font-serif text-2xl text-gold transition-colors duration-300 hover:text-gold-light md:text-3xl"
              >
                <Icon name="phone" className="h-5 w-5" />
                {site.phone}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="#contact" size="lg">
                Book a Table
              </Button>
              <Button variant="outline" size="lg" href="#menu">
                View Menu
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
