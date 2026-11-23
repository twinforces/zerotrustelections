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

Hash: ace0450.

## 2026-11-13 fairy

What: Replaced the stick-figure fairy with an illustrated one, and put it on the explanations that use a signature, a ledger, or a checksum.

Why: The line drawing did not read as a fairy, and the mark was only on glossary terms, so the prose looked unmarked.

How: `public/crypto-fairy.jpg` is an original animated-feature illustration. It is not a named character. The same component is used in the step text, the ledes, and the crypto primers.

Hash: 24fd075.

## 2026-11-13 receipts

What: Receipts is in the sticky navigation. Crypto receipts carry the fairy.

Why: The page was only a footer link, and the proof claims on it were unmarked.

How: Nav item in the header. Eight receipts get the fairy: ledger, Fabric, NIST, the move write, checksum, canary, and the fairy itself.

Hash: 781efbf.

## 2026-11-13 card

What: The link preview is the supplied ballot-box portrait, 1200 by 630.

Why: The share card should be that picture. The X feed banner was left alone because there is not one, and this is not a game card.

How: Cropped GrumpyBallots.jpg toward the face and the box, JPEG at q:v 4, handed over to public/og.jpg. site.json already said custom.

Hash: 8cef2ef.

## 2026-11-13 sell

What: The home page now sells in order: who you are, the job, why you cannot do it, what this does, what you get, and the value by audience.

Why: The opening page was a description of the design. The two marketing decks say to start from their jobs, pains, and gains.

How: `src/components/home-page.tsx`. The decks are the wording. The receipt says they are not evidence the design works.

Hash: 897ad23.

### What did not work

What: Writing Elections.md from this workspace to retire the leftover PARTIAL line.

Why: The gist outcome list says DETECTED, but an earlier bullet still tells the session to print PARTIAL. Leaving that line makes red-team sessions ignore the rename.

How: `github___update_gist` returned 403. The author updated the gist later the same day. PARTIAL is gone. Do not retry that write unless the gist drifts again.

## 2026-11-20 attacks

What: An Attacks page grades known cases HELD, DETECTED, RESIDUAL, or PARTIAL.

Why: The catalog is not the red-team card. A session is still FAILURE, DETECTED, or DESIGN HELD. PARTIAL here means the design only covers part of the case.

How: `src/content/attacks.ts` and `/attacks`. The receipt says the list is the author's catalog of 20 November 2026, not Elections.md.

Hash: 1adce94.

## 2026-11-20 prevent

What: The catalog grade HELD is now PREVENT.

Why: HELD was the wrong word. The red-team card is still DESIGN HELD.

How: The verdict id, the filter, and the copy that named the grade. DESIGN HELD was left alone.

Hash: 96f9150.

## 2026-11-20 scope

What: A dystopia is out of scope. A surfaced attack is a statutory mulligan.

Why: Some RESIDUAL cases assume the room is no longer an election. Repairing a tainted count is the harder problem, and the design refuses it.

How: Attacks, Counting, the two counting dives, the red-team DETECTED line, and a glossary principle. A poisoned oracle stays a residual. Receipt `mulligan` says this is not in the gist.

Hash: 9a4aba8.

## 2026-11-20 baseline

What: The site follows Elections.md version 2026-11-20, gist revision 5830600.

Why: The author pasted the new baseline so a cached raw URL would not be the design. The mulligan, the custody controls, the phone acknowledgements, and "detection is sufficient" are now in the gist.

How: The red-team link fetches that revision. Counting has a custody section. Registration states the check-in and provisional rules. Receipts no longer say the mulligan is missing from the gist. One operating bullet still paints DETECTED in the same dark red as FAILURE. The image rules, and this site, keep it amber.

Hash: 06b41e8.

## 2026-11-23 red team

What: Four red-team failures are on the Attacks page as resolved.

Why: Single-operator custody, the provisional side door, a lookalike emoji shirt, and a partisan marker were coming back as silent failures. The first three are closed by the 20 November baseline. Assisted marking was not named there.

How: Single-operator custody is DETECTED because the broken procedure is the signal. The provisional side door is DETECTED by the acknowledgement, the mailed notice, and the objection. The shirt is PREVENT because the sequence is printed on the ballot. Assisted marking is DETECTED only if a second person is required. That last rule is the site's, and the receipt says the gist does not name it.

Hash: 80f6efc.

## 2026-11-23 gist

What: The site follows Elections.md version 2026-11-23, gist revision 89bad82.

Why: This morning's gist adds assisted marking, a penalty for lookalike emoji materials, and an audio checksum. The red-team link was still pinned to 20 November.

How: The pin moved. Counting, the two attack rows, and the glossary match the new sections. The receipt no longer says assisted marking is missing from the gist.

Hash: 5408edd.
