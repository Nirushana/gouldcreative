import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Monogram } from "@/components/ui/monogram";
import { footerColumns, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_auto] md:gap-8">
          <div className="max-w-xs">
            <p className="display text-2xl text-foreground">{site.name}</p>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Design, development and manufacturing for automotive, luggage,
              leather accessories and footwear.
            </p>
            <p className="eyebrow mt-5">{site.locations.join(" · ")}</p>
          </div>

          {footerColumns.map((col, i) => (
            <ul key={i} className="space-y-4">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs uppercase tracking-[0.14em] text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          ))}

          <div className="md:justify-self-end">
            <Monogram className="h-24 w-24 text-foreground" />
          </div>
        </div>

        <div className="border-t border-line py-8 text-center">
          <p className="eyebrow">
            © 2026 {site.name}. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
