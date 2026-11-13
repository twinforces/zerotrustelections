import { Link } from "@tanstack/react-router";
import { CryptoFairy } from "@/components/crypto-fairy";

export function HomePage() {
  return (
    <>
      <header className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pt-14 pb-12 sm:pt-20 sm:pb-16">
          <p className="text-xs font-semibold tracking-widest text-faint uppercase">
            Design baseline · 13 November 2026 · @GrumpyTechBro
          </p>
          <div className="mt-4 flex items-start gap-4">
            <img
              className="brand-mark"
              src="/grumpy.jpg"
              width={44}
              height={44}
              alt="GrumpyTechBro"
            />
            <div className="min-w-0">
              <h1 className="max-w-4xl font-serif text-4xl leading-tight font-medium text-balance text-ink sm:text-6xl">
                Continuous Audit Election Infrastructure
              </h1>
              <a
                className="joint-link mt-2 inline-flex min-h-11 items-center"
                href="https://www.grumpytechbro.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                a GrumpyTechBro joint
              </a>
            </div>
          </div>
          <p className="mt-5 max-w-2xl font-serif text-xl text-teal text-balance sm:text-2xl">
            Sunlight is the best disinfectant. Perfect is the enemy of the good.
          </p>
          <p className="mt-6 max-w-2xl text-pretty text-lg text-muted">
            Two processes, watched while they happen. The roll records every change. The count starts from
            paper and ends in arithmetic a person can redo.
          </p>
          <div id="crypto-fairy" className="fairy-note">
            <CryptoFairy large />
            <div className="min-w-0">
              <h2 className="font-serif text-2xl font-medium">The Crypto Fairy</h2>
              <p className="mt-2 max-w-2xl text-pretty text-muted">
                Look, just because I can do crypto, and can kind of sort of follow the math, and have my own
                shitcoin, $GRUMPYSHITCOIN, doesn't mean I take crypto seriously. When you see this, that
                lets you know there's crypto stuff going on behind the scenes, to prove who/what/where.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="process-grid border-b border-line" aria-label="The two processes">
        <div className="mx-auto grid max-w-6xl">
          <Link to="/registration" className="process-link">
            <p className="text-xs font-semibold tracking-widest text-teal uppercase">01 / Registration</p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-balance sm:text-4xl">
              The roll, one change at a time
            </h2>
            <ol className="process-points">
              <li>A voter registers. A record is created.</li>
              <li>A voter dies. The record stays, marked not valid.</li>
              <li>A voter moves. Location 1 changes to Location 2.</li>
            </ol>
            <p className="process-go">Open the registration flows</p>
          </Link>
          <Link to="/counting" className="process-link">
            <p className="text-xs font-semibold tracking-widest text-teal uppercase">02 / Counting</p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-balance sm:text-4xl">
              Paper, a visible mark, then the totals
            </h2>
            <ol className="process-points">
              <li>An emoji sequence stops a lookalike name.</li>
              <li>A public canary publishes one known ballot.</li>
              <li>Three totals, one constant, a sample that grows.</li>
            </ol>
            <p className="process-go">Open the counting flows</p>
          </Link>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-end sm:justify-between sm:py-14">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-widest text-teal uppercase">Red team</p>
            <h2 className="mt-3 font-serif text-3xl font-medium">Try to break it.</h2>
            <p className="mt-3 text-pretty text-muted">
              Load the baseline in Grok and throw scenarios. Taking out one signal is DETECTED if the other
              two still show it. FAILURE is only when nothing is left to see.
            </p>
          </div>
          <Link className="btn btn-primary shrink-0" to="/red-team">
            Open the red team
          </Link>
        </div>
      </section>
    </>
  );
}
