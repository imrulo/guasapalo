import type { ReactNode } from "react";
import { waMessages, waUrl } from "@/lib/site";

type Variant = "amber" | "line" | "ghost" | "float";

function variantClass(variant: Variant): string {
  switch (variant) {
    case "amber":
      return "inline-flex min-h-11 items-center justify-center px-6 text-[0.9375rem] font-medium tracking-wide bg-amber text-night transition-colors duration-200 hover:bg-cream";
    case "line":
      return "inline-flex min-h-11 items-center justify-center px-6 text-[0.9375rem] font-medium tracking-wide border border-line bg-transparent text-cream transition-colors duration-200 hover:border-amber hover:text-amber";
    case "ghost":
      return "inline-flex min-h-11 items-center justify-center text-[0.9375rem] font-medium tracking-wide bg-transparent px-0 text-cream underline decoration-amber/70 underline-offset-4 transition-colors duration-200 hover:text-amber";
    case "float":
      return "inline-flex h-14 w-14 min-h-14 items-center justify-center rounded-full border border-line bg-surface p-0 text-wa shadow-[0_8px_30px_rgba(0,0,0,0.45)] transition-colors duration-200 hover:border-amber hover:bg-night-2";
    default: {
      const exhaustive: never = variant;
      return exhaustive;
    }
  }
}

type WhatsAppCtaProps = {
  children: ReactNode;
  message?: string;
  variant?: Variant;
  className?: string;
  block?: boolean;
  "aria-label"?: string;
};

export function WhatsAppCta({
  children,
  message = waMessages.default,
  variant = "amber",
  className = "",
  block = false,
  "aria-label": ariaLabel,
}: WhatsAppCtaProps) {
  return (
    <a
      href={waUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`${variantClass(variant)} ${block ? "w-full sm:w-auto" : ""} ${className}`}
    >
      {children}
    </a>
  );
}
