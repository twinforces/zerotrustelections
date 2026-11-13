export type Category =
  | "Registration"
  | "Counting"
  | "Zero-Trust & Audit"
  | "Principles"
  | "External Systems";

export type GlossaryEntry = {
  id: string;
  term: string;
  short: string;
  note?: string;
  category: Category;
  related: string[];
  aliases?: string[];
};

export const CATEGORIES: Category[] = [
  "Registration",
  "Counting",
  "Zero-Trust & Audit",
  "Principles",
  "External Systems",
];

export const glossary: GlossaryEntry[] = [
  {
    id: "soft-delete",
    term: "Soft-delete",
    short:
      "A soft-delete marks a voter record valid=false, with a time, a reason, and a signer, and leaves the old row readable.",
    note: "Hard erasure is forbidden. A later attributed transaction can restore the record. The point is that a removal is a visible change, not a disappearance.",
    category: "Registration",
    related: ["hard-erasure", "append-only", "aggregate", "oracle"],
    aliases: ["valid=false", "reversible"],
  },
  {
    id: "hard-erasure",
    term: "Hard erasure",
    short: "Hard erasure permanently destroys a record so the prior state can no longer be queried.",
    note: "The design forbids it. If a row can vanish, no later audit can tell a legal removal from a silent one.",
    category: "Registration",
    related: ["soft-delete", "append-only"],
    aliases: ["delete", "purge"],
  },
  {
    id: "append-only",
    term: "Append-only ledger",
    short:
      "An append-only ledger records new transactions and does not let writers rewrite or drop history.",
    note: "Corrections are new transactions that point at the old ones. Every change stays sourced to an identity, a time, and a reason.",
    category: "Registration",
    related: ["permissioned-ledger", "soft-delete", "hyperledger-fabric"],
    aliases: ["ledger", "sourced"],
  },
  {
    id: "permissioned-ledger",
    term: "Permissioned ledger",
    short:
      "A permissioned ledger is a shared record book where only known, enrolled identities are allowed to write.",
    note: "This is not an anonymous public chain. States, counties, and authorized auditors write. The public reads aggregates, not the full private file.",
    category: "Registration",
    related: ["hyperledger-fabric", "msp", "world-state", "endorsement-policy"],
    aliases: ["permissioned", "blockchain"],
  },
  {
    id: "hyperledger-fabric",
    term: "Hyperledger Fabric",
    short:
      "Hyperledger Fabric is a permissioned ledger framework with known members, channels, and private data collections.",
    note: "The design is Fabric-style. It does not require that exact product, but it does require the same shape: enrolled writers, endorsement rules, and a split between private records and a public view.",
    category: "External Systems",
    related: ["permissioned-ledger", "private-data", "msp", "endorsement-policy"],
    aliases: ["fabric", "blockchain"],
  },
  {
    id: "msp",
    term: "Membership Service Provider",
    short:
      "A Membership Service Provider (MSP) decides which cryptographic identities count as members and what roles they hold.",
    note: "Writers are enrolled identities, not shared passwords. The MSP is how the ledger knows a county clerk from an auditor.",
    category: "Registration",
    related: ["certificate-authority", "permissioned-ledger", "endorsement-policy"],
    aliases: ["MSP", "membership"],
  },
  {
    id: "certificate-authority",
    term: "Certificate authority",
    short:
      "A certificate authority (CA) issues digital certificates that bind a name to a cryptographic key.",
    note: "Those certificates are what the Membership Service Provider enrolls. A signature on a roll change is attributable to a certificate, not to an anonymous account.",
    category: "Registration",
    related: ["msp", "endorsement-policy"],
    aliases: ["CA", "certificate"],
  },
  {
    id: "endorsement-policy",
    term: "Endorsement policy",
    short:
      "An endorsement policy is the rule for which identities must sign before a transaction, especially a bulk one, is accepted.",
    note: "One official cannot quietly rewrite a cohort. Bulk operations require multi-party endorsement.",
    category: "Registration",
    related: ["msp", "permissioned-ledger", "soft-delete"],
    aliases: ["multi-party", "bulk"],
  },
  {
    id: "private-data",
    term: "Private data collection",
    short:
      "A private data collection stores full personally identifiable information where only authorized members can read it.",
    note: "The public channel does not receive the voter's full record. It receives the aggregates computed from that record.",
    category: "Registration",
    related: ["pii", "world-state", "aggregate", "hyperledger-fabric"],
    aliases: ["private data", "PDC"],
  },
  {
    id: "pii",
    term: "Personally identifiable information",
    short:
      "Personally identifiable information (PII) is data that identifies a specific person, such as name, address, or date of birth.",
    note: "PII stays in private data collections. Public monitoring uses counts and distributions, plus a voter's own view of their own status.",
    category: "Registration",
    related: ["private-data", "personal-view", "aggregate"],
    aliases: ["PII", "personal data"],
  },
  {
    id: "world-state",
    term: "Public world state",
    short:
      "The public world state is the current shared view of the ledger that outsiders are allowed to read.",
    note: "In this design that view is aggregates: active totals, daily removals, last-name frequencies, and high-level change rates. It is not the private voter file.",
    category: "Registration",
    related: ["aggregate", "private-data", "permissioned-ledger"],
    aliases: ["public channel", "world state"],
  },
  {
    id: "aggregate",
    term: "Aggregate",
    short:
      "An aggregate is a count or distribution published without the underlying personal records, such as daily removals or last-name frequencies.",
    note: "Anyone can watch aggregates. A patterned removal moves the distribution even when individual names are not published. Small scattered changes can still hide, which is why personal views exist.",
    category: "Registration",
    related: ["world-state", "cohort", "soft-delete", "continuous-sample"],
    aliases: ["lastname", "last-name", "daily removals", "public aggregates"],
  },
  {
    id: "oracle",
    term: "Oracle",
    short:
      "An oracle is an outside system that supplies a fact, such as an eligibility or aliveness signal, which the ledger then records as having been consulted.",
    note: "The ledger does not replace the oracle and does not make the oracle trustworthy. It records that the oracle was used and what transaction followed.",
    category: "Registration",
    related: ["save", "eric", "soft-delete", "residual-risk"],
    aliases: ["external oracle"],
  },
  {
    id: "save",
    term: "SAVE",
    short:
      "SAVE is Systematic Alien Verification for Entitlements, a federal service that can supply a citizenship or immigration-status signal.",
    note: "Treated as an oracle. A soft-delete or flag that cites SAVE is attributable. The correctness of SAVE itself is outside the ledger.",
    category: "External Systems",
    related: ["oracle", "eric", "soft-delete"],
    aliases: ["Systematic Alien Verification for Entitlements", "USCIS"],
  },
  {
    id: "eric",
    term: "ERIC",
    short:
      "ERIC is the Electronic Registration Information Center, a multistate list-maintenance service that flags possible moves, duplicates, and deaths.",
    note: "Treated as an oracle. Member states may use its signals. The ledger records the consultation and the later roll change. It does not audit ERIC.",
    category: "External Systems",
    related: ["oracle", "save", "soft-delete"],
    aliases: ["Electronic Registration Information Center"],
  },
  {
    id: "cohort",
    term: "Cohort count",
    short:
      "A cohort count is an anonymized total for people who share a trait, such as the same last name or the same party.",
    note: "A voter may optionally see cohort counts next to their own status. Those overlapping samples are how a modest number of checkers notice a patterned change.",
    category: "Registration",
    related: ["aggregate", "personal-view", "continuous-sample"],
    aliases: ["anonymized", "lastname"],
  },
  {
    id: "provisional-ballot",
    term: "Provisional ballot",
    short:
      "A provisional ballot is a ballot set aside on election day and counted, or not, only after a later eligibility check.",
    note: "Roll changes are deliberately slow, on the order of months. An election-day dispute does not rewrite the ledger in the polling place. It becomes a provisional ballot resolved against the audited log.",
    category: "Registration",
    related: ["cap", "personal-view", "paper-ballot"],
    aliases: ["provisional"],
  },
  {
    id: "cap",
    term: "CAP trade-off",
    short:
      "The CAP trade-off is the Consistency, Availability, and Partition limit: a distributed system cannot maximize all three at once.",
    note: "The design spends latency to keep the roll consistent. Months of delay on registration changes are a choice, not an accident, so election day does not depend on a live nationwide write.",
    category: "Registration",
    related: ["provisional-ballot", "permissioned-ledger"],
    aliases: ["CAP theorem", "consistency", "latency"],
  },
  {
    id: "personal-view",
    term: "Personal phone view",
    short:
      "The personal phone view lets a voter read their own current registration status, and optionally anonymized cohort counts.",
    note: "Adoption does not need to be universal. A small fraction of people checking their own row is a continuous sample. Silent mass changes become visible to the people whose status moved.",
    category: "Registration",
    related: ["cohort", "aggregate", "continuous-sample", "pii"],
    aliases: ["phone", "smartphone", "voter app"],
  },
  {
    id: "paper-ballot",
    term: "Paper ballot",
    short: "The paper ballot is the authoritative record of the voter's choice. Machines are interpretations of that paper.",
    note: "Recounts and risk-limiting audits read the paper. If the paper itself was replaced with a consistent fake set, those checks will confirm the fake. Custody of paper is therefore part of the design, not a side issue.",
    category: "Counting",
    related: ["three-way", "rla", "chain-of-custody", "hand-count"],
    aliases: ["paper", "record of truth"],
  },
  {
    id: "three-way",
    term: "Three-way reconciliation",
    short:
      "Three-way reconciliation checks that people checked in, paper ballots secured, and scanner totals are about the same before ballots leave the precinct.",
    note: "The comparison is check-ins (or ballots issued) ≈ physical paper ≈ electronic totals. A material excess is visible on site. It is arithmetic, not a statistical proof.",
    category: "Counting",
    related: ["check-in", "paper-ballot", "scanner-total", "precinct-captain"],
    aliases: ["reconciliation", "check-ins"],
  },
  {
    id: "check-in",
    term: "Check-in",
    short: "A check-in is the record that a voter was issued a ballot at a polling place or equivalent site.",
    note: "It is one leg of the three-way reconciliation. Extra paper with no matching check-ins, or check-ins with no paper, is the signal.",
    category: "Counting",
    related: ["three-way", "scanner-total", "paper-ballot"],
    aliases: ["ballots issued", "poll book"],
  },
  {
    id: "injected-ballot",
    term: "Injected test ballot",
    short:
      "An injected test ballot is one of a fixed, publicly known set of test ballots added on purpose, then subtracted as the same constant from the official total.",
    note: "The constant is identical and published, statewide or per precinct. Insertion is observed. Raw and adjusted figures are published side by side, so everyone subtracts the same number.",
    category: "Counting",
    related: ["scanner-total", "certification", "canary"],
    aliases: ["test ballot", "constant", "injected"],
  },
  {
    id: "rla",
    term: "Risk-limiting audit",
    short:
      "A risk-limiting audit (RLA) compares a random sample of paper ballots to the machine reading, and the sample grows as the margin shrinks.",
    note: "It runs after unofficial results and before certification. On a discrepancy the sample expands until the risk limit is met or a full hand count is done. The random seed and the sample list are public. An RLA checks the paper that exists. It does not repair a stuffed ballot box.",
    category: "Counting",
    related: ["risk-limit", "margin", "random-seed", "paper-ballot", "hand-count"],
    aliases: ["RLA", "audit", "risk limiting"],
  },
  {
    id: "risk-limit",
    term: "Risk limit",
    short:
      "The risk limit is the largest chance the audit will accept a wrong outcome, set before the sample is drawn.",
    note: "A 5 percent risk limit means: if the reported outcome is wrong, the audit procedure has at most a 5 percent chance of failing to catch it and expand to a full hand count. It is not a promise that every small error is found.",
    category: "Counting",
    related: ["rla", "margin", "residual-risk"],
    aliases: ["risk limit"],
  },
  {
    id: "margin",
    term: "Margin",
    short: "The margin is the reported gap between the winner and the closest loser, which sets how large the audit sample must be.",
    note: "A wide margin can be checked with a small sample. A close race needs many more ballots. That is why the sample size is not a fixed percentage.",
    category: "Counting",
    related: ["rla", "risk-limit"],
    aliases: ["close race"],
  },
  {
    id: "random-seed",
    term: "Random seed",
    short:
      "The random seed is the published starting value that produces the audit's sample list, so outsiders can recompute the draw.",
    note: "A seed that is chosen in public, after results are reported, stops an insider from picking a friendly sample in advance. The sample list is published with it.",
    category: "Counting",
    related: ["rla", "zero-trust"],
    aliases: ["seed", "sample list"],
  },
  {
    id: "precinct-captain",
    term: "Precinct captain",
    short:
      "A precinct captain is a local party observer who watches public signals at a polling place. Their written report is not the final record.",
    note: "Captains from opposing campaigns supply an adversarial check on reconciliation, the injected offset, and local aggregates. Paper counts and published aggregates remain authoritative if the captains disagree.",
    category: "Counting",
    related: ["observer-report", "three-way", "zero-trust"],
    aliases: ["observer", "captain", "poll watcher"],
  },
  {
    id: "emoji-sequence",
    term: "Emoji sequence",
    short:
      "An emoji sequence is a unique mark for one candidate, part self-chosen and part party-assigned, printed on the ballot and on every campaign piece.",
    note: "A uniqueness threshold and a banned list keep two candidates from sharing a mark. The sequence stops the Fake Dan Sullivan problem: similar or identical names can no longer be swapped by a confusing ballot. The same sequence is the visual half of the voter's checksum.",
    category: "Counting",
    related: ["fake-dan-sullivan", "commitment", "cast-as-intended", "canary"],
    aliases: ["emoji", "emoji sequence"],
  },
  {
    id: "fake-dan-sullivan",
    term: "Fake Dan Sullivan",
    short:
      "Fake Dan Sullivan is the failure where two candidates share a name, or a name close enough that a voter marks the wrong one.",
    note: "A unique emoji sequence travels with the real candidate on the ballot and on campaign material. The other Dan, or the near-miss printing, carries a different sequence. The name is no longer the only signal.",
    category: "Counting",
    related: ["emoji-sequence", "commitment", "paper-ballot"],
    aliases: ["name collision", "identical names", "similar names", "Dan Sullivan"],
  },
  {
    id: "cast-as-intended",
    term: "Cast as intended",
    short:
      "Cast as intended means the paper the voter deposits is the choice they meant to make.",
    note: "A phone can compute the expected checksum from a voter identifier plus the candidate's emoji sequence. The voter compares that to the ballot before handing it in.",
    category: "Counting",
    related: ["commitment", "emoji-sequence", "canary"],
    aliases: ["cast-as-intended"],
  },
  {
    id: "commitment",
    term: "Checksum / commitment",
    short:
      "A checksum, also called a commitment, is a short fingerprint of a choice. The emoji sequence is the part a person can see.",
    note: "Ordinary voters keep the receipt private. A public canary publishes theirs. The phone check is optional. Secrecy is the default, not a rule that every observer must follow.",
    category: "Counting",
    related: ["cast-as-intended", "canary", "emoji-sequence", "fake-dan-sullivan"],
    aliases: ["checksum", "receipt", "commitment"],
  },
  {
    id: "canary",
    term: "Public canary",
    short:
      "A public canary is a precinct captain or other observer who rejects secrecy, votes a known party-line ballot, and puts that checksum in the published log.",
    note: "Not every ballot is secret. Only the people who choose this role give secrecy up. Everyone else keeps a private receipt. The published checksum is a human-visible audit chain: a known person, a known choice, a fingerprint outsiders can recompute. The canary's written report is still not the count.",
    category: "Counting",
    related: ["commitment", "precinct-captain", "emoji-sequence", "observer-report"],
    aliases: ["canary", "public canary", "party-line"],
  },
  {
    id: "chain-of-custody",
    term: "Chain of custody",
    short:
      "Chain of custody is the documented handling of ballots from printing and issuance through transport, storage, and audit.",
    note: "The known residual risk: if one group controls production, issuance, and custody, and keeps observers out, it can insert matching illegitimate paper. A later recount and risk-limiting audit will then agree with the stuffed box.",
    category: "Counting",
    related: ["paper-ballot", "three-way", "residual-risk", "rla"],
    aliases: ["custody", "ballot box"],
  },
  {
    id: "scanner-total",
    term: "Scanner total",
    short: "The scanner total is the electronic count produced by tabulators reading paper ballots.",
    note: "It is one leg of the three-way reconciliation and the figure a risk-limiting audit compares back to paper. It is not the record of truth.",
    category: "Counting",
    related: ["three-way", "paper-ballot", "rla", "injected-ballot"],
    aliases: ["electronic total", "tabulator"],
  },
  {
    id: "hand-count",
    term: "Hand count",
    short:
      "A hand count is a full human reading of the paper trail, used when an audit cannot confirm the reported outcome inside its risk limit.",
    note: "The risk-limiting audit is built to escalate to this. A hand count still trusts the paper in the box.",
    category: "Counting",
    related: ["rla", "paper-ballot", "risk-limit"],
    aliases: ["full count", "recount"],
  },
  {
    id: "certification",
    term: "Certification",
    short:
      "Certification is the official act that accepts an election result after unofficial totals, audits, and canvassing are done.",
    note: "The risk-limiting audit sits after unofficial results and before certification. Injected-ballot adjustments are published in both raw and adjusted form so the certified subtraction can be checked.",
    category: "Counting",
    related: ["rla", "injected-ballot"],
    aliases: ["canvass", "certify"],
  },
  {
    id: "zero-trust",
    term: "Zero trust",
    short:
      "Zero trust means every actor, including officials, vendors, observers, and software, is treated as potentially toxic until a check that does not depend on them says otherwise.",
    note: "The design does not ask the public to trust a person or a black box. It asks them to watch sourced changes, public aggregates, paper, and published arithmetic.",
    category: "Zero-Trust & Audit",
    related: ["principle-toxic", "red-team", "observer-report", "residual-risk"],
    aliases: ["zero-trust", "toxic"],
  },
  {
    id: "red-team",
    term: "Red team",
    short:
      "A red team is an exercise that tries to break a design on purpose, under the assumption that defenders may be hostile or incompetent.",
    note: "Anyone can run one against this baseline with Grok. Assuming a hostile room is the starting point, not a result. The useful cards are FAILURE, when no independent signal remains, and DETECTED, when the attack lands and another signal still shows it.",
    category: "Zero-Trust & Audit",
    related: ["failure-card", "grok", "residual-risk", "zero-trust"],
    aliases: ["red-team", "attack"],
  },
  {
    id: "continuous-sample",
    term: "Continuous sample",
    short:
      "A continuous sample is an ongoing set of overlapping checks by ordinary people, enough to surface large patterned attacks without watching every record.",
    note: "Personal phone views, public aggregates, and opposing precinct captains are the sample. Density matters. Very low participation slows detection, and the design says so.",
    category: "Zero-Trust & Audit",
    related: ["personal-view", "aggregate", "principle-sample", "precinct-captain"],
    aliases: ["sample", "monitoring"],
  },
  {
    id: "residual-risk",
    term: "Residual risk",
    short:
      "A residual risk is a way the design can still fail after its checks are working as specified.",
    note: "Named limits: full control of ballot production, issuance, and custody plus observer suppression; errors under the risk limit; trusted oracles; and very low checker density.",
    category: "Zero-Trust & Audit",
    related: ["chain-of-custody", "risk-limit", "oracle", "continuous-sample"],
    aliases: ["residual", "known limits"],
  },
  {
    id: "failure-card",
    term: "Red-team card",
    short:
      "A red-team card is one of three labels, a scenario name, and exactly three short bullets.",
    note: "FAILURE means the attacker got through and no independent signal is left. DETECTED means the attack had an effect and at least one signal still surfaces it. Knocking out one of the three counting signals is DETECTED when the other two still disagree. DESIGN HELD means the attack was prevented or made impractical. PARTIAL is retired. A hostile room is the assumption, not a failure.",
    category: "Zero-Trust & Audit",
    related: ["red-team", "grok", "three-way", "residual-risk"],
    aliases: ["FAILURE", "DETECTED", "DESIGN HELD", "PARTIAL", "failure card"],
  },
  {
    id: "observer-report",
    term: "Observer report",
    short:
      "An observer report is a written note from a precinct captain or other watcher. It is evidence of what they saw, and it is not the authoritative count.",
    note: "Opposing captains are an adversarial check on simple public signals. If they conflict, paper and published aggregates still decide. A toxic captain filing a false checklist does not rewrite the total.",
    category: "Zero-Trust & Audit",
    related: ["precinct-captain", "three-way", "zero-trust"],
    aliases: ["checklist", "watcher"],
  },
  {
    id: "crypto-fairy",
    term: "Crypto Fairy",
    short:
      "The Crypto Fairy marks a place where cryptography is proving who did something, what it was, or where it sits in the log.",
    note: "It is a reading mark, not a claim that crypto solves elections. The joke on the home page is the author's: being able to follow the math, and having a shitcoin called $GRUMPYSHITCOIN, is not the same as taking crypto seriously. Paper and public arithmetic still decide the count.",
    category: "Principles",
    related: ["permissioned-ledger", "commitment", "msp", "append-only"],
    aliases: ["fairy", "GRUMPYSHITCOIN"],
  },
  {
    id: "principle-perfect",
    term: "Perfect is the enemy of the good",
    short:
      "This principle says a design that can be deployed and watched beats a perfect scheme that never ships.",
    note: "The baseline prefers simple public signals and named residual risks over a claim of impossibility for every attack.",
    category: "Principles",
    related: ["principle-simple", "residual-risk", "principle-sunlight"],
    aliases: ["perfect"],
  },
  {
    id: "principle-sunlight",
    term: "Sunlight is the best disinfectant",
    short:
      "This principle says sourced, public changes are safer than records only an insider can see.",
    note: "Aggregates, attributed soft-deletes, published seeds, and side-by-side raw and adjusted totals are the sunlight. Secrecy of the individual ballot stays intact.",
    category: "Principles",
    related: ["aggregate", "world-state", "random-seed"],
    aliases: ["sunlight", "disinfectant"],
  },
  {
    id: "principle-sample",
    term: "A continuous sample is enough",
    short:
      "This principle says large patterned attacks show up if a modest, overlapping set of people keeps looking, even if most people never look.",
    note: "It is a statistical and social claim, not a promise about a single precinct with no observers and no phone checks.",
    category: "Principles",
    related: ["continuous-sample", "personal-view", "residual-risk"],
    aliases: ["continuous sample"],
  },
  {
    id: "principle-toxic",
    term: "Every actor is potentially toxic",
    short:
      "This principle says officials, vendors, parties, observers, oracles, and software are all capable of being the attacker.",
    note: "No role is the root of trust. Checks are built so that one role's word is never the only record.",
    category: "Principles",
    related: ["zero-trust", "observer-report", "oracle"],
    aliases: ["toxic"],
  },
  {
    id: "principle-litigation",
    term: "Litigation will happen",
    short:
      "This principle says lawsuits are assumed, so the record has to be explainable to a court that was not in the room.",
    note: "Attributed reversible changes, paper, and published arithmetic are there so a later fight has a file, not a recollection.",
    category: "Principles",
    related: ["append-only", "paper-ballot", "soft-delete"],
    aliases: ["litigation", "court"],
  },
  {
    id: "principle-simple",
    term: "Keep it simple",
    short:
      "This principle says the signals a captain or a voter checks must be simple enough to do without trusting an expert in the room.",
    note: "Three numbers, one published constant, a personal status, a last-name distribution. Complexity that only a vendor can interpret is treated as a failure of the design.",
    category: "Principles",
    related: ["three-way", "injected-ballot", "principle-perfect"],
    aliases: ["simple"],
  },
  {
    id: "grok",
    term: "Grok",
    short:
      "Grok is the xAI assistant used here as an open red-team partner that loads the design baseline and tries the scenario you supply.",
    note: "The launch link fetches the baseline gist and follows it: concern, role, then attack scenarios, ending in a FAILURE, DETECTED, or DESIGN HELD card. Grok is not an election authority.",
    category: "External Systems",
    related: ["red-team", "failure-card", "zero-trust"],
    aliases: ["xAI"],
  },
];

export const glossaryById: Record<string, GlossaryEntry> = Object.fromEntries(
  glossary.map((entry) => [entry.id, entry]),
);
