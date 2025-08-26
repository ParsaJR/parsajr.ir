import vsharp from 'vite-plugin-vsharp';


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	nitro: {
		prerender: {
			crawlLinks: true,
			routes: ['/'],
		},
	},
	app: {
		head: {
			htmlAttrs: {
				lang: 'en'
			}
		}
	},
	experimental: { payloadExtraction: true },
	modules: [
		"@nuxt/content",
		"@nuxt/fonts",
		"@nuxt/icon",
		"@nuxtjs/tailwindcss",
		"@nuxt/image",
		"@nuxtjs/color-mode",
		"@nuxtjs/robots",
		"@nuxtjs/sitemap"
	],
	tailwindcss: {
		config: {
			theme: {
				extend: {
					colors: {
						bg_primary_dark: "#19191c",
						text_primary_dark: "#ffffff",
						text_secondary_dark: "#0470d5",
						bg_primary_light: "#ffffff",
						text_primary_light: "#19191c"
					},
				},
			},
		},
	},
	content: {
		preview: {
			api: 'https://api.nuxt.studio',
			gitInfo: {
				name: 'parsajr.ir',
				owner: 'ParsaJR',
				url: 'https://github.com/ParsaJR/parsajr.ir'
			}
		},
	},
	colorMode: {
		preference: "dark",
		fallback: "dark",
		storage: "localStorage",
		classSuffix: "",
	},
	site: {
		url: 'https://parsajr.ir',
		name: 'Parsa Javan',
	},
	image: {
		format: ['webp'],
	},
	compatibilityDate: "2024-09-08",
});
