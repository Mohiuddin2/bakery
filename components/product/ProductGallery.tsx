"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: string[];
  name: string;
}

export function ProductGallery({ images, name }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const slides = images.length > 0 ? images : ["/logo.png"];

  return (
    <div className="space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-3xl bg-sand shadow-card ring-1 ring-sand/80">
        <Image
          key={slides[active]}
          src={slides[active]}
          alt={name}
          fill
          priority
          sizes="(min-width:1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      {slides.length > 1 && (
        <div className="flex gap-3">
          {slides.map((src, i) => (
            <button
              key={`${src}-${i}`}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              className={cn(
                "relative h-20 w-20 overflow-hidden rounded-2xl ring-2 transition-all",
                active === i
                  ? "ring-yellow shadow-warm"
                  : "ring-transparent opacity-70 hover:opacity-100",
              )}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
