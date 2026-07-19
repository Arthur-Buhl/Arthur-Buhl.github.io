import { Section } from "./Section";
import { ArrowIcon } from "./icons";
import { site } from "@/data/site";

export function Cv() {
  return (
    <Section id="cv" title="CV">
      <div className="flex flex-wrap items-center gap-3">
        <a
          href={site.cv}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-foreground"
        >
          Ouvrir le CV
          <ArrowIcon width={14} height={14} />
        </a>
        <a
          href={site.cv}
          download
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-80"
        >
          Télécharger le PDF
        </a>
      </div>

      <div className="mt-8 overflow-hidden rounded-lg border border-border bg-surface">
        <iframe
          src={`${site.cv}#view=FitH`}
          title="CV d'Arthur Buhl"
          loading="lazy"
          className="h-[70vh] max-h-[820px] w-full"
        />
      </div>
    </Section>
  );
}
