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
          <a href="#audit">Audit</a>
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
              <strong>Ordinary receipts stay private.</strong> Looking is not the same as publishing.
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
                The checksum, if they compute one, never has to leave the phone.
                <CryptoFairy /> Secrecy is the default.
              </p>
            </div>
            <div className="fork-arm is-public">
              <p className="step-n">Public canary</p>
              <p className="step-title">Checksum enters the log</p>
              <p className="step-text">
                Known person, known party line, published <Term id="commitment">checksum</Term>. Outsiders can
                recompute it. Their written <Term id="observer-report" /> is still not the count.
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
            <Term id="scanner-total" /> are <Term id="three-way">reconciled</Term>. Captains from both sides
            can watch the arithmetic. Their notes do not replace it.
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
          note="Check-ins ≈ paper ≈ scanner. Knock out one of those three and the other two still disagree. That is detection, not a failed design. The card is a real failure only when all three were moved together, so nothing is left to disagree. That limit is named below."
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
        id="audit"
        n="05 / The sample is not a fixed percent"
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
          Full control of ballot production, issuance, and <Term id="chain-of-custody" />, plus suppressed
          observers, can still insert matching illegitimate paper. A recount and the risk-limiting audit then
          confirm the stuffed result. Errors under the risk limit can remain.
        </Limit>
      </Tail>
    </article>
  );
}
