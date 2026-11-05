import { Link } from "@tanstack/react-router";
import { courses, fullAddress, institute, navLinks } from "@/content/institute";
import { whatsappUrl } from "@/lib/whatsapp";
import { FacebookIcon, InstagramIcon, LogoMark, WhatsAppIcon } from "./icons";

export function Footer({ onHome = true }: { onHome?: boolean }) {
  const prefix = onHome ? "" : "/";
  return (
    <footer className="relative bg-navy-deep text-on-navy-muted">
      <div aria-hidden="true" className="absolute inset-0 texture-grid" />
      <div className="container-site relative pt-16 pb-28 sm:pb-12 lg:pt-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <a href={`${prefix}#top`} className="flex items-center gap-3">
              <LogoMark className="size-10" />
              <span className="font-display text-lg font-extrabold text-on-navy">{institute.name}</span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">{institute.description}</p>
            <div className="mt-6 flex gap-3">
              <a href={institute.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex size-10 items-center justify-center rounded-sm border border-on-navy/20 text-on-navy transition-colors hover:border-gold hover:text-gold">
                <InstagramIcon className="size-[18px]" />
              </a>
              <a href={institute.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="inline-flex size-10 items-center justify-center rounded-sm border border-on-navy/20 text-on-navy transition-colors hover:border-gold hover:text-gold">
                <FacebookIcon className="size-[18px]" />
              </a>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="inline-flex size-10 items-center justify-center rounded-sm border border-on-navy/20 text-on-navy transition-colors hover:border-gold hover:text-gold">
                <WhatsAppIcon className="size-[18px]" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer" className="lg:col-span-2">
            <h2 className="font-display text-xs font-bold tracking-[0.2em] text-on-navy uppercase">Explore</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={`${prefix}${l.href}`} className="hover:text-gold">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={`${prefix}#enquiry`} className="hover:text-gold">
                  Admission Enquiry
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Courses" className="lg:col-span-3">
            <h2 className="font-display text-xs font-bold tracking-[0.2em] text-on-navy uppercase">Courses</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {courses.map((c) => (
                <li key={c.slug}>
                  <a href={`${prefix}#course-${c.slug}`} className="hover:text-gold">
                    {c.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="font-display text-xs font-bold tracking-[0.2em] text-on-navy uppercase">Contact</h2>
            <address className="mt-5 space-y-3 text-sm not-italic">
              <p>{fullAddress}</p>
              <p>
                <a href={`tel:${institute.phone.replace(/\s/g, "")}`} className="hover:text-gold">
                  {institute.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${institute.email}`} className="break-all hover:text-gold">
                  {institute.email}
                </a>
              </p>
              <p>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-on-navy hover:text-gold">
                  <WhatsAppIcon className="size-4" /> WhatsApp enquiry
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-on-navy/15 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {institute.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-gold">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-gold">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
