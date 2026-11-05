import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { institute } from "@/content/institute";
import { Footer } from "./Footer";
import { LogoMark } from "./icons";
import { WhatsAppFloat } from "./WhatsAppFloat";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <header className="border-b border-border bg-background">
        <div className="container-site flex h-16 items-center justify-between md:h-20">
          <Link to="/" className="flex items-center gap-3">
            <LogoMark className="size-9" />
            <span className="font-display text-[1.05rem] font-extrabold text-navy">{institute.name}</span>
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:underline">
            <ArrowLeft className="size-4" /> Back to home
          </Link>
        </div>
      </header>
      <main id="main" className="section-y">
        <article className="container-site max-w-3xl">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-4 text-4xl font-extrabold text-navy sm:text-5xl">{title}</h1>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-navy">
            {children}
          </div>
        </article>
      </main>
      <Footer onHome={false} />
      <WhatsAppFloat />
    </>
  );
}
