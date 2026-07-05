import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID ?? "jdls3x4j",
  dataset: import.meta.env.PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION ?? "2024-01-01",
  useCdn: true,
});

// ── Servicios ────────────────────────────────────────────────────────────────
export const servicesQuery = `*[_type == "service"] | order(order asc) {
  title,
  "slug": slug.current,
  category,
  description,
  longDescription,
  benefits,
  "image": image.asset->url,
  featured,
  bacEligible
}`;

export const serviceBySlugQuery = `*[_type == "service" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  category,
  description,
  longDescription,
  benefits,
  "image": image.asset->url,
  featured,
  bacEligible
}`;

// ── Blog posts de Vecinos Plus ───────────────────────────────────────────────
// El dataset "production" es compartido entre varios proyectos demo (autos,
// belleza, regalos corporativos, dental, mudanzas, etc.) y los posts no siempre
// tienen "project" o "categories" asignados. Para evitar mostrar contenido de
// otros clientes en el blog de Vecinos Plus, filtramos por los slugs propios
// conocidos en vez de usar `!defined(project)` (que también incluiría posts
// sin marca). Si se agregan artículos nuevos en el Studio, súmalos a esta lista.
const vecinosPlusPostSlugs: string[] = [
  "mudanza-sin-estres",
  "informacion-para-cotizar",
  "mudanza-en-ph-apartamento",
];

// Imágenes de respaldo por slug para posts que no tengan mainImage cargado en
// Sanity Studio (los 3 posts actuales no tienen imagen subida en el Studio).
export const vecinosPlusPostFallbackImages: Record<string, string> = {
  "mudanza-sin-estres": "/images/blog/mudanza-sin-estres.jpg",
  "informacion-para-cotizar": "/images/blog/informacion-para-cotizar.jpg",
  "mudanza-en-ph-apartamento": "/images/blog/mudanza-en-ph-apartamento.jpg",
};

export const blogPostsQuery = `*[_type == "post" && slug.current in $slugs] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  readTime,
  "imageUrl": mainImage.asset->url
}`;

export const blogPostsParams = { slugs: vecinosPlusPostSlugs };

export const blogPostBySlugQuery = `*[_type == "post" && slug.current in $slugs && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  readTime,
  body,
  "imageUrl": mainImage.asset->url
}`;

// ── Types ────────────────────────────────────────────────────────────────────
export type SanityPost = {
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  readTime?: string | number;
  body?: SanityBlock[];
  imageUrl?: string | null;
};

export type SanityBlock = {
  _type: string;
  _key: string;
  style?: string;
  listItem?: string;
  level?: number;
  children?: { _type: string; _key: string; text: string; marks: string[] }[];
  markDefs?: { _key: string; _type: string; href?: string }[];
};
