import type { MetadataRoute } from "next";
import { guides } from "@/lib/guides";
import { site } from "@/lib/site";
import { womenGuides } from "@/lib/women-guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticRoutes = [
    "",
    "/sesion",
    "/guias",
    "/mujeres",
    "/faq",
    "/aviso",
    "/privacidad",
  ].map((path) => ({
    url: `${site.url}${path || "/"}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const guideRoutes = guides.map((guide) => ({
    url: `${site.url}/guias/${guide.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const womenRoutes = womenGuides.map((guide) => ({
    url: `${site.url}/mujeres/${guide.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...guideRoutes, ...womenRoutes];
}
