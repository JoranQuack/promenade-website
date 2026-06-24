import { defineType, defineField } from "sanity";

export default defineType({
  name: "about",
  title: "About Page",
  type: "document",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      description: "Small label above the heading, e.g. \"WHO WE ARE\".",
    }),
    defineField({ name: "heading", title: "Heading", type: "string" }),
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
    defineField({
      name: "intro",
      title: "Intro Paragraph",
      type: "text",
      description: "Shown as the large lead text over the banner.",
    }),
    defineField({
      name: "body",
      title: "Body Paragraph",
      type: "text",
      description: "Shown below the banner, above the member grid.",
    }),
  ],
});
