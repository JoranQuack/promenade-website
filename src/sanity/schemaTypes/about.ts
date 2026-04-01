import { defineType, defineField } from "sanity";

export default defineType({
  name: "about",
  title: "About Page",
  type: "document",
  fields: [
    defineField({ name: "intro", title: "Intro Paragraph", type: "text" }),
    defineField({ name: "body", title: "Body Paragraph", type: "text" }),
  ],
});
