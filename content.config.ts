import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
	collections: {
		blogs: defineCollection({
			type: 'page',
			source: 'blogs/**.md',
			schema: z.object({
				tags: z.array(z.string()),
				date: z.string(),
				image: z.string(),
				draft: z.boolean(),
			})
		})
	}
})
