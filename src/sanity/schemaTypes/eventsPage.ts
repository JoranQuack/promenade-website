import { defineField, defineType } from "sanity";

export default defineType({
  name: "eventsPage",
  title: "Events Page",
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
      description: "Path in /public, e.g. /events.jpg",
    }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "intro", title: "Intro", type: "text" }),
  ],
  initialValue: {
    heroImagePath: "/events.jpg",
    title: "Events",
    intro: "Stay tuned for upcoming events and performances!",
  },
});
