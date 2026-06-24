import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { blogPosts } from "@/lib/data";

export function Blog() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="From the Journal"
          title="Latest Stories"
          subtitle="Recipes, rituals, and reflections from our kitchen — a taste of the culture and craft behind every plate at Saffron."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.title} delay={i * 100} as="article">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-sand bg-cream shadow-card transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width:768px) 33vw, 90vw"
                    alt={post.title}
                    src={post.image}
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-medium text-ink">
                    {post.category}
                  </span>
                </div>

                <div className="flex grow flex-col p-6">
                  <div className="flex items-center gap-4 text-xs text-muted">
                    <span className="inline-flex items-center gap-2">
                      <Icon name="calendar" className="h-4 w-4 text-gold" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Icon name="chef" className="h-4 w-4 text-gold" />
                      {post.author}
                    </span>
                  </div>

                  <h3 className="mt-3 text-xl text-ink transition-colors group-hover:text-gold">
                    {post.title}
                  </h3>

                  <p className="mt-2 grow text-sm text-muted">{post.excerpt}</p>

                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gold">
                    Read More
                    <Icon
                      name="arrow-right"
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
