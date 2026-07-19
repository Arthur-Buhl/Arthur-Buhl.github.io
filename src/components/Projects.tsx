import { Section } from "./Section";
import { ExternalLink } from "./ExternalLink";
import { ArrowIcon, GitHubIcon } from "./icons";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <Section id="projets" title="Projets">
      <ul className="flex flex-col divide-y divide-border border-y border-border">
        {projects.map((project) => (
          <li
            key={project.title}
            className="group py-8 first:pt-0 last:pb-0"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-medium text-foreground">
                {project.title}
              </h3>
              {project.repo && (
                <ExternalLink
                  href={project.repo}
                  aria-label={`Code source de ${project.title} sur GitHub`}
                  className="mt-1 shrink-0 text-muted transition-colors hover:text-foreground"
                >
                  <GitHubIcon width={18} height={18} />
                </ExternalLink>
              )}
            </div>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
              <ul className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full bg-surface px-2.5 py-1 font-mono text-xs text-muted ring-1 ring-border"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              {project.demo && (
                <ExternalLink
                  href={project.demo}
                  className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-opacity hover:opacity-70"
                >
                  Démo
                  <ArrowIcon width={14} height={14} />
                </ExternalLink>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
