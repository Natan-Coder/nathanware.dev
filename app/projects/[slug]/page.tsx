import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { parseAppSegmentConfig } from "next/dist/build/segment-config/app/app-segment-config";
import { SolecitDiagram } from "@/components/diagrams/SolecitDiagram";
import { NHLPipelineDiagram } from "@/components/diagrams/NHLPipelineDiagram";

const diagrams: Record<string, React.ComponentType> = {
  "solecit-platform": SolecitDiagram,
  "nhl-analytics-pipeline": NHLPipelineDiagram,
};

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string}>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

 return (
    <main className="flex-1 px-6 md:px-16 py-24 max-w-3xl">
      <Link
        href="/"
        className="font-mono text-sm text-accent hover:underline"
      >
        ← Back
      </Link>

      <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl text-foreground mt-6 mb-3">
        {project.title}
      </h1>
      <p className="text-foreground-muted text-lg mb-2">{project.tagline}</p>

      <div className="flex flex-wrap gap-2 mb-12">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs text-foreground-muted border border-white/10 rounded px-2 py-1"
          >
            {tag}
          </span>
        ))}
      </div>

      {project.hasDiagram && diagrams[project.slug] && (
        <div className="mb-12 border border-white/10 rounded-lg p-6 bg-surface/40">
          {(() => {
            const Diagram = diagrams[project.slug];
            return <Diagram />;
          })()}
        </div>
       )}

      <div className="space-y-10">
        <section>
          <h2 className="font-mono text-xs text-accent mb-2">Problem</h2>
          <p className="text-foreground leading-relaxed">
            {project.caseStudy.problem}
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xs text-accent mb-2">Approach</h2>
          <p className="text-foreground leading-relaxed">
            {project.caseStudy.approach}
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xs text-accent mb-2">Impact</h2>
          <p className="text-foreground leading-relaxed">
            {project.caseStudy.impact}
          </p>
        </section>
      </div>
    </main>
  );
}