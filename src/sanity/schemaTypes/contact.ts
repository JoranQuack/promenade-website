import { defineType, defineField } from "sanity";

export default defineType({
  name: "contact",
  title: "Contact Page",
  type: "document",
  fields: [
    defineField({ name: "email", title: "Email Address", type: "string" }),
    defineField({ name: "intro", title: "Intro Text", type: "text" }),
  ],
});
