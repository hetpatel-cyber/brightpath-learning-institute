import { createFileRoute } from "@tanstack/react-router";
import { institute } from "@/content/institute";
import { LegalPage } from "@/components/site/LegalPage";

const title = `Terms & Conditions — ${institute.name}`;
const description = `Terms for using the ${institute.name} website and submitting admission enquiries.`;

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions">
      <p>
        These terms cover the use of the {institute.name} website. Please review them with the institute's own
        policies before publishing.
      </p>
      <h2>Website information</h2>
      <p>
        Course descriptions on this website are for general information. Details such as batches, timings and fees
        are confirmed by our team when you enquire.
      </p>
      <h2>Enquiries</h2>
      <p>
        Submitting an enquiry does not confirm admission. Our team will contact you with the relevant information
        and next steps.
      </p>
      <h2>Content</h2>
      <p>
        Text and images on this website belong to {institute.name} and may not be reused without permission.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about these terms can be sent to{" "}
        <a className="text-navy underline" href={`mailto:${institute.email}`}>
          {institute.email}
        </a>
        .
      </p>
    </LegalPage>
  );
}
