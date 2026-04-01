import { defineType, defineField } from "sanity";

export default defineType({
  name: "track",
  title: "Music Track",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "audioPath",
      title: "Local Audio Path",
      type: "string",
      description: "Path in /public, e.g. /audio/harmony-road.mp3",
    }),
    defineField({
      name: "audioFile",
      title: "Audio File",
      type: "file",
      options: { accept: "audio/*" },
    }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
});
