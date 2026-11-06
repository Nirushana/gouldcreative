import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="January 2024">
      <p>
        This privacy policy sets out how Gould Creative collects, uses, and
        protects any information that you provide when using this website.
      </p>
      <h2>Information We Collect</h2>
      <p>
        We may collect your name, contact information including email address,
        and other information relevant to inquiries or commissions.
      </p>
      <h2>How We Use It</h2>
      <p>
        We use this information to understand your needs, respond to inquiries,
        and improve our products and services. We will not sell, distribute, or
        lease your personal information to third parties.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about this policy can be sent to dan@gouldcreative.co.uk. This
        is placeholder content for layout purposes.
      </p>
    </LegalPage>
  );
}
