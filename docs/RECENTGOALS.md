# Recent goals

## Publish the design site and its source log

What: A public site for the continuous-audit election design, with registration and counting as their own pages, a red-team card rule, and a Receipts page.

Why: The design was one scrolling page, then the two flows needed diagrams. Claims need a source, including the places the gist is thinner than the page. The work has to live in twinforces/zerotrustelections so the next session is not trapped in a sandbox.

How: TanStack Start app in this repo. Canonical source log is `src/content/receipts.ts`, rendered at `/receipts`. Profile mark is `public/grumpy.jpg`. Docs stay short on purpose.

What: The home page sells from the reader's job, through the pain, to what this does and what they get.

Why: A description of the machinery is not an offer. The decks already had the offer.

How: Home sections in that order. Receipt `home-sell` points at the gist and says the decks are the author's notes.

Hash: pending this commit.
