import { createFileRoute } from "@tanstack/react-router";
import { GlossaryView } from "@/components/glossary-view";
import { PageIntro } from "@/components/flow";
import { Shell } from "@/components/site-chrome";

export const Route = createFileRoute("/glossary")({
  head: () => ({
    meta: [
      { title: "Glossary · Continuous Audit Election Infrastructure" },
      {
        name: "description",
        content: "Searchable definitions for the continuous-audit election design.",
      },
    ],
  }),
  component: GlossaryRoute,
});

function GlossaryRoute() {
  return (
    <Shell>
      <article>
        <PageIntro
          kicker="Glossary"
          title="Every term, with the short version first."
          lede="Dotted words on the other pages are terms. On a pointer device, hover or focus shows one sentence and a link here. Search covers the term, the definition, and aliases such as RLA, MSP, or valid=false."
        />
        <div className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
          <GlossaryView />
        </div>
      </article>
    </Shell>
  );
}
