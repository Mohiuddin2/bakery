import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { features } from "@/lib/data";

export function Features() {
  return (
    <section className="relative z-20 -mt-24 pb-20 md:pb-28">
      <Container>
        <div className="rounded-3xl bg-cream shadow-card">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <Reveal
                key={f.title}
                delay={i * 80}
                className="group flex flex-col items-center gap-3 border-b border-sand p-8 text-center transition-all duration-300 sm:border-b-0 sm:[&:not(:nth-child(2n))]:border-r lg:border-b-0 lg:[&:not(:last-child)]:border-r"
              >
                <div className="grid h-16 w-16 place-items-center rounded-full bg-sand text-green transition-all duration-300 group-hover:bg-yellow group-hover:text-ink group-hover:scale-105">
                  <Icon name={f.icon} className="h-8 w-8" />
                </div>
                <h3 className="text-xl text-ink">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{f.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
