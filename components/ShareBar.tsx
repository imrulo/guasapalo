"use client";

import { useSyncExternalStore } from "react";
import { CopyLinkButton } from "@/components/CopyLinkButton";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import {
  articleCanonical,
  articleShareText,
  facebookShareUrl,
  whatsappArticleShareUrl,
  xShareUrl,
} from "@/lib/share";

type ShareBarProps = {
  title: string;
  path: string;
  heading?: string;
};

const btn =
  "inline-flex min-h-11 items-center justify-center gap-2 border border-line bg-surface px-3 text-sm font-medium text-cream transition-colors duration-200 hover:border-amber hover:text-amber";

function subscribe() {
  return () => {};
}

function getShareSnapshot() {
  return typeof navigator.share === "function";
}

function getShareServerSnapshot() {
  return false;
}

export function ShareBar({
  title,
  path,
  heading = "Mándalo a un pana",
}: ShareBarProps) {
  const canNativeShare = useSyncExternalStore(
    subscribe,
    getShareSnapshot,
    getShareServerSnapshot,
  );
  const url = articleCanonical(path);
  const text = articleShareText(title, path);

  async function nativeShare() {
    try {
      await navigator.share({
        title,
        text: `Lee esto: ${title}\nEntra a guasapalo.com`,
        url,
      });
    } catch {
      // Usuario canceló o el navegador no completó el share.
    }
  }

  return (
    <div>
      <p className="text-xs font-medium tracking-[0.18em] text-amber uppercase">
        {heading}
      </p>
      <ul className="mt-3 flex flex-wrap gap-2">
        <li>
          <a
            href={whatsappArticleShareUrl(title, path)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir por WhatsApp"
            className={btn}
          >
            <WhatsAppIcon className="h-4 w-4 text-wa" />
            WhatsApp
          </a>
        </li>
        <li>
          <a
            href={xShareUrl(title, path)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir en X"
            className={btn}
          >
            <XIcon />
            X
          </a>
        </li>
        <li>
          <a
            href={facebookShareUrl(path)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir en Facebook"
            className={btn}
          >
            <FacebookIcon />
            Facebook
          </a>
        </li>
        <li>
          <CopyLinkButton url={url} />
        </li>
        {canNativeShare ? (
          <li>
            <button
              type="button"
              onClick={nativeShare}
              aria-label="Enviar con las apps del teléfono"
              className={btn}
            >
              <SendIcon />
              Enviar
            </button>
          </li>
        ) : null}
      </ul>
      <p className="sr-only">{text}</p>
    </div>
  );
}

function XIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.59l-5.16-6.74L5.2 22H1.94l8.02-9.16L1.5 2h6.76l4.66 6.18L18.244 2Zm-1.16 18.06h1.81L7.01 3.85H5.07l12.014 16.21Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1Z" />
    </svg>
  );
}

function SendIcon() {
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
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22 11 13 2 9 22 2Z" />
    </svg>
  );
}
