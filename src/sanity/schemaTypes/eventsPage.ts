import { defineField, defineType } from "sanity";

export default defineType({
  name: "eventsPage",
  title: "Events Page",
  type: "document",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      description: "Small label above the heading, e.g. \"ON STAGE\".",
    }),
    defineField({
      name: "heroVideo",
      title: "Background Video",
      type: "file",
      options: { accept: "video/*" },
      description:
        "Looping, muted background video for this section's banner. Optional — the hero image is used if no video is set.",
    }),
    defineField({
      name: "heroImage",
      title: "Background Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "intro", title: "Intro", type: "text" }),
  ],
});
