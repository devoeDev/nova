import { useEffect, useRef, useState } from "react";

export function useReveal<T extends HTMLElement>(threshold = 0.14) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const supportsObserver = "IntersectionObserver" in window;

    if (reducedMotion || !supportsObserver) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      {
        threshold,
        rootMargin: "0px 0px -45px 0px",
      },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}
