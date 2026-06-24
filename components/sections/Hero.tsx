import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { img } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <Image
        fill
        priority
        sizes="100vw"
        className="object-cover"
        alt="Saffron's candle-lit dining room"
        src={img("1517248135467-4c7edcad34c4", 1920)}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/30" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />

      <Container className="relative z-10">
        <div className="max-w-2xl pt-32 pb-24 text-cream md:pt-40">
          <Reveal>
            <p className="font-script text-3xl text-gold">Welcome to Saffron</p>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-3 text-5xl font-semibold leading-[1.05] md:text-7xl">
              A Taste of the Mediterranean Coast
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-6 max-w-xl text-lg text-cream/80">
              Seasonal, ingredient-led plates inspired by sun-drenched coastlines
              and centuries of tradition. Every dish is crafted from the day&apos;s
              finest market produce, served with warmth and quiet luxury.
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="#contact" size="lg">
                Book a Table
              </Button>
              <Button variant="outline" size="lg" href="#menu">
                Explore Menu
              </Button>
            </div>
          </Reveal>

          <Reveal delay={480}>
            <div className="mt-10 flex flex-wrap items-center gap-3 text-cream/80">
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="star" className="h-4 w-4" />
                ))}
              </div>
              <span className="text-sm">Rated 4.9 by 1,200+ guests</span>
            </div>
          </Reveal>
        </div>
      </Container>

      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/70 sm:flex">
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <Icon name="arrow-right" className="h-4 w-4 rotate-90 animate-bounce" />
      </div>
    </section>
  );
}
