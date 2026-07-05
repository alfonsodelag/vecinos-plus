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
// sin marca). Todavía no hay artículos de Vecinos Plus cargados en Sanity
// Studio, así que esta lista empieza vacía y el blog usa los posts estáticos
// de src/content/blog.ts como fuente mientras tanto. Si se agregan artículos
// nuevos en el Studio, súmalos a esta lista.
const vecinosPlusPostSlugs: string[] = [];

// Imágenes de respaldo por slug para posts que no tengan mainImage cargado en
// Sanity Studio. Vacío por ahora: no hay posts propios en el dataset compartido.
export const vecinosPlusPostFallbackImages: Record<string, string> = {};

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
  children?: { _type: string; _key: string; text: string; marks: string[] }[];
  markDefs?: { _key: string; _type: string; href?: string }[];
};
