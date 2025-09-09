import { defineCollection, z } from "astro:content"

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    image: z.string(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false)
  })
})

export const collections = {
  news
}
