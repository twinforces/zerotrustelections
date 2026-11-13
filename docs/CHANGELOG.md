# Changelog

Format is What / Why / How, plus the commit hash when there is one. Failures stay here.

## 2026-11-13

What: First load of the site into git. Home lockup, Receipts page, registration and counting flows, red-team cards.

Why: The design needed a repo, a face next to the title, and a bibliography that does not pretend a primer endorses the design.

How: See `docs/site.md` for why the pages are split. See `src/content/receipts.ts` for each claim.

Hash: pending the first commit.

### What did not work

What: Writing Elections.md from this workspace to retire the leftover PARTIAL line.

Why: The gist outcome list says DETECTED, but an earlier bullet still tells the session to print PARTIAL. Leaving that line makes red-team sessions ignore the rename.

How: `github___update_gist` returned 403, resource not accessible by the integration. The site follows DETECTED anyway. The gist edit is still manual.
