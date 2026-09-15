export function SolecitDiagram() {
  return (
    <svg viewBox="0 0 600 220" className="w-full h-auto">
      {/* solecit-shop box */}
      <rect x="20" y="20" width="160" height="70" rx="6" fill="var(--color-surface)" stroke="var(--color-accent)" strokeWidth="1.5" />
      <text x="100" y="50" textAnchor="middle" fill="var(--color-foreground)" fontFamily="var(--font-mono)" fontSize="13">solecit-shop</text>
      <text x="100" y="68" textAnchor="middle" fill="var(--color-foreground-muted)" fontFamily="var(--font-mono)" fontSize="10">Next.js (B2C)</text>

      {/* solecit-admin box */}
      <rect x="420" y="20" width="160" height="70" rx="6" fill="var(--color-surface)" stroke="var(--color-accent)" strokeWidth="1.5" />
      <text x="500" y="45" textAnchor="middle" fill="var(--color-foreground)" fontFamily="var(--font-mono)" fontSize="13">solecit-admin</text>
      <text x="500" y="61" textAnchor="middle" fill="var(--color-foreground-muted)" fontFamily="var(--font-mono)" fontSize="10">Next.js frontend</text>
      <text x="500" y="75" textAnchor="middle" fill="var(--color-foreground-muted)" fontFamily="var(--font-mono)" fontSize="10">Spring Boot backend</text>

      {/* Supabase box */}
      <rect x="220" y="140" width="160" height="60" rx="6" fill="var(--color-surface)" stroke="var(--color-foreground-muted)" strokeWidth="1.5" />
      <text x="300" y="168" textAnchor="middle" fill="var(--color-foreground)" fontFamily="var(--font-mono)" fontSize="13">Supabase</text>
      <text x="300" y="184" textAnchor="middle" fill="var(--color-foreground-muted)" fontFamily="var(--font-mono)" fontSize="10">Postgres (shared)</text>

      {/* connecting lines */}
      <line x1="100" y1="90" x2="280" y2="140" stroke="var(--color-foreground-muted)" strokeWidth="1.5" />
      <line x1="500" y1="90" x2="320" y2="140" stroke="var(--color-foreground-muted)" strokeWidth="1.5" />
    </svg>
  );
}