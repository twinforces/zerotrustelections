import { Bars, Compare, FlowBlock, PageIntro, Steps } from "@/components/flow";
import { DiveList, Limit, PrimerList, Tail } from "@/components/page-bits";
import { CryptoFairy } from "@/components/crypto-fairy";
import { Term } from "@/components/term";

const PRIMERS = [
  {
    href: "https://verifiedvoting.org/audits/whatisrla/",
    label: "What is a risk-limiting audit?",
    source: "Verified Voting",
  },
  {
    href: "https://www.eac.gov/election-officials/election-management-guidelines",
    label: "Paper, custody, and election-day handling",
    source: "U.S. Election Assistance Commission",
  },
];

function FanOut({ from, targets }: { from: [number, number]; targets: [number, number][] }) {
  return targets.map(([x, y]) => (
    <line key={`${x}-${y}-out`} className="fan-wire" x1={from[0]} y1={from[1]} x2={x} y2={y} />
  ));
}

function FanIn({ sources, to }: { sources: [number, number][]; to: [number, number] }) {
  return sources.map(([x, y]) => (
    <line key={`${x}-${y}-in`} className="fan-wire" x1={x} y1={y} x2={to[0]} y2={to[1]} />
  ));
}

function FanBox({
  x,
  y,
  w,
  h,
  title,
  detail,
  canon = false,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  detail: string;
  canon?: boolean;
}) {
  const cx = x + w / 2;
  return (
    <g>
      <rect className={canon ? "fan-box is-canon" : "fan-box"} x={x} y={y} width={w} height={h} rx="3" />
      <text className="fan-label" x={cx} y={y + 22} textAnchor="middle">
        {title}
      </text>
      <text className="fan-detail" x={cx} y={y + 40} textAnchor="middle">
        {detail}
      </text>
    </g>
  );
}

function ImagePipeline() {
  return (
    <figure className="fan-figure">
      <svg className="fan-diagram" viewBox="0 0 460 548" role="img" aria-labelledby="fan-title fan-desc">
        <title id="fan-title">One ballot, three scanners, one image, three counters, one tally</title>
        <desc id="fan-desc">
          One paper ballot fans out to three scanners. Those pictures combine into one canonical image. That
          image fans out to three counters. Those counts combine into one canonical tally. The images are
          published so anyone can run their own counting software.
        </desc>
        <defs>
          <marker id="fan-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path fill="#2ec4b6" d="M 0 0 L 10 5 L 0 10 z" />
          </marker>
        </defs>
        <FanOut from={[230, 64]} targets={[[76, 94], [230, 94], [384, 94]]} />
        <FanIn sources={[[76, 160], [230, 160], [384, 160]]} to={[230, 190]} />
        <FanOut from={[230, 256]} targets={[[76, 302], [230, 302], [384, 302]]} />
        <FanIn sources={[[76, 368], [230, 368], [384, 368]]} to={[230, 406]} />
        <line className="fan-wire" x1="230" y1="472" x2="230" y2="492" />
        <FanBox x={150} y={8} w={160} h={50} title="1 ballot" detail="paper" canon />
        <FanBox x={12} y={100} w={128} h={54} title="Scanner 1" detail="image" />
        <FanBox x={166} y={100} w={128} h={54} title="Scanner 2" detail="image" />
        <FanBox x={320} y={100} w={128} h={54} title="Scanner 3" detail="image" />
        <FanBox x={110} y={196} w={240} h={54} title="Canonical image" detail="the scanners agree" canon />
        <FanBox x={12} y={308} w={128} h={54} title="Counter 1" detail="own code" />
        <FanBox x={166} y={308} w={128} h={54} title="Counter 2" detail="own code" />
        <FanBox x={320} y={308} w={128} h={54} title="Counter 3" detail="own code" />
        <FanBox x={110} y={412} w={240} h={54} title="Canonical tally" detail="the counters match" canon />
        <FanBox x={90} y={498} w={280} h={44} title="Public images" detail="anyone can run a counter" canon />
      </svg>
      <figcaption className="fan-caption">
        One ballot goes to three scanners. The three pictures become one canonical image only if they agree,
        including the known test ballots against the pictures committed in advance.
        <CryptoFairy /> That image goes to three counters, each its own code. They become one canonical tally
        only if they match exactly. If either meeting fails, there is no electronic total: the audit expands,
        or the contest takes the mulligan path. The agreed images are published, with no voter identity, so
        anyone can run their own counting software on them.
      </figcaption>
    </figure>
  );
}

