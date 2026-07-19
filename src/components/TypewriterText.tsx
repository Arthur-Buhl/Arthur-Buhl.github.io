"use client";

import { useEffect, useLayoutEffect, useState } from "react";

type TypewriterTextProps = {
  text: string | string[];
  speed?: number;
  deleteSpeed?: number;
  pause?: number;
  loop?: boolean;
  className?: string;
  cursorClassName?: string;
};

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function TypewriterText({
  text,
  speed = 90,
  deleteSpeed = 45,
  pause = 1400,
  loop = false,
  className,
  cursorClassName,
}: TypewriterTextProps) {
  const phrases = Array.isArray(text) ? text : [text];
  // Rendu initial (serveur + pré-hydratation) : texte complet -> pas de flash, SEO/no-JS OK.
  const [display, setDisplay] = useState(phrases[0] ?? "");

  useIsomorphicLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(phrases[0] ?? "");
      return;
    }

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;
    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;

    setDisplay("");

    const tick = () => {
      if (cancelled) return;
      const current = phrases[phraseIndex] ?? "";

      if (!deleting) {
        charIndex += 1;
        setDisplay(current.slice(0, charIndex));
        if (charIndex === current.length) {
          const isLast = phraseIndex === phrases.length - 1;
          if (phrases.length === 1 || (!loop && isLast)) return;
          deleting = true;
          timer = setTimeout(tick, pause);
          return;
        }
        timer = setTimeout(tick, speed);
      } else {
        charIndex -= 1;
        setDisplay(current.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          timer = setTimeout(tick, speed);
          return;
        }
        timer = setTimeout(tick, deleteSpeed);
      }
    };

    timer = setTimeout(tick, speed);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [phrases.join(""), speed, deleteSpeed, pause, loop]);

  return (
    <span className={className}>
      <span aria-hidden="true">{display}</span>
      <span
        aria-hidden="true"
        className={`typewriter-cursor ${cursorClassName ?? ""}`}
      >
        |
      </span>
      <span className="sr-only">{phrases.join(", ")}</span>
    </span>
  );
}
