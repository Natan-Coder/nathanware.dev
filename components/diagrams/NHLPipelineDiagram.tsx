export function NHLPipelineDiagram() {
    const steps = [
        { label: "Schedule / Results", sub: "Ingestion" },
        { label: "Elo Engine", sub: "Team ratings" },
        { label: "Live Odds", sub: "TheOddsAPI" },
        { label: "Edge Calc", sub: "ML / spread / total"},
    ];

    return (
    <svg viewBox="0 0 600 140" className="w-full h-auto">
      {steps.map((step, i) => {
        const x = 20 + i * 150;
        return (
          <g key={step.label}>
            <rect x={x} y="30" width="130" height="70" rx="6" fill="var(--color-surface)" stroke="var(--color-accent)" strokeWidth="1.5" />
            <text x={x + 65} y="60" textAnchor="middle" fill="var(--color-foreground)" fontFamily="var(--font-mono)" fontSize="11">{step.label}</text>
            <text x={x + 65} y="78" textAnchor="middle" fill="var(--color-foreground-muted)" fontFamily="var(--font-mono)" fontSize="9">{step.sub}</text>
            {i < steps.length - 1 && (
              <line x1={x + 130} y1="65" x2={x + 150} y2="65" stroke="var(--color-foreground-muted)" strokeWidth="1.5" markerEnd="url(#arrow)" />
            )}
          </g>
        );
      })}
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="var(--color-foreground-muted)" />
        </marker>
      </defs>
    </svg>
  );
}