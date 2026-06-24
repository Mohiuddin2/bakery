import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { navLinks, site } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-brown-dark pt-16 pb-8 text-cream/80">
      <Container>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-2 transition-opacity hover:opacity-90"
            >
              <Icon name="bread" className="h-7 w-7 text-yellow" />
              <span className="font-serif text-2xl font-bold text-cream">
                K Bakery
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-cream/70">
              The largest food chain in Chattogram, baked fresh every single
              day. From golden bread to celebration cakes — crafted by hand and
              served with a smile.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {site.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-cream/15 text-cream/80 transition-colors hover:bg-yellow hover:text-ink"
                >
                  <Icon name={s.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg text-cream">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 transition-colors hover:text-yellow"
                  >
                    <Icon
                      name="arrow-right"
                      className="h-3.5 w-3.5 text-yellow transition-transform group-hover:translate-x-1"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="font-serif text-lg text-cream">Get in Touch</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex gap-3">
                <Icon name="phone" className="mt-1 h-4 w-4 shrink-0 text-yellow" />
                <a
                  href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                  className="text-sm transition-colors hover:text-yellow"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Icon name="mail" className="mt-1 h-4 w-4 shrink-0 text-yellow" />
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm transition-colors hover:text-yellow"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Icon name="pin" className="mt-1 h-4 w-4 shrink-0 text-yellow" />
                <span className="text-sm">{site.address}</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-serif text-lg text-cream">Opening Hours</h3>
            <ul className="mt-4">
              {site.hours.map((h) => (
                <li
                  key={h.day}
                  className="flex justify-between border-b border-cream/10 py-1.5 text-sm"
                >
                  <span className="text-cream">{h.day}</span>
                  <span className="text-cream/70">{h.time}</span>
                </li>
              ))}
            </ul>
            <Button href="#menu" size="md" className="mt-6 w-full">
              Order Now
            </Button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-3 border-t border-cream/10 pt-6 text-xs text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 K Bakery. All rights reserved.</p>
          <ul className="flex items-center gap-6">
            <li>
              <a href="#" className="transition-colors hover:text-yellow">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-yellow">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
