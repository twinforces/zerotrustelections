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

export function CryptoFairy({ large = false }: { large?: boolean }) {
  const img = (
    <img
      className={large ? "fairy fairy-lg" : "fairy"}
      src="/crypto-fairy.jpg"
      alt=""
      width={large ? 88 : 28}
      height={large ? 88 : 28}
    />
  );
  if (large) return img;
  return (
    <Link
      to="/"
      hash="crypto-fairy"
      className="fairy-link"
      aria-label="Crypto Fairy. Crypto is proving who, what, or where."
      title="Crypto Fairy"
    >
      {img}
    </Link>
  );
}
