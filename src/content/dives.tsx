import type { ReactNode } from "react";
import { Term } from "@/components/term";

export type DiveSection = "registration" | "counting";

export type Dive = {
  slug: string;
  section: DiveSection;
  title: string;
  summary: string;
  lede: string;
  body: ReactNode;
};

export const dives: Dive[] = [
  {
    slug: "soft-delete",
    section: "registration",
    title: "Soft-delete only",
    summary: "valid=false, reversible, and signed. The old row stays readable.",
    lede: "A removal is a new transaction, not a vanished row. The record is marked invalid, the reason and the signer stay attached, and a later transaction can put it back.",
    body: (
      <>
        <p>
          A <Term id="soft-delete" /> sets <span className="font-semibold text-ink">valid=false</span> together
          with a timestamp, a reason code, and the signer identity. The prior state remains queryable. Putting
          the voter back on the roll is another attributed transaction. It is not an undo that eats the history.
        </p>
        <p>
          <Term id="hard-erasure" /> is forbidden. If a row can disappear, nobody can later tell a legal
          removal from a silent one. The <Term id="append-only" /> rule is what makes the mark useful: every
          change is sourced.
        </p>
        <p>
          Bulk changes are not a single clerk's privilege. An <Term id="endorsement-policy" /> requires
          multiple enrolled identities to sign before a large write is accepted. Writers are known members
          under a <Term id="msp">Membership Service Provider</Term>, holding certificates from a{" "}
          <Term id="certificate-authority" />.
        </p>
        <p>
          Full <Term id="pii">personally identifiable information</Term> stays in a{" "}
          <Term id="private-data">private data collection</Term>. The public does not see the person's file.
          The public sees the change as movement in the <Term id="aggregate">aggregates</Term>: daily removals,
          active totals, last-name frequencies.
        </p>
        <h2>What it does not do</h2>
        <p>
          An <Term id="oracle" /> can still feed a bad eligibility signal. The ledger records that the oracle
          was consulted and that a soft-delete followed. It does not audit Systematic Alien Verification for
          Entitlements (<Term id="save">SAVE</Term>) or the Electronic Registration Information Center (
          <Term id="eric">ERIC</Term>). A sourced mistake is still a mistake. It is no longer an invisible one.
        </p>
      </>
    ),
  },
  {
    slug: "public-aggregates",
    section: "registration",
    title: "Public aggregates",
    summary: "Last-name counts, daily removals, and rates anyone can watch.",
    lede: "The public channel publishes counts and distributions, not the voter file. A patterned removal moves those numbers even when individual names stay private.",
    body: (
      <>
        <p>
          The <Term id="world-state">public world state</Term> exposes active totals, daily removal counts,
          last-name frequency distributions, and high-level change rates. That is the whole public list.{" "}
          <Term id="pii">Personally identifiable information</Term> remains in{" "}
          <Term id="private-data">private data collections</Term>.
        </p>
        <p>
          Anyone can watch. No account, no party credential, no records request. A county that soft-deletes a
          last-name <Term id="cohort">cohort</Term> changes the frequency distribution. The names are not
          published. The shape of the change is.
        </p>
        <p>
          Daily removals are a rate, not a verdict. A spike is a reason to look, not proof of a motive.
          Scattered one-off errors can sit inside ordinary noise. Aggregates are the wide sensor. The{" "}
          <Term id="personal-view">personal phone view</Term> is the close one.
        </p>
        <h2>What it does not do</h2>
        <p>
          Aggregates will not catch a handful of carefully chosen names if nobody in that handful checks their
          own status and no distribution moves enough to see. That limit is why the design treats a{" "}
          <Term id="continuous-sample">continuous sample</Term> of personal checks as part of the same system,
          not as a nice-to-have.
        </p>
      </>
    ),
  },
  {
    slug: "personal-view",
    section: "registration",
    title: "Personal phone view",
    summary: "A voter sees their own status immediately. A small fraction checking is enough to sample.",
    lede: "Open the phone, read your own row. Optional cohort counts sit beside it. You do not need everyone enrolled for large patterned changes to surface.",
    body: (
      <>
        <p>
          The <Term id="personal-view" /> shows the voter their current status on the roll. Optionally it also
          shows anonymized <Term id="cohort">cohort counts</Term> for people who share a last name, a party, or
          a similar public trait. It does not show other people's records.
        </p>
        <p>
          Participation can stay modest. Overlapping checks are a <Term id="continuous-sample" />. If a
          cohort is marked <Term id="soft-delete">valid=false</Term> overnight, the people in it who look will
          see it, and the <Term id="aggregate">aggregates</Term> move for everyone else.
        </p>
        <p>
          Roll changes are slow on purpose. The <Term id="cap">CAP trade-off</Term> is managed by spending
          latency: months, not minutes. Election day does not wait on a live nationwide write. A dispute at the
          polls becomes a <Term id="provisional-ballot" />, resolved later against the audited log.
        </p>
        <h2>What it does not do</h2>
        <p>
          Very low adoption slows detection. The design names that <Term id="residual-risk" /> instead of
          assuming a viral app. A voter who never looks, in a cohort nobody else looks at, can still be moved
          quietly until an aggregate or a later provisional check catches the pattern.
        </p>
      </>
    ),
  },
  {
    slug: "emoji-sequences",
    section: "counting",
    title: "Emoji sequences",
    summary: "A unique mark on the ballot and on every campaign piece. Similar names stop being interchangeable.",
    lede: "Each candidate wears an emoji sequence, part self-chosen and part party-assigned. It is printed on the ballot and on all campaign materials, and it is the visual half of the voter's checksum.",
    body: (
      <>
        <p>
          An <Term id="emoji-sequence" /> is not decoration. A uniqueness threshold and a banned list keep two
          candidates from sharing one. The sequence shows up wherever the candidate asks for a vote, and on
          the <Term id="paper-ballot">paper</Term> the voter marks.
        </p>
        <p>
          That is the answer to <Term id="fake-dan-sullivan">Fake Dan Sullivan</Term>. Two people with the
          same name, or names close enough to fool a hurried reading, no longer look alike on the ballot. The
          yard sign and the ballot line carry the same marks. A lookalike printing that drops or swaps the
          sequence is visible before anyone needs a lawyer.
        </p>
        <p>
          The sequence is also the visual half of an optional <Term id="commitment">checksum</Term>. A phone
          computes the expected value from a voter identifier plus that sequence. The voter compares it with
          the ballot and can confirm the paper is <Term id="cast-as-intended" /> before depositing it.
          Ordinary voters keep that receipt private.
        </p>
        <h2>What it does not do</h2>
        <p>
          A correct mark on a stuffed ballot is still a stuffed ballot. The sequence tells you which candidate
          a piece of paper names. It does not, by itself, prove the paper was cast by an eligible voter.{" "}
          <Term id="chain-of-custody" /> and the later audits still have that job.
        </p>
      </>
    ),
  },
  {
    slug: "public-canaries",
    section: "counting",
    title: "Public canaries",
    summary: "Some observers reject secrecy and publish a known ballot. Everyone else keeps a private receipt.",
    lede: "Not every ballot is secret. A precinct captain, or any other observer, may vote a known party-line ballot and place the checksum in the published log.",
    body: (
      <>
        <p>
          A <Term id="canary">public canary</Term> chooses to be identifiable. The usual case is a{" "}
          <Term id="precinct-captain" /> voting the party's published line. The <Term id="commitment">checksum</Term>{" "}
          of that ballot must appear in the published log. Anyone can recompute it. That is an independent,
          human-visible audit chain: a known person, a known choice, a fingerprint that either survived the
          count or did not.
        </p>
        <p>
          Secrecy stays the default. Ordinary voters keep private receipts. Only the people who take the
          canary role give secrecy up. A captain who wants a private ballot is still a captain. They just do
          not add a public checksum.
        </p>
        <p>
          The checksum is not the same thing as an <Term id="observer-report" />. The report is their word
          about the room. The checksum is a checkable fact about one ballot. Their word is still not
          authoritative. Paper and the published figures are.
        </p>
        <h2>What it does not do</h2>
        <p>
          A handful of canaries does not prove every other ballot. It proves the pipeline counted those known
          ballots as cast, and it gives observers a public object to point at when the pipeline did not. It
          also does not repair a box of matching illegitimate paper. It makes a silent swap of a known ballot
          harder to hide.
        </p>
      </>
    ),
  },
  {
    slug: "three-way-reconciliation",
    section: "counting",
    title: "Three-way reconciliation",
    summary: "Check-ins, paper in the box, and scanner totals agree before anything leaves.",
    lede: "At precinct close, three counts should match closely enough that a material excess is obvious while the ballots are still in the room.",
    body: (
      <>
        <p>
          <Term id="paper-ballot">Paper</Term> is the record of truth. The{" "}
          <Term id="three-way">three-way reconciliation</Term> asks whether the room agrees with itself before
          that paper moves:
        </p>
        <ul>
          <li>
            <Term id="check-in">Check-ins</Term>, or ballots issued.
          </li>
          <li>Physical paper ballots secured.</li>
          <li>
            <Term id="scanner-total">Scanner totals</Term>, the electronic interpretation.
          </li>
        </ul>
        <p>
          Check-ins ≈ paper ≈ electronic totals. A material excess, more paper than people, or more electronic
          votes than paper, is visible before ballots leave the precinct. <Term id="precinct-captain">Precinct
          captains</Term>, including opposing ones, can watch this arithmetic. Their{" "}
          <Term id="observer-report">notes</Term> are not the count. The paper and the published figures are.
        </p>
        <h2>What it does not do</h2>
        <p>
          Reconciliation will not notice illegitimate paper that was issued through a captured check-in process
          and then scanned, if all three legs were inflated together. That is the{" "}
          <Term id="chain-of-custody">chain-of-custody</Term> residual: production, issuance, and custody in
          one set of hands, with observers kept out. Matching fakes survive both a recount and a later audit.
        </p>
      </>
    ),
  },
  {
    slug: "injected-test-ballots",
    section: "counting",
    title: "Injected test ballots",
    summary: "A public constant per candidate. Everyone subtracts the same number.",
    lede: "A known set of test ballots is added where people can see the insertion, then subtracted as one published constant. Raw and adjusted totals are shown side by side.",
    body: (
      <>
        <p>
          <Term id="injected-ballot">Injected test ballots</Term> are fixed and publicly committed before they
          are useful. The constant is the same per candidate, statewide or per precinct. Insertion is observed.
          Official totals subtract that constant. Both the raw figure and the adjusted figure are published.
        </p>
        <p>
          Because everyone subtracts the same number, a precinct that skips the subtraction, or subtracts a
          different one, disagrees with the public arithmetic in the open. No special software is required to
          check the subtraction.
        </p>
        <p>
          This sits next to, not instead of, the <Term id="three-way">three-way reconciliation</Term>, the{" "}
          <Term id="canary">public canary</Term> checksums, and the <Term id="rla">risk-limiting audit</Term>.
          The constant is arithmetic inside the totals. A canary is a known human ballot. They catch different
          lies.
        </p>
        <h2>What it does not do</h2>
        <p>
          A published constant does not prove each real ballot is from an eligible voter. It makes one family
          of hidden inflation and hidden offsets harder to disguise in the numbers people are shown.
        </p>
      </>
    ),
  },
  {
    slug: "risk-limiting-audit",
    section: "counting",
    title: "Risk-limiting audit",
    summary: "The paper sample grows as the margin shrinks, up to a full hand count.",
    lede: "After unofficial results and before certification, a random sample of the paper trail is compared to the machine reading. Close races take more ballots. A mismatch expands the sample.",
    body: (
      <>
        <p>
          A <Term id="rla">risk-limiting audit (RLA)</Term> does not use a fixed percentage. The{" "}
          <Term id="margin" /> and a pre-set <Term id="risk-limit" /> pick the sample. A wide race can be
          checked with relatively few ballots. A close race cannot.
        </p>
        <p>
          If the sample disagrees with the machine interpretation, the audit does not shrug. It expands until
          the risk limit is met or a <Term id="hand-count" /> of the paper is done. The{" "}
          <Term id="random-seed" /> and the sample list are public, so the draw can be recomputed by people who
          were not in the room. This happens after unofficial results and before{" "}
          <Term id="certification" />.
        </p>
        <p>
          The audit reads <Term id="paper-ballot">paper</Term>. It checks whether the scanners told the truth
          about the paper that exists. Local <Term id="precinct-captain">observers</Term> are not the audit.
          They watch the simpler signals while the paper is still local.
        </p>
        <h2>What it does not do</h2>
        <p>
          Errors small enough to fall under the risk limit can remain. And if the paper was replaced with a
          consistent illegitimate set, the RLA will confirm that set. <Term id="chain-of-custody" /> and the
          three-way check are what stand in front of that <Term id="residual-risk" />. The audit is not a
          substitute for them.
        </p>
      </>
    ),
  },
  {
    slug: "local-observers",
    section: "counting",
    title: "Local observers",
    summary: "Opposing captains watch the public signals. Their word is not final.",
    lede: "Precinct captains, including from opposing campaigns, check reconciliation, the injected offset, and local aggregates. A written note from a captain does not decide the count.",
    body: (
      <>
        <p>
          A <Term id="precinct-captain" /> watches simple signals: the{" "}
          <Term id="three-way">three-way reconciliation</Term>, the <Term id="injected-ballot">injected
          offset</Term>, <Term id="canary">public canary</Term> checksums in the log, and local{" "}
          <Term id="aggregate">aggregates</Term>. The same captain may also be a canary, by rejecting secrecy
          and voting a known party line. Opposing captains are the adversarial pair. Each has a reason to
          catch the other resting.
        </p>
        <p>
          Their <Term id="observer-report" /> is not authoritative. <Term id="principle-toxic">Every actor is
          potentially toxic</Term>, including the watcher. A false checklist does not rewrite paper or the
          published totals. Paper counts and published aggregates remain the independent record.
        </p>
        <p>
          The same rule keeps the design <Term id="principle-simple">simple</Term>. If the signal needs a
          vendor to interpret it, a captain cannot check it, and the sunlight failed.
        </p>
        <h2>What it does not do</h2>
        <p>
          Observers who are excluded, or a precinct nobody watches, drop out of the{" "}
          <Term id="continuous-sample" />. The residual is not "captains might lie." The residual is "nobody
          was allowed to look, and the paper was already wrong when it left."
        </p>
      </>
    ),
  },
];

export const diveMap: Record<string, Dive> = Object.fromEntries(dives.map((dive) => [dive.slug, dive]));

export function divesFor(section: DiveSection): Dive[] {
  return dives.filter((dive) => dive.section === section);
}
