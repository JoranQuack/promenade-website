import { defineType, defineField } from "sanity";

export default defineType({
  name: "contact",
  title: "Contact Page",
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
      description: "Path in /public, e.g. /contact.jpg",
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
  initialValue: {
    heroImagePath: "/contact.jpg",
    title: "Contact",
    email: "info@promenadequartet.com",
    intro: "For bookings and inquiries, please email us at",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    submitLabel: "Send",
  },
});
