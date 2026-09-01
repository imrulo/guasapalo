import type { ReactNode } from "react";
import Link from "next/link";

type Variant = "amber" | "wine" | "line";

function variantClass(variant: Variant): string {
  switch (variant) {
    case "amber":
      return "bg-amber text-night hover:bg-cream";
    case "wine":
      return "bg-wine text-cream hover:bg-cream hover:text-night";
    case "line":
      return "border border-amber bg-transparent text-cream hover:bg-amber hover:text-night";
    default: {
      const exhaustive: never = variant;
      return exhaustive;
    }
  }
}

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  block?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "wine",
  className = "",
  block = false,
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http");
  const classes = `inline-flex min-h-12 items-center justify-center px-6 text-[0.9375rem] font-medium tracking-wide transition-colors duration-200 ${variantClass(variant)} ${block ? "w-full sm:w-auto" : ""} ${className}`;

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
