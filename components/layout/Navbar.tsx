"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { navLinks, site } from "@/lib/data";

export function Navbar() {
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Keep hero / pages clear of the fixed header
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const syncHeight = () => {
      document.documentElement.style.setProperty(
        "--site-header-h",
        `${header.offsetHeight}px`,
      );
    };

    syncHeight();
    const ro = new ResizeObserver(syncHeight);
    ro.observe(header);
    window.addEventListener("resize", syncHeight);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", syncHeight);
    };
  }, [mobileOpen]);

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 transition-shadow duration-300 ${
        scrolled || mobileOpen ? "shadow-md" : "shadow-sm"
      }`}
    >
      {/* Top utility bar — brand green strip */}
      <div className="hidden bg-green text-cream md:block">
        <Container>
          <div className="flex items-center justify-between py-2 text-xs">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <Icon name="clock" className="h-3.5 w-3.5 text-yellow-light" />
                Open Daily · 8 AM – 10 PM
              </span>
              <a
                href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                className="flex items-center gap-2 transition hover:text-yellow-light"
              >
                <Icon name="phone" className="h-3.5 w-3.5 text-yellow-light" />
                {site.phone}
              </a>
            </div>
            <div className="flex items-center gap-5">
              <span className="text-cream/85">30+ outlets across Chattogram</span>
              <div className="flex items-center gap-3">
                {site.social.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/90 transition hover:text-yellow-light"
                  >
                    <Icon name={s.icon} className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Main nav — solid white, black menu */}
      <div className="border-b border-brown/10 bg-white">
        <Container>
          <div className="flex items-center justify-between py-3.5 sm:py-4">
            <a
              href="/"
              aria-label="K Bakery home"
              className="group flex items-center"
            >
              <Image
                src="/logo.png"
                alt="K Bakery"
                width={180}
                height={60}
                priority
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105 sm:h-11"
              />
            </a>

            <nav className="hidden items-center gap-7 xl:gap-8 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group relative text-[13px] font-semibold uppercase tracking-[0.04em] text-ink transition-colors hover:text-green"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-green transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3 sm:gap-4">
              <Button href="/#cakes" className="hidden sm:inline-flex">
                Order Now
              </Button>
              <button
                type="button"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                className="grid h-10 w-10 place-items-center rounded-full text-ink ring-1 ring-brown/15 transition hover:bg-sand lg:hidden"
              >
                <Icon
                  name={mobileOpen ? "close" : "menu"}
                  className="h-5 w-5"
                />
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Mobile drawer */}
      <div
        className={`absolute inset-x-0 top-full overflow-hidden border-b border-brown/10 bg-white transition-all duration-300 lg:hidden ${
          mobileOpen ? "max-h-[32rem] opacity-100 shadow-lg" : "max-h-0 opacity-0"
        }`}
      >
        <Container>
          <nav className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-semibold text-ink transition-colors hover:bg-sand hover:text-green"
              >
                {link.label}
              </a>
            ))}
            <Button
              href="/#cakes"
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
