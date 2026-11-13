import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/site-chrome";
import { HomePage } from "@/components/home-page";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <Shell>
      <HomePage />
    </Shell>
  );
}
