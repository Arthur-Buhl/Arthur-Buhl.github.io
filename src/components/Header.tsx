import { Container } from "./Container";
import { site } from "@/data/site";

const navItems = [
  { href: "#projets", label: "Projets" },
  { href: "#cv", label: "CV" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur-md">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <a
            href="#top"
            className="font-mono text-sm font-medium tracking-tight text-foreground transition-opacity hover:opacity-70"
          >
            {site.name}
          </a>
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
