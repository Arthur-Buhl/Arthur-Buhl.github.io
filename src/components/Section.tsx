import type { ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, title, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-24 border-t border-border py-20 sm:py-28"
    >
      <Container>
        <h2
          id={`${id}-title`}
          className="mb-10 font-mono text-xs uppercase tracking-[0.2em] text-muted"
        >
          {title}
        </h2>
        {children}
      </Container>
    </section>
  );
}
