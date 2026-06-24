"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { products, productCategoryNames } from "@/lib/data";

export function Menu() {
  const [active, setActive] = useState<string>(productCategoryNames[0]);
  const filtered = products.filter((p) => p.category === active);

  return (
    <section id="menu" className="bg-cream py-20 md:py-28 scroll-mt-24">
      <Container>
        <SectionHeading
          eyebrow="Made Fresh Daily"
          title="Our Products"
          subtitle="From buttery croissants to celebration cakes, every treat is baked from scratch each morning in our Chattogram kitchens."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {productCategoryNames.map((category) => {
            const isActive = category === active;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                aria-pressed={isActive}
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all ${
                  isActive
                    ? "bg-yellow text-ink shadow-warm"
                    : "border border-sand text-ink/70 hover:border-yellow hover:text-yellow-dark"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-12 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {filtered.map((p, i) => (
            <Reveal key={p.name} delay={i * 60}>
              <div className="group flex items-center gap-5">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl">
                  <Image
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="80px"
                    alt={p.name}
                    src={p.image}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline">
                    <span className="font-serif text-lg text-ink">
                      {p.name}
                      {p.tag ? (
                        <span className="ml-2 rounded-full border border-green/50 px-2 py-0.5 align-middle text-[10px] uppercase tracking-wider text-green-dark">
                          {p.tag}
                        </span>
                      ) : null}
                    </span>
                    <span className="mx-3 flex-1 border-b border-dashed border-sand" />
                    <span className="whitespace-nowrap font-serif text-lg font-bold text-brown">
                      {p.price}
                    </span>
                  </div>
                  <p className="text-sm leading-snug text-muted">{p.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-sm text-muted">
            Prices in BDT. Visit any outlet or place a custom order for events.
          </p>
          <div className="mt-6">
            <Button variant="secondary" href="#contact">
              Place an Order
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
