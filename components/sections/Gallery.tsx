import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { gallery } from "@/lib/data";

export function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-20 md:py-28 scroll-mt-24">
      <Container>
        <SectionHeading
          eyebrow="Gallery"
          title="Moments at Saffron"
          subtitle="A glimpse into our world — sun-warmed plates, candlelit tables, and the quiet artistry behind every dish."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {gallery.map((src, i) => (
            <Reveal
              key={src}
              delay={i * 60}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="relative block aspect-square">
                <Image
                  src={src}
                  alt={"Saffron gallery image " + (i + 1)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(min-width:768px) 25vw, 50vw"
                />
                <div className="absolute inset-0 grid place-items-center bg-ink/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-gold text-gold">
                    <Icon name="plus" className="h-6 w-6" />
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
