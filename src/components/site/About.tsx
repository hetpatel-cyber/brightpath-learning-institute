import { images, institute } from "@/content/institute";
import { Reveal } from "./Reveal";

const pillars = [
  { k: "01", t: "Understand", d: "Concepts are explained from first principles, with time for questions." },
  { k: "02", t: "Practise", d: "Regular, graded practice turns understanding into confident answers." },
  { k: "03", t: "Review", d: "Assessments and feedback show exactly what to work on next." },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-y bg-paper">
      <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="relative order-2 lg:order-1 lg:col-span-5">
          <div className="overflow-hidden rounded-sm">
            <img
              src={images.about}
              alt="A teacher guiding a student through a problem in her notebook"
              width={1200}
              height={1504}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <blockquote className="absolute -right-2 -bottom-8 max-w-[17rem] bg-navy p-6 text-on-navy shadow-lift sm:-right-8">
            <span aria-hidden="true" className="font-display text-5xl leading-none text-gold">
              &ldquo;
            </span>
            <p className="-mt-3 font-display text-lg leading-snug font-semibold">
              Every student can learn well when teaching is clear and guidance is consistent.
            </p>
            <footer className="mt-3 text-xs tracking-[0.16em] text-on-navy-muted uppercase">Our philosophy</footer>
          </blockquote>
        </Reveal>

        <div className="order-1 lg:order-2 lg:col-span-7 lg:pt-6">
          <Reveal>
            <p className="eyebrow">About the institute</p>
            <h2 id="about-title" className="mt-4 text-[2rem] leading-[1.1] font-extrabold text-navy sm:text-[2.6rem] lg:text-5xl">
              An Environment Where Learning Comes First
            </h2>
          </Reveal>
          <Reveal className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]" delay={80}>
            <p>
              {institute.name} was started with a simple aim: to give students the kind of focused, patient teaching
              that is hard to find in crowded classrooms. We work with school students and exam aspirants who want to
              understand their subjects properly — not just get through them.
            </p>
            <p>
              Our approach is structured. Each course follows a clear plan, every concept is taught before it is
              tested, and students always know what they are working towards. Teachers stay approachable, so doubts
              are raised and cleared early.
            </p>
            <p>
              Just as important is the environment. Classrooms are calm and well-organised, batches are kept to a
              size where every student is seen, and parents are kept informed along the way. Our commitment is to
              each student's steady, genuine progress.
            </p>
          </Reveal>

          <Reveal as="ol" className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3" delay={160}>
            {pillars.map((p) => (
              <li key={p.k} className="bg-paper p-6">
                <span className="font-display text-sm font-bold text-gold">{p.k}</span>
                <h3 className="mt-2 text-lg font-bold text-navy">{p.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
