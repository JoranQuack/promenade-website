import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "story", title: "Scrolling Story" },
  ],
  fields: [
    defineField({
      name: "heroEyebrow",
      title: "Eyebrow",
      type: "string",
      description: "Small label above the hero heading, e.g. \"A CAPPELLA QUARTET\".",
      group: "hero",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      group: "hero",
    }),
    defineField({
      name: "subheading",
      title: "Subheading",
      type: "text",
      rows: 2,
      group: "hero",
    }),
    defineField({
      name: "heroVideo",
      title: "Background Video",
      type: "file",
      options: { accept: "video/*" },
      description:
        "Looping, muted background video for the hero. Keep it short (a few seconds) and compressed so it loads quickly. Optional — the poster image is used if no video is set.",
      group: "hero",
    }),
    defineField({
      name: "heroPoster",
      title: "Poster Image",
      type: "image",
      options: { hotspot: true },
      description:
        "Shown while the video loads, on slow connections, and as the background if no video is uploaded.",
      group: "hero",
    }),
    defineField({
      name: "scrollSections",
      title: "Scrolling Story Sections",
      type: "array",
      group: "story",
      description:
        "Full-screen sections that play below the hero as the visitor scrolls. Add, remove or reorder as needed.",
      of: [
        defineArrayMember({
          type: "object",
          name: "scrollSection",
          fields: [
            defineField({
              name: "eyebrow",
              title: "Eyebrow",
              type: "string",
              description: "Small label above the heading.",
            }),
            defineField({ name: "heading", title: "Heading", type: "string" }),
            defineField({ name: "body", title: "Body Text", type: "text", rows: 3 }),
            defineField({
              name: "backgroundVideo",
              title: "Background Video",
              type: "file",
              options: { accept: "video/*" },
              description: "Takes priority over the background image when set.",
            }),
            defineField({
              name: "backgroundImage",
              title: "Background Image",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({
              name: "align",
              title: "Text Position",
              type: "string",
              options: {
                list: [
                  { title: "Auto (alternate)", value: "auto" },
                  { title: "Left", value: "left" },
                  { title: "Center", value: "center" },
                  { title: "Right", value: "right" },
                ],
                layout: "radio",
              },
              initialValue: "auto",
            }),
            defineField({
              name: "ctaLabel",
              title: "Button Label",
              type: "string",
            }),
            defineField({
              name: "ctaHref",
              title: "Button Link",
              type: "string",
              description: "e.g. /events or /contact",
            }),
          ],
          preview: {
            select: {
              title: "heading",
              subtitle: "eyebrow",
              media: "backgroundImage",
            },
          },
        }),
      ],
    }),
  ],
});
