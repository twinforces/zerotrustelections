import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/flow";
import { Term } from "@/components/term";
import {
  BASELINE_GIST,
  DETECTED_BULLETS,
  FAILURE_BULLETS,
  RED_TEAM_PROMPT,
  RED_TEAM_URL,
} from "@/content/red-team";

export function RedTeamPage() {
  return (
    <article>
      <PageIntro
        kicker="Red team"
        title="One signal down is not a failure."
        lede="Zero trust is the starting assumption. A hostile room, by itself, is not a failed design. FAILURE means no independent signal is left. If you compromise one of the three and the other two still catch it, the card is DETECTED."
      />
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
          <dl className="grid gap-6 border-y border-line py-6 sm:grid-cols-3">
            <div>
              <dt className="text-xs font-semibold tracking-widest text-hazard-red uppercase">Failure</dt>
              <dd className="mt-2 text-sm text-pretty text-muted">
                The attacker gets through and nothing independent is left to disagree. Check-ins, paper, and
                the scanner were all moved together.
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold tracking-widest text-detect-amber uppercase">Detected</dt>
              <dd className="mt-2 text-sm text-pretty text-muted">
                The attack has an effect, and at least one signal still shows it. Take out the scanner. Paper
                and check-ins still match each other and not the machine.
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold tracking-widest text-teal uppercase">Design held</dt>
              <dd className="mt-2 text-sm text-pretty text-muted">
                The attack is prevented, or it is impractical under the stated assumptions. A quiet success is
                less interesting than a hole.
              </dd>
            </div>
          </dl>

          <div className="mt-8 grid min-w-0 items-start gap-6 lg:grid-cols-2">
            <figure className="min-w-0">
              <figcaption className="mb-3 text-xs font-semibold tracking-widest text-faint uppercase">
                Sample failure
              </figcaption>
              <article className="failure-card" aria-label="Sample failure card, captured chain of custody">
                <div className="failure-stripe" aria-hidden="true" />
                <div className="px-5 py-6 sm:px-7 sm:py-7">
                  <p className="text-xs font-semibold tracking-widest text-hazard-red uppercase">
                    Scenario · Captured chain of custody
                  </p>
                  <p className="card-word failure-word mt-4">FAILURE</p>
                  <ul className="mt-6 space-y-3 text-base leading-snug font-semibold text-hazard-ink">
                    {FAILURE_BULLETS.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span aria-hidden="true" className="mt-2 inline-block size-1.5 shrink-0 bg-hazard-red" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </figure>

            <figure className="min-w-0">
              <figcaption className="mb-3 text-xs font-semibold tracking-widest text-faint uppercase">
                Sample detection
              </figcaption>
              <article className="detected-card" aria-label="Sample detected card, scanner under-count">
                <div className="detected-stripe" aria-hidden="true" />
                <div className="px-5 py-6 sm:px-7 sm:py-7">
                  <p className="text-xs font-semibold tracking-widest text-detect-amber uppercase">
                    Scenario · Scanner under-count
                  </p>
                  <p className="card-word detected-word mt-4">DETECTED</p>
                  <ul className="mt-6 space-y-3 text-base leading-snug font-semibold text-detect-ink">
                    {DETECTED_BULLETS.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span aria-hidden="true" className="mt-2 inline-block size-1.5 shrink-0 bg-detect-amber" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </figure>
          </div>

          <div className="mt-10 grid min-w-0 items-start gap-6 lg:grid-cols-2">
            <figure className="min-w-0">
              <figcaption className="mb-3 text-xs font-semibold tracking-widest text-faint uppercase">
                Illustrative mock of the session
              </figcaption>
              <div className="grok-mock" aria-hidden="true">
                <div className="grok-bar">
                  <span className="text-sm font-semibold tracking-wide">Grok</span>
                  <span className="grok-pill">grok.com</span>
                </div>
                <div className="space-y-4 px-4 py-5">
                  <div className="flex gap-3">
                    <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-sm bg-teal text-xs font-bold text-navy">
                      G
                    </span>
                    <p className="grok-msg">What are your main concerns about US elections?</p>
                  </div>
                  <p className="grok-aside">
                    Next it asks you to pick a role: official, voter, observer, candidate, legislator, or your
                    own.
                  </p>
                </div>
                <div className="grok-compose">
                  <span>Your concern, in your words</span>
                  <span className="font-semibold text-teal">Send</span>
                </div>
              </div>
              <p className="mt-3 text-sm text-faint">
                A picture of the opening question, not a live session. The button opens grok.com with the
                baseline preloaded.
              </p>
            </figure>

            <div className="min-w-0">
              <a className="btn btn-primary" href={RED_TEAM_URL} target="_blank" rel="noopener noreferrer">
                Open a red-team session
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
              <ol className="mt-6 list-decimal space-y-2 pl-5 text-muted">
                <li>Click the link. Grok fetches the baseline and asks what concerns you.</li>
                <li>Answer, then pick a role, or name your own.</li>
                <li>Throw scenarios until you get a FAILURE or DETECTED card. Screenshot it or save the text.</li>
              </ol>
              <p className="mt-4 text-sm text-faint">
                The session follows the public gist. <Term id="failure-card">PARTIAL</Term> is retired.{" "}
                <a className="prose-link font-normal" href={BASELINE_GIST}>
                  Read the baseline
                </a>
                .
              </p>
              <details className="fold mt-6">
                <summary>What the link sends</summary>
                <div className="fold-body">
                  <pre className="overflow-x-auto text-sm whitespace-pre-wrap text-ink">{RED_TEAM_PROMPT}</pre>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}