import { defineType, defineField } from "sanity";

export default defineType({
  name: "member",
  title: "Member",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "voice", title: "Voice Part", type: "string" }),
    defineField({ name: "bio", title: "Bio", type: "text" }),
    defineField({ name: "photo", title: "Photo", type: "image", options: { hotspot: true } }),
    defineField({ name: "website", title: "Website URL", type: "url" }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
});
