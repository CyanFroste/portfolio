import { defineCollection, reference, z } from 'astro:content'
import { glob } from 'astro/loaders'

const blogs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/blogs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    related: z.array(reference('blogs')),
    banner: z.string().optional(),
  }),
})

export const collections = { blogs }
