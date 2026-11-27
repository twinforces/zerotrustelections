function Marker({ id }: { id: string }) {
  return (
    <marker id={id} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path fill="#2ec4b6" d="M 0 0 L 10 5 L 0 10 z" />
    </marker>
  );
}

function Wire({
  marker,
  x1,
  y1,
  x2,
  y2,
}: {
  marker: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}) {
  return <line className="hw-wire" markerEnd={`url(#${marker})`} x1={x1} y1={y1} x2={x2} y2={y2} />;
}

function Pile({ x, y, kind }: { x: number; y: number; kind: "paper" | "test" | "mixed" }) {
  if (kind === "mixed") {
    return (
      <g>
        <rect className="pile-paper" x={x} y={y + 14} width="34" height="20" rx="1" />
        <rect className="pile-test" x={x + 10} y={y + 7} width="34" height="20" rx="1" />
        <rect className="pile-paper" x={x + 20} y={y} width="34" height="20" rx="1" />
      </g>
    );
  }
  const tint = kind === "test" ? "pile-test" : "pile-paper";
  return (
    <g>
      <rect className={tint} x={x} y={y + 12} width="34" height="20" rx="1" />
      <rect className={tint} x={x + 7} y={y + 6} width="34" height="20" rx="1" />
      <rect className={tint} x={x + 14} y={y} width="34" height="20" rx="1" />
    </g>
  );
}

function Node({
  x,
  y,
  w,
  h,
  title,
  detail,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  detail?: string;
}) {
  return (
    <g>
      <rect className="hw-box" x={x} y={y} width={w} height={h} rx="3" />
      <text className="hw-label" x={x + w / 2} y={y + 22} textAnchor="middle">
        {title}
      </text>
      {detail ? (
        <text className="hw-detail" x={x + w / 2} y={y + 40} textAnchor="middle">
          {detail}
        </text>
      ) : null}
    </g>
  );
}

function Legend() {
  return (
    <g>
      <rect className="pile-paper" x="8" y="8" width="16" height="12" />
      <text className="hw-detail" x="30" y="18">
        Voter
      </text>
      <rect className="pile-test" x="84" y="8" width="16" height="12" />
      <text className="hw-detail" x="106" y="18">
        Test
      </text>
    </g>
  );
}

export function ImagingDiagram() {
  return (
    <figure className="fan-figure">
      <svg className="fan-diagram" viewBox="0 0 440 640" role="img" aria-labelledby="imaging-title imaging-desc">
        <title id="imaging-title">Voter ballots and red test ballots are mixed, shuffled, and scanned</title>
        <desc id="imaging-desc">
          A stack of voter ballots is mixed with red test ballots from a test oracle. The mix goes through a
          shuffler in front of each scanner. The scanners produce one image set that still contains the red
          sheets. The test IDs stay secret.
        </desc>
        <defs>
          <Marker id="imaging-arrow" />
        </defs>
        <Legend />
        <Node x={16} y={36} w={180} h={110} title="Voter ballots" />
        <Pile x={70} y={72} kind="paper" />
        <Node x={244} y={36} w={180} h={110} title="Test oracle" />
        <Pile x={298} y={72} kind="test" />
        <Wire marker="imaging-arrow" x1={106} y1={146} x2={200} y2={178} />
        <Wire marker="imaging-arrow" x1={334} y1={146} x2={240} y2={178} />
        <Node x={130} y={178} w={180} h={100} title="Mixed" />
        <Pile x={184} y={214} kind="mixed" />
        <Wire marker="imaging-arrow" x1={220} y1={278} x2={86} y2={312} />
        <Wire marker="imaging-arrow" x1={220} y1={278} x2={220} y2={312} />
        <Wire marker="imaging-arrow" x1={220} y1={278} x2={354} y2={312} />
        <Node x={16} y={312} w={140} h={34} title="Shuffler" />
        <Node x={150} y={312} w={140} h={34} title="Shuffler" />
        <Node x={284} y={312} w={140} h={34} title="Shuffler" />
        <Wire marker="imaging-arrow" x1={86} y1={346} x2={86} y2={372} />
        <Wire marker="imaging-arrow" x1={220} y1={346} x2={220} y2={372} />
        <Wire marker="imaging-arrow" x1={354} y1={346} x2={354} y2={372} />
        <Node x={16} y={372} w={140} h={34} title="Scanner 1" />
        <Node x={150} y={372} w={140} h={34} title="Scanner 2" />
        <Node x={284} y={372} w={140} h={34} title="Scanner 3" />
        <Wire marker="imaging-arrow" x1={86} y1={406} x2={190} y2={448} />
        <Wire marker="imaging-arrow" x1={220} y1={406} x2={220} y2={448} />
        <Wire marker="imaging-arrow" x1={354} y1={406} x2={250} y2={448} />
        <Node x={70} y={448} w={300} h={110} title="Canonical image set" />
        <Pile x={184} y={490} kind="mixed" />
        <text className="hw-detail" x="220" y="612" textAnchor="middle">
          Test IDs still secret. Red is still in the stack.
        </text>
      </svg>
      <figcaption className="fan-caption">
        Red is only in this picture, so a test can be seen. The paper is not red, and it has no test flag.
        Voter sheets and test sheets are mixed, then shuffled in front of each scanner. The image set still
        contains the tests. The oracles have not released the IDs.
      </figcaption>
    </figure>
  );
}

