"use client";

import { useState } from "react";

type CopyLinkButtonProps = {
  url: string;
  compact?: boolean;
  className?: string;
};

export function CopyLinkButton({
  url,
  compact = false,
  className = "",
}: CopyLinkButtonProps) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const input = document.createElement("input");
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  if (compact) {
    return (
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Enlace copiado" : "Copiar enlace"}
        className={`inline-flex min-h-11 min-w-11 items-center justify-center border border-line bg-night-2 text-cream transition-colors duration-200 hover:border-amber hover:text-amber ${className}`}
      >
        {copied ? (
          <span className="px-1 text-[0.65rem] font-medium tracking-wide whitespace-nowrap">
            Copiado
          </span>
        ) : (
          <CopyIcon />
        )}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Enlace copiado" : "Copiar enlace"}
      className={`inline-flex min-h-11 items-center justify-center gap-2 border border-line bg-surface px-3 text-sm font-medium text-cream transition-colors duration-200 hover:border-amber hover:text-amber ${className}`}
    >
      <CopyIcon />
      {copied ? "Copiado" : "Copiar enlace"}
    </button>
  );
}

function CopyIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}
