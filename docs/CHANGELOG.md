# Changelog

Format is What / Why / How, plus the commit hash when there is one. Failures stay here.

## 2026-11-13

What: First load of the site into git. Home lockup, Receipts page, registration and counting flows, red-team cards.

Why: The design needed a repo, a face next to the title, and a bibliography that does not pretend a primer endorses the design.

How: See `docs/site.md` for why the pages are split. See `src/content/receipts.ts` for each claim.

Hash: aa19a4b

## 2026-11-13 later

What: Swapped the title portrait for the X image. Added the Crypto Fairy. Recorded that the gist no longer says PARTIAL.

Why: The GitHub avatar was the wrong face. The fairy is the author's way of marking cryptographic proof without pretending to take crypto seriously. The receipts were stale on PARTIAL.

How: `public/grumpy.jpg` is GrumpySource.jpg. The fairy is an inline mark on ledger, identity, and checksum terms, explained on the home page. Receipts were re-fetched against the gist.

Hash: pending this commit.

### What did not work

What: Writing Elections.md from this workspace to retire the leftover PARTIAL line.

Why: The gist outcome list says DETECTED, but an earlier bullet still tells the session to print PARTIAL. Leaving that line makes red-team sessions ignore the rename.

How: `github___update_gist` returned 403. The author updated the gist later the same day. PARTIAL is gone. Do not retry that write unless the gist drifts again.
