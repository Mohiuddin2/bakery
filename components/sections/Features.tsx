import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { features } from "@/lib/data";

export function Features() {
  return (
    <section className="relative z-20 -mt-24 pb-20 md:pb-28">
      <Container>
        <div className="rounded-2xl bg-cream shadow-card">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y divide-sand sm:divide-y-0 sm:[&>*:nth-child(odd)]:border-r lg:[&>*]:border-r lg:[&>*:last-child]:border-r-0 sm:border-sand">
            {features.map((f, i) => (
              <Reveal
                key={f.title}
                delay={i * 80}
                className="group flex flex-col items-center gap-3 p-8 text-center"
              >
                <div className="grid h-16 w-16 place-items-center rounded-full bg-sand text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-ink">
                  <Icon name={f.icon} className="h-7 w-7" />
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
