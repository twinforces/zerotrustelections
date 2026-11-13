import { createFileRoute } from "@tanstack/react-router";
import { RedTeamPage } from "@/components/red-team-page";
import { Shell } from "@/components/site-chrome";

export const Route = createFileRoute("/red-team")({
  head: () => ({
    meta: [
      { title: "Red team · Continuous Audit Election Infrastructure" },
      {
        name: "description",
        content: "Open a Grok red-team session against the continuous-audit election design.",
      },
    ],
  }),
  component: RedTeamRoute,
});

function RedTeamRoute() {
  return (
    <Shell>
      <RedTeamPage />
    </Shell>
  );
}
