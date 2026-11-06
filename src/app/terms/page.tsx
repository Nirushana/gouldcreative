import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/legal-page";

export const metadata: Metadata = {
  title: "Terms & Condition",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms & Condition" updated="January 2024">
      <p>
        By accessing this website you agree to be bound by these terms and
        conditions of use. The content of this site is for your general
        information and use only.
      </p>
      <h2>Use of the Site</h2>
      <p>
        Neither we nor any third parties provide any warranty as to the accuracy
        or completeness of the information found on this website. All material is
        the property of Gould Creative unless otherwise stated.
      </p>
      <h2>Commissions</h2>
      <p>
        Specific terms relating to design, development, and manufacturing
        engagements are agreed in writing on a per-project basis.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about these terms can be sent to dan@gouldcreative.co.uk. This
        is placeholder content for layout purposes.
      </p>
    </LegalPage>
  );
}
