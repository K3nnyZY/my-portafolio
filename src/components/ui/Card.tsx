import type { ComponentProps } from "react";

export default function Card({
  className = "",
  children,
  ...props
}: ComponentProps<"article">) {
  return (
    <article className={`card ${className}`} {...props}>
      {children}
    </article>
  );
}
