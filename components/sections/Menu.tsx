"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { menuCategories, menuItems } from "@/lib/data";

export function Menu() {
  const [active, setActive] = useState<string>(menuCategories[0]);

  const filtered = menuItems.filter((item) => item.category === active);

  return (
    <section id="menu" className="bg-cream py-20 md:py-28 scroll-mt-24">
      <Container>
        <SectionHeading
          eyebrow="Our Menu"
          title="Crafted for Every Craving"
          subtitle="From sun-kissed starters to slow-cooked mains and indulgent sweets, every plate is composed with seasonal produce and a touch of fire."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {menuCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
                active === category
                  ? "bg-gold text-ink shadow-gold"
                  : "border border-sand text-ink/70 hover:border-gold hover:text-gold"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {filtered.map((item, i) => (
            <Reveal key={item.name} delay={i * 60}>
              <div className="group flex items-center gap-5">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                  <Image
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="80px"
                    alt={item.name}
                    src={item.image}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline">
                    <span className="font-serif text-lg text-ink">
                      {item.name}
                      {item.tag ? (
                        <span className="ml-2 rounded-full border border-gold/40 px-2 py-0.5 align-middle text-[10px] uppercase tracking-wider text-gold">
                          {item.tag}
                        </span>
                      ) : null}
                    </span>
                    <span className="mx-3 flex-1 border-b border-dashed border-sand" />
                    <span className="whitespace-nowrap font-serif text-lg font-semibold text-gold">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-sm leading-snug text-muted">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-sm text-muted">
            Prices in USD. Please inform your server of any allergies.
          </p>
          <div className="mt-6">
            <Button variant="outline" href="#contact">
              Reserve a Table
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
