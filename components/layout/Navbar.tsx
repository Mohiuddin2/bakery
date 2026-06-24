"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { navLinks, site } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-brown-dark/95 backdrop-blur shadow-lg" : "bg-transparent"
      }`}
    >
      <Container>
        {!scrolled && (
          <div className="hidden items-center justify-between border-b border-cream/15 py-2.5 text-xs text-cream/80 md:flex">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <Icon name="clock" className="h-4 w-4 text-yellow" />
                Open Daily · 8 AM – 10 PM
              </span>
              <a
                href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                className="flex items-center gap-2 transition hover:text-yellow"
              >
                <Icon name="phone" className="h-4 w-4 text-yellow" />
                {site.phone}
              </a>
            </div>
            <div className="flex items-center gap-5">
              <span className="text-cream/70">30+ outlets across Chattogram</span>
              <div className="flex items-center gap-3">
                {site.social.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/80"
                  >
                    <Icon name={s.icon} className="h-4 w-4 transition hover:text-yellow" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between py-4">
          <a
            href="#home"
            className="group flex items-center gap-2.5 font-serif text-2xl font-bold tracking-wide text-cream"
          >
            <Icon name="bread" className="h-7 w-7 text-yellow transition-transform duration-300 group-hover:scale-110" />
            <span>
              K Bakery<span className="text-yellow">.</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-sm text-cream/90 transition-colors hover:text-yellow"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-yellow transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button href="#contact" className="hidden sm:inline-flex">
              Order Now
            </Button>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="lg:hidden"
            >
              <Icon name={mobileOpen ? "close" : "menu"} className="h-6 w-6 text-cream" />
            </button>
          </div>
        </div>
      </Container>

      <div
        className={`absolute inset-x-0 top-full overflow-hidden bg-brown-dark shadow-lg transition-all duration-300 lg:hidden ${
          mobileOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Container>
          <nav className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-3 py-3 text-base text-cream/90 transition-colors hover:bg-cream/10 hover:text-yellow"
              >
                {link.label}
              </a>
            ))}
            <Button
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-3 w-full justify-center"
            >
              Order Now
            </Button>
          </nav>
        </Container>
      </div>
    </header>
  );
}
