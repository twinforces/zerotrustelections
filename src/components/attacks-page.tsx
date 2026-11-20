import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageIntro } from "@/components/flow";
import { Term } from "@/components/term";
import { VERDICTS, attackGroups, type Verdict } from "@/content/attacks";

const GRADES = VERDICTS.filter((item) => item.id !== "ALL");

export function AttacksPage() {
  const [grade, setGrade] = useState<Verdict | "ALL">("ALL");
  const groups = useMemo(
    () =>
      attackGroups
        .map((group) => ({
          ...group,
          items: group.items.filter((item) => grade === "ALL" || item.verdict === grade),
        }))
        .filter((group) => group.items.length > 0),
    [grade],
  );

  return (
    <article>
      <PageIntro
        kicker="Attacks"
        title="Known attacks, and what the baseline does with each one."
        lede="These four words grade the catalog. They are not the red-team card. A session still ends in FAILURE, DETECTED, or DESIGN HELD."
      >
        <ul className="grade-key">
          {GRADES.map((item) => (
            <li key={item.id}>
              <span className={`verdict is-${item.id.toLowerCase()}`}>{item.label}</span>
              <span>{item.means}</span>
            </li>
          ))}
        </ul>
      </PageIntro>

      <div className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-8">
          <div className="seg attack-filters" role="group" aria-label="Filter by grade">
            {VERDICTS.map((item) => (
              <button
                key={item.id}
                type="button"
                className={grade === item.id ? "is-on" : ""}
                aria-pressed={grade === item.id}
                onClick={() => setGrade(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {groups.map((group) => (
        <section key={group.id} id={group.id} className="section-anchor border-b border-line">
          <div className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
            <h2 className="font-serif text-3xl font-medium">{group.title}</h2>
            <ul className="mt-6">
              {group.items.map((item) => (
                <li key={item.name} className="attack-row">
                  <p className={`verdict is-${item.verdict.toLowerCase()}`}>{item.verdict}</p>
                  <div className="min-w-0">
                    <p className="font-semibold text-pretty text-ink">{item.name}</p>
                    <p className="mt-1 text-pretty text-muted">{item.handling}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
          <h2 className="max-w-3xl font-serif text-3xl font-medium text-balance">What is left.</h2>
          <p className="mt-4 max-w-3xl text-pretty text-muted">
            Most of the technical and historical attacks are PREVENT or DETECTED under the current baseline.
            Check-in acknowledgement and provisional acknowledgement are what moved photo-swap impersonation
            and the provisional side door off a silent FAILURE. Photo-swap is PARTIAL, because people who
            never open the phone check are still exposed. The provisional side door is DETECTED.
          </p>
          <h3 className="mt-10 font-serif text-2xl font-medium">A dystopia is out of scope.</h3>
          <p className="mt-4 max-w-3xl text-pretty text-muted">
            Some RESIDUAL cases assume the room is no longer an election. One actor controls production,
            issuance, and custody, and the paper matches the lie. Observers are suppressed so nobody sees it.
            Voters are intimidated or swatted at the polls. A clean result inside that dystopia is not a
            missing feature. It is out of scope. A poisoned oracle is not in that bucket. A bad death file can
            happen in an ordinary jurisdiction, and the design still trusts the feed. That residual stays.
          </p>
          <h3 className="mt-10 font-serif text-2xl font-medium">A detection is a mulligan.</h3>
          <p className="mt-4 max-w-3xl text-pretty text-muted">
            If a signal surfaces an attack, the statute declares that election void and it is run again. Real
            law is strangely averse to this. It tries to repair a tainted count in place. That is the harder
            problem, and this design refuses it. <Term id="principle-mulligan">Detection is useful</Term>{" "}
            because the remedy is a re-run, not a reconstruction. The dystopia cases are not fixed by a
            re-run. There is no honest election left to repeat.
          </p>
          <p className="mt-4 max-w-3xl text-pretty text-muted">
            This list is the author's catalog. It is not a finished red-team log, and it is not proof the
            design survives a real room.{" "}
            <Link className="prose-link font-normal" to="/red-team">
              Throw your own scenario
            </Link>
            .
          </p>
        </div>
      </section>
    </article>
  );
}
