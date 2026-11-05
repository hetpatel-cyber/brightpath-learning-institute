import { faculty, results, testimonials } from "@/content/institute";
import { whatsappUrl } from "@/lib/whatsapp";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Faculty() {
  return (
    <section id="faculty" aria-labelledby="faculty-title" className="section-y bg-secondary">
      <div className="container-site">
        <SectionHeading
          id="faculty-title"
          eyebrow="Our faculty"
          title="Meet Our Educators"
          intro="The teachers behind every class — their subjects, experience and approach."
        />
        {faculty.length > 0 ? (
          <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {faculty.map((f, i) => (
              <Reveal as="li" key={f.name} delay={(i % 3) * 80} className="bg-paper">
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  {f.photo ? (
                    <img src={f.photo} alt={`${f.name}, ${f.subject} faculty`} loading="lazy" className="h-full w-full object-cover" />
                  ) : (
                    <div className="flex h-full items-center justify-center font-display text-5xl font-extrabold text-navy/30">
                      {initials(f.name)}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <p className="eyebrow">{f.subject}</p>
                  <h3 className="mt-2 text-xl font-bold text-navy">{f.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {f.qualification} · {f.experience}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/80">{f.bio}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        ) : (
          <Reveal className="mt-12 grid gap-6 border-l-2 border-gold bg-paper p-7 sm:p-9 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h3 className="text-xl font-bold text-navy">Faculty profiles are being prepared</h3>
              <p className="mt-2 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground">
                We'd be glad to tell you about the teachers for your course — their subjects, experience and how they
                teach. Ask us directly and we'll share the details.
              </p>
            </div>
            <a
              href={whatsappUrl("Hello, I'd like to know about the faculty who teach at your institute.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-b border-navy pb-1 font-display text-sm font-bold text-navy"
            >
              Ask about our teachers →
            </a>
          </Reveal>
        )}
      </div>
    </section>
  );
}

/** Hidden until verified results are added to the content file. */
export function Results() {
  if (results.length === 0) return null;
  return (
    <section id="results" aria-labelledby="results-title" className="section-y">
      <div className="container-site">
        <SectionHeading id="results-title" eyebrow="Results" title="Celebrating Student Success" />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {results.map((r) => (
            <li key={`${r.student}-${r.exam}`} className="border-t-2 border-gold bg-paper p-6 shadow-soft">
              {r.score && <p className="font-display text-4xl font-extrabold text-navy">{r.score}</p>}
              <h3 className="mt-3 text-lg font-bold text-navy">{r.student}</h3>
              <p className="text-sm text-muted-foreground">{r.exam}</p>
              <p className="mt-3 text-sm">{r.achievement}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Hidden until genuine testimonials are added to the content file. */
export function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="section-y bg-paper">
      <div className="container-site">
        <SectionHeading id="testimonials-title" eyebrow="Testimonials" title="What Students and Parents Say" />
        <ul className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.name} className="flex flex-col border border-border p-7">
              <blockquote className="flex-1 font-display text-lg leading-snug text-navy">&ldquo;{t.quote}&rdquo;</blockquote>
              <p className="mt-6 text-sm font-semibold text-navy">{t.name}</p>
              <p className="text-xs text-muted-foreground">
                {t.role}
                {t.course ? ` · ${t.course}` : ""}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
