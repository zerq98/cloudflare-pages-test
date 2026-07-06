import type { MetadataRoute } from "next";
import { site } from "@/app/_data/content";

export const dynamic = "force-static";

const lastModified = "2026-07-06";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/checklista`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/slownik`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
