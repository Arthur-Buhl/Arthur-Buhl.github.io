import type { AnchorHTMLAttributes, ReactNode } from "react";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "rel" | "target">;

export function ExternalLink({
  href,
  children,
  className,
  ...rest
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...rest}
    >
      {children}
    </a>
  );
}
