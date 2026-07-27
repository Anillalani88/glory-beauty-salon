import {defineArrayMember, defineField, defineType} from "sanity";

export const service = defineType({
  name: "service",
  title: "Services",
  type: "document",
  fields: [
    defineField({name: "id", title: "Service ID", type: "string", validation: (rule) => rule.required()}),
    defineField({name: "code", title: "Service Code", type: "string"}),
    defineField({name: "slug", title: "Slug", type: "slug", options: {source: "name"}, validation: (rule) => rule.required()}),
    defineField({name: "name", title: "Name", type: "string", validation: (rule) => rule.required()}),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{type: "serviceCategory"}],
      validation: (rule) => rule.required()
    }),
    defineField({name: "shortDescription", title: "Short Description", type: "text", rows: 2}),
    defineField({name: "fullDescription", title: "Full Description", type: "text", rows: 5}),
    defineField({name: "fallbackImage", title: "Fallback Image Path", type: "string"}),
    defineField({name: "image", title: "CMS Image", type: "image", options: {hotspot: true}}),
    defineField({name: "imageAlt", title: "Image Alt Text", type: "string"}),
    defineField({name: "order", title: "Display Order", type: "number"}),
    defineField({name: "womenOnly", title: "Women Only", type: "boolean", initialValue: true}),
    defineField({name: "featured", title: "Featured", type: "boolean", initialValue: false}),
    defineField({name: "priceNote", title: "Price Note", type: "string"}),
    defineField({
      name: "locationPrices",
      title: "Location Prices",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "locationId",
              title: "Location",
              type: "string",
              options: {
                list: [
                  {title: "Stoney Creek", value: "stoney-creek"},
                  {title: "Welland", value: "welland"}
                ]
              }
            }),
            defineField({name: "price", title: "Price CAD", type: "number"}),
            defineField({name: "available", title: "Available", type: "boolean", initialValue: true}),
            defineField({name: "note", title: "Note", type: "string"})
          ],
          preview: {
            select: {title: "locationId", price: "price"},
            prepare: ({title, price}) => ({title, subtitle: price === undefined ? "No price" : `$${price}`})
          }
        })
      ]
    })
  ],
  orderings: [
    {
      title: "Category and Order",
      name: "categoryOrderAsc",
      by: [
        {field: "category.name", direction: "asc"},
        {field: "order", direction: "asc"}
      ]
    }
  ],
  preview: {
    select: {title: "name", category: "category.name", media: "image"},
    prepare: ({title, category, media}) => ({title, subtitle: category, media})
  }
});
