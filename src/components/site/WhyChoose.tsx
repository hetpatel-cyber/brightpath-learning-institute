import { BarChart3, BookOpen, ClipboardCheck, Lightbulb, MessagesSquare, Users } from "lucide-react";
import { institute, strengths } from "@/content/institute";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const iconMap = {
  lightbulb: Lightbulb,
  users: Users,
  message: MessagesSquare,
  book: BookOpen,
  clipboard: ClipboardCheck,
  chart: BarChart3,
} as const;

export function WhyChoose() {
  return (
    <section id="why-us" aria-labelledby="why-title" className="section-y relative overflow-hidden bg-navy-deep">
      <div aria-hidden="true" className="absolute inset-0 texture-grid" />
      <div className="container-site relative grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              id="why-title"
              tone="dark"
              eyebrow="Why choose us"
              title={<>Why Students Choose {institute.name}</>}
              intro="What families can expect from us, day after day — in the classroom and beyond it."
            />
            <Reveal className="mt-8" delay={120}>
              <a
                href="#enquiry"
                className="inline-flex items-center gap-2 border-b border-gold pb-1 font-display text-sm font-bold text-gold transition-colors hover:text-on-navy"
              >
                Talk to our team →
              </a>
            </Reveal>
          </div>
        </div>

        <ul className="grid gap-px overflow-hidden rounded-sm bg-on-navy/10 sm:grid-cols-2 lg:col-span-8">
          {strengths.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <Reveal as="li" key={s.title} delay={(i % 2) * 80} className="bg-navy-deep p-7 sm:p-9">
                <span className="inline-flex size-11 items-center justify-center rounded-sm border border-gold/40 text-gold">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-bold text-on-navy">{s.title}</h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-on-navy-muted">{s.text}</p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
