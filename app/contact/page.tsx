import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import {
  ContactMap,
  ContactPlaque,
  DirectionsLink,
} from "@/components/contact/ContactPlaque";
import { contactChannels } from "@/lib/contact";
import { img, site } from "@/lib/data";

export const metadata: Metadata = {
  title: `Contact — ${site.name}`,
  description:
    "Visit K Bakery at South Khulshi, Chattogram. Call 031-614246, email info@kbakery.com.bd, or reach support@kbakery.com.bd for help.",
  openGraph: {
    title: `Contact ${site.name}`,
    description:
      "Head office, phone, and email — everything you need to reach K Bakery.",
  },
};

const [locationChannel, phoneChannel, emailChannel] = contactChannels;

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-sand pt-28 md:pt-32">
          <div className="texture-dots pointer-events-none absolute inset-0 opacity-60" />
          <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-yellow/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-green/10 blur-3xl" />

          <Container className="relative pb-16 pt-8 md:pb-20 md:pt-12">
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
              <Reveal>
                <p className="font-script text-3xl text-green sm:text-4xl">
                  We&apos;d love to hear from you
                </p>
                <h1 className="mt-2 font-serif text-4xl font-bold leading-tight text-ink sm:text-5xl">
                  Contact K Bakery
                </h1>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
                  Whether it&apos;s a custom cake order, a question about our
                  outlets, or feedback from your last visit — our team in South
                  Khulshi is ready to help.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <DirectionsLink />
                  <a
                    href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                    className="inline-flex items-center gap-2 rounded-full border-2 border-brown/20 bg-cream/70 px-5 py-2.5 text-sm font-bold text-ink transition-all duration-300 hover:border-yellow-dark hover:bg-yellow/15"
                  >
                    <Icon name="phone" className="h-4 w-4 text-brown" />
                    Call now
                  </a>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-card ring-1 ring-brown/10">
                    <Image
                      fill
                      priority
                      sizes="(min-width:1024px) 40vw, 90vw"
                      className="object-cover"
                      alt="Warm bakery interior with fresh bread"
                      src={img("1608198093002-ad4e005484ec", 900)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
                  </div>
                  <div className="absolute -bottom-5 -left-3 rounded-2xl bg-yellow px-5 py-4 text-ink shadow-warm sm:-left-5">
                    <p className="font-serif text-2xl font-bold">30+</p>
                    <p className="text-xs font-bold uppercase tracking-[0.16em]">
                      Outlets in Chattogram
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* Map + contact info side by side */}
        <section className="bg-cream py-14 md:py-20">
          <Container>
            <Reveal>
              <p className="text-center font-script text-3xl text-green sm:text-4xl">
                Corporate office
              </p>
            </Reveal>

            <div className="mt-8 grid items-stretch gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-10">
              <Reveal className="flex flex-col">
                <ContactMap className="flex-1" />
              </Reveal>

              <div className="flex flex-col gap-4">
                <Reveal delay={60}>
                  <ContactPlaque channel={locationChannel} />
                </Reveal>
                <Reveal delay={100}>
                  <ContactPlaque channel={phoneChannel} />
                </Reveal>
                <Reveal delay={140}>
                  <ContactPlaque channel={emailChannel} />
                </Reveal>

                <Reveal delay={180}>
                  <div className="rounded-[1.5rem] bg-sand/80 p-5 ring-1 ring-brown/10 sm:p-6">
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-full bg-green/15 text-green-dark">
                        <Icon name="clock" className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-brown/70">
                          Opening hours
                        </p>
                        <p className="font-serif text-base font-bold text-ink">
                          When we&apos;re open
                        </p>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2.5">
                      {site.hours.map((slot) => (
                        <li
                          key={slot.day}
                          className="flex items-center justify-between border-b border-brown/10 pb-2.5 text-sm last:border-0 last:pb-0"
                        >
                          <span className="font-semibold text-ink">
                            {slot.day}
                          </span>
                          <span className="text-muted">{slot.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>

                <Reveal delay={220}>
                  <div className="rounded-[1.5rem] bg-brown-dark p-5 text-cream sm:p-6">
                    <p className="font-script text-xl text-yellow-light">
                      Follow along
                    </p>
                    <p className="mt-1.5 text-sm text-cream/75">
                      Daily bakes, outlet news, and behind-the-scenes.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2.5">
                      {site.social.map((s) => (
                        <a
                          key={s.label}
                          href={s.href}
                          aria-label={s.label}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="grid h-9 w-9 place-items-center rounded-full border border-cream/20 text-cream/85 transition-all duration-300 hover:border-yellow hover:bg-yellow hover:text-ink"
                        >
                          <Icon name={s.icon} className="h-4 w-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
