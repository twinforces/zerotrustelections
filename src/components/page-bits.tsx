import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { divesFor, type DiveSection } from "@/content/dives";

export function DiveList({ section }: { section: DiveSection }) {
  const items = divesFor(section);
  return (
    <div className="mt-10">
      <h2 className="text-xs font-semibold tracking-widest text-faint uppercase">Notes</h2>
      <div className="mt-2">
        {items.map((dive) => (
          <details key={dive.slug} className="fold">
            <summary>{dive.title}</summary>
            <div className="fold-body">
              <p>{dive.lede}</p>
              <p className="mt-3">
                <Link className="prose-link" to="/dives/$slug" params={{ slug: dive.slug }}>
                  Full note
                </Link>
              </p>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}

export function PrimerList({ items }: { items: { href: string; label: string; source: string }[] }) {
  return (
    <div className="mt-8">
      <h2 className="text-xs font-semibold tracking-widest text-faint uppercase">Off-site primers</h2>
      <ul className="mt-3 divide-y divide-line border-y border-line">
        {items.map((item) => (
          <li key={item.href}>
            <a
              className="flex min-h-11 items-center justify-between gap-4 py-3 text-ink no-underline hover:text-teal"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                {item.label}
                <span className="mt-0.5 block text-sm text-faint">{item.source}</span>
              </span>
              <ArrowUpRight className="size-4 shrink-0 text-teal" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Limit({ children }: { children: ReactNode }) {
  return (
    <aside className="mt-8 border-l-2 border-teal bg-panel px-4 py-4 text-sm text-pretty text-muted">
      <p className="text-xs font-semibold tracking-widest text-teal uppercase">Known limit</p>
      <p className="mt-2">{children}</p>
    </aside>
  );
}

export function Tail({ children }: { children: ReactNode }) {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:py-16">{children}</div>
    </section>
  );
}
