import { Section } from "./Section";
import { ExternalLink } from "./ExternalLink";
import { ArrowIcon, GitHubIcon, LinkedInIcon } from "./icons";
import { site } from "@/data/site";

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-xl text-lg leading-relaxed text-foreground">
        Envie d&apos;échanger sur un projet, un stage ou une opportunité ?
        Retrouve-moi ici&nbsp;:
      </p>
      <ul className="mt-8 flex flex-col divide-y divide-border border-y border-border">
        {site.email && (
          <li>
            <a
              href={`mailto:${site.email}`}
              className="group flex items-center justify-between py-4 transition-colors hover:text-accent"
            >
              <span className="font-medium">Email</span>
              <span className="flex items-center gap-2 text-muted group-hover:text-accent">
                {site.email}
                <ArrowIcon width={14} height={14} />
              </span>
            </a>
          </li>
        )}
        <li>
          <ExternalLink
            href={site.links.github}
            className="group flex items-center justify-between py-4 transition-colors hover:text-accent"
          >
            <span className="flex items-center gap-2 font-medium">
              <GitHubIcon width={18} height={18} />
              GitHub
            </span>
            <span className="flex items-center gap-2 text-muted group-hover:text-accent">
              @Arthur-Buhl
              <ArrowIcon width={14} height={14} />
            </span>
          </ExternalLink>
        </li>
        <li>
          <ExternalLink
            href={site.links.linkedin}
            className="group flex items-center justify-between py-4 transition-colors hover:text-accent"
          >
            <span className="flex items-center gap-2 font-medium">
              <LinkedInIcon width={18} height={18} />
              LinkedIn
            </span>
            <span className="flex items-center gap-2 text-muted group-hover:text-accent">
              Arthur Buhl
              <ArrowIcon width={14} height={14} />
            </span>
          </ExternalLink>
        </li>
      </ul>
    </Section>
  );
}
