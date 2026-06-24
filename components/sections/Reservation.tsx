"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { site, productCategoryNames } from "@/lib/data";

const inputClass =
  "w-full rounded-xl bg-ink/40 border border-cream/15 px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-yellow focus:outline-none transition";

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
      className="bg-brown-dark py-20 md:py-28 scroll-mt-24 text-cream"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <Reveal>
            <div>
              <SectionHeading
                align="left"
                invert
                eyebrow="Drop By or Order Ahead"
                title="Visit Us & Place an Order"
                subtitle="Pop into your nearest K Bakery for something warm from the oven, or send us your order and we'll have it freshly baked and ready when you arrive."
              />

              <ul className="mt-8 space-y-5">
                <li className="flex items-start gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-ink text-yellow shrink-0">
                    <Icon name="phone" className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="text-xs uppercase tracking-wide text-cream/60">
                      Call Us
                    </span>
                    <a
                      href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                      className="block text-cream hover:text-yellow transition"
                    >
                      {site.phone}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-ink text-yellow shrink-0">
                    <Icon name="mail" className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="text-xs uppercase tracking-wide text-cream/60">
                      Email
                    </span>
                    <a
                      href={`mailto:${site.email}`}
                      className="block text-cream hover:text-yellow transition"
                    >
                      {site.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-ink text-yellow shrink-0">
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
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-ink text-yellow shrink-0">
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
              className="rounded-3xl bg-ink/60 border border-cream/10 p-6 md:p-8 shadow-card"
            >
              {submitted ? (
                <div className="flex flex-col items-center text-center py-10">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-yellow/15 text-yellow ring-1 ring-yellow/40">
                    <Icon name="check" className="h-8 w-8" />
                  </span>
                  <h3 className="mt-6 font-serif text-2xl text-cream">
                    Thank you!
                  </h3>
                  <p className="mt-3 max-w-sm text-sm text-cream/70">
                    Your order request has been received — our team will call you
                    shortly to confirm.
                  </p>
                  <div className="mt-8">
                    <Button
                      variant="outline"
                      type="button"
                      onClick={() => setSubmitted(false)}
                    >
                      Place Another Order
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
                      placeholder="01XXX-XXXXXX"
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
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="res-category" className={labelClass}>
                      Product Category
                    </label>
                    <select
                      id="res-category"
                      name="category"
                      required
                      defaultValue=""
                      className={inputClass}
                    >
                      <option value="" disabled>
                        Choose a category
                      </option>
                      {productCategoryNames.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="res-date" className={labelClass}>
                      Pickup Date
                    </label>
                    <input
                      id="res-date"
                      name="date"
                      type="date"
                      required
                      className={inputClass}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="res-details" className={labelClass}>
                      Quantity / Details
                    </label>
                    <textarea
                      id="res-details"
                      name="details"
                      rows={3}
                      placeholder="e.g. 1 chocolate cake (2 lb), 12 patties..."
                      className={inputClass}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:col-span-2"
                  >
                    Request Order
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
