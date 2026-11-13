import { createFileRoute } from "@tanstack/react-router";
import { CountingPage } from "@/components/counting-page";
import { Shell } from "@/components/site-chrome";

export const Route = createFileRoute("/counting")({
  head: () => ({
    meta: [
      { title: "Counting · Continuous Audit Election Infrastructure" },
      {
        name: "description",
        content:
          "Paper ballots, emoji sequences, public canaries, three-way reconciliation, injected test ballots, and a risk-limiting audit.",
      },
    ],
  }),
  component: CountingRoute,
});

function CountingRoute() {
  return (
    <Shell>
      <CountingPage />
    </Shell>
  );
}
