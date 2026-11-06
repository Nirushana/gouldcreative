import type { Metadata } from "next";
import { Envelope, Phone } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { contacts, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Inquire",
  description:
    "Every project starts with a conversation. Reach out to the Gould Creative team directly to discuss a commission, collection or manufacturing brief.",
};

export default function InquirePage() {
  return (
    <section className="pt-36 pb-24 md:pt-44 md:pb-32">
      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow className="mb-8">Inquire</Eyebrow>
            <h1 className="display text-5xl leading-[0.98] text-foreground sm:text-6xl md:text-[5.25rem]">
              Begin the
              <br />
              journey.
            </h1>
            <p className="mt-8 text-base leading-relaxed text-muted">
              Every project starts with a conversation. Share your vision for a
              bespoke creation, or ask about accessing our manufacturing
              network. Reach out to the team directly and we&apos;ll take it
              from there.
            </p>
          </Reveal>
        </div>

        {/* Direct contacts */}
        <div
          className={`mt-16 grid gap-4 md:mt-20 ${
            contacts.length > 1 ? "md:grid-cols-2" : "max-w-xl"
          }`}
        >
          {contacts.map((person, i) => (
            <Reveal key={person.email} delay={i * 0.08} className="h-full">
              <div className="card flex h-full flex-col border border-line p-8 md:p-10">
                <p className="eyebrow">{person.role}</p>
                <h2 className="display mt-2 text-2xl text-foreground">
                  {person.name}
                </h2>
                <div className="mt-8 space-y-4">
                  <a
                    href={`mailto:${person.email}`}
                    className="group flex items-center gap-3 text-foreground transition-colors hover:text-accent"
                  >
                    <Envelope size={18} weight="light" className="text-accent" />
                    <span className="text-base">{person.email}</span>
                  </a>
                  <a
                    href={`tel:${person.phone.replace(/[^\d+]/g, "")}`}
                    className="group flex items-center gap-3 text-foreground transition-colors hover:text-accent"
                  >
                    <Phone size={18} weight="light" className="text-accent" />
                    <span className="text-base">{person.phone}</span>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Studios */}
        <Reveal>
          <div className="mt-4 flex flex-col justify-between gap-4 border border-line bg-contrast p-8 sm:flex-row sm:items-center md:p-10">
            <div>
              <p className="eyebrow">The Studios</p>
              <p className="display mt-2 text-xl text-foreground">
                {site.locations.join(" · ")}
              </p>
            </div>
            <a
              href={`mailto:${site.email}`}
              className="text-sm uppercase tracking-[0.14em] text-muted transition-colors hover:text-accent"
            >
              {site.email}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
