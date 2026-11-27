import { Link } from "@tanstack/react-router";
import { FlowBlock, PageIntro } from "@/components/flow";
import { CountingDiagram, ImagingDiagram } from "@/components/hardware-diagrams";
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
            information on it, so the pictures can be public, and anyone can recount. Imaging and counting are
            separate. The red in the drawings is a test sheet. It goes in mixed, and it comes back out.
          </>
        }
      >
        <nav className="page-jumps" aria-label="Hardware controls">
          <a href="#layout">Layout</a>
          <a href="#imaging">Imaging</a>
          <a href="#counting">Counting</a>
          <a href="#canaries">Canaries</a>
        </nav>
      </PageIntro>

      <FlowBlock
        id="layout"
        n="01 / One contest, one column"
        title="Same sheet. Same marks. Any counter can straighten it."
        lede={
          <>
            A <Term id="ballot-layout">fixed grid</Term>. One contest is a block. Each candidate is a row: a
            mark box in a fixed column, the name, then the <Term id="emoji-sequence">emoji sequence</Term>. A
            solid square sits in the upper left and a solid circle in the lower right. From those two marks a
            counter computes rotation, scale, and skew. No butterfly. The same physical sheet in every
            precinct. Only the words and the sequences change.
          </>
        }
      >
        <figure className="sheet-figure">
          <div
            className="ballot sample-ballot"
            role="img"
            aria-label="One contest. Two candidates with emoji sequences, a mark box in one column, an alignment square and circle, and a page ID."
          >
            <div className="sample-top">
              <span className="reg-square" aria-hidden="true" />
              <span className="sample-id">Page 004821</span>
            </div>
            <p className="ballot-kicker">State senator</p>
            <div className="sample-choice">
              <span className="mark-box" aria-hidden="true" />
              <span>Dana Sullivan</span>
              <span className="ballot-marks" aria-hidden="true">
                🌲 ⚓ 🔔
              </span>
            </div>
            <div className="sample-choice">
              <span className="mark-box" aria-hidden="true" />
              <span>Dana Sullivan</span>
              <span className="ballot-marks" aria-hidden="true">
                🌙 📐 🪶
              </span>
            </div>
            <div className="sample-bottom">
              <span className="sample-id">Mark the box. Do not draw the sequence.</span>
              <span className="reg-circle" aria-hidden="true" />
            </div>
          </div>
          <figcaption className="fan-caption">
            Not a scantron of different offices. One contest, two people, two sequences. The page ID is the
            same format on a test sheet. Nothing on the paper says which sheets are tests.
          </figcaption>
        </figure>
      </FlowBlock>

      <FlowBlock
        id="imaging"
        n="02 / Imaging"
        title="Mix the tests in. Shuffle. Take the pictures. Do not count."
        lede={
          <>
            Voter ballots and test ballots from the <Term id="test-oracle">test oracles</Term> go into a{" "}
            <Term id="shuffler">shuffler</Term> in front of each scanner. A scanner emits a raw or lossless{" "}
            <Term id="ballot-image" />, a device ID, and a time. Not a total. At least two scanners, or two
            passes, must agree within a published pixel tolerance. The drawing shows three. The oracles keep
            the test IDs.
            <CryptoFairy />
          </>
        }
      >
        <ImagingDiagram />
        <ul className="rule-list">
          <li>
            <strong>The answer key is outside.</strong> Each oracle commits its test images before election
            day. Staff never hold them. A public rule assigns which tests belong to a batch only after that
            batch of images is hash-committed.
          </li>
          <li>
            <strong>No test mode.</strong> Firmware cannot be told to treat a sheet as a test. After the
            shuffle, neither the operator nor the camera knows which sheet is next.
          </li>
          <li>
            <strong>The red stays in.</strong> The canonical image set still contains the test sheets. They
            are not removed here.
          </li>
        </ul>
      </FlowBlock>

      <FlowBlock
        id="counting"
        n="03 / Counting"
        title="Count the pictures. Then pull the red back out."
        lede={
          <>
            The image set is published. Anyone can run a counter on it. At least three programs, different
            languages and different code, each past a public suite of known images, must match exactly. That
            match is the preliminary count, tests included. The oracles then release the test IDs. Those
            sheets are subtracted. What remains is the final count. Paper is still the record. A disagreement
            throws out the electronic total and expands the <Term id="rla">risk-limiting audit</Term>, or the
            contest takes the mulligan path.
          </>
        }
      >
        <CountingDiagram />
      </FlowBlock>

      <FlowBlock
        id="canaries"
        n="04 / A live test with a name on it"
        title="A captain's ballot goes through the same shuffle."
        lede={
          <>
            <Term id="precinct-captain">Precinct captains</Term> and other pre-approved observers who reject
            secrecy cast an ordinary ballot through the same path. Afterward they publish a page ID or a{" "}
            <Term id="commitment">checksum</Term>. The published images must contain a match. A miss is an
            attributed detection. Their sheet is not red, and it was not labeled. The rest of the canary rules
            are on <Link className="prose-link" to="/counting">Counting</Link>.
          </>
        }
      >
        <p className="fan-caption">
          A canary is another test whose expected content was fixed by a person. It is not a second count.
        </p>
      </FlowBlock>
    </article>
  );
}
