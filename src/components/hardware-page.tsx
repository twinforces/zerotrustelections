import { Link } from "@tanstack/react-router";
import { FlowBlock, PageIntro, Steps } from "@/components/flow";
import { ImagePipeline } from "@/components/image-pipeline";
import { CryptoFairy } from "@/components/crypto-fairy";
import { Term } from "@/components/term";

export function HardwarePage() {
  return (
    <article>
      <PageIntro
        kicker="Hardware"
        title="The scanner is a camera."
        lede={
          <>
            The usual objection is "no machine counting." Humans suck at counting too. A ballot has no personal
            information on it, so the pictures can be public, and anyone can recount. The machine is not
            trusted. It is checked.
          </>
        }
      >
        <nav className="page-jumps" aria-label="Hardware controls">
          <a href="#layout">Layout</a>
          <a href="#scanners">Scanners</a>
          <a href="#oracles">Oracles</a>
          <a href="#shuffler">Shuffler</a>
          <a href="#images">Images</a>
          <a href="#canaries">Canaries</a>
          <a href="#counters">Counters</a>
        </nav>
      </PageIntro>

      <FlowBlock
        id="layout"
        n="01 / So the pictures can be compared"
        title="Same sheet. Same marks. Any counter can straighten it."
        lede={
          <>
            A <Term id="ballot-layout">fixed grid</Term>. Every contest is a row or a block. The mark is a large high-contrast oval or box in
            a fixed column. A solid square sits in the upper left and a solid circle in the lower right. From
            those two marks a counter computes rotation, scale, and skew, and warps the page onto one grid. No
            staggered layout. No butterfly. The same physical sheet in every precinct. Only the words and the{" "}
            <Term id="emoji-sequence">emoji sequences</Term> change.
          </>
        }
      >
        <figure className="sheet-figure">
          <div
            className="sheet"
            role="img"
            aria-label="A standard ballot. Square in the upper left, circle in the lower right, marks in one column."
          >
            <span className="sheet-square" aria-hidden="true" />
            <ol>
              <li>
                <span className="sheet-oval" aria-hidden="true" />
                County commissioner
              </li>
              <li>
                <span className="sheet-oval" aria-hidden="true" />
                State representative
              </li>
              <li>
                <span className="sheet-oval" aria-hidden="true" />
                Ballot measure
              </li>
            </ol>
            <span className="sheet-circle" aria-hidden="true" />
          </div>
          <figcaption className="fan-caption">
            Every sheet also carries a page ID, in the same format. There is no test flag. A scanner cannot
            tell a test from a ballot by looking at the paper.
          </figcaption>
        </figure>
      </FlowBlock>

      <FlowBlock
        id="scanners"
        n="02 / Dumb cameras"
        title="A scanner emits a picture, a device ID, and a time. Not a total."
        lede={
          <>
            The image is raw or lossless. At least two independent scanners, or two passes, must agree on the{" "}
            <Term id="ballot-image" /> within a published pixel tolerance after alignment. If the square and
            the circle cannot be found, that image goes to manual review. Faking the picture means
            compromising more than one camera. The drawing shows three. The rule is at least two.
          </>
        }
      >
        <ImagePipeline />
      </FlowBlock>

      <FlowBlock
        id="oracles"
        n="03 / The answer key is not in the building"
        title="Outside services prove the scanner was honest."
        lede={
          <>
            Several independent <Term id="test-oracle">services</Term> each commit to their own pool of test-ballot images before election
            day. Local staff never hold those pictures. After a batch of scanner images is hash-committed, a
            public rule or a public random draw assigns which service's tests apply to that batch.
            <CryptoFairy /> Each service then reveals only its assigned subset, and a proof that those images
            were in the earlier commitment. The published set must contain every revealed test. A miss is a
            detection.
          </>
        }
      >
        <Steps
          label="How an external test oracle is checked"
          items={[
            {
              title: "Commit the pool first",
              text: "Each service publishes a commitment to its own test images before any ballot is scanned.",
            },
            {
              title: "Commit the scan before the assignment",
              text: "The batch of scanner images is hash-committed. Only then does a public rule say which tests belong to that batch.",
            },
            {
              title: "Reveal only what was assigned",
              text: "The service opens that subset, with a proof it was inside the original pool. Staff could not have had the expected picture in advance.",
            },
            {
              title: "The published images must contain it",
              text: "A missing or mismatched test image is a detection. The scanner is graded after the fact, not by a mode an operator can turn on.",
            },
          ]}
        />
      </FlowBlock>

      <FlowBlock
        id="shuffler"
        n="04 / No one knows when a test appears"
        title="A physical shuffler sits in every hopper."
        lede={
          <>
            Test sheets are released one at a time, and only after the previous batch is hash-committed, or
            they are mixed into ordinary paper under dual control. Printing and feeding, when they happen, are
            one observed step under two parties. The <Term id="shuffler">shuffler</Term> randomizes order under
            dual control before the camera sees the paper. After that, neither the operator nor the firmware
            knows which sheet is next.
          </>
        }
      >
        <ul className="rule-list">
          <li>
            <strong>No test mode.</strong> Scanner firmware has no operator-triggered test mode. The shuffle
            and the feed are covered by the same live observation or recording rule as the rest of custody.
          </li>
          <li>
            <strong>One page ID format.</strong> Every ballot carries only a page ID, printed the same way.
            Which of those IDs were tests is named only after the images are committed.
          </li>
          <li>
            <strong>A liar fails later.</strong> A scanner that images every ballot falsely fails the oracle
            checks and the captain canaries. It cannot special-case a known test, because it cannot see which
            sheet is a test until afterward.
          </li>
          <li>
            <strong>The public constant is separate.</strong> A fixed, watched{" "}
            <Term id="injected-ballot">injected constant</Term> is still subtracted from the official total.
            That arithmetic lives on <Link className="prose-link" to="/counting">Counting</Link>.
          </li>
        </ul>
      </FlowBlock>

      <FlowBlock
        id="images"
        n="05 / Shared pictures"
        title="Publish the images. Anyone can run a counter."
        lede="After the scanners agree and the three counters agree, the full set of ballot images is published. No voter identity is in them. Anyone may recount. The official tally is a claim about those pictures, not a number that left a black box. An ordinary image stays untied to a person."
      >
        <p className="fan-caption">
          This is the answer to "no machine counting." Humans suck at counting too. The pictures are the thing
          being counted, and they are public.
        </p>
      </FlowBlock>

      <FlowBlock
        id="canaries"
        n="06 / A live test with a name on it"
        title="A captain's ballot goes through the same shuffle."
        lede={
          <>
            <Term id="precinct-captain">Precinct captains</Term> and other pre-approved observers who reject
            secrecy cast an ordinary ballot through the same shuffler and the same scanners. Afterward they
            publish a page ID or a <Term id="commitment">checksum</Term>. The published images must contain a
            match. A miss is an attributed detection. The expected content was fixed by that person, and the
            shuffler means the scanner could not pick the sheet out in advance. The rest of the canary rules
            are on <Link className="prose-link" to="/counting">Counting</Link>.
          </>
        }
      >
        <p className="fan-caption">
          These are extra test ballots. They are not a second count, and a written observer report is still
          not the tally.
        </p>
      </FlowBlock>

      <FlowBlock
        id="counters"
        n="07 / Three different programs"
        title="Three codebases. Exact match. Or no electronic total."
        lede={
          <>
            Accepted images are read by at least three independent programs, different languages, different
            code. Each one has passed a public suite of generated images with known results. The three tallies
            must match exactly. If they do not, the electronic total is thrown out, the{" "}
            <Term id="rla">risk-limiting audit</Term> expands, or the contest takes the mulligan path. Paper
            remains the record. The triple count checks the reading. It does not replace the paper.
          </>
        }
      >
        <p className="fan-caption">
          Custody, the injected constant, and the paper sample are still on <Link className="prose-link" to="/counting">Counting</Link>
          . Hardware is why the camera and the software can be graded. It is not a reason to skip the paper.
        </p>
      </FlowBlock>
    </article>
  );
}
