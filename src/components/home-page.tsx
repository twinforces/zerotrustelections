import { Link } from "@tanstack/react-router";
import { CryptoFairy } from "@/components/crypto-fairy";

const WHO = [
  {
    who: "A voter",
    job: "Stay on the roll, and have the ballot you marked be the one that is counted.",
  },
  {
    who: "An official",
    job: "Keep an accurate roll, and produce a total you can defend.",
  },
  {
    who: "An observer, or a party",
    job: "Watch the list and the count while they are still happening.",
  },
  {
    who: "A court, a legislator, or the public",
    job: "Follow a paper trail that is still there when someone asks.",
  },
];

const PAINS = [
  "A name can leave the roll and nobody sees it that day.",
  "Moves, deaths, and aging look like fraud. Fraud looks like ordinary churn.",
  "A machine can add ballots, or change what a ballot said, and the room finds out late.",
  "The people in the room can lie, or miss it. Their word is not a record.",
  "The challenge arrives after the boxes have moved. It is slow, and it is expensive.",
];

const GAINS = [
  "You can see your own row now, and you can check the paper before it goes in the box.",
  "The public arithmetic is redoable the same day. No records request required.",
  "A large gap shows up while the paper is still in the room.",
  "The record a court reads was written when it happened. Nothing was erased to clean the story.",
];

const VALUE = [
  {
    who: "Voters",
    get: "Your status, immediately. An optional check that the ballot says what you meant. The receipt stays private unless you choose otherwise.",
  },
  {
    who: "Officials",
    get: "Every change has a name on it. The arithmetic warns you early. The paper sample is what you defend with.",
  },
  {
    who: "Observers",
    get: "A public sample all day, instead of a black box you are told to trust after the fact.",
  },
  {
    who: "Courts and the public",
    get: "A contestable trail: sourced roll changes, paper, and both the raw total and the adjusted one.",
  },
];

export function HomePage() {
  return (
    <>
      <header className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pt-14 pb-12 sm:pt-20 sm:pb-16">
          <p className="text-xs font-semibold tracking-widest text-faint uppercase">
            Design baseline · 13 November 2026 · @GrumpyTechBro
          </p>
          <div className="mt-4 flex items-start gap-4">
            <img className="brand-mark" src="/grumpy.jpg" width={44} height={44} alt="GrumpyTechBro" />
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
          <p className="mt-6 max-w-2xl text-pretty text-lg text-ink">
            If you are one of the people below, you already have a job to do. You cannot do it with a roll and
            a count that only explain themselves after the fact.
          </p>
        </div>
      </header>

      <section className="border-b border-line" aria-labelledby="who-title">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
          <p className="text-xs font-semibold tracking-widest text-teal uppercase">If you are</p>
          <h2 id="who-title" className="mt-3 max-w-3xl font-serif text-3xl font-medium text-balance sm:text-4xl">
            One of these. This is the job you are trying to do.
          </h2>
          <ul className="sell-grid cols-4">
            {WHO.map((item) => (
              <li key={item.who} className="sell-card">
                <p className="font-semibold text-ink">{item.who}</p>
                <p className="mt-2 text-pretty text-muted">{item.job}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-line" aria-labelledby="pain-title">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
          <p className="text-xs font-semibold tracking-widest text-teal uppercase">But you can't, because</p>
          <h2 id="pain-title" className="mt-3 max-w-3xl font-serif text-3xl font-medium text-balance sm:text-4xl">
            The roll and the count hide the change until it is expensive to argue about.
          </h2>
          <ul className="sell-list">
            {PAINS.map((pain) => (
              <li key={pain}>{pain}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-line" aria-labelledby="does-title">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
          <p className="text-xs font-semibold tracking-widest text-teal uppercase">So this does</p>
          <h2 id="does-title" className="mt-3 max-w-3xl font-serif text-3xl font-medium text-balance sm:text-4xl">
            Two watched processes. Neither one waits for the lawsuit.
          </h2>
          <div className="sell-grid cols-2">
            <div className="sell-card">
              <p className="text-xs font-semibold tracking-widest text-teal uppercase">The roll</p>
              <ul className="sell-points">
                <li>
                  Every change is signed and kept. A removal sets valid=false. The row stays.
                  <CryptoFairy />
                </li>
                <li>The public sees the counts the same day.</li>
                <li>You can open your own row on a phone.</li>
                <li>
                  A mistake is reversed by another write. Election day does not wait on a live nationwide
                  rewrite.
                </li>
              </ul>
            </div>
            <div className="sell-card">
              <p className="text-xs font-semibold tracking-widest text-teal uppercase">The count</p>
              <ul className="sell-points">
                <li>Paper is the record. An emoji sequence keeps a lookalike name from being the only mark.</li>
                <li>
                  A phone can checksum that mark. Ordinary receipts stay private.
                  <CryptoFairy />
                </li>
                <li>A fixed number of test ballots is public. Everyone subtracts the same number.</li>
                <li>
                  Before the box leaves, check-ins, paper, and the scanner have to agree. A closer race pulls
                  more paper. Observers from both sides watch. Their notes are not the total.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line" aria-labelledby="gain-title">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
          <p className="text-xs font-semibold tracking-widest text-teal uppercase">So you get</p>
          <h2 id="gain-title" className="mt-3 max-w-3xl font-serif text-3xl font-medium text-balance sm:text-4xl">
            A change you can see, a total you can redo, and paper that is still the record.
          </h2>
          <ul className="sell-list">
            {GAINS.map((gain) => (
              <li key={gain}>{gain}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-line" aria-labelledby="value-title">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
          <p className="text-xs font-semibold tracking-widest text-teal uppercase">Which is worth this</p>
          <h2 id="value-title" className="mt-3 max-w-3xl font-serif text-3xl font-medium text-balance sm:text-4xl">
            Depending on which job is yours.
          </h2>
          <ul className="sell-grid cols-4">
            {VALUE.map((item) => (
              <li key={item.who} className="sell-card">
                <p className="font-semibold text-ink">{item.who}</p>
                <p className="mt-2 text-pretty text-muted">{item.get}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-pretty text-muted">
            Jobs, then the reason you cannot do them, then what this does, then what you get. That is the
            whole offer.
          </p>
        </div>
      </section>

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
        <div className="mx-auto max-w-6xl px-5 py-12 sm:py-14">
          <div id="crypto-fairy" className="fairy-note">
            <CryptoFairy large />
            <div className="min-w-0">
              <h2 className="font-serif text-2xl font-medium">The Crypto Fairy</h2>
              <p className="mt-2 max-w-2xl text-pretty text-muted">
                Look, just because I can do crypto, and can kind of sort of follow the math, and have my own
                shitcoin, $GRUMPYSHITCOIN, doesn't mean I take crypto seriously. When you see this, that lets
                you know there's crypto stuff going on behind the scenes, to prove who/what/where.
              </p>
            </div>
          </div>
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
