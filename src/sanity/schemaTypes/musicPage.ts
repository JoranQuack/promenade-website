import { defineField, defineType } from "sanity";

export default defineType({
  name: "musicPage",
  title: "Music Page",
  type: "document",
  fields: [
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "heroImagePath",
      title: "Hero Image Path",
      type: "string",
      description: "Path in /public, e.g. /music.jpg",
    }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "intro", title: "Intro", type: "text" }),
  ],
  initialValue: {
    heroImagePath: "/music.jpg",
    title: "Music",
    intro: "Listen to and explore our music releases below! More coming soon.",
  },
});
