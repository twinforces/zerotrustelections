# Recent goals

## Publish the design site and its source log

What: A public site for the continuous-audit election design, with registration and counting as their own pages, a red-team card rule, and a Receipts page.

Why: The design was one scrolling page, then the two flows needed diagrams. Claims need a source, including the places the gist is thinner than the page. The work has to live in twinforces/zerotrustelections so the next session is not trapped in a sandbox.

How: TanStack Start app in this repo. Canonical source log is `src/content/receipts.ts`, rendered at `/receipts`. Profile mark is `public/grumpy.jpg`. Docs stay short on purpose.

What: The firmware picture is a double fan.

Why: Cards did not show one ballot splitting into three scans, meeting as one image, then splitting into three counts.

How: SVG on `/counting#firmware`. The second fan is counters. Scanners still only make pictures.

Hash: 03736de.
