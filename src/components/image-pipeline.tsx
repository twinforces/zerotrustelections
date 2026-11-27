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

export function ImagePipeline() {
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
        One ballot goes to three scanners. The rule is at least two scanners, or two passes, within a published
        pixel tolerance after the page is straightened. Three are drawn. The pictures become one canonical
        image only if they agree. That image goes to three counters, each its own code. They become one
        canonical tally only if they match exactly. If either meeting fails, there is no electronic total: the
        audit expands, or the contest takes the mulligan path. The agreed images are published, with no voter
        identity, so anyone can run their own counting software on them.
      </figcaption>
    </figure>
  );
}
