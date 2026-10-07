import type { ComponentProps } from "react";

export default function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: ComponentProps<"a"> & { variant?: "primary" | "secondary" }) {
  return (
    <a className={`button button-${variant} ${className}`} {...props}>
      {children}
    </a>
  );
}
