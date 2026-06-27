"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { heroSlides } from "@/lib/data";

const AUTOPLAY_MS = 5000;

export function Hero() {
  const [active, setActive] = useState(0);
  const count = heroSlides.length;

  const go = useCallback(
    (dir: number) => setActive((i) => (i + dir + count) % count),
    [count],
  );

  // Auto-advance. Re-runs whenever `active` changes, so the countdown also
  // restarts after manual navigation (arrows / dots).
  useEffect(() => {
    const t = setTimeout(() => setActive((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [active, count]);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-ink"
      aria-roledescription="carousel"
    >
      {/* ---- Sliding track ---- */}
      <div
        className="hero-track absolute inset-0 flex transition-transform duration-[900ms] ease-[cubic-bezier(0.7,0,0.2,1)]"
        style={{ transform: `translateX(-${active * 100}%)` }}
      >
        {heroSlides.map((slide, i) => {
          const isActive = i === active;
          return (
            <div
              key={slide.image}
              className="relative h-full w-full shrink-0 basis-full overflow-hidden"
              aria-hidden={!isActive}
            >
              <Image
                fill
                priority={i === 0}
                sizes="100vw"
                className={`object-cover ${isActive ? "animate-kenburns" : ""}`}
                alt={`${slide.title} ${slide.highlight}`}
                src={slide.image}
              />

              {/* Texture + readability layers (per slide so they travel with it) */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/92 via-brown-dark/55 to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/20" />
              <div className="texture-grain pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-overlay" />
              <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_180px_60px_rgba(42,27,18,0.55)]" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <Container className="relative z-10">
                  <div className="max-w-xl py-32 text-cream md:py-40">
                    <p className="font-script text-4xl text-green-light sm:text-5xl">
                      {slide.eyebrow}
                    </p>
                    <h1 className="mt-3 text-5xl font-bold leading-[1.02] sm:text-6xl md:text-7xl">
                      {slide.title}{" "}
                      <span className="text-yellow">{slide.highlight}</span>
                    </h1>
                    <p className="mt-5 max-w-md text-lg text-cream/85">
                      {slide.text}
                    </p>
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <Button href="#popular" size="lg">
                        Shop Now
                      </Button>
                      <Button variant="outline" size="lg" href="#cakes">
                        Order a Cake
                      </Button>
                    </div>
                  </div>
                </Container>
              </div>
            </div>
          );
        })}
      </div>

      {/* ---- Controls (fixed above the track) ---- */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 z-20 hidden -translate-y-1/2 justify-between px-4 sm:px-8 md:flex">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => go(-1)}
          className="pointer-events-auto grid h-12 w-12 place-items-center rounded-full bg-cream/15 text-cream backdrop-blur transition-all hover:bg-yellow hover:text-ink"
        >
          <Icon name="arrow-right" className="h-5 w-5 rotate-180" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => go(1)}
          className="pointer-events-auto grid h-12 w-12 place-items-center rounded-full bg-cream/15 text-cream backdrop-blur transition-all hover:bg-yellow hover:text-ink"
        >
          <Icon name="arrow-right" className="h-5 w-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.image}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === active}
            onClick={() => setActive(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === active ? "w-9 bg-yellow" : "w-2.5 bg-cream/50 hover:bg-cream/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
