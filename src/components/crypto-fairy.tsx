import { Link } from "@tanstack/react-router";

const CRYPTO_TERM_IDS = new Set([
  "append-only",
  "permissioned-ledger",
  "hyperledger-fabric",
  "msp",
  "certificate-authority",
  "endorsement-policy",
  "commitment",
]);

export function isCryptoTerm(id: string) {
  return CRYPTO_TERM_IDS.has(id);
}

function FairyMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <ellipse cx="7.2" cy="8.2" rx="3.4" ry="1.7" transform="rotate(-28 7.2 8.2)" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <ellipse cx="16.8" cy="8.2" rx="3.4" ry="1.7" transform="rotate(28 16.8 8.2)" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="6.2" r="1.35" fill="currentColor" />
      <path d="M12 8.2 L14.4 16.8 H9.6 Z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M14.2 11.2 L18.6 7.4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="19.2" cy="6.6" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function CryptoFairy({ large = false }: { large?: boolean }) {
  if (large) {
    return (
      <span className="fairy fairy-lg">
        <FairyMark />
      </span>
    );
  }
  return (
    <Link
      to="/"
      hash="crypto-fairy"
      className="fairy"
      aria-label="Crypto Fairy. Crypto is proving who, what, or where."
      title="Crypto Fairy"
    >
      <FairyMark />
    </Link>
  );
}
