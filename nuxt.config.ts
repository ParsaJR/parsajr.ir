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
	fonts: {
		defaults: {
			weights: [300,400,700],
			styles: ['normal','italic'],
		}
	},
	modules: [
		"@nuxt/content",
		"@nuxt/fonts",
		"@nuxt/icon",
		"@nuxtjs/tailwindcss",
		"@nuxt/image",
		"@nuxtjs/color-mode",
		"@nuxtjs/robots",
		"@nuxtjs/sitemap",
		"@nuxtjs/i18n",
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
		build: {
			markdown: {
				highlight: {
					theme: 'github-dark',
				}
			}
		}
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
	css: ['~/assets/css/tailwind.css'],
	i18n: {
		locales: [
			{ code: 'en', name: 'English', language: 'en-US', dir: 'ltr' },
			{ code: 'fa', name: 'Farsi', language: 'fa-IR', dir: 'rtl' }
		],
		defaultLocale: 'en',
		strategy: 'prefix_except_default',
		detectBrowserLanguage: {
			useCookie: false,
		}
	}
});
