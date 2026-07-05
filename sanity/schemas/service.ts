import { defineType, defineField } from "sanity";

export const serviceSchema = defineType({
  name: "service",
  title: "Servicio",
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
      name: "order",
      title: "Orden",
      type: "number",
      description: "Número para ordenar los servicios (menor = primero)",
    }),
    defineField({
      name: "category",
      title: "Categoría",
      type: "string",
      options: {
        list: [
          { title: "Estética Dental", value: "Estética Dental" },
          { title: "Blanqueamiento", value: "Blanqueamiento" },
          { title: "Ortodoncia", value: "Ortodoncia" },
          { title: "Salud Oral y Prevención", value: "Salud Oral y Prevención" },
          { title: "Cirugía y Especialidades", value: "Cirugía y Especialidades" },
          { title: "Armonización y Estética Facial", value: "Armonización y Estética Facial" },
        ],
      },
    }),
    defineField({
      name: "description",
      title: "Descripción corta",
      type: "text",
      rows: 3,
      description: "1-2 oraciones para la tarjeta del servicio",
    }),
    defineField({
      name: "longDescription",
      title: "Descripción detallada",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "benefits",
      title: "Beneficios",
      type: "array",
      of: [{ type: "string" }],
      description: "Lista de beneficios o puntos clave (máx. 5)",
    }),
    defineField({
      name: "image",
      title: "Imagen",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "featured",
      title: "Destacado en homepage",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "bacEligible",
      title: "Aplica pago BAC en 3 cuotas",
      type: "boolean",
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: "Orden personalizado",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", media: "image", subtitle: "category" },
  },
});