export function CountingDiagram() {
  return (
    <figure className="fan-figure">
      <svg className="fan-diagram" viewBox="0 0 440 660" role="img" aria-labelledby="count-title count-desc">
        <title id="count-title">Images are counted, then the red test ballots are extracted</title>
        <desc id="count-desc">
          The published images, still mixed with red test sheets, go to three counters and produce a
          preliminary count. The test oracles then release the test ballot IDs. Those red sheets are
          subtracted, and the final count is what remains.
        </desc>
        <defs>
          <Marker id="counting-arrow" />
        </defs>
        <Legend />
        <Node x={70} y={36} w={300} h={110} title="Public images" />
        <Pile x={184} y={74} kind="mixed" />
        <Wire marker="counting-arrow" x1={220} y1={146} x2={86} y2={178} />
        <Wire marker="counting-arrow" x1={220} y1={146} x2={220} y2={178} />
        <Wire marker="counting-arrow" x1={220} y1={146} x2={354} y2={178} />
        <Node x={16} y={178} w={140} h={36} title="Counter 1" />
        <Node x={150} y={178} w={140} h={36} title="Counter 2" />
        <Node x={284} y={178} w={140} h={36} title="Counter 3" />
        <Wire marker="counting-arrow" x1={86} y1={214} x2={190} y2={252} />
        <Wire marker="counting-arrow" x1={220} y1={214} x2={220} y2={252} />
        <Wire marker="counting-arrow" x1={354} y1={214} x2={250} y2={252} />
        <Node x={70} y={252} w={300} h={110} title="Preliminary count" />
        <Pile x={184} y={292} kind="mixed" />
        <Wire marker="counting-arrow" x1={220} y1={362} x2={220} y2={392} />
        <Node x={90} y={392} w={260} h={36} title="Test IDs released" />
        <Wire marker="counting-arrow" x1={160} y1={428} x2={110} y2={468} />
        <Wire marker="counting-arrow" x1={280} y1={428} x2={330} y2={468} />
        <Node x={16} y={468} w={190} h={120} title="Extracted" />
        <Pile x={78} y={514} kind="test" />
        <Node x={234} y={468} w={190} h={120} title="Final count" />
        <Pile x={296} y={514} kind="paper" />
        <text className="hw-detail" x="220" y="640" textAnchor="middle">
          The red that went in is the red that comes out.
        </text>
      </svg>
      <figcaption className="fan-caption">
        Counting is a separate step. Three programs count the published images, tests included. That match is
        the preliminary count. The oracles then name the test IDs, the red sheets are subtracted, and the
        final count is the voter paper that remains.
      </figcaption>
    </figure>
  );
}

export function CaptainDiagram() {
  return (
    <figure className="fan-figure">
      <svg className="fan-diagram" viewBox="0 0 440 680" role="img" aria-labelledby="captain-title captain-desc">
        <title id="captain-title">A captain ballot is counted. Red test ballots are subtracted.</title>
        <desc id="captain-desc">
          A captain casts an ordinary ballot into the same shuffle as every other sheet. It is imaged with the
          mix. The captain then names the page ID. At the count, red test ballots are subtracted. The captain
          ballot stays.
        </desc>
        <defs>
          <Marker id="captain-arrow" />
        </defs>
        <Legend />
        <Node x={120} y={36} w={200} h={100} title="Captain ballot" />
        <Pile x={186} y={70} kind="paper" />
        <Wire marker="captain-arrow" x1={220} y1={136} x2={220} y2={168} />
        <Node x={120} y={168} w={200} h={100} title="Shuffle" />
        <Pile x={186} y={202} kind="mixed" />
        <Wire marker="captain-arrow" x1={220} y1={268} x2={220} y2={300} />
        <Node x={120} y={300} w={200} h={44} title="Image" />
        <Wire marker="captain-arrow" x1={220} y1={344} x2={220} y2={376} />
        <Node x={70} y={376} w={300} h={44} title="Names the page ID" />
        <Wire marker="captain-arrow" x1={220} y1={420} x2={220} y2={452} />
        <Node x={120} y={452} w={200} h={44} title="Count" />
        <Wire marker="captain-arrow" x1={170} y1={496} x2={110} y2={536} />
        <Wire marker="captain-arrow" x1={270} y1={496} x2={330} y2={536} />
        <Node x={16} y={536} w={190} h={110} title="Tests subtracted" />
        <Pile x={78} y={572} kind="test" />
        <Node x={234} y={536} w={190} h={110} title="Captain stays" />
        <Pile x={296} y={572} kind="paper" />
      </svg>
      <figcaption className="fan-caption">
        Captains do not get subtracted. Test ballots do. The captain's sheet goes through the same shuffle,
        then they name the page ID. A missing image is a detection. The ballot itself stays in the count.
      </figcaption>
    </figure>
  );
}
