import { defineType, defineField } from "sanity";

export const blogPostSchema = defineType({
  name: "post",
  title: "Artículo del Blog",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Título", type: "string" }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    }),
    defineField({
      name: "publishedAt",
      title: "Fecha de publicación",
      type: "datetime",
    }),
    defineField({
      name: "readTime",
      title: "Tiempo de lectura (minutos)",
      type: "number",
    }),
    defineField({
      name: "excerpt",
      title: "Resumen",
      type: "text",
      rows: 3,
      description: "Breve descripción que aparece en la lista del blog",
    }),
    defineField({
      name: "mainImage",
      title: "Imagen principal",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", title: "Texto alternativo", type: "string" }),
      ],
    }),
    defineField({
      name: "body",
      title: "Contenido",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    }),
    defineField({
      name: "categories",
      title: "Categorías",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    select: { title: "title", media: "mainImage", subtitle: "publishedAt" },
  },
});
