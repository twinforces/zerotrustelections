import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { glossaryById } from "@/content/glossary";

export function Term({ id, children }: { id: string; children?: ReactNode }) {
  const entry = glossaryById[id];
  if (!entry) return <>{children}</>;
  return (
    <span className="term">
      <Link className="term-link" to="/glossary" hash={`term-${entry.id}`} title={entry.term}>
        {children ?? entry.term}
      </Link>
      <span className="term-pop" role="tooltip">
        <span className="term-pop-card">
          <span>{entry.short}</span>
          <Link className="term-pop-more" to="/glossary" hash={`term-${entry.id}`}>
            Open in glossary
          </Link>
        </span>
      </span>
    </span>
  );
}
