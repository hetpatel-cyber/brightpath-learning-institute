import { Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fullAddress, institute } from "@/content/institute";
import { whatsappUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const tel = `tel:${institute.phone.replace(/\s/g, "")}`;
  const rows = [
    { icon: MapPin, label: "Address", value: fullAddress, href: institute.mapsLink, external: true },
    { icon: Phone, label: "Phone", value: institute.phone, href: tel },
    { icon: WhatsAppIcon, label: "WhatsApp", value: "Chat with our team", href: whatsappUrl(), external: true },
    { icon: Mail, label: "Email", value: institute.email, href: `mailto:${institute.email}` },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="section-y bg-secondary">
      <div className="container-site">
        <SectionHeading id="contact-title" eyebrow="Location & contact" title="Visit Our Institute" />
        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          <Reveal className="bg-paper p-7 shadow-soft sm:p-10 lg:col-span-5">
            <address className="not-italic">
              <ul className="space-y-6">
                {rows.map((r) => (
                  <li key={r.label} className="flex gap-4">
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-sm bg-secondary text-navy">
                      <r.icon className="size-[18px]" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="eyebrow-muted">{r.label}</p>
                      <a
                        href={r.href}
                        {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="mt-1 block break-words font-medium text-navy hover:underline"
                      >
                        {r.value}
                      </a>
                    </div>
                  </li>
                ))}
                <li className="flex gap-4">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-sm bg-secondary text-navy">
                    <Clock className="size-[18px]" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="eyebrow-muted">Opening hours</p>
                    <ul className="mt-1 space-y-1 text-sm">
                      {institute.hours.map((h) => (
                        <li key={h.days} className="flex flex-wrap gap-x-3">
                          <span className="font-medium text-navy">{h.days}</span>
                          <span className="text-muted-foreground">{h.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </address>
            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              <Button asChild variant="navy" size="xl">
                <a href={institute.mapsLink} target="_blank" rel="noopener noreferrer">
                  <Navigation /> Get Directions
                </a>
              </Button>
              <Button asChild variant="outlineNavy" size="xl">
                <a href="#enquiry">Contact Us</a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={100} className="min-h-80 overflow-hidden bg-muted shadow-soft lg:col-span-7">
            <iframe
              title={`Map showing the location of ${institute.name}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(institute.mapsEmbedQuery)}&output=embed`}
              className="h-full min-h-80 w-full border-0 grayscale-[30%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
