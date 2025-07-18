// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	routeRules: { "/": { prerender: true }, "/blogs/**": { prerender: true } },
	nitro: {
		prerender: {
			crawlLinks: true,
			routes: ["/sitemap.xml", "/robots.txt"] 
		}
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
		"@nuxthq/studio",
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
		highlight: {
			theme: "github-dark",
		},
	},
	colorMode: {
		preference: "dark",
		fallback: "dark",
		storage: "localStorage",
		classSuffix: "",
	},
	site: {
		url: 'https://parsajr.org',
		name: 'Parsa Javan',
	},
	image: {
		format: ['webp'],
	},
	compatibilityDate: "2024-09-08",
});
