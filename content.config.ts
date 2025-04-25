import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "**/*.md",
    }),
    project: defineCollection({
      type: "page",
      source: "**/anken/**/*.md",
      schema: z.object({
        sort: z.number(),
        published: z.boolean(),
        link: z.optional(z.string()),
        seoDescription: z.string(),
        tags: z.array(z.string()),
        image: z.string(),
      }),
    }),
  },
});
