import { FlowBlock, PageIntro, RecordPair, Steps } from "@/components/flow";
import { DiveList, Limit, PrimerList, Tail } from "@/components/page-bits";
import { Term } from "@/components/term";

const PRIMERS = [
  { href: "https://www.nist.gov/blockchain", label: "What is a blockchain?", source: "NIST" },
  {
    href: "https://hyperledger-fabric.readthedocs.io/en/latest/whatis.html",
    label: "Hyperledger Fabric overview",
    source: "Hyperledger",
  },
  {
    href: "https://hyperledger-fabric.readthedocs.io/en/latest/blockchain.html",
    label: "Permissioned and public chains",
    source: "Hyperledger",
  },
];

export function RegistrationPage() {
  return (
    <article>
      <PageIntro
        kicker="Registration"
        title="Every change to the roll stays readable."
        lede="Three ordinary events. A person registers. A person dies. A person moves. Each one is a signed write on an append-only ledger. Nothing is erased."
      >
        <nav className="page-jumps" aria-label="Registration flows">
          <a href="#register">Registers</a>
          <a href="#death">Dies</a>
          <a href="#move">Moves</a>
        </nav>
      </PageIntro>

      <FlowBlock
        id="register"
        n="01 / Record created"
        title="A voter registers."
        lede={
          <>
            There is no row, then there is one. A known office signs the write. The public sees a count move,
            not the dossier. The voter sees their own status.
          </>
        }
      >
        <RecordPair
          label="Registration creates a record for A. Ruiz"
          beforeCaption="Before"
          beforeEmpty="No record for this voter."
          afterCaption="After · record created"
          arrow="Office signs a create"
          after={[
            { label: "Voter", value: "A. Ruiz" },
            { label: "valid", value: "true" },
            { label: "Location", value: "Location 1" },
            { label: "Signer", value: "County office" },
            { label: "Reason", value: "new registration" },
          ]}
        />
        <div className="mt-6">
          <Steps
            label="How a registration is written"
            items={[
              {
                title: "The voter applies",
                text: "Name, eligibility, and Location 1. The application is not yet the roll.",
              },
              {
                title: "A known office signs",
                text: "Writers are election offices and authorized auditors, not anonymous keys.",
              },
              {
                title: "The ledger appends",
                text: "valid=true, the location, the time, and the signer. The prior state was empty, and that fact stays.",
              },
              {
                title: "Counts and the phone move",
                text: "The last-name tally and the active total go up by one. The voter's phone shows registered at Location 1.",
              },
            ]}
          />
        </div>
      </FlowBlock>

      <FlowBlock
        id="death"
        n="02 / Record kept, marked not valid"
        title="A voter dies."
        lede={
          <>
            The row is not deleted. It is set to <Term id="soft-delete">valid=false</Term>, with a reason, a
            time, and a signer. If the death report was wrong, a later write turns it back on. The false report
            remains in the log.
          </>
        }
      >
        <RecordPair
          label="Death marks the same record not valid"
          beforeCaption="Before · still the same row"
          before={[
            { label: "Voter", value: "A. Ruiz" },
            { label: "valid", value: "true" },
            { label: "Location", value: "Location 1" },
          ]}
          afterCaption="After · soft-delete"
          arrow="valid=false, reason death"
          after={[
            { label: "Voter", value: "A. Ruiz" },
            { label: "valid", value: "false", previous: "true" },
            { label: "Location", value: "Location 1" },
            { label: "Reason", value: "death" },
            { label: "Prior row", value: "still readable" },
          ]}
        />
        <div className="mt-6">
          <Steps
            label="How a death is written"
            items={[
              {
                title: "A death signal arrives",
                text: "A vital record or an outside oracle is consulted. The ledger records that it was consulted. It does not become the oracle.",
              },
              {
                title: "The office writes valid=false",
                text: "Reason code, timestamp, and signer travel with the change. Hard erasure is forbidden.",
              },
              {
                title: "The public tally moves",
                text: "Daily removals go up. The active total goes down. Last-name frequency moves for anyone watching.",
              },
              {
                title: "The phone shows not active",
                text: "Someone in that cohort who looks will see it. A wrong death is reversed by another signed write, not by wiping this one.",
              },
            ]}
          />
        </div>
      </FlowBlock>

      <FlowBlock
        id="move"
        n="03 / Same person, new place"
        title="A voter moves. Location 1 becomes Location 2."
        lede="This is not a delete plus a fresh stranger. One attributed write changes the location. Both ends of the move stay visible."
      >
        <RecordPair
          label="A move changes Location 1 to Location 2 on the same record"
          beforeCaption="Before"
          before={[
            { label: "Voter", value: "A. Ruiz" },
            { label: "valid", value: "true" },
            { label: "Location", value: "Location 1" },
          ]}
          afterCaption="After · location changed"
          arrow="Location 1 → Location 2"
          after={[
            { label: "Voter", value: "A. Ruiz" },
            { label: "valid", value: "true" },
            { label: "Location", value: "Location 2", previous: "Location 1" },
            { label: "Signer", value: "County office" },
            { label: "History", value: "Location 1 remains in the log" },
          ]}
        />
        <div className="mt-6">
          <Steps
            label="How a move is written"
            items={[
              {
                title: "The same voter",
                text: "The row is the person who already registered. A second record would hide the move.",
              },
              {
                title: "Location 1 changes to Location 2",
                text: "One signed transaction. valid stays true. The old location is the previous value, not a deleted life.",
              },
              {
                title: "Both places' counts move",
                text: "Location 1 loses one active voter. Location 2 gains one. A watcher in either place can see the tally change.",
              },
              {
                title: "The phone updates",
                text: "The voter sees Location 2 immediately. Anyone auditing the log can still see they were at Location 1.",
              },
            ]}
          />
        </div>
      </FlowBlock>

      <Tail>
        <h2 className="font-serif text-3xl font-medium">The same rules in every flow</h2>
        <ul className="rule-list">
          <li>
            <strong>Soft-delete only.</strong> <Term id="hard-erasure" /> is forbidden. A later attributed
            transaction can reverse a mistake.
          </li>
          <li>
            <strong>Append-only, and sourced.</strong> The <Term id="permissioned-ledger" /> keeps every
            change. Bulk writes need an <Term id="endorsement-policy" />. Identities come from a{" "}
            <Term id="msp">Membership Service Provider</Term>.
          </li>
          <li>
            <strong>Public aggregates.</strong> Active totals, daily removals, and{" "}
            <Term id="aggregate">last-name counts</Term> are the view anyone can watch. Full{" "}
            <Term id="pii">personal records</Term> stay in a <Term id="private-data">private collection</Term>.
          </li>
          <li>
            <strong>A phone, and a small sample.</strong> The <Term id="personal-view" /> shows a voter their
            own row. Modest checking is a <Term id="continuous-sample" />. Election day does not wait on a live
            nationwide write. A dispute becomes a <Term id="provisional-ballot" />.
          </li>
        </ul>
        <DiveList section="registration" />
        <PrimerList items={PRIMERS} />
        <Limit>
          Outside <Term id="oracle">oracles</Term> such as <Term id="save">SAVE</Term> and{" "}
          <Term id="eric">ERIC</Term> stay trusted inputs. The ledger records that they were consulted and what
          followed. Very few people checking slows detection.
        </Limit>
      </Tail>
    </article>
  );
}
