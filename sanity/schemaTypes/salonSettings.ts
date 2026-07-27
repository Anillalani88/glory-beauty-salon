import {defineField, defineType} from "sanity";

export const salonSettings = defineType({
  name: "salonSettings",
  title: "Salon Settings",
  type: "document",
  fields: [
    defineField({name: "name", title: "Salon Name", type: "string", validation: (rule) => rule.required()}),
    defineField({name: "tagline", title: "Tagline", type: "text", rows: 3}),
    defineField({name: "demoNotice", title: "Demo Notice", type: "string"}),
    defineField({name: "priceNotice", title: "Price Notice", type: "text", rows: 2}),
    defineField({name: "womenOnlyNotice", title: "Women-Only Service Notice", type: "text", rows: 2}),
    defineField({name: "contactEmail", title: "Contact Email", type: "string"}),
    defineField({name: "squareBookingUrl", title: "Square Booking URL", type: "url"}),
    defineField({
      name: "donation",
      title: "Community Support",
      type: "object",
      fields: [
        defineField({name: "organization", title: "Organization", type: "string"}),
        defineField({name: "amountCad", title: "Donation Amount CAD", type: "number"}),
        defineField({name: "service", title: "Service", type: "string"}),
        defineField({name: "statement", title: "Statement", type: "text", rows: 3})
      ]
    })
  ],
  preview: {
    prepare: () => ({title: "Salon Settings"})
  }
});
