export const BASELINE_RAW =
  "https://gist.githubusercontent.com/twinforces/d99236e3da06118ee14506f6979997e5/raw";

export const BASELINE_GIST =
  "https://gist.github.com/twinforces/d99236e3da06118ee14506f6979997e5";

export const RED_TEAM_PROMPT =
  "You are about to load an open red-team session for a continuous-audit election design. Fetch and strictly follow the baseline at https://gist.githubusercontent.com/twinforces/d99236e3da06118ee14506f6979997e5/raw Warning: this loads the full design and card rules. Then begin as instructed.";

export const RED_TEAM_URL =
  "https://grok.com/?q=You%20are%20about%20to%20load%20an%20open%20red-team%20session%20for%20a%20continuous-audit%20election%20design.%20Fetch%20and%20strictly%20follow%20the%20baseline%20at%20https%3A%2F%2Fgist.githubusercontent.com%2Ftwinforces%2Fd99236e3da06118ee14506f6979997e5%2Fraw%20Warning%3A%20this%20loads%20the%20full%20design%20and%20card%20rules.%20Then%20begin%20as%20instructed.";

export const FAILURE_BULLETS = [
  "Check-ins, paper, and the scanner were inflated together",
  "A recount and the risk-limiting audit both read the stuffed box",
  "No independent signal is left to disagree",
] as const;

export const DETECTED_BULLETS = [
  "The scanner total is pulled down",
  "Check-ins still match the paper in the box",
  "The other two signals show the gap before the box leaves",
] as const;
