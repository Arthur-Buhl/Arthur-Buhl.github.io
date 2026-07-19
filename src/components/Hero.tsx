import Image from "next/image";
import { Container } from "./Container";
import { ExternalLink } from "./ExternalLink";
import { TypewriterText } from "./TypewriterText";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section id="top" className="py-24 sm:py-32">
      <Container>
        <div className="flex flex-col-reverse items-start gap-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {site.role}
            </p>
            <h1 className="min-h-[1.2em] text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              <TypewriterText text={site.name} speed={110} />
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              {site.tagline}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ExternalLink
                href={site.links.github}
                aria-label="Profil GitHub d'Arthur Buhl"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-foreground"
              >
                <GitHubIcon width={18} height={18} />
                GitHub
              </ExternalLink>
              <ExternalLink
                href={site.links.linkedin}
                aria-label="Profil LinkedIn d'Arthur Buhl"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-foreground"
              >
                <LinkedInIcon width={18} height={18} />
                LinkedIn
              </ExternalLink>
              <ExternalLink
                href={site.links.epita}
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-foreground"
              >
                EPITA
              </ExternalLink>
            </div>
          </div>
          <div className="shrink-0">
            <Image
              src={site.photo}
              alt={site.photoAlt}
              width={140}
              height={140}
              priority
              className="h-28 w-28 rounded-full object-cover ring-1 ring-border sm:h-36 sm:w-36"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
