import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Site under maintenance",
  robots: { index: false, follow: false },
};

/**
 * Full-screen cover shown on every route while MAINTENANCE_MODE=true
 * (see src/proxy.ts). Fixed overlay so the shared header/footer are hidden.
 */
export default function MaintenancePage() {
  return (
    <div className="fixed inset-0 z-[65] flex flex-col items-center justify-center overflow-y-auto bg-panel px-6 py-16 text-center text-panel-ink">
      <Image
        src="/images/logos/gould-logo.png"
        alt="Gould Creative"
        width={144}
        height={144}
        className="h-28 w-28 rounded-full sm:h-36 sm:w-36"
      />

      <p className="eyebrow mt-12 !text-panel-muted">Site under maintenance</p>

      <h1 className="display mt-5 max-w-2xl text-4xl leading-tight sm:text-6xl">
        We&rsquo;ll be back shortly.
      </h1>

      <p className="mt-6 max-w-md text-base leading-relaxed text-panel-muted">
        {site.name} is being updated. Thank you for your patience. For anything
        urgent, get in touch directly.
      </p>

      <a
        href={`mailto:${site.email}`}
        className="link-underline mt-8 font-mono text-sm tracking-wide text-accent-on-dark"
      >
        {site.email}
      </a>
    </div>
  );
}
