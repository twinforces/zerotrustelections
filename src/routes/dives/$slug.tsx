import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Shell } from "@/components/site-chrome";
import { diveMap, dives } from "@/content/dives";

export const Route = createFileRoute("/dives/$slug")({
  loader: ({ params }) => {
    const dive = diveMap[params.slug];
    if (!dive) throw notFound();
    return { slug: dive.slug };
  },
  head: ({ params }) => {
    const dive = diveMap[params.slug];
    return {
      meta: [{ title: dive ? `${dive.title} · Continuous Audit` : "Note not found" }],
    };
  },
  component: DivePage,
  notFoundComponent: MissingNote,
});

function DivePage() {
  const { slug } = Route.useLoaderData();
  const dive = diveMap[slug];
  if (!dive) return <MissingNote />;
  const siblings = dives.filter((item) => item.section === dive.section && item.slug !== dive.slug);
  const sectionTo = dive.section === "registration" ? "/registration" : "/counting";
  const sectionLabel = dive.section === "registration" ? "Registration" : "Counting";

  return (
    <Shell>
      <article className="mx-auto max-w-3xl px-5 py-14 sm:py-20">
        <p className="text-sm text-muted">
          <Link className="prose-link font-normal" to={sectionTo}>
            {sectionLabel}
          </Link>
          <span aria-hidden="true"> / </span>
          <span className="text-ink">{dive.title}</span>
        </p>
        <h1 className="mt-4 font-serif text-4xl font-medium text-balance sm:text-5xl">{dive.title}</h1>
        <p className="mt-5 text-lg text-pretty text-muted">{dive.lede}</p>
        <div className="dive-body mt-8 text-pretty">{dive.body}</div>
        {siblings.length ? (
          <aside className="mt-12 border-t border-line pt-6">
            <h2 className="text-xs font-semibold tracking-widest text-faint uppercase">More in {sectionLabel}</h2>
            <ul className="mt-3 space-y-2">
              {siblings.map((item) => (
                <li key={item.slug}>
                  <Link className="prose-link font-normal" to="/dives/$slug" params={{ slug: item.slug }}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        ) : null}
        <p className="mt-8 text-sm text-faint">
          Marked words in this note open the{" "}
          <Link className="prose-link font-normal" to="/glossary">
            glossary
          </Link>
          .
        </p>
      </article>
    </Shell>
  );
}

function MissingNote() {
  return (
    <Shell>
      <article className="mx-auto max-w-3xl px-5 py-20">
        <h1 className="font-serif text-4xl">No note at that address</h1>
        <p className="mt-4 text-muted">
          <Link className="prose-link" to="/dives">
            All notes
          </Link>
        </p>
      </article>
    </Shell>
  );
}
