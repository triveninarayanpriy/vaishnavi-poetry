import { defineType, defineField } from "sanity";

export default defineType({
  name: "poem",
  title: "Poem",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      title: "Poem Body",
      type: "blockContent",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "theme",
      title: "Theme",
      type: "string",
      options: {
        list: [
          { title: "Elegant Light", value: "elegant-light" },
          { title: "Dark Academia", value: "dark-academia" },
          { title: "Vintage Typewriter", value: "vintage-typewriter" },
        ],
      },
      initialValue: "elegant-light",
    }),
    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt (for card preview)",
      type: "text",
      rows: 3,
    }),
  ],
  preview: {
    select: {
      title: "title",
      image: "coverImage",
      theme: "theme",
    },
    prepare(selection: any) {
      return {
        title: selection.title,
        media: selection.image,
        subtitle: `Theme: ${selection.theme || "elegant-light"}`,
      };
    },
  },
});
