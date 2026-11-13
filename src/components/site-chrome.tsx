import { Link, useRouterState } from "@tanstack/react-router";
import { BASELINE_GIST } from "@/content/red-team";

const NAV = [
  { to: "/registration", label: "Registration" },
  { to: "/counting", label: "Counting" },
  { to: "/red-team", label: "Red Team" },
  { to: "/glossary", label: "Glossary" },
  { to: "/receipts", label: "Receipts" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <header className="site-header sticky top-0 z-30 border-b border-line backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-1 px-5 py-2.5">
        <Link to="/" className="flex min-h-11 items-center gap-2.5 text-ink no-underline">
          <img className="brand-mark is-header" src="/grumpy.jpg" width={28} height={28} alt="" />
          <span className="text-sm font-semibold tracking-wide">
            <span className="sm:hidden">CAEI</span>
            <span className="hidden sm:inline">Continuous Audit</span>
          </span>
        </Link>
        <nav aria-label="Sections" className="flex flex-wrap justify-end gap-x-3">
          {NAV.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`nav-link text-sm ${active ? "is-active" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <ul className="grid gap-3 font-serif text-lg text-ink sm:grid-cols-3 sm:gap-6 sm:text-xl">
          <li>Perfect is the enemy of the good.</li>
          <li>Sunlight is the best disinfectant.</li>
          <li>A continuous sample is enough.</li>
        </ul>
        <div className="mt-8 flex flex-col gap-3 text-sm text-muted sm:flex-row sm:flex-wrap sm:gap-x-6">
          <a className="prose-link font-normal" href={BASELINE_GIST}>
            Design baseline
          </a>
          <Link className="prose-link font-normal" to="/dives">
            Notes
          </Link>
          <Link className="prose-link font-normal" to="/receipts">
            Receipts
          </Link>
          <a
            className="prose-link font-normal"
            href="https://www.grumpytechbro.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            a GrumpyTechBro joint
          </a>
          <a className="prose-link font-normal" href="https://x.com/GrumpyTechBro">
            @GrumpyTechBro
          </a>
          <span>A design proposal. Not an official election system.</span>
        </div>
      </div>
    </footer>
  );
}

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="content">{children}</main>
      <SiteFooter />
    </>
  );
}