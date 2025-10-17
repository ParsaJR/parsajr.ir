import { defineCollection, defineContentConfig, z } from "@nuxt/content";


// commonSchema is used in both english and persian collection.
const commonSchema = z.object({
	tags: z.array(z.string()),
	// TODO: date should be a Actual "Date" type. for better nuxt-studio
	// developer-experience.(Mayble it also will be problematic for seo?
	// how does google reads the release date of the posts?)
	date: z.string(),
	image: z.string(),
	draft: z.boolean(),
})

export default defineContentConfig({
	collections: {
		// English content collection
		content_en: defineCollection({
			type: 'page',
			source: {
				include: 'en/**',
				prefix: '',
			},
			schema: commonSchema,
		}),
		// Persian content collection
		content_fa: defineCollection({
			type: 'page',
			source: {
				include: 'fa/**',
				prefix: '',
			},
			schema: commonSchema,
		}),
	}
})
