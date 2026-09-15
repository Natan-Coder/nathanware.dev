import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";


export default function Home() {
  return (
    <>
      <main className="flex-1 px-6 md:px-16 py-24 max-w-5xl">
        <p className="font-mono text-sm text-accent mb-4">
          Software Engineer / Technical Founder
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl leading-tight text-foreground max-w-3xl">
          I build the systems behind the product — and the product behind the company.
        </h1>
        <p className="text-foreground-muted text-lg mt-6 max-w-xl">
          Full-stack engineer working across data, backend, and frontend. Currently
          automating revenue-cycle systems by day and building a two-app marketplace
          platform as founding technical lead.
        </p>
      </main>

      <section className="px-6 md:px-16 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(180px,auto)]">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}