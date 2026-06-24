"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const [index, setIndex] = useState<number>(0);
  const count = testimonials.length;

  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, 5000);
    return () => clearInterval(id);
  }, [count]);

  return (
    <section className="bg-sand py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Kind Words"
          title="What Our Guests Say"
          subtitle="The warmth of our hospitality lingers long after the last bite — here is what those who have dined with us remember most."
        />

        <div className="mt-14 max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.name} className="w-full shrink-0 px-2">
                  <div className="rounded-2xl bg-cream p-8 md:p-10 text-center shadow-card">
                    <Icon name="quote" className="mx-auto h-10 w-10 text-gold" />
                    <p className="mt-6 font-serif text-xl md:text-2xl italic leading-relaxed text-ink">
                      {t.quote}
                    </p>
                    <div className="mt-6 flex items-center justify-center gap-1">
                      {Array.from({ length: t.rating }).map((_, s) => (
                        <Icon key={s} name="star" className="h-4 w-4 text-gold" />
                      ))}
                    </div>
                    <div className="mt-6 flex flex-col items-center gap-2">
                      <div className="relative h-14 w-14 rounded-full overflow-hidden">
                        <Image
                          fill
                          className="object-cover"
                          sizes="56px"
                          alt={t.name}
                          src={t.avatar}
                        />
                      </div>
                      <div>
                        <p className="font-serif text-ink">{t.name}</p>
                        <p className="text-sm text-muted">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="border border-gold text-gold rounded-full p-3 hover:bg-gold hover:text-ink transition"
            >
              <Icon name="arrow-right" className="h-5 w-5 rotate-180" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-gold" : "w-2 bg-muted/40"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="border border-gold text-gold rounded-full p-3 hover:bg-gold hover:text-ink transition"
            >
              <Icon name="arrow-right" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