export function CountingPage() {
  return (
    <article>
      <PageIntro
        kicker="Counting"
        title="From the mark on the paper to arithmetic anyone can redo."
        lede="Paper is the record. A unique emoji sequence stops a similar name from stealing the mark. Some observers publish the ballot they cast. Then the precinct checks three totals, subtracts one public constant, and samples more paper as the margin shrinks."
      >
        <nav className="page-jumps" aria-label="Counting flows">
          <a href="#ballot">Ballot</a>
          <a href="#canary">Canary</a>
          <a href="#reconcile">Reconcile</a>
          <a href="#constant">Constant</a>
          <a href="#firmware">Firmware</a>
          <a href="#audit">Audit</a>
          <a href="#custody">Custody</a>
        </nav>
      </PageIntro>

      <FlowBlock
        id="ballot"
        n="01 / The paper"
        title="The ballot names the candidate twice: words, then a mark."
        lede={
          <>
            Every candidate has an <Term id="emoji-sequence" />, part self-chosen and part party-assigned. It
            is printed on the ballot and on all campaign materials. That is the defense against{" "}
            <Term id="fake-dan-sullivan">Fake Dan Sullivan</Term>. The sequence is also the visual half of the
            voter's <Term id="commitment">checksum</Term>.
          </>
        }
      >
        <div className="ballot-flow">
          <div className="ballot" aria-label="Sample ballot line">
            <p className="ballot-kicker">Ballot · one contest</p>
            <p className="ballot-name">
              Dana Sullivan
              <span className="ballot-marks" aria-hidden="true">
                🌲 ⚓ 🔔
              </span>
              <span className="sr-only">, sequence tree, anchor, bell</span>
            </p>
            <p className="ballot-name is-other">
              Dana Sullivan
              <span className="ballot-marks" aria-hidden="true">
                🌙 📐 🪶
              </span>
              <span className="sr-only">, a different person, sequence moon, triangle, feather</span>
            </p>
            <p className="ballot-foot">Same name. Different sequence. The yard sign matches only one of them.</p>
          </div>
          <p className="record-arrow">
            <span aria-hidden="true">→</span>
            <span className="sr-only">Then the voter checks and deposits paper</span>
          </p>
          <ol className="ballot-side">
            <li>
              <strong>Paper is marked.</strong> The <Term id="paper-ballot">paper ballot</Term> is the record
              of truth. The scanner's reading is an interpretation.
            </li>
            <li>
              <strong>Optional phone check.</strong> A phone computes the expected checksum from a voter
              identifier plus the emoji sequence.
              <CryptoFairy /> The voter can confirm the paper is{" "}
              <Term id="cast-as-intended" /> before it goes in the box.
            </li>
            <li>
              <strong>After it is cast.</strong> The phone may show the checksum recorded for that ballot ID.
              <CryptoFairy /> A public list of cast checksums is published, so the voter can see that theirs
              is there. An audio rendering of that checksum, and optionally the emoji sequence, is archived
              for the voter: in the app, on mailed media, or by phone playback. None of it can be generated
              before the ballot is cast and the ID is known.
            </li>
            <li>
              <strong>Help is not one marker.</strong> Assisted marking happens with observers from both major
              parties present, or one party observer plus an independent observer. The voter may still choose
              a personal assistant. That assistant may not be the only person marking unless those observers
              are also there. The ledger records the voter, the assistant, and the observers.
              <CryptoFairy />
            </li>
            <li>
              <strong>Ordinary receipts stay private.</strong> Looking is not the same as publishing who you
              voted for. The public list is checksums, not names.
            </li>
          </ol>
        </div>
      </FlowBlock>

      <FlowBlock
        id="canary"
        n="02 / Not every ballot is secret"
        title="A public canary publishes one known ballot."
        lede={
          <>
            A <Term id="precinct-captain">precinct captain</Term>, or any other observer, may reject secrecy
            and vote a known party line. That checksum must appear in the published log.
            <CryptoFairy /> Everyone else keeps a private receipt.
          </>
        }
      >
        <div className="fork" role="group" aria-label="Private ballot and public canary">
          <div className="fork-stem">
            <p className="step-n">Ballot cast</p>
            <p className="step-title">Same paper rules</p>
            <p className="step-text">Both paths mark a real ballot. Only one path gives up secrecy.</p>
          </div>
          <div className="fork-arms">
            <div className="fork-arm">
              <p className="step-n">Ordinary voter</p>
              <p className="step-title">Receipt stays private</p>
              <p className="step-text">
                The checksum, if they compute one, never has to name them. A public list of checksums lets
                them confirm theirs appears.
                <CryptoFairy /> Secrecy of the choice is the default.
              </p>
            </div>
            <div className="fork-arm is-public">
              <p className="step-n">Public canary</p>
              <p className="step-title">Checksum enters the log</p>
              <p className="step-text">
                Known person, known party line, published <Term id="commitment">checksum</Term>. Their{" "}
                <Term id="ballot-image" /> is published with a stable public identifier, so outsiders can match
                the picture to the checksum they release later. A missing or mismatched canary image is a
                detection. Their written <Term id="observer-report" /> is still not the count.
              </p>
            </div>
          </div>
        </div>
      </FlowBlock>

      <FlowBlock
        id="reconcile"
        n="03 / Before the box leaves"
        title="Three counts, one room."
        lede={
          <>
            At close, <Term id="check-in">check-ins</Term>, paper secured, and the{" "}
            <Term id="scanner-total" /> are <Term id="three-way">reconciled</Term>. A check-in is also written
            to that voter's phone, with the time and place, so an unexpected one can be flagged while the
            election is open or during the cure window. Captains from both sides can watch the arithmetic.
            Their notes do not replace it.
          </>
        }
      >
        <Compare
          label="Three-way reconciliation"
          columns={[
            { figure: "Check-ins", title: "Ballots issued", text: "People who received a ballot in this room." },
            { figure: "Paper", title: "Ballots secured", text: "Physical paper in the box. This is the record." },
            { figure: "Scanner", title: "Electronic total", text: "What the machines say the paper said." },
          ]}
          note="Check-ins ≈ paper ≈ scanner. Knock out one of those three and the other two still disagree. That is detection, not a failed design. A material gap authorizes a mulligan of that contest. The card is a real failure only when all three were moved together, so nothing is left to disagree. That limit is named below."
        />
      </FlowBlock>

      <FlowBlock
        id="constant"
        n="04 / One number everyone subtracts"
        title="Injected test ballots are a public constant."
        lede={
          <>
            <Term id="injected-ballot">Test ballots</Term> are a fixed, publicly known count per candidate.
            People watch them go in. Official totals subtract that same constant. Raw and adjusted figures are
            both published.
          </>
        }
      >
        <Steps
          label="How the injected constant is applied"
          items={[
            {
              title: "The constant is public first",
              text: "Same number per candidate, statewide or per precinct. It is not a surprise on election night.",
            },
            {
              title: "Insertion is watched",
              text: "The test ballots enter where observers can see them. They are ballots, not a hidden offset in software.",
            },
            {
              title: "Everyone subtracts it",
              text: "Official totals take off that constant. A precinct that skips the subtraction disagrees with the public arithmetic.",
            },
            {
              title: "Both figures stay up",
              text: "Raw total and adjusted total sit side by side. The subtraction is checkable without a vendor.",
            },
          ]}
        />
      </FlowBlock>

      <FlowBlock
        id="firmware"
        n="05 / The machines do not get a vote"
        title="Three scanners. Three counters. Then the pictures go public."
        lede={
          <>
            A scanner produces a <Term id="ballot-image" /> and nothing else. Three of them have to agree.
            At least three programs, written separately, count that picture and have to match exactly. The
            images are published, so anyone can run their own counting software. Paper is still the record.
          </>
        }
      >
        <ImagePipeline />
      </FlowBlock>

      <FlowBlock
        id="audit"
        n="06 / The sample is not a fixed percent"
        title="A closer race pulls more paper."
        lede={
          <>
            A <Term id="rla">risk-limiting audit</Term> compares a random sample of paper with the machine
            reading, after unofficial results and before <Term id="certification" />. The <Term id="margin" />{" "}
            and a pre-set <Term id="risk-limit" /> set the size. The <Term id="random-seed" /> is public.
          </>
        }
      >
        <Bars
          label="Sample size grows as the margin shrinks"
          rows={[
            { label: "Wide margin", width: "22%", text: "A small sample of paper can meet the risk limit." },
            { label: "Narrow margin", width: "62%", text: "The sample grows. Close races are not waved through." },
            { label: "A mismatch", width: "100%", text: "Keep drawing until the limit is met, or count every ballot by hand." },
          ]}
        />
      </FlowBlock>

      <FlowBlock
        id="custody"
        n="07 / The box changes hands"
        title="One person does not both issue the paper and keep it."
        lede={
          <>
            These <Term id="chain-of-custody" /> controls do not make a sole-custody attack impossible. They
            move it outside normal procedure, so the public sample can see the violation before certification.
          </>
        }
      >
        <Steps
          label="Paper-custody controls"
          items={[
            {
              title: "Roles split",
              text: "The same person, or an unchecked team, may not both produce or issue ballots and hold sole custody through tabulation. An opposing-party or independent observer is present for issuance and for the hand-off.",
            },
            {
              title: "If they cannot split, they film it",
              text: "A site that cannot separate the roles live-streams, or immediately publishes, video of issuance, seal application, and container opening.",
            },
            {
              title: "Two parties seal the box",
              text: "Containers leave under seals controlled by two different parties, or by an official and an observer. Opening needs both.",
            },
            {
              title: "The issued count is public before close",
              text: (
                <>
                  The number of ballots issued per precinct is published, or hash-committed, before polls close.
                  <CryptoFairy /> Provisional counts and reason codes go out with that same commitment.
                </>
              ),
            },
            {
              title: "A random set of precincts is pulled",
              text: "A public-random subset is selected for an immediate off-site hand count, or a transfer to different custody, before the main tabulation. A provisional rate well above that precinct's history adds it to the draw.",
            },
          ]}
        />
      </FlowBlock>

      <Tail>
        <h2 className="font-serif text-3xl font-medium">What the observers are for</h2>
        <p className="mt-4 max-w-3xl text-pretty text-muted">
          <Term id="precinct-captain">Local observers</Term> watch the simple signals: the three-way check, the
          injected offset, canary checksums,
          <CryptoFairy /> and local aggregates. An observer report is not a fourth total.
          Paper and the published figures are.
        </p>
        <DiveList section="counting" />
        <PrimerList items={PRIMERS} />
        <Limit>
          Defeating the published custody, observation, and challenge controls is a dystopia. No technical
          design can guarantee a clean result there. The sample and the attribution exist so the failure is
          named and litigated, and, where the <Term id="principle-mulligan">mulligan</Term> statute applies,
          re-run at the perpetrators' expense instead of silently certified. Ordinary operation is judged
          against the controls as written. Errors under the risk limit can remain. Oracles stay trusted. Very
          few people checking slows detection. A material, attributed detection also carries{" "}
          <Term id="principle-detection">consequences that outlast the election</Term>: removal, prosecution,
          and a fine of twice the re-run.
        </Limit>
      </Tail>
    </article>
  );
}
