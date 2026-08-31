import { jsonLd } from "@/lib/site";

export function JsonLd() {
  const data = jsonLd();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
