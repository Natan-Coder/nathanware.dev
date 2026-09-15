import Link from "next/link";
import { Project } from "@/lib/projects";

function spanClass(size: Project["size"]) {
  switch (size) {
    case "large":
      return "md:col-span-2 md:row-span-2";
    case "medium":
      return "md:col-span-1 md:row-span-1";
    default:
      return "md:col-span-1";
  }
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group flex flex-col justify-between rounded-lg border border-white/10 bg-surface p-6 transition-colors hover:border-accent/40 ${spanClass(
        project.size
      )}`}
    >
      <div>
        <h3 className="font-[family-name:var(--font-display)] text-xl text-foreground mb-2">
          {project.title}
        </h3>
        <p className="text-foreground-muted text-sm">{project.tagline}</p>
      </div>

      <div className="mt-6">
        {project.stat && (
          <p className="font-mono text-xs text-accent mb-3">{project.stat}</p>
        )}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs text-foreground-muted border border-white/10 rounded px-2 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}