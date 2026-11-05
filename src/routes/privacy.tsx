import { createFileRoute } from "@tanstack/react-router";
import { institute } from "@/content/institute";
import { LegalPage } from "@/components/site/LegalPage";

const title = `Privacy Policy — ${institute.name}`;
const description = `How ${institute.name} collects, uses and protects the information you share through our website and enquiry form.`;

export const Route = createFileRoute("/privacy")({
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
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        This policy explains how {institute.name} handles information shared through this website. Please review it
        with the institute's own requirements before publishing.
      </p>
      <h2>Information we collect</h2>
      <p>
        When you submit an admission enquiry, we collect the details you enter: the student's name, an optional
        parent or guardian name, a mobile number, the course you're interested in, the current class and any message
        you include.
      </p>
      <h2>How we use it</h2>
      <p>
        We use these details only to respond to your enquiry and share information about our courses and admissions.
        We do not sell your information.
      </p>
      <h2>WhatsApp and third-party services</h2>
      <p>
        If you contact us on WhatsApp, your conversation is also subject to WhatsApp's own privacy policy. The map on
        our website is provided by Google Maps.
      </p>
      <h2>Your choices</h2>
      <p>
        To ask us to update or delete the information you've shared, contact us at{" "}
        <a className="text-navy underline" href={`mailto:${institute.email}`}>
          {institute.email}
        </a>{" "}
        or call {institute.phone}.
      </p>
    </LegalPage>
  );
}
