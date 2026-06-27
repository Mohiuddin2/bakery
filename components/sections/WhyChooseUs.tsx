import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { whyChooseUs, whyStats, img } from "@/lib/data";

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-cream md:py-28">
      <div className="texture-dots pointer-events-none absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-yellow/10 blur-3xl" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Imagery */}
          <Reveal>
            <div className="relative">
              <div className="relative aspect-[5/6] overflow-hidden rounded-[2rem] shadow-card sm:aspect-[4/3] lg:aspect-[5/6]">
                <Image
                  fill
                  sizes="(min-width:1024px) 50vw, 90vw"
                  className="object-cover"
                  alt="Freshly baked goods at K Bakery"
                  src={img("1509440159596-0249088772ff", 1000)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-yellow px-5 py-4 text-ink shadow-warm sm:left-8">
                <Icon name="award" className="h-9 w-9" />
                <div className="leading-tight">
                  <p className="font-serif text-2xl font-bold">35+ Years</p>
                  <p className="text-xs font-semibold">of trusted baking</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Copy + features */}
          <div>
            <Reveal>
              <SectionHeading
                invert
                align="left"
                eyebrow="The K Bakery Promise"
                title="Why Choose Us?"
                subtitle="At K Bakery, quality, freshness, and passion go into every bake. We are committed to delivering delightful experiences with every bite."
              />
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
              {whyChooseUs.map((f, i) => (
                <Reveal key={f.title} delay={i * 80}>
                  <div className="flex gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-cream/10 text-yellow ring-1 ring-cream/10">
                      <Icon name={f.icon} className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-serif text-lg text-cream">{f.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-cream/70">
                        {f.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Stats */}
            <Reveal>
              <div className="mt-10 grid grid-cols-2 gap-4 border-t border-cream/10 pt-8 sm:grid-cols-4">
                {whyStats.map((s) => (
                  <div key={s.label}>
                    <p className="font-serif text-3xl font-bold text-yellow">
                      {s.value}
                    </p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-cream/60">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
