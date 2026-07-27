import type { CSSProperties, ElementType, HTMLAttributes, ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

type Direction = "up" | "down" | "left" | "right";

interface RevealProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children: ReactNode;
  delay?: number;
  direction?: Direction;
}

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 44 },
  down: { x: 0, y: -44 },
  left: { x: -54, y: 0 },
  right: { x: 54, y: 0 },
};

export function Reveal({
  as: Component = "div",
  children,
  className = "",
  delay = 0,
  direction = "up",
  style,
  ...props
}: RevealProps) {
  const { ref, visible } = useReveal<HTMLElement>();
  const offset = offsets[direction];

  const revealStyle = {
    "--reveal-x": `${offset.x}px`,
    "--reveal-y": `${offset.y}px`,
    "--reveal-delay": `${delay}ms`,
    ...style,
  } as CSSProperties;

  return (
    <Component
      ref={ref}
      className={`react-reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={revealStyle}
      {...props}
    >
      {children}
    </Component>
  );
}
