import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { courses, type Course } from "@/content/institute";
import { courseWhatsappMessage, whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function enquireFor(course: string) {
  // Pre-select the course in the enquiry form and scroll there
  window.dispatchEvent(new CustomEvent("enquire-course", { detail: course }));
}

function CourseActions({ course, dark = false }: { course: Course; dark?: boolean }) {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <Button asChild variant={dark ? "gold" : "navy"} size="xl">
        <a href="#enquiry" onClick={() => enquireFor(course.name)}>
          Enquire Now <ArrowRight />
        </a>
      </Button>
      <Button asChild variant={dark ? "outlineLight" : "outlineNavy"} size="xl">
        <a href={whatsappUrl(courseWhatsappMessage(course.name))} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon /> Ask on WhatsApp
        </a>
      </Button>
    </div>
  );
}

function Meta({ course, dark }: { course: Course; dark?: boolean }) {
  const items = [
    { k: "Duration", v: course.duration ?? "Shared on enquiry" },
    { k: "Batches", v: course.batches ?? "Shared on enquiry" },
  ];
  return (
    <dl className={cn("mt-7 grid grid-cols-2 gap-4 border-y py-4", dark ? "border-on-navy/15" : "border-border")}>
      {items.map((i) => (
        <div key={i.k}>
          <dt className={cn("text-[0.68rem] font-semibold tracking-[0.18em] uppercase", dark ? "text-on-navy-muted" : "text-muted-foreground")}>
            {i.k}
          </dt>
          <dd className={cn("mt-1 text-sm font-semibold", dark ? "text-on-navy" : "text-navy")}>{i.v}</dd>
        </div>
      ))}
    </dl>
  );
}

function SubjectList({ course, dark }: { course: Course; dark?: boolean }) {
  return (
    <div className="mt-6">
      <h4 className={cn("text-[0.68rem] font-semibold tracking-[0.18em] uppercase", dark ? "text-on-navy-muted" : "text-muted-foreground")}>
        Subjects covered
      </h4>
      <ul className="mt-3 flex flex-wrap gap-2">
        {course.subjects.map((s) => (
          <li
            key={s}
            className={cn(
              "rounded-sm px-3 py-1.5 text-[0.8rem] font-medium",
              dark ? "bg-on-navy/10 text-on-navy" : "bg-secondary text-navy",
            )}
          >
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Objectives({ course, dark }: { course: Course; dark?: boolean }) {
  return (
    <div className="mt-6">
      <h4 className={cn("text-[0.68rem] font-semibold tracking-[0.18em] uppercase", dark ? "text-on-navy-muted" : "text-muted-foreground")}>
        What students work towards
      </h4>
      <ul className="mt-3 space-y-2.5">
        {course.objectives.map((o) => (
          <li key={o} className={cn("flex gap-3 text-[0.95rem] leading-snug", dark ? "text-on-navy" : "text-foreground")}>
            <Check className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
            {o}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Large split layout with image; alternates side */
function SplitCourse({ course, index, reverse }: { course: Course; index: number; reverse?: boolean }) {
  return (
    <Reveal as="article" className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16" aria-labelledby={`course-${course.slug}`}>
      <div className={cn("group overflow-hidden rounded-sm lg:col-span-6", reverse && "lg:order-2")}>
        <img
          src={course.image}
          alt={course.imageAlt}
          width={1200}
          height={912}
          loading="lazy"
          decoding="async"
          className="img-zoom aspect-[4/3] w-full object-cover"
        />
      </div>
      <div className="lg:col-span-6">
        <div className="flex items-baseline gap-4">
          <span className="font-display text-sm font-bold text-gold">{String(index + 1).padStart(2, "0")}</span>
          <p className="eyebrow-muted">{course.level}</p>
        </div>
        <h3 id={`course-${course.slug}`} className="mt-3 text-[1.85rem] leading-tight font-extrabold text-navy sm:text-4xl">
          {course.name}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{course.description}</p>
        <SubjectList course={course} />
        <Objectives course={course} />
        <Meta course={course} />
        <CourseActions course={course} />
      </div>
    </Reveal>
  );
}

/** Navy feature panel layout */
function PanelCourse({ course, index }: { course: Course; index: number }) {
  return (
    <Reveal as="article" className="relative overflow-hidden rounded-sm bg-navy text-on-navy" aria-labelledby={`course-${course.slug}`}>
      <div aria-hidden="true" className="absolute inset-0 texture-grid" />
      <div className="relative grid lg:grid-cols-12">
        <div className="p-7 sm:p-10 lg:col-span-7 lg:p-14">
          <div className="flex items-baseline gap-4">
            <span className="font-display text-sm font-bold text-gold">{String(index + 1).padStart(2, "0")}</span>
            <p className="font-display text-[0.72rem] font-bold tracking-[0.22em] text-on-navy-muted uppercase">{course.level}</p>
          </div>
          <h3 id={`course-${course.slug}`} className="mt-3 text-[1.85rem] leading-tight font-extrabold sm:text-4xl">
            {course.name}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-on-navy-muted">{course.description}</p>
          <div className="grid gap-x-10 md:grid-cols-2">
            <SubjectList course={course} dark />
            <Objectives course={course} dark />
          </div>
          <Meta course={course} dark />
          <CourseActions course={course} dark />
        </div>
        <div className="relative min-h-64 lg:col-span-5">
          <img
            src={course.image}
            alt={course.imageAlt}
            width={1200}
            height={912}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </Reveal>
  );
}

export function Courses() {
  return (
    <section id="courses" aria-labelledby="courses-title" className="section-y">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            id="courses-title"
            eyebrow="Courses & programs"
            title="Explore Our Courses"
            intro="Programs for secondary, senior secondary and competitive-exam students — each with a clear plan, focused subjects and steady guidance."
          />
          <nav aria-label="Jump to a course" className="flex flex-wrap gap-2 lg:max-w-sm lg:justify-end">
            {courses.map((c) => (
              <a
                key={c.slug}
                href={`#course-${c.slug}`}
                className="rounded-sm border border-border px-3 py-2 text-xs font-semibold text-navy transition-colors hover:border-navy"
              >
                {c.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-16 space-y-20 md:space-y-28">
          {courses.map((c, i) =>
            i % 3 === 2 ? (
              <PanelCourse key={c.slug} course={c} index={i} />
            ) : (
              <SplitCourse key={c.slug} course={c} index={i} reverse={i % 2 === 1} />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
