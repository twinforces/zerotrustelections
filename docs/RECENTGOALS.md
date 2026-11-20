# Recent goals

## Publish the design site and its source log

What: A public site for the continuous-audit election design, with registration and counting as their own pages, a red-team card rule, and a Receipts page.

Why: The design was one scrolling page, then the two flows needed diagrams. Claims need a source, including the places the gist is thinner than the page. The work has to live in twinforces/zerotrustelections so the next session is not trapped in a sandbox.

How: TanStack Start app in this repo. Canonical source log is `src/content/receipts.ts`, rendered at `/receipts`. Profile mark is `public/grumpy.jpg`. Docs stay short on purpose.

What: The site matches Elections.md version 2026-11-20, pinned to gist revision 5830600.

Why: The pasted baseline is newer than the pages, and an unpinned raw URL can serve a cached copy.

How: Red-team link uses the revision. Custody, check-in acknowledgement, provisional window, mulligan triggers, and the detection deterrent are on the pages. Receipts cite the gist.

Hash: pending this commit.
