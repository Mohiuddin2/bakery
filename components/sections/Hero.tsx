"use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HERO_VIDEO_SRC, heroContent } from "@/lib/data";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPlayback = () => {
      if (mq.matches) {
        video.pause();
      } else {
        void video.play().catch(() => {});
      }
    };

    syncPlayback();
    mq.addEventListener("change", syncPlayback);
    return () => mq.removeEventListener("change", syncPlayback);
  }, []);

  return (
    <section
      id="home"
      className="relative mt-[var(--site-header-h,5.5rem)] min-h-[calc(100svh-var(--site-header-h,5.5rem))] overflow-hidden bg-ink"
    >
      <div className="absolute inset-0" aria-hidden>
        <video
          ref={videoRef}
          className="hero-video h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={HERO_VIDEO_SRC} type="video/webm" />
        </video>
      </div>

      <div className="absolute inset-0 z-10 flex items-center">
        <Container className="relative">
          <div className="max-w-xl animate-fade-up py-32 text-cream md:py-40">
            <p className="hero-eyebrow font-script text-4xl text-green-light sm:text-5xl">
              {heroContent.eyebrow}
            </p>
            <h1 className="hero-title mt-3 text-5xl font-bold leading-[1.02] sm:text-6xl md:text-7xl">
              {heroContent.title}{" "}
              <span className="hero-title-accent text-yellow">
                {heroContent.highlight}
              </span>
            </h1>
            <p className="hero-lead mt-5 max-w-md text-lg text-cream">
              {heroContent.text}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="#popular" size="lg">
                Shop Now
              </Button>
              <Button variant="outline" size="lg" href="#cakes">
                Order a Cake
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
