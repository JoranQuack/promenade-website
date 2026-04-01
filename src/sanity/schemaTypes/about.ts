import { defineType, defineField } from "sanity";

export default defineType({
  name: "about",
  title: "About Page",
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
      description: "Path in /public, e.g. /about.jpg",
    }),
    defineField({ name: "intro", title: "Intro Paragraph", type: "text" }),
    defineField({ name: "body", title: "Body Paragraph", type: "text" }),
  ],
  initialValue: {
    heroImagePath: "/about.jpg",
    intro:
      "We are a barbershop quartet based in Christchurch, New Zealand, dedicated to bringing joy through music and harmony and friendship and community and music.",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aspernatur aliquam eius quod unde, nemo qui, autem, nulla asperiores consectetur esse architecto? Perspiciatis commodi, ullam rem iusto voluptatum modi hic? Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quae amet eaque, neque at dolor. Vero commodi officiis temporibus quo ut labore atque alias ab. Ad voluptas ipsam minima incidunt?",
  },
});
