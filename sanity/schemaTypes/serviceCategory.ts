import {defineField, defineType} from "sanity";

export const serviceCategory = defineType({
  name: "serviceCategory",
  title: "Service Categories",
  type: "document",
  fields: [
    defineField({name: "id", title: "Category ID", type: "string", validation: (rule) => rule.required()}),
    defineField({name: "slug", title: "Slug", type: "slug", options: {source: "name"}, validation: (rule) => rule.required()}),
    defineField({name: "name", title: "Name", type: "string", validation: (rule) => rule.required()}),
    defineField({name: "shortDescription", title: "Short Description", type: "text", rows: 2}),
    defineField({name: "description", title: "Description", type: "text", rows: 4}),
    defineField({name: "fallbackImage", title: "Fallback Image Path", type: "string"}),
    defineField({name: "image", title: "CMS Image", type: "image", options: {hotspot: true}}),
    defineField({name: "imageAlt", title: "Image Alt Text", type: "string"}),
    defineField({name: "order", title: "Display Order", type: "number"})
  ],
  orderings: [
    {
      title: "Display Order",
      name: "displayOrderAsc",
      by: [{field: "order", direction: "asc"}]
    }
  ],
  preview: {
    select: {title: "name", subtitle: "shortDescription", media: "image"}
  }
});
