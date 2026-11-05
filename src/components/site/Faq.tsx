import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { faqs } from "@/content/institute";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="section-y">
      <div className="container-site grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading
            id="faq-title"
            eyebrow="FAQ"
            title="Questions parents and students ask"
            intro="Can't find what you're looking for? Send us a message — we're happy to help."
          />
        </div>
        <Reveal className="lg:col-span-8">
          <AccordionPrimitive.Root type="single" collapsible className="border-t border-border">
            {faqs.map((f, i) => (
              <AccordionPrimitive.Item key={f.q} value={`item-${i}`} className="border-b border-border">
                <AccordionPrimitive.Header>
                  <AccordionPrimitive.Trigger className="group flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left">
                    <span className="font-display text-lg font-bold text-navy sm:text-xl">{f.q}</span>
                    <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-navy transition-all group-hover:border-navy group-data-[state=open]:rotate-45 group-data-[state=open]:border-gold group-data-[state=open]:bg-gold">
                      <Plus className="size-4" aria-hidden="true" />
                    </span>
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <p className="max-w-2xl pb-6 text-base leading-relaxed text-muted-foreground">{f.a}</p>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            ))}
          </AccordionPrimitive.Root>
        </Reveal>
      </div>
    </section>
  );
}
