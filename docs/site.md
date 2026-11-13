# Site

What: A static-friendly explanation of a continuous-audit election design. Home is the door. Registration and Counting are the flows. Red Team, Glossary, and Receipts are their own pages.

Why: One long page hid the record diagrams and made every claim look equally sourced. Registration is a ledger story (create, death, move). Counting is a paper story (mark, canary, three totals, one constant, a growing sample). Receipts exist so a primer link cannot be mistaken for proof.

How: Routes under `src/routes`. Copy that can rot lives next to the component that shows it. The source log is one file, `src/content/receipts.ts`, so the page and the log cannot drift. Add a receipt when you consult a source. Do not add a source that only restates the page.

Run: `npm run dev` on port 8080. Check with `npm run typecheck` and `npm run build`.
