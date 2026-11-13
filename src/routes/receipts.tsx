import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/flow";
import { Shell } from "@/components/site-chrome";
import { receipts } from "@/content/receipts";

export const Route = createFileRoute("/receipts")({
  head: () => ({
    meta: [
      { title: "Receipts · Continuous Audit Election Infrastructure" },
      {
        name: "description",
        content:
          "Annotated sources for the continuous-audit election design: what each claim rests on, and what it does not.",
      },
    ],
  }),
  component: ReceiptsRoute,
});

function ReceiptsRoute() {
  return (
    <Shell>
      <article>
        <PageIntro
          kicker="Receipts"
          title="Every claim has a source, and a limit."
          lede="This is the source log for the site. A link in the design is not proof that the design works. Where the public gist and a later instruction disagree, both are written down."
        />
        {receipts.map((group) => (
          <section key={group.id} id={group.id} className="section-anchor border-b border-line">
            <div className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
              <h2 className="font-serif text-3xl font-medium">{group.title}</h2>
              <p className="mt-3 max-w-3xl text-pretty text-muted">{group.note}</p>
              <ol className="mt-8 divide-y divide-line border-y border-line">
                {group.items.map((item) => (
                  <li key={item.id} id={item.id} className="py-6">
                    <h3 className="max-w-3xl text-lg font-semibold text-pretty text-ink">{item.claim}</h3>
                    <p className="mt-2 text-sm text-faint">On the site: {item.appears}</p>
                    <p className="mt-3 max-w-3xl text-pretty text-muted">{item.supports}</p>
                    <p className="mt-3">
                      <a className="prose-link" href={item.href} target="_blank" rel="noopener noreferrer">
                        {item.source}
                      </a>
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        ))}
      </article>
    </Shell>
  );
}
