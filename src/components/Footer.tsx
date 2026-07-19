import { Container } from "./Container";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <Container>
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {site.name}
        </p>
      </Container>
    </footer>
  );
}
