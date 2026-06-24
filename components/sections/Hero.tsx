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
        alt="Freshly baked croissants and pastries at K Bakery"
        src={img("1509440159596-0249088772ff", 1920)}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-brown-dark/75 to-brown-dark/30" />

      <Container className="relative z-10">
        <div className="max-w-2xl pb-24 pt-32 text-cream md:pt-40">
          <Reveal>
            <p className="font-script text-4xl text-green-light">
              Welcome to K Bakery
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-2 text-5xl font-bold leading-[1.05] md:text-7xl">
              Freshly Baked Happiness, Every Single Day
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-6 max-w-xl text-lg text-cream/80">
              We&apos;re the largest food chain in Chattogram, spreading smiles
              one warm batch at a time. From cakes and pastries to cookies,
              sweets and savoury snacks, everything is baked fresh every single
              day with love.
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="#menu" size="lg">
                Explore Our Products
              </Button>
              <Button variant="outline" size="lg" href="#contact">
                Order Now
              </Button>
            </div>
          </Reveal>

          <Reveal delay={480}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1 text-yellow">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="star" className="h-4 w-4" />
                ))}
              </div>
              <span className="text-sm font-semibold text-cream/90">
                Loved by 1M+ customers across Chattogram
              </span>
            </div>
          </Reveal>
        </div>
      </Container>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-cream/70">
        <span className="text-xs font-semibold uppercase tracking-[0.2em]">
          Scroll
        </span>
        <Icon name="arrow-right" className="h-4 w-4 rotate-90 animate-bounce" />
      </div>
    </section>
  );
}
