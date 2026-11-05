import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { courses, images, institute } from "@/content/institute";
import { whatsappUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./icons";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pt-24 md:pt-28 lg:pt-32">
      <div className="container-site grid items-center gap-12 pb-16 lg:grid-cols-12 lg:gap-10 lg:pb-24">
        <div className="lg:col-span-6 xl:col-span-5">
          <p className="eyebrow animate-in fade-in slide-in-from-bottom-2 duration-700">Building Stronger Futures</p>
          <h1
            id="hero-title"
            className="mt-5 text-[2.5rem] leading-[1.04] font-extrabold text-navy animate-in fade-in slide-in-from-bottom-3 duration-700 min-[400px]:text-[2.85rem] sm:text-6xl lg:text-[4.1rem]"
          >
            Learn Better. Achieve More.{" "}
            <span className="underline decoration-gold/60 decoration-[0.12em] underline-offset-[0.12em] [text-decoration-skip-ink:none]">
              Build Your Future.
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground animate-in fade-in duration-1000 sm:text-lg">
            Discover a better learning experience with structured teaching, dedicated guidance and an environment
            designed to help students achieve their academic goals.
          </p>
          <div className="mt-9 flex flex-col gap-3 animate-in fade-in duration-1000 sm:flex-row">
            <Button asChild variant="navy" size="xl">
              <a href="#courses">
                Explore Our Courses <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="whatsapp" size="xl">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon /> Enquire on WhatsApp
              </a>
            </Button>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border pt-7 sm:max-w-md">
            <div>
              <dt className="eyebrow-muted">Programs</dt>
              <dd className="mt-1.5 font-display text-sm font-semibold text-navy">Class 9 – 12</dd>
            </div>
            <div>
              <dt className="eyebrow-muted">Exam prep</dt>
              <dd className="mt-1.5 font-display text-sm font-semibold text-navy">JEE · NEET</dd>
            </div>
          </dl>
        </div>

        <div className="relative lg:col-span-6 xl:col-span-7">
          <div aria-hidden="true" className="absolute -top-6 -right-24 bottom-10 left-16 hidden bg-navy texture-grid lg:block" />
          <figure className="relative">
            <div className="overflow-hidden rounded-sm shadow-lift">
              <img
                src={images.hero}
                alt="A teacher explaining a concept on the whiteboard while students take notes in a bright classroom"
                width={1600}
                height={1200}
                fetchPriority="high"
                decoding="async"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <figcaption className="relative mx-4 -mt-10 max-w-sm bg-paper p-5 shadow-soft sm:absolute sm:-bottom-8 sm:left-6 sm:mx-0 sm:mt-0">
              <span className="rule-gold" />
              <p className="mt-3 font-display text-sm font-bold text-navy">{courses.length} focused programs</p>
              <p className="mt-1 text-sm leading-snug text-muted-foreground">
                {courses.map((c) => c.name.replace(/\s*\(.*\)/, "")).join(" · ")}
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
      <span className="sr-only">{institute.name}</span>
    </section>
  );
}
