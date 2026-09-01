import { site } from "@/lib/site";

export function guideCanonical(slug: string): string {
  return `${site.url}/guias/${slug}`;
}

export function guideShareText(title: string, slug: string): string {
  return `Lee esto: ${title} — ${guideCanonical(slug)}\nEntra a guasapalo.com`;
}

export function whatsappArticleShareUrl(title: string, slug: string): string {
  return `https://wa.me/?text=${encodeURIComponent(guideShareText(title, slug))}`;
}

export function xShareUrl(title: string, slug: string): string {
  const url = guideCanonical(slug);
  const text = `Lee esto: ${title}`;
  return `https://x.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
}

export function facebookShareUrl(slug: string): string {
  return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(guideCanonical(slug))}`;
}
