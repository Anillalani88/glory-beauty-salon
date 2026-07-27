import {defineArrayMember, defineField, defineType} from "sanity";

export const location = defineType({
  name: "location",
  title: "Locations",
  type: "document",
  fields: [
    defineField({name: "id", title: "Location ID", type: "string", validation: (rule) => rule.required()}),
    defineField({name: "name", title: "Name", type: "string", validation: (rule) => rule.required()}),
    defineField({name: "status", title: "Status", type: "string"}),
    defineField({
      name: "addressLines",
      title: "Address Lines",
      type: "array",
      of: [defineArrayMember({type: "string"})],
      validation: (rule) => rule.required().min(2)
    }),
    defineField({name: "phone", title: "Phone Digits", type: "string"}),
    defineField({name: "phoneDisplay", title: "Phone Display", type: "string"}),
    defineField({name: "hours", title: "Business Hours", type: "string"}),
    defineField({name: "directionsUrl", title: "Directions URL", type: "url"}),
    defineField({name: "fallbackImage", title: "Fallback Image Path", type: "string"}),
    defineField({name: "image", title: "CMS Image", type: "image", options: {hotspot: true}}),
    defineField({name: "imageAlt", title: "Image Alt Text", type: "string"})
  ],
  preview: {
    select: {title: "name", subtitle: "status", media: "image"}
  }
});
