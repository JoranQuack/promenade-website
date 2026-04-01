import { defineType, defineField } from "sanity";

export default defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({ name: "subheading", title: "Subheading", type: "string" }),
  ],
  initialValue: {
    heading: "Welcome to Promenade Quartet",
    subheading: "A barbershop quartet based in Christchurch, New Zealand.",
  },
});
