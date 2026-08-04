import {defineField, defineType} from "sanity";

export const googleReview = defineType({
  name: "googleReview",
  title: "Google Review",
  type: "document",
  fields: [
    defineField({
      name: "authorName",
      title: "Reviewer Name",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "rating",
      title: "Star Rating",
      type: "number",
      initialValue: 5,
      validation: (rule) => rule.required().min(1).max(5)
    }),
    defineField({
      name: "reviewText",
      title: "Review Text",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "publishedLabel",
      title: "Published Label",
      description: "Example: 2 months ago, Jan 2026, or copied from Google.",
      type: "string"
    }),
    defineField({
      name: "reviewUrl",
      title: "Google Review URL",
      description: "Optional link to the original Google review or the salon's Google reviews page.",
      type: "url"
    }),
    defineField({
      name: "locationName",
      title: "Location Name",
      description: "Example: Stoney Creek or Welland.",
      type: "string"
    }),
    defineField({
      name: "featured",
      title: "Show on Homepage",
      type: "boolean",
      initialValue: true
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0
    })
  ],
  preview: {
    select: {
      title: "authorName",
      subtitle: "reviewText",
      rating: "rating"
    },
    prepare(selection) {
      return {
        title: `${selection.title ?? "Google Review"} - ${selection.rating ?? 5} stars`,
        subtitle: selection.subtitle
      };
    }
  }
});
