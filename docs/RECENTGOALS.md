# Recent goals

## Publish the design site and its source log

What: A public site for the continuous-audit election design, with registration and counting as their own pages, a red-team card rule, and a Receipts page.

Why: The design was one scrolling page, then the two flows needed diagrams. Claims need a source, including the places the gist is thinner than the page. The work has to live in twinforces/zerotrustelections so the next session is not trapped in a sandbox.

How: TanStack Start app in this repo. Canonical source log is `src/content/receipts.ts`, rendered at `/receipts`. Profile mark is `public/grumpy.jpg`. Docs stay short on purpose.

What: Four red-team failures are resolved on the Attacks page.

Why: They were coming back as silent successes. Three are already closed by the 20 November baseline. Assisted marking was not.

How: Custody, provisional acknowledgement, and the printed emoji sequence close the first three. A single election worker may not mark a ballot. Receipt `red-team-four`.

Hash: pending this commit.
