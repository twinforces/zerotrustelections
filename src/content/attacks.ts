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
  { id: "DETECTED", label: "DETECTED", means: "The attack can land, and a signal surfaces it. A material, attributed detection authorizes a mulligan of the affected contest." },
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
        handling:
          "Red team, resolved. Photo-swapped ID is used on purpose so the check-in acknowledgement never fires. The provisional is recorded at cast time, shown on that person's phone, and a notice is mailed before it can count. An objection keeps that ballot out. A rate above the precinct's history adds it to the random challenge. The totals still match, because the paper is a real provisional. The signal is the acknowledgement and the objection, not a mismatch.",
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
        handling:
          "Scanners produce images only. More than one scan must agree, and known test images must match the ones committed in advance. At least three independent programs count the images and must match exactly. A disagreement throws out the electronic total and expands the audit or the mulligan. Paper is still the record.",
      },
      {
        name: "Lookalike emoji shirt",
        verdict: "PREVENT",
        handling:
          "Red team, resolved. The official sequence is printed on the ballot next to the name, and published before election day in high-contrast shape-plus-text form at the polling place and in the phone app. A uniqueness threshold and a banned list keep two official sequences from being near copies. Making or handing out a lookalike sequence is a criminal offense: a fine, and possible disqualification from running elections. The optional checksum is not the control. The audit counts the printed line that was marked.",
      },
      {
        name: "Partisan assisted marking",
        verdict: "DETECTED",
        handling:
          "Red team, resolved. Assisted marking requires observers from both major parties, or one party observer plus an independent. A personal assistant is still allowed, and may not be the sole marker unless those observers are also present. The ledger records the voter, the assistant, and the observers. One partisan worker marking it alone is a control violation. The paper will match that mark. The signal is the missing observers and the log. After the ballot is cast, the voter can hear an audio rendering of the checksum. If no observer is allowed in the room at all, that is the existing custody residual, not this case.",
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
          "Risk-limiting audit and test ballots. The leftover case, an attacker who also controls the paper, defeats the custody controls. That is the dystopia. The ordinary case is DETECTED, and a material detection authorizes a mulligan of that contest.",
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
          "Only if one actor controls production, issuance, and custody, and the paper matches the lie. That defeats the published custody controls. No design can guarantee a clean result there. The failure is named and litigated instead of silently certified.",
      },
      {
        name: "Single-operator paper custody",
        verdict: "DETECTED",
        handling:
          "Red team, resolved. Normal procedure no longer lets one office produce, issue, and keep the paper alone. Roles are split, or the site films issuance, sealing, and opening. Seals are dual-control. The issued count is public before close. A random set of precincts is pulled. Breaking that procedure is a visible control violation before certification, and it authorizes a mulligan. The totals matching is expected if the paper was swapped. The signal is the broken procedure. Defeating the video, the seals, and the challenge as well is the sole-custody residual above, not this case.",
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
          "Same path as sole custody. Suppressing the watchers is how the lie stays hidden. No design guarantees a clean result. The violation is named instead of certified.",
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
          "If voters are being attacked at the polls, there is no procedure left to trust. Outside the technical controls. Named and litigated, not certified as a clean count.",
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
