import { createFileRoute } from "@tanstack/react-router";
import { HardwarePage } from "@/components/hardware-page";
import { Shell } from "@/components/site-chrome";

export const Route = createFileRoute("/hardware")({
  head: () => ({
    meta: [
      { title: "Hardware · Continuous Audit Election Infrastructure" },
      {
        name: "description",
        content:
          "Why a dumb scanner is enough: standard ballots, image agreement, external test oracles, a physical shuffler, public images, captain canaries, and three independent counters.",
      },
    ],
  }),
  component: HardwareRoute,
});

function HardwareRoute() {
  return (
    <Shell>
      <HardwarePage />
    </Shell>
  );
}
