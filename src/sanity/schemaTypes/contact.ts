import { defineType, defineField } from "sanity";

export default defineType({
  name: "contact",
  title: "Contact Page",
  type: "document",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      description: "Small label above the heading, e.g. \"GET IN TOUCH\".",
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
    defineField({ name: "email", title: "Email Address", type: "string" }),
    defineField({ name: "intro", title: "Intro Text", type: "text" }),
    defineField({ name: "nameLabel", title: "Name Label", type: "string" }),
    defineField({ name: "emailLabel", title: "Email Label", type: "string" }),
    defineField({
      name: "messageLabel",
      title: "Message Label",
      type: "string",
    }),
    defineField({
      name: "submitLabel",
      title: "Submit Button Label",
      type: "string",
    }),
  ],
});
