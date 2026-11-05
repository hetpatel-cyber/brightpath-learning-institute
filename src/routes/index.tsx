import { createFileRoute } from "@tanstack/react-router";
import { courses, fullAddress, institute } from "@/content/institute";
import { getRequestOrigin } from "@/lib/origin.functions";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Courses } from "@/components/site/Courses";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Gallery } from "@/components/site/Gallery";
import { Faculty, Results, Testimonials } from "@/components/site/People";
import { Enquiry } from "@/components/site/Enquiry";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

const title = `${institute.name} — Coaching Classes for Class 9–12, JEE & NEET in ${institute.address.city}`;
const description = `${institute.name} offers structured coaching for Class 9–10 Foundation, Class 11–12 Science and Commerce, and JEE / NEET preparation. Enquire about admissions today.`;

export const Route = createFileRoute("/")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => {
    const origin = loaderData?.origin ?? "";
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": ["EducationalOrganization", "LocalBusiness"],
      name: institute.name,
      description: institute.description,
      url: origin ? `${origin}/` : undefined,
      telephone: institute.phone,
      email: institute.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${institute.address.street}, ${institute.address.locality}`,
        addressLocality: institute.address.city,
        addressRegion: institute.address.region,
        postalCode: institute.address.postalCode,
        addressCountry: institute.address.country,
      },
      sameAs: [institute.social.instagram, institute.social.facebook],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Courses",
        itemListElement: courses.map((c) => ({
          "@type": "Course",
          name: c.name,
          description: c.description,
          educationalLevel: c.level,
          provider: { "@type": "EducationalOrganization", name: institute.name },
        })),
      },
    };
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "geo.placename", content: fullAddress },
      ],
      links: origin ? [{ rel: "canonical", href: `${origin}/` }] : [],
      scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
    };
  },
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Courses />
        <WhyChoose />
        <Gallery />
        <Faculty />
        <Results />
        <Testimonials />
        <Enquiry />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
