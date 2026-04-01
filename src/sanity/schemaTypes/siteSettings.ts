import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "siteTitle", title: "Site Title", type: "string" }),
    defineField({
      name: "siteDescription",
      title: "Site Description",
      type: "text",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "logoPath",
      title: "Logo Path",
      type: "string",
      description: "Path in /public, e.g. /logo.png",
    }),
    defineField({
      name: "navigation",
      title: "Navigation",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "href", title: "Link", type: "string" }),
            defineField({
              name: "openInNewTab",
              title: "Open In New Tab",
              type: "boolean",
              initialValue: false,
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "href",
            },
          },
        }),
      ],
    }),
  ],
  initialValue: {
    siteTitle: "Promenade Quartet",
    siteDescription:
      "Promenade is a barbershop quartet based in Christchurch, New Zealand.",
    logoPath: "/logo.png",
    navigation: [
      { title: "HOME", href: "/", openInNewTab: false },
      { title: "ABOUT", href: "/about", openInNewTab: false },
      { title: "MUSIC", href: "/music", openInNewTab: false },
      { title: "EVENTS", href: "/events", openInNewTab: false },
      { title: "CONTACT", href: "/contact", openInNewTab: false },
      {
        title: "SHOP ↗",
        href: "https://promenadequartet.digitees.co.nz/",
        openInNewTab: true,
      },
    ],
  },
});
