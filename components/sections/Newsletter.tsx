"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

export function Newsletter() {
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <section className="bg-gold py-14 md:py-16 text-ink">
      <Container>
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
          <div>
            <h3 className="text-3xl md:text-4xl font-semibold">Join Our Table</h3>
            <p className="mt-2 max-w-md text-ink/80">
              Subscribe for seasonal menus, private events, and a welcome treat on your next visit.
            </p>
          </div>
          {subscribed ? (
            <div className="inline-flex items-center gap-2 font-medium">
              <Icon name="check" className="h-5 w-5" />
              You&apos;re on the list — see you soon!
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex w-full max-w-md items-center gap-3">
              <input
                type="email"
                required
                placeholder="Your email address"
                className="w-full rounded-full bg-cream px-5 py-3 text-sm text-ink placeholder:text-ink/50 focus:outline-none focus:ring-2 focus:ring-ink/20"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-charcoal"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
