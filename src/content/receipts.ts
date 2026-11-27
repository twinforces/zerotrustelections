export type Receipt = {
  id: string;
  claim: string;
  appears: string;
  source: string;
  href: string;
  supports: string;
};

export type ReceiptGroup = {
  id: string;
  title: string;
  note: string;
  items: Receipt[];
};

const GIST = "https://gist.github.com/twinforces/d99236e3da06118ee14506f6979997e5";
const GIST_RAW =
  "https://gist.githubusercontent.com/twinforces/d99236e3da06118ee14506f6979997e5/raw/80a0c45aed80cb6f2f5e62c7c6c350a2c52cfcd2/Elections.md";

export const receipts: ReceiptGroup[] = [
  {
    id: "authority",
    title: "What this site is allowed to claim",
    note: "The site is a design proposal. A primer explains a public idea. It does not endorse this design. Where the gist and a later instruction disagree, the receipt says so.",
    items: [
      {
        id: "gist",
        claim: "The design baseline is the public gist Elections.md, version 2026-11-27.",
        appears: "Footer, Red Team, and every flow that says it follows the baseline.",
        source: "twinforces/Elections.md",
        href: GIST,
        supports:
          "Confirmed 27 November 2026 against gist revision 80a0c45aed80cb6f2f5e62c7c6c350a2c52cfcd2. The version line now says 2026-11-27. This revision adds the hardware controls: a standard ballot layout, image-only scanners that must agree, external test oracles, a physical shuffler, public images, captain canaries as live tests, and three independent counters. The red-team link fetches that revision, not the unpinned raw URL.",
      },
      {
        id: "gist-raw",
        claim: "Red-team sessions load the raw baseline, not this website.",
        appears: "Red Team button and the query string on grok.com.",
        source: "Raw gist",
        href: GIST_RAW,
        supports:
          "The button uses the grok.com/?q= form. The query tells Grok to fetch revision 80a0c45aed80cb6f2f5e62c7c6c350a2c52cfcd2, not the unpinned raw URL. A change on the website does not change the session. A later gist edit does not either, until this pin is moved.",
      },
      {
        id: "session",
        claim: "Some wording on the site is stricter than the gist, because it was specified in the build, not in Elections.md.",
        appears: "Counting (emoji, canary, Fake Dan Sullivan) and Red Team (DETECTED versus one of three signals).",
        source: "Build instructions, 13 November 2026",
        href: GIST,
        supports:
          "There is no separate published paper for those sentences. The gist is the linked record. The receipt below names each place the gist is thinner than the page.",
      },
      {
        id: "home-sell",
        claim: "The home page is jobs, then why you cannot do them, then what this does, then what you get.",
        appears: "Home.",
        source: "Author's marketing notes, 13 November 2026, read against Elections.md",
        href: GIST,
        supports:
          "Two decks supplied that day, one for the roll and one for the count, are the wording. The gist already says to map a scenario onto voter, official, and observer jobs. The decks add courts and the public, and they name the pains and the gains. They are not a published study, and they are not evidence the design works.",
      },
      {
        id: "attacks-catalog",
        claim: "The Attacks page grades known cases PREVENT, DETECTED, RESIDUAL, or PARTIAL. That PARTIAL is a catalog grade, not a red-team card.",
        appears: "Attacks. The red-team page points at it. The glossary says the card itself does not use PARTIAL.",
        source: "Author's attack catalog, 20 November 2026",
        href: GIST,
        supports:
          "The list of cases was supplied for the site. The four grades are the catalog, not the card labels. Check-in acknowledgement and provisional acknowledgement are in the 20 November baseline. The gist still scores a session as FAILURE, DETECTED, or DESIGN HELD. The catalog is not a finished red-team log.",
      },
      {
        id: "mulligan",
        claim: "A material, attributed detection authorizes a mulligan of the affected contest. Defeating the custody controls is a dystopia the design cannot guarantee clean.",
        appears: "Attacks, Counting, the risk-limiting audit dive, local observers, Red Team, and the glossary.",
        source: "Elections.md, version 2026-11-20, detected-attack mulligan and known residual risks",
        href: GIST,
        supports:
          "The 20 November baseline says a reconciliation failure, an aggregate anomaly above threshold, a provisional-rate trigger, an observer-documented control violation, or a risk-limiting audit that expands to a full count authorizes the authority for that contest to declare a mulligan. The re-run uses the same paper and custody controls, on a compressed timetable. Perpetrators are jointly and severally liable for twice the full cost. Residuals that require defeating the published custody, observation, and challenge controls are dystopia cases. No technical design can guarantee a clean result there. They are named, litigated, and, where the statute applies, re-run at the perpetrators' expense instead of silently certified. A poisoned oracle stays a trusted input.",
      },
      {
        id: "red-team-four",
        claim: "Four red-team failures are resolved: single-operator custody, the provisional side door, a lookalike emoji shirt, and partisan assisted marking.",
        appears: "Attacks. Counting states the assistance rule. The glossary states the shirt and the assistance rule.",
        source: "Red-team cases supplied 23 November 2026, read against Elections.md version 2026-11-23",
        href: GIST,
        supports:
          "Single-operator custody and the provisional side door are closed by the custody controls and the provisional acknowledgement. The 23 November baseline also names the other two. Assisted marking requires observers from both major parties, or one party observer plus an independent. A personal assistant may not be the sole marker unless those observers are present, and the marking is logged. Lookalike emoji materials are a criminal offense. Official sequences are published before election day in high-contrast shape-plus-text form. An audio rendering of the checksum is archived after the ballot is cast. If no observer is allowed in the room at all, that is the existing custody residual, not a new hole.",
      },
    ],
  },
  {
    id: "registration",
    title: "Registration",
    note: "These claims are in the gist registration section. The primers are explainers for readers, not evidence that this roll design is deployed.",
    items: [
      {
        id: "soft-delete",
        claim: "A roll change sets valid=false with a time, a reason, and a signer. The row is not erased. A later write can turn it back on.",
        appears: "Registration, death diagram.",
        source: "Elections.md, registration",
        href: GIST,
        supports:
          "The gist forbids hard erasure, keeps the prior state queryable, and says the change is reversible by a later attributed transaction.",
      },
      {
        id: "ledger",
        claim: "Writers are known offices on an append-only permissioned ledger. Bulk writes need more than one party.",
        appears: "Registration, the rules under the three flows.",
        source: "Elections.md, registration",
        href: GIST,
        supports:
          "The gist names Hyperledger Fabric as the style, Membership Service Provider, certificate authorities, and multi-party endorsement for bulk operations.",
      },
      {
        id: "fabric",
        claim: "A permissioned ledger is not the same thing as a public chain.",
        appears: "Registration primers.",
        source: "Hyperledger Fabric, What is Hyperledger Fabric? and Blockchain network",
        href: "https://hyperledger-fabric.readthedocs.io/en/latest/whatis.html",
        supports:
          "Consulted so the primer link is a real Fabric overview. The permissioned-versus-public page is the second primer. Fabric does not describe this voter roll.",
      },
      {
        id: "fabric-public",
        claim: "The second Fabric primer is the permissioned-versus-public explanation.",
        appears: "Registration primers.",
        source: "Hyperledger Fabric, Blockchain network",
        href: "https://hyperledger-fabric.readthedocs.io/en/latest/blockchain.html",
        supports: "Linked from the registration page. It is an explainer, not a source for the roll rules.",
      },
      {
        id: "nist",
        claim: "Readers who need a plain definition of a blockchain get NIST, not a vendor page.",
        appears: "Registration primers.",
        source: "NIST, Blockchain",
        href: "https://www.nist.gov/blockchain",
        supports:
          "Consulted as the off-site primer labeled What is a blockchain? NIST is not a source for soft-delete, aggregates, or this design.",
      },
      {
        id: "aggregates",
        claim: "The public sees counts. Full personal records stay private.",
        appears: "Registration rules.",
        source: "Elections.md, registration",
        href: GIST,
        supports:
          "The gist lists public aggregates: active totals, daily removals, last-name frequencies, and change rates. Private data collections hold personally identifiable information.",
      },
      {
        id: "phone",
        claim: "A voter can read their own status. A modest number of people checking is treated as enough to see a large pattern.",
        appears: "Registration, phone step on each flow.",
        source: "Elections.md, registration and principles",
        href: GIST,
        supports:
          "The gist describes the phone view and anonymized cohort counts, and the principle that a continuous sample can surface large patterned attacks. It also names very low adoption as a residual risk.",
      },
      {
        id: "oracles",
        claim: "Outside eligibility or death signals stay trusted inputs. The ledger records that they were consulted.",
        appears: "Registration known limit, death flow.",
        source: "Elections.md, registration and known residual risks",
        href: GIST,
        supports:
          "The gist names Systematic Alien Verification for Entitlements and the Electronic Registration Information Center as examples. It says the ledger does not replace the oracle.",
      },
      {
        id: "move",
        claim: "A move is the same record, with location changed from one place to another, not a delete plus a new person.",
        appears: "Registration, move diagram.",
        source: "Build instruction, 13 November 2026, read against the gist",
        href: GIST,
        supports:
          "The gist says every change is an attributed ledger write and that hard erasure is forbidden. It does not draw the Location 1 to Location 2 example. That diagram is the build instruction applied to the gist rule. It is not a separate statute or paper.",
      },
    ],
  },
  {
    id: "counting",
    title: "Counting",
    note: "Paper, the three totals, the injected constant, and the risk-limiting audit are in the gist. The emoji story and the canary story are only partly in the gist.",
    items: [
      {
        id: "paper",
        claim: "Paper ballots are the record. Scanners interpret them.",
        appears: "Counting, ballot flow.",
        source: "Elections.md, counting",
        href: GIST,
        supports: "The gist says paper ballots are the authoritative record.",
      },
      {
        id: "eac",
        claim: "Paper handling has a public election-administration primer.",
        appears: "Counting primers.",
        source: "U.S. Election Assistance Commission, Election Management Guidelines",
        href: "https://www.eac.gov/election-officials/election-management-guidelines",
        supports:
          "Linked as a primer on paper, custody, and election-day handling. It is not the source of the three-way check or the injected constant.",
      },
      {
        id: "emoji",
        claim: "Each candidate has a unique emoji sequence, part self-chosen and part party-assigned, on the ballot and on campaign material.",
        appears: "Counting, ballot diagram.",
        source: "Elections.md, counting",
        href: GIST,
        supports:
          "The gist states the sequence, the uniqueness threshold, and the banned list. It does not name Fake Dan Sullivan.",
      },
      {
        id: "fake-dan",
        claim: "The sequence stops a similar or identical name from being the only thing a voter can see.",
        appears: "Counting, ballot diagram, glossary entry Fake Dan Sullivan.",
        source: "Build instruction, 13 November 2026",
        href: GIST,
        supports:
          "The name Fake Dan Sullivan and the lookalike-ballot example are from the build instruction. The gist supplies the unique sequence. It does not tell that story.",
      },
      {
        id: "checksum",
        claim: "A phone can compute a checksum from a voter identifier plus the emoji sequence. Ordinary voters keep that receipt private.",
        appears: "Counting, ballot flow.",
        source: "Elections.md, counting",
        href: GIST,
        supports:
          "The gist calls the phone check optional and says ordinary voters retain private receipts.",
      },
      {
        id: "canary",
        claim: "A captain or other observer may reject secrecy, vote a known party line, and must publish that checksum.",
        appears: "Counting, canary fork.",
        source: "Build instruction, 13 November 2026. Gist is thinner.",
        href: GIST,
        supports:
          "The gist says public canaries are optional and limited, and that captains may check canary checksums. It does not say they reject secrecy or vote a published party line. The page uses the stronger instruction and the receipt keeps the gap visible.",
      },
      {
        id: "three-way",
        claim: "At close, check-ins, paper secured, and the scanner total are compared in the room.",
        appears: "Counting, reconcile diagram.",
        source: "Elections.md, counting",
        href: GIST,
        supports:
          "The gist says a material excess is visible before ballots leave the precinct.",
      },
      {
        id: "one-of-three",
        claim: "Compromising one of those three signals is DETECTED if another still shows the attack. FAILURE is only when no independent signal remains.",
        appears: "Counting reconcile note, Red Team.",
        source: "Build instruction, 13 November 2026, plus the gist outcome labels",
        href: GIST,
        supports:
          "The gist defines DETECTED as an attack that still has at least one independent signal, and FAILURE as no signal remaining. It does not say the three signals are check-ins, paper, and the scanner. That mapping is the build instruction.",
      },
      {
        id: "injected",
        claim: "Test ballots are a fixed public constant. Everyone subtracts the same number. Raw and adjusted totals are both published.",
        appears: "Counting, constant flow.",
        source: "Elections.md, counting",
        href: GIST,
        supports:
          "The gist says the constant is identical per candidate, insertion is observed, and both figures are published.",
      },
      {
        id: "rla",
        claim: "The paper sample grows as the margin shrinks, up to a full hand count. The seed and the sample list are public.",
        appears: "Counting, audit bars.",
        source: "Elections.md, counting",
        href: GIST,
        supports: "That sample rule is the gist, not a number copied from the primer.",
      },
      {
        id: "rla-primer",
        claim: "A reader who wants the general idea of a risk-limiting audit gets Verified Voting.",
        appears: "Counting primers.",
        source: "Verified Voting, What is a risk-limiting audit?",
        href: "https://verifiedvoting.org/audits/whatisrla/",
        supports:
          "Consulted as the primer. It explains the method in general. It is not the source of this design's risk limit or sample rule.",
      },
      {
        id: "observers",
        claim: "Observer notes are not the count. Opposing captains are an adversarial pair.",
        appears: "Counting, observers section.",
        source: "Elections.md, counting",
        href: GIST,
        supports:
          "The gist says written reports are not authoritative and that paper and published aggregates remain the record.",
      },
      {
        id: "firmware",
        claim: "Scanners produce images only. At least three independent programs must count them and match exactly. The images are then published, with no voter identity.",
        appears: "Counting, the firmware section. The canary section. Attacks, scanner firmware.",
        source: "Elections.md revision 298ba5a, diverse image-and-count pipeline and public ballot images",
        href: GIST,
        supports:
          "Added 24 November 2026. The file's version line at that time still said 2026-11-23. The 27 November baseline keeps the pipeline and adds the hardware controls on their own page. Several scans of a batch must agree. Disagreement throws out the electronic total. Paper stays authoritative. The diagram is a double fan: one ballot to three scanners, one canonical image, three counters, one canonical tally. Publishing the images means anyone can run their own counting software.",
      },
      {
        id: "hardware",
        claim: "A dumb scanner is enough because the layout is standard, at least two images must agree, outside services hold the test images, a shuffler hides which sheet is a test, the pictures are public, captains are live tests, and three programs must match.",
        appears: "Hardware.",
        source: "Elections.md, version 2026-11-27, standard ballot layout through test-ballot indistinguishability",
        href: GIST,
        supports:
          "Confirmed against gist revision 80a0c45aed80cb6f2f5e62c7c6c350a2c52cfcd2. Scanners emit a raw or lossless image plus device ID and timestamp, and at least two must agree within a published pixel tolerance. External services commit test-image pools before the election and reveal only an assigned subset after the scans are hash-committed. Local staff never hold the expected images. A physical shuffler randomizes hopper order under dual control. There is no operator test mode and no test flag, only a page ID. Captain canaries cast through that same path. Three independent programs, each past a public validation suite, must match exactly or the electronic total is thrown out. The older short pipeline section is still in the file below these rules.",
      },
      {
        id: "custody",
        claim: "Defeating the published custody, observation, and challenge controls can still produce matching illegitimate paper. The design names that failure. It does not promise a clean result.",
        appears: "Counting custody section and known limit. Red Team FAILURE card.",
        source: "Elections.md, version 2026-11-20, paper-custody controls and known residual risks",
        href: GIST,
        supports:
          "The baseline requires role separation, a live-video fallback, dual-control seals, an early public commitment of ballots issued, and an external random challenge. It says those rules do not make sole-custody attacks impossible. The FAILURE card is an illustration of the case where check-ins, paper, and the scanner were moved together, not a new finding.",
      },
    ],
  },
  {
    id: "scoring",
    title: "Red-team cards",
    note: "Re-checked 23 November 2026, revision 89bad82. PARTIAL is still absent from the card labels. One operating bullet still paints FAILURE and DETECTED in the same dark red style. The image rules, and this site, keep DETECTED amber.",
    items: [
      {
        id: "labels",
        claim: "A card is FAILURE, DETECTED, or DESIGN HELD. Exactly one label. Three bullets.",
        appears: "Red Team.",
        source: "Elections.md, outcome labels",
        href: GIST,
        supports:
          "FAILURE: no independent signal left. DETECTED: the attack had an effect and a signal still shows it. DESIGN HELD: prevented or impractical. DETECTED uses amber. FAILURE uses red. DESIGN HELD uses navy and teal.",
      },
      {
        id: "partial-retired",
        claim: "PARTIAL is retired. The gist now says DETECTED.",
        appears: "Red Team, glossary entry Red-team card.",
        source: "Elections.md, operating rules and outcome labels",
        href: GIST_RAW,
        supports:
          "Re-fetched 13 November 2026. The operating bullet that used to say PARTIAL now says FAILURE or DETECTED. The outcome list matches. The site never used PARTIAL.",
      },
      {
        id: "grok",
        claim: "The launch button opens grok.com with the fetch instruction in the query.",
        appears: "Red Team.",
        source: "grok.com query link",
        href: "https://grok.com/",
        supports:
          "The exact query is in src/content/red-team.ts. grok.com is the session host. It is not an election authority.",
      },
    ],
  },
  {
    id: "identity",
    title: "Identity and type",
    note: "These were used to put a name and a face on the page. They are not evidence for the election design.",
    items: [
      {
        id: "joint",
        claim: "The subtitle credits the work as a GrumpyTechBro joint.",
        appears: "Home title, footer.",
        source: "grumpytechbro.com",
        href: "https://www.grumpytechbro.com/",
        supports: "The link target specified for the subtitle. It opens in a new tab.",
      },
      {
        id: "x",
        claim: "The public handle is @GrumpyTechBro.",
        appears: "Home kicker, footer.",
        source: "X, @GrumpyTechBro",
        href: "https://x.com/GrumpyTechBro",
        supports: "Linked from the footer. The handle is also on the GitHub profile for twinforces.",
      },
      {
        id: "photo",
        claim: "The icon beside the title is the X portrait supplied for this site, not the GitHub avatar.",
        appears: "Home title and the header mark.",
        source: "X portrait, supplied 13 November 2026",
        href: "https://x.com/GrumpyTechBro",
        supports:
          "The file handed to the build was GrumpySource.jpg. It is stored at public/grumpy.jpg so the page does not hotlink X. The GitHub avatar was the first mark and was the wrong picture.",
      },
      {
        id: "crypto-fairy",
        claim: "A small fairy marks the spots where cryptography is proving who, what, or where. It is not an endorsement of crypto.",
        appears: "Home, and beside ledger, identity, and checksum terms.",
        source: "Build instruction, 13 November 2026",
        href: "https://github.com/twinforces/zerotrustelections/blob/main/src/components/crypto-fairy.tsx",
        supports:
          "The home sentence, including $GRUMPYSHITCOIN, is the author's wording. There is no paper behind the fairy. The picture is an original illustration in an animated-feature style, not a named character. It sits on the explanations that use a ledger, a signature, or a checksum, and on those glossary terms.",
      },
      {
        id: "fonts",
        claim: "The page is set in Public Sans and Source Serif 4.",
        appears: "Every page.",
        source: "Google Fonts stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Source+Serif+4:opsz,wght@8..60,500;8..60,600&display=swap",
        supports: "Loaded from the root document. Not a source for any election claim.",
      },
    ],
  },
  {
    id: "process",
    title: "How the repo is kept",
    note: "Process sources. Not election evidence.",
    items: [
      {
        id: "ringmaster",
        claim: "Session hygiene follows the Ringmaster pack: docs/RECENTGOALS.md, docs/CHANGELOG.md, and a why-first note for the site.",
        appears: "docs/",
        source: "twinforces/grokdevprompts, plugins/ringmaster",
        href: "https://github.com/twinforces/grokdevprompts/tree/main/plugins/ringmaster",
        supports:
          "Loaded 13 November 2026 from the bootstrap-prompt skill, which points at references/master-prompt.md and references/file-edit-discipline.md. The pack is how the repo is kept, not a source for the design.",
      },
    ],
  },
];
