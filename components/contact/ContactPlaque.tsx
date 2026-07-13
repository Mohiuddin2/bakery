import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import {
  mapDirectionsUrl,
  mapEmbedUrl,
  mapOpenUrl,
  type ContactChannel,
} from "@/lib/contact";
import { site } from "@/lib/data";

interface ContactPlaqueProps {
  channel: ContactChannel;
  className?: string;
  featured?: boolean;
}

export function ContactPlaque({
  channel,
  className,
  featured = false,
}: ContactPlaqueProps) {
  return (
    <article
      className={cn(
        "contact-plaque group relative overflow-hidden rounded-[1.5rem] bg-cream ring-1 ring-brown/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-warm",
        featured ? "p-8 sm:p-9" : "p-6 sm:p-7",
        className,
      )}
    >
      <span aria-hidden className="contact-plaque__nail left-4 top-4" />
      <span aria-hidden className="contact-plaque__nail right-4 top-4" />
      <span aria-hidden className="contact-plaque__nail bottom-4 left-4" />
      <span aria-hidden className="contact-plaque__nail bottom-4 right-4" />

      <div className="relative flex items-start gap-4">
        <div
          className={cn(
            "grid shrink-0 place-items-center rounded-2xl bg-yellow/20 text-brown transition-colors duration-300 group-hover:bg-yellow/35",
            featured ? "h-14 w-14" : "h-12 w-12",
          )}
        >
          <Icon
            name={channel.icon}
            className={cn(featured ? "h-7 w-7" : "h-6 w-6")}
          />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-brown/70">
            {channel.label}
          </p>

          <div className="mt-2 space-y-1">
            {channel.lines.map((line) =>
              line.href ? (
                <a
                  key={line.text}
                  href={line.href}
                  className={cn(
                    "block font-serif font-bold text-ink transition-colors hover:text-yellow-dark",
                    featured ? "text-xl sm:text-2xl" : "text-lg",
                  )}
                >
                  {line.text}
                </a>
              ) : (
                <p
                  key={line.text}
                  className={cn(
                    "font-serif font-bold leading-snug text-ink",
                    featured ? "text-xl sm:text-2xl" : "text-lg",
                  )}
                >
                  {line.text}
                </p>
              ),
            )}
          </div>

          {channel.note && (
            <p className="mt-3 text-xs leading-relaxed text-muted">
              {channel.note}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

interface ContactMapProps {
  className?: string;
}

export function ContactMap({ className }: ContactMapProps) {
  return (
    <div
      className={cn(
        "contact-map flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-cream shadow-card ring-1 ring-brown/10",
        className,
      )}
    >
      {/* Map */}
      <div className="relative min-h-[14rem] flex-1 sm:min-h-[16rem]">
        <iframe
          title="K Bakery location on Google Maps"
          src={mapEmbedUrl}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Branded badge — replaces Google's info card (hides rating) */}
        <div className="absolute left-3 top-3 z-10 max-w-[13.5rem] overflow-hidden rounded-xl bg-cream/95 p-3 shadow-card ring-1 ring-brown/10 backdrop-blur-sm sm:left-4 sm:top-4 sm:max-w-[15rem] sm:p-3.5">
          <div className="flex items-center gap-2.5">
            <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg bg-brown-dark">
              <Image
                src="/logo.png"
                alt=""
                width={180}
                height={60}
                className="h-full w-full object-contain p-0.5"
              />
            </div>
            <div className="min-w-0">
              <p className="truncate font-serif text-sm font-bold leading-tight text-ink">
                K Bakery
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-green-dark">
                South Khulshi
              </p>
            </div>
          </div>
          <p className="mt-2 text-[11px] leading-snug text-muted">
            4 Zakir Hossain Road, Khulshi Mart
          </p>
          <Link
            href={mapOpenUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-brown transition-colors hover:text-yellow-dark"
          >
            View on Google Maps
            <Icon name="arrow-right" className="h-3 w-3" />
          </Link>
        </div>
      </div>

      {/* Panel below map — fills the left column */}
      <div className="border-t border-brown/10 bg-sand/50 p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-yellow/25 text-brown">
            <Icon name="store" className="h-5 w-5" />
          </div>
          <div>
            <p className="font-serif text-sm font-bold text-ink">
              Khulshi Mart flagship
            </p>
            <p className="mt-1 text-xs leading-relaxed text-muted">
              Corporate office &amp; main outlet — near Port City International
              University on Zakir Hossain Road.
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <DirectionsLink className="flex-1 justify-center sm:justify-center" />
          <a
            href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-brown/15 bg-cream px-4 py-2.5 text-sm font-bold text-ink transition-all hover:border-yellow-dark hover:bg-yellow/10"
          >
            <Icon name="phone" className="h-4 w-4 text-brown" />
            Call outlet
          </a>
        </div>
      </div>
    </div>
  );
}

interface DirectionsLinkProps {
  className?: string;
}

export function DirectionsLink({ className }: DirectionsLinkProps) {
  return (
    <Link
      href={mapDirectionsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-cream transition-all duration-300 hover:bg-yellow hover:text-ink",
        className,
      )}
    >
      Get directions
      <Icon name="arrow-right" className="h-4 w-4" />
    </Link>
  );
}
