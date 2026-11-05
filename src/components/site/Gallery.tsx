import { gallery } from "@/content/institute";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

// Editorial grid: varied proportions on desktop, clean 2-column on mobile.
const layout = [
  "col-span-2 row-span-2 lg:col-span-4 lg:row-span-2",
  "col-span-1 row-span-2 lg:col-span-2 lg:row-span-2",
  "col-span-1 row-span-1 lg:col-span-2 lg:row-span-1",
  "col-span-1 row-span-2 lg:col-span-2 lg:row-span-2",
  "col-span-1 row-span-1 lg:col-span-2 lg:row-span-1",
  "col-span-2 row-span-1 lg:col-span-2 lg:row-span-1",
];

export function Gallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-title" className="section-y">
      <div className="container-site">
        <SectionHeading
          id="gallery-title"
          eyebrow="Our learning environment"
          title="Inside Our Learning Environment"
          intro="Calm classrooms, clear boards and teachers who make time for every question."
        />
        <div className="mt-14 grid auto-rows-[9.5rem] grid-cols-2 gap-3 sm:auto-rows-[12rem] sm:gap-4 lg:auto-rows-[13rem] lg:grid-cols-8">
          {gallery.map((g, i) => (
            <Reveal key={g.alt} delay={(i % 3) * 70} className={cn("group overflow-hidden rounded-sm bg-muted", layout[i])}>
              <figure className="h-full">
                <img
                  src={g.src}
                  alt={g.alt}
                  width={g.w}
                  height={g.h}
                  loading="lazy"
                  decoding="async"
                  className="img-zoom h-full w-full object-cover"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
