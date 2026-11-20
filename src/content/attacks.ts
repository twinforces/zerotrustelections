export type Verdict = "PREVENT" | "DETECTED" | "RESIDUAL" | "PARTIAL";

export type Attack = {
  name: string;
  verdict: Verdict;
  handling: string;
};

export type AttackGroup = {
  id: string;
  title: string;
  items: Attack[];
};

export const VERDICTS: { id: Verdict | "ALL"; label: string; means: string }[] = [
  { id: "ALL", label: "All", means: "" },
  { id: "PREVENT", label: "PREVENT", means: "Prevented, or impractical under the baseline." },
  { id: "DETECTED", label: "DETECTED", means: "The attack can land, and a signal surfaces it. The statute then declares that election a mulligan and it is run again." },
  { id: "RESIDUAL", label: "RESIDUAL", means: "Still possible if the named controls are also defeated." },
  { id: "PARTIAL", label: "PARTIAL", means: "Limited by how many people are checking, or by a similar gap." },
];

export const attackGroups: AttackGroup[] = [
  {
    id: "registration",
    title: "Registration and the voter roll",
    items: [
      {
        name: "Ghost or deceased left active",
        verdict: "DETECTED",
        handling: "Oracle, personal view, and public aggregates.",
      },
      {
        name: "Selective or patterned soft-deletes",
        verdict: "DETECTED",
        handling: "Last name, party, or geography shows up in the public aggregates. The soft-delete is attributed.",
      },
      {
        name: "Duplicate or multi-state exploitation",
        verdict: "DETECTED",
        handling: "Oracle plus the voter's own status.",
      },
      {
        name: "Photo-swapped ID, impersonating a non-voter",
        verdict: "PARTIAL",
        handling: "Check-in acknowledgement catches it for people using the phone check. Non-app users stay exposed.",
      },
      {
        name: "Provisional side-door impersonation",
        verdict: "DETECTED",
        handling: "Provisional acknowledgement, the objection window, and a rate trigger.",
      },
      {
        name: "Oracle or list-maintenance poisoning",
        verdict: "RESIDUAL",
        handling:
          "Not a dystopia. A bad death file can exist in an ordinary jurisdiction. The ledger records that the oracle was used. The oracle itself is trusted.",
      },
      {
        name: "Insider bulk roll edits",
        verdict: "DETECTED",
        handling: "Multi-party endorsement, aggregates, and attribution.",
      },
    ],
  },
  {
    id: "casting",
    title: "Voting and casting",
    items: [
      {
        name: "Ballot stuffing, extra ballots",
        verdict: "DETECTED",
        handling: "Three-way reconciliation, plus an early commitment of how many ballots were issued.",
      },
      {
        name: "Repeat voting or cooping",
        verdict: "DETECTED",
        handling: "Check-in acknowledgement, and the provisional path.",
      },
      {
        name: "Ballot-marking device malware, screen does not match paper",
        verdict: "DETECTED",
        handling: "The voter can see the paper. Paper is primary. A closer race pulls more of it.",
      },
      {
        name: "Paperless DRE vote flipping",
        verdict: "PREVENT",
        handling: "The design requires paper.",
      },
      {
        name: "Memory-card or firmware malware on scanners",
        verdict: "DETECTED",
        handling: "Injected test ballots, the risk-limiting audit, and reconciliation.",
      },
      {
        name: "Internet or remote voting compromise",
        verdict: "PREVENT",
        handling: "Remote voting is not used.",
      },
    ],
  },
  {
    id: "tabulation",
    title: "Tabulation and counting",
    items: [
      {
        name: "Scanner under-count or over-count",
        verdict: "DETECTED",
        handling: "The injected constant, the risk-limiting audit, and reconciliation.",
      },
      {
        name: "Central tabulator race or overwrite",
        verdict: "DETECTED",
        handling: "Paper is primary. The risk-limiting audit reads paper.",
      },
      {
        name: "Insider changes the total after close",
        verdict: "DETECTED",
        handling: "Paper, the early commitments, and the risk-limiting audit.",
      },
      {
        name: "Audit-log deletion or forgery",
        verdict: "DETECTED",
        handling: "The ledger is append-only. Paper is still there.",
      },
      {
        name: "Supply-chain or firmware substitution",
        verdict: "DETECTED",
        handling:
          "Risk-limiting audit and test ballots. The leftover case, an attacker who also controls the paper, is the same dystopia as sole custody. That is out of scope. The ordinary case is DETECTED, and the statute re-runs it.",
      },
    ],
  },
  {
    id: "custody",
    title: "Chain of custody and paper",
    items: [
      {
        name: "Sole control of production, issuance, and custody, with matching illegitimate paper",
        verdict: "RESIDUAL",
        handling:
          "Only if one actor controls production, issuance, and custody, and the paper matches the lie. That is a dystopia. A clean election inside that room is out of scope.",
      },
      {
        name: "Seal bypass or container swap",
        verdict: "DETECTED",
        handling: "Dual-control seals, live observation, and a random challenge.",
      },
      {
        name: "Observer suppression",
        verdict: "RESIDUAL",
        handling:
          "Same dystopia as sole custody. Suppressing the watchers is how the lie stays hidden. Out of scope, not a separate hole.",
      },
      {
        name: "Selective destruction, or a box called lost",
        verdict: "DETECTED",
        handling: "Early commitment, reconciliation, and a random challenge.",
      },
    ],
  },
  {
    id: "process",
    title: "Denial of service and process",
    items: [
      {
        name: "Swamping with challenges or provisionals",
        verdict: "PARTIAL",
        handling: "A flag scopes to one record. A mass pattern is still visible.",
      },
      {
        name: "False flags to stall certification",
        verdict: "PREVENT",
        handling: "A flag investigates only that single record.",
      },
      {
        name: "DDoS or ransomware on registration or reporting",
        verdict: "PARTIAL",
        handling: "Precinct mirrors, a freeze, and the provisional path.",
      },
      {
        name: "Disinformation and narrative attacks",
        verdict: "PARTIAL",
        handling: "Sunlight and public aggregates reduce this. They do not eliminate it.",
      },
      {
        name: "Intimidation or swatting at the polls",
        verdict: "RESIDUAL",
        handling:
          "A dystopia. If voters are being attacked at the polls, there is no election left to clean up. Out of scope, and outside the technical controls.",
      },
    ],
  },
  {
    id: "history",
    title: "Historical exemplars",
    items: [
      {
        name: "Tammany-style repeaters and cooping",
        verdict: "DETECTED",
        handling: "Same path as repeat voting.",
      },
      {
        name: "Returning-board fabrication, Box 13 late ballots",
        verdict: "DETECTED",
        handling: "Paper is primary. The issued count was committed early. The risk-limiting audit reads paper.",
      },
      {
        name: "Machine-era ghost voting",
        verdict: "DETECTED",
        handling: "Same path as a ghost left active on the roll.",
      },
      {
        name: "Academic DRE demonstrations (Diebold, Sequoia, and the rest)",
        verdict: "PREVENT",
        handling: "Paper is required. A paperless machine is out of the design.",
      },
    ],
  },
];
