import { site } from "@/lib/site";

export function articleCanonical(path: string): string {
  return `${site.url}${path}`;
}

export function articleShareText(title: string, path: string): string {
  return `Lee esto: ${title} — ${articleCanonical(path)}\nEntra a guasapalo.com`;
}

export function whatsappArticleShareUrl(title: string, path: string): string {
  return `https://wa.me/?text=${encodeURIComponent(articleShareText(title, path))}`;
}

export function xShareUrl(title: string, path: string): string {
  const url = articleCanonical(path);
  const text = `Lee esto: ${title}`;
  return `https://x.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
}

export function facebookShareUrl(path: string): string {
  return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleCanonical(path))}`;
}

export function guideCanonical(slug: string): string {
  return articleCanonical(`/guias/${slug}`);
}

export function womenGuideCanonical(slug: string): string {
  return articleCanonical(`/mujeres/${slug}`);
}
