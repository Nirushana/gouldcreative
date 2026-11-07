"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";
import { List, X } from "@phosphor-icons/react";
import { navLinks } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Magnetic } from "@/components/ui/magnetic";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Drive the condensed/elevated header off Motion's scroll value rather than
  // a raw scroll listener, so it never runs work on the main thread per frame.
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 8);
  });

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-background/80 backdrop-blur-md transition-shadow duration-300 ${
        scrolled
          ? "border-line shadow-[0_1px_24px_rgba(52,50,31,0.09)]"
          : "border-line/50"
      }`}
    >
      <Container>
        <div
          className={`flex items-center justify-between transition-[height] duration-300 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          <Link
            href="/"
            className="display flex items-center gap-3 text-lg tracking-[-0.01em] text-foreground"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/images/logos/gould-logo.png"
              alt=""
              width={48}
              height={48}
              priority
              className={`rounded-full transition-[width,height] duration-300 ${
                scrolled ? "h-10 w-10" : "h-12 w-12"
              }`}
            />
            Gould Creative
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative text-[0.7rem] font-medium uppercase tracking-[0.16em] transition-colors ${
                  isActive(link.href)
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
                <span
                  aria-hidden
                  className={`pointer-events-none absolute -bottom-1.5 left-0 h-px bg-accent transition-all duration-300 ${
                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Magnetic className="hidden sm:inline-block">
              <Button href="/inquire">Inquire</Button>
            </Magnetic>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="text-foreground lg:hidden"
            >
              {open ? <X size={22} /> : <List size={22} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile drawer */}
      {open ? (
        <div className="border-t border-line bg-background lg:hidden">
          <Container>
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`py-3 text-sm font-medium uppercase tracking-[0.16em] ${
                    isActive(link.href) ? "text-foreground" : "text-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button href="/inquire" className="mt-4 w-full">
                Inquire
              </Button>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
