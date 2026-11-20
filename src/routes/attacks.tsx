import { createFileRoute } from "@tanstack/react-router";
import { AttacksPage } from "@/components/attacks-page";
import { Shell } from "@/components/site-chrome";

export const Route = createFileRoute("/attacks")({
  head: () => ({
    meta: [
      { title: "Attacks · Continuous Audit Election Infrastructure" },
      {
        name: "description",
        content:
          "Known attacks on the continuous-audit election design, graded PREVENT, DETECTED, RESIDUAL, or PARTIAL.",
      },
    ],
  }),
  component: AttacksRoute,
});

function AttacksRoute() {
  return (
    <Shell>
      <AttacksPage />
    </Shell>
  );
}
