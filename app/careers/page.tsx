import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { CareerApplicationForm } from "@/components/careers/CareerApplicationForm";
import { careerPerks, careerRoles } from "@/lib/careers";
import { img, site } from "@/lib/data";

export const metadata: Metadata = {
  title: `Careers — ${site.name}`,
  description:
    "Join K Bakery's team in Chattogram. Apply for roles in baking, sales, and management — upload your CV and grow with Bangladesh's favourite bakery chain.",
  openGraph: {
    title: `Careers at ${site.name}`,
    description:
      "We're hiring passionate people across 30+ outlets. Submit your application today.",
  },
};

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-ink pt-28 md:pt-32">
          <Image
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-50"
            alt="Bakers at work in a warm kitchen"
            src={img("1556911223-bff31c812dba", 1600)}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-brown-dark/85 to-brown-dark/40" />
          <div className="texture-grain pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-overlay" />

          <Container className="relative pb-20 pt-10 md:pb-28 md:pt-14">
            <Reveal>
              <p className="font-script text-3xl text-yellow-light sm:text-4xl">
                Bake your future with us
              </p>
              <h1 className="mt-2 max-w-2xl font-serif text-4xl font-bold leading-tight text-cream sm:text-5xl md:text-[3.25rem]">
                Careers at K Bakery
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/75">
                From early-morning dough to celebration cakes — our team of 500+
                people across Chattogram makes every day sweeter. If you love
                food, craft, and community, there&apos;s a place for you here.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-10 flex flex-wrap gap-8 border-t border-cream/15 pt-8">
                {[
                  { value: "30+", label: "Outlets" },
                  { value: "500+", label: "Team members" },
                  { value: "35+", label: "Years baking" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-serif text-3xl font-bold text-yellow">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-cream/60">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Roles + form */}
        <section className="texture-dots bg-sand py-20 md:py-28">
          <Container>
            <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16 xl:gap-20">
              {/* Left — culture & openings */}
              <div>
                <Reveal>
                  <p className="font-script text-3xl text-green">Open roles</p>
                  <h2 className="mt-1 font-serif text-3xl font-bold text-ink">
                    Where you could fit in
                  </h2>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
                    We hire year-round for kitchen, counter, and management
                    roles. Pick a position in the form and tell us what you bring
                    to the table.
                  </p>
                </Reveal>

                <ul className="mt-8 space-y-3">
                  {careerRoles.map((role, i) => (
                    <Reveal key={role.title} as="li" delay={i * 60}>
                      <div className="flex items-center justify-between gap-4 rounded-2xl bg-cream/70 px-5 py-4 ring-1 ring-brown/10 transition-all duration-300 hover:bg-cream hover:shadow-card">
                        <div>
                          <p className="font-serif font-bold text-ink">
                            {role.title}
                          </p>
                          <p className="mt-0.5 text-xs text-muted">
                            {role.type} · {role.outlet}
                          </p>
                        </div>
                        <Icon
                          name="arrow-right"
                          className="h-4 w-4 shrink-0 text-yellow-dark"
                        />
                      </div>
                    </Reveal>
                  ))}
                </ul>

                <Reveal delay={200}>
                  <div className="mt-12">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-brown">
                      Why people stay
                    </p>
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      {careerPerks.map((perk) => (
                        <div
                          key={perk.title}
                          className="rounded-2xl bg-cream/60 p-4 ring-1 ring-brown/8"
                        >
                          <div className="grid h-9 w-9 place-items-center rounded-full bg-yellow/20 text-brown">
                            <Icon name={perk.icon} className="h-4 w-4" />
                          </div>
                          <p className="mt-3 text-sm font-bold text-ink">
                            {perk.title}
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-muted">
                            {perk.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Right — application form */}
              <Reveal delay={100}>
                <CareerApplicationForm />
              </Reveal>
            </div>
          </Container>
        </section>

        {/* Contact strip */}
        <section className="border-t border-brown/10 bg-cream py-12">
          <Container>
            <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
              <div>
                <p className="font-script text-2xl text-green">Questions?</p>
                <p className="mt-1 text-sm text-muted">
                  Reach our HR team directly — we&apos;re happy to help.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-6">
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-yellow-dark"
                >
                  <Icon name="mail" className="h-4 w-4 text-yellow-dark" />
                  {site.email}
                </a>
                <a
                  href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-yellow-dark"
                >
                  <Icon name="phone" className="h-4 w-4 text-yellow-dark" />
                  {site.phone}
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
