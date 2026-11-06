"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Media } from "@/components/ui/media";
import type { Work } from "@/lib/site";

const ALL = "All";

/** Filterable Selected Work gallery, grouped by client/company. */
export function WorkGallery({ items }: { items: Work[] }) {
  const reduce = useReducedMotion();
  const companies = useMemo(
    () => [ALL, ...Array.from(new Set(items.map((i) => i.client)))],
    [items],
  );
  const [active, setActive] = useState<string>(ALL);

  const filtered =
    active === ALL ? items : items.filter((i) => i.client === active);

  return (
    <div className="mt-10">
      {/* Filter chips */}
      <div className="flex flex-wrap gap-2">
        {companies.map((company) => {
          const isActive = active === company;
          return (
            <button
              key={company}
              type="button"
              onClick={() => setActive(company)}
              aria-pressed={isActive}
              className={`rounded-full border px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.14em] transition-colors ${
                isActive
                  ? "border-accent bg-accent text-accent-ink"
                  : "border-line text-muted hover:border-foreground hover:text-foreground"
              }`}
            >
              {company}
            </button>
          );
        })}
      </div>

      {/* Tiles */}
      <motion.div
        layout={!reduce}
        className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.figure
              key={`${item.client}-${item.title}`}
              layout={!reduce}
              initial={reduce ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="card card-interactive group flex flex-col overflow-hidden border border-line"
            >
              <Media
                src={item.image}
                label={item.client}
                className="aspect-4/5 w-full"
              >
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-foreground/50 via-foreground/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="pointer-events-none absolute right-4 bottom-4 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-accent text-accent-ink opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={16} weight="bold" />
                </span>
              </Media>
              <figcaption className="p-5">
                <p className="eyebrow">{item.category}</p>
                <p className="display mt-2 text-base text-foreground">
                  {item.client}
                </p>
                <p className="mt-0.5 text-sm text-muted">{item.title}</p>
              </figcaption>
            </motion.figure>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
