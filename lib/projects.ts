export type Project = {
  slug: string;
  title: string;
  tagline: string;
  stat?: string;
  tags: string[];
  size: "large" | "medium" | "small";
  hasDiagram: boolean;
  caseStudy: {
    problem: string;
    approach: string;
    impact: string;
  };
};

export const projects: Project[] = [
  {
    slug: "solecit-platform",
    title: "Solecit",
    tagline: "Co-founder & technical lead on a two-app marketplace platform",
    stat: "2 apps, 1 shared database, 0 downtime migrations",
    tags: ["Next.js", "Spring Boot", "Supabase/Postgres"],
    size: "large",
    hasDiagram: true,
    caseStudy: {
        problem:
          "A growing marketplace platform needed a customer-facing shop and a separate B2B admin platform, both reading and writing the same data, without a dedicated backend team.",
        approach:
          "Initiated a five-phase engineering roadmap: cleared production-blocking auth and data bugs, then hardened the system with a full security audit, migration tracking, and resilient auth handling.",
        impact:
          "Two independently deployable apps share one Postgres database safely, with documented migrations and a hardened auth layer.",

    },
  },
  {
    slug: "nhl-analytics-pipeline",
    title: "NHL Sports Betting Analytics Pipeline",
    tagline: "End-to-end pipeline: ingestion, Elo modeling, live market edge detection",
    stat: "3 markets priced: moneyline, spread, totals",
    tags: ["Python", "Elo modeling", "TheOddsAPI"],
    size: "medium",
    hasDiagram: true,
    caseStudy: {
      problem:
        "Wanted to test whether a from-scratch statistical model could identify pricing inefficiencies against live sportsbook markets.",
      approach:
        "Built automated schedule/results ingestion, an Elo rating engine for team strength, and live odds integration, then computed edge by comparing model prices to market lines.",
      impact:
        "A working, extensible pipeline now being stabilized into a v2 with scheduled runs and a results dashboard.",

    },
  },
  {
    slug: "vaxcare-rcm-automation",
    title: "VaxCare RCM Automation & Audit",
    tagline: "Rebuilt legacy workflows and ad hoc scripts into standardized, audited processes",
    tags: ["SQL", "Python", "Power BI"],
    size: "medium",
    hasDiagram: false,
    caseStudy: {
      problem: 
        "A 2+ year untouched appeals workflow plus an ad hoc, legacy billing auditing script were slowing down a sub team of the revenue cycle department.",
      approach:
        "Rebuilt the appeals workflow with key stakeholders end-to-end, and reverse-engineered the legacy audit script into a standardized, repaeatable process.",
      impact:
        "Removed a recurring legacy dependency and modernized a workflow the team relies on daily.",
    },
  },
];