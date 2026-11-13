import { Link, useRouterState } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { CATEGORIES, glossary, glossaryById, type GlossaryEntry } from "@/content/glossary";

function entryText(entry: GlossaryEntry): string {
  return [entry.term, entry.short, entry.note ?? "", entry.category, ...(entry.aliases ?? [])]
    .join(" ")
    .toLowerCase();
}

export function GlossaryView() {
  const hash = useRouterState({ select: (state) => state.location.hash });
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState<"category" | "alpha">("category");
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const raw = hash.startsWith("#") ? hash.slice(1) : hash;
    if (!raw.startsWith("term-")) {
      setActiveId(null);
      return;
    }
    const id = raw.slice("term-".length);
    if (!glossaryById[id]) return;
    setActiveId(id);
    setQuery("");
  }, [hash]);

  useEffect(() => {
    if (!activeId) return;
    const node = document.getElementById(`term-${activeId}`);
    if (!node) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    node.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
  }, [activeId, mode]);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return glossary;
    return glossary.filter((entry) => entryText(entry).includes(needle));
  }, [query]);

  const alpha = useMemo(() => {
    const groups = new Map<string, GlossaryEntry[]>();
    const sorted = [...filtered].sort((a, b) => a.term.localeCompare(b.term));
    for (const entry of sorted) {
      const letter = entry.term[0]?.toUpperCase() ?? "#";
      const bucket = groups.get(letter) ?? [];
      bucket.push(entry);
      groups.set(letter, bucket);
    }
    return [...groups.entries()];
  }, [filtered]);

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <label className="relative block min-w-0 flex-1">
          <span className="sr-only">Search the glossary</span>
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-faint" aria-hidden="true" />
          <input
            className="search-input"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search terms, aliases, definitions"
            type="search"
            autoComplete="off"
          />
        </label>
        <div className="seg self-start" role="group" aria-label="Glossary order">
          <button type="button" className={mode === "category" ? "is-on" : ""} onClick={() => setMode("category")}>
            By category
          </button>
          <button type="button" className={mode === "alpha" ? "is-on" : ""} onClick={() => setMode("alpha")}>
            A–Z
          </button>
        </div>
      </div>
      <p className="mt-3 text-sm text-faint">
        {filtered.length} {filtered.length === 1 ? "term" : "terms"}
        {query.trim() ? ` matching "${query.trim()}"` : ""}.
      </p>

      {filtered.length === 0 ? (
        <p className="mt-8 text-muted">No terms match that search. Try “soft-delete”, “RLA”, or “oracle”.</p>
      ) : mode === "category" ? (
        <div className="mt-8 space-y-10">
          {CATEGORIES.map((category) => {
            const items = filtered.filter((entry) => entry.category === category);
            if (!items.length) return null;
            return (
              <section key={category} aria-labelledby={`cat-${category}`}>
                <h3 id={`cat-${category}`} className="text-xs font-semibold tracking-widest text-teal uppercase">
                  {category}
                </h3>
                <div className="mt-3 grid gap-3">
                  {items.map((entry) => (
                    <Entry key={entry.id} entry={entry} active={entry.id === activeId} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      ) : (
        <div className="mt-8 space-y-8">
          {alpha.map(([letter, items]) => (
            <section key={letter} aria-labelledby={`letter-${letter}`}>
              <h3 id={`letter-${letter}`} className="font-serif text-2xl text-teal">
                {letter}
              </h3>
              <div className="mt-3 grid gap-3">
                {items.map((entry) => (
                  <Entry key={entry.id} entry={entry} active={entry.id === activeId} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

function Entry({ entry, active }: { entry: GlossaryEntry; active: boolean }) {
  return (
    <article id={`term-${entry.id}`} tabIndex={-1} className={`gloss-entry ${active ? "is-active" : ""}`}>
      <header className="flex flex-wrap items-baseline justify-between gap-2">
        <h4 className="text-lg font-semibold text-ink">{entry.term}</h4>
        <span className="text-xs tracking-wide text-faint uppercase">{entry.category}</span>
      </header>
      <p className="mt-2 text-pretty text-ink">{entry.short}</p>
      {entry.note ? <p className="mt-2 text-pretty text-muted">{entry.note}</p> : null}
      {entry.related.length ? (
        <p className="mt-3 text-sm text-muted">
          <span className="text-faint">Related: </span>
          {entry.related.map((id, index) => {
            const related = glossaryById[id];
            if (!related) return null;
            return (
              <span key={id}>
                {index > 0 ? ", " : null}
                <Link className="prose-link font-normal" to="/" hash={`term-${related.id}`}>
                  {related.term}
                </Link>
              </span>
            );
          })}
        </p>
      ) : null}
    </article>
  );
}
