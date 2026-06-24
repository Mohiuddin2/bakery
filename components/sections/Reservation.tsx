"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/data";

const timeOptions = [
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
  "10:00 PM",
];

const guestOptions = [
  "1 person",
  "2 people",
  "3 people",
  "4 people",
  "5 people",
  "6 people",
  "7 people",
  "8+ people",
];

const inputClass =
  "w-full rounded-lg bg-ink/40 border border-cream/15 px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none transition";

const labelClass =
  "text-xs uppercase tracking-wide text-cream/60 mb-1.5 block";

export function Reservation() {
  const [submitted, setSubmitted] = useState<boolean>(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="bg-charcoal py-20 md:py-28 scroll-mt-24 text-cream"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <Reveal>
            <div>
              <SectionHeading
                align="left"
                invert
                eyebrow="Reservations"
                title="Book Your Table"
                subtitle="Reserve your evening with us and let our team prepare an unforgettable Mediterranean experience tailored to your occasion."
              />

              <ul className="mt-8 space-y-5">
                <li className="flex items-start gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-ink text-gold shrink-0">
                    <Icon name="phone" className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="text-xs uppercase tracking-wide text-cream/60">
                      Call Us
                    </span>
                    <a
                      href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                      className="block text-cream hover:text-gold transition"
                    >
                      {site.phone}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-ink text-gold shrink-0">
                    <Icon name="mail" className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="text-xs uppercase tracking-wide text-cream/60">
                      Email
                    </span>
                    <a
                      href={`mailto:${site.email}`}
                      className="block text-cream hover:text-gold transition"
                    >
                      {site.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-ink text-gold shrink-0">
                    <Icon name="pin" className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="text-xs uppercase tracking-wide text-cream/60">
                      Visit Us
                    </span>
                    <span className="block text-cream">{site.address}</span>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-ink text-gold shrink-0">
                    <Icon name="clock" className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="text-xs uppercase tracking-wide text-cream/60">
                      Opening Hours
                    </span>
                    <div className="space-y-0.5">
                      {site.hours.map((h) => (
                        <span key={h.day} className="block text-cream">
                          {h.day}: {h.time}
                        </span>
                      ))}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form
              onSubmit={onSubmit}
              className="rounded-2xl bg-ink/60 border border-cream/10 p-6 md:p-8 shadow-card"
            >
              {submitted ? (
                <div className="flex flex-col items-center text-center py-10">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-gold/15 text-gold ring-1 ring-gold/40">
                    <Icon name="check" className="h-8 w-8" />
                  </span>
                  <h3 className="mt-6 font-serif text-2xl text-cream">
                    Thank you!
                  </h3>
                  <p className="mt-3 max-w-sm text-sm text-cream/70">
                    Your table request has been received — we&apos;ll confirm by
                    phone shortly.
                  </p>
                  <div className="mt-8">
                    <Button
                      variant="outline"
                      type="button"
                      onClick={() => setSubmitted(false)}
                    >
                      Book Another Table
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="res-name" className={labelClass}>
                      Full Name
                    </label>
                    <input
                      id="res-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="res-phone" className={labelClass}>
                      Phone
                    </label>
                    <input
                      id="res-phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="(555) 000-0000"
                      className={inputClass}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="res-email" className={labelClass}>
                      Email
                    </label>
                    <input
                      id="res-email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="res-date" className={labelClass}>
                      Date
                    </label>
                    <input
                      id="res-date"
                      name="date"
                      type="date"
                      required
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="res-time" className={labelClass}>
                      Time
                    </label>
                    <select
                      id="res-time"
                      name="time"
                      required
                      defaultValue=""
                      className={inputClass}
                    >
                      <option value="" disabled>
                        Select a time
                      </option>
                      {timeOptions.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="res-guests" className={labelClass}>
                      Guests
                    </label>
                    <select
                      id="res-guests"
                      name="guests"
                      required
                      defaultValue=""
                      className={inputClass}
                    >
                      <option value="" disabled>
                        Number of guests
                      </option>
                      {guestOptions.map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:col-span-2"
                  >
                    Reserve Now
                  </Button>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
