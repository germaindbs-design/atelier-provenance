import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://atelier-provenance.vercel.app";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/mentions-legales`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/cgv`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
