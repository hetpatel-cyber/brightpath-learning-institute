import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { institute, navLinks } from "@/content/institute";
import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { LogoMark, WhatsAppIcon } from "./icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open ? "bg-background/95 shadow-soft backdrop-blur-md" : "bg-background/0",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded focus:bg-navy focus:px-3 focus:py-2 focus:text-on-navy"
      >
        Skip to content
      </a>
      <div className="container-site flex h-16 items-center justify-between gap-6 md:h-20">
        <a href="#top" className="flex items-center gap-3" aria-label={`${institute.name} — home`}>
          <LogoMark className="size-9 shrink-0" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-[1.05rem] font-extrabold tracking-tight text-navy">
              {institute.name}
            </span>
            <span className="mt-1 hidden text-[0.68rem] font-medium tracking-[0.14em] text-muted-foreground uppercase sm:block">
              Coaching Institute
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-foreground/80 transition-colors hover:text-navy after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="navy" size="lg" className="hidden px-5 sm:inline-flex">
            <a href="#enquiry">Admission Enquiry</a>
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md text-navy lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>
    </header>

      {/* Mobile menu — kept outside the header so its blur doesn't trap the fixed panel */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 top-16 bottom-0 z-50 overflow-y-auto bg-background transition-all duration-300 md:top-20 lg:hidden",
          open ? "visible opacity-100" : "invisible -translate-y-2 opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="container-site flex flex-col py-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-border py-4 font-display text-2xl font-bold text-navy"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-8 grid gap-3">
            <Button asChild variant="navy" size="xl">
              <a href="#enquiry" onClick={() => setOpen(false)}>
                Admission Enquiry
              </a>
            </Button>
            <Button asChild variant="whatsapp" size="xl">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon /> Chat on WhatsApp
              </a>
            </Button>
            <Button asChild variant="outlineNavy" size="xl">
              <a href={`tel:${institute.phone.replace(/\s/g, "")}`}>
                <Phone /> Call {institute.phone}
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
