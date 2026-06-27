import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { stories } from "@/lib/data";

export function BakingStories() {
  return (
    <section id="stories" className="scroll-mt-24 bg-cream py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="From Our Kitchen"
            title="Our Baking Stories"
            subtitle="Step into our kitchen and discover the stories behind our creations. From baking inspirations to special moments, every story is baked with love."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {stories.map((post, i) => (
            <Reveal key={post.title} delay={i * 100} as="article">
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-cream shadow-card ring-1 ring-sand/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-warm">
                {/* Big image */}
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width:768px) 33vw, 90vw"
                    alt={post.title}
                    src={post.image}
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-yellow px-3 py-1 text-xs font-bold text-ink">
                    {post.category}
                  </span>
                </div>

                <div className="flex grow flex-col p-6">
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                    <Icon name="calendar" className="h-4 w-4 text-green" />
                    {post.date}
                  </span>
                  <h3 className="mt-3 font-serif text-xl text-ink transition-colors group-hover:text-yellow-dark">
                    {post.title}
                  </h3>
                  <p className="mt-2 grow text-sm text-muted">{post.excerpt}</p>
                  <a
                    href="#stories"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-green"
                  >
                    Read More
                    <Icon
                      name="arrow-right"
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
