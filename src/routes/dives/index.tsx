import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/site-chrome";
import { dives } from "@/content/dives";

export const Route = createFileRoute("/dives/")({
  component: NotesIndex,
});

function NotesIndex() {
  const registration = dives.filter((dive) => dive.section === "registration");
  const counting = dives.filter((dive) => dive.section === "counting");
  return (
    <Shell>
      <article className="mx-auto max-w-3xl px-5 py-14 sm:py-20">
        <p className="text-xs font-semibold tracking-widest text-teal uppercase">Notes</p>
        <h1 className="mt-3 font-serif text-4xl font-medium text-balance">Deeper dives</h1>
        <p className="mt-4 text-pretty text-muted">
          Short notes behind the registration and counting pages. Add another by appending to the dive list.
        </p>
        <NoteGroup title="Registration" items={registration} />
        <NoteGroup title="Counting" items={counting} />
      </article>
    </Shell>
  );
}

function NoteGroup({
  title,
  items,
}: {
  title: string;
  items: { slug: string; title: string; summary: string }[];
}) {
  return (
    <section className="mt-10">
      <h2 className="text-xs font-semibold tracking-widest text-faint uppercase">{title}</h2>
      <ul className="mt-3 divide-y divide-line border-y border-line">
        {items.map((dive) => (
          <li key={dive.slug}>
            <Link
              to="/dives/$slug"
              params={{ slug: dive.slug }}
              className="block py-4 text-ink no-underline hover:text-teal"
            >
              <span className="font-semibold">{dive.title}</span>
              <span className="mt-1 block text-sm text-muted">{dive.summary}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
