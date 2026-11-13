import { createFileRoute } from "@tanstack/react-router";
import { RegistrationPage } from "@/components/registration-page";
import { Shell } from "@/components/site-chrome";

export const Route = createFileRoute("/registration")({
  head: () => ({
    meta: [
      { title: "Registration · Continuous Audit Election Infrastructure" },
      {
        name: "description",
        content:
          "How a voter registration, a death, and a move are written: soft-delete only, on an append-only ledger.",
      },
    ],
  }),
  component: RegistrationRoute,
});

function RegistrationRoute() {
  return (
    <Shell>
      <RegistrationPage />
    </Shell>
  );
}
